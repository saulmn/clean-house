import {
  require_db
} from "/build/_shared/chunk-63W34KY2.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  BUY_URL
} from "/build/_shared/chunk-LBU24EHW.js";
import {
  ArrowRight,
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

// app/routes/_client/resources/accountants/_route.tsx
var import_node = __toESM(require_node());

// app/routes/_client/resources/accountants/components/Hero.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-white pt-24 lg:pt-[68px] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "flex h-full basis-full flex-col items-center justify-between py-5 lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "basis-1/2 lg:py-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-5 max-w-fit rounded-full bg-[#F4F4F7] px-1.5 py-2 text-xs lg:text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-primary px-[5px] py-1 font-medium text-white", children: "News!" }, void 0, false, {
          fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pl-2 text-secondary-500", children: "Update New features for active users \u2728" }, void 0, false, {
          fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Heading,
        {
          variant: "h1",
          className: "mb-6 font-bold text-[#1B2632] lg:mb-8 lg:leading-tight lg:tracking-[-2.16px]",
          children: [
            "Easy way to find an accountant you trust here",
            " "
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
          lineNumber: 23,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "body1", className: "mb-6 lg:pb-10", children: "Need accounting support? Check out finlab directory of vetted accounting professionals who can help you streamline your finances and get the most out of your finlab account." }, void 0, false, {
        fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-10 flex gap-2 md:gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/login",
            className: cn(
              buttonVariants({ size: "lg" }),
              "flex items-center whitespace-nowrap px-7 md:px-8"
            ),
            children: [
              "Live preview",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "ml-2 inline-block", size: 16 }, void 0, false, {
                fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
                lineNumber: 45,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
            lineNumber: 37,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: BUY_URL,
            className: cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "whitespace-nowrap px-7 md:px-8"
            ),
            target: "_blank",
            children: "Purchase now"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
            lineNumber: 48,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: "/images/accountants.png",
        alt: "accountants",
        className: "w-full lg:h-[700px] lg:w-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
        lineNumber: 60,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_client/resources/accountants/components/AccountantCard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function AccountantCard({ accountant }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    Link,
    {
      to: `/resources/accountant/${accountant.id}/details`,
      className: "rounded-[30px] border-2 border-secondary-200 p-8 duration-200 hover:border-transparent hover:shadow-[0px_44px_184px_-10px_rgba(0,0,0,0.11)]",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "img",
          {
            src: accountant.logo,
            alt: accountant.name,
            className: "h-44 w-full"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_client/resources/accountants/components/AccountantCard.tsx",
            lineNumber: 17,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-6 pt-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { variant: "h6", className: "font-bold", children: accountant.name }, void 0, false, {
            fileName: "app/routes/_client/resources/accountants/components/AccountantCard.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Paragraph, { variant: "body1", children: [
            accountant.description.slice(0, 300),
            "..."
          ] }, void 0, true, {
            fileName: "app/routes/_client/resources/accountants/components/AccountantCard.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/resources/accountants/components/AccountantCard.tsx",
          lineNumber: 23,
          columnNumber: 7
        }, this)
      ]
    },
    accountant.id,
    true,
    {
      fileName: "app/routes/_client/resources/accountants/components/AccountantCard.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_client/resources/accountants/components/SearchAccountant.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function SearchAccountant() {
  const { accountants } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "bg-white pb-10 pt-10 lg:pt-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-sm text-secondary-500", children: "Search accountant \u{1F389}" }, void 0, false, {
      fileName: "app/routes/_client/resources/accountants/components/SearchAccountant.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      Heading,
      {
        variant: "h2",
        className: "pb-12 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]",
        children: "Let\u2019s find an accountant"
      },
      void 0,
      false,
      {
        fileName: "app/routes/_client/resources/accountants/components/SearchAccountant.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: accountants.map((accountant) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AccountantCard, { accountant }, accountant.id, false, {
      fileName: "app/routes/_client/resources/accountants/components/SearchAccountant.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/routes/_client/resources/accountants/components/SearchAccountant.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_client/resources/accountants/components/SearchAccountant.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_client/resources/accountants/components/SearchAccountant.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_client/resources/accountants/_route.tsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Accountants | Remix Template" }
];
function _route() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Hero, {}, void 0, false, {
      fileName: "app/routes/_client/resources/accountants/_route.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SearchAccountant, {}, void 0, false, {
      fileName: "app/routes/_client/resources/accountants/_route.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_client/resources/accountants/_route.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
export {
  _route as default,
  meta
};
//# sourceMappingURL=/build/routes/_client/resources/accountants/_route-4E5OJDFI.js.map
