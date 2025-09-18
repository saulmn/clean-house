import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_db
} from "/build/_shared/chunk-63W34KY2.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  Button,
  Container,
  Heading,
  Paragraph,
  buttonVariants,
  cn
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/_client/resources/accountant.$id.details/_route.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Accountant details | Remix Template" }
];
function _route() {
  const { accountant } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-white pt-[68px] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "py-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/resources/accountants",
        className: cn(buttonVariants({ variant: "outline" })),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              className: "mr-5",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "path",
                  {
                    d: "M7.97484 4.94141L2.9165 9.99974L7.97484 15.0581",
                    stroke: "#1A1C1E",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 64,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "path",
                  {
                    d: "M17.0831 10H3.05811",
                    stroke: "#1A1C1E",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 72,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 56,
              columnNumber: 11
            },
            this
          ),
          "Back"
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
        lineNumber: 52,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 flex flex-col gap-12 lg:flex-row lg:gap-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "basis-full space-y-[30px] lg:basis-4/12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6 rounded-[30px] border-2 border-secondary-200 p-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: accountant.logo,
              alt: accountant.name,
              className: "h-44"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 87,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { variant: "h6", className: "text-center font-bold", children: accountant.name }, void 0, false, {
            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Paragraph,
            {
              variant: "body2",
              className: "flex justify-center gap-3 text-center font-bold",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "25",
                    height: "24",
                    viewBox: "0 0 25 24",
                    fill: "none",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "path",
                        {
                          d: "M12.4999 13.4299C14.223 13.4299 15.6199 12.0331 15.6199 10.3099C15.6199 8.58681 14.223 7.18994 12.4999 7.18994C10.7768 7.18994 9.37988 8.58681 9.37988 10.3099C9.37988 12.0331 10.7768 13.4299 12.4999 13.4299Z",
                          stroke: "#6C7278",
                          strokeWidth: "2"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                          lineNumber: 109,
                          columnNumber: 21
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "path",
                        {
                          d: "M4.1202 8.49C6.0902 -0.169998 18.9202 -0.159997 20.8802 8.5C22.0302 13.58 18.8702 17.88 16.1002 20.54C14.0902 22.48 10.9102 22.48 8.8902 20.54C6.1302 17.88 2.9702 13.57 4.1202 8.49Z",
                          stroke: "#6C7278",
                          strokeWidth: "2"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                          lineNumber: 114,
                          columnNumber: 21
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 102,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                  lineNumber: 101,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: accountant.address }, void 0, false, {
                  fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                  lineNumber: 121,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 97,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "lg", className: "w-full", children: [
            "Contact Us",
            " "
          ] }, void 0, true, {
            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-10 rounded-[30px] border-2 border-secondary-200 p-6 lg:p-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "subtitle2", className: "font-bold", children: "Resources" }, void 0, false, {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 131,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Paragraph,
              {
                variant: "body2",
                className: "flex gap-3 font-bold text-primary-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "svg",
                    {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M14.9902 17.5H16.5002C19.5202 17.5 22.0002 15.03 22.0002 12C22.0002 8.98 19.5302 6.5 16.5002 6.5H14.9902",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 147,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 154,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M8 12H16",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 161,
                            columnNumber: 23
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                      lineNumber: 140,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 139,
                    columnNumber: 19
                  }, this),
                  accountant.website
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                lineNumber: 135,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "subtitle2", className: "font-bold", children: "Services" }, void 0, false, {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 175,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: accountant.services.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: "rounded-xl border border-[#DCE4E8] px-6 py-3 text-lg text-secondary-500",
                children: service
              },
              service,
              false,
              {
                fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                lineNumber: 181,
                columnNumber: 21
              },
              this
            )) }, void 0, false, {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 179,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "subtitle2", className: "font-bold", children: "Accounting Software" }, void 0, false, {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 192,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Paragraph,
              {
                variant: "body2",
                className: "flex gap-3 font-bold text-primary-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "svg",
                    {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M9 11V17L11 15",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 208,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M9 17L7 15",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 215,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 222,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M22 10H18C15 10 14 9 14 6V2L22 10Z",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 229,
                            columnNumber: 23
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                      lineNumber: 201,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 200,
                    columnNumber: 19
                  }, this),
                  accountant.accountingSoftware
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                lineNumber: 196,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
            lineNumber: 191,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "subtitle2", className: "font-bold", children: "Other Software Expertise" }, void 0, false, {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 243,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Paragraph,
              {
                variant: "body2",
                className: "flex gap-3 font-bold text-primary-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "svg",
                    {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M17.0099 12.7298C17.6009 12.7298 18.0799 12.2507 18.0799 11.6598C18.0799 11.0688 17.6009 10.5898 17.0099 10.5898C16.419 10.5898 15.9399 11.0688 15.9399 11.6598C15.9399 12.2507 16.419 12.7298 17.0099 12.7298Z",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 259,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M20 6V7.78998C19.75 7.75998 19.46 7.73999 19.15 7.73999H14.87C12.73 7.73999 12.02 8.45003 12.02 10.59V15.7H6C2.8 15.7 2 14.9 2 11.7V6C2 2.8 2.8 2 6 2H16C19.2 2 20 2.8 20 6Z",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 266,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M9 15.7002V20.0002",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 273,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M2 11.8999H12",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 280,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M5.9502 20H12.0002",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 287,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M17.0099 12.7303C17.6009 12.7303 18.0799 12.2512 18.0799 11.6603C18.0799 11.0693 17.6009 10.5903 17.0099 10.5903C16.419 10.5903 15.9399 11.0693 15.9399 11.6603C15.9399 12.2512 16.419 12.7303 17.0099 12.7303Z",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 294,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M20 7.79022C19.75 7.76022 19.46 7.74023 19.15 7.74023H14.87C12.73 7.74023 12.02 8.45027 12.02 10.5903V19.1503C12.02 21.2903 12.73 22.0002 14.87 22.0002H19.15C21.29 22.0002 22 21.2903 22 19.1503V10.5903C22 8.76027 21.48 7.98022 20 7.79022ZM17.01 10.5903C17.6 10.5903 18.08 11.0702 18.08 11.6602C18.08 12.2502 17.6 12.7302 17.01 12.7302C16.42 12.7302 15.94 12.2502 15.94 11.6602C15.94 11.0702 16.42 10.5903 17.01 10.5903ZM17.01 19.1503C15.83 19.1503 14.87 18.1903 14.87 17.0103C14.87 16.5203 15.04 16.0603 15.32 15.7003C15.71 15.2003 16.32 14.8702 17.01 14.8702C17.55 14.8702 18.04 15.0703 18.41 15.3903C18.86 15.7903 19.15 16.3703 19.15 17.0103C19.15 18.1903 18.19 19.1503 17.01 19.1503Z",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 302,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M19.1501 17.0101C19.1501 18.1901 18.1901 19.1501 17.0101 19.1501C15.8301 19.1501 14.8701 18.1901 14.8701 17.0101C14.8701 16.5201 15.0401 16.0601 15.3201 15.7001C15.7101 15.2001 16.3201 14.8701 17.0101 14.8701C17.5501 14.8701 18.0401 15.0701 18.4101 15.3901C18.8601 15.7901 19.1501 16.3701 19.1501 17.0101Z",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 310,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "path",
                          {
                            d: "M17.0099 12.7303C17.6009 12.7303 18.0799 12.2512 18.0799 11.6603C18.0799 11.0693 17.6009 10.5903 17.0099 10.5903C16.419 10.5903 15.9399 11.0693 15.9399 11.6603C15.9399 12.2512 16.419 12.7303 17.0099 12.7303Z",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 318,
                            columnNumber: 23
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                      lineNumber: 252,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 251,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex flex-wrap gap-2", children: accountant.otherSoftware.map((software) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: software }, software, false, {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 331,
                    columnNumber: 23
                  }, this)) }, void 0, false, {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 329,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                lineNumber: 247,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
            lineNumber: 242,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-96 basis-full lg:basis-8/12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { className: "font-bold", children: "About " }, void 0, false, {
          fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
          lineNumber: 341,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "body1", children: accountant.description }, void 0, false, {
          fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
          lineNumber: 342,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
        lineNumber: 340,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
        lineNumber: 339,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
export {
  _route as default,
  meta
};
//# sourceMappingURL=/build/routes/_client/resources/accountant.$id.details/_route-Z4FLYMZJ.js.map
