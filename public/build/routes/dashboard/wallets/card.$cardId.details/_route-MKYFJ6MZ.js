import {
  O,
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate
} from "/build/_shared/chunk-AYGOFMHR.js";
import {
  InfoTooltip
} from "/build/_shared/chunk-PYU4XBSA.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_db
} from "/build/_shared/chunk-63W34KY2.js";
import {
  require_user
} from "/build/_shared/chunk-NF5G63ER.js";
import {
  external_exports,
  helpers_exports,
  parse,
  useForm
} from "/build/_shared/chunk-7WJZA77P.js";
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
  Container,
  Input,
  Loader2,
  buttonVariants
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard/wallets/card.$cardId.details/_route.tsx
var import_node = __toESM(require_node());

// app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx
var import_react3 = __toESM(require_react());

// app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CardDesign({ card, handleCallback }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "h-min basis-full space-y-4 lg:basis-2/12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Card Design" }, void 0, false, {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoTooltip, { message: "Your card design" }, void 0, false, {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      O,
      {
        name: card.name,
        number: card.number,
        expiry: card.expiry,
        cvc: card.cvc,
        callback: handleCallback
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function CardForm() {
  const id = (0, import_react3.useId)();
  const { cardInfo } = useLoaderData();
  const [card, setCard] = (0, import_react3.useState)({
    name: cardInfo.name,
    number: cardInfo.number,
    expiry: cardInfo.expiry,
    cvc: cardInfo.cvc,
    issuer: "",
    focused: ""
  });
  const actionData = useActionData();
  const navigation = useNavigation();
  const [form, fieldset] = useForm({
    lastSubmission: actionData,
    id,
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parse(formData, { schema: editCardSchema });
    },
    defaultValue: {
      name: cardInfo.name,
      number: cardInfo.number,
      expiry: cardInfo.expiry,
      cvc: cardInfo.cvc,
      amount: cardInfo.amount
    }
  });
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-5 lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "h-min basis-full space-y-4 lg:basis-10/12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Card details" }, void 0, false, {
          fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InfoTooltip, { message: "Edit your card details" }, void 0, false, {
          fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "PUT", className: "mx-auto w-full", ...form.props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "fieldset",
        {
          className: "w-full space-y-3 disabled:opacity-70",
          disabled: navigation.state !== "idle",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                Input,
                {
                  label: "Name on card",
                  placeholder: "Email",
                  value: card.name,
                  onChange: handleInputChange,
                  onFocus: handleInputFocus,
                  error: fieldset.name.error,
                  ...helpers_exports.input(fieldset.name)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                  lineNumber: 105,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                Input,
                {
                  label: "Card number",
                  placeholder: "Card Number",
                  value: card.number,
                  onChange: handleInputChange,
                  onFocus: handleInputFocus,
                  error: fieldset.number.error,
                  ...helpers_exports.input(fieldset.number)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                  lineNumber: 115,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full flex-col gap-5 md:flex-row", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  Input,
                  {
                    label: "Expiry Date",
                    placeholder: "Expiry Date",
                    value: card.expiry,
                    onChange: handleInputChange,
                    onFocus: handleInputFocus,
                    error: fieldset.expiry.error,
                    ...helpers_exports.input(fieldset.expiry, {
                      type: "tel"
                    })
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                    lineNumber: 127,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                  lineNumber: 126,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  Input,
                  {
                    label: "CVC/CVV",
                    placeholder: "CVC/CVV",
                    value: card.cvc,
                    onChange: handleInputChange,
                    onFocus: handleInputFocus,
                    error: fieldset.cvc.error,
                    ...helpers_exports.input(fieldset.cvc, {
                      type: "tel"
                    })
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                    lineNumber: 141,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                  lineNumber: 140,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                lineNumber: 125,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                Input,
                {
                  label: "Amount",
                  placeholder: "Card amount",
                  error: fieldset.amount.error,
                  ...helpers_exports.input(fieldset.amount, {
                    type: "number"
                  })
                },
                void 0,
                false,
                {
                  fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                  lineNumber: 155,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
              lineNumber: 104,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { className: "gap-4 pt-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                Link,
                {
                  to: "/dashboard/wallets",
                  className: buttonVariants({ variant: "outline", size: "lg" }),
                  children: "Go back"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                  lineNumber: 166,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { size: "lg", children: navigation.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
                fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                lineNumber: 174,
                columnNumber: 19
              }, this) : "Save" }, void 0, false, {
                fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                lineNumber: 172,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
              lineNumber: 165,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
          lineNumber: 100,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardDesign, { card, handleCallback }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/wallets/card.$cardId.details/_route.tsx
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
var import_user = __toESM(require_user());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Card details | Remix Template" }
];
var editCardSchema = external_exports.object({
  name: external_exports.string({ required_error: "Card holder name is required" }),
  number: external_exports.string({ required_error: "Card number is required" }),
  expiry: external_exports.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),
  cvc: external_exports.string().regex(/^[0-9]{3,4}$/),
  amount: external_exports.number()
});
function _route() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-screen bg-[#1C2634]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container, { className: "pb-40 pt-28 lg:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      Breadcrumb,
      {
        heading: "Wallets",
        links: [
          { name: "Dashboard", href: "/dashboard/overview" },
          { name: "Wallets", href: "/dashboard/wallets" },
          { name: "Card details", href: "" }
        ]
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/_route.tsx",
        lineNumber: 83,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/_route.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/_route.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container, { className: "relative -top-32  h-auto w-full  lg:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardForm, {}, void 0, false, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/_route.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/_route.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/wallets/card.$cardId.details/_route.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
export {
  _route as default,
  meta
};
//# sourceMappingURL=/build/routes/dashboard/wallets/card.$cardId.details/_route-MKYFJ6MZ.js.map
