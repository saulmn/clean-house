import {
  CallToAction
} from "/build/_shared/chunk-ALL26SNV.js";
import "/build/_shared/chunk-ML4Q7RBQ.js";
import {
  BUY_URL
} from "/build/_shared/chunk-LBU24EHW.js";
import {
  ArrowRight,
  Button,
  Container,
  Heading,
  Input,
  Label,
  Paragraph,
  Presence,
  Primitive,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  buttonVariants,
  cn,
  composeEventHandlers,
  createCollection,
  createContextScope,
  require_jsx_runtime,
  useComposedRefs,
  useControllableState,
  useDirection,
  useId,
  useLayoutEffect2
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/_client/resources/partner/components/Hero.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-white pt-24 lg:pt-[68px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "flex h-full basis-full flex-col items-center justify-between py-5 lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "basis-1/2 lg:py-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-5 max-w-fit rounded-full bg-[#F4F4F7] px-1.5 py-2 text-xs lg:text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-primary px-[5px] py-1 font-medium text-white", children: "News!" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pl-2 text-secondary-500", children: "Update New features for active users \u2728" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Heading,
        {
          variant: "h1",
          className: "mb-6 font-bold text-[#1B2632] lg:mb-8 lg:leading-tight lg:tracking-[-2.16px]",
          children: "Let\u2019s become a Finlab partner."
        },
        void 0,
        false,
        {
          fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
          lineNumber: 23,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "body1", className: "mb-6 lg:pb-10", children: "Give your customers financial products you'll both love." }, void 0, false, {
        fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
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
                fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
                lineNumber: 43,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
            lineNumber: 35,
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
            fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
            lineNumber: 46,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: "/images/partner-hero.png",
        alt: "partner hero",
        className: "w-full lg:h-[700px] lg:w-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
        lineNumber: 59,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_client/resources/partner/components/Benefit.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Benefit() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "bg-white pb-10 pt-10 lg:pt-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-sm text-secondary-500", children: "Benefit partnership with us \u{1F389}" }, void 0, false, {
      fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Heading,
      {
        variant: "h2",
        className: "pb-12 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]",
        children: "Why partner with Finlab ?"
      },
      void 0,
      false,
      {
        fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 gap-5 pb-14 lg:grid-cols-3", children: PARTNER_BENEFITS.map((benefit) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: "space-y-5 rounded-[30px] border-2 border-secondary-200 bg-white p-8 duration-200 hover:border-transparent hover:shadow-[0px_34px_184px_-10px_rgba(0,0,0,0.06)]",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: benefit.icon }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
            lineNumber: 24,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { variant: "h5", className: "pb-2 text-[28px] font-bold", children: benefit.label }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
            lineNumber: 26,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Paragraph, { variant: "body1", className: "pb-10", children: benefit.description }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
            lineNumber: 30,
            columnNumber: 15
          }, this)
        ]
      },
      benefit.label,
      true,
      {
        fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
        lineNumber: 20,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: "/images/partner-benefit.png",
        alt: "partner benefit",
        className: " w-full"
      },
      void 0,
      false,
      {
        fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
        lineNumber: 38,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var PARTNER_BENEFITS = [
  {
    label: "Improve client experiences with the best financial products",
    description: "Manage your clients with a single sign-in using pro access.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "74",
        height: "74",
        viewBox: "0 0 74 74",
        fill: "none",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "path",
          {
            d: "M45.1954 33.5534V33.0534V10.8534C45.1954 9.59733 45.0244 8.63153 44.7414 7.94658C44.4594 7.26405 44.0847 6.89905 43.6889 6.75048C43.2929 6.60181 42.7692 6.6298 42.1053 6.95724C41.4394 7.28568 40.6724 7.89834 39.8426 8.84022L45.1954 33.5534ZM45.1954 33.5534H45.6954H55.2229C57.3231 33.5534 58.4308 34.2001 58.7871 34.9896C59.1431 35.7786 58.8954 37.0359 57.5003 38.6111L57.4991 38.6124L36.6249 62.3541L36.6249 62.3541L34.1586 65.1596C33.3286 66.1017 32.5615 66.7145 31.8955 67.0429C31.2316 67.3704 30.7079 67.3984 30.3119 67.2497C29.9161 67.1011 29.5414 66.7361 29.2594 66.0536C28.9764 65.3686 28.8054 64.4029 28.8054 63.1468V40.9468V40.4468H28.3054H18.7779C16.6777 40.4468 15.57 39.8001 15.2138 39.0106C14.8577 38.2215 15.1054 36.9643 16.5005 35.3891L16.5017 35.3877L37.3759 11.6461L37.3759 11.6461L39.8422 8.84061L45.1954 33.5534Z",
            fill: "#31B099",
            stroke: "#31B099"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
            lineNumber: 61,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    )
  },
  {
    label: "Earn commission on the customers you refer to Finlab",
    description: "Supported by access to sales materials and co-branded collateral.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "74",
        height: "74",
        viewBox: "0 0 74 74",
        fill: "none",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              d: "M29.291 42.3961C29.291 45.3869 31.6036 47.7919 34.4402 47.7919H40.2368C42.7035 47.7919 44.7077 45.6952 44.7077 43.0744C44.7077 40.2686 43.4744 39.2511 41.6552 38.6036L32.3743 35.3661C30.5552 34.7186 29.3219 33.7319 29.3219 30.8952C29.3219 28.3052 31.326 26.1777 33.7927 26.1777H39.5893C42.426 26.1777 44.7385 28.5827 44.7385 31.5736",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 81,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              d: "M37 23.125V50.875",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 88,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              d: "M67.8327 36.9998C67.8327 54.0198 54.0194 67.8332 36.9994 67.8332C19.9793 67.8332 6.16602 54.0198 6.16602 36.9998C6.16602 19.9798 19.9793 6.1665 36.9994 6.1665",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 95,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              d: "M52.416 9.25V21.5833H64.7493",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 102,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              d: "M67.8327 6.1665L52.416 21.5832",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 109,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
        lineNumber: 74,
        columnNumber: 7
      },
      this
    )
  },
  {
    label: "Power countless integration use cases",
    description: "Make payments, reporting, and more work like magic with the Brex API and no-code platforms.",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "74",
        height: "74",
        viewBox: "0 0 74 74",
        fill: "none",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              d: "M63.209 29.2915C67.834 29.2915 67.834 30.8332 67.834 33.9165V40.0832C67.834 43.1665 67.834 44.7082 63.209 44.7082",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 131,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              d: "M30.8327 24.6665L25.0052 32.3748C23.8027 34.4407 25.2827 36.9998 27.6569 36.9998H34.7486C37.1227 36.9998 38.6027 39.559 37.4311 41.6248L30.8327 49.3332",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 138,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              d: "M21.5827 58.5832C9.24935 58.5832 6.16602 55.4998 6.16602 43.1665V30.8332C6.16602 18.4998 9.24935 15.4165 21.5827 15.4165",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 145,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              d: "M40.084 15.4165C52.4173 15.4165 55.5007 18.4998 55.5007 30.8332V43.1665C55.5007 55.4998 52.4173 58.5832 40.084 58.5832",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 152,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
        lineNumber: 124,
        columnNumber: 7
      },
      this
    )
  }
];

// app/routes/_client/resources/partner/components/PartnerForm.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function PartnerForm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "bg-white py-10 lg:py-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm", children: "Become our partner \u{1F91F}\u{1F3FB}" }, void 0, false, {
      fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      Heading,
      {
        variant: "h2",
        className: "pb-12 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]",
        children: "Let\u2019s become a partner"
      },
      void 0,
      false,
      {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 24,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-3xl space-y-7", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-[3px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { htmlFor: "firstName", children: "First Name" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "firstName", placeholder: "First Name" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-[3px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { htmlFor: "lastName", children: "Last Name" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "lastName", placeholder: "Last Name" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-[3px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { htmlFor: "workEmail", children: "Work Email" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { type: "email", id: "workEmail", placeholder: "Work Email" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-[3px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { htmlFor: "companyName", children: "Company Name" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "companyName", placeholder: "Company Name" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-[3px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { htmlFor: "companyWebsite", children: "Company website" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "companyWebsite", placeholder: "Company website" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-[3px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { htmlFor: "numberOfClient", children: "Number of client served" }, void 0, false, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Select, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectValue, { placeholder: "Select" }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectGroup, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectLabel, { children: "Fruits" }, void 0, false, {
              fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
              lineNumber: 65,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectItem, { value: "apple", children: "Apple" }, void 0, false, {
              fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
              lineNumber: 66,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectItem, { value: "banana", children: "Banana" }, void 0, false, {
              fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
              lineNumber: 67,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectItem, { value: "blueberry", children: "Blueberry" }, void 0, false, {
              fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectItem, { value: "grapes", children: "Grapes" }, void 0, false, {
              fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
              lineNumber: 69,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectItem, { value: "pineapple", children: "Pineapple" }, void 0, false, {
              fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
              lineNumber: 70,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { size: "lg", children: "Apply" }, void 0, false, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/ui/accordion.tsx
var React3 = __toESM(require_react());

// node_modules/@radix-ui/react-accordion/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: React.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Primitive.div,
          {
            "data-state": getState(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTrigger = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContent = React.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME;
var CollapsibleContentImpl = React.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
  const [isPresent, setIsPresent] = React.useState(present);
  const ref = React.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = React.useRef(0);
  const height = heightRef.current;
  const widthRef = React.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = React.useRef(isOpen);
  const originalStylesRef = React.useRef(void 0);
  React.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Primitive.div,
    {
      "data-state": getState(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState(open) {
  return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;

// node_modules/@radix-ui/react-accordion/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection, useCollection, createCollectionScope] = createCollection(ACCORDION_NAME);
var [createAccordionContext, createAccordionScope] = createContextScope(ACCORDION_NAME, [
  createCollectionScope,
  createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion = import_react2.default.forwardRef(
  (props, forwardedRef) => {
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Collection.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AccordionImplMultiple, { ...multipleProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AccordionImplSingle, { ...singleProps, ref: forwardedRef }) });
  }
);
Accordion.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
  ACCORDION_NAME,
  { collapsible: false }
);
var AccordionImplSingle = import_react2.default.forwardRef(
  (props, forwardedRef) => {
    const {
      value: valueProp,
      defaultValue,
      onValueChange = () => {
      },
      collapsible = false,
      ...accordionSingleProps
    } = props;
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? "",
      onChange: onValueChange,
      caller: ACCORDION_NAME
    });
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      AccordionValueProvider,
      {
        scope: props.__scopeAccordion,
        value: import_react2.default.useMemo(() => value ? [value] : [], [value]),
        onItemOpen: setValue,
        onItemClose: import_react2.default.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AccordionImpl, { ...accordionSingleProps, ref: forwardedRef }) })
      }
    );
  }
);
var AccordionImplMultiple = import_react2.default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...accordionMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  const handleItemOpen = import_react2.default.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleItemClose = import_react2.default.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    AccordionValueProvider,
    {
      scope: props.__scopeAccordion,
      value,
      onItemOpen: handleItemOpen,
      onItemClose: handleItemClose,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AccordionImpl, { ...accordionMultipleProps, ref: forwardedRef }) })
    }
  );
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = import_react2.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = import_react2.default.useRef(null);
    const composedRefs = useComposedRefs(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      if (!ACCORDION_KEYS.includes(event.key))
        return;
      const target = event.target;
      const triggerCollection = getItems().filter((item) => !item.ref.current?.disabled);
      const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
      const triggerCount = triggerCollection.length;
      if (triggerIndex === -1)
        return;
      event.preventDefault();
      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;
      const moveNext = () => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      };
      const movePrev = () => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      };
      switch (event.key) {
        case "Home":
          nextIndex = homeIndex;
          break;
        case "End":
          nextIndex = endIndex;
          break;
        case "ArrowRight":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              moveNext();
            } else {
              movePrev();
            }
          }
          break;
        case "ArrowDown":
          if (orientation === "vertical") {
            moveNext();
          }
          break;
        case "ArrowLeft":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              movePrev();
            } else {
              moveNext();
            }
          }
          break;
        case "ArrowUp":
          if (orientation === "vertical") {
            movePrev();
          }
          break;
      }
      const clampedIndex = nextIndex % triggerCount;
      triggerCollection[clampedIndex].ref.current?.focus();
    });
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      AccordionImplProvider,
      {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Collection.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Primitive.div,
          {
            ...accordionProps,
            "data-orientation": orientation,
            ref: composedRefs,
            onKeyDown: disabled ? void 0 : handleKeyDown
          }
        ) })
      }
    );
  }
);
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem = import_react2.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = useId();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      AccordionItemProvider,
      {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Root,
          {
            "data-orientation": accordionContext.orientation,
            "data-state": getState2(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2) => {
              if (open2) {
                valueContext.onItemOpen(value);
              } else {
                valueContext.onItemClose(value);
              }
            }
          }
        )
      }
    );
  }
);
AccordionItem.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = import_react2.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Primitive.h3,
      {
        "data-orientation": accordionContext.orientation,
        "data-state": getState2(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
      }
    );
  }
);
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME2 = "AccordionTrigger";
var AccordionTrigger = import_react2.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME2, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME2, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Collection.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Trigger,
      {
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId,
        ...collapsibleScope,
        ...triggerProps,
        ref: forwardedRef
      }
    ) });
  }
);
AccordionTrigger.displayName = TRIGGER_NAME2;
var CONTENT_NAME2 = "AccordionContent";
var AccordionContent = import_react2.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME2, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Content,
      {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
          ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
          ...props.style
        }
      }
    );
  }
);
AccordionContent.displayName = CONTENT_NAME2;
function getState2(open) {
  return open ? "open" : "closed";
}
var Root2 = Accordion;
var Item = AccordionItem;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger;
var Content2 = AccordionContent;

// app/components/ui/accordion.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var Accordion2 = Root2;
var AccordionItem2 = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  this
));
AccordionItem2.displayName = "AccordionItem";
var AccordionTrigger2 = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-left text-lg font-bold text-secondary-500 transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "9",
          viewBox: "0 0 18 9",
          fill: "none",
          className: "h-4 w-4 shrink-0 transition-transform duration-200",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "path",
            {
              d: "M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195",
              stroke: "#1A1C1E",
              strokeWidth: "1.5",
              strokeMiterlimit: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            false,
            {
              fileName: "app/components/ui/accordion.tsx",
              lineNumber: 42,
              columnNumber: 9
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/ui/accordion.tsx",
          lineNumber: 34,
          columnNumber: 7
        },
        this
      )
    ]
  },
  void 0,
  true,
  {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 25,
    columnNumber: 5
  },
  this
) }, void 0, false, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 24,
  columnNumber: 3
}, this));
AccordionTrigger2.displayName = Trigger2.displayName;
var AccordionContent2 = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  Content2,
  {
    ref,
    className: cn(
      "overflow-hidden text-base text-secondary-500 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pb-4 pt-0", children }, void 0, false, {
      fileName: "app/components/ui/accordion.tsx",
      lineNumber: 68,
      columnNumber: 5
    }, this)
  },
  void 0,
  false,
  {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 60,
    columnNumber: 3
  },
  this
));
AccordionContent2.displayName = Content2.displayName;

// app/routes/_client/resources/partner/components/FAQ.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function FAQ() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "bg-white py-10 lg:py-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm", children: "Some frequently asked questions \u{1F44D}\u{1F3FB}" }, void 0, false, {
      fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Heading,
      {
        variant: "h2",
        className: "pb-20 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]",
        children: "Frequently asked questions"
      },
      void 0,
      false,
      {
        fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 lg:gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Accordion2, { type: "single", collapsible: true, className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionItem2, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionTrigger2, { children: "How does the partner program work?" }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionContent2, { children: "The Partner Program is a service that allows participating partners to earn commission and fees on referred customers. We provide you with the materials and resources you\u2019ll need to get started." }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 30,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionItem2, { value: "item-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionTrigger2, { children: "Are there any fees?" }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionContent2, { children: "No fees to participate. " }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionItem2, { value: "item-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionTrigger2, { children: "How often do I get paid?" }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionContent2, { children: "Brex will send your earned fees on a monthly basis." }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Accordion2, { type: "single", collapsible: true, className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionItem2, { value: "item-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionTrigger2, { children: "Am I eligible?" }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionContent2, { children: "If you work primarily with US-based companies that you think would benefit from Brex\u2019s unique financial products, we\u2019d love to have you on board." }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionItem2, { value: "item-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionTrigger2, { children: "How much will I get paid?" }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionContent2, { children: "Brex offers partners tiered revenue share-based fee structures, which depend on the volume of customers you refer and how much money they spend on their Brex financial products. Apply to learn where your company fits in." }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionItem2, { value: "item-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionTrigger2, { children: "Is it animated?" }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AccordionContent2, { children: "Yes. It's animated by default, but you can disable it if you prefer." }, void 0, false, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_client/resources/partner/_route.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Partner | Remix Template" }
];
function _route() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Hero, {}, void 0, false, {
      fileName: "app/routes/_client/resources/partner/_route.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Benefit, {}, void 0, false, {
      fileName: "app/routes/_client/resources/partner/_route.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PartnerForm, {}, void 0, false, {
      fileName: "app/routes/_client/resources/partner/_route.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(FAQ, {}, void 0, false, {
      fileName: "app/routes/_client/resources/partner/_route.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CallToAction, {}, void 0, false, {
      fileName: "app/routes/_client/resources/partner/_route.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_client/resources/partner/_route.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
export {
  _route as default,
  meta
};
//# sourceMappingURL=/build/routes/_client/resources/partner/_route-DOKVIRUZ.js.map
