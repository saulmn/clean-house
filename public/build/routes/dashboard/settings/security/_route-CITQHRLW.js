import {
  InfoTooltip
} from "/build/_shared/chunk-PYU4XBSA.js";
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
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Loader2,
  buttonVariants,
  cn
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  Link,
  require_jsx_dev_runtime,
  useFetcher
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard/settings/security/_route.tsx
var import_bcryptjs = __toESM(require_bcrypt());
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Settings: Security | Remix templates" }
];
var schema = external_exports.object({
  currentPassword: external_exports.string({ required_error: "Current password is required" }).min(4, "Current password must be at least 4 characters."),
  newPassword: external_exports.string({ required_error: "New password is required" }).min(4, "New password must be at least 4 characters."),
  confirmNewPassword: external_exports.string({ required_error: "Confirm new password is required" }).min(4, "Confirm new password must be at least 4 characters.")
}).superRefine(({ currentPassword, newPassword, confirmNewPassword }, ctx) => {
  if (newPassword === currentPassword) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      path: ["newPassword"],
      message: "New password must be different from the current password."
    });
  }
  if (newPassword !== confirmNewPassword) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      path: ["confirmNewPassword"],
      message: "Confirm password must match the new password"
    });
  }
});
function _route() {
  var _a, _b;
  const editPasswordFetcher = useFetcher();
  const actionData = editPasswordFetcher.data;
  const isSubmitting = editPasswordFetcher.state !== "idle";
  const [form, { currentPassword, newPassword, confirmNewPassword }] = useForm({
    lastSubmission: actionData,
    id: "password",
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parse(formData, { schema });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "basis-8/12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Security" }, void 0, false, {
        fileName: "app/routes/dashboard/settings/security/_route.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoTooltip, { message: "Update password" }, void 0, false, {
        fileName: "app/routes/dashboard/settings/security/_route.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/settings/security/_route.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/settings/security/_route.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(editPasswordFetcher.Form, { method: "PUT", ...form.props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "disabled:opacity-70", disabled: isSubmitting, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "my-6 space-y-6 border-y border-secondary-100 py-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Input,
          {
            label: "Current password",
            placeholder: "Current password",
            error: (_b = currentPassword.error) != null ? _b : (_a = actionData == null ? void 0 : actionData.error.currentPassword) == null ? void 0 : _a[0],
            ...helpers_exports.input(currentPassword, {
              type: "password"
            })
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/settings/security/_route.tsx",
            lineNumber: 145,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Input,
          {
            label: "New password",
            placeholder: "New password",
            error: newPassword.error,
            ...helpers_exports.input(newPassword, {
              type: "password"
            })
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/settings/security/_route.tsx",
            lineNumber: 156,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { className: "text-gray text-xs leading-loose", children: "At least 4 characters" }, void 0, false, {
          fileName: "app/routes/dashboard/settings/security/_route.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Input,
          {
            label: "Confirm new password",
            placeholder: "Confirm new password",
            error: confirmNewPassword.error,
            ...helpers_exports.input(confirmNewPassword, {
              type: "password"
            })
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/settings/security/_route.tsx",
            lineNumber: 169,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/settings/security/_route.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardFooter, { className: "gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/dashboard/overview",
            className: cn(buttonVariants({ variant: "outline", size: "lg" })),
            children: "Go back"
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/settings/security/_route.tsx",
            lineNumber: 180,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "lg", children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
          fileName: "app/routes/dashboard/settings/security/_route.tsx",
          lineNumber: 188,
          columnNumber: 17
        }, this) : "Save" }, void 0, false, {
          fileName: "app/routes/dashboard/settings/security/_route.tsx",
          lineNumber: 186,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/settings/security/_route.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/settings/security/_route.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/settings/security/_route.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/settings/security/_route.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
export {
  _route as default,
  meta
};
//# sourceMappingURL=/build/routes/dashboard/settings/security/_route-CITQHRLW.js.map
