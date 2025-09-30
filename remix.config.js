/** @type {import('@remix-run/dev').AppConfig} */
const { flatRoutes } = require("remix-flat-routes");

module.exports = {
	cacheDirectory: "./node_modules/.cache/remix",
	ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}"],
	serverModuleFormat: "esm",
	serverBuildPath: "build/index.mjs",
	future: {
		v3_fetcherPersist: true,
		v3_lazyRouteDiscovery: true,
		v3_relativeSplatPath: true,
		v3_singleFetch: true,
		v3_throwAbortReason: true,
	},
	routes: async (defineRoutes) => {
		return flatRoutes("routes", defineRoutes, {
			ignoredRouteFiles: ["**/index.ts"],
		});
	},
};
