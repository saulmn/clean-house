import { useEffect } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LoaderFunctionArgs, LinksFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/react";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useNavigation,
} from "@remix-run/react";
import NProgress from "nprogress";
import { getUser } from "@/session.server";
import stylesheet from "@/styles/tailwind.output.css";

import slick from "slick-carousel/slick/slick.css";
import slickTheme from "slick-carousel/slick/slick-theme.css";
import creditCardsStyle from "react-credit-cards-2/dist/es/styles-compiled.css";
import phoneInputStye from "react-phone-number-input/style.css";
import nProgressStyles from "nprogress/nprogress.css";

import * as gtag from "@/utils/gtags.client";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: slick },
  { rel: "stylesheet", href: slickTheme },
  { rel: "stylesheet", href: creditCardsStyle },
  { rel: "stylesheet", href: phoneInputStye },
  { rel: "stylesheet", href: nProgressStyles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: MetaFunction = () => {
  return [
    {
      title: "Finlab - Remix Full Stack Client and Admin Finance Template",
    },
    {
      name: "description",
      content:
        "The ultimate finance client, admin & dashboard template built with Remix, shadcn/ui and prisma.",
    },
    {
      name: "keywords",
      content:
        "react,remix,kit,prisma,tailwind,application,dashboard,admin,template,theme",
    },
    {
      name: "author",
      content: "Diakitelo",
    },
    {
      name: "copyright",
      content: "Remix Templates",
    },
    {
      name: "theme-color",
      content: "#31B099",
    },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    user: await getUser(request),
    gaTrackingId: process.env.GA_TRACKING_ID,
  });
};

export default function App() {
  const location = useLocation();
  const navigation = useNavigation();
  const { gaTrackingId } = useLoaderData<typeof loader>();
  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }

    if (navigation.state === "idle") NProgress.done();
    else NProgress.start();
  }, [location, gaTrackingId, navigation.state]);

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {process.env.NODE_ENV === "development" || !gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
