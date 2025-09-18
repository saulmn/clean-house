import {
  require_contact
} from "/build/_shared/chunk-JKFKI22T.js";
import {
  ClientOnly,
  require_transaction
} from "/build/_shared/chunk-XPP2E6GA.js";
import {
  formatDate
} from "/build/_shared/chunk-IMJZAPXR.js";
import {
  Currency,
  ExpenseAnalysis,
  ExpenseCategory,
  IncomeAnalysis,
  InfoTooltip,
  TotalBalance,
  formatCurrency
} from "/build/_shared/chunk-PYU4XBSA.js";
import {
  require_db
} from "/build/_shared/chunk-63W34KY2.js";
import "/build/_shared/chunk-JUES7YX4.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Paragraph,
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

// app/routes/dashboard/overview/_index/_route.tsx
var import_node = __toESM(require_node());

// app/routes/dashboard/overview/_index/components/PockedPlans.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PockedPlans() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "h-full space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "My Pocked Plans" }, void 0, false, {
        fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoTooltip, { message: "Savings plans" }, void 0, false, {
        fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid grid-cols-2 gap-4", children: [
      PLANS.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "col-span-1 space-y-5 rounded-xl border border-secondary-200 p-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-10 w-10 items-center justify-center rounded-md bg-secondary-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.img, alt: item.name }, void 0, false, {
              fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
              lineNumber: 30,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
              lineNumber: 29,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Paragraph,
                {
                  variant: "body2",
                  className: "pb-[1px] font-semibold text-secondary-500",
                  children: item.name
                },
                void 0,
                false,
                {
                  fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
                  lineNumber: 34,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Paragraph,
                {
                  variant: "body3",
                  className: "font-semibold text-secondary-300",
                  children: item.amount
                },
                void 0,
                false,
                {
                  fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
                  lineNumber: 40,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
              lineNumber: 33,
              columnNumber: 13
            }, this)
          ]
        },
        item.name,
        true,
        {
          fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      )),
      " "
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardFooter, { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "",
        preventScrollReset: true,
        className: "group flex items-center text-sm text-secondary-300 duration-200 hover:text-secondary-500",
        children: [
          "See more",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "14",
              height: "15",
              viewBox: "0 0 14 15",
              fill: "none",
              className: "ml-1.5 rotate-90 stroke-secondary-300 group-hover:stroke-secondary-500",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "path",
                  {
                    d: "M8.41797 3.95898L11.9588 7.49982L8.41797 11.0407",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
                    lineNumber: 66,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "path",
                  {
                    d: "M2.04199 7.5H11.8595",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
                    lineNumber: 73,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
              lineNumber: 58,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
        lineNumber: 52,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var PLANS = [
  {
    name: "New Car",
    amount: 8e3,
    img: "/images/car.png"
  },
  {
    name: "New Console",
    amount: 2050,
    img: "/images/console.png"
  },
  {
    name: "Savings ",
    amount: 34100,
    img: "/images/savings.png"
  },
  {
    name: "Shopping",
    amount: 1e5,
    img: "/images/shopping.png"
  }
];

// app/routes/dashboard/overview/_index/components/RecentActivity.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function RecentActivity() {
  const { recentTransactions } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "h-min space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { className: "flex-row items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Recent Activity" }, void 0, false, {
          fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InfoTooltip, { message: "Your Recent Activity" }, void 0, false, {
          fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Link,
        {
          to: "/dashboard/overview/transactions",
          className: "group flex items-center text-sm text-secondary-300 duration-200 hover:text-secondary-500",
          children: [
            "See more",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "14",
                height: "15",
                viewBox: "0 0 14 15",
                fill: "none",
                className: "ml-1.5 stroke-secondary-300 group-hover:stroke-secondary-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "path",
                    {
                      d: "M8.41797 3.95898L11.9588 7.49982L8.41797 11.0407",
                      strokeWidth: "1.5",
                      strokeMiterlimit: "10",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                      lineNumber: 44,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "path",
                    {
                      d: "M2.04199 7.5H11.8595",
                      strokeWidth: "1.5",
                      strokeMiterlimit: "10",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                      lineNumber: 51,
                      columnNumber: 13
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                lineNumber: 36,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { className: "space-y-8", children: recentTransactions.map((transaction) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          className: "flex items-center justify-between gap-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                Avatar,
                {
                  className: cn(
                    ((_a = transaction.contact) == null ? void 0 : _a.avatar) ? "h-12 w-12" : "h-12 w-12 bg-[#F4F4F7] p-[14px]"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      AvatarImage,
                      {
                        src: (_d = (_b = transaction.contact) == null ? void 0 : _b.avatar) != null ? _d : (_c = transaction.company) == null ? void 0 : _c.logo
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AvatarFallback, { children: (_g = (_e = transaction.contact) == null ? void 0 : _e.fullName) != null ? _g : (_f = transaction.company) == null ? void 0 : _f.name }, void 0, false, {
                      fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                      lineNumber: 79,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                  lineNumber: 69,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-base font-semibold", children: (_j = (_h = transaction.contact) == null ? void 0 : _h.fullName) != null ? _j : (_i = transaction.company) == null ? void 0 : _i.name }, void 0, false, {
                  fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                  lineNumber: 84,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-1 text-sm font-medium capitalize text-secondary-300", children: (_l = (_k = transaction.company) == null ? void 0 : _k.industry) != null ? _l : "Personal" }, void 0, false, {
                  fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                  lineNumber: 87,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                lineNumber: 83,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-base font-semibold", children: transaction.type === "Receive" ? `+${formatCurrency(transaction.amount)}` : `-${formatCurrency(transaction.amount)}` }, void 0, false, {
                fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                lineNumber: 94,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-1 whitespace-nowrap text-sm font-medium capitalize text-secondary-300", children: formatDate({ date: transaction.createdAt, type: "short" }) }, void 0, false, {
                fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                lineNumber: 99,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this)
          ]
        },
        transaction.id,
        true,
        {
          fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
          lineNumber: 64,
          columnNumber: 11
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/overview/_index/_route.tsx
var import_transaction = __toESM(require_transaction());
var import_contact = __toESM(require_contact());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Dashboard | Remix Template" }
];
function _route() {
  const {
    contacts,
    incomeAnalysisData,
    expenseAnalysisData,
    incomeDataForYearChart,
    expenseDataForYearChart,
    expenseByIndustryPercentage
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-auto w-full flex-col gap-5 lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-full w-full flex-col gap-5 lg:w-[29%]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TotalBalance, { contacts }, void 0, false, {
        fileName: "app/routes/dashboard/overview/_index/_route.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PockedPlans, {}, void 0, false, {
        fileName: "app/routes/dashboard/overview/_index/_route.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/_index/_route.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-5 lg:w-[42%]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        ClientOnly,
        {
          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-72 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Loading" }, void 0, false, {
            fileName: "app/routes/dashboard/overview/_index/_route.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard/overview/_index/_route.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            ExpenseCategory,
            {
              expenseByIndustryPercentage
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/overview/_index/_route.tsx",
              lineNumber: 81,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/dashboard/overview/_index/_route.tsx",
          lineNumber: 73,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/dashboard/overview/_index/_route.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 gap-5 lg:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          ClientOnly,
          {
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-80 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Loading" }, void 0, false, {
              fileName: "app/routes/dashboard/overview/_index/_route.tsx",
              lineNumber: 93,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard/overview/_index/_route.tsx",
              lineNumber: 92,
              columnNumber: 17
            }, this),
            children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              IncomeAnalysis,
              {
                chartHeight: 155,
                incomeAnalysisData,
                incomeDataForYearChart
              },
              void 0,
              false,
              {
                fileName: "app/routes/dashboard/overview/_index/_route.tsx",
                lineNumber: 98,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/overview/_index/_route.tsx",
            lineNumber: 90,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/dashboard/overview/_index/_route.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          ClientOnly,
          {
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-80 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Loading" }, void 0, false, {
              fileName: "app/routes/dashboard/overview/_index/_route.tsx",
              lineNumber: 111,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard/overview/_index/_route.tsx",
              lineNumber: 110,
              columnNumber: 17
            }, this),
            children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              ExpenseAnalysis,
              {
                chartHeight: 155,
                expenseAnalysisData,
                expenseDataForYearChart
              },
              void 0,
              false,
              {
                fileName: "app/routes/dashboard/overview/_index/_route.tsx",
                lineNumber: 116,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/overview/_index/_route.tsx",
            lineNumber: 108,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/dashboard/overview/_index/_route.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/overview/_index/_route.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/_index/_route.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-full w-full flex-col gap-5 lg:w-[29%]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RecentActivity, {}, void 0, false, {
        fileName: "app/routes/dashboard/overview/_index/_route.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Currency, { all: false }, void 0, false, {
        fileName: "app/routes/dashboard/overview/_index/_route.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/_index/_route.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/overview/_index/_route.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
export {
  _route as default,
  meta
};
//# sourceMappingURL=/build/routes/dashboard/overview/_index/_route-ZET35JRA.js.map
