import {
  require_bcrypt
} from "/build/_shared/chunk-4RTNJEM4.js";
import {
  require_db
} from "/build/_shared/chunk-63W34KY2.js";
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
  Alert,
  AlertDescription,
  Button,
  Checkbox,
  Heading,
  Info,
  Input,
  Loader2
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useNavigation,
  useSearchParams
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/_auth/login/_route.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_bcryptjs = __toESM(require_bcrypt());
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var schema = external_exports.object({
  email: external_exports.string({ required_error: "Email is required" }).email("Email is invalid"),
  password: external_exports.string({ required_error: "Password is required" }).min(4, { message: "Password must be at least 4 characters." }),
  remember: external_exports.string().transform((value) => value === "on").optional(),
  redirectTo: external_exports.string()
});
var meta = () => [
  { title: "Login | Remix Template" }
];
function Login() {
  const id = (0, import_react.useId)();
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const actionData = useActionData();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard/overview";
  const [form, { email, password }] = useForm({
    lastSubmission: actionData,
    id,
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parse(formData, { schema });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full w-full items-center justify-center bg-[#F4F4F7] p-5 lg:p-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-white p-6 md:p-8 lg:relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute  -top-20 right-[28rem] hidden lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "103",
          height: "72",
          viewBox: "0 0 103 72",
          fill: "none",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { opacity: "0.1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "path",
              {
                d: "M0.97684 18.1162C3.64206 11.1695 11.1328 7.23167 18.0164 5.6835C25.6485 3.949 33.6375 4.54228 41.0573 7.03885C56.1035 12.0187 67.5029 23.7318 76.7342 36.1371C82.4844 43.8571 87.4393 52.1121 91.7277 60.7557C92.125 61.5598 91.4384 62.7101 90.6942 62.9653C89.7479 63.3026 88.8819 62.736 88.4846 61.9318C84.8354 54.63 80.6531 47.639 75.9376 40.9588C71.6062 34.8762 66.9437 29.0222 61.5637 23.8365C51.0367 13.8651 37.1572 6.59787 22.2733 8.45228C15.2766 9.31633 6.84221 12.5542 4.1214 19.7119C3.76132 20.5647 2.60404 20.8464 1.82011 20.4819C0.820782 19.993 0.616761 18.969 0.97684 18.1162Z",
                fill: "black"
              },
              void 0,
              false,
              {
                fileName: "app/routes/_auth/login/_route.tsx",
                lineNumber: 126,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "path",
              {
                d: "M100.918 35.8981C98.0786 44.4461 95.2396 52.9941 92.4006 61.5422C91.8226 63.3077 91.3577 65.7574 89.1676 66.1054C88.0748 66.3139 87.0754 65.8249 86.1361 65.1939C85.1968 64.5628 84.3263 63.9273 83.3826 63.2274C79.6898 60.6298 76.0613 57.9589 72.3685 55.3614C68.236 52.3772 64.108 49.4618 59.9755 46.4777C59.2471 45.9022 59.2408 44.7272 59.8207 44.0677C60.4651 43.335 61.5023 43.3375 62.2307 43.913C68.9701 48.7348 75.7096 53.5567 82.3757 58.314C84.1122 59.5162 85.7843 60.7916 87.5208 61.9937C87.7362 62.1182 88.3047 62.3582 88.4601 62.6248C88.6111 62.8225 88.5246 62.5515 88.3957 62.6981C88.0179 63.2754 88.1891 62.7113 88.1891 62.7113C88.1847 62.6425 88.5448 61.7897 88.5404 61.7209C88.7116 61.1568 88.8872 60.6615 89.0584 60.0974C90.3301 56.2132 91.6706 52.3245 92.9378 48.3714C94.3807 43.923 95.8924 39.4702 97.3352 35.0219C97.622 34.1047 98.4129 33.5008 99.3946 33.7143C100.385 34.0655 101.209 35.0497 100.918 35.8981Z",
                fill: "black"
              },
              void 0,
              false,
              {
                fileName: "app/routes/_auth/login/_route.tsx",
                lineNumber: 130,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/_auth/login/_route.tsx",
            lineNumber: 125,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/_auth/login/_route.tsx",
          lineNumber: 118,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_auth/login/_route.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Heading,
        {
          variant: "h1",
          className: "pb-8 text-center text-2xl lg:text-[32px]",
          children: "Login First to Your Account"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_auth/login/_route.tsx",
          lineNumber: 138,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, { variant: "primary", className: "mb-8 flex items-center gap-1 py-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Info, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/_auth/login/_route.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth/login/_route.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDescription, { children: [
          "You can se ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "demo@finlab.com" }, void 0, false, {
            fileName: "app/routes/_auth/login/_route.tsx",
            lineNumber: 150,
            columnNumber: 24
          }, this),
          " and password: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "demo123" }, void 0, false, {
            fileName: "app/routes/_auth/login/_route.tsx",
            lineNumber: 151,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_auth/login/_route.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth/login/_route.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "mx-auto", ...form.props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "fieldset",
        {
          className: "space-y-6 disabled:opacity-70",
          disabled: navigation.state !== "idle",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Input,
              {
                label: "Email",
                placeholder: "Email",
                ...helpers_exports.input(email, {
                  type: "email"
                })
              },
              void 0,
              false,
              {
                fileName: "app/routes/_auth/login/_route.tsx",
                lineNumber: 160,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Input,
              {
                label: "Password",
                placeholder: "Password",
                ...helpers_exports.input(password, {
                  type: "password"
                })
              },
              void 0,
              false,
              {
                fileName: "app/routes/_auth/login/_route.tsx",
                lineNumber: 168,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, { id: "remember", name: "remember" }, void 0, false, {
                  fileName: "app/routes/_auth/login/_route.tsx",
                  lineNumber: 178,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "label",
                  {
                    htmlFor: "remember",
                    className: "text-sm font-semibold leading-none text-secondary-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    children: "Remember me"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_auth/login/_route.tsx",
                    lineNumber: 179,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/_auth/login/_route.tsx",
                lineNumber: 177,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Link,
                {
                  to: "/auth/forgot-password",
                  className: "text-sm font-semibold text-primary-500",
                  children: "Forgot password?"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_auth/login/_route.tsx",
                  lineNumber: 187,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/_auth/login/_route.tsx",
              lineNumber: 176,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
              fileName: "app/routes/_auth/login/_route.tsx",
              lineNumber: 195,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", size: "lg", className: "w-full", children: navigation.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
              fileName: "app/routes/_auth/login/_route.tsx",
              lineNumber: 199,
              columnNumber: 17
            }, this) : "Login" }, void 0, false, {
              fileName: "app/routes/_auth/login/_route.tsx",
              lineNumber: 197,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-sm font-medium text-secondary-400", children: [
              "Don\u2019t have an account?",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/signup", className: "text-primary-500", children: "Register Here" }, void 0, false, {
                fileName: "app/routes/_auth/login/_route.tsx",
                lineNumber: 207,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_auth/login/_route.tsx",
              lineNumber: 205,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/_auth/login/_route.tsx",
          lineNumber: 156,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_auth/login/_route.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth/login/_route.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute hidden text-sm text-secondary-400 lg:bottom-3 lg:block", children: "\xA9 2022 Finlab. All rights reserved." }, void 0, false, {
      fileName: "app/routes/_auth/login/_route.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth/login/_route.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/_auth/login/_route-XD6M2PC4.js.map
