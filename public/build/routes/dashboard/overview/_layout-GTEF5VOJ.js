import {
  useUser
} from "/build/_shared/chunk-JUES7YX4.js";
import {
  Breadcrumb,
  Container,
  ScrollArea,
  ScrollBar
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  NavLink,
  Outlet,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard/overview/_layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function _route() {
  const user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-screen bg-[#1C2634]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "pb-40 pt-28 xl:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Breadcrumb,
      {
        heading: `Welcome back, ${user.fullName} \u{1F44F}\u{1F3FB}`,
        links: [
          { name: "Dashboard", href: "/dashboard/overview" },
          { name: "Overview", href: "" }
        ]
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard/overview/_layout.tsx",
        lineNumber: 13,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/overview/_layout.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/overview/_layout.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "relative -top-32 h-auto w-full xl:px-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, { className: "h-full w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex pb-6 lg:w-min", children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          NavLink,
          {
            to: item.href,
            className: ({ isActive }) => isActive ? "whitespace-nowrap border-b-2 border-primary px-5 py-3 text-base font-medium text-white" : "whitespace-nowrap border-b border-[#A2A6AA] px-5 py-3 text-base font-medium text-[#A2A6AA] duration-200 hover:text-white",
            end: true,
            children: item.name
          },
          item.name,
          false,
          {
            fileName: "app/routes/dashboard/overview/_layout.tsx",
            lineNumber: 27,
            columnNumber: 15
          },
          this
        )) }, void 0, false, {
          fileName: "app/routes/dashboard/overview/_layout.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollBar, { orientation: "horizontal" }, void 0, false, {
          fileName: "app/routes/dashboard/overview/_layout.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/overview/_layout.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/dashboard/overview/_layout.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard/overview/_layout.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/_layout.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/overview/_layout.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var NAV_ITEMS = [
  { name: "Overview", href: "/dashboard/overview" },
  { name: "Transactions", href: "/dashboard/overview/transactions" },
  { name: "Statistics", href: "/dashboard/overview/statistics" }
];
export {
  _route as default
};
//# sourceMappingURL=/build/routes/dashboard/overview/_layout-GTEF5VOJ.js.map
