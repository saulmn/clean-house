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
  Button,
  Heading,
  Input,
  Loader2,
  Paragraph,
  buttonVariants,
  cn
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

// app/routes/_auth/signup/_route.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
var import_user = __toESM(require_user());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var schema = external_exports.object({
  fullName: external_exports.string({ required_error: "Full name is required" }),
  email: external_exports.string({ required_error: "Email is required" }).email("Email is invalid"),
  password: external_exports.string({ required_error: "Password is required" }).min(4, { message: "Password must be at least 4 characters." }),
  redirectTo: external_exports.string()
});
var meta = () => [
  { title: "Sign up | Remix Template" }
];
function SignUp() {
  const id = (0, import_react.useId)();
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const actionData = useActionData();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard/overview";
  const [form, { fullName, email, password }] = useForm(
    {
      lastSubmission: actionData,
      id,
      shouldValidate: "onBlur",
      onValidate({ formData }) {
        return parse(formData, { schema });
      }
    }
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full w-full items-center justify-center bg-[#F4F4F7] p-5  lg:p-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-white p-6 md:p-8 lg:w-8/12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: "/login",
          className: cn(buttonVariants({ variant: "link" }), "mb-5"),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                    fileName: "app/routes/_auth/signup/_route.tsx",
                    lineNumber: 119,
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
                    fileName: "app/routes/_auth/signup/_route.tsx",
                    lineNumber: 127,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/_auth/signup/_route.tsx",
              lineNumber: 112,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/_auth/signup/_route.tsx",
          lineNumber: 108,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Heading,
        {
          variant: "h1",
          className: "pb-3 text-center text-2xl lg:text-[32px]",
          children: [
            "Create New Account",
            " "
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/_auth/signup/_route.tsx",
          lineNumber: 138,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "body2", className: "pb-8 text-center", children: "Please register by filling in your personal data" }, void 0, false, {
        fileName: "app/routes/_auth/signup/_route.tsx",
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
                label: "Full name",
                placeholder: "Full name",
                "data-testid": "full-name",
                error: fullName.error,
                ...helpers_exports.input(fullName)
              },
              void 0,
              false,
              {
                fileName: "app/routes/_auth/signup/_route.tsx",
                lineNumber: 154,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Input,
              {
                label: "Email",
                placeholder: "Email",
                "data-testid": "email",
                error: email.error,
                ...helpers_exports.input(email, {
                  type: "email"
                })
              },
              void 0,
              false,
              {
                fileName: "app/routes/_auth/signup/_route.tsx",
                lineNumber: 162,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Input,
              {
                label: "Password",
                placeholder: "Password",
                "data-testid": "password",
                error: password.error,
                ...helpers_exports.input(password, {
                  type: "password"
                })
              },
              void 0,
              false,
              {
                fileName: "app/routes/_auth/signup/_route.tsx",
                lineNumber: 172,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
              fileName: "app/routes/_auth/signup/_route.tsx",
              lineNumber: 182,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", size: "lg", className: "w-full", children: navigation.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
              fileName: "app/routes/_auth/signup/_route.tsx",
              lineNumber: 186,
              columnNumber: 17
            }, this) : "Create account" }, void 0, false, {
              fileName: "app/routes/_auth/signup/_route.tsx",
              lineNumber: 184,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-sm font-medium text-secondary-400", children: [
              "Already have an account?",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "text-primary-500", children: "Login" }, void 0, false, {
                fileName: "app/routes/_auth/signup/_route.tsx",
                lineNumber: 194,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_auth/signup/_route.tsx",
              lineNumber: 192,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/_auth/signup/_route.tsx",
          lineNumber: 150,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_auth/signup/_route.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth/signup/_route.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute hidden text-sm text-secondary-400 lg:bottom-3 lg:block", children: "\xA9 2022 Finlab. All rights reserved." }, void 0, false, {
      fileName: "app/routes/_auth/signup/_route.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth/signup/_route.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}
export {
  SignUp as default,
  meta
};
//# sourceMappingURL=/build/routes/_auth/signup/_route-QP5Y7ZR6.js.map
