import { broadcastDevReady } from "@remix-run/node";
import path from "path";
import prom from "@isaacs/express-prometheus-middleware";
import { createRequestHandler } from "@remix-run/express";
import { installGlobals } from "@remix-run/node";
import compression from "compression";
import express from "express";
import morgan from "morgan";
import sourceMapSupport from "source-map-support";

sourceMapSupport.install();
installGlobals();

const app = express();
const metricsApp = express();
app.use(
  prom({
    metricsPath: "/metrics",
    collectDefaultMetrics: true,
    metricsApp,
  })
);

app.use((req, res, next) => {
  // helpful headers:
  res.set("x-fly-region", process.env.FLY_REGION ?? "unknown");
  res.set("Strict-Transport-Security", `max-age=${60 * 60 * 24 * 365 * 100}`);

  // /clean-urls/ -> /clean-urls
  if (req.path.endsWith("/") && req.path.length > 1) {
    const query = req.url.slice(req.path.length);
    const safepath = req.path.slice(0, -1).replace(/\/+/g, "/");
    res.redirect(301, safepath + query);
    return;
  }
  next();
});

// if we're not in the primary region, then we need to make sure all
// non-GET/HEAD/OPTIONS requests hit the primary region rather than read-only
// Postgres DBs.
// learn more: https://fly.io/docs/getting-started/multi-region-databases/#replay-the-request
app.all("*", function getReplayResponse(req, res, next) {
  const { method, path: pathname } = req;
  const { PRIMARY_REGION, FLY_REGION } = process.env;

  const isMethodReplayable = !["GET", "OPTIONS", "HEAD"].includes(method);
  const isReadOnlyRegion =
    FLY_REGION && PRIMARY_REGION && FLY_REGION !== PRIMARY_REGION;

  const shouldReplay = isMethodReplayable && isReadOnlyRegion;

  if (!shouldReplay) return next();

  const logInfo = {
    pathname,
    method,
    PRIMARY_REGION,
    FLY_REGION,
  };
  console.info(`Replaying:`, logInfo);
  res.set("fly-replay", `region=${PRIMARY_REGION}`);
  return res.sendStatus(409);
});

app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

// Remix fingerprints its assets so we can cache forever.
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static("public", { maxAge: "1h" }));

app.use(morgan("tiny"));

const MODE = process.env.NODE_ENV;
const BUILD_DIR = path.join(process.cwd(), "build");
const BUILD_FILE = path.resolve(BUILD_DIR, "index.mjs");

// In production, import the build once and reuse it. In dev, bust the import cache.
let prodBuildPromise: Promise<any> | null = null;
if (MODE === "production") {
  prodBuildPromise = import(BUILD_FILE);
}

app.all("*", async (...args) => {
  const build =
    MODE === "production"
      ? await prodBuildPromise!
      : await import(`${BUILD_FILE}?update=${Date.now()}`);
  const requestHandler = createRequestHandler({ build, mode: MODE });
  return requestHandler(...args);
});

const port = process.env.PORT || 3010;

app.listen(port, async () => {
  // require the built app so we're ready when the first request comes in
  await (MODE === "production"
    ? prodBuildPromise
    : import(`${BUILD_FILE}?update=${Date.now()}`));
  console.log(`✅ app ready: http://localhost:${port}`);
  broadcastDevReady(await import(BUILD_FILE));
});

const metricsPort = process.env.METRICS_PORT || 3011;

metricsApp.listen(metricsPort, () => {
  console.log(`✅ metrics ready: http://localhost:${metricsPort}/metrics`);
});

// Note: ESM imports are cached separately; in dev we bust the cache via a query param.
