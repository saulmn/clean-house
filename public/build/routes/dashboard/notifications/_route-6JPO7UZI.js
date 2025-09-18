import {
  formatToNow
} from "/build/_shared/chunk-IMJZAPXR.js";
import {
  NotificationItem
} from "/build/_shared/chunk-PYU4XBSA.js";
import {
  require_db
} from "/build/_shared/chunk-63W34KY2.js";
import "/build/_shared/chunk-JUES7YX4.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  Breadcrumb,
  Card,
  CardContent,
  Container
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard/notifications/_route.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Notifications | Remix Template" }
];
function _route() {
  const { notifications } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-screen bg-[#1C2634]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "pb-40 pt-28 xl:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Breadcrumb,
      {
        heading: "Notifications \u{1F44F}\u{1F3FB}",
        links: [
          { name: "Dashboard", href: "/dashboard/overview" },
          { name: "Notifications", href: "" }
        ]
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard/notifications/_route.tsx",
        lineNumber: 30,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/notifications/_route.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/notifications/_route.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "relative -top-32 h-auto w-full xl:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "space-y-6", children: notifications.map((notification) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      NotificationItem,
      {
        iconSrc: notification.type === "Transfer" ? "/icons/money-send.svg" : "/icons/receive-money.svg",
        title: notification.title,
        time: formatToNow(notification.createdAt),
        message: notification.description
      },
      notification.id,
      false,
      {
        fileName: "app/routes/dashboard/notifications/_route.tsx",
        lineNumber: 44,
        columnNumber: 15
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/dashboard/notifications/_route.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/notifications/_route.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/notifications/_route.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/notifications/_route.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
export {
  _route as default,
  meta
};
//# sourceMappingURL=/build/routes/dashboard/notifications/_route-6JPO7UZI.js.map
