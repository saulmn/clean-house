import {
  O,
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate
} from "/build/_shared/chunk-AYGOFMHR.js";
import {
  require_contact
} from "/build/_shared/chunk-JKFKI22T.js";
import {
  ClientOnly,
  require_transaction
} from "/build/_shared/chunk-XPP2E6GA.js";
import {
  Currency,
  InfoTooltip,
  TotalBalance,
  baseChartOption,
  formatCurrency,
  require_lib,
  require_lodash,
  require_react_apexcharts_min
} from "/build/_shared/chunk-PYU4XBSA.js";
import {
  require_db
} from "/build/_shared/chunk-63W34KY2.js";
import "/build/_shared/chunk-JUES7YX4.js";
import {
  require_session
} from "/build/_shared/chunk-D52ASTK7.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  Breadcrumb,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Close,
  Container,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Loader2,
  Paragraph,
  ScrollArea,
  Switch,
  X,
  cn
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useFetcher,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard/wallets/index/_route.tsx
var import_node = __toESM(require_node());

// app/routes/dashboard/wallets/index/components/NewCardDialog.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NewCardDialog() {
  const [card, setCard] = (0, import_react2.useState)({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: ""
  });
  const navigation = useNavigation();
  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setCard({ ...card, issuer });
    }
  };
  const handleInputFocus = ({ target }) => {
    setCard({ ...card, focused: target.name });
  };
  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }
    setCard({ ...card, [target.name]: target.value });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", variant: "outline", size: "lg", className: "w-full", children: "Add new card" }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      DialogContent,
      {
        onPointerDownOutside: (e) => navigation.state !== "idle" ? e.preventDefault() : null,
        className: "p-6 sm:max-w-[480px] lg:p-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, { className: "h-[500px] lg:h-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Form,
          {
            method: "POST",
            action: "/resources/new-card",
            className: "mx-auto w-full",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { className: "flex w-full items-center justify-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Button,
                  {
                    variant: "link",
                    size: "icon",
                    className: "text-secondary-500 hover:text-primary-500",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, {}, void 0, false, {
                      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                      lineNumber: 89,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                    lineNumber: 84,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                  lineNumber: 83,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                  lineNumber: 82,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { className: "text-[32px] font-bold", children: "Add New Card" }, void 0, false, {
                  fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                  lineNumber: 94,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { className: "text-center", children: "add a new card for your transaction" }, void 0, false, {
                  fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                  lineNumber: 98,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                lineNumber: 81,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "fieldset",
                {
                  className: "w-full space-y-3 disabled:opacity-70",
                  disabled: navigation.state !== "idle",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(O, { ...card, callback: handleCallback }, void 0, false, {
                      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                      lineNumber: 107,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      Input,
                      {
                        name: "name",
                        label: "Card Holder Name",
                        placeholder: "Card Holder Name",
                        value: card.name,
                        onChange: handleInputChange,
                        onFocus: handleInputFocus,
                        required: true
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                        lineNumber: 109,
                        columnNumber: 15
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      Input,
                      {
                        name: "number",
                        label: "Card Number",
                        placeholder: "Card Number",
                        value: card.number,
                        onChange: handleInputChange,
                        onFocus: handleInputFocus,
                        required: true
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                        lineNumber: 119,
                        columnNumber: 15
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col gap-5 md:flex-row", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        Input,
                        {
                          name: "expiry",
                          type: "tel",
                          label: "Expiry Date",
                          placeholder: "Expiry Date",
                          value: card.expiry,
                          onChange: handleInputChange,
                          onFocus: handleInputFocus,
                          required: true
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                          lineNumber: 131,
                          columnNumber: 19
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        Input,
                        {
                          name: "cvc",
                          type: "tel",
                          label: "CVC/CVV",
                          placeholder: "CVC/CVV",
                          value: card.cvc,
                          onChange: handleInputChange,
                          onFocus: handleInputFocus,
                          required: true
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                          lineNumber: 144,
                          columnNumber: 19
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                        lineNumber: 143,
                        columnNumber: 17
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                      lineNumber: 129,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { className: "w-full pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "lg", type: "submit", className: "w-full", children: navigation.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
                      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                      lineNumber: 160,
                      columnNumber: 21
                    }, this) : "Confirm" }, void 0, false, {
                      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                      lineNumber: 158,
                      columnNumber: 17
                    }, this) }, void 0, false, {
                      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                      lineNumber: 157,
                      columnNumber: 15
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                  lineNumber: 103,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
            lineNumber: 76,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
        lineNumber: 69,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/wallets/index/components/CardList.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function CardList() {
  const { cards } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "h-min space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Card Lists" }, void 0, false, {
        fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InfoTooltip, { message: "All card available" }, void 0, false, {
        fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollArea, { className: "h-[340px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-5 py-4", children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Link,
      {
        to: `card/${card.id}/details`,
        prefetch: "intent",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          O,
          {
            name: card.name,
            number: card.number,
            expiry: card.expiry,
            cvc: card.cvc
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
            lineNumber: 37,
            columnNumber: 17
          },
          this
        )
      },
      card.id,
      false,
      {
        fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
        lineNumber: 32,
        columnNumber: 15
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NewCardDialog, {}, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/wallets/index/components/QuickTransfer.tsx
var import_react4 = __toESM(require_react());
var import_react_slick = __toESM(require_lib());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function QuickTransfer({ contacts }) {
  var _a, _b;
  const [selectContact, setSelectContact] = (0, import_react4.useState)(0);
  const carouselRef = (0, import_react4.useRef)(null);
  const quickTransferFetcher = useFetcher();
  console.log(quickTransferFetcher.data);
  const sliderSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 7,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "0 40px",
    beforeChange: (current, next) => setSelectContact(next),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  const handlePrev = () => {
    var _a2;
    (_a2 = carouselRef.current) == null ? void 0 : _a2.slickPrev();
  };
  const handleNext = () => {
    var _a2;
    (_a2 = carouselRef.current) == null ? void 0 : _a2.slickNext();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card, { className: "h-min basis-7/12 space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Quick Transfer" }, void 0, false, {
        fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InfoTooltip, { message: "Make a transfer" }, void 0, false, {
        fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative mx-auto max-h-[120px] max-w-[450px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "button",
        {
          className: "absolute -left-4 top-[40%] z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-[0px_4px_24px_0px_rgba(0,0,0,0.14)]",
          onClick: handlePrev,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "path",
                {
                  d: "M8.75007 11.6199L4.94674 7.81655C4.49757 7.36738 4.49757 6.63238 4.94674 6.18322L8.75007 2.37988",
                  stroke: "#1A1C1E",
                  strokeWidth: "1.5",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                  lineNumber: 89,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
              lineNumber: 82,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
          lineNumber: 78,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_slick.default, { ref: carouselRef, ...sliderSettings, children: contacts.map((contact, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          className: cn(
            selectContact === index ? "opacity-100" : "opacity-40",
            "w-5 cursor-pointer p-2 text-center"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "img",
              {
                src: contact.avatar,
                alt: contact.fullName,
                className: cn(
                  selectContact === index && "scale-125 transform shadow-[0px_44px_184px_-10px_rgba(0,0,0,0.11)] transition-all duration-200",
                  "mx-auto mb-3 h-14 w-14 rounded-full "
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 109,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              Paragraph,
              {
                variant: "body3",
                className: "whitespace-nowrap font-semibold text-secondary-500",
                children: contact.fullName
              },
              void 0,
              false,
              {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 118,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              Paragraph,
              {
                variant: "caption",
                className: "font-semibold text-secondary-300",
                children: [
                  "@",
                  contact.username
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 124,
                columnNumber: 17
              },
              this
            )
          ]
        },
        contact.id,
        true,
        {
          fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
          lineNumber: 102,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "button",
        {
          onClick: handleNext,
          className: "absolute -right-4 top-[40%] flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-[0px_4px_24px_0px_rgba(0,0,0,0.14)]",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "path",
                  {
                    d: "M5.19727 11.6199L9.0006 7.81655C9.44977 7.36738 9.44977 6.63238 9.0006 6.18322L5.19727 2.37988",
                    stroke: "#1A1C1E",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                    lineNumber: 145,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 138,
                columnNumber: 13
              },
              this
            ),
            " "
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
          lineNumber: 134,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardFooter, { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      quickTransferFetcher.Form,
      {
        method: "POST",
        action: "/resources/operation",
        className: "w-full",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "fieldset",
          {
            className: "flex w-full flex-col items-center gap-4 disabled:opacity-70 lg:flex-row",
            disabled: quickTransferFetcher.state !== "idle",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative w-full", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "img",
                  {
                    src: "/icons/dollar.svg",
                    alt: "dollar",
                    className: cn(
                      ((_a = quickTransferFetcher.data) == null ? void 0 : _a.error) ? "top-[37%]" : "top-1/2",
                      "absolute left-3 -translate-y-1/2 transform"
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                    lineNumber: 169,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  Input,
                  {
                    type: "number",
                    name: "amount",
                    placeholder: "Amount",
                    className: "w-full pl-10",
                    step: "0.01",
                    error: (_b = quickTransferFetcher.data) == null ? void 0 : _b.error
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                    lineNumber: 177,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 168,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "input",
                {
                  type: "hidden",
                  name: "contactId",
                  value: contacts[selectContact].id
                },
                void 0,
                false,
                {
                  fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                  lineNumber: 187,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "type", value: "Transfer" }, void 0, false, {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 192,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { size: "lg", className: "w-full min-w-[140px] lg:w-auto", children: quickTransferFetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 196,
                columnNumber: 17
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
                " ",
                "Send",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "25",
                    height: "24",
                    viewBox: "0 0 25 24",
                    fill: "none",
                    className: "ml-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                        "path",
                        {
                          d: "M7.89969 6.32015L16.3897 3.49015C20.1997 2.22015 22.2697 4.30015 21.0097 8.11015L18.1797 16.6002C16.2797 22.3102 13.1597 22.3102 11.2597 16.6002L10.4197 14.0802L7.89969 13.2402C2.18969 11.3402 2.18969 8.23015 7.89969 6.32015Z",
                          stroke: "white",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                          lineNumber: 209,
                          columnNumber: 21
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                        "path",
                        {
                          d: "M10.6104 13.6496L14.1904 10.0596",
                          stroke: "white",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                          lineNumber: 216,
                          columnNumber: 21
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                    lineNumber: 201,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 198,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 194,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
            lineNumber: 164,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
        lineNumber: 159,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx
var import_react6 = __toESM(require_react());
var import_lodash = __toESM(require_lodash());
var import_react_apexcharts = __toESM(require_react_apexcharts_min());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var chartOptions = (0, import_lodash.merge)(baseChartOption(), {
  legend: {
    show: false
  },
  colors: ["#31B099", "#C65468"],
  stroke: {
    curve: "straight"
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
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
function BalanceAnalytics() {
  const [shownData, setShownData] = (0, import_react6.useState)({
    income: true,
    expense: true
  });
  const { incomeDataForYearBarChart, expenseDataForYearBarChart } = useLoaderData();
  const CHART_DATA = [
    {
      name: "Income",
      data: shownData.income ? incomeDataForYearBarChart.map((item) => item.amount) : []
    },
    {
      name: "Expense",
      data: shownData.expense ? expenseDataForYearBarChart.map((item) => item.amount) : []
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card, { className: "h-min space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardHeader, { className: "flex justify-between gap-2 md:flex-row md:items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Balance Analytics" }, void 0, false, {
          fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(InfoTooltip, { message: "All account amount" }, void 0, false, {
          fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Switch,
            {
              id: "income",
              checked: shownData.income,
              onCheckedChange: (checked) => setShownData({ ...shownData, income: checked })
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
              lineNumber: 97,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { htmlFor: "income", className: "text-secondary-400", children: "Income" }, void 0, false, {
            fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Switch,
            {
              id: "expense",
              checked: shownData.expense,
              onCheckedChange: (checked) => setShownData({ ...shownData, expense: checked }),
              className: "data-[state=checked]:bg-error-500"
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
              lineNumber: 110,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { htmlFor: "expense", className: "text-secondary-400", children: "Expense" }, void 0, false, {
            fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_react_apexcharts.default,
      {
        type: "line",
        series: CHART_DATA,
        options: chartOptions,
        height: 275
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
        lineNumber: 126,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/wallets/index/components/BalanceAnalytics.client.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/wallets/index/_route.tsx
var import_contact = __toESM(require_contact());
var import_transaction = __toESM(require_transaction());
var import_session = __toESM(require_session());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Wallets | Remix Template" }
];
function _route() {
  const { contacts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-screen bg-[#1C2634]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Container, { className: "pb-40 pt-28 xl:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Breadcrumb,
      {
        heading: "Wallets",
        links: [
          { name: "Dashboard", href: "/dashboard/overview" },
          { name: "Wallets", href: "" }
        ]
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard/wallets/index/_route.tsx",
        lineNumber: 49,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/_route.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/_route.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Container, { className: "relative -top-32 h-auto w-full xl:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex h-auto w-full flex-col gap-5 lg:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-5 lg:w-[29%]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TotalBalance, { contacts }, void 0, false, {
          fileName: "app/routes/dashboard/wallets/index/_route.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardList, {}, void 0, false, {
          fileName: "app/routes/dashboard/wallets/index/_route.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/wallets/index/_route.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-5 lg:w-[71%]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          ClientOnly,
          {
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex h-80 w-full items-center justify-center rounded-2xl bg-white lg:h-[500px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Loading" }, void 0, false, {
              fileName: "app/routes/dashboard/wallets/index/_route.tsx",
              lineNumber: 71,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard/wallets/index/_route.tsx",
              lineNumber: 70,
              columnNumber: 17
            }, this),
            children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BalanceAnalytics, {}, void 0, false, {
              fileName: "app/routes/dashboard/wallets/index/_route.tsx",
              lineNumber: 75,
              columnNumber: 22
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/wallets/index/_route.tsx",
            lineNumber: 68,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex w-full flex-col gap-5 xl:flex-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(QuickTransfer, { contacts }, void 0, false, {
            fileName: "app/routes/dashboard/wallets/index/_route.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "basis-5/12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Currency, {}, void 0, false, {
            fileName: "app/routes/dashboard/wallets/index/_route.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard/wallets/index/_route.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard/wallets/index/_route.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/wallets/index/_route.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/wallets/index/_route.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/index/_route.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/wallets/index/_route.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
export {
  _route as default,
  meta
};
//# sourceMappingURL=/build/routes/dashboard/wallets/index/_route-S4ZDS37N.js.map
