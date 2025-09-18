import {
  InfoTooltip
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
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Heading,
  Input,
  Paragraph,
  ScrollArea,
  ScrollBar,
  cn
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  require_jsx_dev_runtime,
  require_react,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard/help-center/_route.tsx
var import_node = __toESM(require_node());

// app/routes/dashboard/help-center/components/QuestionCard.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function QuestionCard({ item }) {
  const [like, setLike] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-2 rounded-[20px] border border-secondary-200 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { variant: "h6", className: "pb-4 text-lg font-semibold lg:text-lg", children: item.question }, void 0, false, {
        fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "body3", className: "text-secondary-300", children: item.answer }, void 0, false, {
        fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, { className: "flex whitespace-nowrap", children: [
        item.tags.map((topic, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Button,
          {
            variant: "outline",
            className: "mr-1.5 inline-block",
            children: topic
          },
          index,
          false,
          {
            fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
            lineNumber: 38,
            columnNumber: 13
          },
          this
        )),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollBar, { orientation: "horizontal", className: "md:hidden" }, void 0, false, {
          fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setLike(!like),
          className: cn(
            like ? "fill-primary-500 stroke-primary-500 text-primary-500" : "fill-none stroke-secondary-500 text-secondary-500",
            "flex items-center gap-2 font-semibold"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "path",
                    {
                      d: "M7.48047 18.3505L10.5805 20.7505C10.9805 21.1505 11.8805 21.3505 12.4805 21.3505H16.2805C17.4805 21.3505 18.7805 20.4505 19.0805 19.2505L21.4805 11.9505C21.9805 10.5505 21.0805 9.35046 19.5805 9.35046H15.5805C14.9805 9.35046 14.4805 8.85046 14.5805 8.15046L15.0805 4.95046C15.2805 4.05046 14.6805 3.05046 13.7805 2.75046C12.9805 2.45046 11.9805 2.85046 11.5805 3.45046L7.48047 9.55046",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
                      lineNumber: 65,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "path",
                    {
                      d: "M2.37988 18.3504V8.55039C2.37988 7.15039 2.97988 6.65039 4.37988 6.65039H5.37988C6.77988 6.65039 7.37988 7.15039 7.37988 8.55039V18.3504C7.37988 19.7504 6.77988 20.2504 5.37988 20.2504H4.37988C2.97988 20.2504 2.37988 19.7504 2.37988 18.3504Z",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
                      lineNumber: 71,
                      columnNumber: 13
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
                lineNumber: 59,
                columnNumber: 11
              },
              this
            ),
            like ? item.likes + 1 : item.likes
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
          lineNumber: 50,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/help-center/components/NotFundQuestion.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function NotFundQuestion() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-2 rounded-[20px] border border-secondary-200 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pb-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { variant: "h6", className: "pb-4 text-lg font-semibold lg:text-lg", children: "No results found" }, void 0, false, {
      fileName: "app/routes/dashboard/help-center/components/NotFundQuestion.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Paragraph, { variant: "body3", className: "text-secondary-300", children: "Try adjusting your search or filter to find what you are looking for." }, void 0, false, {
      fileName: "app/routes/dashboard/help-center/components/NotFundQuestion.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/help-center/components/NotFundQuestion.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard/help-center/components/NotFundQuestion.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/help-center/components/SearchCard.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function SearchCard() {
  const { faqs } = useLoaderData();
  const searchQuestionFetcher = useFetcher();
  console.log("searchQuestionFetcher", searchQuestionFetcher.data);
  const data = searchQuestionFetcher.data ? searchQuestionFetcher.data.faqs : faqs;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-5 lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card, { className: "h-min basis-full space-y-8 lg:sticky lg:top-24 lg:basis-4/12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardTitle, { children: "Hi, Can we help you ?" }, void 0, false, {
          fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardDescription, { children: "Type your question or search by keyword here here" }, void 0, false, {
          fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(searchQuestionFetcher.Form, { method: "GET", className: "relative w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "img",
          {
            src: "/icons/magnifying-glass.svg",
            alt: "magnifying-glass",
            className: "absolute left-3 top-1/2 -translate-y-1/2 transform"
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
            lineNumber: 43,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          Input,
          {
            name: "query",
            placeholder: "Search here",
            className: "w-full pl-12",
            onChange: (event) => {
              searchQuestionFetcher.submit(
                { query: event.target.value },
                { method: "GET", action: "/dashboard/help-center" }
              );
            }
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
            lineNumber: 48,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardFooter, { className: "flex-col items-start ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Paragraph, { variant: "body3", children: "Popular Search" }, void 0, false, {
          fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollArea, { className: "flex w-full whitespace-nowrap pt-4", children: [
          ["Transfer", "Change card", "Flow"].map((topic, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { variant: "outline", className: "mr-1.5", children: topic }, index, false, {
            fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollBar, { orientation: "horizontal", className: "md:hidden" }, void 0, false, {
            fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card, { className: "basis-full space-y-8 lg:basis-8/12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Frequently Asked Questions" }, void 0, false, {
          fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InfoTooltip, { message: "All faqs" }, void 0, false, {
          fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContent, { className: "space-y-6 border-t border-secondary-100 py-8", children: data.length ? data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(QuestionCard, { item }, item.question, false, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 87,
        columnNumber: 32
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NotFundQuestion, {}, void 0, false, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/help-center/_route.tsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Help center | Remix Template" }
];
function _route() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-screen bg-[#1C2634]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Container, { className: "pb-40 pt-28 xl:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      Breadcrumb,
      {
        heading: "Help Center",
        links: [
          { name: "Dashboard", href: "/dashboard/overview" },
          { name: "Help Center", href: "" }
        ]
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard/help-center/_route.tsx",
        lineNumber: 40,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/help-center/_route.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/help-center/_route.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Container, { className: "relative -top-32  h-auto w-full xl:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SearchCard, {}, void 0, false, {
      fileName: "app/routes/dashboard/help-center/_route.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/help-center/_route.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/help-center/_route.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
export {
  _route as default,
  meta
};
//# sourceMappingURL=/build/routes/dashboard/help-center/_route-UYPIG2CX.js.map
