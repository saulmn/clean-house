import {
  ClientOnly,
  require_transaction
} from "/build/_shared/chunk-XPP2E6GA.js";
import {
  getStatusColor
} from "/build/_shared/chunk-O6V2WU6L.js";
import {
  formatDate,
  formatTime
} from "/build/_shared/chunk-IMJZAPXR.js";
import {
  ExpenseAnalysis,
  ExpenseCategory,
  IncomeAnalysis,
  InfoTooltip,
  baseChartOption,
  formatCurrency,
  require_lodash,
  require_react_apexcharts_min
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
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ScrollArea,
  ScrollBar,
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

// app/routes/dashboard/overview/statistics/_route.tsx
var import_node = __toESM(require_node());

// app/routes/dashboard/overview/statistics/components/LastTransaction.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LastTransaction() {
  const { recentTransactions } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "h-min space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "flex-row items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Last transaction" }, void 0, false, {
          fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoTooltip, { message: "Your last Activity" }, void 0, false, {
          fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: "/dashboard/overview/transactions",
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
                className: "ml-1.5 stroke-secondary-300 group-hover:stroke-secondary-500",
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
                      fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                      lineNumber: 49,
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
                      fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                      lineNumber: 56,
                      columnNumber: 13
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                lineNumber: 41,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
          lineNumber: 36,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, { className: "lg:h-[198px]", children: [
      recentTransactions.map((transaction) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "flex items-center justify-between gap-4 py-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-auto items-center  gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Avatar,
                  {
                    className: cn(
                      ((_a = transaction.contact) == null ? void 0 : _a.avatar) ? "h-12 w-12" : "h-12 w-12 bg-[#F4F4F7] p-[14px]"
                    ),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        AvatarImage,
                        {
                          src: (_d = (_b = transaction.contact) == null ? void 0 : _b.avatar) != null ? _d : (_c = transaction.company) == null ? void 0 : _c.logo
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                          lineNumber: 82,
                          columnNumber: 19
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarFallback, { children: (_g = (_e = transaction.contact) == null ? void 0 : _e.fullName) != null ? _g : (_f = transaction.company) == null ? void 0 : _f.name }, void 0, false, {
                        fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                        lineNumber: 87,
                        columnNumber: 19
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-base font-semibold", children: (_j = (_h = transaction.contact) == null ? void 0 : _h.fullName) != null ? _j : (_i = transaction.company) == null ? void 0 : _i.name }, void 0, false, {
                    fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                    lineNumber: 92,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm font-medium capitalize text-secondary-300", children: (_l = (_k = transaction.company) == null ? void 0 : _k.industry) != null ? _l : "Personal" }, void 0, false, {
                    fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                    lineNumber: 95,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                  lineNumber: 91,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                lineNumber: 74,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pb-1 text-base font-semibold text-secondary-500", children: formatDate({ date: transaction.createdAt, type: "short" }) }, void 0, false, {
                  fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                  lineNumber: 102,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-secondary-300", children: formatTime(transaction.createdAt) }, void 0, false, {
                  fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                  lineNumber: 105,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                lineNumber: 101,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-28 pb-1 text-base font-semibold text-secondary-500", children: transaction.type === "Receive" ? `+${formatCurrency(transaction.amount)}` : `-${formatCurrency(transaction.amount)}` }, void 0, false, {
                fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                lineNumber: 110,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Badge,
                {
                  variant: getStatusColor(transaction.status),
                  size: "lg",
                  children: transaction.status
                },
                void 0,
                false,
                {
                  fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                  lineNumber: 116,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          transaction.id,
          true,
          {
            fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
            lineNumber: 70,
            columnNumber: 13
          },
          this
        );
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollBar, { orientation: "horizontal", className: "md:hidden" }, void 0, false, {
        fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/overview/statistics/components/BalanceStatistics.client.tsx
var import_lodash = __toESM(require_lodash());
var import_react_apexcharts = __toESM(require_react_apexcharts_min());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function BalanceStatistics({
  incomeDataForYearChart
}) {
  const chartData = [
    {
      name: "Income",
      data: incomeDataForYearChart.map((item) => item.amount)
    }
  ];
  const chartCategories = incomeDataForYearChart.map((item) => item.month);
  const chartOptions = (0, import_lodash.merge)(baseChartOption(), {
    colors: ["#31B099"],
    xaxis: {
      categories: chartCategories
    },
    tooltip: {
      y: {
        formatter: (val) => formatCurrency(val)
      }
    },
    yaxis: {
      labels: {
        formatter: function(val) {
          return formatCurrency(val);
        }
      }
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "h-min space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Balance Statistics" }, void 0, false, {
        fileName: "app/routes/dashboard/overview/statistics/components/BalanceStatistics.client.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InfoTooltip, { message: "This year balance" }, void 0, false, {
        fileName: "app/routes/dashboard/overview/statistics/components/BalanceStatistics.client.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/statistics/components/BalanceStatistics.client.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/overview/statistics/components/BalanceStatistics.client.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollArea, { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react_apexcharts.default,
        {
          type: "bar",
          series: chartData,
          options: chartOptions,
          height: 300
        },
        void 0,
        false,
        {
          fileName: "app/routes/dashboard/overview/statistics/components/BalanceStatistics.client.tsx",
          lineNumber: 68,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/dashboard/overview/statistics/components/BalanceStatistics.client.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollBar, { orientation: "horizontal" }, void 0, false, {
        fileName: "app/routes/dashboard/overview/statistics/components/BalanceStatistics.client.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/statistics/components/BalanceStatistics.client.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/overview/statistics/components/BalanceStatistics.client.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/overview/statistics/components/BalanceStatistics.client.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/overview/statistics/_route.tsx
var import_transaction = __toESM(require_transaction());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Statistics | Remix Template" }
];
function _route() {
  const {
    incomeAnalysisData,
    expenseAnalysisData,
    incomeDataForYearChart,
    expenseDataForYearChart,
    expenseByIndustryPercentage
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-auto w-full flex-col gap-5 lg:flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 gap-5 lg:grid-cols-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "lg:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        ClientOnly,
        {
          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-80 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Loading" }, void 0, false, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            IncomeAnalysis,
            {
              chartHeight: 220,
              incomeAnalysisData,
              incomeDataForYearChart
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
              lineNumber: 70,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
          lineNumber: 62,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "lg:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        ClientOnly,
        {
          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-80 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Loading" }, void 0, false, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            ExpenseAnalysis,
            {
              chartHeight: 220,
              expenseAnalysisData,
              expenseDataForYearChart
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
              lineNumber: 87,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
          lineNumber: 79,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "lg:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        ClientOnly,
        {
          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-80 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Loading" }, void 0, false, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            BalanceStatistics,
            {
              incomeDataForYearChart
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
              lineNumber: 104,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
          lineNumber: 96,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 gap-5 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        ClientOnly,
        {
          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-72 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Loading" }, void 0, false, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 116,
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
              fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
              lineNumber: 122,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
          lineNumber: 114,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LastTransaction, {}, void 0, false, {
        fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
export {
  _route as default,
  meta
};
//# sourceMappingURL=/build/routes/dashboard/overview/statistics/_route-UTRW25VB.js.map
