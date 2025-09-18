import {
  Breadcrumb,
  Card,
  Container,
  ScrollArea,
  ScrollBar,
  cn
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  NavLink,
  Outlet,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard/settings/components/SettingNav.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SettingNav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "hidden h-full basis-4/12 space-y-4 lg:sticky lg:top-24 lg:block", children: SETTINGS_NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    NavLink,
    {
      to: item.href,
      className: ({ isActive }) => isActive ? "group flex items-center justify-between rounded-lg bg-primary-500 !py-7 px-6 font-medium text-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.16)] hover:bg-primary-500 lg:px-4 lg:py-2.5" : "text-gray group flex items-center  justify-between rounded-lg !py-7 px-6 hover:bg-[#F4F4F7] lg:px-4 lg:py-2.5",
      end: true,
      children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "span",
            {
              className: cn(
                isActive ? "bg-white stroke-primary-500 text-primary-500" : "stroke-secondary-500",
                "flex h-8 w-8 items-center justify-center rounded-full "
              ),
              children: item.icon
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
              lineNumber: 24,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
            fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
            lineNumber: 34,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
          lineNumber: 23,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pr-1 duration-500 group-hover:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "path",
              {
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "m9 5l6 7l-6 7"
              },
              void 0,
              false,
              {
                fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
                lineNumber: 44,
                columnNumber: 19
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
            lineNumber: 38,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
          lineNumber: 37,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this)
    },
    item.name,
    false,
    {
      fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  )) }, void 0, false, {
    fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function MobileSettingNav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, { className: "h-full w-full lg:hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex pb-6 lg:w-min", children: SETTINGS_NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
        lineNumber: 66,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollBar, { orientation: "horizontal" }, void 0, false, {
      fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
var SETTINGS_NAV_ITEMS = [
  {
    name: "Personal Information",
    href: "",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M13.6663 5.83268C13.6663 7.85773 12.0247 9.49935 9.99967 9.49935C7.97463 9.49935 6.33301 7.85773 6.33301 5.83268C6.33301 3.80764 7.97463 2.16602 9.99967 2.16602C12.0247 2.16602 13.6663 3.80764 13.6663 5.83268Z" }, void 0, false, {
            fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M9.9998 12.084C5.8248 12.084 2.4248 14.884 2.4248 18.334C2.4248 18.5673 2.60814 18.7507 2.84147 18.7507H17.1581C17.3915 18.7507 17.5748 18.5673 17.5748 18.334C17.5748 14.884 14.1748 12.084 9.9998 12.084Z" }, void 0, false, {
            fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
        lineNumber: 90,
        columnNumber: 7
      },
      this
    )
  },
  // TODO: add preferences in the future
  // {
  //   name: "Preferences",
  //   href: "preferences",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="20"
  //       height="20"
  //       viewBox="0 0 20 20"
  //       fill="none"
  //     >
  //       <path
  //         d="M14.1749 10.6075C14.6673 10.6075 15.0665 10.2083 15.0665 9.71584C15.0665 9.22339 14.6673 8.82422 14.1749 8.82422C13.6824 8.82422 13.2832 9.22339 13.2832 9.71584C13.2832 10.2083 13.6824 10.6075 14.1749 10.6075Z"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M16.667 4.99935V6.491C16.4587 6.466 16.217 6.44934 15.9587 6.44934H12.392C10.6087 6.44934 10.017 7.04104 10.017 8.82437V13.0827H5.00033C2.33366 13.0827 1.66699 12.416 1.66699 9.74936V4.99935C1.66699 2.33268 2.33366 1.66602 5.00033 1.66602H13.3337C16.0003 1.66602 16.667 2.33268 16.667 4.99935Z"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M7.5 13.084V16.6673"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M1.66699 9.91602H10.0003"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M4.95801 16.666H9.99966"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M14.1749 10.6075C14.6673 10.6075 15.0665 10.2083 15.0665 9.71584C15.0665 9.22339 14.6673 8.82422 14.1749 8.82422C13.6824 8.82422 13.2832 9.22339 13.2832 9.71584C13.2832 10.2083 13.6824 10.6075 14.1749 10.6075Z"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeMiterlimit="10"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M16.6666 6.49088C16.4583 6.46588 16.2166 6.44922 15.9583 6.44922H12.3916C10.6083 6.44922 10.0166 7.04092 10.0166 8.82425V15.9576C10.0166 17.7409 10.6083 18.3326 12.3916 18.3326H15.9583C17.7416 18.3326 18.3333 17.7409 18.3333 15.9576V8.82425C18.3333 7.29925 17.8999 6.64921 16.6666 6.49088ZM14.175 8.82425C14.6666 8.82425 15.0666 9.2242 15.0666 9.71587C15.0666 10.2075 14.6666 10.6075 14.175 10.6075C13.6833 10.6075 13.2833 10.2075 13.2833 9.71587C13.2833 9.2242 13.6833 8.82425 14.175 8.82425ZM14.175 15.9576C13.1916 15.9576 12.3916 15.1576 12.3916 14.1742C12.3916 13.7659 12.5333 13.3826 12.7666 13.0826C13.0916 12.6659 13.6 12.3909 14.175 12.3909C14.625 12.3909 15.0333 12.5576 15.3416 12.8242C15.7166 13.1576 15.9583 13.6409 15.9583 14.1742C15.9583 15.1576 15.1583 15.9576 14.175 15.9576Z"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeMiterlimit="10"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M15.9583 14.174C15.9583 15.1573 15.1583 15.9573 14.1749 15.9573C13.1916 15.9573 12.3916 15.1573 12.3916 14.174C12.3916 13.7656 12.5333 13.3823 12.7666 13.0823C13.0916 12.6656 13.5999 12.3906 14.1749 12.3906C14.6249 12.3906 15.0333 12.5573 15.3416 12.824C15.7166 13.1573 15.9583 13.6406 15.9583 14.174Z"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeMiterlimit="10"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M14.1749 10.6075C14.6673 10.6075 15.0665 10.2083 15.0665 9.71584C15.0665 9.22339 14.6673 8.82422 14.1749 8.82422C13.6824 8.82422 13.2832 9.22339 13.2832 9.71584C13.2832 10.2083 13.6824 10.6075 14.1749 10.6075Z"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeMiterlimit="10"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //     </svg>
  //   ),
  // },
  {
    name: "Security",
    href: "security",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "path",
            {
              d: "M5 8.33268V6.66602C5 3.90768 5.83333 1.66602 10 1.66602C14.1667 1.66602 15 3.90768 15 6.66602V8.33268",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
              lineNumber: 195,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "path",
            {
              d: "M10.0003 15.4167C11.1509 15.4167 12.0837 14.4839 12.0837 13.3333C12.0837 12.1827 11.1509 11.25 10.0003 11.25C8.84973 11.25 7.91699 12.1827 7.91699 13.3333C7.91699 14.4839 8.84973 15.4167 10.0003 15.4167Z",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
              lineNumber: 202,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "path",
            {
              d: "M14.167 18.334H5.83366C2.50033 18.334 1.66699 17.5007 1.66699 14.1673V12.5007C1.66699 9.16732 2.50033 8.33398 5.83366 8.33398H14.167C17.5003 8.33398 18.3337 9.16732 18.3337 12.5007V14.1673C18.3337 17.5007 17.5003 18.334 14.167 18.334Z",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
              lineNumber: 209,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
        lineNumber: 188,
        columnNumber: 7
      },
      this
    )
  }
];

// app/routes/dashboard/settings/_layout.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function _layout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-screen bg-[#1C2634]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container, { className: "pb-40 pt-28 xl:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Breadcrumb,
      {
        heading: "Settings",
        links: [
          { name: "Dashboard", href: "/dashboard/overview" },
          { name: "Settings", href: "/dashboard/settings" },
          { name: "Personal information", href: "" }
        ]
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard/settings/_layout.tsx",
        lineNumber: 11,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/settings/_layout.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/settings/_layout.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container, { className: "relative -top-32 flex h-auto w-full flex-col lg:flex-row lg:gap-5 xl:px-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SettingNav, {}, void 0, false, {
        fileName: "app/routes/dashboard/settings/_layout.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MobileSettingNav, {}, void 0, false, {
        fileName: "app/routes/dashboard/settings/_layout.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "basis-full lg:basis-8/12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/dashboard/settings/_layout.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard/settings/_layout.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/settings/_layout.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/settings/_layout.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
export {
  _layout as default
};
//# sourceMappingURL=/build/routes/dashboard/settings/_layout-ZV4RRRQG.js.map
