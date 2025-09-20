var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// empty-module:~/utils/gtags.client
var require_gtags = __commonJS({
  "empty-module:~/utils/gtags.client"(exports, module) {
    module.exports = {};
  }
});

// empty-module:./ExpenseCategory.client
var require_ExpenseCategory = __commonJS({
  "empty-module:./ExpenseCategory.client"(exports, module) {
    module.exports = {};
  }
});

// empty-module:./IncomeAnalysis.client
var require_IncomeAnalysis = __commonJS({
  "empty-module:./IncomeAnalysis.client"(exports, module) {
    module.exports = {};
  }
});

// empty-module:./ExpenseAnalysis.client
var require_ExpenseAnalysis = __commonJS({
  "empty-module:./ExpenseAnalysis.client"(exports, module) {
    module.exports = {};
  }
});

// empty-module:./BalanceStatistics.client
var require_BalanceStatistics = __commonJS({
  "empty-module:./BalanceStatistics.client"(exports, module) {
    module.exports = {};
  }
});

// empty-module:./BalanceAnalytics.client
var require_BalanceAnalytics = __commonJS({
  "empty-module:./BalanceAnalytics.client"(exports, module) {
    module.exports = {};
  }
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 87,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
import { useEffect } from "react";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useNavigation
} from "@remix-run/react";
import NProgress from "nprogress";

// app/session.server.ts
import { createCookieSessionStorage, redirect } from "@remix-run/node";
import invariant2 from "tiny-invariant";

// app/models/user.server.ts
import bcrypt from "bcryptjs";

// app/db.server.ts
import { PrismaClient } from "@prisma/client";
import invariant from "tiny-invariant";
var prisma;
global.__db__ || (global.__db__ = getClient()), prisma = global.__db__;
function getClient() {
  let { DATABASE_URL } = process.env;
  invariant(typeof DATABASE_URL == "string", "DATABASE_URL env var not set");
  let databaseUrl = new URL(DATABASE_URL), isLocalHost = databaseUrl.hostname === "localhost", PRIMARY_REGION = isLocalHost ? null : process.env.PRIMARY_REGION, FLY_REGION = isLocalHost ? null : process.env.FLY_REGION, isReadReplicaRegion = !PRIMARY_REGION || PRIMARY_REGION === FLY_REGION;
  isLocalHost || (databaseUrl.host.endsWith(".internal") && (databaseUrl.host = `${FLY_REGION}.${databaseUrl.host}`), isReadReplicaRegion || (databaseUrl.port = "5433")), console.log(`\u{1F50C} setting up prisma client to ${databaseUrl.host}`);
  let client = new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl.toString()
      }
    }
  });
  return client.$connect(), client;
}

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(fullName, email, password) {
  let hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      fullName,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function updateUserBalance({
  userId,
  type,
  amount
}) {
  return (type === "Transfer" || type === "Subscribe") && (amount = -amount), await prisma.user.update({
    where: { id: userId },
    data: {
      balance: {
        increment: amount
      }
    }
  });
}

// app/session.server.ts
invariant2(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-6MNMW6YD.css";

// node_modules/slick-carousel/slick/slick.css
var slick_default = "/build/_assets/slick-6NM34U5B.css";

// node_modules/slick-carousel/slick/slick-theme.css
var slick_theme_default = "/build/_assets/slick-theme-HDTRI3SO.css";

// node_modules/react-credit-cards-2/dist/es/styles-compiled.css
var styles_compiled_default = "/build/_assets/styles-compiled-KO4O7AQT.css";

// node_modules/react-phone-number-input/style.css
var style_default = "/build/_assets/style-UQB644U2.css";

// node_modules/nprogress/nprogress.css
var nprogress_default = "/build/_assets/nprogress-IEK5PXTZ.css";

// app/components/BuyThisTemplate.tsx
import { Link as Link3 } from "@remix-run/react";

// app/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// app/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// app/components/ui/button.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[14px] text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-transparent text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-[14px] px-3",
        lg: "h-11 rounded-[14px] px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV2(
    asChild ? Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.tsx",
      lineNumber: 46,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// app/components/ui/card.tsx
import * as React2 from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Card = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV3(
  "div",
  {
    ref,
    className: cn("rounded-2xl bg-card p-6 text-card-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV3(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 21,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV3(
  "h3",
  {
    ref,
    className: cn(
      "text-base font-semibold leading-none tracking-tight text-secondary-500 md:text-lg",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 33,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV3(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 48,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV3("div", { ref, className: cn(className), ...props }, void 0, !1, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 60,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV3("div", { ref, className: cn("flex items-center", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 68,
  columnNumber: 3
}, this));
CardFooter.displayName = "CardFooter";

// app/components/ui/checkbox.tsx
import * as React3 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Checkbox = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV4(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ jsxDEV4(Check, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/components/ui/checkbox.tsx",
          lineNumber: 22,
          columnNumber: 7
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/checkbox.tsx",
        lineNumber: 19,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/checkbox.tsx",
    lineNumber: 11,
    columnNumber: 3
  },
  this
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// app/components/ui/input.tsx
import * as React5 from "react";

// app/components/ui/label.tsx
import * as React4 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva2 } from "class-variance-authority";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var labelVariants = cva2(
  "text-sm text-secondary-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Label = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/label.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));
Label.displayName = LabelPrimitive.Root.displayName;

// app/components/ui/input.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var Input = React5.forwardRef(
  ({ id, className, error, label, type, ...props }, ref) => /* @__PURE__ */ jsxDEV6("div", { className: "w-full space-y-[3px]", children: [
    label && /* @__PURE__ */ jsxDEV6(Label, { htmlFor: id, className: cn(error ? "text-destructive" : ""), children: label }, void 0, !1, {
      fileName: "app/components/ui/input.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV6(
      "input",
      {
        id,
        type,
        className: cn(
          "flex h-14 w-full rounded-[15px] border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          error ? "border-destructive placeholder:text-destructive" : "border-input",
          className
        ),
        ref,
        ...props
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/input.tsx",
        lineNumber: 24,
        columnNumber: 9
      },
      this
    ),
    error ? /* @__PURE__ */ jsxDEV6("span", { className: "text-xs text-destructive", id: `${id}-error`, children: error }, void 0, !1, {
      fileName: "app/components/ui/input.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/ui/input.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this)
);
Input.displayName = "Input";

// app/components/ui/navigation-menu.tsx
import * as React6 from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva as cva3 } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var NavigationMenu = React6.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV7(NavigationMenuViewport, {}, void 0, !1, {
        fileName: "app/components/ui/navigation-menu.tsx",
        lineNumber: 21,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  this
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 30,
    columnNumber: 3
  },
  this
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item, navigationMenuTriggerStyle = cva3(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), NavigationMenuTrigger = React6.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsxDEV7(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/navigation-menu.tsx",
          lineNumber: 57,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 69,
    columnNumber: 3
  },
  this
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link, NavigationMenuViewport = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsxDEV7(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 87,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 86,
  columnNumber: 3
}, this));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV7("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }, void 0, !1, {
      fileName: "app/components/ui/navigation-menu.tsx",
      lineNumber: 112,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 104,
    columnNumber: 3
  },
  this
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// app/components/ui/select.tsx
import * as React7 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check2, ChevronDown as ChevronDown2 } from "lucide-react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var Select = SelectPrimitive.Root, SelectGroup = SelectPrimitive.Group, SelectValue = SelectPrimitive.Value, SelectTrigger = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-14 w-full items-center justify-between rounded-[15px] border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV8(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ jsxDEV8(ChevronDown2, { className: "h-4 w-4 opacity-50" }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 17,
    columnNumber: 3
  },
  this
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectContent = React7.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxDEV8(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV8(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: /* @__PURE__ */ jsxDEV8(
      SelectPrimitive.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 38,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 37,
  columnNumber: 3
}, this));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 67,
    columnNumber: 3
  },
  this
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV8("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV8(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV8(Check2, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 88,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 87,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV8(SelectPrimitive.ItemText, { children }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 79,
    columnNumber: 3
  },
  this
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 102,
    columnNumber: 3
  },
  this
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// app/components/ui/container.tsx
import * as React8 from "react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var Container = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  "div",
  {
    ref,
    className: cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-[10px]", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/container.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Container.displayName = "Container";

// app/components/ui/typography.tsx
import { cva as cva4 } from "class-variance-authority";
import React9 from "react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var headingVariants = cva4("text-secondary-500", {
  variants: {
    variant: {
      h1: "text-4xl md:text-5xl lg:text-7xl font-bold",
      h2: "text-3xl md:text-[36px] lg:text-[56px]",
      h3: "text-5xl",
      h4: "text-2xl md:text-3xl lg:text-[40px]",
      h5: "text-3xl lg:text-4xl",
      h6: "text-xl lg:text-[32px]"
    }
  },
  defaultVariants: {
    variant: "h1"
  }
}), Heading = React9.forwardRef(
  ({ variant, className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
    variant,
    {
      ref,
      className: cn(headingVariants({ variant, className })),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/typography.tsx",
      lineNumber: 34,
      columnNumber: 7
    },
    this
  )
);
Heading.displayName = "Heading";
var paragraphVariants = cva4("text-secondary-500", {
  variants: {
    variant: {
      subtitle1: "text-2xl",
      subtitle2: "text-xl",
      body1: "text-sm lg:text-lg text-secondary-400",
      body2: "text-base text-secondary-400",
      body3: "text-sm",
      caption: "text-xs"
    }
  },
  defaultVariants: {
    variant: "subtitle1"
  }
}), Paragraph = React9.forwardRef(
  ({ variant, className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
    "p",
    {
      ref,
      className: cn(paragraphVariants({ variant, className })),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/typography.tsx",
      lineNumber: 70,
      columnNumber: 7
    },
    this
  )
);
Paragraph.displayName = "Paragraph";

// app/components/ui/avatar.tsx
import * as React10 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var Avatar = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV11(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV11(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV11(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 37,
    columnNumber: 3
  },
  this
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// app/components/ui/alert.tsx
import * as React11 from "react";
import { cva as cva5 } from "class-variance-authority";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var alertVariants = cva5(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        primary: "border-primary/50 text-primary dark:border-primary [&>svg]:text-primary",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Alert = React11.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxDEV12(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert.tsx",
    lineNumber: 28,
    columnNumber: 3
  },
  this
));
Alert.displayName = "Alert";
var AlertTitle = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV12(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert.tsx",
    lineNumber: 41,
    columnNumber: 3
  },
  this
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV12(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert.tsx",
    lineNumber: 53,
    columnNumber: 3
  },
  this
));
AlertDescription.displayName = "AlertDescription";

// app/components/ui/breadcrumb.tsx
import { Link as Link2 } from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function Breadcrumb({
  heading,
  links: links2 = []
}) {
  let currentLink = links2[links2.length - 1].name;
  return /* @__PURE__ */ jsxDEV13(Fragment, { children: [
    /* @__PURE__ */ jsxDEV13("h2", { className: "pb-2 text-xl font-bold text-white md:text-2xl", children: heading }, void 0, !1, {
      fileName: "app/components/ui/breadcrumb.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("nav", { className: "flex", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxDEV13("ol", { className: "inline-flex items-center", children: links2.map((link) => /* @__PURE__ */ jsxDEV13(
      "li",
      {
        className: "inline-flex w-full items-center text-xs md:text-sm",
        children: link.name === currentLink ? /* @__PURE__ */ jsxDEV13(
          "span",
          {
            "aria-current": "page",
            className: "whitespace-nowrap text-white",
            children: link.name
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/breadcrumb.tsx",
            lineNumber: 26,
            columnNumber: 17
          },
          this
        ) : /* @__PURE__ */ jsxDEV13(Fragment, { children: [
          /* @__PURE__ */ jsxDEV13(
            Link2,
            {
              to: link.href,
              className: "whitespace-nowrap text-[#A2A6AA] hover:underline",
              children: link.name
            },
            void 0,
            !1,
            {
              fileName: "app/components/ui/breadcrumb.tsx",
              lineNumber: 34,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV13("span", { className: "px-0.5", children: /* @__PURE__ */ jsxDEV13(
            "svg",
            {
              className: "h-5 w-5 text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsxDEV13(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                  clipRule: "evenodd"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ui/breadcrumb.tsx",
                  lineNumber: 47,
                  columnNumber: 23
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/ui/breadcrumb.tsx",
              lineNumber: 41,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/ui/breadcrumb.tsx",
            lineNumber: 40,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/breadcrumb.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this)
      },
      link.href,
      !1,
      {
        fileName: "app/components/ui/breadcrumb.tsx",
        lineNumber: 21,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/ui/breadcrumb.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/breadcrumb.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/breadcrumb.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/ui/table.tsx
import * as React12 from "react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var Table = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ jsxDEV14(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-lg", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 10,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this));
Table.displayName = "Table";
var TableHeader = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "thead",
  {
    ref,
    className: cn("bg-secondary-100 text-base", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 23,
    columnNumber: 3
  },
  this
));
TableHeader.displayName = "TableHeader";
var TableBody = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 35,
    columnNumber: 3
  },
  this
));
TableBody.displayName = "TableBody";
var TableFooter = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "tfoot",
  {
    ref,
    className: cn("bg-primary font-medium text-primary-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 47,
    columnNumber: 3
  },
  this
));
TableFooter.displayName = "TableFooter";
var TableRow = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "tr",
  {
    ref,
    className: cn(
      "transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 59,
    columnNumber: 3
  },
  this
));
TableRow.displayName = "TableRow";
var TableHead = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "th",
  {
    ref,
    className: cn(
      "h-12 whitespace-nowrap px-4 text-left align-middle text-base font-semibold text-secondary-400 [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 74,
    columnNumber: 3
  },
  this
));
TableHead.displayName = "TableHead";
var TableCell = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "td",
  {
    ref,
    className: cn(
      "p-4 align-middle font-semibold text-secondary-500 [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 89,
    columnNumber: 3
  },
  this
));
TableCell.displayName = "TableCell";
var TableCaption = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 104,
    columnNumber: 3
  },
  this
));
TableCaption.displayName = "TableCaption";

// app/components/ui/badge.tsx
import { cva as cva6 } from "class-variance-authority";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var badgeVariants = cva6(
  "inline-flex items-center rounded-sm text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-[#ECF8F0CC] text-primary-600",
        secondary: "bg-secondary-100 text-secondary-400",
        destructive: "bg-[#F2E7E7] text-error-600",
        warning: "bg-[#FBF4E4] text-warning-600",
        outline: "text-foreground"
      },
      size: {
        default: "px-2.5 py-0.5",
        sm: "px-1 py-[3px] font-semibold",
        lg: "px-3 py-1.5 text-sm font-bold"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Badge({ className, variant, size, ...props }) {
  return /* @__PURE__ */ jsxDEV15(
    "div",
    {
      className: cn(badgeVariants({ variant, size }), className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/badge.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  );
}

// app/components/ui/dialog.tsx
import * as React13 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var Dialog = DialogPrimitive.Root, DialogTrigger = DialogPrimitive.Trigger, DialogPortal = (props) => /* @__PURE__ */ jsxDEV16(DialogPrimitive.Portal, { ...props }, void 0, !1, {
  fileName: "app/components/ui/dialog.tsx",
  lineNumber: 11,
  columnNumber: 3
}, this);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;
var DialogOverlay = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 19,
    columnNumber: 3
  },
  this
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React13.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV16(DialogPortal, { children: [
  /* @__PURE__ */ jsxDEV16(DialogOverlay, {}, void 0, !1, {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV16(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl md:w-full",
        className
      ),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/dialog.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ui/dialog.tsx",
  lineNumber: 34,
  columnNumber: 3
}, this));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV16(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 58,
    columnNumber: 3
  },
  this
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV16(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 72,
    columnNumber: 3
  },
  this
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 86,
    columnNumber: 3
  },
  this
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 101,
    columnNumber: 3
  },
  this
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// app/components/ui/popover.tsx
import * as React14 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var Popover = PopoverPrimitive.Root, PopoverTrigger = PopoverPrimitive.Trigger, PopoverContent = React14.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV17(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV17(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/popover.tsx",
    lineNumber: 15,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/popover.tsx",
  lineNumber: 14,
  columnNumber: 3
}, this));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// app/components/ui/calendar.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function Calendar({
  className,
  classNames,
  showOutsideDays = !0,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV18(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ...props2 }) => /* @__PURE__ */ jsxDEV18(ChevronLeft, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/components/ui/calendar.tsx",
          lineNumber: 53,
          columnNumber: 37
        }, this),
        IconRight: ({ ...props2 }) => /* @__PURE__ */ jsxDEV18(ChevronRight, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/components/ui/calendar.tsx",
          lineNumber: 54,
          columnNumber: 38
        }, this)
      },
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/calendar.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
Calendar.displayName = "Calendar";

// app/components/ui/scroll-area.tsx
import * as React15 from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var ScrollArea = React15.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV19(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV19(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }, void 0, !1, {
        fileName: "app/components/ui/scroll-area.tsx",
        lineNumber: 15,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV19(ScrollBar, {}, void 0, !1, {
        fileName: "app/components/ui/scroll-area.tsx",
        lineNumber: 18,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV19(ScrollAreaPrimitive.Corner, {}, void 0, !1, {
        fileName: "app/components/ui/scroll-area.tsx",
        lineNumber: 19,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/scroll-area.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React15.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxDEV19(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV19(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }, void 0, !1, {
      fileName: "app/components/ui/scroll-area.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/scroll-area.tsx",
    lineNumber: 28,
    columnNumber: 3
  },
  this
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// app/components/ui/tooltip.tsx
import * as React16 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var TooltipProvider = TooltipPrimitive.Provider, Tooltip = TooltipPrimitive.Root, TooltipTrigger = TooltipPrimitive.Trigger, TooltipContent = React16.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV20(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/tooltip.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// app/components/ui/command.tsx
import * as React17 from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var Command = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV21(
  CommandPrimitive,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 13,
    columnNumber: 3
  },
  this
));
Command.displayName = CommandPrimitive.displayName;
var CommandInput = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV21("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsxDEV21(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }, void 0, !1, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV21(
    CommandPrimitive.Input,
    {
      ref,
      className: cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/command.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 42,
  columnNumber: 3
}, this));
CommandInput.displayName = CommandPrimitive.Input.displayName;
var CommandList = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV21(
  CommandPrimitive.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 61,
    columnNumber: 3
  },
  this
));
CommandList.displayName = CommandPrimitive.List.displayName;
var CommandEmpty = React17.forwardRef((props, ref) => /* @__PURE__ */ jsxDEV21(
  CommandPrimitive.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 74,
    columnNumber: 3
  },
  this
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
var CommandGroup = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV21(
  CommandPrimitive.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 87,
    columnNumber: 3
  },
  this
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
var CommandSeparator = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV21(
  CommandPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 103,
    columnNumber: 3
  },
  this
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
var CommandItem = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV21(
  CommandPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 115,
    columnNumber: 3
  },
  this
));
CommandItem.displayName = CommandPrimitive.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV21(
  "span",
  {
    className: cn(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 132,
    columnNumber: 5
  },
  this
);
CommandShortcut.displayName = "CommandShortcut";

// app/components/ui/dropdown-menu.tsx
import * as React18 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check as Check3, ChevronRight as ChevronRight2, Circle } from "lucide-react";
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root, DropdownMenuTrigger = DropdownMenuPrimitive.Trigger, DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuSubTrigger = React18.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxDEV22(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV22(ChevronRight2, { className: "ml-auto h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 35,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV22(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 45,
    columnNumber: 3
  },
  this
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React18.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV22(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV22(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-2xl bg-popover p-1 text-popover-foreground shadow-[0px_14px_84px_0px_rgba(0,0,0,0.10)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 62,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 61,
  columnNumber: 3
}, this));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React18.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV22(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm text-secondary-500 outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 81,
    columnNumber: 3
  },
  this
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React18.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxDEV22(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV22("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV22(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV22(Check3, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 106,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 97,
    columnNumber: 3
  },
  this
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React18.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV22(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV22("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV22(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV22(Circle, { className: "h-2 w-2 fill-current" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 121,
    columnNumber: 3
  },
  this
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React18.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV22(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 145,
    columnNumber: 3
  },
  this
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV22(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 161,
    columnNumber: 3
  },
  this
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV22(
  "span",
  {
    className: cn("ml-auto text-xs tracking-widest opacity-60", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 174,
    columnNumber: 5
  },
  this
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// app/components/ui/sheet.tsx
import * as React19 from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva as cva7 } from "class-variance-authority";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var Sheet = SheetPrimitive.Root, SheetTrigger = SheetPrimitive.Trigger;
var SheetPortal = (props) => /* @__PURE__ */ jsxDEV23(SheetPrimitive.Portal, { ...props }, void 0, !1, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this);
SheetPortal.displayName = SheetPrimitive.Portal.displayName;
var SheetOverlay = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV23(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 23,
    columnNumber: 3
  },
  this
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva7(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), SheetContent = React19.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV23(SheetPortal, { children: [
  /* @__PURE__ */ jsxDEV23(SheetOverlay, {}, void 0, !1, {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV23(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sheet.tsx",
      lineNumber: 63,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 61,
  columnNumber: 3
}, this));
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV23(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 82,
    columnNumber: 3
  },
  this
);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV23(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 96,
    columnNumber: 3
  },
  this
);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV23(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 110,
    columnNumber: 3
  },
  this
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV23(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 122,
    columnNumber: 3
  },
  this
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

// app/utils/setting.ts
var BUY_URL = "";

// app/components/BuyThisTemplate.tsx
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
function BuyThisTemplate() {
  return /* @__PURE__ */ jsxDEV24("div", { className: "fixed bottom-10 right-10 z-50 hidden shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)] md:block", children: /* @__PURE__ */ jsxDEV24(
    Link3,
    {
      to: BUY_URL,
      className: cn(buttonVariants({}), "w-full capitalize"),
      target: "_blank",
      children: "Buy this template"
    },
    void 0,
    !1,
    {
      fileName: "app/components/BuyThisTemplate.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/BuyThisTemplate.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var gtag = __toESM(require_gtags());
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: slick_default },
  { rel: "stylesheet", href: slick_theme_default },
  { rel: "stylesheet", href: styles_compiled_default },
  { rel: "stylesheet", href: style_default },
  { rel: "stylesheet", href: nprogress_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
], meta = () => [
  {
    title: "Finlab - Remix Full Stack Client and Admin Finance Template"
  },
  {
    name: "description",
    content: "The ultimate finance client, admin & dashboard template built with Remix, shadcn/ui and prisma."
  },
  {
    name: "keywords",
    content: "react,remix,kit,prisma,tailwind,application,dashboard,admin,template,theme"
  },
  {
    name: "author",
    content: "Diakitelo"
  },
  {
    name: "copyright",
    content: "Remix Templates"
  },
  {
    name: "theme-color",
    content: "#31B099"
  }
], loader = async ({ request }) => json({
  user: await getUser(request),
  gaTrackingId: process.env.GA_TRACKING_ID
});
function App() {
  let location = useLocation(), navigation = useNavigation(), { gaTrackingId } = useLoaderData();
  return NProgress.configure({ showSpinner: !1 }), useEffect(() => {
    gaTrackingId?.length && gtag.pageview(location.pathname, gaTrackingId), navigation.state === "idle" ? NProgress.done() : NProgress.start();
  }, [location, gaTrackingId, navigation.state]), /* @__PURE__ */ jsxDEV25("html", { lang: "en", className: "h-full", suppressHydrationWarning: !0, children: [
    /* @__PURE__ */ jsxDEV25("head", { children: [
      /* @__PURE__ */ jsxDEV25("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("body", { className: "h-full", children: [
      null,
      /* @__PURE__ */ jsxDEV25(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(BuyThisTemplate, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader2
});
var loader2 = async ({ request }) => {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
};

// app/routes/_auth/_layout.tsx
var layout_exports = {};
__export(layout_exports, {
  default: () => _layout
});
import { Link as Link4, Outlet as Outlet2 } from "@remix-run/react";
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function _layout() {
  return /* @__PURE__ */ jsxDEV26("div", { className: "flex h-auto w-full flex-col font-manrope lg:h-screen lg:flex-row", children: [
    /* @__PURE__ */ jsxDEV26("div", { className: "flex basis-full flex-col bg-primary-500 lg:basis-1/2", children: [
      /* @__PURE__ */ jsxDEV26("div", { className: "min-h-[50vh] overflow-hidden lg:h-full", children: /* @__PURE__ */ jsxDEV26("img", { src: "/images/auth.png", alt: "dashboard", className: "w-full" }, void 0, !1, {
        fileName: "app/routes/_auth/_layout.tsx",
        lineNumber: 10,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_auth/_layout.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV26("div", { className: " bg-secondary-500 p-6 lg:p-12", children: [
        /* @__PURE__ */ jsxDEV26("div", { className: "mb-6 h-10", children: /* @__PURE__ */ jsxDEV26(Link4, { to: "/", children: /* @__PURE__ */ jsxDEV26("img", { src: "/images/logo-secondary.svg", alt: "Finlab Logo" }, void 0, !1, {
          fileName: "app/routes/_auth/_layout.tsx",
          lineNumber: 16,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth/_layout.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth/_layout.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV26(
          Heading,
          {
            variant: "h4",
            className: "mb-6 font-bold text-white lg:leading-tight lg:tracking-[-2.16px]",
            children: "Let\u2019s empower your financial task today with Findash."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth/_layout.tsx",
            lineNumber: 20,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV26(Paragraph, { variant: "subtitle2", className: "text-secondary-200", children: "The one-stop platform for all financial management of small and medium-sized business." }, void 0, !1, {
          fileName: "app/routes/_auth/_layout.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth/_layout.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth/_layout.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV26("div", { className: "basis-full lg:basis-1/2", children: /* @__PURE__ */ jsxDEV26(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/_auth/_layout.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth/_layout.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth/_layout.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_auth/login/_route.tsx
var route_exports = {};
__export(route_exports, {
  action: () => action,
  default: () => Login,
  loader: () => loader3,
  meta: () => meta2
});
import { z } from "zod";
import { useId } from "react";
import { parse } from "@conform-to/zod";
import {
  Form,
  Link as Link5,
  useActionData,
  useNavigation as useNavigation2,
  useSearchParams
} from "@remix-run/react";
import { conform, useForm } from "@conform-to/react";
import { json as json2, redirect as redirect2 } from "@remix-run/node";
import bcrypt2 from "bcryptjs";
import { Info, Loader2 } from "lucide-react";

// app/utils.ts
import { useMatches } from "@remix-run/react";
import { useMemo } from "react";
var DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = useMatches(), data = useMemo(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  )?.data;
  if (data && typeof data == "object" && !Array.isArray(data))
    return data;
}
function isUser(user) {
  return user && typeof user == "object" && typeof user.email == "string";
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!(!data || !isUser(data.user)))
    return data.user;
}
function useUser() {
  let maybeUser = useOptionalUser();
  if (!maybeUser)
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  return maybeUser;
}

// app/routes/_auth/login/_route.tsx
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
var schema = z.object({
  email: z.string({ required_error: "Email is required" }).email("Email is invalid"),
  password: z.string({ required_error: "Password is required" }).min(4, { message: "Password must be at least 4 characters." }),
  remember: z.string().transform((value) => value === "on").optional(),
  redirectTo: z.string()
}), meta2 = () => [
  { title: "Login | Remix Template" }
], loader3 = async ({ request }) => await getUserId(request) ? redirect2("/dashboard/overview") : json2({}), action = async ({ request }) => {
  let formData = await request.formData(), submission = parse(formData, { schema });
  if (!submission.value || submission.intent !== "submit")
    return json2(submission, { status: 400 });
  let userWithPassword = await prisma.user.findUnique({
    where: { email: submission.value.email },
    include: {
      password: !0
    }
  });
  return !userWithPassword || !userWithPassword.password ? json2(
    {
      ...submission,
      error: { email: ["No user found with this email"] }
    },
    { status: 400 }
  ) : await bcrypt2.compare(
    submission.value.password,
    userWithPassword.password.hash
  ) ? createUserSession({
    redirectTo: safeRedirect(submission.value.redirectTo, "/"),
    remember: submission.value.remember ?? !1,
    request,
    userId: userWithPassword.id
  }) : json2(
    {
      ...submission,
      error: { password: ["Invalid password"] }
    },
    { status: 400 }
  );
};
function Login() {
  let id = useId(), [searchParams] = useSearchParams(), navigation = useNavigation2(), actionData = useActionData(), redirectTo = searchParams.get("redirectTo") || "/dashboard/overview", [form, { email, password }] = useForm({
    lastSubmission: actionData,
    id,
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parse(formData, { schema });
    }
  });
  return /* @__PURE__ */ jsxDEV27("div", { className: "flex h-full w-full items-center justify-center bg-[#F4F4F7] p-5 lg:p-0", children: [
    /* @__PURE__ */ jsxDEV27("div", { className: "rounded-2xl bg-white p-6 md:p-8 lg:relative", children: [
      /* @__PURE__ */ jsxDEV27("div", { className: "absolute  -top-20 right-[28rem] hidden lg:block", children: /* @__PURE__ */ jsxDEV27(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "103",
          height: "72",
          viewBox: "0 0 103 72",
          fill: "none",
          children: /* @__PURE__ */ jsxDEV27("g", { opacity: "0.1", children: [
            /* @__PURE__ */ jsxDEV27(
              "path",
              {
                d: "M0.97684 18.1162C3.64206 11.1695 11.1328 7.23167 18.0164 5.6835C25.6485 3.949 33.6375 4.54228 41.0573 7.03885C56.1035 12.0187 67.5029 23.7318 76.7342 36.1371C82.4844 43.8571 87.4393 52.1121 91.7277 60.7557C92.125 61.5598 91.4384 62.7101 90.6942 62.9653C89.7479 63.3026 88.8819 62.736 88.4846 61.9318C84.8354 54.63 80.6531 47.639 75.9376 40.9588C71.6062 34.8762 66.9437 29.0222 61.5637 23.8365C51.0367 13.8651 37.1572 6.59787 22.2733 8.45228C15.2766 9.31633 6.84221 12.5542 4.1214 19.7119C3.76132 20.5647 2.60404 20.8464 1.82011 20.4819C0.820782 19.993 0.616761 18.969 0.97684 18.1162Z",
                fill: "black"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth/login/_route.tsx",
                lineNumber: 126,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV27(
              "path",
              {
                d: "M100.918 35.8981C98.0786 44.4461 95.2396 52.9941 92.4006 61.5422C91.8226 63.3077 91.3577 65.7574 89.1676 66.1054C88.0748 66.3139 87.0754 65.8249 86.1361 65.1939C85.1968 64.5628 84.3263 63.9273 83.3826 63.2274C79.6898 60.6298 76.0613 57.9589 72.3685 55.3614C68.236 52.3772 64.108 49.4618 59.9755 46.4777C59.2471 45.9022 59.2408 44.7272 59.8207 44.0677C60.4651 43.335 61.5023 43.3375 62.2307 43.913C68.9701 48.7348 75.7096 53.5567 82.3757 58.314C84.1122 59.5162 85.7843 60.7916 87.5208 61.9937C87.7362 62.1182 88.3047 62.3582 88.4601 62.6248C88.6111 62.8225 88.5246 62.5515 88.3957 62.6981C88.0179 63.2754 88.1891 62.7113 88.1891 62.7113C88.1847 62.6425 88.5448 61.7897 88.5404 61.7209C88.7116 61.1568 88.8872 60.6615 89.0584 60.0974C90.3301 56.2132 91.6706 52.3245 92.9378 48.3714C94.3807 43.923 95.8924 39.4702 97.3352 35.0219C97.622 34.1047 98.4129 33.5008 99.3946 33.7143C100.385 34.0655 101.209 35.0497 100.918 35.8981Z",
                fill: "black"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth/login/_route.tsx",
                lineNumber: 130,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/_auth/login/_route.tsx",
            lineNumber: 125,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_auth/login/_route.tsx",
          lineNumber: 118,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_auth/login/_route.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV27(
        Heading,
        {
          variant: "h1",
          className: "pb-8 text-center text-2xl lg:text-[32px]",
          children: "Login First to Your Account"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_auth/login/_route.tsx",
          lineNumber: 138,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV27(Alert, { variant: "primary", className: "mb-8 flex items-center gap-1 py-3", children: [
        /* @__PURE__ */ jsxDEV27("div", { children: /* @__PURE__ */ jsxDEV27(Info, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/routes/_auth/login/_route.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth/login/_route.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV27(AlertDescription, { children: [
          "You can se ",
          /* @__PURE__ */ jsxDEV27("span", { className: "font-bold", children: "demo@finlab.com" }, void 0, !1, {
            fileName: "app/routes/_auth/login/_route.tsx",
            lineNumber: 150,
            columnNumber: 24
          }, this),
          " and password: ",
          /* @__PURE__ */ jsxDEV27("span", { className: "font-bold", children: "demo123" }, void 0, !1, {
            fileName: "app/routes/_auth/login/_route.tsx",
            lineNumber: 151,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth/login/_route.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth/login/_route.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV27(Form, { method: "POST", className: "mx-auto", ...form.props, children: /* @__PURE__ */ jsxDEV27(
        "fieldset",
        {
          className: "space-y-6 disabled:opacity-70",
          disabled: navigation.state !== "idle",
          children: [
            /* @__PURE__ */ jsxDEV27(
              Input,
              {
                label: "Email",
                placeholder: "Email",
                ...conform.input(email, {
                  type: "email"
                })
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth/login/_route.tsx",
                lineNumber: 160,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV27(
              Input,
              {
                label: "Password",
                placeholder: "Password",
                ...conform.input(password, {
                  type: "password"
                })
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth/login/_route.tsx",
                lineNumber: 168,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV27("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV27("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxDEV27(Checkbox, { id: "remember", name: "remember" }, void 0, !1, {
                  fileName: "app/routes/_auth/login/_route.tsx",
                  lineNumber: 178,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV27(
                  "label",
                  {
                    htmlFor: "remember",
                    className: "text-sm font-semibold leading-none text-secondary-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    children: "Remember me"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_auth/login/_route.tsx",
                    lineNumber: 179,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/_auth/login/_route.tsx",
                lineNumber: 177,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV27(
                Link5,
                {
                  to: "/auth/forgot-password",
                  className: "text-sm font-semibold text-primary-500",
                  children: "Forgot password?"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_auth/login/_route.tsx",
                  lineNumber: 187,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_auth/login/_route.tsx",
              lineNumber: 176,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV27("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
              fileName: "app/routes/_auth/login/_route.tsx",
              lineNumber: 195,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV27(Button, { type: "submit", size: "lg", className: "w-full", children: navigation.state !== "idle" ? /* @__PURE__ */ jsxDEV27(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, !1, {
              fileName: "app/routes/_auth/login/_route.tsx",
              lineNumber: 199,
              columnNumber: 17
            }, this) : "Login" }, void 0, !1, {
              fileName: "app/routes/_auth/login/_route.tsx",
              lineNumber: 197,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV27("div", { className: "text-center text-sm font-medium text-secondary-400", children: [
              "Don\u2019t have an account?",
              " ",
              /* @__PURE__ */ jsxDEV27(Link5, { to: "/signup", className: "text-primary-500", children: "Register Here" }, void 0, !1, {
                fileName: "app/routes/_auth/login/_route.tsx",
                lineNumber: 207,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_auth/login/_route.tsx",
              lineNumber: 205,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_auth/login/_route.tsx",
          lineNumber: 156,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_auth/login/_route.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth/login/_route.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV27("div", { className: "absolute hidden text-sm text-secondary-400 lg:bottom-3 lg:block", children: "\xA9 2022 Finlab. All rights reserved." }, void 0, !1, {
      fileName: "app/routes/_auth/login/_route.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth/login/_route.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}

// app/routes/_auth/logout/_route.tsx
var route_exports2 = {};
__export(route_exports2, {
  action: () => action2,
  loader: () => loader4
});
import { redirect as redirect3 } from "@remix-run/node";
var action2 = async ({ request }) => logout(request), loader4 = async () => redirect3("/");

// app/routes/_auth/signup/_route.tsx
var route_exports3 = {};
__export(route_exports3, {
  action: () => action3,
  default: () => SignUp,
  loader: () => loader5,
  meta: () => meta3
});
import { z as z2 } from "zod";
import { useId as useId2 } from "react";
import { parse as parse2 } from "@conform-to/zod";
import {
  Form as Form2,
  Link as Link6,
  useActionData as useActionData2,
  useNavigation as useNavigation3,
  useSearchParams as useSearchParams2
} from "@remix-run/react";
import { conform as conform2, useForm as useForm2 } from "@conform-to/react";
import { json as json3, redirect as redirect4 } from "@remix-run/node";
import { Loader2 as Loader22 } from "lucide-react";
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
var schema2 = z2.object({
  fullName: z2.string({ required_error: "Full name is required" }),
  email: z2.string({ required_error: "Email is required" }).email("Email is invalid"),
  password: z2.string({ required_error: "Password is required" }).min(4, { message: "Password must be at least 4 characters." }),
  redirectTo: z2.string()
}), meta3 = () => [
  { title: "Sign up | Remix Template" }
], loader5 = async ({ request }) => await getUserId(request) ? redirect4("/dashboard/overview") : json3({}), action3 = async ({ request }) => {
  let formData = await request.formData(), submission = parse2(formData, { schema: schema2 });
  if (!submission.value || submission.intent !== "submit")
    return json3(submission, { status: 400 });
  if (await getUserByEmail(submission.value.email))
    return json3(
      {
        ...submission,
        error: { email: ["A user already exists with this email"] }
      },
      { status: 400 }
    );
  let user = await createUser(
    submission.value.fullName,
    submission.value.email,
    submission.value.password
  );
  return createUserSession({
    redirectTo: safeRedirect(submission.value.redirectTo, "/"),
    remember: !1,
    request,
    userId: user.id
  });
};
function SignUp() {
  let id = useId2(), [searchParams] = useSearchParams2(), navigation = useNavigation3(), actionData = useActionData2(), redirectTo = searchParams.get("redirectTo") || "/dashboard/overview", [form, { fullName, email, password }] = useForm2(
    {
      lastSubmission: actionData,
      id,
      shouldValidate: "onBlur",
      onValidate({ formData }) {
        return parse2(formData, { schema: schema2 });
      }
    }
  );
  return /* @__PURE__ */ jsxDEV28("div", { className: "flex h-full w-full items-center justify-center bg-[#F4F4F7] p-5  lg:p-0", children: [
    /* @__PURE__ */ jsxDEV28("div", { className: "rounded-2xl bg-white p-6 md:p-8 lg:w-8/12", children: [
      /* @__PURE__ */ jsxDEV28(
        Link6,
        {
          to: "/login",
          className: cn(buttonVariants({ variant: "link" }), "mb-5"),
          children: /* @__PURE__ */ jsxDEV28(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              children: [
                /* @__PURE__ */ jsxDEV28(
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
                  !1,
                  {
                    fileName: "app/routes/_auth/signup/_route.tsx",
                    lineNumber: 119,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV28(
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
                  !1,
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
            !0,
            {
              fileName: "app/routes/_auth/signup/_route.tsx",
              lineNumber: 112,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_auth/signup/_route.tsx",
          lineNumber: 108,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV28(
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
        !0,
        {
          fileName: "app/routes/_auth/signup/_route.tsx",
          lineNumber: 138,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV28(Paragraph, { variant: "body2", className: "pb-8 text-center", children: "Please register by filling in your personal data" }, void 0, !1, {
        fileName: "app/routes/_auth/signup/_route.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV28(Form2, { method: "POST", className: "mx-auto", ...form.props, children: /* @__PURE__ */ jsxDEV28(
        "fieldset",
        {
          className: "space-y-6 disabled:opacity-70",
          disabled: navigation.state !== "idle",
          children: [
            /* @__PURE__ */ jsxDEV28(
              Input,
              {
                label: "Full name",
                placeholder: "Full name",
                "data-testid": "full-name",
                error: fullName.error,
                ...conform2.input(fullName)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth/signup/_route.tsx",
                lineNumber: 154,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV28(
              Input,
              {
                label: "Email",
                placeholder: "Email",
                "data-testid": "email",
                error: email.error,
                ...conform2.input(email, {
                  type: "email"
                })
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth/signup/_route.tsx",
                lineNumber: 162,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV28(
              Input,
              {
                label: "Password",
                placeholder: "Password",
                "data-testid": "password",
                error: password.error,
                ...conform2.input(password, {
                  type: "password"
                })
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth/signup/_route.tsx",
                lineNumber: 172,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV28("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
              fileName: "app/routes/_auth/signup/_route.tsx",
              lineNumber: 182,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV28(Button, { type: "submit", size: "lg", className: "w-full", children: navigation.state !== "idle" ? /* @__PURE__ */ jsxDEV28(Loader22, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, !1, {
              fileName: "app/routes/_auth/signup/_route.tsx",
              lineNumber: 186,
              columnNumber: 17
            }, this) : "Create account" }, void 0, !1, {
              fileName: "app/routes/_auth/signup/_route.tsx",
              lineNumber: 184,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV28("div", { className: "text-center text-sm font-medium text-secondary-400", children: [
              "Already have an account?",
              " ",
              /* @__PURE__ */ jsxDEV28(Link6, { to: "/login", className: "text-primary-500", children: "Login" }, void 0, !1, {
                fileName: "app/routes/_auth/signup/_route.tsx",
                lineNumber: 194,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_auth/signup/_route.tsx",
              lineNumber: 192,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_auth/signup/_route.tsx",
          lineNumber: 150,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_auth/signup/_route.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth/signup/_route.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV28("div", { className: "absolute hidden text-sm text-secondary-400 lg:bottom-3 lg:block", children: "\xA9 2022 Finlab. All rights reserved." }, void 0, !1, {
      fileName: "app/routes/_auth/signup/_route.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth/signup/_route.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// app/routes/_client/_layout.tsx
var layout_exports2 = {};
__export(layout_exports2, {
  default: () => _layout2
});
import { Outlet as Outlet3 } from "@remix-run/react";

// app/routes/_client/components/Header.tsx
import { Link as Link9 } from "@remix-run/react";

// app/routes/_client/components/NavMenu.tsx
import { Link as Link7 } from "@remix-run/react";
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
function NavMenu() {
  return /* @__PURE__ */ jsxDEV29(NavigationMenu, { className: "hidden lg:block", children: /* @__PURE__ */ jsxDEV29(NavigationMenuList, { children: [
    /* @__PURE__ */ jsxDEV29(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsxDEV29(NavigationMenuTrigger, { children: "Solutions" }, void 0, !1, {
        fileName: "app/routes/_client/components/NavMenu.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV29(NavigationMenuContent, { children: [
        /* @__PURE__ */ jsxDEV29(
          Paragraph,
          {
            variant: "body2",
            className: "border-b px-8 py-4 text-secondary-500",
            children: "Solutions"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 20,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV29("ul", { className: "grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]", children: [
          /* @__PURE__ */ jsxDEV29("li", { className: "rounded-sm p-4 hover:bg-secondary-100", children: /* @__PURE__ */ jsxDEV29(NavigationMenuLink, { asChild: !0, children: /* @__PURE__ */ jsxDEV29(Link7, { to: "/solutions/personal", children: [
            /* @__PURE__ */ jsxDEV29(
              "img",
              {
                src: "/images/personal-menu.png",
                alt: "personal menu",
                className: "h-32 w-full rounded-md"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_client/components/NavMenu.tsx",
                lineNumber: 30,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV29(
              Paragraph,
              {
                variant: "body1",
                className: "flex items-center justify-between py-3 font-bold text-secondary-500",
                children: [
                  /* @__PURE__ */ jsxDEV29("span", { children: "Finlab for personal " }, void 0, !1, {
                    fileName: "app/routes/_client/components/NavMenu.tsx",
                    lineNumber: 40,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV29("span", { children: /* @__PURE__ */ jsxDEV29(
                    "svg",
                    {
                      width: "24",
                      height: "25",
                      viewBox: "0 0 24 25",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ jsxDEV29(
                          "path",
                          {
                            d: "M14.4299 6.43018L20.4999 12.5002L14.4299 18.5702",
                            stroke: "#1A1C1E",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/components/NavMenu.tsx",
                            lineNumber: 49,
                            columnNumber: 27
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV29(
                          "path",
                          {
                            d: "M3.5 12.5H20.33",
                            stroke: "#1A1C1E",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/components/NavMenu.tsx",
                            lineNumber: 57,
                            columnNumber: 27
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/_client/components/NavMenu.tsx",
                      lineNumber: 42,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/_client/components/NavMenu.tsx",
                    lineNumber: 41,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/components/NavMenu.tsx",
                lineNumber: 36,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV29(Paragraph, { variant: "body3", children: "Easy-to-use personal platfrom and spend management software in an integrated global solution." }, void 0, !1, {
              fileName: "app/routes/_client/components/NavMenu.tsx",
              lineNumber: 69,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 29,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 28,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV29("li", { className: "rounded-sm p-4 hover:bg-secondary-100", children: /* @__PURE__ */ jsxDEV29(NavigationMenuLink, { asChild: !0, children: /* @__PURE__ */ jsxDEV29(Link7, { to: "/solutions/startup", children: [
            /* @__PURE__ */ jsxDEV29(
              "img",
              {
                src: "/images/startup-menu.png",
                alt: "startup menu",
                className: "h-32 w-full rounded-md"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_client/components/NavMenu.tsx",
                lineNumber: 80,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV29(
              Paragraph,
              {
                variant: "body1",
                className: "flex items-center justify-between py-3 font-bold text-secondary-500",
                children: [
                  /* @__PURE__ */ jsxDEV29("span", { children: "Finlab for startup " }, void 0, !1, {
                    fileName: "app/routes/_client/components/NavMenu.tsx",
                    lineNumber: 90,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV29("span", { children: /* @__PURE__ */ jsxDEV29(
                    "svg",
                    {
                      width: "24",
                      height: "25",
                      viewBox: "0 0 24 25",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ jsxDEV29(
                          "path",
                          {
                            d: "M14.4299 6.43018L20.4999 12.5002L14.4299 18.5702",
                            stroke: "#1A1C1E",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/components/NavMenu.tsx",
                            lineNumber: 99,
                            columnNumber: 27
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV29(
                          "path",
                          {
                            d: "M3.5 12.5H20.33",
                            stroke: "#1A1C1E",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/components/NavMenu.tsx",
                            lineNumber: 107,
                            columnNumber: 27
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/_client/components/NavMenu.tsx",
                      lineNumber: 92,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/_client/components/NavMenu.tsx",
                    lineNumber: 91,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/components/NavMenu.tsx",
                lineNumber: 86,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV29(Paragraph, { variant: "body3", children: "Fast access to global cards, business account (send ACH and wires), spend management." }, void 0, !1, {
              fileName: "app/routes/_client/components/NavMenu.tsx",
              lineNumber: 119,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 79,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/components/NavMenu.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/components/NavMenu.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/components/NavMenu.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV29(NavigationMenuItem, { children: /* @__PURE__ */ jsxDEV29(NavigationMenuLink, { className: navigationMenuTriggerStyle(), asChild: !0, children: /* @__PURE__ */ jsxDEV29(Link7, { to: "/product", children: "Product" }, void 0, !1, {
      fileName: "app/routes/_client/components/NavMenu.tsx",
      lineNumber: 132,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_client/components/NavMenu.tsx",
      lineNumber: 131,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_client/components/NavMenu.tsx",
      lineNumber: 130,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV29(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsxDEV29(NavigationMenuTrigger, { children: "Resources" }, void 0, !1, {
        fileName: "app/routes/_client/components/NavMenu.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV29(NavigationMenuContent, { children: [
        /* @__PURE__ */ jsxDEV29(
          Paragraph,
          {
            variant: "body2",
            className: "border-b px-8 py-4 text-secondary-500",
            children: "Resources"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 139,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV29("ul", { className: "grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]", children: [
          /* @__PURE__ */ jsxDEV29("li", { className: "rounded-sm p-4 hover:bg-secondary-100", children: /* @__PURE__ */ jsxDEV29(NavigationMenuLink, { asChild: !0, children: /* @__PURE__ */ jsxDEV29(Link7, { to: "/resources/accountants", children: [
            /* @__PURE__ */ jsxDEV29(
              "img",
              {
                src: "/images/accountant-service.png",
                alt: "personal menu",
                className: "h-32 w-full rounded-md"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_client/components/NavMenu.tsx",
                lineNumber: 149,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV29(
              Paragraph,
              {
                variant: "body1",
                className: "flex items-center justify-between py-3 font-bold text-secondary-500",
                children: [
                  /* @__PURE__ */ jsxDEV29("span", { children: "Accounting Service" }, void 0, !1, {
                    fileName: "app/routes/_client/components/NavMenu.tsx",
                    lineNumber: 159,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV29("span", { children: /* @__PURE__ */ jsxDEV29(
                    "svg",
                    {
                      width: "24",
                      height: "25",
                      viewBox: "0 0 24 25",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ jsxDEV29(
                          "path",
                          {
                            d: "M14.4299 6.43018L20.4999 12.5002L14.4299 18.5702",
                            stroke: "#1A1C1E",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/components/NavMenu.tsx",
                            lineNumber: 168,
                            columnNumber: 27
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV29(
                          "path",
                          {
                            d: "M3.5 12.5H20.33",
                            stroke: "#1A1C1E",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/components/NavMenu.tsx",
                            lineNumber: 176,
                            columnNumber: 27
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/_client/components/NavMenu.tsx",
                      lineNumber: 161,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/_client/components/NavMenu.tsx",
                    lineNumber: 160,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/components/NavMenu.tsx",
                lineNumber: 155,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV29(Paragraph, { variant: "body3", children: "Need accounting support? Check out finlab directory of vetted accounting professionals." }, void 0, !1, {
              fileName: "app/routes/_client/components/NavMenu.tsx",
              lineNumber: 188,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 148,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV29("li", { className: "rounded-sm p-4 hover:bg-secondary-100", children: /* @__PURE__ */ jsxDEV29(NavigationMenuLink, { asChild: !0, children: /* @__PURE__ */ jsxDEV29(Link7, { to: "/resources/partner", children: [
            /* @__PURE__ */ jsxDEV29(
              "img",
              {
                src: "/images/partner-portal.png",
                alt: "startup menu",
                className: "h-32 w-full rounded-md"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_client/components/NavMenu.tsx",
                lineNumber: 199,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV29(
              Paragraph,
              {
                variant: "body1",
                className: "flex items-center justify-between py-3 font-bold text-secondary-500",
                children: [
                  /* @__PURE__ */ jsxDEV29("span", { children: "Partner Portal" }, void 0, !1, {
                    fileName: "app/routes/_client/components/NavMenu.tsx",
                    lineNumber: 209,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV29("span", { children: /* @__PURE__ */ jsxDEV29(
                    "svg",
                    {
                      width: "24",
                      height: "25",
                      viewBox: "0 0 24 25",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ jsxDEV29(
                          "path",
                          {
                            d: "M14.4299 6.43018L20.4999 12.5002L14.4299 18.5702",
                            stroke: "#1A1C1E",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/components/NavMenu.tsx",
                            lineNumber: 218,
                            columnNumber: 27
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV29(
                          "path",
                          {
                            d: "M3.5 12.5H20.33",
                            stroke: "#1A1C1E",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/components/NavMenu.tsx",
                            lineNumber: 226,
                            columnNumber: 27
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/_client/components/NavMenu.tsx",
                      lineNumber: 211,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/_client/components/NavMenu.tsx",
                    lineNumber: 210,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/components/NavMenu.tsx",
                lineNumber: 205,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV29(Paragraph, { variant: "body3", children: "Give your customers financial products you'll both love." }, void 0, !1, {
              fileName: "app/routes/_client/components/NavMenu.tsx",
              lineNumber: 238,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 198,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 197,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_client/components/NavMenu.tsx",
            lineNumber: 196,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/components/NavMenu.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/components/NavMenu.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/components/NavMenu.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV29(NavigationMenuItem, { children: /* @__PURE__ */ jsxDEV29(NavigationMenuLink, { className: navigationMenuTriggerStyle(), asChild: !0, children: /* @__PURE__ */ jsxDEV29(Link7, { to: "/support", children: "Support" }, void 0, !1, {
      fileName: "app/routes/_client/components/NavMenu.tsx",
      lineNumber: 250,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_client/components/NavMenu.tsx",
      lineNumber: 249,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_client/components/NavMenu.tsx",
      lineNumber: 248,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/components/NavMenu.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/components/NavMenu.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/components/Logo.tsx
import { Link as Link8 } from "@remix-run/react";
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
function Logo({ primary = !0 }) {
  return /* @__PURE__ */ jsxDEV30("div", { children: primary ? /* @__PURE__ */ jsxDEV30(Link8, { to: "/", className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsxDEV30("img", { src: "/images/logo.svg", alt: "Finlab Logo" }, void 0, !1, {
      fileName: "app/components/Logo.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV30(Badge, { size: "sm", className: "h-min", children: "v1.0.0" }, void 0, !1, {
      fileName: "app/components/Logo.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) : /* @__PURE__ */ jsxDEV30(Link8, { to: "/", className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsxDEV30("img", { src: "/images/logo-secondary.svg", alt: "Finlab Logo" }, void 0, !1, {
      fileName: "app/components/Logo.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV30(Badge, { size: "sm", className: "h-min", children: "v1.0.0" }, void 0, !1, {
      fileName: "app/components/Logo.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_client/components/MobileNavMenu.tsx
import { useState } from "react";
import { NavLink } from "@remix-run/react";
import { jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
function MobileNavMenu() {
  let [open, setOpen] = useState(!1);
  return /* @__PURE__ */ jsxDEV31(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxDEV31(SheetTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV31(Button, { variant: "link", size: "icon", className: "lg:hidden", children: [
      /* @__PURE__ */ jsxDEV31(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          children: [
            /* @__PURE__ */ jsxDEV31(
              "path",
              {
                d: "M3 7H21",
                stroke: "#292D32",
                strokeWidth: "1.5",
                strokeLinecap: "round"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_client/components/MobileNavMenu.tsx",
                lineNumber: 21,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV31(
              "path",
              {
                d: "M3 12H21",
                stroke: "#292D32",
                strokeWidth: "1.5",
                strokeLinecap: "round"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_client/components/MobileNavMenu.tsx",
                lineNumber: 27,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV31(
              "path",
              {
                d: "M3 17H21",
                stroke: "#292D32",
                strokeWidth: "1.5",
                strokeLinecap: "round"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_client/components/MobileNavMenu.tsx",
                lineNumber: 33,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_client/components/MobileNavMenu.tsx",
          lineNumber: 14,
          columnNumber: 11
        },
        this
      ),
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/_client/components/MobileNavMenu.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_client/components/MobileNavMenu.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV31(SheetContent, { side: "left", className: "bg-white pt-8", children: [
      /* @__PURE__ */ jsxDEV31("div", { className: "pb-14", children: /* @__PURE__ */ jsxDEV31(Logo, {}, void 0, !1, {
        fileName: "app/routes/_client/components/MobileNavMenu.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_client/components/MobileNavMenu.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV31("div", { className: "flex h-96 flex-col justify-between", children: /* @__PURE__ */ jsxDEV31("div", { className: "flex flex-col space-y-3", children: NAV_ITEMS.map((item) => /* @__PURE__ */ jsxDEV31(
        NavLink,
        {
          to: item.href,
          onClick: () => setOpen(!1),
          className: ({ isActive }) => isActive ? "mx-1 whitespace-nowrap rounded-full bg-[#ECF8F0CC] px-8 py-3.5 text-xl font-semibold text-primary-600" : "mx-1 whitespace-nowrap rounded-full px-8 py-3.5 text-xl text-[#A2A6AA] duration-200 hover:bg-[#FFFFFF]/10 hover:text-white",
          children: item.name
        },
        item.name,
        !1,
        {
          fileName: "app/routes/_client/components/MobileNavMenu.tsx",
          lineNumber: 51,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/_client/components/MobileNavMenu.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_client/components/MobileNavMenu.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/components/MobileNavMenu.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/components/MobileNavMenu.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var NAV_ITEMS = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Personal",
    href: "/solutions/personal"
  },
  {
    name: "Startup",
    href: "/solutions/startup"
  },
  {
    name: "Product",
    href: "/product"
  },
  {
    name: "Accounting",
    href: "/resources/accountants"
  },
  {
    name: "Partner",
    href: "/resources/partner"
  },
  {
    name: "Support",
    href: "/support"
  }
];

// app/routes/_client/components/Header.tsx
import { jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
function Header() {
  return /* @__PURE__ */ jsxDEV32("header", { className: " fixed z-50 w-full bg-white py-3.5", children: /* @__PURE__ */ jsxDEV32(Container, { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxDEV32("div", { className: "flex items-center gap-[72px]", children: [
      /* @__PURE__ */ jsxDEV32(Logo, {}, void 0, !1, {
        fileName: "app/routes/_client/components/Header.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV32(NavMenu, {}, void 0, !1, {
        fileName: "app/routes/_client/components/Header.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/components/Header.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV32("div", { className: "hidden items-center gap-6 lg:flex", children: [
      /* @__PURE__ */ jsxDEV32(
        Link9,
        {
          to: "/login",
          className: cn(
            buttonVariants({ variant: "link" }),
            "capitalize text-secondary-500"
          ),
          children: "Login"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/components/Header.tsx",
          lineNumber: 22,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV32(
        Link9,
        {
          to: BUY_URL,
          className: cn(buttonVariants(), "px-6 capitalize"),
          target: "_blank",
          children: "Purchase Now"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/components/Header.tsx",
          lineNumber: 31,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_client/components/Header.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV32("div", { className: "flex items-center gap-2 lg:hidden", children: [
      /* @__PURE__ */ jsxDEV32(
        Link9,
        {
          to: BUY_URL,
          className: cn(buttonVariants({ size: "sm" }), "capitalize"),
          target: "_blank",
          children: "Purchase Now"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/components/Header.tsx",
          lineNumber: 41,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV32(MobileNavMenu, {}, void 0, !1, {
        fileName: "app/routes/_client/components/Header.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/components/Header.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/components/Header.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/components/Header.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/_client/components/Footer.tsx
import { Link as Link10 } from "@remix-run/react";
import { jsxDEV as jsxDEV33 } from "react/jsx-dev-runtime";
function Footer() {
  return /* @__PURE__ */ jsxDEV33("footer", { className: "bg-white py-10 lg:pt-28", children: /* @__PURE__ */ jsxDEV33(Container, { className: "flex flex-col gap-10 lg:flex-row", children: [
    /* @__PURE__ */ jsxDEV33("div", { className: "basis-3/12", children: [
      /* @__PURE__ */ jsxDEV33("img", { src: "/images/logo.svg", alt: "logo", className: "h-28 w-36" }, void 0, !1, {
        fileName: "app/routes/_client/components/Footer.tsx",
        lineNumber: 10,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV33(
        Paragraph,
        {
          variant: "subtitle1",
          className: "pb-10 text-lg font-bold lg:text-2xl",
          children: [
            "The Best fintech",
            /* @__PURE__ */ jsxDEV33("br", {}, void 0, !1, {
              fileName: "app/routes/_client/components/Footer.tsx",
              lineNumber: 16,
              columnNumber: 13
            }, this),
            " platform"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_client/components/Footer.tsx",
          lineNumber: 11,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV33(Paragraph, { variant: "body2", children: "\xA92021 Finlab LTD. All rights reserved" }, void 0, !1, {
        fileName: "app/routes/_client/components/Footer.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/components/Footer.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV33("div", { className: "grid basis-9/12 grid-cols-2 gap-10 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxDEV33("div", { children: [
        /* @__PURE__ */ jsxDEV33(Paragraph, { variant: "subtitle2", className: "pb-8 font-bold", children: "Product" }, void 0, !1, {
          fileName: "app/routes/_client/components/Footer.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV33("div", { className: "flex flex-col gap-5 text-base text-secondary-400", children: PRODUCTS_LINKS.map((item) => /* @__PURE__ */ jsxDEV33(Link10, { to: item.href, children: item.label }, item.label, !1, {
          fileName: "app/routes/_client/components/Footer.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/_client/components/Footer.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/components/Footer.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV33("div", { children: [
        /* @__PURE__ */ jsxDEV33(Paragraph, { variant: "subtitle2", className: "pb-8 font-bold", children: "Resources" }, void 0, !1, {
          fileName: "app/routes/_client/components/Footer.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV33("div", { className: "flex flex-col gap-5 text-base text-secondary-400", children: RESOURCES_LINKS.map((item) => /* @__PURE__ */ jsxDEV33(Link10, { to: item.href, children: item.label }, item.label, !1, {
          fileName: "app/routes/_client/components/Footer.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/_client/components/Footer.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/components/Footer.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV33("div", { children: [
        /* @__PURE__ */ jsxDEV33(Paragraph, { variant: "subtitle2", className: "pb-8 font-bold", children: "Company" }, void 0, !1, {
          fileName: "app/routes/_client/components/Footer.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV33("div", { className: "flex flex-col gap-5 text-base text-secondary-400", children: COMPANY_LINKS.map((item) => /* @__PURE__ */ jsxDEV33(Link10, { to: item.href, children: item.label }, item.label, !1, {
          fileName: "app/routes/_client/components/Footer.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/_client/components/Footer.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/components/Footer.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV33("div", { className: "flex flex-col lg:items-center lg:justify-center", children: [
        /* @__PURE__ */ jsxDEV33(Paragraph, { variant: "subtitle2", className: "pb-8 font-bold", children: "Social media" }, void 0, !1, {
          fileName: "app/routes/_client/components/Footer.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV33("div", { className: "flex gap-4", children: SOCIAL_LINKS.map((item) => /* @__PURE__ */ jsxDEV33(
          Link10,
          {
            to: item.href,
            className: "flex h-8 w-8 items-center justify-center rounded-full border border-secondary-300",
            children: item.icon
          },
          item.label,
          !1,
          {
            fileName: "app/routes/_client/components/Footer.tsx",
            lineNumber: 74,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/_client/components/Footer.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/components/Footer.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/components/Footer.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/components/Footer.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/components/Footer.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var PRODUCTS_LINKS = [
  {
    label: "Overview",
    href: "/Overview"
  },
  {
    label: "Business Account",
    href: "/business-account"
  },
  {
    label: "Credit Card",
    href: "/credit-card"
  },
  {
    label: "Financial Modelling",
    href: "/financial-modelling"
  },
  {
    label: "Spend Management",
    href: "/spend-management"
  }
], RESOURCES_LINKS = [
  {
    label: "Help",
    href: "/help"
  },
  {
    label: "Status",
    href: "/Status"
  },
  {
    label: "Privacy",
    href: "/Privacy"
  },
  {
    label: "Legal Agreement",
    href: "/Legal Agreement"
  },
  {
    label: "Cookie Preferences",
    href: "/Cookie Preferences"
  }
], COMPANY_LINKS = [
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Careers",
    href: "/careers"
  },
  {
    label: "Contact",
    href: "/contact"
  },
  {
    label: "Press",
    href: "/Press"
  },
  {
    label: "Blog",
    href: "/blog"
  }
], SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "/facebook",
    icon: /* @__PURE__ */ jsxDEV33(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        children: /* @__PURE__ */ jsxDEV33(
          "path",
          {
            d: "M20.0025 3H3.9975C3.73355 3.00196 3.48097 3.10769 3.29433 3.29433C3.10769 3.48097 3.00196 3.73355 3 3.9975V20.0025C3.00196 20.2664 3.10769 20.519 3.29433 20.7057C3.48097 20.8923 3.73355 20.998 3.9975 21H12.615V14.04H10.275V11.3175H12.615V9.315C12.615 6.99 14.0325 5.7225 16.1175 5.7225C16.815 5.7225 17.5125 5.7225 18.21 5.8275V8.25H16.7775C15.645 8.25 15.4275 8.79 15.4275 9.5775V11.31H18.1275L17.775 14.0325H15.4275V21H20.0025C20.2664 20.998 20.519 20.8923 20.7057 20.7057C20.8923 20.519 20.998 20.2664 21 20.0025V3.9975C20.998 3.73355 20.8923 3.48097 20.7057 3.29433C20.519 3.10769 20.2664 3.00196 20.0025 3Z",
            fill: "#6C7278"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/components/Footer.tsx",
            lineNumber: 171,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/components/Footer.tsx",
        lineNumber: 164,
        columnNumber: 7
      },
      this
    )
  },
  {
    label: "Twitter",
    href: "/twitter",
    icon: /* @__PURE__ */ jsxDEV33(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        children: /* @__PURE__ */ jsxDEV33(
          "path",
          {
            d: "M8.94 18.705C10.2069 18.713 11.4627 18.4693 12.6346 17.9882C13.8066 17.507 14.8714 16.798 15.7672 15.9022C16.663 15.0064 17.3721 13.9416 17.8532 12.7696C18.3343 11.5977 18.578 10.3418 18.57 9.07499V8.63249C19.2267 8.15136 19.7951 7.56012 20.25 6.88499C19.6316 7.15544 18.9773 7.3348 18.3075 7.41749C19.0177 6.99432 19.5506 6.32824 19.8075 5.54249C19.1456 5.93957 18.4199 6.21871 17.6625 6.36749C17.1524 5.82401 16.4775 5.46378 15.7421 5.34253C15.0067 5.22128 14.2518 5.34576 13.5943 5.69673C12.9368 6.04769 12.4132 6.60557 12.1047 7.28405C11.7962 7.96252 11.7198 8.72376 11.8875 9.44999C10.542 9.38395 9.22553 9.03525 8.02377 8.42662C6.822 7.81798 5.7619 6.96305 4.9125 5.91749C4.48419 6.66087 4.35437 7.53923 4.54932 8.37473C4.74427 9.21023 5.24942 9.94043 5.9625 10.4175C5.43646 10.3972 4.92259 10.2533 4.4625 9.99749V10.035C4.45783 10.8119 4.71954 11.5669 5.20403 12.1742C5.68851 12.7815 6.3665 13.2044 7.125 13.3725C6.63573 13.5041 6.12322 13.5246 5.625 13.4325C5.84459 14.095 6.26376 14.6734 6.82503 15.0883C7.38631 15.5032 8.06219 15.7344 8.76 15.75C7.56691 16.7104 6.08407 17.239 4.5525 17.25C4.28396 17.2422 4.01606 17.2197 3.75 17.1825C5.30022 18.1702 7.1019 18.6909 8.94 18.6825",
            fill: "#6C7278"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/components/Footer.tsx",
            lineNumber: 189,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/components/Footer.tsx",
        lineNumber: 182,
        columnNumber: 7
      },
      this
    )
  },
  {
    label: "Instagram",
    href: "/instagram",
    icon: /* @__PURE__ */ jsxDEV33(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxDEV33(
            "path",
            {
              d: "M16.8046 8.27548C17.4011 8.27548 17.8846 7.79195 17.8846 7.19548C17.8846 6.59901 17.4011 6.11548 16.8046 6.11548C16.2081 6.11548 15.7246 6.59901 15.7246 7.19548C15.7246 7.79195 16.2081 8.27548 16.8046 8.27548Z",
              fill: "#6C7278"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/components/Footer.tsx",
              lineNumber: 207,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV33(
            "path",
            {
              d: "M11.9999 7.37854C11.0859 7.37854 10.1924 7.64959 9.43235 8.1574C8.67235 8.66522 8.08 9.387 7.73021 10.2315C7.38042 11.0759 7.2889 12.0052 7.46722 12.9016C7.64554 13.7981 8.0857 14.6216 8.73203 15.2679C9.37835 15.9143 10.2018 16.3544 11.0983 16.5327C11.9948 16.7111 12.924 16.6195 13.7685 16.2697C14.613 15.92 15.3347 15.3276 15.8426 14.5676C16.3504 13.8076 16.6214 12.9141 16.6214 12C16.6214 10.7743 16.1345 9.59885 15.2678 8.73215C14.4011 7.86545 13.2256 7.37854 11.9999 7.37854ZM11.9999 15C11.4066 15 10.8266 14.8241 10.3332 14.4944C9.83986 14.1648 9.45534 13.6963 9.22828 13.1481C9.00122 12.5999 8.94181 11.9967 9.05756 11.4148C9.17332 10.8328 9.45904 10.2983 9.8786 9.87872C10.2982 9.45916 10.8327 9.17344 11.4146 9.05768C11.9966 8.94193 12.5998 9.00134 13.148 9.2284C13.6961 9.45546 14.1647 9.83998 14.4943 10.3333C14.824 10.8267 14.9999 11.4067 14.9999 12C14.9999 12.7957 14.6838 13.5588 14.1212 14.1214C13.5586 14.684 12.7956 15 11.9999 15Z",
              fill: "#6C7278"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/components/Footer.tsx",
              lineNumber: 211,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV33(
            "path",
            {
              d: "M12 4.6215C14.403 4.6215 14.688 4.6305 15.6368 4.674C16.2074 4.68077 16.7726 4.78555 17.3077 4.98375C17.696 5.13352 18.0486 5.36291 18.3428 5.65716C18.6371 5.95141 18.8665 6.304 19.0163 6.69225C19.2145 7.2274 19.3192 7.79262 19.326 8.36325C19.3695 9.312 19.3785 9.597 19.3785 12.0007C19.3785 14.4045 19.3695 14.688 19.326 15.6368C19.3192 16.2074 19.2145 16.7726 19.0163 17.3077C18.8665 17.696 18.6371 18.0486 18.3428 18.3428C18.0486 18.6371 17.696 18.8665 17.3077 19.0163C16.7726 19.2145 16.2074 19.3192 15.6368 19.326C14.688 19.3695 14.403 19.3785 12 19.3785C9.597 19.3785 9.312 19.3695 8.36325 19.326C7.79262 19.3192 7.2274 19.2145 6.69225 19.0163C6.304 18.8665 5.95141 18.6371 5.65716 18.3428C5.36291 18.0486 5.13352 17.696 4.98375 17.3077C4.78555 16.7726 4.68077 16.2074 4.674 15.6368C4.6305 14.688 4.6215 14.403 4.6215 12C4.6215 9.597 4.6305 9.312 4.674 8.36325C4.68077 7.79262 4.78555 7.2274 4.98375 6.69225C5.13352 6.304 5.36291 5.95141 5.65716 5.65716C5.95141 5.36291 6.304 5.13352 6.69225 4.98375C7.2274 4.78555 7.79262 4.68077 8.36325 4.674C9.312 4.6305 9.597 4.6215 12 4.6215ZM12 3C9.55575 3 9.249 3.0105 8.289 3.054C7.54258 3.06907 6.80412 3.21058 6.105 3.4725C5.50704 3.70372 4.96399 4.05733 4.51066 4.51066C4.05733 4.96399 3.70372 5.50704 3.4725 6.105C3.21049 6.80435 3.06899 7.54308 3.054 8.28975C3.0105 9.24975 3 9.555 3 12C3 14.445 3.0105 14.751 3.054 15.711C3.06907 16.4574 3.21058 17.1959 3.4725 17.895C3.70372 18.493 4.05733 19.036 4.51066 19.4893C4.96399 19.9427 5.50704 20.2963 6.105 20.5275C6.80435 20.7895 7.54308 20.931 8.28975 20.946C9.24975 20.9895 9.55575 21 12 21C14.4443 21 14.751 20.9895 15.711 20.946C16.4577 20.931 17.1964 20.7895 17.8958 20.5275C18.4937 20.2963 19.0368 19.9427 19.4901 19.4893C19.9434 19.036 20.297 18.493 20.5282 17.895C20.79 17.1956 20.9313 16.4569 20.946 15.7103C20.9895 14.7503 21 14.445 21 12C21 9.555 20.9895 9.249 20.946 8.289C20.9309 7.54258 20.7894 6.80412 20.5275 6.105C20.2963 5.50704 19.9427 4.96399 19.4893 4.51066C19.036 4.05733 18.493 3.70372 17.895 3.4725C17.1956 3.21075 16.4569 3.0695 15.7103 3.05475C14.7503 3.00975 14.445 3 12 3Z",
              fill: "#6C7278"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/components/Footer.tsx",
              lineNumber: 215,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_client/components/Footer.tsx",
        lineNumber: 200,
        columnNumber: 7
      },
      this
    )
  }
  //   {
  //     label: "Linkedin",
  //     href: "/linkedin",
  //   },
];

// app/routes/_client/components/ClientLayout.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV34 } from "react/jsx-dev-runtime";
function ClientLayout({ children }) {
  return /* @__PURE__ */ jsxDEV34(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV34(Header, {}, void 0, !1, {
      fileName: "app/routes/_client/components/ClientLayout.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV34("main", { children }, void 0, !1, {
      fileName: "app/routes/_client/components/ClientLayout.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV34(Footer, {}, void 0, !1, {
      fileName: "app/routes/_client/components/ClientLayout.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/components/ClientLayout.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_client/components/Testimonial.tsx
import { jsxDEV as jsxDEV35 } from "react/jsx-dev-runtime";
function Testimonial() {
  return /* @__PURE__ */ jsxDEV35("section", { className: "bg-white py-10 lg:py-24", children: /* @__PURE__ */ jsxDEV35(Container, { children: [
    /* @__PURE__ */ jsxDEV35("div", { children: /* @__PURE__ */ jsxDEV35(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "44",
        viewBox: "0 0 60 44",
        fill: "none",
        className: "h-16 w-11",
        children: /* @__PURE__ */ jsxDEV35(
          "path",
          {
            d: "M26.4065 31.1595C26.4065 23.7977 21.7266 19.3463 15.7096 19.3463C13.8711 19.3463 12.3669 19.6887 11.0297 20.2023C11.0297 14.2101 16.0439 9.58756 23.2309 8.2179V0C9.85977 1.71207 0.5 12.8405 0.5 27.2218C0.5 37.4942 6.18272 44 14.0382 44C21.3924 44 26.4065 38.6926 26.4065 31.1595ZM59.5 31.1595C59.5 23.7977 54.653 19.3463 48.636 19.3463C46.7974 19.3463 45.2932 19.6887 43.9561 20.3735C43.9561 14.2101 49.1374 9.58756 56.3244 8.2179V0C42.9533 1.71207 33.5935 12.8405 33.5935 27.2218C33.5935 37.4942 39.2762 44 47.1317 44C54.4858 44 59.5 38.6926 59.5 31.1595Z",
            fill: "#31B099"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/components/Testimonial.tsx",
            lineNumber: 16,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/components/Testimonial.tsx",
        lineNumber: 8,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_client/components/Testimonial.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV35(
      Paragraph,
      {
        variant: "subtitle1",
        className: "pb-14 text-center text-3xl font-bold leading-[150%] tracking-tight lg:text-5xl",
        children: [
          /* @__PURE__ */ jsxDEV35("span", { className: " text-secondary-400", children: "\u201CLove the simplicity if the service." }, void 0, !1, {
            fileName: "app/routes/_client/components/Testimonial.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this),
          " ",
          "A digital wallet platform that provides complete financial solutions to meet your entire financial tasks \u201C"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_client/components/Testimonial.tsx",
        lineNumber: 23,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV35("div", { className: "mb-8 h-0.5 w-full bg-[#D9D9D947]" }, void 0, !1, {
      fileName: "app/routes/_client/components/Testimonial.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV35("div", { className: "flex items-center gap-3 lg:gap-5", children: [
      /* @__PURE__ */ jsxDEV35(
        "img",
        {
          src: "/images/makima.png",
          alt: "makima",
          className: "h-[53px] w-[53px] rounded-full object-cover lg:h-[80px] lg:w-[80px]"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/components/Testimonial.tsx",
          lineNumber: 37,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV35("div", { children: [
        /* @__PURE__ */ jsxDEV35(Paragraph, { className: "text-base font-bold lg:text-2xl", children: "Makima Ackerman" }, void 0, !1, {
          fileName: "app/routes/_client/components/Testimonial.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV35(Paragraph, { variant: "body2", className: "text-sm lg:text-base", children: "Founder of Devil Hunter Corp" }, void 0, !1, {
          fileName: "app/routes/_client/components/Testimonial.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/components/Testimonial.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/components/Testimonial.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/components/Testimonial.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/components/Testimonial.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_client/components/CallToAction.tsx
import { Link as Link11 } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { jsxDEV as jsxDEV36 } from "react/jsx-dev-runtime";
function CallToAction() {
  return /* @__PURE__ */ jsxDEV36("div", { className: "space-y-10 bg-white", children: /* @__PURE__ */ jsxDEV36(Container, { className: "flex flex-col justify-between overflow-hidden rounded-3xl bg-primary-800 !px-0 lg:flex-row lg:rounded-[50px]", children: [
    /* @__PURE__ */ jsxDEV36("div", { className: "basis-full py-10 pl-5 lg:basis-8/12 lg:pl-10", children: [
      /* @__PURE__ */ jsxDEV36("div", { className: "mb-3 w-fit rounded-full bg-[#3D7B83] px-6 py-1.5 text-sm text-white", children: "Our best solution for you \u2728" }, void 0, !1, {
        fileName: "app/routes/_client/components/CallToAction.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV36(
        Heading,
        {
          variant: "h2",
          className: "pb-8 font-bold leading-normal text-white",
          children: "Let\u2019s start manage your finances with finlab"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/components/CallToAction.tsx",
          lineNumber: 18,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV36(Paragraph, { variant: "body1", className: "pb-9 text-secondary-100", children: "Get in touch to learn how our spend solution can increase financial efficiency and speed for your company." }, void 0, !1, {
        fileName: "app/routes/_client/components/CallToAction.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV36("div", { className: "flex gap-2 md:gap-4", children: [
        /* @__PURE__ */ jsxDEV36(
          Link11,
          {
            to: "/login",
            className: cn(
              buttonVariants({ size: "lg" }),
              "flex items-center whitespace-nowrap px-7 md:px-8"
            ),
            children: [
              "Get started",
              /* @__PURE__ */ jsxDEV36(ArrowRight, { className: "ml-2 inline-block", size: 16 }, void 0, !1, {
                fileName: "app/routes/_client/components/CallToAction.tsx",
                lineNumber: 39,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_client/components/CallToAction.tsx",
            lineNumber: 31,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV36(
          Link11,
          {
            to: BUY_URL,
            className: cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "whitespace-nowrap px-7 text-white md:px-8"
            ),
            target: "_blank",
            children: "Purchase now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/components/CallToAction.tsx",
            lineNumber: 41,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/components/CallToAction.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/components/CallToAction.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV36("div", { children: /* @__PURE__ */ jsxDEV36("img", { src: "/images/cta.png", alt: "hero", className: "w-full" }, void 0, !1, {
      fileName: "app/routes/_client/components/CallToAction.tsx",
      lineNumber: 55,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_client/components/CallToAction.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/components/CallToAction.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/components/CallToAction.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_client/_layout.tsx
import { jsxDEV as jsxDEV37 } from "react/jsx-dev-runtime";
function _layout2() {
  return /* @__PURE__ */ jsxDEV37(ClientLayout, { children: /* @__PURE__ */ jsxDEV37(Outlet3, {}, void 0, !1, {
    fileName: "app/routes/_client/_layout.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/_layout.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_client/_index/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta4
});

// app/routes/_client/_index/Components/Hero.tsx
import { Link as Link12 } from "@remix-run/react";
import { ArrowRight as ArrowRight2 } from "lucide-react";
import { jsxDEV as jsxDEV38 } from "react/jsx-dev-runtime";
function Hero() {
  return /* @__PURE__ */ jsxDEV38("section", { className: "bg-white pt-[68px] lg:relative lg:overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV38(Container, { className: "h-full", children: /* @__PURE__ */ jsxDEV38("div", { className: "py-9 lg:max-w-xl lg:py-20", children: [
      /* @__PURE__ */ jsxDEV38("div", { className: "mb-3 max-w-fit rounded-full bg-[#F4F4F7] px-1.5 py-2 text-xs md:mb-8 md:text-sm", children: [
        /* @__PURE__ */ jsxDEV38("span", { className: "rounded-full bg-primary px-[5px] py-1 font-medium text-white", children: "News!" }, void 0, !1, {
          fileName: "app/routes/_client/_index/Components/Hero.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV38("span", { className: "pl-2 text-secondary-500", children: "Update New features for active users \u2728" }, void 0, !1, {
          fileName: "app/routes/_client/_index/Components/Hero.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/_index/Components/Hero.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV38(
        Heading,
        {
          variant: "h1",
          className: "mb-6 font-bold text-[#1B2632] md:mb-10 lg:leading-tight lg:tracking-[-2.16px]",
          children: "Manages all your financial task using finlab"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/_index/Components/Hero.tsx",
          lineNumber: 23,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV38(Paragraph, { variant: "body1", className: "mb-10", children: "We helping you to manage your business cashflow. we provide the best features that will help you to manage financial task easily." }, void 0, !1, {
        fileName: "app/routes/_client/_index/Components/Hero.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV38("div", { className: "mb-[60px] flex gap-2 md:gap-4 lg:mb-[74px]", children: [
        /* @__PURE__ */ jsxDEV38(
          Link12,
          {
            to: "/login",
            className: cn(
              buttonVariants({ size: "lg" }),
              "flex items-center whitespace-nowrap px-7 md:px-8"
            ),
            children: [
              "Live preview",
              /* @__PURE__ */ jsxDEV38(ArrowRight2, { className: "ml-2 inline-block", size: 16 }, void 0, !1, {
                fileName: "app/routes/_client/_index/Components/Hero.tsx",
                lineNumber: 44,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_client/_index/Components/Hero.tsx",
            lineNumber: 36,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV38(
          Link12,
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
          !1,
          {
            fileName: "app/routes/_client/_index/Components/Hero.tsx",
            lineNumber: 46,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/_index/Components/Hero.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV38("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxDEV38("div", { className: "", children: [
          /* @__PURE__ */ jsxDEV38(
            Paragraph,
            {
              variant: "subtitle1",
              className: "mb-1 font-bold lg:text-5xl",
              children: [
                "290K ",
                /* @__PURE__ */ jsxDEV38("span", { className: "text-primary-500", children: "+" }, void 0, !1, {
                  fileName: "app/routes/_client/_index/Components/Hero.tsx",
                  lineNumber: 64,
                  columnNumber: 22
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/_client/_index/Components/Hero.tsx",
              lineNumber: 60,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV38(Paragraph, { variant: "body1", children: "Download" }, void 0, !1, {
            fileName: "app/routes/_client/_index/Components/Hero.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/_index/Components/Hero.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV38("div", { className: "", children: [
          /* @__PURE__ */ jsxDEV38(
            Paragraph,
            {
              variant: "subtitle1",
              className: "mb-1 font-bold lg:text-5xl",
              children: [
                "110K ",
                /* @__PURE__ */ jsxDEV38("span", { className: "text-primary-500", children: "+" }, void 0, !1, {
                  fileName: "app/routes/_client/_index/Components/Hero.tsx",
                  lineNumber: 73,
                  columnNumber: 22
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/_client/_index/Components/Hero.tsx",
              lineNumber: 69,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV38(Paragraph, { variant: "body1", children: "Active user" }, void 0, !1, {
            fileName: "app/routes/_client/_index/Components/Hero.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/_index/Components/Hero.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV38("div", { className: "", children: [
          /* @__PURE__ */ jsxDEV38(
            Paragraph,
            {
              variant: "subtitle1",
              className: "mb-1 font-bold lg:text-5xl",
              children: [
                "900K ",
                /* @__PURE__ */ jsxDEV38("span", { className: "text-primary-500", children: "+" }, void 0, !1, {
                  fileName: "app/routes/_client/_index/Components/Hero.tsx",
                  lineNumber: 82,
                  columnNumber: 22
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/_client/_index/Components/Hero.tsx",
              lineNumber: 78,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV38(Paragraph, { variant: "body1", children: "Business teams" }, void 0, !1, {
            fileName: "app/routes/_client/_index/Components/Hero.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/_index/Components/Hero.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/_index/Components/Hero.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/_index/Components/Hero.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_client/_index/Components/Hero.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV38("div", { className: "absolute hidden w-full bg-primary-800 lg:right-0 lg:top-[68px] lg:block lg:w-[80vh]", children: /* @__PURE__ */ jsxDEV38(
      "img",
      {
        src: "images/landing-hero.png",
        alt: "hero",
        className: "h-full w-full"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/_index/Components/Hero.tsx",
        lineNumber: 91,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_client/_index/Components/Hero.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/_index/Components/Hero.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_client/_index/Components/Solutions.tsx
import { Link as Link13 } from "@remix-run/react";
import { jsxDEV as jsxDEV39 } from "react/jsx-dev-runtime";
function Solutions() {
  return /* @__PURE__ */ jsxDEV39("section", { className: "bg-[#1E2836] py-10 lg:py-24", children: /* @__PURE__ */ jsxDEV39(Container, { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsxDEV39("div", { className: "mb-3 w-fit rounded-full bg-[#353E49] px-6 py-1.5 text-xs text-white lg:text-sm", children: "Our best solution for you \u2728" }, void 0, !1, {
      fileName: "app/routes/_client/_index/Components/Solutions.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV39(
      Heading,
      {
        variant: "h2",
        className: "mb-16 text-center font-bold leading-tight tracking-[-1.68px] text-white ",
        children: "We have solutions that work for you."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/_index/Components/Solutions.tsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV39("div", { className: "mb-6 flex w-full flex-col items-center overflow-hidden rounded-3xl bg-primary-800 lg:relative lg:flex-row", children: [
      /* @__PURE__ */ jsxDEV39("div", { className: "basis-full p-5 md:basis-5/12", children: [
        /* @__PURE__ */ jsxDEV39(Heading, { variant: "h4", className: "pb-3 font-bold text-white", children: "Finlab for Personal" }, void 0, !1, {
          fileName: "app/routes/_client/_index/Components/Solutions.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV39(Paragraph, { variant: "body1", className: "pb-12 text-secondary-300", children: "Easy-to-use personal platform and spend management software in an integrated global solution." }, void 0, !1, {
          fileName: "app/routes/_client/_index/Components/Solutions.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV39(
          Link13,
          {
            to: "/solutions/personal",
            className: cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mb-16 text-white md:mb-0"
            ),
            children: "Learn more"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/_index/Components/Solutions.tsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/_index/Components/Solutions.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV39("div", { className: "basis-full md:basis-7/12", children: /* @__PURE__ */ jsxDEV39(
        "img",
        {
          src: "images/finlab-personal.png",
          alt: "finlab personal",
          className: "bottom-0 h-full lg:absolute"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/_index/Components/Solutions.tsx",
          lineNumber: 45,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_client/_index/Components/Solutions.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/_index/Components/Solutions.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV39("div", { className: "mb-6 flex w-full flex-col items-center overflow-hidden rounded-3xl bg-white lg:relative lg:flex-row", children: [
      /* @__PURE__ */ jsxDEV39("div", { className: "basis-full p-5 md:basis-5/12", children: [
        /* @__PURE__ */ jsxDEV39(Heading, { variant: "h4", className: "pb-3 font-bold text-secondary-500", children: "Finlab for Startup" }, void 0, !1, {
          fileName: "app/routes/_client/_index/Components/Solutions.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV39(Paragraph, { variant: "body1", className: "pb-12", children: "Easy-to-use personal platfrom and spend management software in an integrated global solution." }, void 0, !1, {
          fileName: "app/routes/_client/_index/Components/Solutions.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV39(
          Link13,
          {
            to: "/solutions/startup",
            className: cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mb-16 md:mb-0"
            ),
            children: "Learn more"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/_index/Components/Solutions.tsx",
            lineNumber: 64,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/_index/Components/Solutions.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV39("div", { className: "basis-7/12", children: /* @__PURE__ */ jsxDEV39(
        "img",
        {
          src: "images/finlab-startup.png",
          alt: "finlab startup",
          className: "bottom-0 right-0 h-full lg:absolute"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/_index/Components/Solutions.tsx",
          lineNumber: 76,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_client/_index/Components/Solutions.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/_index/Components/Solutions.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/_index/Components/Solutions.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/_index/Components/Solutions.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/_client/_index/Components/Features.tsx
import { jsxDEV as jsxDEV40 } from "react/jsx-dev-runtime";
function Features() {
  return /* @__PURE__ */ jsxDEV40("section", { className: "bg-white py-10 lg:pt-24", children: /* @__PURE__ */ jsxDEV40(Container, { className: "flex flex-col-reverse gap-10 md:flex-row md:gap-0", children: [
    /* @__PURE__ */ jsxDEV40("div", { className: "basis-full md:basis-1/2", children: [
      /* @__PURE__ */ jsxDEV40(
        "img",
        {
          src: "images/feature-landing.png",
          alt: "finlab features",
          className: "hidden w-full md:block md:h-[830px] lg:h-[910px]"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/_index/Components/Features.tsx",
          lineNumber: 8,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV40(
        "img",
        {
          src: "images/mobile-feature.png",
          alt: "finlab features",
          className: "w-full object-cover md:hidden"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/_index/Components/Features.tsx",
          lineNumber: 13,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_client/_index/Components/Features.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV40("div", { className: "basis-full md:basis-1/2", children: [
      /* @__PURE__ */ jsxDEV40("div", { className: "mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm", children: "Our best solution for you \u2728" }, void 0, !1, {
        fileName: "app/routes/_client/_index/Components/Features.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV40(
        Heading,
        {
          variant: "h2",
          className: "mb-6 font-bold leading-tight tracking-[-1.68px] text-[#1B2632] lg:mb-8",
          children: [
            "Let\u2019s see what we can do for you",
            " "
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_client/_index/Components/Features.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV40(Paragraph, { variant: "body1", className: "pb-10 lg:pb-12", children: "We have many features that can certainly help you manage finances and spend money" }, void 0, !1, {
        fileName: "app/routes/_client/_index/Components/Features.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV40("div", { className: "space-y-5", children: FEATURES.map((feature, index) => /* @__PURE__ */ jsxDEV40(
        "div",
        {
          className: "group rounded-[10px] bg-[#F4F4F7] p-5 duration-200 hover:bg-primary-500",
          children: [
            /* @__PURE__ */ jsxDEV40("div", { className: "flex items-center gap-6 pb-3", children: [
              /* @__PURE__ */ jsxDEV40("span", { className: "flex h-9 w-9 items-center justify-center rounded-full border border-secondary-300 text-secondary-300 group-hover:border-white group-hover:text-white", children: index + 1 }, void 0, !1, {
                fileName: "app/routes/_client/_index/Components/Features.tsx",
                lineNumber: 44,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV40(
                Heading,
                {
                  variant: "h6",
                  className: "font-medium group-hover:text-white",
                  children: feature.label
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_client/_index/Components/Features.tsx",
                  lineNumber: 47,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_client/_index/Components/Features.tsx",
              lineNumber: 43,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV40(Paragraph, { variant: "body1", className: "group-hover:text-white", children: feature.description }, void 0, !1, {
              fileName: "app/routes/_client/_index/Components/Features.tsx",
              lineNumber: 55,
              columnNumber: 17
            }, this)
          ]
        },
        index,
        !0,
        {
          fileName: "app/routes/_client/_index/Components/Features.tsx",
          lineNumber: 39,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/_client/_index/Components/Features.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/_index/Components/Features.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/_index/Components/Features.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/_index/Components/Features.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var FEATURES = [
  {
    label: "Saving Money Plans",
    description: "Finlab is adaptable to meet the financial processing requirements of global companies and support with multiple currencies"
  },
  {
    label: "Multi-device support access",
    description: "Finlab support your needs with quick delivery through various channels, including mobile & dekstop"
  },
  {
    label: "Hight level Security",
    description: "We ensure that the app is used safely and correctly, and that you can manage your own wallet in one place"
  }
];

// app/routes/_client/_index/Components/Trusted.tsx
import Marquee from "react-fast-marquee";
import { jsxDEV as jsxDEV41 } from "react/jsx-dev-runtime";
function Trusted() {
  return /* @__PURE__ */ jsxDEV41("section", { className: " bg-[#1E2836] py-10 lg:py-24", children: [
    /* @__PURE__ */ jsxDEV41(Container, { className: "flex h-min flex-col items-end justify-between gap-5 pb-10 lg:flex-row lg:gap-0", children: [
      /* @__PURE__ */ jsxDEV41("div", { className: "basis-full lg:basis-1/2", children: [
        /* @__PURE__ */ jsxDEV41("div", { className: "mb-3 w-fit rounded-full bg-[#353E49] px-6 py-1.5 text-xs text-white lg:text-sm", children: "Our best solution for you \u2728" }, void 0, !1, {
          fileName: "app/routes/_client/_index/Components/Trusted.tsx",
          lineNumber: 10,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV41(
          Heading,
          {
            variant: "h2",
            className: "font-bold leading-tight tracking-[-1.68px] text-white ",
            children: "20k+ company trust us as a financial companion"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/_index/Components/Trusted.tsx",
            lineNumber: 14,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/_index/Components/Trusted.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV41("div", { className: "basis-full lg:basis-1/2 lg:pl-10", children: [
        /* @__PURE__ */ jsxDEV41(Paragraph, { variant: "body1", className: "pb-6 text-secondary-300", children: "Our platform is adaptable to meet the financial processing requirements of global companies and support with multiple local bank channels and digital wallets." }, void 0, !1, {
          fileName: "app/routes/_client/_index/Components/Trusted.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV41(Button, { size: "lg", variant: "outline", className: "text-white", children: "Learn more" }, void 0, !1, {
          fileName: "app/routes/_client/_index/Components/Trusted.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/_index/Components/Trusted.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/_index/Components/Trusted.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV41("div", { className: "min-h-[40px] space-y-6", children: [
      /* @__PURE__ */ jsxDEV41(Marquee, { children: COMPANIES.map((item, i) => /* @__PURE__ */ jsxDEV41(
        "div",
        {
          className: "mx-3 flex min-w-[200px] items-center justify-center rounded-2xl bg-[#353E4A] py-10",
          children: /* @__PURE__ */ jsxDEV41(
            "img",
            {
              src: item.image,
              alt: item.label,
              className: "mx-auto h-10 w-20"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/_index/Components/Trusted.tsx",
              lineNumber: 44,
              columnNumber: 15
            },
            this
          )
        },
        item.label,
        !1,
        {
          fileName: "app/routes/_client/_index/Components/Trusted.tsx",
          lineNumber: 40,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/_client/_index/Components/Trusted.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV41(Marquee, { direction: "right", children: COMPANIES.map((item) => /* @__PURE__ */ jsxDEV41(
        "div",
        {
          className: "mx-3 flex min-w-[200px] items-center justify-center rounded-2xl bg-[#353E4A] py-10",
          children: /* @__PURE__ */ jsxDEV41(
            "img",
            {
              src: item.image,
              alt: item.label,
              className: "mx-auto h-10 w-20"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/_index/Components/Trusted.tsx",
              lineNumber: 59,
              columnNumber: 15
            },
            this
          )
        },
        item.label,
        !1,
        {
          fileName: "app/routes/_client/_index/Components/Trusted.tsx",
          lineNumber: 55,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/_client/_index/Components/Trusted.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/_index/Components/Trusted.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/_index/Components/Trusted.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var COMPANIES = [
  {
    label: "Shopify",
    image: "logos/shopify.svg"
  },
  {
    label: "airwallex",
    image: "logos/airwallex.svg"
  },
  {
    label: "alibaba",
    image: "logos/alibaba.svg"
  },
  {
    label: "amazon",
    image: "logos/amazon.svg"
  },
  {
    label: "automatic",
    image: "logos/automatic.svg"
  },
  {
    label: "google",
    image: "logos/google.svg"
  },
  {
    label: "gosht",
    image: "logos/gosht.svg"
  },
  {
    label: "rakuten",
    image: "logos/rakuten.svg"
  },
  {
    label: "razorpay",
    image: "logos/razorpay.svg"
  },
  {
    label: "shopify",
    image: "logos/shopify.svg"
  }
];

// app/routes/_client/_index/_index.tsx
import { Fragment as Fragment4, jsxDEV as jsxDEV42 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "Finlab - Remix Full Stack Client and Admin Finance Template" },
  {
    name: "theme-color",
    content: "#31B099"
  }
];
function Index() {
  return /* @__PURE__ */ jsxDEV42(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV42(Hero, {}, void 0, !1, {
      fileName: "app/routes/_client/_index/_index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV42(Solutions, {}, void 0, !1, {
      fileName: "app/routes/_client/_index/_index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV42(Features, {}, void 0, !1, {
      fileName: "app/routes/_client/_index/_index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV42(Trusted, {}, void 0, !1, {
      fileName: "app/routes/_client/_index/_index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV42(Testimonial, {}, void 0, !1, {
      fileName: "app/routes/_client/_index/_index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV42(CallToAction, {}, void 0, !1, {
      fileName: "app/routes/_client/_index/_index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/_index/_index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/_client/product/_route.tsx
var route_exports4 = {};
__export(route_exports4, {
  default: () => _route,
  meta: () => meta5
});

// app/routes/_client/product/components/Hero.tsx
import { Link as Link14 } from "@remix-run/react";
import { ArrowRight as ArrowRight3 } from "lucide-react";
import { jsxDEV as jsxDEV43 } from "react/jsx-dev-runtime";
function Hero2() {
  return /* @__PURE__ */ jsxDEV43("section", { className: "bg-[#1E2836] pt-36 lg:relative lg:overflow-hidden lg:pt-[68px]", children: [
    /* @__PURE__ */ jsxDEV43(Container, { className: "h-full basis-full", children: /* @__PURE__ */ jsxDEV43("div", { className: "max-w-xl lg:py-52", children: [
      /* @__PURE__ */ jsxDEV43("div", { className: "mx-auto mb-3 max-w-fit rounded-full bg-[#353E49] px-1.5 py-2 text-xs text-white md:mx-0 lg:mb-8", children: [
        /* @__PURE__ */ jsxDEV43("span", { className: "rounded-full bg-primary px-[5px] py-1 font-medium", children: "News!" }, void 0, !1, {
          fileName: "app/routes/_client/product/components/Hero.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV43("span", { className: "pl-2", children: "Update New features for active users \u2728" }, void 0, !1, {
          fileName: "app/routes/_client/product/components/Hero.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/product/components/Hero.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV43(
        Heading,
        {
          variant: "h1",
          className: "mb-6 text-center font-bold text-white md:text-left lg:mb-10 lg:leading-tight lg:tracking-[-2.16px]",
          children: "Modern spend management"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/product/components/Hero.tsx",
          lineNumber: 23,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV43(
        Paragraph,
        {
          variant: "body1",
          className: "mb-10 text-center text-secondary-200 md:text-left",
          children: "Integrated cards and software that drive 100% compliance with 0 receipt chasing in 100+ countries."
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/product/components/Hero.tsx",
          lineNumber: 30,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV43("div", { className: "flex justify-center gap-2 pb-5 md:justify-start md:gap-4", children: [
        /* @__PURE__ */ jsxDEV43(
          Link14,
          {
            to: "/login",
            className: cn(
              buttonVariants({ size: "lg" }),
              "flex items-center whitespace-nowrap px-7 md:px-8"
            ),
            children: [
              "Get started",
              /* @__PURE__ */ jsxDEV43(ArrowRight3, { className: "ml-2 inline-block", size: 16 }, void 0, !1, {
                fileName: "app/routes/_client/product/components/Hero.tsx",
                lineNumber: 47,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_client/product/components/Hero.tsx",
            lineNumber: 39,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV43(
          Link14,
          {
            to: BUY_URL,
            className: cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "whitespace-nowrap px-7 text-white md:px-8"
            ),
            target: "_blank",
            children: "Purchase now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/product/components/Hero.tsx",
            lineNumber: 49,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/product/components/Hero.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/product/components/Hero.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_client/product/components/Hero.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV43("div", { className: "lg:absolute lg:right-0 lg:top-[68px]", children: /* @__PURE__ */ jsxDEV43(
      "img",
      {
        src: "/images/finlab-startup-hero.png",
        alt: "hero",
        className: "h-full w-full"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/product/components/Hero.tsx",
        lineNumber: 64,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_client/product/components/Hero.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/product/components/Hero.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_client/product/components/Features.tsx
import { jsxDEV as jsxDEV44 } from "react/jsx-dev-runtime";
function Features2() {
  return /* @__PURE__ */ jsxDEV44("section", { className: "bg-white pb-10 pt-20 lg:pt-24", children: /* @__PURE__ */ jsxDEV44(Container, { children: [
    /* @__PURE__ */ jsxDEV44("div", { className: "mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-sm text-secondary-500", children: "Our best features for you \u{1F44F}\u{1F3FB}" }, void 0, !1, {
      fileName: "app/routes/_client/product/components/Features.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV44(
      Heading,
      {
        variant: "h2",
        className: "pb-6 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]",
        children: "Culture of financial discipline"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/product/components/Features.tsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV44(
      Paragraph,
      {
        variant: "body1",
        className: "mx-auto max-w-3xl pb-10 text-center",
        children: "finlab is adaptable to meet the financial processing requirements of global companies and support with multiple local bank channels and digital wallets."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/product/components/Features.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV44("div", { className: "grid grid-cols-1 gap-6 pb-16 lg:grid-cols-3", children: FEATURES2.map((feature) => /* @__PURE__ */ jsxDEV44(
      "div",
      {
        className: "w-full rounded-[30px] border-2 border-secondary-200 p-8",
        children: [
          /* @__PURE__ */ jsxDEV44(Paragraph, { className: "pb-6 text-3xl font-bold", children: feature.title }, void 0, !1, {
            fileName: "app/routes/_client/product/components/Features.tsx",
            lineNumber: 33,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV44(Paragraph, { variant: "body1", children: feature.description }, void 0, !1, {
            fileName: "app/routes/_client/product/components/Features.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV44("img", { src: feature.image, alt: "", className: "mt-16" }, void 0, !1, {
            fileName: "app/routes/_client/product/components/Features.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this)
        ]
      },
      feature.title,
      !0,
      {
        fileName: "app/routes/_client/product/components/Features.tsx",
        lineNumber: 29,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/_client/product/components/Features.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV44("div", { className: " flex items-center justify-center ", children: /* @__PURE__ */ jsxDEV44(Button, { variant: "outline", size: "lg", children: "Learn more" }, void 0, !1, {
      fileName: "app/routes/_client/product/components/Features.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_client/product/components/Features.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/product/components/Features.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/product/components/Features.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var FEATURES2 = [
  {
    title: "Manage your future with savings plans",
    description: "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo.",
    image: "/images/saving-plan.png"
  },
  {
    title: "Know the currency of each country",
    description: "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo.",
    image: "/images/currency.png"
  },
  {
    title: "Easily analyze your financial activity",
    description: "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo.",
    image: "/images/analyze.png"
  }
];

// app/routes/_client/product/components/Benefit.tsx
import { jsxDEV as jsxDEV45 } from "react/jsx-dev-runtime";
function Benefit() {
  return /* @__PURE__ */ jsxDEV45("section", { className: "bg-white py-10 lg:py-20", children: /* @__PURE__ */ jsxDEV45(Container, { children: [
    /* @__PURE__ */ jsxDEV45("div", { className: "flex flex-col items-center gap-8 pb-14 lg:flex-row lg:gap-24 lg:pb-0", children: [
      /* @__PURE__ */ jsxDEV45("div", { className: "basis-1/2", children: [
        /* @__PURE__ */ jsxDEV45("div", { className: "mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm", children: "For personal use \u{1F91F}\u{1F3FB}" }, void 0, !1, {
          fileName: "app/routes/_client/product/components/Benefit.tsx",
          lineNumber: 9,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV45(
          Heading,
          {
            variant: "h2",
            className: "pb-6 font-bold leading-tight tracking-[-1.68px] text-[#1B2632] lg:pb-8",
            children: "Create a culture of speed and financial discipline."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/product/components/Benefit.tsx",
            lineNumber: 13,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV45(Paragraph, { variant: "body1", className: "max-w-3xl pb-6 lg:pb-14", children: "Gain real-time visibility and accountability across global spend, break down silos of separate systems, and give accounting teams more automation and accuracy." }, void 0, !1, {
          fileName: "app/routes/_client/product/components/Benefit.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV45(Button, { size: "lg", children: "Learn more" }, void 0, !1, {
          fileName: "app/routes/_client/product/components/Benefit.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/product/components/Benefit.tsx",
        lineNumber: 8,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV45("div", { className: "basis-1/2", children: [
        /* @__PURE__ */ jsxDEV45(
          "img",
          {
            src: "/images/financial-discipline.png",
            alt: "financial discipline",
            className: "hidden w-full lg:block"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/product/components/Benefit.tsx",
            lineNumber: 30,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV45(
          "img",
          {
            src: "/images/financial-discipline-mobile.png",
            alt: "financial discipline",
            className: "w-full lg:hidden"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/product/components/Benefit.tsx",
            lineNumber: 35,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/product/components/Benefit.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/product/components/Benefit.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV45("div", { className: "flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-24", children: [
      /* @__PURE__ */ jsxDEV45("div", { className: "basis-1/2", children: [
        /* @__PURE__ */ jsxDEV45(
          "img",
          {
            src: "/images/make-it-easy.png",
            alt: "make it easy",
            className: "hidden w-full lg:block"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/product/components/Benefit.tsx",
            lineNumber: 45,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV45(
          "img",
          {
            src: "/images/make-easy-mobile.png",
            alt: "make it easy",
            className: "w-full lg:hidden"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/product/components/Benefit.tsx",
            lineNumber: 50,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/product/components/Benefit.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV45("div", { className: "basis-1/2", children: [
        /* @__PURE__ */ jsxDEV45("div", { className: "mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm", children: [
          "For business startup \u{1F4BC}",
          " "
        ] }, void 0, !0, {
          fileName: "app/routes/_client/product/components/Benefit.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV45(
          Heading,
          {
            variant: "h2",
            className: "pb-6 font-bold leading-tight tracking-[-1.68px] text-[#1B2632] lg:pb-8",
            children: "Make it easy to do the right thing, anywhere"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/product/components/Benefit.tsx",
            lineNumber: 62,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV45(Paragraph, { variant: "body1", className: "max-w-3xl pb-6 lg:pb-14", children: "Auto-generate receipts and make it easy to understand the policy and purpose for expenses, across cards, reimbursements, and bill pay \u2014 with amounts shown in USD and local currency." }, void 0, !1, {
          fileName: "app/routes/_client/product/components/Benefit.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV45(Button, { size: "lg", children: "Learn more" }, void 0, !1, {
          fileName: "app/routes/_client/product/components/Benefit.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/product/components/Benefit.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/product/components/Benefit.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/product/components/Benefit.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/product/components/Benefit.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_client/product/components/Solutions.tsx
import { Link as Link15 } from "@remix-run/react";
import { jsxDEV as jsxDEV46 } from "react/jsx-dev-runtime";
function Solutions2() {
  return /* @__PURE__ */ jsxDEV46("section", { className: "bg-[#1E2836] py-10 lg:py-24", children: /* @__PURE__ */ jsxDEV46(Container, { children: [
    /* @__PURE__ */ jsxDEV46("div", { className: "mx-auto mb-3 w-fit rounded-full bg-[#353E49] px-6 py-1.5 text-xs text-white lg:text-sm", children: "Our best solution for you \u2728" }, void 0, !1, {
      fileName: "app/routes/_client/product/components/Solutions.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV46(
      Heading,
      {
        variant: "h2",
        className: "mb-10 text-center font-bold leading-tight tracking-[-1.68px] text-white lg:mb-16 ",
        children: "We have solutions that work for you."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/product/components/Solutions.tsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV46("div", { className: "flex flex-col gap-6 lg:flex-row", children: [
      /* @__PURE__ */ jsxDEV46("div", { className: "flex basis-1/2 flex-col justify-between overflow-hidden rounded-3xl bg-primary-800 pt-10", children: [
        /* @__PURE__ */ jsxDEV46("div", { className: "px-5 pb-8 lg:px-10 lg:pb-0", children: [
          /* @__PURE__ */ jsxDEV46(
            Heading,
            {
              variant: "h4",
              className: "pb-3 text-center font-bold text-white",
              children: "Finlab for Personal"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/product/components/Solutions.tsx",
              lineNumber: 25,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV46(
            Paragraph,
            {
              variant: "body1",
              className: "pb-12 text-center text-secondary-300",
              children: "Easy-to-use personal platform and spend management software in an integrated global solution."
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/product/components/Solutions.tsx",
              lineNumber: 32,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV46("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV46(
            Link15,
            {
              to: "/solutions/personal",
              className: cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "whitespace-nowrap text-white"
              ),
              children: "Learn more"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/product/components/Solutions.tsx",
              lineNumber: 41,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_client/product/components/Solutions.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/product/components/Solutions.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV46(
          "img",
          {
            src: "images/for-personal.png",
            alt: "finlab personal",
            className: "w-full"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/product/components/Solutions.tsx",
            lineNumber: 53,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/product/components/Solutions.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV46("div", { className: "basis-1/2 overflow-hidden rounded-3xl bg-white pt-10", children: [
        /* @__PURE__ */ jsxDEV46("div", { className: "px-5 pb-8 lg:px-10 lg:pb-0", children: [
          /* @__PURE__ */ jsxDEV46(Heading, { variant: "h4", className: "pb-3 text-center font-bold", children: "Finlab for Startup" }, void 0, !1, {
            fileName: "app/routes/_client/product/components/Solutions.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV46(Paragraph, { variant: "body1", className: "pb-12 text-center", children: "Fast access to global cards, business account (send ACH and wires), spend management, and bill pay" }, void 0, !1, {
            fileName: "app/routes/_client/product/components/Solutions.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV46("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV46(
            Link15,
            {
              to: "/solutions/startup",
              className: cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "whitespace-nowrap"
              ),
              children: "Learn more"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/product/components/Solutions.tsx",
              lineNumber: 72,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_client/product/components/Solutions.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/product/components/Solutions.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV46(
          "img",
          {
            src: "images/for-stratup.png",
            alt: "finlab starup",
            className: "w-full"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/product/components/Solutions.tsx",
            lineNumber: 84,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/product/components/Solutions.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/product/components/Solutions.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/product/components/Solutions.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/product/components/Solutions.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/_client/product/_route.tsx
import { Fragment as Fragment5, jsxDEV as jsxDEV47 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "Our product | Remix Template" }
];
function _route() {
  return /* @__PURE__ */ jsxDEV47(Fragment5, { children: [
    /* @__PURE__ */ jsxDEV47(Hero2, {}, void 0, !1, {
      fileName: "app/routes/_client/product/_route.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV47(Features2, {}, void 0, !1, {
      fileName: "app/routes/_client/product/_route.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV47(Benefit, {}, void 0, !1, {
      fileName: "app/routes/_client/product/_route.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV47(Solutions2, {}, void 0, !1, {
      fileName: "app/routes/_client/product/_route.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV47(Testimonial, {}, void 0, !1, {
      fileName: "app/routes/_client/product/_route.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV47(CallToAction, {}, void 0, !1, {
      fileName: "app/routes/_client/product/_route.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/product/_route.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_client/resources/accountant.$id.details/_route.tsx
var route_exports5 = {};
__export(route_exports5, {
  default: () => _route2,
  loader: () => loader6,
  meta: () => meta6
});
import { json as json4 } from "@remix-run/node";
import { Link as Link16, useLoaderData as useLoaderData2 } from "@remix-run/react";
import invariant3 from "tiny-invariant";
import { jsxDEV as jsxDEV48 } from "react/jsx-dev-runtime";
var meta6 = () => [
  { title: "Accountant details | Remix Template" }
];
async function loader6({ params }) {
  invariant3(params.id, "Missing accountant id param");
  let accountant = await prisma.accountant.findUnique({
    where: { id: params.id },
    select: {
      id: !0,
      name: !0,
      logo: !0,
      description: !0,
      accountingSoftware: !0,
      address: !0,
      website: !0,
      services: !0,
      otherSoftware: !0
    }
  });
  if (!accountant)
    throw json4("Not Found", { status: 404 });
  return json4({ accountant });
}
function _route2() {
  let { accountant } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV48("section", { className: "bg-white pt-[68px] ", children: /* @__PURE__ */ jsxDEV48(Container, { className: "py-20", children: [
    /* @__PURE__ */ jsxDEV48(
      Link16,
      {
        to: "/resources/accountants",
        className: cn(buttonVariants({ variant: "outline" })),
        children: [
          /* @__PURE__ */ jsxDEV48(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              className: "mr-5",
              children: [
                /* @__PURE__ */ jsxDEV48(
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
                  !1,
                  {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 64,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV48(
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
                  !1,
                  {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 72,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 56,
              columnNumber: 11
            },
            this
          ),
          "Back"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
        lineNumber: 52,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV48("div", { className: "mt-12 flex flex-col gap-12 lg:flex-row lg:gap-20", children: [
      /* @__PURE__ */ jsxDEV48("div", { className: "basis-full space-y-[30px] lg:basis-4/12", children: [
        /* @__PURE__ */ jsxDEV48("div", { className: "space-y-6 rounded-[30px] border-2 border-secondary-200 p-8", children: [
          /* @__PURE__ */ jsxDEV48(
            "img",
            {
              src: accountant.logo,
              alt: accountant.name,
              className: "h-44"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 87,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV48(Heading, { variant: "h6", className: "text-center font-bold", children: accountant.name }, void 0, !1, {
            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV48(
            Paragraph,
            {
              variant: "body2",
              className: "flex justify-center gap-3 text-center font-bold",
              children: [
                /* @__PURE__ */ jsxDEV48("span", { children: /* @__PURE__ */ jsxDEV48(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "25",
                    height: "24",
                    viewBox: "0 0 25 24",
                    fill: "none",
                    children: [
                      /* @__PURE__ */ jsxDEV48(
                        "path",
                        {
                          d: "M12.4999 13.4299C14.223 13.4299 15.6199 12.0331 15.6199 10.3099C15.6199 8.58681 14.223 7.18994 12.4999 7.18994C10.7768 7.18994 9.37988 8.58681 9.37988 10.3099C9.37988 12.0331 10.7768 13.4299 12.4999 13.4299Z",
                          stroke: "#6C7278",
                          strokeWidth: "2"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                          lineNumber: 109,
                          columnNumber: 21
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV48(
                        "path",
                        {
                          d: "M4.1202 8.49C6.0902 -0.169998 18.9202 -0.159997 20.8802 8.5C22.0302 13.58 18.8702 17.88 16.1002 20.54C14.0902 22.48 10.9102 22.48 8.8902 20.54C6.1302 17.88 2.9702 13.57 4.1202 8.49Z",
                          stroke: "#6C7278",
                          strokeWidth: "2"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                          lineNumber: 114,
                          columnNumber: 21
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 102,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                  lineNumber: 101,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV48("span", { children: accountant.address }, void 0, !1, {
                  fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                  lineNumber: 121,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 97,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV48(Button, { size: "lg", className: "w-full", children: [
            "Contact Us",
            " "
          ] }, void 0, !0, {
            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV48("div", { className: "space-y-10 rounded-[30px] border-2 border-secondary-200 p-6 lg:p-8", children: [
          /* @__PURE__ */ jsxDEV48("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV48(Paragraph, { variant: "subtitle2", className: "font-bold", children: "Resources" }, void 0, !1, {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 131,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV48(
              Paragraph,
              {
                variant: "body2",
                className: "flex gap-3 font-bold text-primary-500",
                children: [
                  /* @__PURE__ */ jsxDEV48("span", { children: /* @__PURE__ */ jsxDEV48(
                    "svg",
                    {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M14.9902 17.5H16.5002C19.5202 17.5 22.0002 15.03 22.0002 12C22.0002 8.98 19.5302 6.5 16.5002 6.5H14.9902",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 147,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 154,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M8 12H16",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 161,
                            columnNumber: 23
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                      lineNumber: 140,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 139,
                    columnNumber: 19
                  }, this),
                  accountant.website
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                lineNumber: 135,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV48("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV48(Paragraph, { variant: "subtitle2", className: "font-bold", children: "Services" }, void 0, !1, {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 175,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV48("div", { className: "flex flex-wrap gap-2", children: accountant.services.map((service) => /* @__PURE__ */ jsxDEV48(
              "div",
              {
                className: "rounded-xl border border-[#DCE4E8] px-6 py-3 text-lg text-secondary-500",
                children: service
              },
              service,
              !1,
              {
                fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                lineNumber: 181,
                columnNumber: 21
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 179,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV48("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV48(Paragraph, { variant: "subtitle2", className: "font-bold", children: "Accounting Software" }, void 0, !1, {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 192,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV48(
              Paragraph,
              {
                variant: "body2",
                className: "flex gap-3 font-bold text-primary-500",
                children: [
                  /* @__PURE__ */ jsxDEV48("span", { children: /* @__PURE__ */ jsxDEV48(
                    "svg",
                    {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M9 11V17L11 15",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 208,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M9 17L7 15",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 215,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 222,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M22 10H18C15 10 14 9 14 6V2L22 10Z",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 229,
                            columnNumber: 23
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                      lineNumber: 201,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 200,
                    columnNumber: 19
                  }, this),
                  accountant.accountingSoftware
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                lineNumber: 196,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
            lineNumber: 191,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV48("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV48(Paragraph, { variant: "subtitle2", className: "font-bold", children: "Other Software Expertise" }, void 0, !1, {
              fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
              lineNumber: 243,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV48(
              Paragraph,
              {
                variant: "body2",
                className: "flex gap-3 font-bold text-primary-500",
                children: [
                  /* @__PURE__ */ jsxDEV48("span", { children: /* @__PURE__ */ jsxDEV48(
                    "svg",
                    {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M17.0099 12.7298C17.6009 12.7298 18.0799 12.2507 18.0799 11.6598C18.0799 11.0688 17.6009 10.5898 17.0099 10.5898C16.419 10.5898 15.9399 11.0688 15.9399 11.6598C15.9399 12.2507 16.419 12.7298 17.0099 12.7298Z",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 259,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M20 6V7.78998C19.75 7.75998 19.46 7.73999 19.15 7.73999H14.87C12.73 7.73999 12.02 8.45003 12.02 10.59V15.7H6C2.8 15.7 2 14.9 2 11.7V6C2 2.8 2.8 2 6 2H16C19.2 2 20 2.8 20 6Z",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 266,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M9 15.7002V20.0002",
                            stroke: "#6C7278",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 273,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M2 11.8999H12",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 280,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M5.9502 20H12.0002",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 287,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M17.0099 12.7303C17.6009 12.7303 18.0799 12.2512 18.0799 11.6603C18.0799 11.0693 17.6009 10.5903 17.0099 10.5903C16.419 10.5903 15.9399 11.0693 15.9399 11.6603C15.9399 12.2512 16.419 12.7303 17.0099 12.7303Z",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 294,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M20 7.79022C19.75 7.76022 19.46 7.74023 19.15 7.74023H14.87C12.73 7.74023 12.02 8.45027 12.02 10.5903V19.1503C12.02 21.2903 12.73 22.0002 14.87 22.0002H19.15C21.29 22.0002 22 21.2903 22 19.1503V10.5903C22 8.76027 21.48 7.98022 20 7.79022ZM17.01 10.5903C17.6 10.5903 18.08 11.0702 18.08 11.6602C18.08 12.2502 17.6 12.7302 17.01 12.7302C16.42 12.7302 15.94 12.2502 15.94 11.6602C15.94 11.0702 16.42 10.5903 17.01 10.5903ZM17.01 19.1503C15.83 19.1503 14.87 18.1903 14.87 17.0103C14.87 16.5203 15.04 16.0603 15.32 15.7003C15.71 15.2003 16.32 14.8702 17.01 14.8702C17.55 14.8702 18.04 15.0703 18.41 15.3903C18.86 15.7903 19.15 16.3703 19.15 17.0103C19.15 18.1903 18.19 19.1503 17.01 19.1503Z",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 302,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M19.1501 17.0101C19.1501 18.1901 18.1901 19.1501 17.0101 19.1501C15.8301 19.1501 14.8701 18.1901 14.8701 17.0101C14.8701 16.5201 15.0401 16.0601 15.3201 15.7001C15.7101 15.2001 16.3201 14.8701 17.0101 14.8701C17.5501 14.8701 18.0401 15.0701 18.4101 15.3901C18.8601 15.7901 19.1501 16.3701 19.1501 17.0101Z",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 310,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV48(
                          "path",
                          {
                            d: "M17.0099 12.7303C17.6009 12.7303 18.0799 12.2512 18.0799 11.6603C18.0799 11.0693 17.6009 10.5903 17.0099 10.5903C16.419 10.5903 15.9399 11.0693 15.9399 11.6603C15.9399 12.2512 16.419 12.7303 17.0099 12.7303Z",
                            stroke: "#6C7278",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                            lineNumber: 318,
                            columnNumber: 23
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                      lineNumber: 252,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 251,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV48("span", { className: "flex flex-wrap gap-2", children: accountant.otherSoftware.map((software) => /* @__PURE__ */ jsxDEV48("span", { children: software }, software, !1, {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 331,
                    columnNumber: 23
                  }, this)) }, void 0, !1, {
                    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                    lineNumber: 329,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
                lineNumber: 247,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
            lineNumber: 242,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV48("div", { className: "h-96 basis-full lg:basis-8/12", children: /* @__PURE__ */ jsxDEV48("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV48(Paragraph, { className: "font-bold", children: "About " }, void 0, !1, {
          fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
          lineNumber: 341,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV48(Paragraph, { variant: "body1", children: accountant.description }, void 0, !1, {
          fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
          lineNumber: 342,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
        lineNumber: 340,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
        lineNumber: 339,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/resources/accountant.$id.details/_route.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/_client/resources/accountants/_route.tsx
var route_exports6 = {};
__export(route_exports6, {
  default: () => _route3,
  loader: () => loader7,
  meta: () => meta7
});
import { json as json5 } from "@remix-run/node";

// app/routes/_client/resources/accountants/components/Hero.tsx
import { Link as Link17 } from "@remix-run/react";
import { ArrowRight as ArrowRight4 } from "lucide-react";
import { jsxDEV as jsxDEV49 } from "react/jsx-dev-runtime";
function Hero3() {
  return /* @__PURE__ */ jsxDEV49("section", { className: "bg-white pt-24 lg:pt-[68px] ", children: /* @__PURE__ */ jsxDEV49(Container, { className: "flex h-full basis-full flex-col items-center justify-between py-5 lg:flex-row", children: [
    /* @__PURE__ */ jsxDEV49("div", { className: "basis-1/2 lg:py-20", children: [
      /* @__PURE__ */ jsxDEV49("div", { className: "mb-5 max-w-fit rounded-full bg-[#F4F4F7] px-1.5 py-2 text-xs lg:text-sm", children: [
        /* @__PURE__ */ jsxDEV49("span", { className: "rounded-full bg-primary px-[5px] py-1 font-medium text-white", children: "News!" }, void 0, !1, {
          fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV49("span", { className: "pl-2 text-secondary-500", children: "Update New features for active users \u2728" }, void 0, !1, {
          fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV49(
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
        !0,
        {
          fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
          lineNumber: 23,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV49(Paragraph, { variant: "body1", className: "mb-6 lg:pb-10", children: "Need accounting support? Check out finlab directory of vetted accounting professionals who can help you streamline your finances and get the most out of your finlab account." }, void 0, !1, {
        fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV49("div", { className: "mb-10 flex gap-2 md:gap-4", children: [
        /* @__PURE__ */ jsxDEV49(
          Link17,
          {
            to: "/login",
            className: cn(
              buttonVariants({ size: "lg" }),
              "flex items-center whitespace-nowrap px-7 md:px-8"
            ),
            children: [
              "Live preview",
              /* @__PURE__ */ jsxDEV49(ArrowRight4, { className: "ml-2 inline-block", size: 16 }, void 0, !1, {
                fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
                lineNumber: 45,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
            lineNumber: 37,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV49(
          Link17,
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
          !1,
          {
            fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
            lineNumber: 48,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV49(
      "img",
      {
        src: "/images/accountants.png",
        alt: "accountants",
        className: "w-full lg:h-[700px] lg:w-auto"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
        lineNumber: 60,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/resources/accountants/components/Hero.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_client/resources/accountants/components/SearchAccountant.tsx
import { useLoaderData as useLoaderData3 } from "@remix-run/react";

// app/routes/_client/resources/accountants/components/AccountantCard.tsx
import { Link as Link18 } from "@remix-run/react";
import { jsxDEV as jsxDEV50 } from "react/jsx-dev-runtime";
function AccountantCard({ accountant }) {
  return /* @__PURE__ */ jsxDEV50(
    Link18,
    {
      to: `/resources/accountant/${accountant.id}/details`,
      className: "rounded-[30px] border-2 border-secondary-200 p-8 duration-200 hover:border-transparent hover:shadow-[0px_44px_184px_-10px_rgba(0,0,0,0.11)]",
      children: [
        /* @__PURE__ */ jsxDEV50(
          "img",
          {
            src: accountant.logo,
            alt: accountant.name,
            className: "h-44 w-full"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/resources/accountants/components/AccountantCard.tsx",
            lineNumber: 17,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV50("div", { className: "space-y-6 pt-8", children: [
          /* @__PURE__ */ jsxDEV50(Heading, { variant: "h6", className: "font-bold", children: accountant.name }, void 0, !1, {
            fileName: "app/routes/_client/resources/accountants/components/AccountantCard.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV50(Paragraph, { variant: "body1", children: [
            accountant.description.slice(0, 300),
            "..."
          ] }, void 0, !0, {
            fileName: "app/routes/_client/resources/accountants/components/AccountantCard.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/resources/accountants/components/AccountantCard.tsx",
          lineNumber: 23,
          columnNumber: 7
        }, this)
      ]
    },
    accountant.id,
    !0,
    {
      fileName: "app/routes/_client/resources/accountants/components/AccountantCard.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_client/resources/accountants/components/SearchAccountant.tsx
import { jsxDEV as jsxDEV51 } from "react/jsx-dev-runtime";
function SearchAccountant() {
  let { accountants } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV51("section", { className: "bg-white pb-10 pt-10 lg:pt-24", children: /* @__PURE__ */ jsxDEV51(Container, { children: [
    /* @__PURE__ */ jsxDEV51("div", { className: "mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-sm text-secondary-500", children: "Search accountant \u{1F389}" }, void 0, !1, {
      fileName: "app/routes/_client/resources/accountants/components/SearchAccountant.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV51(
      Heading,
      {
        variant: "h2",
        className: "pb-12 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]",
        children: "Let\u2019s find an accountant"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/resources/accountants/components/SearchAccountant.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV51("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: accountants.map((accountant) => /* @__PURE__ */ jsxDEV51(AccountantCard, { accountant }, accountant.id, !1, {
      fileName: "app/routes/_client/resources/accountants/components/SearchAccountant.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_client/resources/accountants/components/SearchAccountant.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/resources/accountants/components/SearchAccountant.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/resources/accountants/components/SearchAccountant.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_client/resources/accountants/_route.tsx
import { Fragment as Fragment6, jsxDEV as jsxDEV52 } from "react/jsx-dev-runtime";
var meta7 = () => [
  { title: "Accountants | Remix Template" }
];
async function loader7() {
  let accountants = await prisma.accountant.findMany({
    select: {
      id: !0,
      name: !0,
      logo: !0,
      description: !0
    }
  });
  return json5({ accountants });
}
function _route3() {
  return /* @__PURE__ */ jsxDEV52(Fragment6, { children: [
    /* @__PURE__ */ jsxDEV52(Hero3, {}, void 0, !1, {
      fileName: "app/routes/_client/resources/accountants/_route.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV52(SearchAccountant, {}, void 0, !1, {
      fileName: "app/routes/_client/resources/accountants/_route.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/resources/accountants/_route.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/_client/resources/partner/_route.tsx
var route_exports7 = {};
__export(route_exports7, {
  default: () => _route4,
  meta: () => meta8
});

// app/routes/_client/resources/partner/components/Hero.tsx
import { Link as Link19 } from "@remix-run/react";
import { ArrowRight as ArrowRight5 } from "lucide-react";
import { jsxDEV as jsxDEV53 } from "react/jsx-dev-runtime";
function Hero4() {
  return /* @__PURE__ */ jsxDEV53("section", { className: "bg-white pt-24 lg:pt-[68px]", children: /* @__PURE__ */ jsxDEV53(Container, { className: "flex h-full basis-full flex-col items-center justify-between py-5 lg:flex-row", children: [
    /* @__PURE__ */ jsxDEV53("div", { className: "basis-1/2 lg:py-20", children: [
      /* @__PURE__ */ jsxDEV53("div", { className: "mb-5 max-w-fit rounded-full bg-[#F4F4F7] px-1.5 py-2 text-xs lg:text-sm", children: [
        /* @__PURE__ */ jsxDEV53("span", { className: "rounded-full bg-primary px-[5px] py-1 font-medium text-white", children: "News!" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV53("span", { className: "pl-2 text-secondary-500", children: "Update New features for active users \u2728" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV53(
        Heading,
        {
          variant: "h1",
          className: "mb-6 font-bold text-[#1B2632] lg:mb-8 lg:leading-tight lg:tracking-[-2.16px]",
          children: "Let\u2019s become a Finlab partner."
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
          lineNumber: 23,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV53(Paragraph, { variant: "body1", className: "mb-6 lg:pb-10", children: "Give your customers financial products you'll both love." }, void 0, !1, {
        fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV53("div", { className: "mb-10 flex gap-2 md:gap-4", children: [
        /* @__PURE__ */ jsxDEV53(
          Link19,
          {
            to: "/login",
            className: cn(
              buttonVariants({ size: "lg" }),
              "flex items-center whitespace-nowrap px-7 md:px-8"
            ),
            children: [
              "Live preview",
              /* @__PURE__ */ jsxDEV53(ArrowRight5, { className: "ml-2 inline-block", size: 16 }, void 0, !1, {
                fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
                lineNumber: 43,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
            lineNumber: 35,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV53(
          Link19,
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
          !1,
          {
            fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
            lineNumber: 46,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV53(
      "img",
      {
        src: "/images/partner-hero.png",
        alt: "partner hero",
        className: "w-full lg:h-[700px] lg:w-auto"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
        lineNumber: 59,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/resources/partner/components/Hero.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_client/resources/partner/components/Benefit.tsx
import { jsxDEV as jsxDEV54 } from "react/jsx-dev-runtime";
function Benefit2() {
  return /* @__PURE__ */ jsxDEV54("section", { className: "bg-white pb-10 pt-10 lg:pt-24", children: /* @__PURE__ */ jsxDEV54(Container, { children: [
    /* @__PURE__ */ jsxDEV54("div", { className: "mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-sm text-secondary-500", children: "Benefit partnership with us \u{1F389}" }, void 0, !1, {
      fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV54(
      Heading,
      {
        variant: "h2",
        className: "pb-12 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]",
        children: "Why partner with Finlab ?"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV54("div", { className: "grid grid-cols-1 gap-5 pb-14 lg:grid-cols-3", children: PARTNER_BENEFITS.map((benefit) => /* @__PURE__ */ jsxDEV54(
      "div",
      {
        className: "space-y-5 rounded-[30px] border-2 border-secondary-200 bg-white p-8 duration-200 hover:border-transparent hover:shadow-[0px_34px_184px_-10px_rgba(0,0,0,0.06)]",
        children: [
          /* @__PURE__ */ jsxDEV54("div", { children: benefit.icon }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
            lineNumber: 24,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV54(Heading, { variant: "h5", className: "pb-2 text-[28px] font-bold", children: benefit.label }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
            lineNumber: 26,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV54(Paragraph, { variant: "body1", className: "pb-10", children: benefit.description }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
            lineNumber: 30,
            columnNumber: 15
          }, this)
        ]
      },
      benefit.label,
      !0,
      {
        fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
        lineNumber: 20,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV54("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxDEV54(
      "img",
      {
        src: "/images/partner-benefit.png",
        alt: "partner benefit",
        className: " w-full"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
        lineNumber: 38,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var PARTNER_BENEFITS = [
  {
    label: "Improve client experiences with the best financial products",
    description: "Manage your clients with a single sign-in using pro access.",
    icon: /* @__PURE__ */ jsxDEV54(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "74",
        height: "74",
        viewBox: "0 0 74 74",
        fill: "none",
        children: /* @__PURE__ */ jsxDEV54(
          "path",
          {
            d: "M45.1954 33.5534V33.0534V10.8534C45.1954 9.59733 45.0244 8.63153 44.7414 7.94658C44.4594 7.26405 44.0847 6.89905 43.6889 6.75048C43.2929 6.60181 42.7692 6.6298 42.1053 6.95724C41.4394 7.28568 40.6724 7.89834 39.8426 8.84022L45.1954 33.5534ZM45.1954 33.5534H45.6954H55.2229C57.3231 33.5534 58.4308 34.2001 58.7871 34.9896C59.1431 35.7786 58.8954 37.0359 57.5003 38.6111L57.4991 38.6124L36.6249 62.3541L36.6249 62.3541L34.1586 65.1596C33.3286 66.1017 32.5615 66.7145 31.8955 67.0429C31.2316 67.3704 30.7079 67.3984 30.3119 67.2497C29.9161 67.1011 29.5414 66.7361 29.2594 66.0536C28.9764 65.3686 28.8054 64.4029 28.8054 63.1468V40.9468V40.4468H28.3054H18.7779C16.6777 40.4468 15.57 39.8001 15.2138 39.0106C14.8577 38.2215 15.1054 36.9643 16.5005 35.3891L16.5017 35.3877L37.3759 11.6461L37.3759 11.6461L39.8422 8.84061L45.1954 33.5534Z",
            fill: "#31B099",
            stroke: "#31B099"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
            lineNumber: 61,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
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
    icon: /* @__PURE__ */ jsxDEV54(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "74",
        height: "74",
        viewBox: "0 0 74 74",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxDEV54(
            "path",
            {
              d: "M29.291 42.3961C29.291 45.3869 31.6036 47.7919 34.4402 47.7919H40.2368C42.7035 47.7919 44.7077 45.6952 44.7077 43.0744C44.7077 40.2686 43.4744 39.2511 41.6552 38.6036L32.3743 35.3661C30.5552 34.7186 29.3219 33.7319 29.3219 30.8952C29.3219 28.3052 31.326 26.1777 33.7927 26.1777H39.5893C42.426 26.1777 44.7385 28.5827 44.7385 31.5736",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 81,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV54(
            "path",
            {
              d: "M37 23.125V50.875",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 88,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV54(
            "path",
            {
              d: "M67.8327 36.9998C67.8327 54.0198 54.0194 67.8332 36.9994 67.8332C19.9793 67.8332 6.16602 54.0198 6.16602 36.9998C6.16602 19.9798 19.9793 6.1665 36.9994 6.1665",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 95,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV54(
            "path",
            {
              d: "M52.416 9.25V21.5833H64.7493",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 102,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV54(
            "path",
            {
              d: "M67.8327 6.1665L52.416 21.5832",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
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
      !0,
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
    icon: /* @__PURE__ */ jsxDEV54(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "74",
        height: "74",
        viewBox: "0 0 74 74",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxDEV54(
            "path",
            {
              d: "M63.209 29.2915C67.834 29.2915 67.834 30.8332 67.834 33.9165V40.0832C67.834 43.1665 67.834 44.7082 63.209 44.7082",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 131,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV54(
            "path",
            {
              d: "M30.8327 24.6665L25.0052 32.3748C23.8027 34.4407 25.2827 36.9998 27.6569 36.9998H34.7486C37.1227 36.9998 38.6027 39.559 37.4311 41.6248L30.8327 49.3332",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 138,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV54(
            "path",
            {
              d: "M21.5827 58.5832C9.24935 58.5832 6.16602 55.4998 6.16602 43.1665V30.8332C6.16602 18.4998 9.24935 15.4165 21.5827 15.4165",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/resources/partner/components/Benefit.tsx",
              lineNumber: 145,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV54(
            "path",
            {
              d: "M40.084 15.4165C52.4173 15.4165 55.5007 18.4998 55.5007 30.8332V43.1665C55.5007 55.4998 52.4173 58.5832 40.084 58.5832",
              stroke: "#31B099",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
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
      !0,
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
import { jsxDEV as jsxDEV55 } from "react/jsx-dev-runtime";
function PartnerForm() {
  return /* @__PURE__ */ jsxDEV55("section", { className: "bg-white py-10 lg:py-24", children: /* @__PURE__ */ jsxDEV55(Container, { children: [
    /* @__PURE__ */ jsxDEV55("div", { className: "mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm", children: "Become our partner \u{1F91F}\u{1F3FB}" }, void 0, !1, {
      fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV55(
      Heading,
      {
        variant: "h2",
        className: "pb-12 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]",
        children: "Let\u2019s become a partner"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 24,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV55("div", { className: "mx-auto max-w-3xl space-y-7", children: [
      /* @__PURE__ */ jsxDEV55("div", { className: "space-y-[3px]", children: [
        /* @__PURE__ */ jsxDEV55(Label, { htmlFor: "firstName", children: "First Name" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV55(Input, { id: "firstName", placeholder: "First Name" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV55("div", { className: "space-y-[3px]", children: [
        /* @__PURE__ */ jsxDEV55(Label, { htmlFor: "lastName", children: "Last Name" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV55(Input, { id: "lastName", placeholder: "Last Name" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV55("div", { className: "space-y-[3px]", children: [
        /* @__PURE__ */ jsxDEV55(Label, { htmlFor: "workEmail", children: "Work Email" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV55(Input, { type: "email", id: "workEmail", placeholder: "Work Email" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV55("div", { className: "space-y-[3px]", children: [
        /* @__PURE__ */ jsxDEV55(Label, { htmlFor: "companyName", children: "Company Name" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV55(Input, { id: "companyName", placeholder: "Company Name" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV55("div", { className: "space-y-[3px]", children: [
        /* @__PURE__ */ jsxDEV55(Label, { htmlFor: "companyWebsite", children: "Company website" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV55(Input, { id: "companyWebsite", placeholder: "Company website" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV55("div", { className: "space-y-[3px]", children: [
        /* @__PURE__ */ jsxDEV55(Label, { htmlFor: "numberOfClient", children: "Number of client served" }, void 0, !1, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV55(Select, { children: [
          /* @__PURE__ */ jsxDEV55(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsxDEV55(SelectValue, { placeholder: "Select" }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV55(SelectContent, { children: /* @__PURE__ */ jsxDEV55(SelectGroup, { children: [
            /* @__PURE__ */ jsxDEV55(SelectLabel, { children: "Fruits" }, void 0, !1, {
              fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
              lineNumber: 65,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV55(SelectItem, { value: "apple", children: "Apple" }, void 0, !1, {
              fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
              lineNumber: 66,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV55(SelectItem, { value: "banana", children: "Banana" }, void 0, !1, {
              fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
              lineNumber: 67,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV55(SelectItem, { value: "blueberry", children: "Blueberry" }, void 0, !1, {
              fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV55(SelectItem, { value: "grapes", children: "Grapes" }, void 0, !1, {
              fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
              lineNumber: 69,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV55(SelectItem, { value: "pineapple", children: "Pineapple" }, void 0, !1, {
              fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
              lineNumber: 70,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV55("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxDEV55(Button, { size: "lg", children: "Apply" }, void 0, !1, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/resources/partner/components/PartnerForm.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/ui/accordion.tsx
import * as React20 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { jsxDEV as jsxDEV56 } from "react/jsx-dev-runtime";
var Accordion = AccordionPrimitive.Root, AccordionItem = React20.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV56(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  this
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React20.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV56(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxDEV56(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-left text-lg font-bold text-secondary-500 transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV56(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "9",
          viewBox: "0 0 18 9",
          fill: "none",
          className: "h-4 w-4 shrink-0 transition-transform duration-200",
          children: /* @__PURE__ */ jsxDEV56(
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
            !1,
            {
              fileName: "app/components/ui/accordion.tsx",
              lineNumber: 42,
              columnNumber: 9
            },
            this
          )
        },
        void 0,
        !1,
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
  !0,
  {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 25,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 24,
  columnNumber: 3
}, this));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React20.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV56(
  AccordionPrimitive.Content,
  {
    ref,
    className: cn(
      "overflow-hidden text-base text-secondary-500 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV56("div", { className: "pb-4 pt-0", children }, void 0, !1, {
      fileName: "app/components/ui/accordion.tsx",
      lineNumber: 68,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 60,
    columnNumber: 3
  },
  this
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// app/routes/_client/resources/partner/components/FAQ.tsx
import { jsxDEV as jsxDEV57 } from "react/jsx-dev-runtime";
function FAQ() {
  return /* @__PURE__ */ jsxDEV57("section", { className: "bg-white py-10 lg:py-24", children: /* @__PURE__ */ jsxDEV57(Container, { children: [
    /* @__PURE__ */ jsxDEV57("div", { className: "mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm", children: "Some frequently asked questions \u{1F44D}\u{1F3FB}" }, void 0, !1, {
      fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV57(
      Heading,
      {
        variant: "h2",
        className: "pb-20 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]",
        children: "Frequently asked questions"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV57("div", { className: "grid grid-cols-1 lg:grid-cols-2 lg:gap-8", children: [
      /* @__PURE__ */ jsxDEV57(Accordion, { type: "single", collapsible: !0, className: "w-full", children: [
        /* @__PURE__ */ jsxDEV57(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ jsxDEV57(AccordionTrigger, { children: "How does the partner program work?" }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV57(AccordionContent, { children: "The Partner Program is a service that allows participating partners to earn commission and fees on referred customers. We provide you with the materials and resources you\u2019ll need to get started." }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 30,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV57(AccordionItem, { value: "item-2", children: [
          /* @__PURE__ */ jsxDEV57(AccordionTrigger, { children: "Are there any fees?" }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV57(AccordionContent, { children: "No fees to participate. " }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV57(AccordionItem, { value: "item-3", children: [
          /* @__PURE__ */ jsxDEV57(AccordionTrigger, { children: "How often do I get paid?" }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV57(AccordionContent, { children: "Brex will send your earned fees on a monthly basis." }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV57(Accordion, { type: "single", collapsible: !0, className: "w-full", children: [
        /* @__PURE__ */ jsxDEV57(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ jsxDEV57(AccordionTrigger, { children: "Am I eligible?" }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV57(AccordionContent, { children: "If you work primarily with US-based companies that you think would benefit from Brex\u2019s unique financial products, we\u2019d love to have you on board." }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV57(AccordionItem, { value: "item-2", children: [
          /* @__PURE__ */ jsxDEV57(AccordionTrigger, { children: "How much will I get paid?" }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV57(AccordionContent, { children: "Brex offers partners tiered revenue share-based fee structures, which depend on the volume of customers you refer and how much money they spend on their Brex financial products. Apply to learn where your company fits in." }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV57(AccordionItem, { value: "item-3", children: [
          /* @__PURE__ */ jsxDEV57(AccordionTrigger, { children: "Is it animated?" }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV57(AccordionContent, { children: "Yes. It's animated by default, but you can disable it if you prefer." }, void 0, !1, {
            fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/resources/partner/components/FAQ.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_client/resources/partner/_route.tsx
import { Fragment as Fragment7, jsxDEV as jsxDEV58 } from "react/jsx-dev-runtime";
var meta8 = () => [
  { title: "Partner | Remix Template" }
];
function _route4() {
  return /* @__PURE__ */ jsxDEV58(Fragment7, { children: [
    /* @__PURE__ */ jsxDEV58(Hero4, {}, void 0, !1, {
      fileName: "app/routes/_client/resources/partner/_route.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV58(Benefit2, {}, void 0, !1, {
      fileName: "app/routes/_client/resources/partner/_route.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV58(PartnerForm, {}, void 0, !1, {
      fileName: "app/routes/_client/resources/partner/_route.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV58(FAQ, {}, void 0, !1, {
      fileName: "app/routes/_client/resources/partner/_route.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV58(CallToAction, {}, void 0, !1, {
      fileName: "app/routes/_client/resources/partner/_route.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/resources/partner/_route.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_client/solutions/personal/_route.tsx
var route_exports8 = {};
__export(route_exports8, {
  default: () => _route5,
  meta: () => meta9
});

// app/routes/_client/solutions/personal/components/Hero.tsx
import { Link as Link20 } from "@remix-run/react";
import { ArrowRight as ArrowRight6 } from "lucide-react";
import { jsxDEV as jsxDEV59 } from "react/jsx-dev-runtime";
function Hero5() {
  return /* @__PURE__ */ jsxDEV59("section", { className: "bg-[#1E2836] pt-36", children: /* @__PURE__ */ jsxDEV59(Container, { className: "h-full basis-full", children: [
    /* @__PURE__ */ jsxDEV59("div", { className: "mx-auto mb-3 max-w-fit rounded-full bg-[#353E49] px-1.5 py-2 text-xs lg:mb-8", children: [
      /* @__PURE__ */ jsxDEV59("span", { className: "rounded-full bg-primary px-[5px] py-1 font-medium text-white", children: "News!" }, void 0, !1, {
        fileName: "app/routes/_client/solutions/personal/components/Hero.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV59("span", { className: "pl-2 text-white", children: "Update New features for active users \u2728" }, void 0, !1, {
        fileName: "app/routes/_client/solutions/personal/components/Hero.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/solutions/personal/components/Hero.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV59(
      Heading,
      {
        variant: "h1",
        className: "mb-6 text-center font-bold text-white lg:mb-10 lg:leading-tight lg:tracking-[-2.16px]",
        children: [
          "Finlab for Personal",
          " "
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_client/solutions/personal/components/Hero.tsx",
        lineNumber: 22,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV59(
      Paragraph,
      {
        variant: "body1",
        className: "mb-10 text-center text-secondary-200",
        children: "Easy-to-use personal platform and spend management software in an integrated global solution."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/solutions/personal/components/Hero.tsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV59("div", { className: "mb-14 flex items-center justify-center gap-2 md:gap-4 lg:mb-4", children: [
      /* @__PURE__ */ jsxDEV59(
        Link20,
        {
          to: "/login",
          className: cn(
            buttonVariants({ size: "lg" }),
            "flex items-center whitespace-nowrap px-7 md:px-8"
          ),
          children: [
            "Get started",
            /* @__PURE__ */ jsxDEV59(ArrowRight6, { className: "ml-2 inline-block", size: 16 }, void 0, !1, {
              fileName: "app/routes/_client/solutions/personal/components/Hero.tsx",
              lineNumber: 46,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_client/solutions/personal/components/Hero.tsx",
          lineNumber: 38,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV59(
        Link20,
        {
          to: BUY_URL,
          className: cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "whitespace-nowrap px-7 text-white md:px-8"
          ),
          target: "_blank",
          children: "Purchase now"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/solutions/personal/components/Hero.tsx",
          lineNumber: 48,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_client/solutions/personal/components/Hero.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV59(
      "img",
      {
        src: "/images/personal-hero.png",
        alt: "finlab personal",
        className: ""
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/solutions/personal/components/Hero.tsx",
        lineNumber: 60,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_client/solutions/personal/components/Hero.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/solutions/personal/components/Hero.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_client/solutions/personal/components/Benefit.tsx
import { jsxDEV as jsxDEV60 } from "react/jsx-dev-runtime";
function Benefit3() {
  return /* @__PURE__ */ jsxDEV60("section", { className: "bg-white pb-10 pt-20 lg:pt-24", children: /* @__PURE__ */ jsxDEV60(Container, { children: [
    /* @__PURE__ */ jsxDEV60("div", { className: "mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm", children: "Our best solution for you \u2728" }, void 0, !1, {
      fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV60(
      Heading,
      {
        variant: "h2",
        className: "pb-6 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]",
        children: [
          "Make your financially more stable",
          " "
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV60(
      Paragraph,
      {
        variant: "body1",
        className: "mx-auto max-w-3xl pb-10 text-center lg:pb-6",
        children: "finlab is adaptable to meet the financial processing requirements of global companies and support with multiple local bank channels and digital wallets."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV60("div", { className: "flex items-center justify-center pb-12", children: /* @__PURE__ */ jsxDEV60(Button, { variant: "outline", size: "lg", children: "Learn more" }, void 0, !1, {
      fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV60("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-6", children: [
      /* @__PURE__ */ jsxDEV60("div", { className: "relative flex h-[600px] w-full flex-col overflow-hidden rounded-[30px] bg-primary-800 p-8 md:col-span-4 md:h-80 lg:col-span-4 lg:flex-row lg:p-10", children: [
        /* @__PURE__ */ jsxDEV60("div", { className: "md:basis-4/6", children: [
          /* @__PURE__ */ jsxDEV60(Heading, { variant: "h5", className: "pb-6 font-bold text-white", children: "Get an all-in-one financial Tasks more easy" }, void 0, !1, {
            fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
            lineNumber: 36,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV60(
            Paragraph,
            {
              variant: "body1",
              className: "max-w-sm text-secondary-200",
              children: "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo."
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
              lineNumber: 40,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV60("div", { className: "absolute -right-6 bottom-0 flex gap-5 md:-bottom-14", children: [
          /* @__PURE__ */ jsxDEV60("div", { className: "mt-20 space-y-5", children: [
            /* @__PURE__ */ jsxDEV60("div", { className: "h-20 w-20 rounded-xl bg-[#136872]" }, void 0, !1, {
              fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
              lineNumber: 51,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV60("div", { className: "h-20 w-20 rounded-xl bg-[#136872]" }, void 0, !1, {
              fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
              lineNumber: 52,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV60("div", { className: "mt-10 space-y-5", children: [
            /* @__PURE__ */ jsxDEV60("div", { className: "flex h-20 w-20 items-center justify-center rounded-xl bg-[#FBFEFE]", children: /* @__PURE__ */ jsxDEV60(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "38",
                height: "44",
                viewBox: "0 0 38 44",
                fill: "none",
                children: [
                  /* @__PURE__ */ jsxDEV60("g", { clipPath: "url(#clip0_153_5574)", children: [
                    /* @__PURE__ */ jsxDEV60(
                      "path",
                      {
                        d: "M31.6404 3.42487C29.6103 1.11094 25.9405 0.118896 21.2457 0.118896H7.62031C7.15581 0.118914 6.70655 0.284631 6.3533 0.586254C6.00005 0.887877 5.76599 1.30562 5.69319 1.76438L0.0198151 37.7463C-0.0929531 38.4559 0.456464 39.0984 1.17562 39.0984H9.58748L11.7001 25.6986L11.6345 26.1182C11.785 25.1711 12.5951 24.4725 13.5543 24.4725H17.5516C25.4043 24.4725 31.5531 21.2829 33.3492 12.0562C33.4026 11.7833 33.4487 11.5177 33.4887 11.2582C33.262 11.1381 33.262 11.1381 33.4887 11.2582C34.0235 7.84789 33.485 5.52653 31.6404 3.42487Z",
                        fill: "#27346A"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                        lineNumber: 64,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV60(
                      "path",
                      {
                        d: "M14.9188 10.0297C15.1487 9.92018 15.4003 9.86343 15.655 9.86359H26.3371C27.602 9.86359 28.7818 9.9459 29.86 10.1194C30.1617 10.1675 30.4618 10.225 30.7599 10.2916C31.1825 10.3849 31.6002 10.499 32.0115 10.6336C32.5415 10.8106 33.0351 11.0168 33.4888 11.2582C34.0235 7.84658 33.485 5.52653 31.6404 3.42487C29.6091 1.11094 25.9405 0.118896 21.2457 0.118896H7.61914C6.65974 0.118896 5.84355 0.81736 5.69319 1.76438L0.0198159 37.745C-0.0929523 38.4557 0.456465 39.0974 1.17445 39.0974H9.58749L13.9704 11.3031C14.0135 11.0299 14.1224 10.7712 14.2876 10.5494C14.4528 10.3276 14.6694 10.1492 14.9188 10.0297Z",
                        fill: "#27346A"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                        lineNumber: 68,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV60(
                      "path",
                      {
                        d: "M33.3492 12.0562C31.5531 21.2816 25.4045 24.4725 17.5516 24.4725H13.5532C12.5939 24.4725 11.7837 25.1711 11.6347 26.1182L9.00645 42.7792C8.90825 43.4002 9.38846 43.9629 10.0167 43.9629H17.1077C17.5139 43.9627 17.9067 43.8177 18.2155 43.5538C18.5244 43.29 18.7289 42.9246 18.7924 42.5234L18.8614 42.1621L20.1979 33.6919L20.284 33.2238C20.3475 32.8226 20.552 32.4572 20.8608 32.1934C21.1696 31.9295 21.5624 31.7845 21.9685 31.7843H23.0298C29.8989 31.7843 35.2775 28.9937 36.8493 20.9227C37.5053 17.5499 37.1659 14.7339 35.4303 12.7559C34.9039 12.1568 34.2502 11.662 33.4887 11.2582C33.4474 11.519 33.4027 11.7833 33.3492 12.0562Z",
                        fill: "#2790C3"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                        lineNumber: 72,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV60(
                      "path",
                      {
                        d: "M31.6089 10.5087C31.3288 10.4269 31.0461 10.3545 30.7612 10.2916C30.463 10.226 30.1628 10.169 29.8613 10.1206C28.782 9.94587 27.603 9.86341 26.3369 9.86341H15.6561C15.4012 9.86283 15.1495 9.92007 14.9199 10.0308C14.6703 10.15 14.4534 10.3283 14.2881 10.5501C14.1229 10.772 14.0142 11.0308 13.9715 11.3042L11.7012 25.6986L11.6357 26.1182C11.785 25.171 12.5951 24.4724 13.5545 24.4724H17.5529C25.4056 24.4724 31.5543 21.2829 33.3504 12.0561C33.4039 11.7832 33.4487 11.5188 33.49 11.2582C33.0351 11.018 32.5428 10.8106 32.0126 10.6347C31.8788 10.5904 31.7443 10.5484 31.6091 10.5087",
                        fill: "#1F264F"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                        lineNumber: 76,
                        columnNumber: 23
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                    lineNumber: 63,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV60("defs", { children: /* @__PURE__ */ jsxDEV60("clipPath", { id: "clip0_153_5574", children: /* @__PURE__ */ jsxDEV60("rect", { width: "37.298", height: "44", fill: "white" }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                    lineNumber: 83,
                    columnNumber: 25
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                    lineNumber: 82,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                    lineNumber: 81,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                lineNumber: 56,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
              lineNumber: 55,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV60("div", { className: "flex h-20 w-20 items-center justify-center rounded-xl bg-[#FBFEFE]", children: /* @__PURE__ */ jsxDEV60(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "44",
                height: "44",
                viewBox: "0 0 44 44",
                fill: "none",
                children: /* @__PURE__ */ jsxDEV60(
                  "path",
                  {
                    d: "M29.4727 25.1753C31.1263 22.2807 32.3626 19.1668 33.1448 15.9262H24.4713V12.8113H35.0955V11.0733H24.4713V5.8795H20.1355C19.3747 5.8795 19.3747 6.6275 19.3747 6.6275V11.0733H8.6295V12.8113H19.3747V15.9262H10.5032V17.6642H27.7108C27.1031 19.7601 26.2721 21.7847 25.2322 23.7032C19.6497 21.8662 13.6913 20.3775 9.94767 21.2942C7.55517 21.8827 6.01333 22.9313 5.10583 24.0313C0.949667 29.0748 3.93067 36.7345 12.7087 36.7345C17.8988 36.7345 22.9002 33.8488 26.7758 29.0932C32.5563 31.8652 44 36.6227 44 36.6227V36.9105C43.999 37.8346 43.816 38.7494 43.4614 39.6028C43.1067 40.4561 42.5874 41.2312 41.9332 41.8838C41.2789 42.5364 40.5024 43.0536 39.6482 43.4061C38.7939 43.7585 37.8786 43.9391 36.9545 43.9377H7.04917C6.12475 43.9391 5.2091 43.7584 4.35452 43.406C3.49993 43.0535 2.72316 42.5361 2.06856 41.8834C1.41396 41.2306 0.894358 40.4553 0.53943 39.6018C0.184503 38.7482 0.00120286 37.8331 0 36.9087L0 7.09133C0.000961972 6.16684 0.184097 5.2516 0.53894 4.39793C0.893782 3.54425 1.41337 2.76886 2.06802 2.11609C2.72267 1.46331 3.49954 0.945945 4.35423 0.59355C5.20892 0.241155 6.12468 0.060642 7.04917 0.0623286H36.9545C37.8787 0.0608831 38.7942 0.241587 39.6486 0.594112C40.503 0.946638 41.2795 1.46407 41.9338 2.11685C42.5881 2.76962 43.1074 3.54494 43.4619 4.39849C43.8164 5.25204 43.9993 6.16708 44 7.09133V29.8412C44 29.8412 42.5627 29.7275 36.2267 27.6118C34.4667 27.0233 32.1035 26.125 29.4727 25.1753ZM10.6957 23.8957C9.59567 24.0038 7.53317 24.4897 6.40383 25.4833C3.02133 28.424 5.04533 33.8012 11.891 33.8012C15.8693 33.8012 19.8458 31.2638 22.968 27.203C18.524 25.0415 14.762 23.496 10.6957 23.8957Z",
                    fill: "#2790C3"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                    lineNumber: 96,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                lineNumber: 89,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
              lineNumber: 88,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV60("div", { className: "h-20 w-20 rounded-xl bg-[#136872]" }, void 0, !1, {
              fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
              lineNumber: 102,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV60("div", { className: "mt-20 space-y-5", children: [
            /* @__PURE__ */ jsxDEV60("div", { className: "flex h-20 w-20 items-center justify-center rounded-xl bg-white", children: /* @__PURE__ */ jsxDEV60(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "72",
                height: "34",
                viewBox: "0 0 72 34",
                fill: "none",
                children: [
                  /* @__PURE__ */ jsxDEV60(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M63.25 17.3281C63.25 13.4161 61.3556 10.3294 57.7347 10.3294C54.0986 10.3294 51.8986 13.4161 51.8986 17.2975C51.8986 21.897 54.4959 24.2197 58.2236 24.2197C60.0417 24.2197 61.4167 23.8072 62.4556 23.2265V20.1703C61.4167 20.6899 60.225 21.0108 58.7125 21.0108C57.2306 21.0108 55.9167 20.4912 55.7486 18.6881H63.2195C63.2195 18.4894 63.25 17.6948 63.25 17.3281ZM55.7028 15.8764C55.7028 14.1496 56.757 13.4314 57.7195 13.4314C58.6514 13.4314 59.6445 14.1496 59.6445 15.8764H55.7028Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                      lineNumber: 113,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV60(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M46.0004 10.3294C44.5032 10.3294 43.5407 11.0323 43.006 11.5213L42.8074 10.5739H39.4463V28.3914L43.2657 27.5815L43.281 23.257C43.831 23.6544 44.6407 24.2197 45.9852 24.2197C48.7199 24.2197 51.2102 22.0193 51.2102 17.1753C51.1949 12.7438 48.6741 10.3294 46.0004 10.3294ZM45.0838 20.8579C44.1824 20.8579 43.6477 20.537 43.281 20.1397L43.2657 14.4705C43.6629 14.0274 44.2129 13.7218 45.0838 13.7218C46.4741 13.7218 47.4366 15.2804 47.4366 17.2822C47.4366 19.3299 46.4893 20.8579 45.0838 20.8579Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                      lineNumber: 119,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV60(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M34.1907 9.4278L38.0254 8.60263V5.50061L34.1907 6.3105V9.4278Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                      lineNumber: 125,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV60(
                    "path",
                    {
                      d: "M38.0254 10.5891H34.1907V23.9598H38.0254V10.5891Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                      lineNumber: 131,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV60(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M30.081 11.7197L29.8366 10.5889H26.5366V23.9597H30.356V14.8981C31.2574 13.7215 32.7852 13.9354 33.2588 14.1035V10.5889C32.7699 10.4056 30.9824 10.0694 30.081 11.7197Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                      lineNumber: 135,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV60(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M22.4437 7.27338L18.7159 8.06798L18.7007 20.308C18.7007 22.5696 20.3965 24.2352 22.6576 24.2352C23.9104 24.2352 24.827 24.006 25.3312 23.7309V20.6289C24.8423 20.8275 22.4284 21.5305 22.4284 19.2689V13.8442H25.3312V10.5893H22.4284L22.4437 7.27338Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                      lineNumber: 141,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV60(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M12.1152 14.4707C12.1152 13.8747 12.6041 13.6455 13.4139 13.6455C14.575 13.6455 16.0416 13.9969 17.2027 14.6235V11.0324C15.9347 10.5282 14.6819 10.3295 13.4139 10.3295C10.3125 10.3295 8.24997 11.9493 8.24997 14.654C8.24997 18.8716 14.0555 18.1992 14.0555 20.0176C14.0555 20.7205 13.4444 20.9498 12.5889 20.9498C11.3208 20.9498 9.70136 20.4302 8.41802 19.7273V23.3641C9.83886 23.9754 11.275 24.2351 12.5889 24.2351C15.7666 24.2351 17.9514 22.6612 17.9514 19.9259C17.9361 15.3722 12.1152 16.1821 12.1152 14.4707Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                      lineNumber: 147,
                      columnNumber: 21
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                lineNumber: 106,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
              lineNumber: 105,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV60("div", { className: "h-20 w-20 rounded-xl bg-[#136872]" }, void 0, !1, {
              fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
              lineNumber: 155,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV60("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxDEV60("div", { className: "flex h-20 w-20 items-center justify-center rounded-xl bg-[#FBFEFE]", children: /* @__PURE__ */ jsxDEV60(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "31",
                height: "32",
                viewBox: "0 0 31 32",
                fill: "none",
                children: [
                  /* @__PURE__ */ jsxDEV60("g", { clipPath: "url(#clip0_153_5567)", children: /* @__PURE__ */ jsxDEV60(
                    "path",
                    {
                      d: "M14.2529 4.12559C13.3393 5.20647 11.8774 6.05899 10.4156 5.9372C10.2329 4.47574 10.9486 2.92293 11.7861 1.96384C12.6997 0.852521 14.2986 0.0608944 15.5929 0C15.7452 1.52236 15.1513 3.01427 14.2529 4.12559ZM15.5777 6.22645C13.4611 6.10466 11.649 7.42912 10.644 7.42912C9.6238 7.42912 8.08584 6.28735 6.41084 6.31779C4.23334 6.34824 2.20812 7.58135 1.09653 9.5452C-1.18756 13.4729 0.502663 19.2883 2.71062 22.4853C3.79175 24.0685 5.08607 25.804 6.79153 25.7431C8.40562 25.6822 9.04516 24.6927 10.9943 24.6927C12.9586 24.6927 13.522 25.7431 15.2274 25.7127C16.9938 25.6822 18.1054 24.1294 19.1865 22.5461C20.4199 20.7498 20.9224 18.999 20.9529 18.9077C20.9224 18.8773 17.542 17.5833 17.5115 13.686C17.4811 10.4282 20.1763 8.87536 20.2981 8.78402C18.7754 6.53092 16.3999 6.28735 15.5777 6.22645ZM27.8052 1.81161V25.5452H31.4902V17.431H36.5913C41.2508 17.431 44.5247 14.2341 44.5247 9.60609C44.5247 4.97812 41.3118 1.81161 36.7131 1.81161H27.8052ZM31.4902 4.91722H35.7386C38.9363 4.91722 40.7636 6.62226 40.7636 9.62131C40.7636 12.6204 38.9363 14.3406 35.7233 14.3406H31.4902V4.91722ZM51.2552 25.7279C53.5697 25.7279 55.7167 24.5557 56.6913 22.6984H56.7674V25.5452H60.1783V13.7317C60.1783 10.3064 57.4374 8.09895 53.2195 8.09895C49.3061 8.09895 46.4129 10.3368 46.3063 13.412H49.6258C49.8999 11.9505 51.2552 10.9914 53.1129 10.9914C55.3665 10.9914 56.6304 12.0419 56.6304 13.9753V15.2845L52.0318 15.5585C47.7529 15.8173 45.4383 17.568 45.4383 20.6127C45.4383 23.6879 47.829 25.7279 51.2552 25.7279ZM52.2449 22.9115C50.2806 22.9115 49.032 21.9677 49.032 20.5214C49.032 19.0295 50.2349 18.1618 52.5342 18.0247L56.6304 17.7659V19.1056C56.6304 21.3283 54.7422 22.9115 52.2449 22.9115ZM64.7313 32C68.3249 32 70.0152 30.6299 71.4922 26.4738L77.9638 8.32731H74.2179L69.8781 22.3482H69.802L65.4622 8.32731H61.6097L67.8529 25.6061L67.5179 26.6565C66.9545 28.4377 66.0408 29.1227 64.4115 29.1227C64.1222 29.1227 63.5588 29.0923 63.3304 29.0618V31.9087C63.5436 31.9696 64.4572 32 64.7313 32Z",
                      fill: "black"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                      lineNumber: 168,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                    lineNumber: 167,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV60("defs", { children: /* @__PURE__ */ jsxDEV60("clipPath", { id: "clip0_153_5567", children: /* @__PURE__ */ jsxDEV60("rect", { width: "77.9636", height: "32", fill: "white" }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                    lineNumber: 175,
                    columnNumber: 25
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                    lineNumber: 174,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                    lineNumber: 173,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
                lineNumber: 160,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
              lineNumber: 159,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV60("div", { className: "h-20 w-20 rounded-xl bg-[#136872]" }, void 0, !1, {
              fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
              lineNumber: 180,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV60("div", { className: "h-20 w-20 rounded-xl bg-[#136872]" }, void 0, !1, {
              fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
              lineNumber: 181,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
            lineNumber: 158,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV60("div", { className: "h-80 w-full rounded-[30px] border-2 border-secondary-200 p-10 md:col-span-2 lg:col-span-2", children: [
        /* @__PURE__ */ jsxDEV60(Heading, { variant: "h5", className: "pb-6 font-bold", children: "Instan, Fee - fee payment" }, void 0, !1, {
          fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV60(Paragraph, { variant: "body1", children: "Finlab support your needs with quick delivery through various channels, including mobile & dekstop" }, void 0, !1, {
          fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV60("div", { className: "h-80 w-full rounded-[30px] border-2 border-secondary-200 p-10 md:col-span-2 lg:col-span-2", children: [
        /* @__PURE__ */ jsxDEV60(Heading, { variant: "h5", className: "pb-6 font-bold", children: "Track your activity" }, void 0, !1, {
          fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
          lineNumber: 197,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV60(Paragraph, { variant: "body1", children: "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo." }, void 0, !1, {
          fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
        lineNumber: 196,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV60("div", { className: "relative flex h-[450px] w-full flex-col overflow-hidden rounded-[30px] p-10 shadow-[0px_24px_184px_-10px_rgba(0,0,0,0.14)] md:col-span-4 md:h-80 lg:col-span-4 lg:flex-row", children: [
        /* @__PURE__ */ jsxDEV60("div", { className: "basis-1/2", children: [
          /* @__PURE__ */ jsxDEV60(Heading, { variant: "h5", className: "pb-6 font-bold", children: "We offers high levels of security" }, void 0, !1, {
            fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
            lineNumber: 208,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV60(Paragraph, { variant: "body1", children: "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo ." }, void 0, !1, {
            fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
            lineNumber: 212,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV60("div", { className: "basis-1/2", children: /* @__PURE__ */ jsxDEV60(
          "img",
          {
            src: "/images/personal-security.png",
            alt: "finlab features",
            className: "absolute bottom-0 right-0 h-60 w-full md:w-auto lg:h-full"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
            lineNumber: 219,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
          lineNumber: 218,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/solutions/personal/components/Benefit.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_client/solutions/personal/_route.tsx
import { Fragment as Fragment8, jsxDEV as jsxDEV61 } from "react/jsx-dev-runtime";
var meta9 = () => [
  { title: "Finlab for personal | Remix Template" }
];
function _route5() {
  return /* @__PURE__ */ jsxDEV61(Fragment8, { children: [
    /* @__PURE__ */ jsxDEV61(Hero5, {}, void 0, !1, {
      fileName: "app/routes/_client/solutions/personal/_route.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV61(Benefit3, {}, void 0, !1, {
      fileName: "app/routes/_client/solutions/personal/_route.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV61(Testimonial, {}, void 0, !1, {
      fileName: "app/routes/_client/solutions/personal/_route.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV61(CallToAction, {}, void 0, !1, {
      fileName: "app/routes/_client/solutions/personal/_route.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/solutions/personal/_route.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_client/solutions/startup/_route.tsx
var route_exports9 = {};
__export(route_exports9, {
  default: () => _route6,
  meta: () => meta10
});

// app/routes/_client/solutions/startup/components/Hero.tsx
import { Link as Link21 } from "@remix-run/react";
import { ArrowRight as ArrowRight7 } from "lucide-react";
import { jsxDEV as jsxDEV62 } from "react/jsx-dev-runtime";
function Hero6() {
  return /* @__PURE__ */ jsxDEV62("section", { className: "bg-[#1E2836] pt-36 lg:relative lg:overflow-hidden lg:pt-[68px]", children: [
    /* @__PURE__ */ jsxDEV62(Container, { className: "h-full basis-full", children: /* @__PURE__ */ jsxDEV62("div", { className: "max-w-xl lg:py-56", children: [
      /* @__PURE__ */ jsxDEV62("div", { className: "mx-auto mb-3 max-w-fit rounded-full bg-[#353E49] px-1.5 py-2 text-xs text-white md:mx-0 lg:mb-8", children: [
        /* @__PURE__ */ jsxDEV62("span", { className: "rounded-full bg-primary px-[5px] py-1 font-medium", children: "News!" }, void 0, !1, {
          fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV62("span", { className: "pl-2", children: "Update New features for active users \u2728" }, void 0, !1, {
          fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV62(
        Heading,
        {
          variant: "h1",
          className: "mb-6 text-center font-bold text-white md:text-left lg:mb-10 lg:leading-tight lg:tracking-[-2.16px]",
          children: "Finlab for Startup"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
          lineNumber: 23,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV62(
        Paragraph,
        {
          variant: "body1",
          className: "mb-10 text-center text-secondary-200 md:text-left",
          children: "Fast access to global cards, business account (send ACH and wires), spend management, and bill pay"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
          lineNumber: 30,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV62("div", { className: "flex justify-center gap-2 pb-5 md:justify-start md:gap-4", children: [
        /* @__PURE__ */ jsxDEV62(
          Link21,
          {
            to: "/login",
            className: cn(
              buttonVariants({ size: "lg" }),
              "flex items-center whitespace-nowrap px-7 md:px-8"
            ),
            children: [
              "Get started",
              /* @__PURE__ */ jsxDEV62(ArrowRight7, { className: "ml-2 inline-block", size: 16 }, void 0, !1, {
                fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
                lineNumber: 47,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
            lineNumber: 39,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV62(
          Link21,
          {
            to: BUY_URL,
            className: cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "whitespace-nowrap px-7 text-white md:px-8"
            ),
            target: "_blank",
            children: "Purchase now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
            lineNumber: 49,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV62("div", { className: "lg:absolute lg:right-0 lg:top-[68px]", children: /* @__PURE__ */ jsxDEV62(
      "img",
      {
        src: "/images/finlab-startup-hero.png",
        alt: "hero",
        className: "h-full w-full"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
        lineNumber: 64,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/solutions/startup/components/Hero.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_client/solutions/startup/components/Benefit.tsx
import { jsxDEV as jsxDEV63 } from "react/jsx-dev-runtime";
function Benefit4() {
  return /* @__PURE__ */ jsxDEV63("section", { className: "bg-white pb-10 pt-20 lg:pt-24", children: /* @__PURE__ */ jsxDEV63(Container, { children: [
    /* @__PURE__ */ jsxDEV63("div", { className: "mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm", children: "Benetif will you get \u2728" }, void 0, !1, {
      fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV63(
      Heading,
      {
        variant: "h2",
        className: "pb-6 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]",
        children: "Make your future CFO proud"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV63(
      Paragraph,
      {
        variant: "body1",
        className: "mx-auto max-w-3xl pb-10 text-center lg:pb-6",
        children: "finlab is adaptable to meet the financial processing requirements of global companies and support with multiple local bank channels and digital wallets."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV63("div", { className: " flex items-center justify-center pb-12", children: /* @__PURE__ */ jsxDEV63(Button, { variant: "outline", size: "lg", children: "Learn more" }, void 0, !1, {
      fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV63("div", { className: "grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-8 lg:grid-cols-6", children: [
      /* @__PURE__ */ jsxDEV63("div", { className: "col-span-1 h-80 w-full rounded-[30px] border-2 border-secondary-200 p-10 md:col-span-2 lg:col-span-2", children: [
        /* @__PURE__ */ jsxDEV63(Heading, { variant: "h5", className: "pb-6 font-bold", children: "Scale faster \u2014 we\u2019ll scale with you." }, void 0, !1, {
          fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV63(Paragraph, { variant: "body1", children: "Finlab support your needs with quick delivery through various channels, including mobile & dekstop" }, void 0, !1, {
          fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV63("div", { className: "col-span-1 h-80 w-full rounded-[30px] border-2 border-secondary-200 p-10 md:col-span-2 lg:col-span-2 lg:hidden", children: [
        /* @__PURE__ */ jsxDEV63(Heading, { variant: "h5", className: "pb-6 font-bold", children: "Send fast, secure payments." }, void 0, !1, {
          fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV63(Paragraph, { variant: "body1", children: "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo." }, void 0, !1, {
          fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV63("div", { className: "relative flex h-[600px] w-full flex-col overflow-hidden rounded-[30px] bg-primary-800 p-8 md:col-span-4 md:h-80 lg:col-span-4 lg:flex-row lg:p-10", children: [
        /* @__PURE__ */ jsxDEV63("div", { className: "md:basis-4/6", children: [
          /* @__PURE__ */ jsxDEV63(Heading, { variant: "h5", className: "pb-6 font-bold text-white", children: "Get an all-in-one financial Tasks more easy" }, void 0, !1, {
            fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
            lineNumber: 56,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV63(
            Paragraph,
            {
              variant: "body1",
              className: "max-w-sm text-secondary-200",
              children: "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo."
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
              lineNumber: 60,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV63("div", { className: "absolute -right-6 bottom-0 flex gap-5 md:-bottom-14", children: [
          /* @__PURE__ */ jsxDEV63("div", { className: "mt-20 space-y-5", children: [
            /* @__PURE__ */ jsxDEV63("div", { className: "h-20 w-20 rounded-xl bg-[#136872]" }, void 0, !1, {
              fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
              lineNumber: 71,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV63("div", { className: "h-20 w-20 rounded-xl bg-[#136872]" }, void 0, !1, {
              fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
              lineNumber: 72,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV63("div", { className: "mt-10 space-y-5", children: [
            /* @__PURE__ */ jsxDEV63("div", { className: "flex h-20 w-20 items-center justify-center rounded-xl bg-[#FBFEFE]", children: /* @__PURE__ */ jsxDEV63(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "38",
                height: "44",
                viewBox: "0 0 38 44",
                fill: "none",
                children: [
                  /* @__PURE__ */ jsxDEV63("g", { clipPath: "url(#clip0_153_5574)", children: [
                    /* @__PURE__ */ jsxDEV63(
                      "path",
                      {
                        d: "M31.6404 3.42487C29.6103 1.11094 25.9405 0.118896 21.2457 0.118896H7.62031C7.15581 0.118914 6.70655 0.284631 6.3533 0.586254C6.00005 0.887877 5.76599 1.30562 5.69319 1.76438L0.0198151 37.7463C-0.0929531 38.4559 0.456464 39.0984 1.17562 39.0984H9.58748L11.7001 25.6986L11.6345 26.1182C11.785 25.1711 12.5951 24.4725 13.5543 24.4725H17.5516C25.4043 24.4725 31.5531 21.2829 33.3492 12.0562C33.4026 11.7833 33.4487 11.5177 33.4887 11.2582C33.262 11.1381 33.262 11.1381 33.4887 11.2582C34.0235 7.84789 33.485 5.52653 31.6404 3.42487Z",
                        fill: "#27346A"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                        lineNumber: 84,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV63(
                      "path",
                      {
                        d: "M14.9188 10.0297C15.1487 9.92018 15.4003 9.86343 15.655 9.86359H26.3371C27.602 9.86359 28.7818 9.9459 29.86 10.1194C30.1617 10.1675 30.4618 10.225 30.7599 10.2916C31.1825 10.3849 31.6002 10.499 32.0115 10.6336C32.5415 10.8106 33.0351 11.0168 33.4888 11.2582C34.0235 7.84658 33.485 5.52653 31.6404 3.42487C29.6091 1.11094 25.9405 0.118896 21.2457 0.118896H7.61914C6.65974 0.118896 5.84355 0.81736 5.69319 1.76438L0.0198159 37.745C-0.0929523 38.4557 0.456465 39.0974 1.17445 39.0974H9.58749L13.9704 11.3031C14.0135 11.0299 14.1224 10.7712 14.2876 10.5494C14.4528 10.3276 14.6694 10.1492 14.9188 10.0297Z",
                        fill: "#27346A"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                        lineNumber: 88,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV63(
                      "path",
                      {
                        d: "M33.3492 12.0562C31.5531 21.2816 25.4045 24.4725 17.5516 24.4725H13.5532C12.5939 24.4725 11.7837 25.1711 11.6347 26.1182L9.00645 42.7792C8.90825 43.4002 9.38846 43.9629 10.0167 43.9629H17.1077C17.5139 43.9627 17.9067 43.8177 18.2155 43.5538C18.5244 43.29 18.7289 42.9246 18.7924 42.5234L18.8614 42.1621L20.1979 33.6919L20.284 33.2238C20.3475 32.8226 20.552 32.4572 20.8608 32.1934C21.1696 31.9295 21.5624 31.7845 21.9685 31.7843H23.0298C29.8989 31.7843 35.2775 28.9937 36.8493 20.9227C37.5053 17.5499 37.1659 14.7339 35.4303 12.7559C34.9039 12.1568 34.2502 11.662 33.4887 11.2582C33.4474 11.519 33.4027 11.7833 33.3492 12.0562Z",
                        fill: "#2790C3"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                        lineNumber: 92,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV63(
                      "path",
                      {
                        d: "M31.6089 10.5087C31.3288 10.4269 31.0461 10.3545 30.7612 10.2916C30.463 10.226 30.1628 10.169 29.8613 10.1206C28.782 9.94587 27.603 9.86341 26.3369 9.86341H15.6561C15.4012 9.86283 15.1495 9.92007 14.9199 10.0308C14.6703 10.15 14.4534 10.3283 14.2881 10.5501C14.1229 10.772 14.0142 11.0308 13.9715 11.3042L11.7012 25.6986L11.6357 26.1182C11.785 25.171 12.5951 24.4724 13.5545 24.4724H17.5529C25.4056 24.4724 31.5543 21.2829 33.3504 12.0561C33.4039 11.7832 33.4487 11.5188 33.49 11.2582C33.0351 11.018 32.5428 10.8106 32.0126 10.6347C31.8788 10.5904 31.7443 10.5484 31.6091 10.5087",
                        fill: "#1F264F"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                        lineNumber: 96,
                        columnNumber: 23
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                    lineNumber: 83,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV63("defs", { children: /* @__PURE__ */ jsxDEV63("clipPath", { id: "clip0_153_5574", children: /* @__PURE__ */ jsxDEV63("rect", { width: "37.298", height: "44", fill: "white" }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                    lineNumber: 103,
                    columnNumber: 25
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                    lineNumber: 102,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                    lineNumber: 101,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                lineNumber: 76,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
              lineNumber: 75,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV63("div", { className: "flex h-20 w-20 items-center justify-center rounded-xl bg-[#FBFEFE]", children: /* @__PURE__ */ jsxDEV63(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "44",
                height: "44",
                viewBox: "0 0 44 44",
                fill: "none",
                children: /* @__PURE__ */ jsxDEV63(
                  "path",
                  {
                    d: "M29.4727 25.1753C31.1263 22.2807 32.3626 19.1668 33.1448 15.9262H24.4713V12.8113H35.0955V11.0733H24.4713V5.8795H20.1355C19.3747 5.8795 19.3747 6.6275 19.3747 6.6275V11.0733H8.6295V12.8113H19.3747V15.9262H10.5032V17.6642H27.7108C27.1031 19.7601 26.2721 21.7847 25.2322 23.7032C19.6497 21.8662 13.6913 20.3775 9.94767 21.2942C7.55517 21.8827 6.01333 22.9313 5.10583 24.0313C0.949667 29.0748 3.93067 36.7345 12.7087 36.7345C17.8988 36.7345 22.9002 33.8488 26.7758 29.0932C32.5563 31.8652 44 36.6227 44 36.6227V36.9105C43.999 37.8346 43.816 38.7494 43.4614 39.6028C43.1067 40.4561 42.5874 41.2312 41.9332 41.8838C41.2789 42.5364 40.5024 43.0536 39.6482 43.4061C38.7939 43.7585 37.8786 43.9391 36.9545 43.9377H7.04917C6.12475 43.9391 5.2091 43.7584 4.35452 43.406C3.49993 43.0535 2.72316 42.5361 2.06856 41.8834C1.41396 41.2306 0.894358 40.4553 0.53943 39.6018C0.184503 38.7482 0.00120286 37.8331 0 36.9087L0 7.09133C0.000961972 6.16684 0.184097 5.2516 0.53894 4.39793C0.893782 3.54425 1.41337 2.76886 2.06802 2.11609C2.72267 1.46331 3.49954 0.945945 4.35423 0.59355C5.20892 0.241155 6.12468 0.060642 7.04917 0.0623286H36.9545C37.8787 0.0608831 38.7942 0.241587 39.6486 0.594112C40.503 0.946638 41.2795 1.46407 41.9338 2.11685C42.5881 2.76962 43.1074 3.54494 43.4619 4.39849C43.8164 5.25204 43.9993 6.16708 44 7.09133V29.8412C44 29.8412 42.5627 29.7275 36.2267 27.6118C34.4667 27.0233 32.1035 26.125 29.4727 25.1753ZM10.6957 23.8957C9.59567 24.0038 7.53317 24.4897 6.40383 25.4833C3.02133 28.424 5.04533 33.8012 11.891 33.8012C15.8693 33.8012 19.8458 31.2638 22.968 27.203C18.524 25.0415 14.762 23.496 10.6957 23.8957Z",
                    fill: "#2790C3"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                    lineNumber: 116,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                lineNumber: 109,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
              lineNumber: 108,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV63("div", { className: "h-20 w-20 rounded-xl bg-[#136872]" }, void 0, !1, {
              fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
              lineNumber: 122,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV63("div", { className: "mt-20 space-y-5", children: [
            /* @__PURE__ */ jsxDEV63("div", { className: "flex h-20 w-20 items-center justify-center rounded-xl bg-white", children: /* @__PURE__ */ jsxDEV63(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "72",
                height: "34",
                viewBox: "0 0 72 34",
                fill: "none",
                children: [
                  /* @__PURE__ */ jsxDEV63(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M63.25 17.3281C63.25 13.4161 61.3556 10.3294 57.7347 10.3294C54.0986 10.3294 51.8986 13.4161 51.8986 17.2975C51.8986 21.897 54.4959 24.2197 58.2236 24.2197C60.0417 24.2197 61.4167 23.8072 62.4556 23.2265V20.1703C61.4167 20.6899 60.225 21.0108 58.7125 21.0108C57.2306 21.0108 55.9167 20.4912 55.7486 18.6881H63.2195C63.2195 18.4894 63.25 17.6948 63.25 17.3281ZM55.7028 15.8764C55.7028 14.1496 56.757 13.4314 57.7195 13.4314C58.6514 13.4314 59.6445 14.1496 59.6445 15.8764H55.7028Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                      lineNumber: 133,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV63(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M46.0004 10.3294C44.5032 10.3294 43.5407 11.0323 43.006 11.5213L42.8074 10.5739H39.4463V28.3914L43.2657 27.5815L43.281 23.257C43.831 23.6544 44.6407 24.2197 45.9852 24.2197C48.7199 24.2197 51.2102 22.0193 51.2102 17.1753C51.1949 12.7438 48.6741 10.3294 46.0004 10.3294ZM45.0838 20.8579C44.1824 20.8579 43.6477 20.537 43.281 20.1397L43.2657 14.4705C43.6629 14.0274 44.2129 13.7218 45.0838 13.7218C46.4741 13.7218 47.4366 15.2804 47.4366 17.2822C47.4366 19.3299 46.4893 20.8579 45.0838 20.8579Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                      lineNumber: 139,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV63(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M34.1907 9.4278L38.0254 8.60263V5.50061L34.1907 6.3105V9.4278Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                      lineNumber: 145,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV63(
                    "path",
                    {
                      d: "M38.0254 10.5891H34.1907V23.9598H38.0254V10.5891Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                      lineNumber: 151,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV63(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M30.081 11.7197L29.8366 10.5889H26.5366V23.9597H30.356V14.8981C31.2574 13.7215 32.7852 13.9354 33.2588 14.1035V10.5889C32.7699 10.4056 30.9824 10.0694 30.081 11.7197Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                      lineNumber: 155,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV63(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M22.4437 7.27338L18.7159 8.06798L18.7007 20.308C18.7007 22.5696 20.3965 24.2352 22.6576 24.2352C23.9104 24.2352 24.827 24.006 25.3312 23.7309V20.6289C24.8423 20.8275 22.4284 21.5305 22.4284 19.2689V13.8442H25.3312V10.5893H22.4284L22.4437 7.27338Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                      lineNumber: 161,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV63(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M12.1152 14.4707C12.1152 13.8747 12.6041 13.6455 13.4139 13.6455C14.575 13.6455 16.0416 13.9969 17.2027 14.6235V11.0324C15.9347 10.5282 14.6819 10.3295 13.4139 10.3295C10.3125 10.3295 8.24997 11.9493 8.24997 14.654C8.24997 18.8716 14.0555 18.1992 14.0555 20.0176C14.0555 20.7205 13.4444 20.9498 12.5889 20.9498C11.3208 20.9498 9.70136 20.4302 8.41802 19.7273V23.3641C9.83886 23.9754 11.275 24.2351 12.5889 24.2351C15.7666 24.2351 17.9514 22.6612 17.9514 19.9259C17.9361 15.3722 12.1152 16.1821 12.1152 14.4707Z",
                      fill: "#845ADE"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                      lineNumber: 167,
                      columnNumber: 21
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                lineNumber: 126,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
              lineNumber: 125,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV63("div", { className: "h-20 w-20 rounded-xl bg-[#136872]" }, void 0, !1, {
              fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
              lineNumber: 175,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV63("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxDEV63("div", { className: "flex h-20 w-20 items-center justify-center rounded-xl bg-[#FBFEFE]", children: /* @__PURE__ */ jsxDEV63(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "31",
                height: "32",
                viewBox: "0 0 31 32",
                fill: "none",
                children: [
                  /* @__PURE__ */ jsxDEV63("g", { clipPath: "url(#clip0_153_5567)", children: /* @__PURE__ */ jsxDEV63(
                    "path",
                    {
                      d: "M14.2529 4.12559C13.3393 5.20647 11.8774 6.05899 10.4156 5.9372C10.2329 4.47574 10.9486 2.92293 11.7861 1.96384C12.6997 0.852521 14.2986 0.0608944 15.5929 0C15.7452 1.52236 15.1513 3.01427 14.2529 4.12559ZM15.5777 6.22645C13.4611 6.10466 11.649 7.42912 10.644 7.42912C9.6238 7.42912 8.08584 6.28735 6.41084 6.31779C4.23334 6.34824 2.20812 7.58135 1.09653 9.5452C-1.18756 13.4729 0.502663 19.2883 2.71062 22.4853C3.79175 24.0685 5.08607 25.804 6.79153 25.7431C8.40562 25.6822 9.04516 24.6927 10.9943 24.6927C12.9586 24.6927 13.522 25.7431 15.2274 25.7127C16.9938 25.6822 18.1054 24.1294 19.1865 22.5461C20.4199 20.7498 20.9224 18.999 20.9529 18.9077C20.9224 18.8773 17.542 17.5833 17.5115 13.686C17.4811 10.4282 20.1763 8.87536 20.2981 8.78402C18.7754 6.53092 16.3999 6.28735 15.5777 6.22645ZM27.8052 1.81161V25.5452H31.4902V17.431H36.5913C41.2508 17.431 44.5247 14.2341 44.5247 9.60609C44.5247 4.97812 41.3118 1.81161 36.7131 1.81161H27.8052ZM31.4902 4.91722H35.7386C38.9363 4.91722 40.7636 6.62226 40.7636 9.62131C40.7636 12.6204 38.9363 14.3406 35.7233 14.3406H31.4902V4.91722ZM51.2552 25.7279C53.5697 25.7279 55.7167 24.5557 56.6913 22.6984H56.7674V25.5452H60.1783V13.7317C60.1783 10.3064 57.4374 8.09895 53.2195 8.09895C49.3061 8.09895 46.4129 10.3368 46.3063 13.412H49.6258C49.8999 11.9505 51.2552 10.9914 53.1129 10.9914C55.3665 10.9914 56.6304 12.0419 56.6304 13.9753V15.2845L52.0318 15.5585C47.7529 15.8173 45.4383 17.568 45.4383 20.6127C45.4383 23.6879 47.829 25.7279 51.2552 25.7279ZM52.2449 22.9115C50.2806 22.9115 49.032 21.9677 49.032 20.5214C49.032 19.0295 50.2349 18.1618 52.5342 18.0247L56.6304 17.7659V19.1056C56.6304 21.3283 54.7422 22.9115 52.2449 22.9115ZM64.7313 32C68.3249 32 70.0152 30.6299 71.4922 26.4738L77.9638 8.32731H74.2179L69.8781 22.3482H69.802L65.4622 8.32731H61.6097L67.8529 25.6061L67.5179 26.6565C66.9545 28.4377 66.0408 29.1227 64.4115 29.1227C64.1222 29.1227 63.5588 29.0923 63.3304 29.0618V31.9087C63.5436 31.9696 64.4572 32 64.7313 32Z",
                      fill: "black"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                      lineNumber: 188,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                    lineNumber: 187,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV63("defs", { children: /* @__PURE__ */ jsxDEV63("clipPath", { id: "clip0_153_5567", children: /* @__PURE__ */ jsxDEV63("rect", { width: "77.9636", height: "32", fill: "white" }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                    lineNumber: 195,
                    columnNumber: 25
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                    lineNumber: 194,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                    lineNumber: 193,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
                lineNumber: 180,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
              lineNumber: 179,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV63("div", { className: "h-20 w-20 rounded-xl bg-[#136872]" }, void 0, !1, {
              fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
              lineNumber: 200,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV63("div", { className: "h-20 w-20 rounded-xl bg-[#136872]" }, void 0, !1, {
              fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
              lineNumber: 201,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
            lineNumber: 178,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV63("div", { className: "relative flex h-auto w-full flex-col items-center justify-between overflow-hidden rounded-[30px] p-10 shadow-[0px_24px_184px_-10px_rgba(0,0,0,0.14)] md:col-span-4 md:h-80 md:flex-row lg:col-span-4", children: [
        /* @__PURE__ */ jsxDEV63("div", { className: "basis-1/2", children: [
          /* @__PURE__ */ jsxDEV63(Heading, { variant: "h5", className: "pb-6 font-bold", children: "Track your burn rate and runway." }, void 0, !1, {
            fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
            lineNumber: 208,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV63(Paragraph, { variant: "body1", children: "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo ." }, void 0, !1, {
            fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
            lineNumber: 212,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV63(
          "img",
          {
            src: "/images/runway-stat.png",
            alt: "finlab features",
            className: "mt-10 h-full lg:mt-0"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
            lineNumber: 218,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV63("div", { className: "col-span-1 hidden h-80 w-full rounded-[30px] border-2 border-secondary-200 p-10 md:col-span-2 lg:col-span-2 lg:block", children: [
        /* @__PURE__ */ jsxDEV63(Heading, { variant: "h5", className: "pb-6 font-bold", children: "Send fast, secure payments." }, void 0, !1, {
          fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV63(Paragraph, { variant: "body1", children: "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo." }, void 0, !1, {
          fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
        lineNumber: 225,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/solutions/startup/components/Benefit.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_client/solutions/startup/_route.tsx
import { Fragment as Fragment9, jsxDEV as jsxDEV64 } from "react/jsx-dev-runtime";
var meta10 = () => [
  { title: "Finlab for Start Up | Remix Template" }
];
function _route6() {
  return /* @__PURE__ */ jsxDEV64(Fragment9, { children: [
    /* @__PURE__ */ jsxDEV64(Hero6, {}, void 0, !1, {
      fileName: "app/routes/_client/solutions/startup/_route.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV64(Benefit4, {}, void 0, !1, {
      fileName: "app/routes/_client/solutions/startup/_route.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV64(Testimonial, {}, void 0, !1, {
      fileName: "app/routes/_client/solutions/startup/_route.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV64(CallToAction, {}, void 0, !1, {
      fileName: "app/routes/_client/solutions/startup/_route.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/solutions/startup/_route.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_client/support/_route.tsx
var route_exports10 = {};
__export(route_exports10, {
  default: () => _route7,
  meta: () => meta11
});

// app/routes/_client/support/components/Hero.tsx
import { jsxDEV as jsxDEV65 } from "react/jsx-dev-runtime";
function Hero7() {
  return /* @__PURE__ */ jsxDEV65("section", { className: "bg-white pt-[68px] ", children: /* @__PURE__ */ jsxDEV65(Container, { className: "flex h-full basis-full flex-col justify-between py-5 lg:flex-row", children: [
    /* @__PURE__ */ jsxDEV65("div", { className: "py-20 lg:relative", children: [
      /* @__PURE__ */ jsxDEV65("div", { className: "mb-3 max-w-fit rounded-full bg-[#F4F4F7] px-1.5 py-2 text-xs lg:mb-8 lg:text-sm", children: [
        /* @__PURE__ */ jsxDEV65("span", { className: "rounded-full bg-primary px-[5px] py-1 font-medium text-white", children: "News!" }, void 0, !1, {
          fileName: "app/routes/_client/support/components/Hero.tsx",
          lineNumber: 9,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV65("span", { className: "pl-2 text-secondary-500", children: "Update New features for active users \u2728" }, void 0, !1, {
          fileName: "app/routes/_client/support/components/Hero.tsx",
          lineNumber: 12,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_client/support/components/Hero.tsx",
        lineNumber: 8,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV65(
        Heading,
        {
          variant: "h1",
          className: "mb-12 font-bold leading-tight tracking-[-2.16px] text-[#1B2632] lg:mb-14",
          children: [
            "Contact Us",
            " "
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_client/support/components/Hero.tsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV65("div", { className: "flex flex-col gap-8 md:flex-row lg:absolute lg:z-10", children: CONTACT_TYPES.map((contact) => /* @__PURE__ */ jsxDEV65(
        "div",
        {
          className: "basis-1/2 rounded-3xl bg-white p-5 shadow-[0px_44px_184px_-10px_rgba(0,0,0,0.11)] lg:w-96",
          children: [
            /* @__PURE__ */ jsxDEV65("div", { className: "flex items-center justify-center pb-6", children: contact.icon }, void 0, !1, {
              fileName: "app/routes/_client/support/components/Hero.tsx",
              lineNumber: 30,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV65(Paragraph, { className: "pb-6 text-center text-3xl font-bold", children: contact.title }, void 0, !1, {
              fileName: "app/routes/_client/support/components/Hero.tsx",
              lineNumber: 34,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV65(Paragraph, { variant: "body1", className: "pb-6 text-center", children: contact.description }, void 0, !1, {
              fileName: "app/routes/_client/support/components/Hero.tsx",
              lineNumber: 38,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV65(Button, { size: "lg", className: "w-full", children: contact.button }, void 0, !1, {
              fileName: "app/routes/_client/support/components/Hero.tsx",
              lineNumber: 42,
              columnNumber: 17
            }, this)
          ]
        },
        contact.title,
        !0,
        {
          fileName: "app/routes/_client/support/components/Hero.tsx",
          lineNumber: 26,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/_client/support/components/Hero.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_client/support/components/Hero.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV65("div", { children: /* @__PURE__ */ jsxDEV65(
      "img",
      {
        src: "/images/support.png",
        alt: "support",
        className: "w-full lg:h-[700px]"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/support/components/Hero.tsx",
        lineNumber: 51,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_client/support/components/Hero.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/support/components/Hero.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/support/components/Hero.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var CONTACT_TYPES = [
  {
    title: "Speak to a member of our CS team",
    description: "We will help you find the answer for your questions.",
    button: "Contact Customer Services",
    icon: /* @__PURE__ */ jsxDEV65(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "75",
        height: "74",
        viewBox: "0 0 75 74",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxDEV65(
            "path",
            {
              d: "M7.16667 37.6167H7.16676L7.16659 37.6074C7.01487 29.3843 10.0786 21.6209 15.7801 15.7978C21.4817 10.0055 29.1227 6.82083 37.3458 6.82083C54.1514 6.82083 67.8333 20.5028 67.8333 37.3083V54.8833C67.8333 55.8714 67.0089 56.6958 66.0208 56.6958C65.0328 56.6958 64.2083 55.8714 64.2083 54.8833V37.3083C64.2083 22.5101 52.1757 10.4458 37.3458 10.4458C30.0916 10.4458 23.3639 13.2422 18.3657 18.3347C13.3371 23.4576 10.6672 30.2771 10.7917 37.5593V55.1608C10.7917 56.1884 9.98942 57.0042 8.97917 57.0042C7.99115 57.0042 7.16667 56.1797 7.16667 55.1917V37.6167Z",
              fill: "#31B099",
              stroke: "#31B099"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/support/components/Hero.tsx",
              lineNumber: 75,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV65(
            "path",
            {
              d: "M18.815 38.3875H18.4142C11.9392 38.3875 6.66667 43.66 6.66667 50.135V55.9317C6.66667 62.4067 11.9392 67.6792 18.4142 67.6792H18.815C25.29 67.6792 30.5625 62.4067 30.5625 55.9317V50.135C30.5625 43.66 25.29 38.3875 18.815 38.3875Z",
              fill: "#31B099"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/support/components/Hero.tsx",
              lineNumber: 80,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV65(
            "path",
            {
              d: "M56.5858 38.3875H56.185C49.71 38.3875 44.4375 43.66 44.4375 50.135V55.9317C44.4375 62.4067 49.71 67.6792 56.185 67.6792H56.5858C63.0608 67.6792 68.3333 62.4067 68.3333 55.9317V50.135C68.3333 43.66 63.0608 38.3875 56.5858 38.3875Z",
              fill: "#31B099"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_client/support/components/Hero.tsx",
              lineNumber: 84,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_client/support/components/Hero.tsx",
        lineNumber: 68,
        columnNumber: 7
      },
      this
    )
  },
  {
    title: "Product support and help with your account",
    description: "Continuously updated, our help center is accessible 24 hours a day.",
    button: "Visit Our Help Center",
    icon: /* @__PURE__ */ jsxDEV65(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "75",
        height: "74",
        viewBox: "0 0 75 74",
        fill: "none",
        children: /* @__PURE__ */ jsxDEV65(
          "path",
          {
            d: "M40.0236 51.8941L40.0432 51.8765L40.0608 51.857C40.3645 51.5195 40.6188 51.1616 40.8008 50.691C40.9748 50.2715 41.0833 49.8076 41.0833 49.3333C41.0833 48.8566 40.9737 48.3905 40.7982 47.9694C40.6216 47.5454 40.3747 47.1585 40.0608 46.8097L40.0432 46.7901L40.0236 46.7725C39.6748 46.4586 39.2879 46.2118 38.864 46.0351C38.0009 45.6755 36.9991 45.6755 36.136 46.0351C35.7121 46.2118 35.3252 46.4586 34.9763 46.7725L34.9568 46.7901L34.9392 46.8097C34.6252 47.1585 34.3784 47.5454 34.2018 47.9693C34.0263 48.3905 33.9167 48.8566 33.9167 49.3333C33.9167 49.8076 34.0252 50.2715 34.1992 50.691C34.3812 51.1616 34.6354 51.5195 34.9392 51.857L34.9568 51.8765L34.9763 51.8941C35.3252 52.2081 35.7121 52.4549 36.136 52.6315C36.5572 52.807 37.0233 52.9167 37.5 52.9167C37.9767 52.9167 38.4428 52.807 38.864 52.6315C39.2879 52.4549 39.6748 52.2081 40.0236 51.8941ZM7.16666 37C7.16666 20.287 20.787 6.66666 37.5 6.66666C54.213 6.66666 67.8333 20.287 67.8333 37C67.8333 53.713 54.213 67.3333 37.5 67.3333C20.787 67.3333 7.16666 53.713 7.16666 37ZM37.5 21.8542C35.9597 21.8542 34.6875 23.1263 34.6875 24.6667V40.0833C34.6875 41.6236 35.9597 42.8958 37.5 42.8958C39.0403 42.8958 40.3125 41.6236 40.3125 40.0833V24.6667C40.3125 23.1263 39.0403 21.8542 37.5 21.8542Z",
            fill: "#F0AB78",
            stroke: "#F0AB78"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_client/support/components/Hero.tsx",
            lineNumber: 104,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/support/components/Hero.tsx",
        lineNumber: 97,
        columnNumber: 7
      },
      this
    )
  }
];

// app/routes/_client/support/components/SocialMedia.tsx
import { Link as Link22 } from "@remix-run/react";
import { jsxDEV as jsxDEV66 } from "react/jsx-dev-runtime";
function SocialMedia() {
  return /* @__PURE__ */ jsxDEV66("section", { className: "bg-white py-10 lg:pb-32 lg:pt-24", children: /* @__PURE__ */ jsxDEV66(Container, { children: [
    /* @__PURE__ */ jsxDEV66("div", { className: "mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 md:mx-auto lg:text-sm", children: "Our Social Modia \u{1F389}" }, void 0, !1, {
      fileName: "app/routes/_client/support/components/SocialMedia.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV66(
      Heading,
      {
        variant: "h2",
        className: "pb-6 text-left font-bold leading-tight tracking-[-1.68px] text-[#1B2632] md:text-center",
        children: "Follow our social media"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/support/components/SocialMedia.tsx",
        lineNumber: 12,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV66(Paragraph, { variant: "body1", className: "pb-16 md:mx-auto md:text-center", children: "Follow our social media accounts to get the latest updates about our software and community" }, void 0, !1, {
      fileName: "app/routes/_client/support/components/SocialMedia.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV66("div", { className: "grid grid-cols-2 justify-center gap-5 lg:grid-cols-4 lg:gap-8", children: SOCIAL_MEDIA.map((social) => /* @__PURE__ */ jsxDEV66(
      Link22,
      {
        to: "",
        preventScrollReset: !0,
        className: "group flex w-full flex-col rounded-2xl border border-secondary-300 p-5 duration-200 hover:border-transparent hover:shadow-[0px_34px_184px_-10px_rgba(0,0,0,0.06)]",
        children: [
          /* @__PURE__ */ jsxDEV66("div", { className: "flex w-full items-start justify-between rounded-full pb-8", children: [
            /* @__PURE__ */ jsxDEV66("span", { children: social.icon }, void 0, !1, {
              fileName: "app/routes/_client/support/components/SocialMedia.tsx",
              lineNumber: 33,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV66("span", { children: /* @__PURE__ */ jsxDEV66(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "27",
                height: "26",
                viewBox: "0 0 27 26",
                className: "fill-secondary-400 stroke-secondary-400 group-hover:fill-primary-500 group-hover:stroke-primary-500",
                children: [
                  /* @__PURE__ */ jsxDEV66(
                    "path",
                    {
                      d: "M16.1325 6.42419L22.7083 13L16.1325 19.5759",
                      strokeWidth: "3",
                      strokeMiterlimit: "10",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/support/components/SocialMedia.tsx",
                      lineNumber: 43,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV66(
                    "path",
                    {
                      d: "M4.29169 13H22.5242",
                      strokeWidth: "3",
                      strokeMiterlimit: "10",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_client/support/components/SocialMedia.tsx",
                      lineNumber: 50,
                      columnNumber: 21
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_client/support/components/SocialMedia.tsx",
                lineNumber: 36,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_client/support/components/SocialMedia.tsx",
              lineNumber: 35,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_client/support/components/SocialMedia.tsx",
            lineNumber: 32,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV66(Paragraph, { className: "pt-2 text-xl font-bold lg:text-2xl", children: social.title }, void 0, !1, {
            fileName: "app/routes/_client/support/components/SocialMedia.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this)
        ]
      },
      social.title,
      !0,
      {
        fileName: "app/routes/_client/support/components/SocialMedia.tsx",
        lineNumber: 26,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/_client/support/components/SocialMedia.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/support/components/SocialMedia.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_client/support/components/SocialMedia.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var SOCIAL_MEDIA = [
  {
    title: "Facebook",
    icon: /* @__PURE__ */ jsxDEV66(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "57",
        height: "56",
        viewBox: "0 0 57 56",
        className: "fill-secondary-400 stroke-secondary-400 group-hover:fill-[#4D81E7] group-hover:stroke-[#4D81E7]",
        children: /* @__PURE__ */ jsxDEV66("path", { d: "M45.2405 4.25769H11.7578C7.90775 4.25769 4.75775 7.40769 4.75775 11.2577V44.7439C4.75775 48.5939 7.90775 51.7439 11.7578 51.7439H45.244C49.094 51.7439 52.244 48.5939 52.244 44.7439V11.2577C52.2405 7.40769 49.094 4.25769 45.2405 4.25769ZM44.7907 29.6029H39.1558V49.9904H30.7243V29.6029H26.5068V22.5749H30.7243V18.3574C30.7243 12.6244 33.1042 9.21369 39.8768 9.21369H45.5065V16.2399H41.9855C39.3535 16.2399 39.1785 17.2252 39.1785 19.0574L39.1558 22.5749H45.5345L44.789 29.6029H44.7907Z" }, void 0, !1, {
          fileName: "app/routes/_client/support/components/SocialMedia.tsx",
          lineNumber: 83,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/support/components/SocialMedia.tsx",
        lineNumber: 76,
        columnNumber: 7
      },
      this
    )
  },
  {
    title: "Linkedin",
    icon: /* @__PURE__ */ jsxDEV66(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "57",
        height: "56",
        viewBox: "0 0 57 56",
        className: "fill-secondary-400 stroke-secondary-400 group-hover:fill-[#0e76a8] group-hover:stroke-[#0e76a8]",
        children: [
          /* @__PURE__ */ jsxDEV66("path", { d: "M40.1667 30.6366V39.2629H35.1663V31.2129C35.1663 29.1922 34.443 27.8132 32.6323 27.8132C31.251 27.8132 30.4273 28.7419 30.0657 29.6426C29.935 29.9646 29.9 30.4126 29.9 30.8606V39.2629H24.8973C24.8973 39.2629 24.965 25.6316 24.8973 24.2199H29.9V26.3502L29.8673 26.3992H29.9V26.3526C30.565 25.3259 31.7503 23.8652 34.408 23.8652C37.698 23.8652 40.1667 26.0166 40.1667 30.6366ZM19.6637 16.9656C17.9533 16.9656 16.8333 18.0902 16.8333 19.5649C16.8333 21.0116 17.9207 22.1666 19.5983 22.1666H19.631C21.3763 22.1666 22.4613 21.0092 22.4613 19.5649C22.4287 18.0902 21.3763 16.9656 19.6637 16.9656ZM17.1297 39.2629H22.1323V24.2199H17.1297V39.2629Z" }, void 0, !1, {
            fileName: "app/routes/_client/support/components/SocialMedia.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV66("path", { d: "M14.5 9.33329C13.2623 9.33329 12.0753 9.82496 11.2002 10.7001C10.325 11.5753 9.83333 12.7623 9.83333 14V42C9.83333 43.2376 10.325 44.4246 11.2002 45.2998C12.0753 46.175 13.2623 46.6666 14.5 46.6666H42.5C43.7377 46.6666 44.9247 46.175 45.7998 45.2998C46.675 44.4246 47.1667 43.2376 47.1667 42V14C47.1667 12.7623 46.675 11.5753 45.7998 10.7001C44.9247 9.82496 43.7377 9.33329 42.5 9.33329H14.5ZM14.5 4.66663H42.5C44.9754 4.66663 47.3493 5.64996 49.0997 7.4003C50.85 9.15064 51.8333 11.5246 51.8333 14V42C51.8333 44.4753 50.85 46.8493 49.0997 48.5996C47.3493 50.35 44.9754 51.3333 42.5 51.3333H14.5C12.0246 51.3333 9.65068 50.35 7.90034 48.5996C6.15 46.8493 5.16667 44.4753 5.16667 42V14C5.16667 11.5246 6.15 9.15064 7.90034 7.4003C9.65068 5.64996 12.0246 4.66663 14.5 4.66663V4.66663Z" }, void 0, !1, {
            fileName: "app/routes/_client/support/components/SocialMedia.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_client/support/components/SocialMedia.tsx",
        lineNumber: 91,
        columnNumber: 7
      },
      this
    )
  },
  {
    title: "Twitter",
    icon: /* @__PURE__ */ jsxDEV66(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "57",
        height: "56",
        viewBox: "0 0 57 56",
        className: "fill-secondary-400 stroke-secondary-400 group-hover:fill-[#1D9BF0] group-hover:stroke-[#1D9BF0]",
        children: [
          /* @__PURE__ */ jsxDEV66("path", { d: "M40.1667 20.8763C39.308 21.2497 38.3864 21.5063 37.418 21.6183C38.4074 21.035 39.1634 20.111 39.5227 19.012C38.58 19.5614 37.5513 19.9479 36.48 20.1553C36.0294 19.683 35.4873 19.3074 34.8868 19.0515C34.2862 18.7955 33.6398 18.6646 32.987 18.6667C30.3434 18.6667 28.2014 20.7783 28.2014 23.38C28.2014 23.7487 28.2434 24.108 28.325 24.4533C26.4288 24.3633 24.5722 23.879 22.8736 23.0313C21.175 22.1836 19.6717 20.9911 18.4597 19.53C18.034 20.2466 17.8099 21.0648 17.811 21.8983C17.811 23.5317 18.658 24.9783 19.9414 25.8206C19.1817 25.7968 18.4384 25.5946 17.7714 25.2303V25.2887C17.7786 26.3841 18.1652 27.4431 18.8655 28.2855C19.5658 29.1278 20.5364 29.7015 21.612 29.9086C20.9059 30.0954 20.167 30.1225 19.449 29.988C19.762 30.9303 20.3606 31.7519 21.1618 32.3385C21.9629 32.9252 22.9268 33.2478 23.9197 33.2617C22.2163 34.5743 20.1249 35.2835 17.9744 35.2777C17.5894 35.2777 17.209 35.2543 16.8334 35.2123C19.0278 36.6013 21.5723 37.337 24.1694 37.3333C32.9754 37.3333 37.789 30.1513 37.789 23.9213L37.7727 23.31C38.7114 22.6503 39.5225 21.8257 40.1667 20.8763Z" }, void 0, !1, {
            fileName: "app/routes/_client/support/components/SocialMedia.tsx",
            lineNumber: 113,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV66("path", { d: "M14.5 9.33329C13.2623 9.33329 12.0754 9.82496 11.2002 10.7001C10.325 11.5753 9.83335 12.7623 9.83335 14V42C9.83335 43.2376 10.325 44.4246 11.2002 45.2998C12.0754 46.175 13.2623 46.6666 14.5 46.6666H42.5C43.7377 46.6666 44.9247 46.175 45.7999 45.2998C46.675 44.4246 47.1667 43.2376 47.1667 42V14C47.1667 12.7623 46.675 11.5753 45.7999 10.7001C44.9247 9.82496 43.7377 9.33329 42.5 9.33329H14.5ZM14.5 4.66663H42.5C44.9754 4.66663 47.3493 5.64996 49.0997 7.4003C50.85 9.15064 51.8334 11.5246 51.8334 14V42C51.8334 44.4753 50.85 46.8493 49.0997 48.5996C47.3493 50.35 44.9754 51.3333 42.5 51.3333H14.5C12.0247 51.3333 9.6507 50.35 7.90036 48.5996C6.15002 46.8493 5.16669 44.4753 5.16669 42V14C5.16669 11.5246 6.15002 9.15064 7.90036 7.4003C9.6507 5.64996 12.0247 4.66663 14.5 4.66663V4.66663Z" }, void 0, !1, {
            fileName: "app/routes/_client/support/components/SocialMedia.tsx",
            lineNumber: 114,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_client/support/components/SocialMedia.tsx",
        lineNumber: 106,
        columnNumber: 7
      },
      this
    )
  },
  {
    title: "Instagram",
    icon: /* @__PURE__ */ jsxDEV66(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "57",
        height: "56",
        viewBox: "0 0 57 56",
        className: "fill-secondary-400 stroke-secondary-400 group-hover:fill-[#fbad50] group-hover:stroke-[#fbad50]",
        children: /* @__PURE__ */ jsxDEV66("path", { d: "M28.5 21C26.6435 21 24.863 21.7375 23.5502 23.0502C22.2375 24.363 21.5 26.1434 21.5 28C21.5 29.8565 22.2375 31.637 23.5502 32.9497C24.863 34.2625 26.6435 35 28.5 35C30.3565 35 32.137 34.2625 33.4497 32.9497C34.7625 31.637 35.5 29.8565 35.5 28C35.5 26.1434 34.7625 24.363 33.4497 23.0502C32.137 21.7375 30.3565 21 28.5 21ZM28.5 16.3333C31.5942 16.3333 34.5616 17.5625 36.7496 19.7504C38.9375 21.9383 40.1667 24.9058 40.1667 28C40.1667 31.0942 38.9375 34.0616 36.7496 36.2495C34.5616 38.4375 31.5942 39.6666 28.5 39.6666C25.4058 39.6666 22.4383 38.4375 20.2504 36.2495C18.0625 34.0616 16.8333 31.0942 16.8333 28C16.8333 24.9058 18.0625 21.9383 20.2504 19.7504C22.4383 17.5625 25.4058 16.3333 28.5 16.3333ZM43.6667 15.75C43.6667 16.5235 43.3594 17.2654 42.8124 17.8124C42.2654 18.3593 41.5235 18.6666 40.75 18.6666C39.9764 18.6666 39.2346 18.3593 38.6876 17.8124C38.1406 17.2654 37.8333 16.5235 37.8333 15.75C37.8333 14.9764 38.1406 14.2345 38.6876 13.6876C39.2346 13.1406 39.9764 12.8333 40.75 12.8333C41.5235 12.8333 42.2654 13.1406 42.8124 13.6876C43.3594 14.2345 43.6667 14.9764 43.6667 15.75ZM28.5 9.33329C22.7273 9.33329 21.7847 9.34963 19.099 9.46863C17.2697 9.55496 16.0423 9.79996 14.9037 10.2433C13.9508 10.5931 13.0893 11.1539 12.3837 11.8836C11.6533 12.5892 11.0918 13.4507 10.741 14.4036C10.2977 15.547 10.0527 16.772 9.96866 18.599C9.84732 21.175 9.83332 22.0756 9.83332 28C9.83332 33.7726 9.84966 34.7153 9.96866 37.401C10.055 39.228 10.3 40.4576 10.741 41.594C11.1377 42.609 11.6043 43.3393 12.379 44.114C13.1653 44.898 13.8957 45.367 14.899 45.7543C16.0517 46.2 17.279 46.4473 19.099 46.5313C21.675 46.6526 22.5757 46.6666 28.5 46.6666C34.2727 46.6666 35.2153 46.6503 37.901 46.5313C39.7257 46.445 40.9553 46.2 42.094 45.759C43.0455 45.4074 43.9064 44.8477 44.614 44.121C45.4003 43.3346 45.8693 42.6043 46.2567 41.601C46.7 40.4506 46.9473 39.221 47.0313 37.401C47.1527 34.825 47.1667 33.9243 47.1667 28C47.1667 22.2273 47.1503 21.2846 47.0313 18.599C46.945 16.7743 46.7 15.5423 46.2567 14.4036C45.905 13.4516 45.3445 12.5905 44.6163 11.8836C43.911 11.1529 43.0495 10.5913 42.0963 10.241C40.953 9.79763 39.7257 9.55263 37.901 9.46863C35.325 9.34729 34.4243 9.33329 28.5 9.33329ZM28.5 4.66663C34.8397 4.66663 35.6307 4.68996 38.118 4.80663C40.603 4.92329 42.2947 5.31296 43.7833 5.89163C45.3233 6.48429 46.6207 7.28696 47.918 8.58196C49.1045 9.74838 50.0226 11.1593 50.6083 12.7166C51.1847 14.203 51.5767 15.897 51.6933 18.382C51.803 20.8693 51.8333 21.6603 51.8333 28C51.8333 34.3396 51.81 35.1306 51.6933 37.618C51.5767 40.103 51.1847 41.7946 50.6083 43.2833C50.0242 44.8414 49.1059 46.2527 47.918 47.418C46.7512 48.604 45.3404 49.5221 43.7833 50.1083C42.297 50.6846 40.603 51.0766 38.118 51.1933C35.6307 51.303 34.8397 51.3333 28.5 51.3333C22.1603 51.3333 21.3693 51.31 18.882 51.1933C16.397 51.0766 14.7053 50.6846 13.2167 50.1083C11.6588 49.5237 10.2476 48.6055 9.08199 47.418C7.89527 46.2517 6.97716 44.8407 6.39166 43.2833C5.81299 41.797 5.42332 40.103 5.30666 37.618C5.19699 35.1306 5.16666 34.3396 5.16666 28C5.16666 21.6603 5.18999 20.8693 5.30666 18.382C5.42332 15.8946 5.81299 14.2053 6.39166 12.7166C6.97554 11.1584 7.89387 9.74704 9.08199 8.58196C10.2479 7.39483 11.659 6.47666 13.2167 5.89163C14.7053 5.31296 16.3947 4.92329 18.882 4.80663C21.3693 4.69696 22.1603 4.66663 28.5 4.66663Z" }, void 0, !1, {
          fileName: "app/routes/_client/support/components/SocialMedia.tsx",
          lineNumber: 128,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_client/support/components/SocialMedia.tsx",
        lineNumber: 121,
        columnNumber: 7
      },
      this
    )
  }
];

// app/routes/_client/support/_route.tsx
import { Fragment as Fragment10, jsxDEV as jsxDEV67 } from "react/jsx-dev-runtime";
var meta11 = () => [
  { title: "Support | Remix Template" }
];
function _route7() {
  return /* @__PURE__ */ jsxDEV67(Fragment10, { children: [
    /* @__PURE__ */ jsxDEV67(Hero7, {}, void 0, !1, {
      fileName: "app/routes/_client/support/_route.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV67(SocialMedia, {}, void 0, !1, {
      fileName: "app/routes/_client/support/_route.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV67(CallToAction, {}, void 0, !1, {
      fileName: "app/routes/_client/support/_route.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_client/support/_route.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/_layout.tsx
var layout_exports3 = {};
__export(layout_exports3, {
  default: () => _layout3,
  loader: () => loader8
});
import { json as json6, redirect as redirect5 } from "@remix-run/node";
import { Outlet as Outlet4 } from "@remix-run/react";

// app/routes/dashboard/components/Header.tsx
import { useState as useState5 } from "react";
import { X as X3 } from "lucide-react";
import { Form as Form4, NavLink as NavLink2 } from "@remix-run/react";
import * as SheetPrimitive2 from "@radix-ui/react-dialog";

// app/routes/dashboard/components/UserNav.tsx
import { Form as Form3, Link as Link23 } from "@remix-run/react";
import { jsxDEV as jsxDEV68 } from "react/jsx-dev-runtime";
function UserNav() {
  let user = useUser();
  return /* @__PURE__ */ jsxDEV68(DropdownMenu, { children: [
    /* @__PURE__ */ jsxDEV68(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV68(
      Button,
      {
        variant: "ghost",
        className: "relative h-11 w-11 rounded-full bg-[#FFFFFF]/10",
        children: /* @__PURE__ */ jsxDEV68(Avatar, { className: "h-11 w-11", children: [
          /* @__PURE__ */ jsxDEV68(AvatarImage, { src: user.avatar ?? "", alt: user.fullName }, void 0, !1, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV68(AvatarFallback, { children: "FL" }, void 0, !1, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard/components/UserNav.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/components/UserNav.tsx",
        lineNumber: 24,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/components/UserNav.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV68(
      DropdownMenuContent,
      {
        className: "w-56 space-y-2 p-5",
        align: "end",
        forceMount: !0,
        children: [
          /* @__PURE__ */ jsxDEV68(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ jsxDEV68("div", { className: "flex flex-col space-y-1", children: [
            /* @__PURE__ */ jsxDEV68(
              Paragraph,
              {
                variant: "subtitle2",
                className: "text-lg font-medium leading-none",
                children: user.fullName
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard/components/UserNav.tsx",
                lineNumber: 41,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV68("p", { className: "text-xs leading-none text-muted-foreground", children: user.email }, void 0, !1, {
              fileName: "app/routes/dashboard/components/UserNav.tsx",
              lineNumber: 47,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 40,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV68(DropdownMenuGroup, { children: /* @__PURE__ */ jsxDEV68(DropdownMenuItem, { className: "py-0", asChild: !0, children: /* @__PURE__ */ jsxDEV68(
            Link23,
            {
              to: "/dashboard/settings",
              className: "h-full w-full cursor-pointer py-1.5",
              children: "Settings"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/components/UserNav.tsx",
              lineNumber: 55,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 54,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV68(DropdownMenuGroup, { children: /* @__PURE__ */ jsxDEV68(DropdownMenuItem, { className: "py-0", asChild: !0, children: /* @__PURE__ */ jsxDEV68(
            Link23,
            {
              to: "/dashboard/help-center",
              className: "w-full cursor-pointer py-1.5",
              children: "Help Center"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/components/UserNav.tsx",
              lineNumber: 66,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV68(DropdownMenuItem, { className: "py-0", asChild: !0, children: /* @__PURE__ */ jsxDEV68(
            Form3,
            {
              action: "/logout",
              method: "POST",
              className: "w-full cursor-pointer py-1.5",
              children: /* @__PURE__ */ jsxDEV68("button", { children: "Log out" }, void 0, !1, {
                fileName: "app/routes/dashboard/components/UserNav.tsx",
                lineNumber: 81,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/components/UserNav.tsx",
              lineNumber: 76,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboard/components/UserNav.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/components/UserNav.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/components/Notification.tsx
import { Link as Link24, useFetcher as useFetcher3, useLoaderData as useLoaderData4 } from "@remix-run/react";
import { CheckCheck } from "lucide-react";

// app/components/admin/DataTablePagination.tsx
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon
} from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV69 } from "react/jsx-dev-runtime";
function DataTablePagination({
  table
}) {
  return /* @__PURE__ */ jsxDEV69("div", { className: "flex items-center justify-between px-2", children: [
    /* @__PURE__ */ jsxDEV69("div", { className: "hidden flex-1 text-sm text-muted-foreground md:flex", children: [
      table.getFilteredSelectedRowModel().rows.length,
      " of",
      " ",
      table.getFilteredRowModel().rows.length,
      " row(s) selected."
    ] }, void 0, !0, {
      fileName: "app/components/admin/DataTablePagination.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV69("div", { className: "flex items-center space-x-6 lg:space-x-8", children: [
      /* @__PURE__ */ jsxDEV69("div", { className: "hidden items-center space-x-2 md:flex", children: [
        /* @__PURE__ */ jsxDEV69("p", { className: "text-sm font-medium", children: "Rows per page" }, void 0, !1, {
          fileName: "app/components/admin/DataTablePagination.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV69(
          Select,
          {
            value: `${table.getState().pagination.pageSize}`,
            onValueChange: (value) => {
              table.setPageSize(Number(value));
            },
            children: [
              /* @__PURE__ */ jsxDEV69(SelectTrigger, { className: "h-8 w-[70px]", children: /* @__PURE__ */ jsxDEV69(SelectValue, { placeholder: table.getState().pagination.pageSize }, void 0, !1, {
                fileName: "app/components/admin/DataTablePagination.tsx",
                lineNumber: 42,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/components/admin/DataTablePagination.tsx",
                lineNumber: 41,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV69(SelectContent, { side: "top", children: [5, 10, 20, 30].map((pageSize) => /* @__PURE__ */ jsxDEV69(SelectItem, { value: `${pageSize}`, children: pageSize }, pageSize, !1, {
                fileName: "app/components/admin/DataTablePagination.tsx",
                lineNumber: 46,
                columnNumber: 17
              }, this)) }, void 0, !1, {
                fileName: "app/components/admin/DataTablePagination.tsx",
                lineNumber: 44,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/admin/DataTablePagination.tsx",
            lineNumber: 35,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/admin/DataTablePagination.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV69("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        table.getState().pagination.pageIndex + 1,
        " of",
        " ",
        table.getPageCount()
      ] }, void 0, !0, {
        fileName: "app/components/admin/DataTablePagination.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV69("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxDEV69(
          Button,
          {
            variant: "outline",
            className: "hidden h-8 w-8 p-0 lg:flex",
            onClick: () => table.setPageIndex(0),
            disabled: !table.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ jsxDEV69("span", { className: "sr-only", children: "Go to first page" }, void 0, !1, {
                fileName: "app/components/admin/DataTablePagination.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV69(DoubleArrowLeftIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/components/admin/DataTablePagination.tsx",
                lineNumber: 67,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/admin/DataTablePagination.tsx",
            lineNumber: 60,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV69(
          Button,
          {
            variant: "outline",
            className: "h-8 w-8 p-0",
            onClick: () => table.previousPage(),
            disabled: !table.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ jsxDEV69("span", { className: "sr-only", children: "Go to previous page" }, void 0, !1, {
                fileName: "app/components/admin/DataTablePagination.tsx",
                lineNumber: 75,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV69(ChevronLeftIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/components/admin/DataTablePagination.tsx",
                lineNumber: 76,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/admin/DataTablePagination.tsx",
            lineNumber: 69,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV69(
          Button,
          {
            variant: "outline",
            className: "h-8 w-8 p-0",
            onClick: () => table.nextPage(),
            disabled: !table.getCanNextPage(),
            children: [
              /* @__PURE__ */ jsxDEV69("span", { className: "sr-only", children: "Go to next page" }, void 0, !1, {
                fileName: "app/components/admin/DataTablePagination.tsx",
                lineNumber: 84,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV69(ChevronRightIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/components/admin/DataTablePagination.tsx",
                lineNumber: 85,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/admin/DataTablePagination.tsx",
            lineNumber: 78,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV69(
          Button,
          {
            variant: "outline",
            className: "hidden h-8 w-8 p-0 lg:flex",
            onClick: () => table.setPageIndex(table.getPageCount() - 1),
            disabled: !table.getCanNextPage(),
            children: [
              /* @__PURE__ */ jsxDEV69("span", { className: "sr-only", children: "Go to last page" }, void 0, !1, {
                fileName: "app/components/admin/DataTablePagination.tsx",
                lineNumber: 93,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV69(DoubleArrowRightIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/components/admin/DataTablePagination.tsx",
                lineNumber: 94,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/admin/DataTablePagination.tsx",
            lineNumber: 87,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/admin/DataTablePagination.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/DataTablePagination.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/DataTablePagination.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/components/admin/SentMoneyDialog.tsx
import { useFetcher } from "@remix-run/react";
import { Loader2 as Loader23, X } from "lucide-react";
import * as DialogPrimitive2 from "@radix-ui/react-dialog";
import Slider from "react-slick";
import { useEffect as useEffect2, useRef, useState as useState2 } from "react";
import { jsxDEV as jsxDEV70 } from "react/jsx-dev-runtime";
function SentMoneyDialog({ contacts }) {
  let sendMoneyFetcher = useFetcher(), carouselRef = useRef(null), [open, setOpen] = useState2(!1), [selectContact, setSelectContact] = useState2(0), actionData = sendMoneyFetcher.data, isSubmitting = sendMoneyFetcher.state !== "idle", sliderSettings = {
    dots: !1,
    arrows: !1,
    slidesToShow: 7,
    centerMode: !0,
    swipeToSlide: !0,
    focusOnSelect: !0,
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
  useEffect2(() => {
    actionData?.success && !isSubmitting && setOpen(!1);
  }, [actionData?.success, isSubmitting]);
  let handlePrev = () => {
    carouselRef.current?.slickPrev();
  }, handleNext = () => {
    carouselRef.current?.slickNext();
  };
  return /* @__PURE__ */ jsxDEV70(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxDEV70(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV70(Button, { size: "lg", className: "w-full", children: [
      /* @__PURE__ */ jsxDEV70("img", { src: "/icons/transfer.svg", alt: "transfer", className: "mr-2" }, void 0, !1, {
        fileName: "app/components/admin/SentMoneyDialog.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      "Transfer"
    ] }, void 0, !0, {
      fileName: "app/components/admin/SentMoneyDialog.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/SentMoneyDialog.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV70(
      DialogContent,
      {
        onPointerDownOutside: (e) => isSubmitting ? e.preventDefault() : null,
        children: /* @__PURE__ */ jsxDEV70(sendMoneyFetcher.Form, { method: "POST", action: "/resources/operation", children: /* @__PURE__ */ jsxDEV70(
          "fieldset",
          {
            className: "flex flex-col items-center justify-center gap-8 disabled:opacity-70 sm:max-w-[480px]",
            disabled: isSubmitting,
            children: [
              /* @__PURE__ */ jsxDEV70(DialogHeader, { className: "flex w-full items-center justify-center", children: [
                /* @__PURE__ */ jsxDEV70("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV70(DialogPrimitive2.Close, { asChild: !0, children: /* @__PURE__ */ jsxDEV70(
                  Button,
                  {
                    variant: "link",
                    size: "icon",
                    className: "text-secondary-500 hover:text-primary-500",
                    children: /* @__PURE__ */ jsxDEV70(X, {}, void 0, !1, {
                      fileName: "app/components/admin/SentMoneyDialog.tsx",
                      lineNumber: 101,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/SentMoneyDialog.tsx",
                    lineNumber: 96,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/admin/SentMoneyDialog.tsx",
                  lineNumber: 95,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/components/admin/SentMoneyDialog.tsx",
                  lineNumber: 94,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV70(DialogTitle, { className: "text-[32px] font-bold", children: "Send Money" }, void 0, !1, {
                  fileName: "app/components/admin/SentMoneyDialog.tsx",
                  lineNumber: 106,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV70(DialogDescription, { className: "text-center", children: "Please enter user information that you want to send money and enter amount" }, void 0, !1, {
                  fileName: "app/components/admin/SentMoneyDialog.tsx",
                  lineNumber: 110,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/admin/SentMoneyDialog.tsx",
                lineNumber: 93,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV70("div", { className: "relative w-72 md:max-h-[120px] md:w-auto md:max-w-[400px]", children: [
                /* @__PURE__ */ jsxDEV70(
                  "button",
                  {
                    type: "button",
                    onClick: handlePrev,
                    className: "absolute -left-4 top-[40%] z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-[0px_4px_24px_0px_rgba(0,0,0,0.14)]",
                    children: /* @__PURE__ */ jsxDEV70(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        children: /* @__PURE__ */ jsxDEV70(
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
                          !1,
                          {
                            fileName: "app/components/admin/SentMoneyDialog.tsx",
                            lineNumber: 129,
                            columnNumber: 19
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/admin/SentMoneyDialog.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/SentMoneyDialog.tsx",
                    lineNumber: 117,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV70(Slider, { ref: carouselRef, ...sliderSettings, children: contacts.map((contact, index) => /* @__PURE__ */ jsxDEV70(
                  "div",
                  {
                    className: cn(
                      selectContact === index ? "opacity-100" : "opacity-40",
                      "h-10 w-10 cursor-pointer p-3 text-center"
                    ),
                    children: [
                      /* @__PURE__ */ jsxDEV70(
                        "img",
                        {
                          src: contact.avatar,
                          alt: contact.fullName,
                          className: cn(
                            selectContact === index && "scale-125 transform shadow-[0px_44px_184px_-10px_rgba(0,0,0,0.11)] transition-all duration-200",
                            "mx-auto mb-3 h-16 w-16 rounded-full "
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/admin/SentMoneyDialog.tsx",
                          lineNumber: 149,
                          columnNumber: 21
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV70(
                        Paragraph,
                        {
                          variant: "body3",
                          className: "whitespace-nowrap font-semibold text-secondary-500",
                          children: contact.fullName
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/admin/SentMoneyDialog.tsx",
                          lineNumber: 158,
                          columnNumber: 21
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV70(
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
                        !0,
                        {
                          fileName: "app/components/admin/SentMoneyDialog.tsx",
                          lineNumber: 164,
                          columnNumber: 21
                        },
                        this
                      )
                    ]
                  },
                  contact.id,
                  !0,
                  {
                    fileName: "app/components/admin/SentMoneyDialog.tsx",
                    lineNumber: 142,
                    columnNumber: 19
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/components/admin/SentMoneyDialog.tsx",
                  lineNumber: 140,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV70(
                  "button",
                  {
                    type: "button",
                    onClick: handleNext,
                    className: "absolute -right-4 top-[40%] flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-[0px_4px_24px_0px_rgba(0,0,0,0.14)]",
                    children: [
                      /* @__PURE__ */ jsxDEV70(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none",
                          children: /* @__PURE__ */ jsxDEV70(
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
                            !1,
                            {
                              fileName: "app/components/admin/SentMoneyDialog.tsx",
                              lineNumber: 186,
                              columnNumber: 19
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/admin/SentMoneyDialog.tsx",
                          lineNumber: 179,
                          columnNumber: 17
                        },
                        this
                      ),
                      " "
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/admin/SentMoneyDialog.tsx",
                    lineNumber: 174,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/admin/SentMoneyDialog.tsx",
                lineNumber: 116,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV70("div", { className: "w-full space-y-6", children: /* @__PURE__ */ jsxDEV70("div", { className: "relative", children: [
                /* @__PURE__ */ jsxDEV70(
                  "img",
                  {
                    src: "/icons/dollar.svg",
                    alt: "dollar",
                    className: cn(
                      actionData?.error ? "top-[53%]" : "top-[67%]",
                      "absolute left-3 -translate-y-1/2 transform"
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/SentMoneyDialog.tsx",
                    lineNumber: 200,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV70(
                  Input,
                  {
                    name: "amount",
                    label: "Enter amount",
                    placeholder: "Amount",
                    className: "w-full pl-10",
                    error: actionData?.error ? String(actionData.error) : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/SentMoneyDialog.tsx",
                    lineNumber: 208,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/admin/SentMoneyDialog.tsx",
                lineNumber: 199,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/components/admin/SentMoneyDialog.tsx",
                lineNumber: 198,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV70(DialogFooter, { className: "w-full", children: [
                /* @__PURE__ */ jsxDEV70(
                  "input",
                  {
                    type: "hidden",
                    name: "contactId",
                    value: contacts[selectContact].id
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/SentMoneyDialog.tsx",
                    lineNumber: 219,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV70("input", { type: "hidden", name: "type", value: "Transfer" }, void 0, !1, {
                  fileName: "app/components/admin/SentMoneyDialog.tsx",
                  lineNumber: 224,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV70(Button, { type: "submit", size: "lg", className: "w-full", children: isSubmitting ? /* @__PURE__ */ jsxDEV70(Loader23, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, !1, {
                  fileName: "app/components/admin/SentMoneyDialog.tsx",
                  lineNumber: 228,
                  columnNumber: 19
                }, this) : "Confirm" }, void 0, !1, {
                  fileName: "app/components/admin/SentMoneyDialog.tsx",
                  lineNumber: 226,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/admin/SentMoneyDialog.tsx",
                lineNumber: 218,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/admin/SentMoneyDialog.tsx",
            lineNumber: 89,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/admin/SentMoneyDialog.tsx",
          lineNumber: 88,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/SentMoneyDialog.tsx",
        lineNumber: 85,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/admin/SentMoneyDialog.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

// app/components/admin/ReceiveMoneyDialog.tsx
import { useFetcher as useFetcher2 } from "@remix-run/react";
import { Loader2 as Loader24, X as X2 } from "lucide-react";
import * as DialogPrimitive3 from "@radix-ui/react-dialog";
import Slider2 from "react-slick";
import { useEffect as useEffect3, useRef as useRef2, useState as useState3 } from "react";
import { jsxDEV as jsxDEV71 } from "react/jsx-dev-runtime";
function ReceiveMoneyDialog({ contacts }) {
  let receiveMoneyFetcher = useFetcher2(), carouselRef = useRef2(null), [open, setOpen] = useState3(!1), [selectContact, setSelectContact] = useState3(0), actionData = receiveMoneyFetcher.data, isSubmitting = receiveMoneyFetcher.state !== "idle", sliderSettings = {
    dots: !1,
    arrows: !1,
    slidesToShow: 7,
    centerMode: !0,
    swipeToSlide: !0,
    focusOnSelect: !0,
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
  useEffect3(() => {
    actionData?.success && !isSubmitting && setOpen(!1);
  }, [actionData?.success, isSubmitting]);
  let handlePrev = () => {
    carouselRef.current?.slickPrev();
  }, handleNext = () => {
    carouselRef.current?.slickNext();
  };
  return /* @__PURE__ */ jsxDEV71(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxDEV71(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV71(Button, { size: "lg", className: "w-full", children: [
      /* @__PURE__ */ jsxDEV71("img", { src: "/icons/receive.svg", alt: "receive", className: "mr-2" }, void 0, !1, {
        fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      "Receive"
    ] }, void 0, !0, {
      fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV71(
      DialogContent,
      {
        onPointerDownOutside: (e) => isSubmitting ? e.preventDefault() : null,
        children: /* @__PURE__ */ jsxDEV71(
          receiveMoneyFetcher.Form,
          {
            method: "POST",
            action: "/resources/operation",
            className: "flex flex-col items-center justify-center gap-8  sm:max-w-[480px]",
            children: [
              /* @__PURE__ */ jsxDEV71(DialogHeader, { className: "flex w-full items-center justify-center", children: [
                /* @__PURE__ */ jsxDEV71("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV71(DialogPrimitive3.Close, { asChild: !0, children: /* @__PURE__ */ jsxDEV71(
                  Button,
                  {
                    variant: "link",
                    size: "icon",
                    className: "text-secondary-500 hover:text-primary-500",
                    children: /* @__PURE__ */ jsxDEV71(X2, {}, void 0, !1, {
                      fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                      lineNumber: 101,
                      columnNumber: 19
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                    lineNumber: 96,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                  lineNumber: 95,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                  lineNumber: 94,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV71(DialogTitle, { className: "text-[32px] font-bold", children: "Receive Money" }, void 0, !1, {
                  fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                  lineNumber: 106,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV71(DialogDescription, { className: "text-center", children: "You can request multiple payment from up to 20 people" }, void 0, !1, {
                  fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                  lineNumber: 110,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                lineNumber: 93,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV71("div", { className: "relative w-72 md:max-h-[120px] md:w-auto md:max-w-[400px]", children: [
                /* @__PURE__ */ jsxDEV71(
                  "button",
                  {
                    type: "button",
                    className: "absolute -left-4 top-[40%] z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-[0px_4px_24px_0px_rgba(0,0,0,0.14)]",
                    onClick: handlePrev,
                    children: /* @__PURE__ */ jsxDEV71(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        children: /* @__PURE__ */ jsxDEV71(
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
                          !1,
                          {
                            fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                            lineNumber: 128,
                            columnNumber: 17
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                        lineNumber: 121,
                        columnNumber: 15
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                    lineNumber: 116,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV71(Slider2, { ref: carouselRef, ...sliderSettings, children: contacts.map((contact, index) => /* @__PURE__ */ jsxDEV71(
                  "div",
                  {
                    className: cn(
                      selectContact === index ? "opacity-100" : "opacity-40",
                      "h-10 w-10 cursor-pointer p-3 text-center"
                    ),
                    children: [
                      /* @__PURE__ */ jsxDEV71(
                        "img",
                        {
                          src: contact.avatar,
                          alt: contact.fullName,
                          className: cn(
                            selectContact === index && "scale-125 transform shadow-[0px_44px_184px_-10px_rgba(0,0,0,0.11)] transition-all duration-200",
                            "mx-auto mb-3 h-16 w-16 rounded-full "
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                          lineNumber: 148,
                          columnNumber: 19
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV71(
                        Paragraph,
                        {
                          variant: "body3",
                          className: "whitespace-nowrap font-semibold text-secondary-500",
                          children: contact.fullName
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                          lineNumber: 157,
                          columnNumber: 19
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV71(
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
                        !0,
                        {
                          fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                          lineNumber: 163,
                          columnNumber: 19
                        },
                        this
                      )
                    ]
                  },
                  contact.id,
                  !0,
                  {
                    fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                  lineNumber: 139,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV71(
                  "button",
                  {
                    type: "button",
                    onClick: handleNext,
                    className: "absolute -right-4 top-[40%] flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-[0px_4px_24px_0px_rgba(0,0,0,0.14)]",
                    children: [
                      /* @__PURE__ */ jsxDEV71(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none",
                          children: /* @__PURE__ */ jsxDEV71(
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
                            !1,
                            {
                              fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                              lineNumber: 185,
                              columnNumber: 17
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                          lineNumber: 178,
                          columnNumber: 15
                        },
                        this
                      ),
                      " "
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                    lineNumber: 173,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                lineNumber: 115,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV71("div", { className: "relative w-full", children: [
                /* @__PURE__ */ jsxDEV71(
                  "img",
                  {
                    src: "/icons/dollar.svg",
                    alt: "dollar",
                    className: cn(
                      actionData?.error ? "top-[53%]" : "top-[67%]",
                      "absolute left-3 -translate-y-1/2 transform"
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                    lineNumber: 198,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV71(
                  Input,
                  {
                    name: "amount",
                    label: "Enter amount",
                    placeholder: "Amount",
                    className: "w-full pl-10",
                    error: actionData?.error ? String(actionData.error) : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                    lineNumber: 206,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                lineNumber: 197,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV71(DialogFooter, { className: "w-full", children: [
                /* @__PURE__ */ jsxDEV71(
                  "input",
                  {
                    type: "hidden",
                    name: "contactId",
                    value: contacts[selectContact].id
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                    lineNumber: 216,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV71("input", { type: "hidden", name: "type", value: "Receive" }, void 0, !1, {
                  fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                  lineNumber: 221,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV71(
                  Button,
                  {
                    type: "submit",
                    size: "lg",
                    className: "w-full",
                    disabled: isSubmitting,
                    children: isSubmitting ? /* @__PURE__ */ jsxDEV71(Loader24, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, !1, {
                      fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                      lineNumber: 230,
                      columnNumber: 17
                    }, this) : "Confirm"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                    lineNumber: 223,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
                lineNumber: 215,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
            lineNumber: 88,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
        lineNumber: 85,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/admin/ReceiveMoneyDialog.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

// app/components/admin/InfoTooltip.tsx
import { jsxDEV as jsxDEV72 } from "react/jsx-dev-runtime";
function InfoTooltip({
  message,
  onClick,
  icon
}) {
  return /* @__PURE__ */ jsxDEV72(TooltipProvider, { children: /* @__PURE__ */ jsxDEV72(Tooltip, { children: [
    /* @__PURE__ */ jsxDEV72(TooltipTrigger, { onClick, children: icon || /* @__PURE__ */ jsxDEV72(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "19",
        viewBox: "0 0 18 19",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxDEV72(
            "path",
            {
              d: "M9 17C13.125 17 16.5 13.625 16.5 9.5C16.5 5.375 13.125 2 9 2C4.875 2 1.5 5.375 1.5 9.5C1.5 13.625 4.875 17 9 17Z",
              stroke: "#6C7278",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/InfoTooltip.tsx",
              lineNumber: 32,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV72(
            "path",
            {
              d: "M9 6.5V10.25",
              stroke: "#6C7278",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/InfoTooltip.tsx",
              lineNumber: 39,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV72(
            "path",
            {
              d: "M8.99609 12.5H9.00283",
              stroke: "#6C7278",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/InfoTooltip.tsx",
              lineNumber: 46,
              columnNumber: 15
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/admin/InfoTooltip.tsx",
        lineNumber: 25,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/InfoTooltip.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV72(TooltipContent, { children: /* @__PURE__ */ jsxDEV72(Paragraph, { variant: "caption", children: message }, void 0, !1, {
      fileName: "app/components/admin/InfoTooltip.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/InfoTooltip.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/InfoTooltip.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/admin/InfoTooltip.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/utils/formatNumber.ts
var formatCurrency = (amount) => {
  let lookup = ["", "k", "m", "b", "t", "q", "Q"], i = 0;
  for (; amount >= 1e3 && i < lookup.length - 1; )
    amount /= 1e3, i++;
  return `$${amount.toFixed(2)}${lookup[i]}`;
};

// app/components/admin/TotalBalance.tsx
import { jsxDEV as jsxDEV73 } from "react/jsx-dev-runtime";
function TotalBalance({ contacts }) {
  let user = useUser();
  return /* @__PURE__ */ jsxDEV73(Card, { className: "h-min space-y-4", children: [
    /* @__PURE__ */ jsxDEV73(CardHeader, { children: /* @__PURE__ */ jsxDEV73(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV73("span", { children: "Total Balance" }, void 0, !1, {
        fileName: "app/components/admin/TotalBalance.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV73(InfoTooltip, { message: "All account amount" }, void 0, !1, {
        fileName: "app/components/admin/TotalBalance.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/TotalBalance.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/TotalBalance.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV73(CardContent, { children: /* @__PURE__ */ jsxDEV73(Heading, { variant: "h5", className: "font-bold", children: formatCurrency(user.balance) }, void 0, !1, {
      fileName: "app/components/admin/TotalBalance.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/TotalBalance.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV73(CardFooter, { className: "gap-4 lg:flex-col xl:flex-row", children: [
      /* @__PURE__ */ jsxDEV73(SentMoneyDialog, { contacts }, void 0, !1, {
        fileName: "app/components/admin/TotalBalance.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV73(ReceiveMoneyDialog, { contacts }, void 0, !1, {
        fileName: "app/components/admin/TotalBalance.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/TotalBalance.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/TotalBalance.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/components/admin/Currency.tsx
import { jsxDEV as jsxDEV74 } from "react/jsx-dev-runtime";
function Currency({ all = !0 }) {
  let currenciesToShow = all ? CURRENCIES : CURRENCIES.slice(0, 3);
  return /* @__PURE__ */ jsxDEV74(Card, { className: "h-min space-y-4", children: [
    /* @__PURE__ */ jsxDEV74(CardHeader, { className: "flex-row items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV74(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV74("span", { children: "Currency" }, void 0, !1, {
          fileName: "app/components/admin/Currency.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV74(InfoTooltip, { message: "Currency exchange rate" }, void 0, !1, {
          fileName: "app/components/admin/Currency.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/Currency.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV74("div", { className: "text-sm text-secondary-500", children: "1 USD" }, void 0, !1, {
        fileName: "app/components/admin/Currency.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/Currency.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV74(CardContent, { className: "space-y-6", children: currenciesToShow.map((currency) => /* @__PURE__ */ jsxDEV74(
      "div",
      {
        className: "flex items-center justify-between gap-4 text-base font-semibold text-secondary-500",
        children: [
          /* @__PURE__ */ jsxDEV74("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV74("div", { children: currency.flag }, void 0, !1, {
              fileName: "app/components/admin/Currency.tsx",
              lineNumber: 28,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV74("div", { children: currency.name }, void 0, !1, {
              fileName: "app/components/admin/Currency.tsx",
              lineNumber: 29,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/Currency.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV74("div", { children: [
            /* @__PURE__ */ jsxDEV74("span", { children: currency.amount }, void 0, !1, {
              fileName: "app/components/admin/Currency.tsx",
              lineNumber: 33,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV74("span", { className: "ml-[15px] text-secondary-300", children: currency.devise }, void 0, !1, {
              fileName: "app/components/admin/Currency.tsx",
              lineNumber: 34,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/Currency.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this)
        ]
      },
      currency.name,
      !0,
      {
        fileName: "app/components/admin/Currency.tsx",
        lineNumber: 23,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/admin/Currency.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/Currency.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var CURRENCIES = [
  {
    name: "Euro",
    amount: 0.95,
    devise: "EUR",
    flag: /* @__PURE__ */ jsxDEV74(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "34",
        height: "34",
        viewBox: "0 0 34 34",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxDEV74(
            "path",
            {
              d: "M17 32.9375C25.802 32.9375 32.9375 25.802 32.9375 17C32.9375 8.19796 25.802 1.0625 17 1.0625C8.19796 1.0625 1.0625 8.19796 1.0625 17C1.0625 25.802 8.19796 32.9375 17 32.9375Z",
              fill: "#2A5F9E"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/Currency.tsx",
              lineNumber: 58,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV74(
            "path",
            {
              d: "M17 6.26855L17.3719 7.4373H18.5938L17.6375 8.18105L18.0094 9.3498L17 8.60606L15.9906 9.3498L16.3625 8.18105L15.4062 7.4373H16.6281L17 6.26855ZM17 24.3311L17.3719 25.4998H18.5938L17.6375 26.1904L18.0094 27.4123L17 26.6686L15.9906 27.4123L16.3625 26.1904L15.4062 25.4998H16.6281L17 24.3311ZM21.4625 22.8436L21.8344 24.0123H23.1094L22.1 24.7561L22.4719 25.9248L21.4625 25.1811L20.4531 25.9248L20.8781 24.7561L19.8688 24.0123H21.0906L21.4625 22.8436ZM24.5438 19.7623L24.9156 20.9311H26.1906L25.1813 21.6748L25.5531 22.8436L24.5438 22.0998L23.5344 22.8436L23.9594 21.6748L22.95 20.9311H24.1719L24.5438 19.7623ZM26.0312 15.2998L26.4031 16.4686H27.625L26.6156 17.2123L26.9875 18.3811L26.0312 17.6373L25.0219 18.3811L25.3937 17.2123L24.3844 16.4686H25.6063L26.0312 15.2998ZM24.5438 10.7842L24.9156 12.0061H26.1906L25.1813 12.6967L25.5531 13.8654L24.5438 13.1748L23.5344 13.8654L23.9594 12.6967L22.95 12.0061H24.1719L24.5438 10.7842ZM21.4625 7.70293L21.8344 8.9248H23.1094L22.1 9.61543L22.4719 10.7842L21.4625 10.0936L20.4531 10.7842L20.8781 9.61543L19.8688 8.9248H21.0906L21.4625 7.70293ZM12.5375 22.8436L12.1656 24.0123H10.8906L11.9 24.7561L11.5281 25.9248L12.5375 25.1811L13.5469 25.9248L13.1219 24.7561L14.1313 24.0123H12.9094L12.5375 22.8436ZM9.45625 19.7623L9.08438 20.9311H7.80937L8.81875 21.6748L8.44687 22.8436L9.45625 22.0998L10.4656 22.8436L10.0406 21.6748L11.05 20.9311H9.82812L9.45625 19.7623ZM7.96875 15.2998L7.59688 16.4686H6.375L7.38437 17.2123L7.0125 18.3811L7.96875 17.6373L8.97812 18.3811L8.60625 17.2123L9.61563 16.4686H8.39375L7.96875 15.2998ZM9.45625 10.7842L9.08438 12.0061H7.80937L8.81875 12.6967L8.44687 13.8654L9.45625 13.1748L10.4656 13.8654L10.0406 12.6967L11.05 12.0061H9.82812L9.45625 10.7842ZM12.5375 7.70293L12.1656 8.9248H10.8906L11.9 9.61543L11.5281 10.7842L12.5375 10.0936L13.5469 10.7842L13.1219 9.61543L14.1313 8.9248H12.9094L12.5375 7.70293Z",
              fill: "#FFCE31"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/Currency.tsx",
              lineNumber: 62,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/admin/Currency.tsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    )
  },
  {
    name: "Chinese Yuan",
    amount: 7.06,
    devise: "CNY",
    flag: /* @__PURE__ */ jsxDEV74(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "34",
        height: "34",
        viewBox: "0 0 34 34",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxDEV74(
            "path",
            {
              d: "M17 32.9375C25.802 32.9375 32.9375 25.802 32.9375 17C32.9375 8.19796 25.802 1.0625 17 1.0625C8.19796 1.0625 1.0625 8.19796 1.0625 17C1.0625 25.802 8.19796 32.9375 17 32.9375Z",
              fill: "#ED4C5C"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/Currency.tsx",
              lineNumber: 81,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV74(
            "path",
            {
              d: "M11.6875 15.0875L15.9375 18.0625L14.3438 13.175L18.5938 10.0938H13.3344L11.6875 5.3125L10.0938 10.0938H4.78125L9.03125 13.175L7.4375 18.0625L11.6875 15.0875ZM18.7531 18.7531L17.5312 19.0187L18.7 19.4969V20.7188L19.4969 19.8156L20.6656 20.2406L19.975 19.2313L20.7188 18.275L19.4969 18.5406L18.7531 17.5312V18.7531ZM20.5594 15.1406L19.6562 15.9375L20.8781 15.8312L21.4094 17L21.6219 15.7781L22.8438 15.6719L21.7812 15.0344L22.0469 13.8125L21.1437 14.6094L20.0812 13.9719L20.5594 15.1406ZM20.8781 10.9969L21.25 12.2188L21.6219 11.05H22.8438L21.8875 10.3062L22.2594 9.08438L21.25 9.82812L20.2938 9.03125L20.6656 10.2531L19.6562 10.9438L20.8781 10.9969ZM18.7531 6.74687V7.96875L19.4969 6.95938L20.7188 7.225L19.975 6.26875L20.6656 5.25937L19.4969 5.7375L18.7 4.78125V6.00313L17.5312 6.48125L18.7531 6.74687Z",
              fill: "#FFE62E"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/Currency.tsx",
              lineNumber: 85,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/admin/Currency.tsx",
        lineNumber: 74,
        columnNumber: 7
      },
      this
    )
  },
  {
    name: "Rupiah",
    amount: 15425.15,
    devise: "IDR",
    flag: /* @__PURE__ */ jsxDEV74(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "34",
        height: "34",
        viewBox: "0 0 34 34",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxDEV74(
            "path",
            {
              d: "M16.8936 32.9375C25.7123 32.9375 32.8311 25.8188 32.8311 17H0.956055C0.956055 25.8188 8.0748 32.9375 16.8936 32.9375Z",
              fill: "#F9F9F9"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/Currency.tsx",
              lineNumber: 104,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV74(
            "path",
            {
              d: "M16.8936 1.0625C8.0748 1.0625 0.956055 8.18125 0.956055 17H32.8311C32.8311 8.18125 25.7123 1.0625 16.8936 1.0625Z",
              fill: "#ED4C5C"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/Currency.tsx",
              lineNumber: 108,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/admin/Currency.tsx",
        lineNumber: 97,
        columnNumber: 7
      },
      this
    )
  },
  {
    name: "Japan Yen",
    amount: 137.64,
    devise: "JPY",
    flag: /* @__PURE__ */ jsxDEV74(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "34",
        height: "34",
        viewBox: "0 0 34 34",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxDEV74(
            "path",
            {
              d: "M17 32.9375C25.802 32.9375 32.9375 25.802 32.9375 17C32.9375 8.19796 25.802 1.0625 17 1.0625C8.19796 1.0625 1.0625 8.19796 1.0625 17C1.0625 25.802 8.19796 32.9375 17 32.9375Z",
              fill: "#F5F5F5"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/Currency.tsx",
              lineNumber: 127,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV74(
            "path",
            {
              d: "M17 23.375C20.5208 23.375 23.375 20.5208 23.375 17C23.375 13.4792 20.5208 10.625 17 10.625C13.4792 10.625 10.625 13.4792 10.625 17C10.625 20.5208 13.4792 23.375 17 23.375Z",
              fill: "#ED4C5C"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/Currency.tsx",
              lineNumber: 131,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/admin/Currency.tsx",
        lineNumber: 120,
        columnNumber: 7
      },
      this
    )
  }
];

// app/components/admin/index.ts
var import_ExpenseCategory = __toESM(require_ExpenseCategory()), import_IncomeAnalysis = __toESM(require_IncomeAnalysis()), import_ExpenseAnalysis = __toESM(require_ExpenseAnalysis());

// app/components/admin/NotificationItem.tsx
import { jsxDEV as jsxDEV75 } from "react/jsx-dev-runtime";
function NotificationItem({
  iconSrc,
  title,
  time,
  message
}) {
  return /* @__PURE__ */ jsxDEV75("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsxDEV75("div", { children: /* @__PURE__ */ jsxDEV75("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100", children: /* @__PURE__ */ jsxDEV75("img", { src: iconSrc, alt: title }, void 0, !1, {
      fileName: "app/components/admin/NotificationItem.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/NotificationItem.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/NotificationItem.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV75("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV75(
        Paragraph,
        {
          variant: "body2",
          className: "flex items-center justify-between pb-1 font-semibold text-secondary-500",
          children: [
            /* @__PURE__ */ jsxDEV75("span", { children: title }, void 0, !1, {
              fileName: "app/components/admin/NotificationItem.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV75("span", { className: "text-sm font-normal text-secondary-300", children: time }, void 0, !1, {
              fileName: "app/components/admin/NotificationItem.tsx",
              lineNumber: 30,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/admin/NotificationItem.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV75(Paragraph, { variant: "body3", className: "text-medium text-secondary-400", children: message }, void 0, !1, {
        fileName: "app/components/admin/NotificationItem.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/NotificationItem.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/NotificationItem.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/utils/formatDate.ts
var formatDate = ({ date, type }) => {
  let dateObj = new Date(date);
  return type === "short" ? new Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
  }).format(dateObj) : new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(dateObj);
}, formatTime = (date) => {
  let dateObj = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric"
  }).format(dateObj);
}, formatToNow = (date) => {
  let dateObj = new Date(date), diff = (/* @__PURE__ */ new Date()).getTime() - dateObj.getTime(), seconds = Math.floor(diff / 1e3), minutes = Math.floor(seconds / 60), hours = Math.floor(minutes / 60), days = Math.floor(hours / 24), weeks = Math.floor(days / 7), months = Math.floor(days / 30), years = Math.floor(days / 365);
  switch (!0) {
    case seconds < 60:
      return `${seconds}s`;
    case minutes < 60:
      return `${minutes}m`;
    case hours < 24:
      return `${hours}h`;
    case days < 7:
      return `${days}d`;
    case weeks < 4:
      return `${weeks}w`;
    case months < 12:
      return `${months}mo`;
    default:
      return `${years}y`;
  }
};

// app/hooks/useResponsive.tsx
import { useEffect as useEffect4, useState as useState4 } from "react";
var useResponsive = () => {
  let [isMobile, setIsMobile] = useState4(!1), [isTablet, setIsTablet] = useState4(!1);
  return useEffect4(() => {
    let handleResize = () => {
      window.innerWidth <= 640 ? (setIsMobile(!0), setIsTablet(!1)) : window.innerWidth <= 768 ? (setIsMobile(!1), setIsTablet(!0)) : (setIsMobile(!1), setIsTablet(!1));
    };
    return window.addEventListener("resize", handleResize), handleResize(), () => window.removeEventListener("resize", handleResize);
  }, []), { isMobile, isTablet };
};

// app/routes/dashboard/components/Notification.tsx
import { jsxDEV as jsxDEV76 } from "react/jsx-dev-runtime";
function Notification() {
  let { notifications, unreadNotifications } = useLoaderData4(), notificationFetcher = useFetcher3(), isMobile = useResponsive().isMobile;
  return /* @__PURE__ */ jsxDEV76(DropdownMenu, { children: [
    /* @__PURE__ */ jsxDEV76(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV76("div", { className: "relative", children: [
      /* @__PURE__ */ jsxDEV76(
        Button,
        {
          size: "icon",
          className: "h-12 w-12 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/10",
          children: /* @__PURE__ */ jsxDEV76(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "25",
              viewBox: "0 0 24 25",
              fill: "none",
              children: [
                /* @__PURE__ */ jsxDEV76(
                  "path",
                  {
                    d: "M12.0201 3.41016C8.71009 3.41016 6.02009 6.10016 6.02009 9.41016V12.3002C6.02009 12.9102 5.76009 13.8402 5.45009 14.3602L4.30009 16.2702C3.59009 17.4502 4.08009 18.7602 5.38009 19.2002C9.69009 20.6402 14.3401 20.6402 18.6501 19.2002C19.8601 18.8002 20.3901 17.3702 19.7301 16.2702L18.5801 14.3602C18.2801 13.8402 18.0201 12.9102 18.0201 12.3002V9.41016C18.0201 6.11016 15.3201 3.41016 12.0201 3.41016Z",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/components/Notification.tsx",
                    lineNumber: 44,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV76(
                  "path",
                  {
                    d: "M13.8699 3.70043C13.5599 3.61043 13.2399 3.54043 12.9099 3.50043C11.9499 3.38043 11.0299 3.45043 10.1699 3.70043C10.4599 2.96043 11.1799 2.44043 12.0199 2.44043C12.8599 2.44043 13.5799 2.96043 13.8699 3.70043Z",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/components/Notification.tsx",
                    lineNumber: 51,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV76(
                  "path",
                  {
                    d: "M15.02 19.5596C15.02 21.2096 13.67 22.5596 12.02 22.5596C11.2 22.5596 10.44 22.2196 9.90002 21.6796C9.36002 21.1396 9.02002 20.3796 9.02002 19.5596",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/components/Notification.tsx",
                    lineNumber: 59,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard/components/Notification.tsx",
              lineNumber: 37,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard/components/Notification.tsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      ),
      unreadNotifications ? /* @__PURE__ */ jsxDEV76("div", { className: "absolute right-0 top-0 mr-2 mt-1", children: /* @__PURE__ */ jsxDEV76("div", { className: "flex h-4 w-4 items-center justify-center rounded-full bg-error-400 p-1 text-xs text-white", children: unreadNotifications }, void 0, !1, {
        fileName: "app/routes/dashboard/components/Notification.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/components/Notification.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/components/Notification.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/components/Notification.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV76(
      DropdownMenuContent,
      {
        className: "mx-auto w-[350px] pb-5 md:w-[400px] md:p-5",
        align: isMobile ? "center" : "end",
        forceMount: !0,
        children: [
          /* @__PURE__ */ jsxDEV76(DropdownMenuLabel, { className: "pb-6 font-normal", children: [
            /* @__PURE__ */ jsxDEV76("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV76(Paragraph, { className: " font-semibold", children: "Notification" }, void 0, !1, {
                fileName: "app/routes/dashboard/components/Notification.tsx",
                lineNumber: 85,
                columnNumber: 13
              }, this),
              unreadNotifications ? /* @__PURE__ */ jsxDEV76(
                InfoTooltip,
                {
                  icon: /* @__PURE__ */ jsxDEV76(CheckCheck, { className: "h-4 w-4 text-secondary-400" }, void 0, !1, {
                    fileName: "app/routes/dashboard/components/Notification.tsx",
                    lineNumber: 89,
                    columnNumber: 23
                  }, this),
                  message: "Mark all as read",
                  onClick: () => {
                    notificationFetcher.submit(
                      { read: !0 },
                      {
                        method: "PUT",
                        action: "/resources/notification"
                      }
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard/components/Notification.tsx",
                  lineNumber: 88,
                  columnNumber: 15
                },
                this
              ) : null
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard/components/Notification.tsx",
              lineNumber: 84,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV76(Paragraph, { variant: "body3", className: "text-secondary-300", children: [
              "You have ",
              unreadNotifications,
              " unread notifications"
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard/components/Notification.tsx",
              lineNumber: 103,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard/components/Notification.tsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          notifications.map((notification) => /* @__PURE__ */ jsxDEV76(NotificationItem2, { notification }, notification.id, !1, {
            fileName: "app/routes/dashboard/components/Notification.tsx",
            lineNumber: 109,
            columnNumber: 11
          }, this)),
          /* @__PURE__ */ jsxDEV76(DropdownMenuItem, { className: "mt-4 hover:bg-white", asChild: !0, children: /* @__PURE__ */ jsxDEV76(
            Link24,
            {
              to: "/dashboard/notifications",
              className: cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full cursor-pointer focus-visible:ring-0"
              ),
              children: "See more Notification"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/components/Notification.tsx",
              lineNumber: 113,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard/components/Notification.tsx",
            lineNumber: 112,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboard/components/Notification.tsx",
        lineNumber: 78,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/components/Notification.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function NotificationItem2({ notification }) {
  return /* @__PURE__ */ jsxDEV76(DropdownMenuGroup, { children: /* @__PURE__ */ jsxDEV76(DropdownMenuItem, { className: "items-start gap-4", children: [
    /* @__PURE__ */ jsxDEV76("div", { children: /* @__PURE__ */ jsxDEV76("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100", children: /* @__PURE__ */ jsxDEV76(
      "img",
      {
        src: notification.type === "Transfer" ? "/icons/money-send.svg" : "/icons/receive-money.svg",
        alt: notification.title
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/components/Notification.tsx",
        lineNumber: 145,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/components/Notification.tsx",
      lineNumber: 144,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/components/Notification.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV76("div", { children: [
      /* @__PURE__ */ jsxDEV76("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV76(
          Paragraph,
          {
            variant: "body2",
            className: " pb-1 font-semibold text-secondary-500",
            children: /* @__PURE__ */ jsxDEV76("span", { children: notification.title }, void 0, !1, {
              fileName: "app/routes/dashboard/components/Notification.tsx",
              lineNumber: 162,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/components/Notification.tsx",
            lineNumber: 158,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV76("div", { className: "flex items-center gap-1.5 text-sm font-normal text-secondary-300", children: [
          formatToNow(notification.createdAt),
          " ",
          notification.read ? null : /* @__PURE__ */ jsxDEV76("div", { className: "h-2 w-2 rounded-full bg-error-400" }, void 0, !1, {
            fileName: "app/routes/dashboard/components/Notification.tsx",
            lineNumber: 168,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard/components/Notification.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/components/Notification.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV76(Paragraph, { variant: "body3", className: "text-medium text-secondary-400", children: notification.description }, void 0, !1, {
        fileName: "app/routes/dashboard/components/Notification.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/components/Notification.tsx",
      lineNumber: 156,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/components/Notification.tsx",
    lineNumber: 142,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard/components/Notification.tsx",
    lineNumber: 141,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/components/Header.tsx
import { jsxDEV as jsxDEV77 } from "react/jsx-dev-runtime";
function Header3() {
  return /* @__PURE__ */ jsxDEV77("header", { className: "fixed z-50 w-full bg-[#1C2634] py-5 font-manrope", children: /* @__PURE__ */ jsxDEV77(Container, { className: "flex items-center justify-between xl:px-0", children: [
    /* @__PURE__ */ jsxDEV77("div", { className: "flex items-center gap-[72px]", children: [
      /* @__PURE__ */ jsxDEV77("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxDEV77(Logo, { primary: !1 }, void 0, !1, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV77(MobileNav, {}, void 0, !1, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV77(NavigationMenu, { className: "hidden lg:block", children: /* @__PURE__ */ jsxDEV77(NavigationMenuList, { children: NAV_ITEMS2.map((item) => /* @__PURE__ */ jsxDEV77(NavigationMenuItem, { children: /* @__PURE__ */ jsxDEV77(
        NavLink2,
        {
          to: item.href,
          className: ({ isActive }) => isActive ? "mx-1 whitespace-nowrap rounded-[14px] bg-[#FFFFFF]/10 px-5 py-3 text-sm font-medium text-white" : "mx-1 whitespace-nowrap  rounded-[14px] px-5 py-3  text-sm font-medium text-[#A2A6AA] duration-200 hover:bg-[#FFFFFF]/10 hover:text-white",
          children: item.name
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard/components/Header.tsx",
          lineNumber: 36,
          columnNumber: 19
        },
        this
      ) }, item.name, !1, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/components/Header.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV77("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxDEV77("div", { className: "relative hidden lg:block", children: [
        /* @__PURE__ */ jsxDEV77(
          Input,
          {
            placeholder: "Search anything here",
            className: "placeholder:text-[rgba(255, 255, 255, 0.50)] h-12 w-64 rounded-full border-none bg-[#FFFFFF]/10 py-2 pl-12 text-white"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/components/Header.tsx",
            lineNumber: 54,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV77(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "25",
            viewBox: "0 0 24 25",
            fill: "none",
            className: "absolute left-3 top-[50%] -translate-y-1/2 transform",
            children: [
              /* @__PURE__ */ jsxDEV77(
                "path",
                {
                  d: "M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z",
                  stroke: "white",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard/components/Header.tsx",
                  lineNumber: 67,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV77(
                "path",
                {
                  d: "M22 22.5L20 20.5",
                  stroke: "white",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard/components/Header.tsx",
                  lineNumber: 74,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard/components/Header.tsx",
            lineNumber: 59,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV77(Notification, {}, void 0, !1, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV77(UserNav, {}, void 0, !1, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/components/Header.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/components/Header.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard/components/Header.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
var NAV_ITEMS2 = [
  {
    name: "Dashboard",
    href: "/dashboard/overview"
  },
  {
    name: "Wallets",
    href: "/dashboard/wallets"
  },
  {
    name: "Settings",
    href: "/dashboard/settings"
  },
  {
    name: "Help Center",
    href: "/dashboard/help-center"
  }
];
function MobileNav() {
  let [open, setOpen] = useState5(!1);
  return /* @__PURE__ */ jsxDEV77(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxDEV77(SheetTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV77(
      Button,
      {
        variant: "outline",
        size: "icon",
        className: "h-12 w-12 rounded-full border-none bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/10 lg:hidden",
        children: [
          /* @__PURE__ */ jsxDEV77(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "22",
              height: "22",
              viewBox: "0 0 22 22",
              fill: "none",
              children: [
                /* @__PURE__ */ jsxDEV77(
                  "path",
                  {
                    d: "M2.75 6.41699H19.25",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/components/Header.tsx",
                    lineNumber: 129,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV77(
                  "path",
                  {
                    d: "M2.75 11H19.25",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/components/Header.tsx",
                    lineNumber: 135,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV77(
                  "path",
                  {
                    d: "M2.75 15.583H19.25",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/components/Header.tsx",
                    lineNumber: 141,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard/components/Header.tsx",
              lineNumber: 122,
              columnNumber: 11
            },
            this
          ),
          " "
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 117,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/components/Header.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV77(SheetContent, { side: "left", className: "bg-[#1C2634] pt-8", children: [
      /* @__PURE__ */ jsxDEV77("div", { className: "pb-14", children: /* @__PURE__ */ jsxDEV77(Logo, { primary: !1 }, void 0, !1, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 153,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV77(SheetPrimitive2.Close, { className: "absolute -right-14 top-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#FFFFFF]/10 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
        /* @__PURE__ */ jsxDEV77(X3, { className: "h-7 w-7 text-white" }, void 0, !1, {
          fileName: "app/routes/dashboard/components/Header.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV77("span", { className: "sr-only", children: "Close" }, void 0, !1, {
          fileName: "app/routes/dashboard/components/Header.tsx",
          lineNumber: 158,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV77("div", { className: "flex h-96 flex-col justify-between", children: [
        /* @__PURE__ */ jsxDEV77("div", { className: "flex flex-col space-y-3", children: NAV_ITEMS2.map((item) => /* @__PURE__ */ jsxDEV77(
          NavLink2,
          {
            to: item.href,
            onClick: () => setOpen(!1),
            className: ({ isActive }) => isActive ? "mx-1 whitespace-nowrap rounded-full bg-[#FFFFFF]/10 px-8 py-3.5 text-xl text-white" : "mx-1 whitespace-nowrap rounded-full px-8 py-3.5 text-xl text-[#A2A6AA] duration-200 hover:bg-[#FFFFFF]/10 hover:text-white",
            children: item.name
          },
          item.name,
          !1,
          {
            fileName: "app/routes/dashboard/components/Header.tsx",
            lineNumber: 164,
            columnNumber: 15
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/dashboard/components/Header.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV77(
          Form4,
          {
            action: "/logout",
            method: "POST",
            className: "absolute bottom-5 translate-x-1/2",
            children: /* @__PURE__ */ jsxDEV77(
              Button,
              {
                variant: "link",
                className: "w-full text-xl font-normal text-error-300",
                children: "Log Out"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard/components/Header.tsx",
                lineNumber: 184,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/components/Header.tsx",
            lineNumber: 179,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/components/Header.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/components/Header.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/_layout.tsx
import { Fragment as Fragment11, jsxDEV as jsxDEV78 } from "react/jsx-dev-runtime";
var loader8 = async ({ request }) => {
  let userId = await requireUserId(request);
  if (new URL(request.url).pathname === "/dashboard")
    return redirect5("/dashboard/overview");
  let notifications = await prisma.notification.findMany({
    orderBy: { createdAt: "desc" },
    take: 4
  }), unreadNotifications = await prisma.notification.count({
    where: { userId, read: !1 }
  });
  return json6({ notifications, unreadNotifications });
};
function _layout3() {
  return /* @__PURE__ */ jsxDEV78(Fragment11, { children: [
    /* @__PURE__ */ jsxDEV78(Header3, {}, void 0, !1, {
      fileName: "app/routes/dashboard/_layout.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV78("main", { className: "h-auto min-h-screen w-screen bg-[#F4F4F7] pb-5 font-manrope", children: /* @__PURE__ */ jsxDEV78(Outlet4, {}, void 0, !1, {
      fileName: "app/routes/dashboard/_layout.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/_layout.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/_layout.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/help-center/_route.tsx
var route_exports11 = {};
__export(route_exports11, {
  default: () => _route8,
  loader: () => loader9,
  meta: () => meta12
});
import { json as json7 } from "@remix-run/node";

// app/routes/dashboard/help-center/components/SearchCard.tsx
import { useFetcher as useFetcher4, useLoaderData as useLoaderData5 } from "@remix-run/react";

// app/routes/dashboard/help-center/components/QuestionCard.tsx
import { useState as useState6 } from "react";
import { jsxDEV as jsxDEV79 } from "react/jsx-dev-runtime";
function QuestionCard({ item }) {
  let [like, setLike] = useState6(!1);
  return /* @__PURE__ */ jsxDEV79("div", { className: "flex flex-col gap-2 rounded-[20px] border border-secondary-200 p-6", children: [
    /* @__PURE__ */ jsxDEV79("div", { className: "pb-8", children: [
      /* @__PURE__ */ jsxDEV79(Heading, { variant: "h6", className: "pb-4 text-lg font-semibold lg:text-lg", children: item.question }, void 0, !1, {
        fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV79(Paragraph, { variant: "body3", className: "text-secondary-300", children: item.answer }, void 0, !1, {
        fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV79("div", { className: "flex items-center justify-between gap-5", children: [
      /* @__PURE__ */ jsxDEV79(ScrollArea, { className: "flex whitespace-nowrap", children: [
        item.tags.map((topic, index) => /* @__PURE__ */ jsxDEV79(
          Button,
          {
            variant: "outline",
            className: "mr-1.5 inline-block",
            children: topic
          },
          index,
          !1,
          {
            fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
            lineNumber: 38,
            columnNumber: 13
          },
          this
        )),
        /* @__PURE__ */ jsxDEV79(ScrollBar, { orientation: "horizontal", className: "md:hidden" }, void 0, !1, {
          fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV79(
        "button",
        {
          onClick: () => setLike(!like),
          className: cn(
            like ? "fill-primary-500 stroke-primary-500 text-primary-500" : "fill-none stroke-secondary-500 text-secondary-500",
            "flex items-center gap-2 font-semibold"
          ),
          children: [
            /* @__PURE__ */ jsxDEV79(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                children: [
                  /* @__PURE__ */ jsxDEV79(
                    "path",
                    {
                      d: "M7.48047 18.3505L10.5805 20.7505C10.9805 21.1505 11.8805 21.3505 12.4805 21.3505H16.2805C17.4805 21.3505 18.7805 20.4505 19.0805 19.2505L21.4805 11.9505C21.9805 10.5505 21.0805 9.35046 19.5805 9.35046H15.5805C14.9805 9.35046 14.4805 8.85046 14.5805 8.15046L15.0805 4.95046C15.2805 4.05046 14.6805 3.05046 13.7805 2.75046C12.9805 2.45046 11.9805 2.85046 11.5805 3.45046L7.48047 9.55046",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
                      lineNumber: 65,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV79(
                    "path",
                    {
                      d: "M2.37988 18.3504V8.55039C2.37988 7.15039 2.97988 6.65039 4.37988 6.65039H5.37988C6.77988 6.65039 7.37988 7.15039 7.37988 8.55039V18.3504C7.37988 19.7504 6.77988 20.2504 5.37988 20.2504H4.37988C2.97988 20.2504 2.37988 19.7504 2.37988 18.3504Z",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
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
              !0,
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
        !0,
        {
          fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
          lineNumber: 50,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/help-center/components/QuestionCard.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/help-center/components/NotFundQuestion.tsx
import { jsxDEV as jsxDEV80 } from "react/jsx-dev-runtime";
function NotFundQuestion() {
  return /* @__PURE__ */ jsxDEV80("div", { className: "flex flex-col gap-2 rounded-[20px] border border-secondary-200 p-6", children: /* @__PURE__ */ jsxDEV80("div", { className: "pb-8", children: [
    /* @__PURE__ */ jsxDEV80(Heading, { variant: "h6", className: "pb-4 text-lg font-semibold lg:text-lg", children: "No results found" }, void 0, !1, {
      fileName: "app/routes/dashboard/help-center/components/NotFundQuestion.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV80(Paragraph, { variant: "body3", className: "text-secondary-300", children: "Try adjusting your search or filter to find what you are looking for." }, void 0, !1, {
      fileName: "app/routes/dashboard/help-center/components/NotFundQuestion.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/help-center/components/NotFundQuestion.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard/help-center/components/NotFundQuestion.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/help-center/components/SearchCard.tsx
import { jsxDEV as jsxDEV81 } from "react/jsx-dev-runtime";
function SearchCard() {
  let { faqs } = useLoaderData5(), searchQuestionFetcher = useFetcher4();
  console.log("searchQuestionFetcher", searchQuestionFetcher.data);
  let data = searchQuestionFetcher.data ? searchQuestionFetcher.data.faqs : faqs;
  return /* @__PURE__ */ jsxDEV81("div", { className: "flex flex-col gap-5 lg:flex-row", children: [
    /* @__PURE__ */ jsxDEV81(Card, { className: "h-min basis-full space-y-8 lg:sticky lg:top-24 lg:basis-4/12", children: [
      /* @__PURE__ */ jsxDEV81(CardHeader, { children: [
        /* @__PURE__ */ jsxDEV81(CardTitle, { children: "Hi, Can we help you ?" }, void 0, !1, {
          fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV81(CardDescription, { children: "Type your question or search by keyword here here" }, void 0, !1, {
          fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV81(CardContent, { children: /* @__PURE__ */ jsxDEV81(searchQuestionFetcher.Form, { method: "GET", className: "relative w-full", children: [
        /* @__PURE__ */ jsxDEV81(
          "img",
          {
            src: "/icons/magnifying-glass.svg",
            alt: "magnifying-glass",
            className: "absolute left-3 top-1/2 -translate-y-1/2 transform"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
            lineNumber: 43,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV81(
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
          !1,
          {
            fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
            lineNumber: 48,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV81(CardFooter, { className: "flex-col items-start ", children: [
        /* @__PURE__ */ jsxDEV81(Paragraph, { variant: "body3", children: "Popular Search" }, void 0, !1, {
          fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV81(ScrollArea, { className: "flex w-full whitespace-nowrap pt-4", children: [
          ["Transfer", "Change card", "Flow"].map((topic, index) => /* @__PURE__ */ jsxDEV81(Button, { variant: "outline", className: "mr-1.5", children: topic }, index, !1, {
            fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this)),
          /* @__PURE__ */ jsxDEV81(ScrollBar, { orientation: "horizontal", className: "md:hidden" }, void 0, !1, {
            fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV81(Card, { className: "basis-full space-y-8 lg:basis-8/12", children: [
      /* @__PURE__ */ jsxDEV81(CardHeader, { children: /* @__PURE__ */ jsxDEV81(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV81("span", { children: "Frequently Asked Questions" }, void 0, !1, {
          fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV81(InfoTooltip, { message: "All faqs" }, void 0, !1, {
          fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV81(CardContent, { className: "space-y-6 border-t border-secondary-100 py-8", children: data.length ? data.map((item) => /* @__PURE__ */ jsxDEV81(QuestionCard, { item }, item.question, !1, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 87,
        columnNumber: 32
      }, this)) : /* @__PURE__ */ jsxDEV81(NotFundQuestion, {}, void 0, !1, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/help-center/components/SearchCard.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/help-center/_route.tsx
import { Fragment as Fragment12, jsxDEV as jsxDEV82 } from "react/jsx-dev-runtime";
var meta12 = () => [
  { title: "Help center | Remix Template" }
];
async function loader9({ request }) {
  let query = new URL(request.url).searchParams.get("query");
  if (query) {
    let faqs2 = await prisma.faq.findMany({
      where: {
        question: {
          contains: query.toLowerCase(),
          mode: "insensitive"
        }
      }
    });
    return json7({ faqs: faqs2 });
  }
  let faqs = await prisma.faq.findMany({});
  return json7({ faqs });
}
function _route8() {
  return /* @__PURE__ */ jsxDEV82(Fragment12, { children: [
    /* @__PURE__ */ jsxDEV82("div", { className: "w-screen bg-[#1C2634]", children: /* @__PURE__ */ jsxDEV82(Container, { className: "pb-40 pt-28 xl:px-0", children: /* @__PURE__ */ jsxDEV82(
      Breadcrumb,
      {
        heading: "Help Center",
        links: [
          { name: "Dashboard", href: "/dashboard/overview" },
          { name: "Help Center", href: "" }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/help-center/_route.tsx",
        lineNumber: 40,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/help-center/_route.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/help-center/_route.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV82(Container, { className: "relative -top-32  h-auto w-full xl:px-0", children: /* @__PURE__ */ jsxDEV82(SearchCard, {}, void 0, !1, {
      fileName: "app/routes/dashboard/help-center/_route.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/help-center/_route.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/help-center/_route.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/notifications/_route.tsx
var route_exports12 = {};
__export(route_exports12, {
  default: () => _route9,
  loader: () => loader10,
  meta: () => meta13
});
import { useLoaderData as useLoaderData6 } from "@remix-run/react";
import { json as json8 } from "@remix-run/node";
import { Fragment as Fragment13, jsxDEV as jsxDEV83 } from "react/jsx-dev-runtime";
var meta13 = () => [
  { title: "Notifications | Remix Template" }
];
async function loader10({ request }) {
  let notifications = await prisma.notification.findMany({
    orderBy: { createdAt: "desc" }
  });
  return json8({ notifications });
}
function _route9() {
  let { notifications } = useLoaderData6();
  return /* @__PURE__ */ jsxDEV83(Fragment13, { children: [
    /* @__PURE__ */ jsxDEV83("div", { className: "w-screen bg-[#1C2634]", children: /* @__PURE__ */ jsxDEV83(Container, { className: "pb-40 pt-28 xl:px-0", children: /* @__PURE__ */ jsxDEV83(
      Breadcrumb,
      {
        heading: "Notifications \u{1F44F}\u{1F3FB}",
        links: [
          { name: "Dashboard", href: "/dashboard/overview" },
          { name: "Notifications", href: "" }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/notifications/_route.tsx",
        lineNumber: 30,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/notifications/_route.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/notifications/_route.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV83(Container, { className: "relative -top-32 h-auto w-full xl:px-0", children: /* @__PURE__ */ jsxDEV83(Card, { children: /* @__PURE__ */ jsxDEV83(CardContent, { className: "space-y-6", children: notifications.map((notification) => /* @__PURE__ */ jsxDEV83(
      NotificationItem,
      {
        iconSrc: notification.type === "Transfer" ? "/icons/money-send.svg" : "/icons/receive-money.svg",
        title: notification.title,
        time: formatToNow(notification.createdAt),
        message: notification.description
      },
      notification.id,
      !1,
      {
        fileName: "app/routes/dashboard/notifications/_route.tsx",
        lineNumber: 44,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/dashboard/notifications/_route.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/notifications/_route.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/notifications/_route.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/notifications/_route.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/overview/_layout.tsx
var layout_exports4 = {};
__export(layout_exports4, {
  default: () => _route10
});
import { NavLink as NavLink3, Outlet as Outlet5 } from "@remix-run/react";
import { Fragment as Fragment14, jsxDEV as jsxDEV84 } from "react/jsx-dev-runtime";
function _route10() {
  let user = useUser();
  return /* @__PURE__ */ jsxDEV84(Fragment14, { children: [
    /* @__PURE__ */ jsxDEV84("div", { className: "w-screen bg-[#1C2634]", children: /* @__PURE__ */ jsxDEV84(Container, { className: "pb-40 pt-28 xl:px-0", children: /* @__PURE__ */ jsxDEV84(
      Breadcrumb,
      {
        heading: `Welcome back, ${user.fullName} \u{1F44F}\u{1F3FB}`,
        links: [
          { name: "Dashboard", href: "/dashboard/overview" },
          { name: "Overview", href: "" }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/overview/_layout.tsx",
        lineNumber: 13,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/_layout.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/_layout.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV84(Container, { className: "relative -top-32 h-auto w-full xl:px-0", children: [
      /* @__PURE__ */ jsxDEV84(ScrollArea, { className: "h-full w-full", children: [
        /* @__PURE__ */ jsxDEV84("div", { className: "flex pb-6 lg:w-min", children: NAV_ITEMS3.map((item) => /* @__PURE__ */ jsxDEV84(
          NavLink3,
          {
            to: item.href,
            className: ({ isActive }) => isActive ? "whitespace-nowrap border-b-2 border-primary px-5 py-3 text-base font-medium text-white" : "whitespace-nowrap border-b border-[#A2A6AA] px-5 py-3 text-base font-medium text-[#A2A6AA] duration-200 hover:text-white",
            end: !0,
            children: item.name
          },
          item.name,
          !1,
          {
            fileName: "app/routes/dashboard/overview/_layout.tsx",
            lineNumber: 27,
            columnNumber: 15
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/_layout.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV84(ScrollBar, { orientation: "horizontal" }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/_layout.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/overview/_layout.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV84("div", { children: /* @__PURE__ */ jsxDEV84(Outlet5, {}, void 0, !1, {
        fileName: "app/routes/dashboard/overview/_layout.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/_layout.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/_layout.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/overview/_layout.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var NAV_ITEMS3 = [
  { name: "Overview", href: "/dashboard/overview" },
  { name: "Transactions", href: "/dashboard/overview/transactions" },
  { name: "Statistics", href: "/dashboard/overview/statistics" }
];

// app/routes/dashboard/overview/_index/_route.tsx
var route_exports13 = {};
__export(route_exports13, {
  default: () => _route11,
  loader: () => loader11,
  meta: () => meta14
});
import { json as json9 } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";
import { useLoaderData as useLoaderData8 } from "@remix-run/react";

// app/routes/dashboard/overview/_index/components/PockedPlans.tsx
import { Link as Link25 } from "@remix-run/react";
import { jsxDEV as jsxDEV85 } from "react/jsx-dev-runtime";
function PockedPlans() {
  return /* @__PURE__ */ jsxDEV85(Card, { className: "h-full space-y-4", children: [
    /* @__PURE__ */ jsxDEV85(CardHeader, { children: /* @__PURE__ */ jsxDEV85(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV85("span", { children: "My Pocked Plans" }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV85(InfoTooltip, { message: "Savings plans" }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV85(CardContent, { className: "grid grid-cols-2 gap-4", children: [
      PLANS.map((item) => /* @__PURE__ */ jsxDEV85(
        "div",
        {
          className: "col-span-1 space-y-5 rounded-xl border border-secondary-200 p-5",
          children: [
            /* @__PURE__ */ jsxDEV85("div", { className: "flex h-10 w-10 items-center justify-center rounded-md bg-secondary-100", children: /* @__PURE__ */ jsxDEV85("img", { src: item.img, alt: item.name }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
              lineNumber: 30,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
              lineNumber: 29,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV85("div", { children: [
              /* @__PURE__ */ jsxDEV85(
                Paragraph,
                {
                  variant: "body2",
                  className: "pb-[1px] font-semibold text-secondary-500",
                  children: item.name
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
                  lineNumber: 34,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV85(
                Paragraph,
                {
                  variant: "body3",
                  className: "font-semibold text-secondary-300",
                  children: item.amount
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
                  lineNumber: 40,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
              lineNumber: 33,
              columnNumber: 13
            }, this)
          ]
        },
        item.name,
        !0,
        {
          fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      )),
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV85(CardFooter, { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV85(
      Link25,
      {
        to: "",
        preventScrollReset: !0,
        className: "group flex items-center text-sm text-secondary-300 duration-200 hover:text-secondary-500",
        children: [
          "See more",
          /* @__PURE__ */ jsxDEV85(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "14",
              height: "15",
              viewBox: "0 0 14 15",
              fill: "none",
              className: "ml-1.5 rotate-90 stroke-secondary-300 group-hover:stroke-secondary-500",
              children: [
                /* @__PURE__ */ jsxDEV85(
                  "path",
                  {
                    d: "M8.41797 3.95898L11.9588 7.49982L8.41797 11.0407",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
                    lineNumber: 66,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV85(
                  "path",
                  {
                    d: "M2.04199 7.5H11.8595",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  },
                  void 0,
                  !1,
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
            !0,
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
      !0,
      {
        fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
        lineNumber: 52,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/_index/components/PockedPlans.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
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
import { Link as Link26, useLoaderData as useLoaderData7 } from "@remix-run/react";
import { jsxDEV as jsxDEV86 } from "react/jsx-dev-runtime";
function RecentActivity() {
  let { recentTransactions } = useLoaderData7();
  return /* @__PURE__ */ jsxDEV86(Card, { className: "h-min space-y-4", children: [
    /* @__PURE__ */ jsxDEV86(CardHeader, { className: "flex-row items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV86(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV86("span", { children: "Recent Activity" }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV86(InfoTooltip, { message: "Your Recent Activity" }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV86(
        Link26,
        {
          to: "/dashboard/overview/transactions",
          className: "group flex items-center text-sm text-secondary-300 duration-200 hover:text-secondary-500",
          children: [
            "See more",
            /* @__PURE__ */ jsxDEV86(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "14",
                height: "15",
                viewBox: "0 0 14 15",
                fill: "none",
                className: "ml-1.5 stroke-secondary-300 group-hover:stroke-secondary-500",
                children: [
                  /* @__PURE__ */ jsxDEV86(
                    "path",
                    {
                      d: "M8.41797 3.95898L11.9588 7.49982L8.41797 11.0407",
                      strokeWidth: "1.5",
                      strokeMiterlimit: "10",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                      lineNumber: 44,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV86(
                    "path",
                    {
                      d: "M2.04199 7.5H11.8595",
                      strokeWidth: "1.5",
                      strokeMiterlimit: "10",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
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
              !0,
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
        !0,
        {
          fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV86(CardContent, { className: "space-y-8", children: recentTransactions.map((transaction) => /* @__PURE__ */ jsxDEV86(
      "div",
      {
        className: "flex items-center justify-between gap-4",
        children: [
          /* @__PURE__ */ jsxDEV86("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV86(
              Avatar,
              {
                className: cn(
                  transaction.contact?.avatar ? "h-12 w-12" : "h-12 w-12 bg-[#F4F4F7] p-[14px]"
                ),
                children: [
                  /* @__PURE__ */ jsxDEV86(
                    AvatarImage,
                    {
                      src: transaction.contact?.avatar ?? transaction.company?.logo
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                      lineNumber: 76,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV86(AvatarFallback, { children: transaction.contact?.fullName ?? transaction.company?.name }, void 0, !1, {
                    fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                    lineNumber: 79,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                lineNumber: 69,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV86("div", { children: [
              /* @__PURE__ */ jsxDEV86("div", { className: "text-base font-semibold", children: transaction.contact?.fullName ?? transaction.company?.name }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                lineNumber: 84,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV86("div", { className: "mt-1 text-sm font-medium capitalize text-secondary-300", children: transaction.company?.industry ?? "Personal" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
                lineNumber: 87,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV86("div", { className: "text-end", children: [
            /* @__PURE__ */ jsxDEV86("div", { className: "text-base font-semibold", children: transaction.type === "Receive" ? `+${formatCurrency(transaction.amount)}` : `-${formatCurrency(transaction.amount)}` }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV86("div", { className: "mt-1 whitespace-nowrap text-sm font-medium capitalize text-secondary-300", children: formatDate({ date: transaction.createdAt, type: "short" }) }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
              lineNumber: 99,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this)
        ]
      },
      transaction.id,
      !0,
      {
        fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
        lineNumber: 64,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/overview/_index/components/RecentActivity.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/models/transaction.server.ts
async function getExpenseByCategory() {
  let expenseByIndustry = (await prisma.transaction.findMany({
    where: {
      type: { in: ["Subscribe", "Transfer"] }
    },
    include: { company: !0 }
  })).reduce((acc, cur) => {
    let industry = cur.company?.industry;
    return industry && (acc[industry] = acc[industry] || 0, acc[industry] += cur.amount), acc;
  }, {}), totalExpense = Object.values(expenseByIndustry).reduce(
    (acc, cur) => acc + cur,
    0
  );
  return Object.entries(expenseByIndustry).map(([industry, amount]) => ({
    industry,
    amount,
    percentage: amount / totalExpense * 100
  })).sort((a, b) => b.percentage - a.percentage).map((item, index) => ({
    ...item,
    color: ["#31B099", "#E7854D", "#C65468", "#4D81E7", "#82AD0C"][index]
  })).slice(0, 4);
}
async function getIncomeAnalysisData() {
  let today = /* @__PURE__ */ new Date(), currentMonthFirstDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  ), currentMonthLastDay = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ), previousMonthFirstDay = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    1
  ), previousMonthLastDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    0
  ), currentMonthTransactions = await prisma.transaction.findMany({
    where: {
      type: "Receive",
      createdAt: {
        gte: currentMonthFirstDay,
        lt: currentMonthLastDay
      }
    },
    include: { company: !0 }
  }), previousMonthTransactions = await prisma.transaction.findMany({
    where: {
      createdAt: {
        gte: previousMonthFirstDay,
        lt: previousMonthLastDay
      }
    },
    include: { company: !0 }
  }), currentMonthTotal = currentMonthTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  ), previousMonthTotal = previousMonthTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  ), percentageChange = null;
  return previousMonthTotal === 0 && currentMonthTotal > 0 ? percentageChange = 100 : previousMonthTotal === 0 && currentMonthTotal === 0 ? percentageChange = 0 : percentageChange = Math.round(
    (currentMonthTotal - previousMonthTotal) / previousMonthTotal * 100
  ), {
    currentMonthTotal,
    previousMonthTotal,
    percentageChange
  };
}
async function getIncomeDataForYearChart() {
  let year = (/* @__PURE__ */ new Date()).getFullYear(), transactions = await prisma.transaction.findMany({
    where: {
      type: "Receive",
      AND: [
        { createdAt: { gte: new Date(year, 0, 1) } },
        { createdAt: { lt: new Date(year + 1, 0, 1) } },
        { amount: { gt: 0 } }
      ]
    },
    orderBy: { createdAt: "asc" }
  }), incomeData = [];
  for (let i = 0; i < 12; i++) {
    let monthName = new Date(year, i).toLocaleString("default", {
      month: "short"
    }), monthTotal = transactions.filter((transaction) => transaction.createdAt.getMonth() === i).reduce((acc, transaction) => acc + transaction.amount, 0);
    incomeData.push({ month: monthName, amount: monthTotal });
  }
  return incomeData;
}
async function getExpenseAnalysisData() {
  let today = /* @__PURE__ */ new Date(), currentMonthFirstDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  ), currentMonthLastDay = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ), previousMonthFirstDay = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    1
  ), previousMonthLastDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    0
  ), currentMonthTransactions = await prisma.transaction.findMany({
    where: {
      type: { in: ["Subscribe", "Transfer"] },
      createdAt: {
        gte: currentMonthFirstDay,
        lt: currentMonthLastDay
      }
    },
    include: { company: !0 }
  }), previousMonthTransactions = await prisma.transaction.findMany({
    where: {
      createdAt: {
        gte: previousMonthFirstDay,
        lt: previousMonthLastDay
      }
    },
    include: { company: !0 }
  }), currentMonthTotal = currentMonthTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  ), previousMonthTotal = previousMonthTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  ), percentageChange = null;
  return previousMonthTotal === 0 && currentMonthTotal > 0 ? percentageChange = 100 : previousMonthTotal === 0 && currentMonthTotal === 0 ? percentageChange = 0 : percentageChange = Math.round(
    (currentMonthTotal - previousMonthTotal) / previousMonthTotal * 100
  ), {
    currentMonthTotal,
    previousMonthTotal,
    percentageChange
  };
}
async function getExpenseDataForYearChart() {
  let year = (/* @__PURE__ */ new Date()).getFullYear(), transactions = await prisma.transaction.findMany({
    where: {
      type: { in: ["Subscribe", "Transfer"] },
      AND: [
        { createdAt: { gte: new Date(year, 0, 1) } },
        { createdAt: { lt: new Date(year + 1, 0, 1) } },
        { amount: { gt: 0 } }
      ]
    },
    orderBy: { createdAt: "asc" }
  }), incomeData = [];
  for (let i = 0; i < 12; i++) {
    let monthName = new Date(year, i).toLocaleString("default", {
      month: "short"
    }), monthTotal = transactions.filter((transaction) => transaction.createdAt.getMonth() === i).reduce((acc, transaction) => acc + transaction.amount, 0);
    incomeData.push({ month: monthName, amount: monthTotal });
  }
  return incomeData;
}

// app/models/contact.server.ts
async function getContacts() {
  return prisma.contact.findMany();
}

// app/routes/dashboard/overview/_index/_route.tsx
import { jsxDEV as jsxDEV87 } from "react/jsx-dev-runtime";
var meta14 = () => [
  { title: "Dashboard | Remix Template" }
];
async function loader11() {
  let recentTransactions = await prisma.transaction.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
    include: { company: !0, contact: !0 }
  }), contacts = await getContacts(), expenseByIndustryPercentage = await getExpenseByCategory(), incomeAnalysisData = await getIncomeAnalysisData(), incomeDataForYearChart = await getIncomeDataForYearChart(), expenseAnalysisData = await getExpenseAnalysisData(), expenseDataForYearChart = await getExpenseDataForYearChart();
  return json9({
    contacts,
    incomeAnalysisData,
    recentTransactions,
    expenseAnalysisData,
    incomeDataForYearChart,
    expenseDataForYearChart,
    expenseByIndustryPercentage
  });
}
function _route11() {
  let {
    contacts,
    incomeAnalysisData,
    expenseAnalysisData,
    incomeDataForYearChart,
    expenseDataForYearChart,
    expenseByIndustryPercentage
  } = useLoaderData8();
  return /* @__PURE__ */ jsxDEV87("div", { className: "flex h-auto w-full flex-col gap-5 lg:flex-row", children: [
    /* @__PURE__ */ jsxDEV87("div", { className: "flex h-full w-full flex-col gap-5 lg:w-[29%]", children: [
      /* @__PURE__ */ jsxDEV87(TotalBalance, { contacts }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/_index/_route.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV87(PockedPlans, {}, void 0, !1, {
        fileName: "app/routes/dashboard/overview/_index/_route.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/_index/_route.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV87("div", { className: "flex flex-col gap-5 lg:w-[42%]", children: [
      /* @__PURE__ */ jsxDEV87("div", { children: /* @__PURE__ */ jsxDEV87(
        ClientOnly,
        {
          fallback: /* @__PURE__ */ jsxDEV87("div", { className: "flex h-72 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ jsxDEV87("p", { children: "Loading" }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/_index/_route.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/_index/_route.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          children: () => /* @__PURE__ */ jsxDEV87(
            import_ExpenseCategory.default,
            {
              expenseByIndustryPercentage
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/overview/_index/_route.tsx",
              lineNumber: 81,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard/overview/_index/_route.tsx",
          lineNumber: 73,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/_index/_route.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV87("div", { className: "grid grid-cols-1 gap-5 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxDEV87("div", { className: "col-span-1", children: /* @__PURE__ */ jsxDEV87(
          ClientOnly,
          {
            fallback: /* @__PURE__ */ jsxDEV87("div", { className: "flex h-80 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ jsxDEV87("p", { children: "Loading" }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/_index/_route.tsx",
              lineNumber: 93,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/_index/_route.tsx",
              lineNumber: 92,
              columnNumber: 17
            }, this),
            children: () => /* @__PURE__ */ jsxDEV87(
              import_IncomeAnalysis.default,
              {
                chartHeight: 155,
                incomeAnalysisData,
                incomeDataForYearChart
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard/overview/_index/_route.tsx",
                lineNumber: 98,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/overview/_index/_route.tsx",
            lineNumber: 90,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/_index/_route.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV87("div", { className: "col-span-1", children: /* @__PURE__ */ jsxDEV87(
          ClientOnly,
          {
            fallback: /* @__PURE__ */ jsxDEV87("div", { className: "flex h-80 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ jsxDEV87("p", { children: "Loading" }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/_index/_route.tsx",
              lineNumber: 111,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/_index/_route.tsx",
              lineNumber: 110,
              columnNumber: 17
            }, this),
            children: () => /* @__PURE__ */ jsxDEV87(
              import_ExpenseAnalysis.default,
              {
                chartHeight: 155,
                expenseAnalysisData,
                expenseDataForYearChart
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard/overview/_index/_route.tsx",
                lineNumber: 116,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/overview/_index/_route.tsx",
            lineNumber: 108,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/_index/_route.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/overview/_index/_route.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/_index/_route.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV87("div", { className: "flex h-full w-full flex-col gap-5 lg:w-[29%]", children: [
      /* @__PURE__ */ jsxDEV87(RecentActivity, {}, void 0, !1, {
        fileName: "app/routes/dashboard/overview/_index/_route.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV87(Currency, { all: !1 }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/_index/_route.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/_index/_route.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/overview/_index/_route.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/overview/statistics/_route.tsx
var route_exports14 = {};
__export(route_exports14, {
  default: () => _route12,
  loader: () => loader12,
  meta: () => meta15
});
import { json as json10 } from "@remix-run/node";
import { useLoaderData as useLoaderData10 } from "@remix-run/react";
import { ClientOnly as ClientOnly2 } from "remix-utils/client-only";

// app/routes/dashboard/overview/statistics/components/LastTransaction.tsx
import { Link as Link27, useLoaderData as useLoaderData9 } from "@remix-run/react";

// app/utils/getStatusColor.ts
function getStatusColor(status) {
  return {
    Canceled: "destructive",
    Success: "default",
    Pending: "warning"
  }[status] || "secondary";
}

// app/routes/dashboard/overview/statistics/components/LastTransaction.tsx
import { jsxDEV as jsxDEV88 } from "react/jsx-dev-runtime";
function LastTransaction() {
  let { recentTransactions } = useLoaderData9();
  return /* @__PURE__ */ jsxDEV88(Card, { className: "h-min space-y-4", children: [
    /* @__PURE__ */ jsxDEV88(CardHeader, { className: "flex-row items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV88(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV88("span", { children: "Last transaction" }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV88(InfoTooltip, { message: "Your last Activity" }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV88(
        Link27,
        {
          to: "/dashboard/overview/transactions",
          className: "group flex items-center text-sm text-secondary-300 duration-200 hover:text-secondary-500",
          children: [
            "See more",
            /* @__PURE__ */ jsxDEV88(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "14",
                height: "15",
                viewBox: "0 0 14 15",
                fill: "none",
                className: "ml-1.5 stroke-secondary-300 group-hover:stroke-secondary-500",
                children: [
                  /* @__PURE__ */ jsxDEV88(
                    "path",
                    {
                      d: "M8.41797 3.95898L11.9588 7.49982L8.41797 11.0407",
                      strokeWidth: "1.5",
                      strokeMiterlimit: "10",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                      lineNumber: 49,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV88(
                    "path",
                    {
                      d: "M2.04199 7.5H11.8595",
                      strokeWidth: "1.5",
                      strokeMiterlimit: "10",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
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
              !0,
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
        !0,
        {
          fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
          lineNumber: 36,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV88(CardContent, { children: /* @__PURE__ */ jsxDEV88(ScrollArea, { className: "lg:h-[198px]", children: [
      recentTransactions.map((transaction) => /* @__PURE__ */ jsxDEV88(
        "div",
        {
          className: "flex items-center justify-between gap-4 py-4",
          children: [
            /* @__PURE__ */ jsxDEV88("div", { className: "flex flex-auto items-center  gap-4", children: [
              /* @__PURE__ */ jsxDEV88(
                Avatar,
                {
                  className: cn(
                    transaction.contact?.avatar ? "h-12 w-12" : "h-12 w-12 bg-[#F4F4F7] p-[14px]"
                  ),
                  children: [
                    /* @__PURE__ */ jsxDEV88(
                      AvatarImage,
                      {
                        src: transaction.contact?.avatar ?? transaction.company?.logo
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                        lineNumber: 82,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV88(AvatarFallback, { children: transaction.contact?.fullName ?? transaction.company?.name }, void 0, !1, {
                      fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                      lineNumber: 87,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                  lineNumber: 75,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV88("div", { children: [
                /* @__PURE__ */ jsxDEV88("div", { className: "text-base font-semibold", children: transaction.contact?.fullName ?? transaction.company?.name }, void 0, !1, {
                  fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                  lineNumber: 92,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV88("div", { className: "mt-1 text-sm font-medium capitalize text-secondary-300", children: transaction.company?.industry ?? "Personal" }, void 0, !1, {
                  fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                  lineNumber: 95,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                lineNumber: 91,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV88("div", { className: "w-24", children: [
              /* @__PURE__ */ jsxDEV88("div", { className: "pb-1 text-base font-semibold text-secondary-500", children: formatDate({ date: transaction.createdAt, type: "short" }) }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                lineNumber: 102,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV88("div", { className: "text-sm font-medium text-secondary-300", children: formatTime(transaction.createdAt) }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
                lineNumber: 105,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
              lineNumber: 101,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV88("div", { className: "w-28 pb-1 text-base font-semibold text-secondary-500", children: transaction.type === "Receive" ? `+${formatCurrency(transaction.amount)}` : `-${formatCurrency(transaction.amount)}` }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
              lineNumber: 110,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV88(
              Badge,
              {
                variant: getStatusColor(transaction.status),
                size: "lg",
                children: transaction.status
              },
              void 0,
              !1,
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
        !0,
        {
          fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
          lineNumber: 70,
          columnNumber: 13
        },
        this
      )),
      /* @__PURE__ */ jsxDEV88(ScrollBar, { orientation: "horizontal", className: "md:hidden" }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/overview/statistics/components/LastTransaction.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/overview/statistics/components/index.ts
var import_BalanceStatistics = __toESM(require_BalanceStatistics());

// app/routes/dashboard/overview/statistics/_route.tsx
import { jsxDEV as jsxDEV89 } from "react/jsx-dev-runtime";
var meta15 = () => [
  { title: "Statistics | Remix Template" }
];
async function loader12() {
  let recentTransactions = await prisma.transaction.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
    include: { company: !0, contact: !0 }
  }), expenseByIndustryPercentage = await getExpenseByCategory(), incomeAnalysisData = await getIncomeAnalysisData(), incomeDataForYearChart = await getIncomeDataForYearChart(), expenseAnalysisData = await getExpenseAnalysisData(), expenseDataForYearChart = await getExpenseDataForYearChart();
  return json10({
    recentTransactions,
    incomeAnalysisData,
    expenseAnalysisData,
    incomeDataForYearChart,
    expenseDataForYearChart,
    expenseByIndustryPercentage
  });
}
function _route12() {
  let {
    incomeAnalysisData,
    expenseAnalysisData,
    incomeDataForYearChart,
    expenseDataForYearChart,
    expenseByIndustryPercentage
  } = useLoaderData10();
  return /* @__PURE__ */ jsxDEV89("div", { className: "flex h-auto w-full flex-col gap-5 lg:flex-col", children: [
    /* @__PURE__ */ jsxDEV89("div", { className: "grid grid-cols-1 gap-5 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxDEV89("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxDEV89(
        ClientOnly2,
        {
          fallback: /* @__PURE__ */ jsxDEV89("div", { className: "flex h-80 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ jsxDEV89("p", { children: "Loading" }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          children: () => /* @__PURE__ */ jsxDEV89(
            import_IncomeAnalysis.default,
            {
              chartHeight: 220,
              incomeAnalysisData,
              incomeDataForYearChart
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
              lineNumber: 70,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
          lineNumber: 62,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV89("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxDEV89(
        ClientOnly2,
        {
          fallback: /* @__PURE__ */ jsxDEV89("div", { className: "flex h-80 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ jsxDEV89("p", { children: "Loading" }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          children: () => /* @__PURE__ */ jsxDEV89(
            import_ExpenseAnalysis.default,
            {
              chartHeight: 220,
              expenseAnalysisData,
              expenseDataForYearChart
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
              lineNumber: 87,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
          lineNumber: 79,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV89("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxDEV89(
        ClientOnly2,
        {
          fallback: /* @__PURE__ */ jsxDEV89("div", { className: "flex h-80 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ jsxDEV89("p", { children: "Loading" }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          children: () => /* @__PURE__ */ jsxDEV89(
            import_BalanceStatistics.default,
            {
              incomeDataForYearChart
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
              lineNumber: 104,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
          lineNumber: 96,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV89("div", { className: "grid grid-cols-1 gap-5 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV89("div", { children: /* @__PURE__ */ jsxDEV89(
        ClientOnly2,
        {
          fallback: /* @__PURE__ */ jsxDEV89("div", { className: "flex h-72 w-full items-center justify-center rounded-2xl bg-white", children: /* @__PURE__ */ jsxDEV89("p", { children: "Loading" }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this),
          children: () => /* @__PURE__ */ jsxDEV89(
            import_ExpenseCategory.default,
            {
              expenseByIndustryPercentage
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
              lineNumber: 122,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
          lineNumber: 114,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV89(LastTransaction, {}, void 0, !1, {
        fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/overview/statistics/_route.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/overview/transactions/_route.tsx
var route_exports16 = {};
__export(route_exports16, {
  action: () => action4,
  default: () => _route13,
  loader: () => loader14,
  meta: () => meta16
});
import { json as json12 } from "@remix-run/node";
import { useLoaderData as useLoaderData11 } from "@remix-run/react";
import invariant5 from "tiny-invariant";

// app/routes/dashboard/overview/transactions/components/TransactionTable.tsx
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { Fragment as Fragment16, useMemo as useMemo3, useState as useState10 } from "react";

// app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx
import { useEffect as useEffect5, useState as useState7 } from "react";
import { format } from "date-fns";
import { useSearchParams as useSearchParams3 } from "@remix-run/react";
import { Fragment as Fragment15, jsxDEV as jsxDEV90 } from "react/jsx-dev-runtime";
function TransactionTableFilterInputs() {
  let [searchParams, setSearchParams] = useSearchParams3();
  return /* @__PURE__ */ jsxDEV90(ScrollArea, { className: "h-full w-full", children: [
    /* @__PURE__ */ jsxDEV90("div", { className: "flex w-full justify-between gap-4 lg:gap-6", children: [
      /* @__PURE__ */ jsxDEV90("div", { className: "basis-1/4", children: /* @__PURE__ */ jsxDEV90(
        Select,
        {
          onValueChange: (value) => {
            let newSP = addParamToSet(
              new URLSearchParams(searchParams),
              "type",
              value
            );
            setSearchParams(newSP);
          },
          children: [
            /* @__PURE__ */ jsxDEV90(SelectTrigger, { className: "h-12 w-40 rounded-full lg:w-full", children: /* @__PURE__ */ jsxDEV90(SelectValue, { placeholder: "Transaction type" }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 43,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV90(SelectContent, { children: /* @__PURE__ */ jsxDEV90(SelectGroup, { children: [
              /* @__PURE__ */ jsxDEV90(SelectLabel, { children: "Transaction Type" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 47,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV90(SelectItem, { value: "Subscribe", children: "Subscribe" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 48,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV90(SelectItem, { value: "Receive", children: "Receive" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 49,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV90(SelectItem, { value: "Transfer", children: "Transfer" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 50,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 46,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 45,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
          lineNumber: 32,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV90("div", { className: "basis-1/4", children: /* @__PURE__ */ jsxDEV90(
        Select,
        {
          onValueChange: (value) => {
            let newSP = addParamToSet(
              new URLSearchParams(searchParams),
              "industry",
              value.toLowerCase()
            );
            setSearchParams(newSP);
          },
          children: [
            /* @__PURE__ */ jsxDEV90(SelectTrigger, { className: "h-12 w-40 rounded-full lg:w-full", children: /* @__PURE__ */ jsxDEV90(SelectValue, { placeholder: "Business type" }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 67,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV90(SelectContent, { children: /* @__PURE__ */ jsxDEV90(SelectGroup, { children: [
              /* @__PURE__ */ jsxDEV90(SelectLabel, { children: "Business Type" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 72,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV90(SelectItem, { value: "Software", children: "Software" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 73,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV90(SelectItem, { value: "Ecommerce", children: "Ecommerce" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 74,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV90(SelectItem, { value: "Food", children: "Food" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 75,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV90(SelectItem, { value: "Freelance", children: "Freelance" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 76,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 70,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
          lineNumber: 57,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV90("div", { className: "basis-1/4", children: /* @__PURE__ */ jsxDEV90(DatePickerWithRange, {}, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV90("div", { className: "basis-1/4", children: /* @__PURE__ */ jsxDEV90(
        Select,
        {
          onValueChange: (value) => {
            let newSP = addParamToSet(
              new URLSearchParams(searchParams),
              "status",
              value
            );
            setSearchParams(newSP);
          },
          children: [
            /* @__PURE__ */ jsxDEV90(SelectTrigger, { className: "h-12 w-40 rounded-full lg:w-full", children: /* @__PURE__ */ jsxDEV90(SelectValue, { placeholder: "Status" }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 98,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 97,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV90(SelectContent, { children: /* @__PURE__ */ jsxDEV90(SelectGroup, { children: [
              /* @__PURE__ */ jsxDEV90(SelectLabel, { children: "Status" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 102,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV90(SelectItem, { value: "Pending", children: "Pending" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 103,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV90(SelectItem, { value: "Success", children: "Success" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 104,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV90(SelectItem, { value: "Canceled", children: "Canceled" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
                lineNumber: 105,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 101,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
          lineNumber: 87,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV90(ScrollBar, { orientation: "horizontal" }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
function DatePickerWithRange({
  className
}) {
  let [date, setDate] = useState7({
    from: void 0,
    to: void 0
  }), [searchParams, setSearchParams] = useSearchParams3();
  return useEffect5(() => {
    if (date?.from) {
      let newSP = addParamToSet(
        new URLSearchParams(searchParams),
        "date",
        `${date.from.toISOString()}${date.to ? `to=${date.to.toISOString()}` : ""}`
      );
      setSearchParams(newSP);
    }
  }, [date, searchParams, setSearchParams]), /* @__PURE__ */ jsxDEV90("div", { className: cn("grid h-12 gap-2", className), children: /* @__PURE__ */ jsxDEV90(Popover, { children: [
    /* @__PURE__ */ jsxDEV90(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV90(
      Button,
      {
        id: "date",
        variant: "outline",
        className: cn(
          "h-12 w-40 justify-between rounded-full text-left font-normal lg:w-full",
          !date && "text-muted-foreground"
        ),
        children: [
          date?.from ? date.to ? /* @__PURE__ */ jsxDEV90(Fragment15, { children: [
            format(date.from, "LLL dd, y"),
            " -",
            " ",
            format(date.to, "LLL dd, y")
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
            lineNumber: 153,
            columnNumber: 17
          }, this) : format(date.from, "LLL dd, y") : /* @__PURE__ */ jsxDEV90("span", { children: "Date Range" }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
            lineNumber: 161,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV90(
            "img",
            {
              src: "/icons/calendar.svg",
              alt: "calendar icon",
              className: "h-5 w-5"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
              lineNumber: 163,
              columnNumber: 13
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
        lineNumber: 143,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
      lineNumber: 142,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV90(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsxDEV90(
      Calendar,
      {
        initialFocus: !0,
        mode: "range",
        defaultMonth: date?.from,
        selected: date,
        onSelect: setDate,
        numberOfMonths: 2
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
        lineNumber: 171,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
      lineNumber: 170,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
    lineNumber: 141,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableFilterInputs.tsx",
    lineNumber: 140,
    columnNumber: 5
  }, this);
}
function addParamToSet(searchParams, key, value) {
  return searchParams.delete(key), searchParams.append(key, value), searchParams;
}

// app/routes/dashboard/overview/transactions/components/AddTransaction.tsx
import { useEffect as useEffect7, useState as useState9 } from "react";
import { useFetcher as useFetcher6 } from "@remix-run/react";
import { Loader2 as Loader25, X as X4 } from "lucide-react";
import * as DialogPrimitive4 from "@radix-ui/react-dialog";

// app/routes/resources/companies-combobox/_route.tsx
var route_exports15 = {};
__export(route_exports15, {
  CompaniesCombobox: () => CompaniesCombobox,
  loader: () => loader13
});
import { useEffect as useEffect6, useMemo as useMemo2, useState as useState8 } from "react";
import { json as json11 } from "@remix-run/node";
import invariant4 from "tiny-invariant";
import { useFetcher as useFetcher5 } from "@remix-run/react";
import { Check as Check4, ChevronsUpDown } from "lucide-react";
import { jsxDEV as jsxDEV91 } from "react/jsx-dev-runtime";
async function loader13({ request }) {
  let query = new URL(request.url).searchParams.get("query");
  invariant4(typeof query == "string", "query is required");
  let companies = await prisma.company.findMany({
    where: {
      name: {
        contains: query.toLowerCase(),
        mode: "insensitive"
      }
    }
  });
  return json11({ companies });
}
function CompaniesCombobox({ setCompanyId }) {
  let [open, setOpen] = useState8(!1), [value, setValue] = useState8(""), companiesFetcher = useFetcher5(), companies = useMemo2(() => companiesFetcher.data?.companies ?? [], [companiesFetcher.data?.companies]), company = useMemo2(() => companies.find(
    (company3) => company3.name.toLowerCase() === value.toLowerCase()
  ), [companies, value]);
  return useEffect6(() => {
    setCompanyId(company?.id ?? "");
  }, [company, setCompanyId]), /* @__PURE__ */ jsxDEV91("div", { className: "flex h-full flex-col space-y-2 pt-1.5", children: [
    /* @__PURE__ */ jsxDEV91(Label, { children: "Country" }, void 0, !1, {
      fileName: "app/routes/resources/companies-combobox/_route.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV91(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxDEV91(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV91(
        Button,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": open,
          className: "h-14 justify-between font-normal capitalize",
          children: [
            company ? /* @__PURE__ */ jsxDEV91("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxDEV91(
                "img",
                {
                  src: company.logo,
                  alt: "company logo",
                  className: "mr-2 h-5 w-5"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/resources/companies-combobox/_route.tsx",
                  lineNumber: 79,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV91("span", { children: company.name }, void 0, !1, {
                fileName: "app/routes/resources/companies-combobox/_route.tsx",
                lineNumber: 84,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/resources/companies-combobox/_route.tsx",
              lineNumber: 78,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDEV91("span", { className: "font-normal text-muted-foreground", children: "Select company..." }, void 0, !1, {
              fileName: "app/routes/resources/companies-combobox/_route.tsx",
              lineNumber: 87,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV91(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, !1, {
              fileName: "app/routes/resources/companies-combobox/_route.tsx",
              lineNumber: 91,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/resources/companies-combobox/_route.tsx",
          lineNumber: 71,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/resources/companies-combobox/_route.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV91(PopoverContent, { className: " p-0", children: /* @__PURE__ */ jsxDEV91(Command, { children: [
        /* @__PURE__ */ jsxDEV91(
          CommandInput,
          {
            onValueChange: (event) => {
              companiesFetcher.submit(
                { query: event },
                { method: "GET", action: "/resources/companies-combobox" }
              );
            },
            placeholder: "Search country..."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/resources/companies-combobox/_route.tsx",
            lineNumber: 97,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV91(CommandEmpty, { children: "No company found." }, void 0, !1, {
          fileName: "app/routes/resources/companies-combobox/_route.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV91(CommandGroup, { children: companies.map((company2) => /* @__PURE__ */ jsxDEV91(
          CommandItem,
          {
            onSelect: (currentValue) => {
              setValue(currentValue === value ? "" : currentValue), setOpen(!1);
            },
            value: company2.name,
            children: [
              /* @__PURE__ */ jsxDEV91(
                Check4,
                {
                  className: cn(
                    "mr-2 h-4 w-4",
                    value === company2.name ? "opacity-100" : "opacity-0"
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/resources/companies-combobox/_route.tsx",
                  lineNumber: 117,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV91("img", { src: company2.logo, alt: "flag", className: "mr-2 h-5 w-5" }, void 0, !1, {
                fileName: "app/routes/resources/companies-combobox/_route.tsx",
                lineNumber: 123,
                columnNumber: 19
              }, this),
              " ",
              /* @__PURE__ */ jsxDEV91("span", { children: company2.name }, void 0, !1, {
                fileName: "app/routes/resources/companies-combobox/_route.tsx",
                lineNumber: 124,
                columnNumber: 19
              }, this)
            ]
          },
          company2.name,
          !0,
          {
            fileName: "app/routes/resources/companies-combobox/_route.tsx",
            lineNumber: 109,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/resources/companies-combobox/_route.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resources/companies-combobox/_route.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/resources/companies-combobox/_route.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/companies-combobox/_route.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/resources/companies-combobox/_route.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/overview/transactions/components/AddTransaction.tsx
import { jsxDEV as jsxDEV92 } from "react/jsx-dev-runtime";
function AddTransaction() {
  let [companyId, setCompanyId] = useState9(""), [open, setOpen] = useState9(!1), transactionFetcher = useFetcher6(), actionData = transactionFetcher.data, isSubmitting = transactionFetcher.state !== "idle";
  return useEffect7(() => {
    actionData?.success && !isSubmitting && setOpen(!1);
  }, [actionData?.success, isSubmitting]), /* @__PURE__ */ jsxDEV92(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxDEV92(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV92(
      Button,
      {
        type: "button",
        size: "lg",
        className: "whitespace-nowrap rounded-full",
        children: "New transaction"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
        lineNumber: 46,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV92(
      DialogContent,
      {
        onPointerDownOutside: (e) => isSubmitting ? e.preventDefault() : null,
        className: "p-6 sm:max-w-[480px] lg:p-8",
        children: [
          /* @__PURE__ */ jsxDEV92(DialogHeader, { className: "flex w-full items-center justify-center", children: [
            /* @__PURE__ */ jsxDEV92("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV92(DialogPrimitive4.Close, { asChild: !0, children: /* @__PURE__ */ jsxDEV92(
              Button,
              {
                variant: "link",
                size: "icon",
                className: "text-secondary-500 hover:text-primary-500",
                children: /* @__PURE__ */ jsxDEV92(X4, {}, void 0, !1, {
                  fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                  lineNumber: 67,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                lineNumber: 62,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
              lineNumber: 61,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV92(DialogTitle, { className: "text-[32px] font-bold", children: "New Transaction" }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV92(DialogDescription, { className: "text-center", children: "Make a new transaction for your business" }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV92(ScrollArea, { children: /* @__PURE__ */ jsxDEV92(transactionFetcher.Form, { method: "POST", className: "mx-auto w-full", children: /* @__PURE__ */ jsxDEV92(
            "fieldset",
            {
              className: "w-full space-y-6 pt-6 disabled:opacity-70",
              disabled: isSubmitting,
              children: [
                /* @__PURE__ */ jsxDEV92(Select, { name: "transactionType", children: [
                  /* @__PURE__ */ jsxDEV92(SelectTrigger, { className: "placeholder:text-muted-foreground", children: /* @__PURE__ */ jsxDEV92(
                    SelectValue,
                    {
                      placeholder: "Select a transaction type",
                      className: "placeholder:text-muted-foreground"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                      lineNumber: 89,
                      columnNumber: 19
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV92(SelectContent, { children: /* @__PURE__ */ jsxDEV92(SelectGroup, { children: [
                    /* @__PURE__ */ jsxDEV92(SelectLabel, { children: "Transactions types" }, void 0, !1, {
                      fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                      lineNumber: 96,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV92(SelectItem, { value: "Subscribe", children: "Subscribe" }, void 0, !1, {
                      fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                      lineNumber: 97,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV92(SelectItem, { value: "Receive", children: "Receive" }, void 0, !1, {
                      fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                      lineNumber: 98,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV92(SelectItem, { value: "Transfer", children: "Transfer" }, void 0, !1, {
                      fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                      lineNumber: 99,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                    lineNumber: 95,
                    columnNumber: 19
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                    lineNumber: 94,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                  lineNumber: 87,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV92(CompaniesCombobox, { setCompanyId }, void 0, !1, {
                  fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                  lineNumber: 104,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV92("input", { type: "hidden", name: "companyId", value: companyId }, void 0, !1, {
                  fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                  lineNumber: 106,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV92("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxDEV92(
                    "img",
                    {
                      src: "/icons/dollar.svg",
                      alt: "dollar",
                      className: cn(
                        "top-[67%]",
                        "absolute left-3 -translate-y-1/2 transform"
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                      lineNumber: 109,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV92(
                    Input,
                    {
                      name: "amount",
                      label: "Enter amount",
                      placeholder: "Amount",
                      className: "w-full pl-10",
                      error: actionData?.error ? String(actionData.error) : void 0
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                      lineNumber: 117,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                  lineNumber: 108,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV92(DialogFooter, { className: "w-full pt-4", children: /* @__PURE__ */ jsxDEV92(
                  Button,
                  {
                    name: "intent",
                    value: "add-transaction",
                    size: "lg",
                    type: "submit",
                    className: "w-full",
                    children: isSubmitting ? /* @__PURE__ */ jsxDEV92(Loader25, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, !1, {
                      fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                      lineNumber: 135,
                      columnNumber: 21
                    }, this) : "Confirm"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
                  lineNumber: 126,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
              lineNumber: 83,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
            lineNumber: 82,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/overview/transactions/components/AddTransaction.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/overview/transactions/components/TransactionTable.tsx
import { jsxDEV as jsxDEV93 } from "react/jsx-dev-runtime";
function TransactionTable({
  columns,
  data,
  renderSubComponent,
  getRowCanExpand
}) {
  let [sorting, setSorting] = useState10([]), [columnFilters, setColumnFilters] = useState10([]), [rowSelection, setRowSelection] = useState10({}), [isShownFilterInputs, setIsShownFilterInputs] = useState10(!1), [{ pageIndex, pageSize }, setPagination] = useState10({
    pageIndex: 0,
    pageSize: 5
  }), pagination = useMemo3(
    () => ({
      pageIndex,
      pageSize
    }),
    [pageIndex, pageSize]
  ), table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getRowCanExpand,
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      sorting,
      pagination,
      columnFilters,
      rowSelection
    }
    // debugTable: true,
  });
  return /* @__PURE__ */ jsxDEV93("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV93("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV93("div", { className: "relative hidden basis-1/2 md:block", children: [
        /* @__PURE__ */ jsxDEV93(
          Input,
          {
            placeholder: "Filter transaction number...",
            value: table.getColumn("number")?.getFilterValue() ?? "",
            onChange: (event) => table.getColumn("number")?.setFilterValue(event.target.value),
            className: "placeholder:text-[rgba(255, 255, 255, 0.50)] h-12 rounded-full border border-secondary-200 bg-[#FFFFFF]/10 py-2 pl-12 text-secondary-400 md:w-64"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
            lineNumber: 98,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV93(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            className: "absolute left-3 top-[50%] -translate-y-1/2 transform",
            children: [
              /* @__PURE__ */ jsxDEV93(
                "path",
                {
                  d: "M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",
                  stroke: "#1A1C1E",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
                  lineNumber: 117,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV93(
                "path",
                {
                  d: "M22 22L20 20",
                  stroke: "#1A1C1E",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
                  lineNumber: 124,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
            lineNumber: 109,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV93("div", { className: "flex basis-full justify-between space-x-2 md:basis-1/2 md:justify-end md:space-x-5", children: [
        /* @__PURE__ */ jsxDEV93(
          Button,
          {
            variant: "outline",
            className: cn(
              isShownFilterInputs && " bg-secondary-200 ",
              "h-12 w-12 rounded-full p-0 md:h-10 md:w-auto md:px-4 md:py-2"
            ),
            onClick: () => setIsShownFilterInputs(!isShownFilterInputs),
            children: [
              /* @__PURE__ */ jsxDEV93(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  className: "md:mr-2",
                  children: [
                    /* @__PURE__ */ jsxDEV93(
                      "path",
                      {
                        d: "M5.40002 2.09961H18.6C19.7 2.09961 20.6 2.99961 20.6 4.09961V6.29961C20.6 7.09961 20.1 8.09961 19.6 8.59961L15.3 12.3996C14.7 12.8996 14.3 13.8996 14.3 14.6996V18.9996C14.3 19.5996 13.9 20.3996 13.4 20.6996L12 21.5996C10.7 22.3996 8.90002 21.4996 8.90002 19.8996V14.5996C8.90002 13.8996 8.50002 12.9996 8.10002 12.4996L4.30002 8.49961C3.80002 7.99961 3.40002 7.09961 3.40002 6.49961V4.19961C3.40002 2.99961 4.30002 2.09961 5.40002 2.09961Z",
                        stroke: "#1A1C1E",
                        strokeWidth: "1.5",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
                        lineNumber: 151,
                        columnNumber: 15
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV93(
                      "path",
                      {
                        d: "M10.93 2.09961L6 9.99961",
                        stroke: "#1A1C1E",
                        strokeWidth: "1.5",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
                        lineNumber: 159,
                        columnNumber: 15
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
                  lineNumber: 143,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV93("span", { className: "hidden md:block", children: "Filter" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
                lineNumber: 168,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
            lineNumber: 135,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV93(
          Button,
          {
            variant: "outline",
            className: "h-12 w-12 rounded-full p-0 md:h-10 md:w-auto md:px-4 md:py-2",
            children: [
              /* @__PURE__ */ jsxDEV93(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  className: "md:mr-2",
                  children: [
                    /* @__PURE__ */ jsxDEV93(
                      "path",
                      {
                        d: "M9.31995 6.50043L11.8799 3.94043L14.4399 6.50043",
                        stroke: "#1A1C1E",
                        strokeWidth: "1.5",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
                        lineNumber: 183,
                        columnNumber: 15
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV93(
                      "path",
                      {
                        d: "M11.88 14.1798V4.00977",
                        stroke: "#1A1C1E",
                        strokeWidth: "1.5",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
                        lineNumber: 191,
                        columnNumber: 15
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV93(
                      "path",
                      {
                        d: "M4 12C4 16.42 7 20 12 20C17 20 20 16.42 20 12",
                        stroke: "#1A1C1E",
                        strokeWidth: "1.5",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
                        lineNumber: 199,
                        columnNumber: 15
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
                  lineNumber: 175,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV93("span", { className: "hidden md:block", children: "Export" }, void 0, !1, {
                fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
                lineNumber: 208,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
            lineNumber: 171,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV93(AddTransaction, {}, void 0, !1, {
          fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
          lineNumber: 211,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    isShownFilterInputs && /* @__PURE__ */ jsxDEV93(TransactionTableFilterInputs, {}, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
      lineNumber: 215,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ jsxDEV93(Table, { children: [
      /* @__PURE__ */ jsxDEV93(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsxDEV93(TableRow, { children: headerGroup.headers.map((header) => /* @__PURE__ */ jsxDEV93(TableHead, { children: header.isPlaceholder ? null : flexRender(
        header.column.columnDef.header,
        header.getContext()
      ) }, header.id, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
        lineNumber: 222,
        columnNumber: 19
      }, this)) }, headerGroup.id, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
        lineNumber: 219,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV93(TableBody, { children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsxDEV93(Fragment16, { children: [
        /* @__PURE__ */ jsxDEV93(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsxDEV93(TableCell, { children: flexRender(
          cell.column.columnDef.cell,
          cell.getContext()
        ) }, cell.id, !1, {
          fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
          lineNumber: 241,
          columnNumber: 21
        }, this)) }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
          lineNumber: 239,
          columnNumber: 17
        }, this),
        row.getIsExpanded() && /* @__PURE__ */ jsxDEV93("tr", { children: /* @__PURE__ */ jsxDEV93("td", { colSpan: row.getVisibleCells().length, children: renderSubComponent({ row }) }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
          lineNumber: 251,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
          lineNumber: 250,
          columnNumber: 19
        }, this)
      ] }, row.id, !0, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
        lineNumber: 238,
        columnNumber: 15
      }, this)) : /* @__PURE__ */ jsxDEV93(TableRow, { children: /* @__PURE__ */ jsxDEV93(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
        lineNumber: 260,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
        lineNumber: 259,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
        lineNumber: 235,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV93(DataTablePagination, { table }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
      lineNumber: 268,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/overview/transactions/components/TransactionTable.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx
import { useEffect as useEffect8, useState as useState11 } from "react";
import { useFetcher as useFetcher7 } from "@remix-run/react";
import { Loader2 as Loader26 } from "lucide-react";
import * as DialogPrimitive5 from "@radix-ui/react-dialog";
import { jsxDEV as jsxDEV94 } from "react/jsx-dev-runtime";
function DeleteTransactionDialog({
  transactionId
}) {
  let [open, setOpen] = useState11(!1), deleteTransactionFetcher = useFetcher7(), actionData = deleteTransactionFetcher.data, isDeleting = deleteTransactionFetcher.state !== "idle";
  return useEffect8(() => {
    actionData?.success && !isDeleting && setOpen(!1);
  }, [actionData?.success, isDeleting]), /* @__PURE__ */ jsxDEV94(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxDEV94(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV94(Button, { variant: "link", size: "icon", className: "group", children: /* @__PURE__ */ jsxDEV94(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        className: "fill-secondary-300 duration-200 group-hover:fill-primary",
        children: [
          /* @__PURE__ */ jsxDEV94("path", { d: "M17.5584 4.35866C16.2167 4.22533 14.875 4.12533 13.525 4.05033V4.04199L13.3417 2.95866C13.2167 2.19199 13.0334 1.04199 11.0834 1.04199H8.90005C6.95838 1.04199 6.77505 2.14199 6.64172 2.95033L6.46672 4.01699C5.69172 4.06699 4.91672 4.11699 4.14172 4.19199L2.44172 4.35866C2.09172 4.39199 1.84172 4.70033 1.87505 5.04199C1.90838 5.38366 2.20838 5.63366 2.55838 5.60033L4.25838 5.43366C8.62505 5.00033 13.0251 5.16699 17.4417 5.60866C17.4667 5.60866 17.4834 5.60866 17.5084 5.60866C17.8251 5.60866 18.1 5.36699 18.1334 5.04199C18.1584 4.70033 17.9084 4.39199 17.5584 4.35866Z" }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV94("path", { d: "M16.0254 6.78301C15.8254 6.57467 15.5504 6.45801 15.2671 6.45801H4.73378C4.45044 6.45801 4.16711 6.57467 3.97544 6.78301C3.78378 6.99134 3.67544 7.27467 3.69211 7.56634L4.20878 16.1163C4.30044 17.383 4.41711 18.9663 7.32544 18.9663H12.6754C15.5838 18.9663 15.7004 17.3913 15.7921 16.1163L16.3088 7.57467C16.3254 7.27467 16.2171 6.99134 16.0254 6.78301ZM11.3838 14.7913H8.60878C8.26711 14.7913 7.98378 14.508 7.98378 14.1663C7.98378 13.8247 8.26711 13.5413 8.60878 13.5413H11.3838C11.7254 13.5413 12.0088 13.8247 12.0088 14.1663C12.0088 14.508 11.7254 14.7913 11.3838 14.7913ZM12.0838 11.458H7.91711C7.57544 11.458 7.29211 11.1747 7.29211 10.833C7.29211 10.4913 7.57544 10.208 7.91711 10.208H12.0838C12.4254 10.208 12.7088 10.4913 12.7088 10.833C12.7088 11.1747 12.4254 11.458 12.0838 11.458Z" }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
        lineNumber: 37,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV94(
      DialogContent,
      {
        onPointerDownOutside: (e) => isDeleting ? e.preventDefault() : null,
        className: "flex flex-col items-center justify-center gap-8 p-8 sm:max-w-[480px]",
        children: [
          /* @__PURE__ */ jsxDEV94("div", { className: "flex h-[91px] w-[91px] items-center justify-center rounded-full bg-error-500 p-5 shadow-[0px_24px_34px_-10px_rgba(133,46,61,0.30)]", children: /* @__PURE__ */ jsxDEV94(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "52",
              height: "51",
              viewBox: "0 0 52 51",
              fill: "none",
              children: [
                /* @__PURE__ */ jsxDEV94(
                  "path",
                  {
                    d: "M45.2735 11.1138C41.8523 10.7738 38.431 10.5188 34.9885 10.3275V10.3062L34.521 7.54375C34.2023 5.58875 33.7348 2.65625 28.7623 2.65625H23.1948C18.2435 2.65625 17.776 5.46125 17.436 7.5225L16.9898 10.2425C15.0135 10.37 13.0373 10.4975 11.061 10.6888L6.72604 11.1138C5.83354 11.1988 5.19604 11.985 5.28104 12.8563C5.36604 13.7275 6.13104 14.365 7.02354 14.28L11.3585 13.855C22.4935 12.75 33.7135 13.175 44.976 14.3013C45.0398 14.3013 45.0823 14.3013 45.146 14.3013C45.9535 14.3013 46.6548 13.685 46.7398 12.8563C46.8035 11.985 46.166 11.1988 45.2735 11.1138Z",
                    fill: "white"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
                    lineNumber: 61,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV94(
                  "path",
                  {
                    d: "M41.3639 17.2975C40.8539 16.7663 40.1527 16.4688 39.4302 16.4688H12.5702C11.8477 16.4688 11.1252 16.7663 10.6365 17.2975C10.1477 17.8288 9.87145 18.5512 9.91395 19.295L11.2315 41.0975C11.4652 44.3275 11.7627 48.365 19.1789 48.365H32.8214C40.2377 48.365 40.5352 44.3488 40.7689 41.0975L42.0864 19.3163C42.1289 18.5513 41.8527 17.8288 41.3639 17.2975ZM29.5277 37.7188H22.4514C21.5802 37.7188 20.8577 36.9962 20.8577 36.125C20.8577 35.2538 21.5802 34.5312 22.4514 34.5312H29.5277C30.3989 34.5312 31.1214 35.2538 31.1214 36.125C31.1214 36.9962 30.3989 37.7188 29.5277 37.7188ZM31.3127 29.2188H20.6877C19.8164 29.2188 19.0939 28.4962 19.0939 27.625C19.0939 26.7538 19.8164 26.0312 20.6877 26.0312H31.3127C32.1839 26.0312 32.9064 26.7538 32.9064 27.625C32.9064 28.4962 32.1839 29.2188 31.3127 29.2188Z",
                    fill: "white"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
                    lineNumber: 65,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
              lineNumber: 54,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV94(DialogHeader, { className: "flex items-center justify-center", children: [
            /* @__PURE__ */ jsxDEV94(DialogTitle, { className: "text-[32px] font-bold", children: "Delete Transaction ?" }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV94(DialogDescription, { children: "Are you sure you want to delete this transaction history?" }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV94(DialogFooter, { className: "w-full", children: /* @__PURE__ */ jsxDEV94(
            deleteTransactionFetcher.Form,
            {
              method: "DELETE",
              className: "flex  w-full gap-6",
              children: [
                /* @__PURE__ */ jsxDEV94(DialogPrimitive5.Close, { asChild: !0, className: "basis-1/2", children: /* @__PURE__ */ jsxDEV94(
                  Button,
                  {
                    type: "button",
                    size: "lg",
                    variant: "outline",
                    className: "w-full",
                    disabled: isDeleting,
                    children: "Cancel"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
                    lineNumber: 87,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
                  lineNumber: 86,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV94("input", { type: "hidden", name: "transactionId", value: transactionId }, void 0, !1, {
                  fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
                  lineNumber: 98,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV94(
                  Button,
                  {
                    name: "intent",
                    value: "delete-transaction",
                    type: "submit",
                    size: "lg",
                    className: "w-full basis-1/2",
                    disabled: isDeleting,
                    children: isDeleting ? /* @__PURE__ */ jsxDEV94(Loader26, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, !1, {
                      fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
                      lineNumber: 108,
                      columnNumber: 17
                    }, this) : "Yes"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
                    lineNumber: 99,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
              lineNumber: 82,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/overview/transactions/components/DeleteTransactionDialog.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx
import { Fragment as Fragment17, jsxDEV as jsxDEV95 } from "react/jsx-dev-runtime";
var transactionsTableColumns = [
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ jsxDEV95(
      Checkbox,
      {
        checked: table.getIsAllPageRowsSelected(),
        onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
        lineNumber: 38,
        columnNumber: 7
      },
      this
    ),
    cell: ({ row }) => /* @__PURE__ */ jsxDEV95(
      Checkbox,
      {
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!!value),
        "aria-label": "Select row"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ),
    enableSorting: !1,
    enableHiding: !1
  },
  {
    accessorKey: "number",
    header: ({ column }) => /* @__PURE__ */ jsxDEV95(FilterHeaderButton, { title: "Transaction No.", column }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
      lineNumber: 57,
      columnNumber: 14
    }, this)
  },
  {
    accessorKey: "company",
    header: ({ column }) => /* @__PURE__ */ jsxDEV95(FilterHeaderButton, { title: "Business", column }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
      lineNumber: 63,
      columnNumber: 14
    }, this),
    cell: ({ row }) => /* @__PURE__ */ jsxDEV95("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxDEV95(
        Avatar,
        {
          className: cn(
            row.original.companyIndustry === "Personal" ? "h-12 w-12" : "h-12 w-12 bg-[#F4F4F7] p-[14px]"
          ),
          children: [
            /* @__PURE__ */ jsxDEV95(AvatarImage, { src: row.original.companyLogo }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV95(AvatarFallback, { children: row.getValue("company") }, void 0, !1, {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
              lineNumber: 76,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
          lineNumber: 68,
          columnNumber: 11
        },
        this
      ),
      " ",
      /* @__PURE__ */ jsxDEV95("div", { children: [
        /* @__PURE__ */ jsxDEV95("div", { children: row.getValue("company") }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV95("div", { className: "mt-1 text-sm font-medium capitalize text-secondary-300", children: row.original.companyIndustry }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this)
  },
  {
    accessorKey: "type",
    header: "Transaction Type",
    cell: ({ row }) => /* @__PURE__ */ jsxDEV95("div", { children: /* @__PURE__ */ jsxDEV95(Badge, { variant: "secondary", size: "lg", children: row.getValue("type") }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this)
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => /* @__PURE__ */ jsxDEV95(FilterHeaderButton, { title: "Date & Time", column }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
      lineNumber: 104,
      columnNumber: 14
    }, this),
    cell: ({ row }) => /* @__PURE__ */ jsxDEV95("div", { children: [
      /* @__PURE__ */ jsxDEV95("div", { className: "pb-1 text-base font-semibold text-secondary-500", children: formatDate({ date: row.getValue("createdAt") }) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV95("div", { className: "text-sm font-medium text-secondary-300", children: formatTime(row.getValue("createdAt")) }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this)
  },
  {
    accessorKey: "amount",
    header: ({ column }) => /* @__PURE__ */ jsxDEV95(FilterHeaderButton, { title: "Amount", column }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
      lineNumber: 122,
      columnNumber: 14
    }, this),
    cell: ({ row }) => /* @__PURE__ */ jsxDEV95("div", { children: row.original.type === "Receive" ? `+${formatCurrency(row.getValue("amount"))}` : `-${formatCurrency(row.getValue("amount"))}` }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this)
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => /* @__PURE__ */ jsxDEV95(
      Badge,
      {
        variant: getStatusColor(row.getValue("status")),
        size: "lg",
        children: row.getValue("status")
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
        lineNumber: 139,
        columnNumber: 9
      },
      this
    )
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => /* @__PURE__ */ jsxDEV95(Fragment17, { children: /* @__PURE__ */ jsxDEV95("div", { className: "flex", children: [
      row.getCanExpand() ? /* @__PURE__ */ jsxDEV95(
        Button,
        {
          variant: "link",
          size: "icon",
          onClick: row.getToggleExpandedHandler(),
          style: { cursor: "pointer" },
          className: "group",
          children: /* @__PURE__ */ jsxDEV95(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              className: "fill-secondary-300 duration-200 group-hover:fill-primary",
              children: [
                /* @__PURE__ */ jsxDEV95("path", { d: "M17.7087 7.62506C15.7837 4.60006 12.967 2.8584 10.0003 2.8584C8.51699 2.8584 7.07533 3.29173 5.75866 4.10007C4.44199 4.91673 3.25866 6.1084 2.29199 7.62506C1.45866 8.9334 1.45866 11.0584 2.29199 12.3667C4.21699 15.4001 7.03366 17.1334 10.0003 17.1334C11.4837 17.1334 12.9253 16.7001 14.242 15.8917C15.5587 15.0751 16.742 13.8834 17.7087 12.3667C18.542 11.0667 18.542 8.9334 17.7087 7.62506ZM10.0003 13.3667C8.13366 13.3667 6.63366 11.8584 6.63366 10.0001C6.63366 8.14173 8.13366 6.6334 10.0003 6.6334C11.867 6.6334 13.367 8.14173 13.367 10.0001C13.367 11.8584 11.867 13.3667 10.0003 13.3667Z" }, void 0, !1, {
                  fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
                  lineNumber: 171,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV95("path", { d: "M10 7.61621C8.69167 7.61621 7.625 8.68288 7.625 9.99954C7.625 11.3079 8.69167 12.3745 10 12.3745C11.3083 12.3745 12.3833 11.3079 12.3833 9.99954C12.3833 8.69121 11.3083 7.61621 10 7.61621Z" }, void 0, !1, {
                  fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
                  lineNumber: 172,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
              lineNumber: 164,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
          lineNumber: 155,
          columnNumber: 13
        },
        this
      ) : null,
      " ",
      /* @__PURE__ */ jsxDEV95(DeleteTransactionDialog, { transactionId: row.getValue("id") }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
        lineNumber: 176,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
      lineNumber: 153,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, this)
  }
];
function FilterHeaderButton({ title, column }) {
  return /* @__PURE__ */ jsxDEV95(
    Button,
    {
      variant: "ghost",
      onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
      className: "whitespace-nowrap text-base font-semibold text-secondary-400 hover:bg-transparent",
      children: [
        title,
        /* @__PURE__ */ jsxDEV95(
          "img",
          {
            src: "/icons/filter.svg",
            alt: "filter table",
            className: "ml-2 h-4 w-4"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
            lineNumber: 196,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/dashboard/overview/transactions/components/TransactionTableColumns.tsx",
      lineNumber: 190,
      columnNumber: 5
    },
    this
  );
}

// app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx
import { jsxDEV as jsxDEV96 } from "react/jsx-dev-runtime";
function RenderRowDetails({ row }) {
  return /* @__PURE__ */ jsxDEV96("div", { className: "flex justify-between px-8 py-5 text-base font-semibold", children: [
    /* @__PURE__ */ jsxDEV96("div", { children: [
      /* @__PURE__ */ jsxDEV96("div", { className: "pb-1.5 text-sm font-medium text-secondary-300", children: "Paid By" }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV96("div", { children: row.original.subRows?.user }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV96("div", { children: [
      /* @__PURE__ */ jsxDEV96("div", { className: "pb-1.5 text-sm font-medium text-secondary-300", children: "Account Type" }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV96("div", { children: "Corporate Business" }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV96("div", { children: [
      /* @__PURE__ */ jsxDEV96("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV96("div", { className: "h-4 w-4 rounded-full bg-primary-500" }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV96("span", { children: "Transfer send" }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV96("div", { className: "pt-1.5 text-sm font-medium text-secondary-300", children: row.original.subRows?.createdAt ? formatDate({ date: row.original.subRows?.createdAt }) : "N/A" }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV96("div", { children: [
      /* @__PURE__ */ jsxDEV96("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV96("div", { className: "h-4 w-4 rounded-full bg-primary-500" }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV96("span", { children: "Transfer Receive" }, void 0, !1, {
          fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV96("div", { className: "pt-1.5 text-sm font-medium text-secondary-300", children: row.original.subRows?.createdAt ? formatDate({ date: row.original.subRows?.createdAt }) : "N/A" }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV96("div", { children: [
      /* @__PURE__ */ jsxDEV96("div", { className: "pb-1.5 text-sm font-medium text-secondary-300", children: "Transaction Id" }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV96("div", { children: row.original.id }, void 0, !1, {
        fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/overview/transactions/components/RenderRowDetails.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/utils/getTransactionNumber.ts
function getRandomInt(min, max) {
  return min = Math.ceil(min), max = Math.floor(max), Math.floor(Math.random() * (max - min + 1)) + min;
}
function getTransactionNumber() {
  return `FL-${getRandomInt(3e6, 3999999)}`;
}

// app/routes/dashboard/overview/transactions/_route.tsx
import { jsxDEV as jsxDEV97 } from "react/jsx-dev-runtime";
var meta16 = () => [
  { title: "Transactions | Remix Template" }
];
async function loader14({ request }) {
  let url = new URL(request.url), type = url.searchParams.get("type"), industry = url.searchParams.get("industry"), status = url.searchParams.get("status"), date = url.searchParams.get("date"), [startDate, endDate] = date ? date.split("to=") : ["", ""], where = {
    type: type ? { equals: type } : void 0,
    status: status ? { equals: status } : void 0,
    company: industry ? { industry: { equals: industry } } : void 0,
    createdAt: {
      gte: startDate ? new Date(startDate) : void 0,
      lte: endDate ? isNaN(new Date(endDate).getTime()) ? void 0 : new Date(endDate) : void 0
    }
  }, formatTransactions = (await prisma.transaction.findMany({
    where,
    include: { company: !0, user: !0, contact: !0 },
    orderBy: { createdAt: "desc" }
  })).map((transaction) => ({
    id: transaction.id,
    number: transaction.number,
    amount: transaction.amount,
    status: transaction.status,
    type: transaction.type,
    createdAt: transaction.createdAt.toISOString(),
    company: transaction.company?.name ? transaction.company.name : transaction.contact?.fullName,
    companyLogo: transaction.company?.logo ? transaction.company?.logo : transaction.contact?.avatar,
    companyIndustry: transaction.company?.industry ? transaction.company?.industry : "Personal",
    subRows: {
      user: transaction.user.fullName,
      createdAt: transaction.updatedAt.toISOString()
    }
  }));
  return json12({ transactions: formatTransactions });
}
async function action4({ request }) {
  let userId = await requireUserId(request), formData = await request.formData(), companyId = formData.get("companyId"), amount = formData.get("amount"), transactionType = formData.get("transactionType"), intent = formData.get("intent");
  switch (intent) {
    case "add-transaction":
      let user = await getUser(request);
      return user ? transactionType === "Transfer" && user.balance < Number(amount) ? json12(
        {
          message: null,
          error: "Insufficient balance. Edit or Add a new card"
        },
        { status: 400 }
      ) : (await prisma.transaction.create({
        data: {
          number: getTransactionNumber(),
          amount: Number(amount),
          companyId,
          userId,
          type: transactionType,
          status: "Success"
        }
      }), await updateUserBalance({
        userId,
        amount: Number(amount),
        type: transactionType
      }), json12({
        success: !0,
        message: "Transaction created successfully"
      })) : json12(
        { message: null, error: "User not found" },
        { status: 404 }
      );
    case "delete-transaction":
      let transactionId = formData.get("transactionId");
      return invariant5(transactionId, "Transaction id is required"), await prisma.transaction.delete({
        where: { id: String(transactionId) }
      }), json12({
        success: !0,
        message: "Transaction deleted successfully"
      });
    default:
      throw new Response(`Unsupported intent: ${intent}`, { status: 400 });
  }
}
function _route13() {
  let { transactions } = useLoaderData11();
  return /* @__PURE__ */ jsxDEV97("div", { className: "rounded-2xl bg-white p-6", children: /* @__PURE__ */ jsxDEV97(
    TransactionTable,
    {
      data: transactions,
      columns: transactionsTableColumns,
      getRowCanExpand: () => !0,
      renderSubComponent: RenderRowDetails
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard/overview/transactions/_route.tsx",
      lineNumber: 154,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/dashboard/overview/transactions/_route.tsx",
    lineNumber: 153,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/settings/_layout.tsx
var layout_exports5 = {};
__export(layout_exports5, {
  default: () => _layout4
});
import { Outlet as Outlet6 } from "@remix-run/react";

// app/routes/dashboard/settings/components/SettingNav.tsx
import { NavLink as NavLink4 } from "@remix-run/react";
import { Fragment as Fragment18, jsxDEV as jsxDEV98 } from "react/jsx-dev-runtime";
function SettingNav() {
  return /* @__PURE__ */ jsxDEV98(Card, { className: "hidden h-full basis-4/12 space-y-4 lg:sticky lg:top-24 lg:block", children: SETTINGS_NAV_ITEMS.map((item) => /* @__PURE__ */ jsxDEV98(
    NavLink4,
    {
      to: item.href,
      className: ({ isActive }) => isActive ? "group flex items-center justify-between rounded-lg bg-primary-500 !py-7 px-6 font-medium text-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.16)] hover:bg-primary-500 lg:px-4 lg:py-2.5" : "text-gray group flex items-center  justify-between rounded-lg !py-7 px-6 hover:bg-[#F4F4F7] lg:px-4 lg:py-2.5",
      end: !0,
      children: ({ isActive }) => /* @__PURE__ */ jsxDEV98(Fragment18, { children: [
        /* @__PURE__ */ jsxDEV98("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV98(
            "span",
            {
              className: cn(
                isActive ? "bg-white stroke-primary-500 text-primary-500" : "stroke-secondary-500",
                "flex h-8 w-8 items-center justify-center rounded-full "
              ),
              children: item.icon
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
              lineNumber: 24,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV98("span", { children: item.name }, void 0, !1, {
            fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
            lineNumber: 34,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
          lineNumber: 23,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV98("span", { className: "pr-1 duration-500 group-hover:pr-0", children: /* @__PURE__ */ jsxDEV98(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsxDEV98(
              "path",
              {
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "m9 5l6 7l-6 7"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
                lineNumber: 44,
                columnNumber: 19
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
            lineNumber: 38,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
          lineNumber: 37,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this)
    },
    item.name,
    !1,
    {
      fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function MobileSettingNav() {
  return /* @__PURE__ */ jsxDEV98(ScrollArea, { className: "h-full w-full lg:hidden", children: [
    /* @__PURE__ */ jsxDEV98("div", { className: "flex pb-6 lg:w-min", children: SETTINGS_NAV_ITEMS.map((item) => /* @__PURE__ */ jsxDEV98(
      NavLink4,
      {
        to: item.href,
        className: ({ isActive }) => isActive ? "whitespace-nowrap border-b-2 border-primary px-5 py-3 text-base font-medium text-white" : "whitespace-nowrap border-b border-[#A2A6AA] px-5 py-3 text-base font-medium text-[#A2A6AA] duration-200 hover:text-white",
        end: !0,
        children: item.name
      },
      item.name,
      !1,
      {
        fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
        lineNumber: 66,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV98(ScrollBar, { orientation: "horizontal" }, void 0, !1, {
      fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
var SETTINGS_NAV_ITEMS = [
  {
    name: "Personal Information",
    href: "",
    icon: /* @__PURE__ */ jsxDEV98(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxDEV98("path", { d: "M13.6663 5.83268C13.6663 7.85773 12.0247 9.49935 9.99967 9.49935C7.97463 9.49935 6.33301 7.85773 6.33301 5.83268C6.33301 3.80764 7.97463 2.16602 9.99967 2.16602C12.0247 2.16602 13.6663 3.80764 13.6663 5.83268Z" }, void 0, !1, {
            fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV98("path", { d: "M9.9998 12.084C5.8248 12.084 2.4248 14.884 2.4248 18.334C2.4248 18.5673 2.60814 18.7507 2.84147 18.7507H17.1581C17.3915 18.7507 17.5748 18.5673 17.5748 18.334C17.5748 14.884 14.1748 12.084 9.9998 12.084Z" }, void 0, !1, {
            fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
        lineNumber: 90,
        columnNumber: 7
      },
      this
    )
  },
  // TODO: add preferences in the future
  // {
  //   name: "Preferences",
  //   href: "preferences",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="20"
  //       height="20"
  //       viewBox="0 0 20 20"
  //       fill="none"
  //     >
  //       <path
  //         d="M14.1749 10.6075C14.6673 10.6075 15.0665 10.2083 15.0665 9.71584C15.0665 9.22339 14.6673 8.82422 14.1749 8.82422C13.6824 8.82422 13.2832 9.22339 13.2832 9.71584C13.2832 10.2083 13.6824 10.6075 14.1749 10.6075Z"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M16.667 4.99935V6.491C16.4587 6.466 16.217 6.44934 15.9587 6.44934H12.392C10.6087 6.44934 10.017 7.04104 10.017 8.82437V13.0827H5.00033C2.33366 13.0827 1.66699 12.416 1.66699 9.74936V4.99935C1.66699 2.33268 2.33366 1.66602 5.00033 1.66602H13.3337C16.0003 1.66602 16.667 2.33268 16.667 4.99935Z"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M7.5 13.084V16.6673"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M1.66699 9.91602H10.0003"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M4.95801 16.666H9.99966"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M14.1749 10.6075C14.6673 10.6075 15.0665 10.2083 15.0665 9.71584C15.0665 9.22339 14.6673 8.82422 14.1749 8.82422C13.6824 8.82422 13.2832 9.22339 13.2832 9.71584C13.2832 10.2083 13.6824 10.6075 14.1749 10.6075Z"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeMiterlimit="10"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M16.6666 6.49088C16.4583 6.46588 16.2166 6.44922 15.9583 6.44922H12.3916C10.6083 6.44922 10.0166 7.04092 10.0166 8.82425V15.9576C10.0166 17.7409 10.6083 18.3326 12.3916 18.3326H15.9583C17.7416 18.3326 18.3333 17.7409 18.3333 15.9576V8.82425C18.3333 7.29925 17.8999 6.64921 16.6666 6.49088ZM14.175 8.82425C14.6666 8.82425 15.0666 9.2242 15.0666 9.71587C15.0666 10.2075 14.6666 10.6075 14.175 10.6075C13.6833 10.6075 13.2833 10.2075 13.2833 9.71587C13.2833 9.2242 13.6833 8.82425 14.175 8.82425ZM14.175 15.9576C13.1916 15.9576 12.3916 15.1576 12.3916 14.1742C12.3916 13.7659 12.5333 13.3826 12.7666 13.0826C13.0916 12.6659 13.6 12.3909 14.175 12.3909C14.625 12.3909 15.0333 12.5576 15.3416 12.8242C15.7166 13.1576 15.9583 13.6409 15.9583 14.1742C15.9583 15.1576 15.1583 15.9576 14.175 15.9576Z"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeMiterlimit="10"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M15.9583 14.174C15.9583 15.1573 15.1583 15.9573 14.1749 15.9573C13.1916 15.9573 12.3916 15.1573 12.3916 14.174C12.3916 13.7656 12.5333 13.3823 12.7666 13.0823C13.0916 12.6656 13.5999 12.3906 14.1749 12.3906C14.6249 12.3906 15.0333 12.5573 15.3416 12.824C15.7166 13.1573 15.9583 13.6406 15.9583 14.174Z"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeMiterlimit="10"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M14.1749 10.6075C14.6673 10.6075 15.0665 10.2083 15.0665 9.71584C15.0665 9.22339 14.6673 8.82422 14.1749 8.82422C13.6824 8.82422 13.2832 9.22339 13.2832 9.71584C13.2832 10.2083 13.6824 10.6075 14.1749 10.6075Z"
  //         stroke="#1A1C1E"
  //         strokeWidth="1.5"
  //         strokeMiterlimit="10"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //     </svg>
  //   ),
  // },
  {
    name: "Security",
    href: "security",
    icon: /* @__PURE__ */ jsxDEV98(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxDEV98(
            "path",
            {
              d: "M5 8.33268V6.66602C5 3.90768 5.83333 1.66602 10 1.66602C14.1667 1.66602 15 3.90768 15 6.66602V8.33268",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
              lineNumber: 195,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV98(
            "path",
            {
              d: "M10.0003 15.4167C11.1509 15.4167 12.0837 14.4839 12.0837 13.3333C12.0837 12.1827 11.1509 11.25 10.0003 11.25C8.84973 11.25 7.91699 12.1827 7.91699 13.3333C7.91699 14.4839 8.84973 15.4167 10.0003 15.4167Z",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
              lineNumber: 202,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV98(
            "path",
            {
              d: "M14.167 18.334H5.83366C2.50033 18.334 1.66699 17.5007 1.66699 14.1673V12.5007C1.66699 9.16732 2.50033 8.33398 5.83366 8.33398H14.167C17.5003 8.33398 18.3337 9.16732 18.3337 12.5007V14.1673C18.3337 17.5007 17.5003 18.334 14.167 18.334Z",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
              lineNumber: 209,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboard/settings/components/SettingNav.tsx",
        lineNumber: 188,
        columnNumber: 7
      },
      this
    )
  }
];

// app/routes/dashboard/settings/_layout.tsx
import { Fragment as Fragment19, jsxDEV as jsxDEV99 } from "react/jsx-dev-runtime";
function _layout4() {
  return /* @__PURE__ */ jsxDEV99(Fragment19, { children: [
    /* @__PURE__ */ jsxDEV99("div", { className: "w-screen bg-[#1C2634]", children: /* @__PURE__ */ jsxDEV99(Container, { className: "pb-40 pt-28 xl:px-0", children: /* @__PURE__ */ jsxDEV99(
      Breadcrumb,
      {
        heading: "Settings",
        links: [
          { name: "Dashboard", href: "/dashboard/overview" },
          { name: "Settings", href: "/dashboard/settings" },
          { name: "Personal information", href: "" }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/settings/_layout.tsx",
        lineNumber: 11,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/settings/_layout.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/settings/_layout.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV99(Container, { className: "relative -top-32 flex h-auto w-full flex-col lg:flex-row lg:gap-5 xl:px-0", children: [
      /* @__PURE__ */ jsxDEV99(SettingNav, {}, void 0, !1, {
        fileName: "app/routes/dashboard/settings/_layout.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV99(MobileSettingNav, {}, void 0, !1, {
        fileName: "app/routes/dashboard/settings/_layout.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV99("div", { className: "basis-full lg:basis-8/12", children: /* @__PURE__ */ jsxDEV99(Outlet6, {}, void 0, !1, {
        fileName: "app/routes/dashboard/settings/_layout.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/settings/_layout.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/settings/_layout.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/settings/_layout.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/settings/_index/_route.tsx
var route_exports18 = {};
__export(route_exports18, {
  action: () => action5,
  default: () => _route14,
  meta: () => meta17
});
import { z as z3 } from "zod";
import { useId as useId3, useState as useState13 } from "react";
import { parse as parse3 } from "@conform-to/zod";
import { Link as Link28, useFetcher as useFetcher9 } from "@remix-run/react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { Loader2 as Loader27 } from "lucide-react";
import { json as json14 } from "@remix-run/node";
import { conform as conform3, useForm as useForm3 } from "@conform-to/react";

// app/routes/resources/countries-combobox/_route.tsx
var route_exports17 = {};
__export(route_exports17, {
  CountriesCombobox: () => CountriesCombobox,
  loader: () => loader15
});
import { useState as useState12 } from "react";
import { json as json13 } from "@remix-run/node";
import invariant6 from "tiny-invariant";
import { useFetcher as useFetcher8 } from "@remix-run/react";
import { Check as Check5, ChevronsUpDown as ChevronsUpDown2 } from "lucide-react";
import { jsxDEV as jsxDEV100 } from "react/jsx-dev-runtime";
async function loader15({ request }) {
  let query = new URL(request.url).searchParams.get("query");
  invariant6(typeof query == "string", "query is required");
  let countries = await prisma.country.findMany({
    where: {
      name: {
        contains: query.toLowerCase(),
        mode: "insensitive"
      }
    }
  });
  return json13({ countries });
}
function CountriesCombobox({ value, setValue }) {
  let [open, setOpen] = useState12(!1), countriesFetcher = useFetcher8(), countries = countriesFetcher.data?.countries ?? [];
  return /* @__PURE__ */ jsxDEV100("div", { className: "flex h-full flex-col space-y-2 pt-1.5", children: [
    /* @__PURE__ */ jsxDEV100(Label, { children: "Country" }, void 0, !1, {
      fileName: "app/routes/resources/countries-combobox/_route.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV100(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxDEV100(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV100(
        Button,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": open,
          className: "h-14 justify-between font-normal capitalize",
          children: [
            value || /* @__PURE__ */ jsxDEV100("span", { className: "font-normal text-muted-foreground", children: "Select country..." }, void 0, !1, {
              fileName: "app/routes/resources/countries-combobox/_route.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV100(ChevronsUpDown2, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, !1, {
              fileName: "app/routes/resources/countries-combobox/_route.tsx",
              lineNumber: 70,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/resources/countries-combobox/_route.tsx",
          lineNumber: 57,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/resources/countries-combobox/_route.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV100(PopoverContent, { className: " p-0", children: /* @__PURE__ */ jsxDEV100(Command, { children: [
        /* @__PURE__ */ jsxDEV100(
          CommandInput,
          {
            onValueChange: (event) => {
              countriesFetcher.submit(
                { query: event },
                { method: "GET", action: "/resources/countries-combobox" }
              );
            },
            name: "country",
            placeholder: "Search country..."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/resources/countries-combobox/_route.tsx",
            lineNumber: 75,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV100(CommandEmpty, { children: "No country found." }, void 0, !1, {
          fileName: "app/routes/resources/countries-combobox/_route.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        countries.length > 0 && /* @__PURE__ */ jsxDEV100(CommandGroup, { children: countries.map((country) => /* @__PURE__ */ jsxDEV100(
          CommandItem,
          {
            onSelect: (currentValue) => {
              setValue(currentValue === value ? "" : currentValue), setOpen(!1);
            },
            value: country.name,
            children: [
              /* @__PURE__ */ jsxDEV100(
                Check5,
                {
                  className: cn(
                    "mr-2 h-4 w-4",
                    value === country.name ? "opacity-100" : "opacity-0"
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/resources/countries-combobox/_route.tsx",
                  lineNumber: 97,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV100(
                "img",
                {
                  src: country.image,
                  alt: "flag",
                  className: "mr-2 h-5 w-5"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/resources/countries-combobox/_route.tsx",
                  lineNumber: 103,
                  columnNumber: 21
                },
                this
              ),
              " ",
              /* @__PURE__ */ jsxDEV100("span", { children: country.name }, void 0, !1, {
                fileName: "app/routes/resources/countries-combobox/_route.tsx",
                lineNumber: 108,
                columnNumber: 21
              }, this)
            ]
          },
          country.id,
          !0,
          {
            fileName: "app/routes/resources/countries-combobox/_route.tsx",
            lineNumber: 89,
            columnNumber: 19
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/resources/countries-combobox/_route.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/resources/countries-combobox/_route.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/resources/countries-combobox/_route.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/resources/countries-combobox/_route.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/resources/countries-combobox/_route.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/settings/_index/_route.tsx
import { jsxDEV as jsxDEV101 } from "react/jsx-dev-runtime";
var meta17 = () => [
  { title: "Settings: Personal information | Remix Template" }
], schema3 = z3.object({
  fullName: z3.string({ required_error: "Full name is required" }),
  email: z3.string({ required_error: "Email is required" }).email("Email is invalid"),
  phone: z3.string().optional(),
  country: z3.string().optional(),
  province: z3.string().optional(),
  city: z3.string().optional()
});
async function action5({ request }) {
  let userId = await requireUserId(request), formData = await request.formData(), submission = parse3(formData, { schema: schema3 });
  return !submission.value || submission.intent !== "submit" ? json14(submission, { status: 400 }) : (await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      ...submission.value
    }
  }), json14(submission));
}
function _route14() {
  let user = useUser(), id = useId3(), [countryName, setCountryName] = useState13(user?.country ?? ""), [phoneNumber, setPhoneNumber] = useState13(user?.phone ?? ""), editInformationFetcher = useFetcher9(), actionData = editInformationFetcher.data, isSubmitting = editInformationFetcher.state !== "idle", [form, { fullName, email, country, phone, province, city }] = useForm3({
    lastSubmission: actionData,
    id,
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parse3(formData, { schema: schema3 });
    },
    defaultValue: {
      fullName: user?.fullName ?? "",
      email: user?.email ?? "",
      province: user?.province ?? "",
      city: user?.city ?? ""
    }
  });
  function handleChangePhoneNumber(value) {
    setPhoneNumber(value ?? "");
  }
  return /* @__PURE__ */ jsxDEV101(Card, { children: [
    /* @__PURE__ */ jsxDEV101(CardHeader, { children: /* @__PURE__ */ jsxDEV101(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV101("span", { children: "Personal Information" }, void 0, !1, {
        fileName: "app/routes/dashboard/settings/_index/_route.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV101(InfoTooltip, { message: "Edit your information" }, void 0, !1, {
        fileName: "app/routes/dashboard/settings/_index/_route.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/settings/_index/_route.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/settings/_index/_route.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV101(editInformationFetcher.Form, { method: "PUT", ...form.props, children: /* @__PURE__ */ jsxDEV101("fieldset", { className: "disabled:opacity-70", disabled: isSubmitting, children: [
      /* @__PURE__ */ jsxDEV101(CardContent, { className: "my-6 space-y-6 border-y border-secondary-100 py-8", children: [
        /* @__PURE__ */ jsxDEV101(
          Input,
          {
            label: "Display name",
            placeholder: "Display name",
            error: fullName.error,
            ...conform3.input(fullName)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/settings/_index/_route.tsx",
            lineNumber: 111,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV101(
          Input,
          {
            label: "Email",
            placeholder: "Email",
            readOnly: !0,
            error: email.error,
            ...conform3.input(email, {
              type: "email"
            })
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/settings/_index/_route.tsx",
            lineNumber: 118,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV101("div", { children: [
          /* @__PURE__ */ jsxDEV101(Label, { children: "Phone" }, void 0, !1, {
            fileName: "app/routes/dashboard/settings/_index/_route.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV101(
            PhoneInputWithCountrySelect,
            {
              placeholder: "Phone",
              value: phoneNumber,
              onChange: handleChangePhoneNumber,
              limitMaxLength: !0,
              error: phone.error,
              ...conform3.input(phone, {
                type: "tel"
              }),
              inputComponent: Input
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/settings/_index/_route.tsx",
              lineNumber: 130,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard/settings/_index/_route.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV101("div", { className: "flex w-full flex-col gap-5 lg:flex-row", children: [
          /* @__PURE__ */ jsxDEV101("div", { className: "basis-1/3", children: [
            /* @__PURE__ */ jsxDEV101(
              CountriesCombobox,
              {
                value: countryName,
                setValue: setCountryName
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard/settings/_index/_route.tsx",
                lineNumber: 145,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV101(
              "input",
              {
                type: "hidden",
                value: countryName,
                ...conform3.input(country)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard/settings/_index/_route.tsx",
                lineNumber: 150,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard/settings/_index/_route.tsx",
            lineNumber: 144,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV101("div", { className: "basis-1/3", children: /* @__PURE__ */ jsxDEV101(
            Input,
            {
              label: "Province",
              placeholder: "Province",
              error: province.error,
              ...conform3.input(province)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/settings/_index/_route.tsx",
              lineNumber: 158,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard/settings/_index/_route.tsx",
            lineNumber: 157,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV101("div", { className: "basis-1/3", children: /* @__PURE__ */ jsxDEV101(
            Input,
            {
              label: "City",
              placeholder: "City",
              error: city.error,
              ...conform3.input(city)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/settings/_index/_route.tsx",
              lineNumber: 167,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard/settings/_index/_route.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard/settings/_index/_route.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/settings/_index/_route.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV101(CardFooter, { className: "gap-5", children: [
        /* @__PURE__ */ jsxDEV101(
          Link28,
          {
            to: "/dashboard/overview",
            className: cn(buttonVariants({ variant: "outline", size: "lg" })),
            children: "Go back"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/settings/_index/_route.tsx",
            lineNumber: 178,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV101(Button, { size: "lg", children: isSubmitting ? /* @__PURE__ */ jsxDEV101(Loader27, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, !1, {
          fileName: "app/routes/dashboard/settings/_index/_route.tsx",
          lineNumber: 186,
          columnNumber: 17
        }, this) : "Save" }, void 0, !1, {
          fileName: "app/routes/dashboard/settings/_index/_route.tsx",
          lineNumber: 184,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/settings/_index/_route.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/settings/_index/_route.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/settings/_index/_route.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/settings/_index/_route.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/settings/security/_route.tsx
var route_exports19 = {};
__export(route_exports19, {
  action: () => action6,
  default: () => _route15,
  meta: () => meta18
});
import bcrypt3 from "bcryptjs";
import { json as json15 } from "@remix-run/node";
import { conform as conform4, useForm as useForm4 } from "@conform-to/react";
import { parse as parse4 } from "@conform-to/zod";
import { z as z4 } from "zod";
import { Link as Link29, useFetcher as useFetcher10 } from "@remix-run/react";
import { Loader2 as Loader28 } from "lucide-react";
import { jsxDEV as jsxDEV102 } from "react/jsx-dev-runtime";
var meta18 = () => [
  { title: "Settings: Security | Remix templates" }
], schema4 = z4.object({
  currentPassword: z4.string({ required_error: "Current password is required" }).min(4, "Current password must be at least 4 characters."),
  newPassword: z4.string({ required_error: "New password is required" }).min(4, "New password must be at least 4 characters."),
  confirmNewPassword: z4.string({ required_error: "Confirm new password is required" }).min(4, "Confirm new password must be at least 4 characters.")
}).superRefine(({ currentPassword, newPassword, confirmNewPassword }, ctx) => {
  newPassword === currentPassword && ctx.addIssue({
    code: z4.ZodIssueCode.custom,
    path: ["newPassword"],
    message: "New password must be different from the current password."
  }), newPassword !== confirmNewPassword && ctx.addIssue({
    code: z4.ZodIssueCode.custom,
    path: ["confirmNewPassword"],
    message: "Confirm password must match the new password"
  });
});
async function action6({ request }) {
  let userId = await requireUserId(request), formData = await request.formData(), submission = parse4(formData, { schema: schema4 });
  if (!submission.value)
    return json15(submission, { status: 400 });
  let userWithPassword = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      password: !0
    }
  });
  return !userWithPassword || !userWithPassword.password ? json15(
    {
      ...submission,
      user: "User not found"
    },
    { status: 400 }
  ) : await bcrypt3.compare(
    submission.value.currentPassword,
    userWithPassword.password.hash
  ) ? (await bcrypt3.hash(submission.value.newPassword, 10), json15(submission)) : json15(
    {
      ...submission,
      error: { currentPassword: ["Current password is incorrect"] }
    },
    { status: 400 }
  );
}
function _route15() {
  let editPasswordFetcher = useFetcher10(), actionData = editPasswordFetcher.data, isSubmitting = editPasswordFetcher.state !== "idle", [form, { currentPassword, newPassword, confirmNewPassword }] = useForm4({
    lastSubmission: actionData,
    id: "password",
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parse4(formData, { schema: schema4 });
    }
  });
  return /* @__PURE__ */ jsxDEV102(Card, { className: "basis-8/12", children: [
    /* @__PURE__ */ jsxDEV102(CardHeader, { children: /* @__PURE__ */ jsxDEV102(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV102("span", { children: "Security" }, void 0, !1, {
        fileName: "app/routes/dashboard/settings/security/_route.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV102(InfoTooltip, { message: "Update password" }, void 0, !1, {
        fileName: "app/routes/dashboard/settings/security/_route.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/settings/security/_route.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/settings/security/_route.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV102(editPasswordFetcher.Form, { method: "PUT", ...form.props, children: /* @__PURE__ */ jsxDEV102("fieldset", { className: "disabled:opacity-70", disabled: isSubmitting, children: [
      /* @__PURE__ */ jsxDEV102(CardContent, { className: "my-6 space-y-6 border-y border-secondary-100 py-8", children: [
        /* @__PURE__ */ jsxDEV102(
          Input,
          {
            label: "Current password",
            placeholder: "Current password",
            error: currentPassword.error ?? actionData?.error.currentPassword?.[0],
            ...conform4.input(currentPassword, {
              type: "password"
            })
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/settings/security/_route.tsx",
            lineNumber: 145,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV102(
          Input,
          {
            label: "New password",
            placeholder: "New password",
            error: newPassword.error,
            ...conform4.input(newPassword, {
              type: "password"
            })
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/settings/security/_route.tsx",
            lineNumber: 156,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV102("em", { className: "text-gray text-xs leading-loose", children: "At least 4 characters" }, void 0, !1, {
          fileName: "app/routes/dashboard/settings/security/_route.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV102(
          Input,
          {
            label: "Confirm new password",
            placeholder: "Confirm new password",
            error: confirmNewPassword.error,
            ...conform4.input(confirmNewPassword, {
              type: "password"
            })
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/settings/security/_route.tsx",
            lineNumber: 169,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/settings/security/_route.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV102(CardFooter, { className: "gap-5", children: [
        /* @__PURE__ */ jsxDEV102(
          Link29,
          {
            to: "/dashboard/overview",
            className: cn(buttonVariants({ variant: "outline", size: "lg" })),
            children: "Go back"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/settings/security/_route.tsx",
            lineNumber: 180,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV102(Button, { size: "lg", children: isSubmitting ? /* @__PURE__ */ jsxDEV102(Loader28, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, !1, {
          fileName: "app/routes/dashboard/settings/security/_route.tsx",
          lineNumber: 188,
          columnNumber: 17
        }, this) : "Save" }, void 0, !1, {
          fileName: "app/routes/dashboard/settings/security/_route.tsx",
          lineNumber: 186,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/settings/security/_route.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/settings/security/_route.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/settings/security/_route.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/settings/security/_route.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/wallets/card.$cardId.details/_route.tsx
var route_exports20 = {};
__export(route_exports20, {
  action: () => action7,
  default: () => _route16,
  editCardSchema: () => editCardSchema,
  loader: () => loader16,
  meta: () => meta19
});
import { json as json16, redirect as redirect6 } from "@remix-run/node";
import invariant7 from "tiny-invariant";
import { z as z5 } from "zod";
import { parse as parse6 } from "@conform-to/zod";

// app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx
import {
  Form as Form5,
  Link as Link30,
  useActionData as useActionData3,
  useLoaderData as useLoaderData12,
  useNavigation as useNavigation4
} from "@remix-run/react";
import { conform as conform5, useForm as useForm5 } from "@conform-to/react";
import { parse as parse5 } from "@conform-to/zod";
import { useId as useId4, useState as useState14 } from "react";

// app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx
import Card2 from "react-credit-cards-2";
import { jsxDEV as jsxDEV103 } from "react/jsx-dev-runtime";
function CardDesign({ card, handleCallback }) {
  return /* @__PURE__ */ jsxDEV103(Card, { className: "h-min basis-full space-y-4 lg:basis-2/12", children: [
    /* @__PURE__ */ jsxDEV103(CardHeader, { children: /* @__PURE__ */ jsxDEV103(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV103("span", { children: "Card Design" }, void 0, !1, {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV103(InfoTooltip, { message: "Your card design" }, void 0, !1, {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV103(CardContent, { children: /* @__PURE__ */ jsxDEV103(
      Card2,
      {
        name: card.name,
        number: card.number,
        expiry: card.expiry,
        cvc: card.cvc,
        callback: handleCallback
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardDesign.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/utils/payment.ts
import Payment from "payment";
function clearNumber(value = "") {
  return value.replace(/\D+/g, "");
}
function formatCreditCardNumber(value) {
  if (!value)
    return value;
  let issuer = Payment.fns.cardType(value), clearValue = clearNumber(value), nextValue;
  switch (issuer) {
    case "amex":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`;
      break;
    case "dinersclub":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
      break;
  }
  return nextValue.trim();
}
function formatCVC(value, prevValue, allValues = {}) {
  let clearValue = clearNumber(value), maxLength = 4;
  return allValues.number && (maxLength = Payment.fns.cardType(allValues.number) === "amex" ? 4 : 3), clearValue.slice(0, maxLength);
}
function formatExpirationDate(value) {
  let clearValue = clearNumber(value);
  return clearValue.length >= 3 ? `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}` : clearValue;
}

// app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx
import { Loader2 as Loader29 } from "lucide-react";
import { jsxDEV as jsxDEV104 } from "react/jsx-dev-runtime";
function CardForm() {
  let id = useId4(), { cardInfo } = useLoaderData12(), [card, setCard] = useState14({
    name: cardInfo.name,
    number: cardInfo.number,
    expiry: cardInfo.expiry,
    cvc: cardInfo.cvc,
    issuer: "",
    focused: ""
  }), actionData = useActionData3(), navigation = useNavigation4(), [form, fieldset] = useForm5({
    lastSubmission: actionData,
    id,
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parse5(formData, { schema: editCardSchema });
    },
    defaultValue: {
      name: cardInfo.name,
      number: cardInfo.number,
      expiry: cardInfo.expiry,
      cvc: cardInfo.cvc,
      amount: cardInfo.amount
    }
  }), handleCallback = ({ issuer }, isValid) => {
    isValid && setCard({ ...card, issuer });
  }, handleInputFocus = ({ target }) => {
    setCard({ ...card, focused: target.name });
  }, handleInputChange = ({ target }) => {
    target.name === "number" ? target.value = formatCreditCardNumber(target.value) : target.name === "expiry" ? target.value = formatExpirationDate(target.value) : target.name === "cvc" && (target.value = formatCVC(target.value)), setCard({ ...card, [target.name]: target.value });
  };
  return /* @__PURE__ */ jsxDEV104("div", { className: "flex flex-col gap-5 lg:flex-row", children: [
    /* @__PURE__ */ jsxDEV104(Card, { className: "h-min basis-full space-y-4 lg:basis-10/12", children: [
      /* @__PURE__ */ jsxDEV104(CardHeader, { children: /* @__PURE__ */ jsxDEV104(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV104("span", { children: "Card details" }, void 0, !1, {
          fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV104(InfoTooltip, { message: "Edit your card details" }, void 0, !1, {
          fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV104(Form5, { method: "PUT", className: "mx-auto w-full", ...form.props, children: /* @__PURE__ */ jsxDEV104(
        "fieldset",
        {
          className: "w-full space-y-3 disabled:opacity-70",
          disabled: navigation.state !== "idle",
          children: [
            /* @__PURE__ */ jsxDEV104(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV104(
                Input,
                {
                  label: "Name on card",
                  placeholder: "Email",
                  value: card.name,
                  onChange: handleInputChange,
                  onFocus: handleInputFocus,
                  error: fieldset.name.error,
                  ...conform5.input(fieldset.name)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                  lineNumber: 105,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV104(
                Input,
                {
                  label: "Card number",
                  placeholder: "Card Number",
                  value: card.number,
                  onChange: handleInputChange,
                  onFocus: handleInputFocus,
                  error: fieldset.number.error,
                  ...conform5.input(fieldset.number)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                  lineNumber: 115,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV104("div", { className: "flex w-full flex-col gap-5 md:flex-row", children: [
                /* @__PURE__ */ jsxDEV104("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV104(
                  Input,
                  {
                    label: "Expiry Date",
                    placeholder: "Expiry Date",
                    value: card.expiry,
                    onChange: handleInputChange,
                    onFocus: handleInputFocus,
                    error: fieldset.expiry.error,
                    ...conform5.input(fieldset.expiry, {
                      type: "tel"
                    })
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                    lineNumber: 127,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                  lineNumber: 126,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV104("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV104(
                  Input,
                  {
                    label: "CVC/CVV",
                    placeholder: "CVC/CVV",
                    value: card.cvc,
                    onChange: handleInputChange,
                    onFocus: handleInputFocus,
                    error: fieldset.cvc.error,
                    ...conform5.input(fieldset.cvc, {
                      type: "tel"
                    })
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                    lineNumber: 141,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                  lineNumber: 140,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                lineNumber: 125,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV104(
                Input,
                {
                  label: "Amount",
                  placeholder: "Card amount",
                  error: fieldset.amount.error,
                  ...conform5.input(fieldset.amount, {
                    type: "number"
                  })
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                  lineNumber: 155,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
              lineNumber: 104,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV104(CardFooter, { className: "gap-4 pt-5", children: [
              /* @__PURE__ */ jsxDEV104(
                Link30,
                {
                  to: "/dashboard/wallets",
                  className: buttonVariants({ variant: "outline", size: "lg" }),
                  children: "Go back"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                  lineNumber: 166,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV104(Button, { size: "lg", children: navigation.state !== "idle" ? /* @__PURE__ */ jsxDEV104(Loader29, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, !1, {
                fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                lineNumber: 174,
                columnNumber: 19
              }, this) : "Save" }, void 0, !1, {
                fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
                lineNumber: 172,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
              lineNumber: 165,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
          lineNumber: 100,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV104(CardDesign, { card, handleCallback }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/wallets/card.$cardId.details/components/CardForm.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/wallets/card.$cardId.details/_route.tsx
import { Fragment as Fragment20, jsxDEV as jsxDEV105 } from "react/jsx-dev-runtime";
var meta19 = () => [
  { title: "Card details | Remix Template" }
], loader16 = async ({ request, params }) => {
  invariant7(params.cardId, "Card id should be defined");
  let card = await prisma.card.findUnique({
    where: { id: params.cardId }
  });
  if (!card)
    throw new Response("Card not found", { status: 404 });
  return json16({ cardInfo: card });
}, editCardSchema = z5.object({
  name: z5.string({ required_error: "Card holder name is required" }),
  number: z5.string({ required_error: "Card number is required" }),
  expiry: z5.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),
  cvc: z5.string().regex(/^[0-9]{3,4}$/),
  amount: z5.number()
}), action7 = async ({ request, params }) => {
  invariant7(params.cardId, "Card id should be defined");
  let formData = await request.formData(), submission = parse6(formData, { schema: editCardSchema });
  if (!submission.value || submission.intent !== "submit")
    return json16(submission, { status: 400 });
  let userId = await requireUserId(request), currentCardAmount = await prisma.card.findUnique({
    where: { id: params.cardId },
    select: { amount: !0 }
  });
  if (!currentCardAmount)
    throw new Response("Card not found", { status: 404 });
  await updateUserBalance({
    userId,
    amount: -currentCardAmount.amount,
    type: "Receive"
  });
  let card = await prisma.card.update({
    where: {
      id: params.cardId
    },
    data: {
      ...submission.value,
      userId
    }
  });
  return await updateUserBalance({ userId, amount: card.amount, type: "Receive" }), redirect6("/dashboard/wallets");
};
function _route16() {
  return /* @__PURE__ */ jsxDEV105(Fragment20, { children: [
    /* @__PURE__ */ jsxDEV105("div", { className: "w-screen bg-[#1C2634]", children: /* @__PURE__ */ jsxDEV105(Container, { className: "pb-40 pt-28 lg:px-0", children: /* @__PURE__ */ jsxDEV105(
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
      !1,
      {
        fileName: "app/routes/dashboard/wallets/card.$cardId.details/_route.tsx",
        lineNumber: 89,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/_route.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/_route.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV105(Container, { className: "relative -top-32  h-auto w-full  lg:px-0", children: /* @__PURE__ */ jsxDEV105(CardForm, {}, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/_route.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/card.$cardId.details/_route.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/wallets/card.$cardId.details/_route.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/wallets/index/_route.tsx
var route_exports21 = {};
__export(route_exports21, {
  default: () => _route17,
  loader: () => loader17,
  meta: () => meta20
});
import { json as json17 } from "@remix-run/node";
import { useLoaderData as useLoaderData14 } from "@remix-run/react";
import { ClientOnly as ClientOnly3 } from "remix-utils/client-only";

// app/routes/dashboard/wallets/index/components/CardList.tsx
import Card4 from "react-credit-cards-2";
import { Link as Link31, useLoaderData as useLoaderData13 } from "@remix-run/react";

// app/routes/dashboard/wallets/index/components/NewCardDialog.tsx
import * as DialogPrimitive6 from "@radix-ui/react-dialog";
import { Form as Form6, useNavigation as useNavigation5 } from "@remix-run/react";
import { Loader2 as Loader210, X as X5 } from "lucide-react";
import { useState as useState15 } from "react";
import Card3 from "react-credit-cards-2";
import { jsxDEV as jsxDEV106 } from "react/jsx-dev-runtime";
function NewCardDialog() {
  let [card, setCard] = useState15({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: ""
  }), navigation = useNavigation5(), handleCallback = ({ issuer }, isValid) => {
    isValid && setCard({ ...card, issuer });
  }, handleInputFocus = ({ target }) => {
    setCard({ ...card, focused: target.name });
  }, handleInputChange = ({ target }) => {
    target.name === "number" ? target.value = formatCreditCardNumber(target.value) : target.name === "expiry" ? target.value = formatExpirationDate(target.value) : target.name === "cvc" && (target.value = formatCVC(target.value)), setCard({ ...card, [target.name]: target.value });
  };
  return /* @__PURE__ */ jsxDEV106(Dialog, { children: [
    /* @__PURE__ */ jsxDEV106(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV106(Button, { type: "button", variant: "outline", size: "lg", className: "w-full", children: "Add new card" }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV106(
      DialogContent,
      {
        onPointerDownOutside: (e) => navigation.state !== "idle" ? e.preventDefault() : null,
        className: "p-6 sm:max-w-[480px] lg:p-8",
        children: /* @__PURE__ */ jsxDEV106(ScrollArea, { className: "h-[500px] lg:h-auto", children: /* @__PURE__ */ jsxDEV106(
          Form6,
          {
            method: "POST",
            action: "/resources/new-card",
            className: "mx-auto w-full",
            children: [
              /* @__PURE__ */ jsxDEV106(DialogHeader, { className: "flex w-full items-center justify-center", children: [
                /* @__PURE__ */ jsxDEV106("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV106(DialogPrimitive6.Close, { asChild: !0, children: /* @__PURE__ */ jsxDEV106(
                  Button,
                  {
                    variant: "link",
                    size: "icon",
                    className: "text-secondary-500 hover:text-primary-500",
                    children: /* @__PURE__ */ jsxDEV106(X5, {}, void 0, !1, {
                      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                      lineNumber: 89,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                    lineNumber: 84,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                  lineNumber: 83,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                  lineNumber: 82,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV106(DialogTitle, { className: "text-[32px] font-bold", children: "Add New Card" }, void 0, !1, {
                  fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                  lineNumber: 94,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV106(DialogDescription, { className: "text-center", children: "add a new card for your transaction" }, void 0, !1, {
                  fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                  lineNumber: 98,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                lineNumber: 81,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV106(
                "fieldset",
                {
                  className: "w-full space-y-3 disabled:opacity-70",
                  disabled: navigation.state !== "idle",
                  children: [
                    /* @__PURE__ */ jsxDEV106(Card3, { ...card, callback: handleCallback }, void 0, !1, {
                      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                      lineNumber: 107,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ jsxDEV106(
                      Input,
                      {
                        name: "name",
                        label: "Card Holder Name",
                        placeholder: "Card Holder Name",
                        value: card.name,
                        onChange: handleInputChange,
                        onFocus: handleInputFocus,
                        required: !0
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                        lineNumber: 109,
                        columnNumber: 15
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV106(
                      Input,
                      {
                        name: "number",
                        label: "Card Number",
                        placeholder: "Card Number",
                        value: card.number,
                        onChange: handleInputChange,
                        onFocus: handleInputFocus,
                        required: !0
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                        lineNumber: 119,
                        columnNumber: 15
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV106("div", { className: "flex w-full flex-col gap-5 md:flex-row", children: [
                      /* @__PURE__ */ jsxDEV106("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV106(
                        Input,
                        {
                          name: "expiry",
                          type: "tel",
                          label: "Expiry Date",
                          placeholder: "Expiry Date",
                          value: card.expiry,
                          onChange: handleInputChange,
                          onFocus: handleInputFocus,
                          required: !0
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                          lineNumber: 131,
                          columnNumber: 19
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ jsxDEV106("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV106(
                        Input,
                        {
                          name: "cvc",
                          type: "tel",
                          label: "CVC/CVV",
                          placeholder: "CVC/CVV",
                          value: card.cvc,
                          onChange: handleInputChange,
                          onFocus: handleInputFocus,
                          required: !0
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                          lineNumber: 144,
                          columnNumber: 19
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                        lineNumber: 143,
                        columnNumber: 17
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                      lineNumber: 129,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ jsxDEV106(DialogFooter, { className: "w-full pt-4", children: /* @__PURE__ */ jsxDEV106(Button, { size: "lg", type: "submit", className: "w-full", children: navigation.state !== "idle" ? /* @__PURE__ */ jsxDEV106(Loader210, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, !1, {
                      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                      lineNumber: 160,
                      columnNumber: 21
                    }, this) : "Confirm" }, void 0, !1, {
                      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                      lineNumber: 158,
                      columnNumber: 17
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
                      lineNumber: 157,
                      columnNumber: 15
                    }, this)
                  ]
                },
                void 0,
                !0,
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
          !0,
          {
            fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
            lineNumber: 76,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
        lineNumber: 69,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/wallets/index/components/NewCardDialog.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/wallets/index/components/CardList.tsx
import { jsxDEV as jsxDEV107 } from "react/jsx-dev-runtime";
function CardList() {
  let { cards } = useLoaderData13();
  return /* @__PURE__ */ jsxDEV107(Card, { className: "h-min space-y-4", children: [
    /* @__PURE__ */ jsxDEV107(CardHeader, { children: /* @__PURE__ */ jsxDEV107(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV107("span", { children: "Card Lists" }, void 0, !1, {
        fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV107(InfoTooltip, { message: "All card available" }, void 0, !1, {
        fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV107(CardContent, { children: /* @__PURE__ */ jsxDEV107(ScrollArea, { className: "h-[340px]", children: /* @__PURE__ */ jsxDEV107("div", { className: "flex flex-col gap-5 py-4", children: cards.map((card) => /* @__PURE__ */ jsxDEV107(
      Link31,
      {
        to: `card/${card.id}/details`,
        prefetch: "intent",
        children: /* @__PURE__ */ jsxDEV107(
          Card4,
          {
            name: card.name,
            number: card.number,
            expiry: card.expiry,
            cvc: card.cvc
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
            lineNumber: 37,
            columnNumber: 17
          },
          this
        )
      },
      card.id,
      !1,
      {
        fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
        lineNumber: 32,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV107(CardFooter, { children: /* @__PURE__ */ jsxDEV107(NewCardDialog, {}, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/wallets/index/components/CardList.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/wallets/index/components/QuickTransfer.tsx
import { useRef as useRef3, useState as useState16 } from "react";
import Slider3 from "react-slick";
import { useFetcher as useFetcher11 } from "@remix-run/react";
import { Loader2 as Loader211 } from "lucide-react";
import { Fragment as Fragment21, jsxDEV as jsxDEV108 } from "react/jsx-dev-runtime";
function QuickTransfer({ contacts }) {
  let [selectContact, setSelectContact] = useState16(0), carouselRef = useRef3(null), quickTransferFetcher = useFetcher11();
  console.log(quickTransferFetcher.data);
  let sliderSettings = {
    dots: !1,
    arrows: !1,
    slidesToShow: 7,
    centerMode: !0,
    swipeToSlide: !0,
    focusOnSelect: !0,
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
  }, handlePrev = () => {
    carouselRef.current?.slickPrev();
  }, handleNext = () => {
    carouselRef.current?.slickNext();
  };
  return /* @__PURE__ */ jsxDEV108(Card, { className: "h-min basis-7/12 space-y-4", children: [
    /* @__PURE__ */ jsxDEV108(CardHeader, { children: /* @__PURE__ */ jsxDEV108(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV108("span", { children: "Quick Transfer" }, void 0, !1, {
        fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV108(InfoTooltip, { message: "Make a transfer" }, void 0, !1, {
        fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV108(CardContent, { children: /* @__PURE__ */ jsxDEV108("div", { className: "relative mx-auto max-h-[120px] max-w-[450px]", children: [
      /* @__PURE__ */ jsxDEV108(
        "button",
        {
          className: "absolute -left-4 top-[40%] z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-[0px_4px_24px_0px_rgba(0,0,0,0.14)]",
          onClick: handlePrev,
          children: /* @__PURE__ */ jsxDEV108(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              children: /* @__PURE__ */ jsxDEV108(
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
                !1,
                {
                  fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                  lineNumber: 89,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
              lineNumber: 82,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
          lineNumber: 78,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV108(Slider3, { ref: carouselRef, ...sliderSettings, children: contacts.map((contact, index) => /* @__PURE__ */ jsxDEV108(
        "div",
        {
          className: cn(
            selectContact === index ? "opacity-100" : "opacity-40",
            "w-5 cursor-pointer p-2 text-center"
          ),
          children: [
            /* @__PURE__ */ jsxDEV108(
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
              !1,
              {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 109,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV108(
              Paragraph,
              {
                variant: "body3",
                className: "whitespace-nowrap font-semibold text-secondary-500",
                children: contact.fullName
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 118,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV108(
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
              !0,
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
        !0,
        {
          fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
          lineNumber: 102,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV108(
        "button",
        {
          onClick: handleNext,
          className: "absolute -right-4 top-[40%] flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-[0px_4px_24px_0px_rgba(0,0,0,0.14)]",
          children: [
            /* @__PURE__ */ jsxDEV108(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                children: /* @__PURE__ */ jsxDEV108(
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
                  !1,
                  {
                    fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                    lineNumber: 145,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
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
        !0,
        {
          fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
          lineNumber: 134,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV108(CardFooter, { className: "pt-4", children: /* @__PURE__ */ jsxDEV108(
      quickTransferFetcher.Form,
      {
        method: "POST",
        action: "/resources/operation",
        className: "w-full",
        children: /* @__PURE__ */ jsxDEV108(
          "fieldset",
          {
            className: "flex w-full flex-col items-center gap-4 disabled:opacity-70 lg:flex-row",
            disabled: quickTransferFetcher.state !== "idle",
            children: [
              /* @__PURE__ */ jsxDEV108("div", { className: "relative w-full", children: [
                /* @__PURE__ */ jsxDEV108(
                  "img",
                  {
                    src: "/icons/dollar.svg",
                    alt: "dollar",
                    className: cn(
                      quickTransferFetcher.data?.error ? "top-[37%]" : "top-1/2",
                      "absolute left-3 -translate-y-1/2 transform"
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                    lineNumber: 169,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV108(
                  Input,
                  {
                    type: "number",
                    name: "amount",
                    placeholder: "Amount",
                    className: "w-full pl-10",
                    step: "0.01",
                    error: quickTransferFetcher.data?.error ? "true" : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                    lineNumber: 177,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 168,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV108(
                "input",
                {
                  type: "hidden",
                  name: "contactId",
                  value: contacts[selectContact].id
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                  lineNumber: 187,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV108("input", { type: "hidden", name: "type", value: "Transfer" }, void 0, !1, {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 192,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV108(Button, { size: "lg", className: "w-full min-w-[140px] lg:w-auto", children: quickTransferFetcher.state !== "idle" ? /* @__PURE__ */ jsxDEV108(Loader211, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, !1, {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 196,
                columnNumber: 17
              }, this) : /* @__PURE__ */ jsxDEV108(Fragment21, { children: [
                " ",
                "Send",
                " ",
                /* @__PURE__ */ jsxDEV108(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "25",
                    height: "24",
                    viewBox: "0 0 25 24",
                    fill: "none",
                    className: "ml-2",
                    children: [
                      /* @__PURE__ */ jsxDEV108(
                        "path",
                        {
                          d: "M7.89969 6.32015L16.3897 3.49015C20.1997 2.22015 22.2697 4.30015 21.0097 8.11015L18.1797 16.6002C16.2797 22.3102 13.1597 22.3102 11.2597 16.6002L10.4197 14.0802L7.89969 13.2402C2.18969 11.3402 2.18969 8.23015 7.89969 6.32015Z",
                          stroke: "white",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                          lineNumber: 209,
                          columnNumber: 21
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV108(
                        "path",
                        {
                          d: "M10.6104 13.6496L14.1904 10.0596",
                          stroke: "white",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        },
                        void 0,
                        !1,
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
                  !0,
                  {
                    fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                    lineNumber: 201,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 198,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
                lineNumber: 194,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
            lineNumber: 164,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
        lineNumber: 159,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/wallets/index/components/QuickTransfer.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/wallets/index/components/index.ts
var import_BalanceAnalytics = __toESM(require_BalanceAnalytics());

// app/routes/dashboard/wallets/index/_route.tsx
import { Fragment as Fragment22, jsxDEV as jsxDEV109 } from "react/jsx-dev-runtime";
var meta20 = () => [
  { title: "Wallets | Remix Template" }
];
async function loader17({ request }) {
  let userId = await requireUserId(request), contacts = await getContacts(), cards = await prisma.card.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" }
  }), incomeDataForYearBarChart = await getIncomeDataForYearChart(), expenseDataForYearBarChart = await getExpenseDataForYearChart();
  return json17({
    contacts,
    cards,
    incomeDataForYearBarChart,
    expenseDataForYearBarChart
  });
}
function _route17() {
  let { contacts } = useLoaderData14();
  return /* @__PURE__ */ jsxDEV109(Fragment22, { children: [
    /* @__PURE__ */ jsxDEV109("div", { className: "w-screen bg-[#1C2634]", children: /* @__PURE__ */ jsxDEV109(Container, { className: "pb-40 pt-28 xl:px-0", children: /* @__PURE__ */ jsxDEV109(
      Breadcrumb,
      {
        heading: "Wallets",
        links: [
          { name: "Dashboard", href: "/dashboard/overview" },
          { name: "Wallets", href: "" }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/wallets/index/_route.tsx",
        lineNumber: 49,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/_route.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/_route.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV109(Container, { className: "relative -top-32 h-auto w-full xl:px-0", children: /* @__PURE__ */ jsxDEV109("div", { className: "flex h-auto w-full flex-col gap-5 lg:flex-row", children: [
      /* @__PURE__ */ jsxDEV109("div", { className: "space-y-5 lg:w-[29%]", children: [
        /* @__PURE__ */ jsxDEV109(TotalBalance, { contacts }, void 0, !1, {
          fileName: "app/routes/dashboard/wallets/index/_route.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV109(CardList, {}, void 0, !1, {
          fileName: "app/routes/dashboard/wallets/index/_route.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/wallets/index/_route.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV109("div", { className: "space-y-5 lg:w-[71%]", children: [
        /* @__PURE__ */ jsxDEV109(
          ClientOnly3,
          {
            fallback: /* @__PURE__ */ jsxDEV109("div", { className: "flex h-80 w-full items-center justify-center rounded-2xl bg-white lg:h-[500px]", children: /* @__PURE__ */ jsxDEV109("p", { children: "Loading" }, void 0, !1, {
              fileName: "app/routes/dashboard/wallets/index/_route.tsx",
              lineNumber: 71,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard/wallets/index/_route.tsx",
              lineNumber: 70,
              columnNumber: 17
            }, this),
            children: () => /* @__PURE__ */ jsxDEV109(import_BalanceAnalytics.default, {}, void 0, !1, {
              fileName: "app/routes/dashboard/wallets/index/_route.tsx",
              lineNumber: 75,
              columnNumber: 22
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard/wallets/index/_route.tsx",
            lineNumber: 68,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV109("div", { className: "flex w-full flex-col gap-5 xl:flex-row", children: [
          /* @__PURE__ */ jsxDEV109(QuickTransfer, { contacts }, void 0, !1, {
            fileName: "app/routes/dashboard/wallets/index/_route.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV109("div", { className: "basis-5/12", children: /* @__PURE__ */ jsxDEV109(Currency, {}, void 0, !1, {
            fileName: "app/routes/dashboard/wallets/index/_route.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard/wallets/index/_route.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard/wallets/index/_route.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/wallets/index/_route.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/wallets/index/_route.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/wallets/index/_route.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/wallets/index/_route.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/resources/new-card/_route.tsx
var route_exports22 = {};
__export(route_exports22, {
  action: () => action8
});
import { redirect as redirect7 } from "@remix-run/node";
async function action8({ request }) {
  let formData = await request.formData(), { name, number, expiry, cvc } = Object.fromEntries(formData), userId = await requireUserId(request), card = await prisma.card.create({
    data: {
      name,
      number,
      expiry,
      cvc,
      amount: 46782,
      // add default amount to card
      userId
    }
  });
  return await updateUserBalance({ userId, amount: 46782, type: "Receive" }), redirect7(`/dashboard/wallets/card/${card.id}/details`);
}

// app/routes/resources/notification/_route.tsx
var route_exports23 = {};
__export(route_exports23, {
  action: () => action9
});
import { json as json18 } from "@remix-run/node";
async function action9({ request }) {
  let userId = await requireUserId(request), read = (await request.formData()).get("read");
  return console.log("[[[[[[]]]]]] test", read), await prisma.notification.updateMany({
    where: { userId, read: !1 },
    data: { read: !0 }
  }), json18({ message: "success" });
}

// app/routes/resources/operation/_route.tsx
var route_exports24 = {};
__export(route_exports24, {
  action: () => action10
});
import { json as json19 } from "@remix-run/node";
async function action10({ request }) {
  let userId = await requireUserId(request), formData = await request.formData(), { contactId, amount, type } = Object.fromEntries(
    formData.entries()
  );
  if (!contactId || !amount || 0 > Number(amount))
    return json19({ message: null, error: "Invalid data" }, { status: 400 });
  let user = await getUser(request);
  if (!user)
    return json19({ message: null, error: "User not found" }, { status: 404 });
  if (type === "Transfer" && user.balance < Number(amount))
    return json19(
      {
        message: null,
        error: "Insufficient balance. Edit or Add a new card"
      },
      { status: 400 }
    );
  let contact = await prisma.contact.findUnique({
    where: { id: contactId }
  });
  return contact ? (await prisma.transaction.create({
    data: {
      number: getTransactionNumber(),
      amount: Number(amount),
      contactId,
      userId,
      type,
      status: "Success",
      notification: {
        create: {
          title: type === "Receive" ? `${type} ${formatCurrency(Number(amount))}` : `${type} successful`,
          description: type === "Receive" ? `You received a payment of ${formatCurrency(
            Number(amount)
          )} from ${contact.fullName}` : `You have successfully sent ${type} ${formatCurrency(
            Number(amount)
          )} to ${contact.fullName}`,
          type,
          userId
        }
      }
    }
  }), await updateUserBalance({ userId, amount: Number(amount), type }), json19({ success: "Transfer successful" })) : json19({ message: null, error: "Contact not found" }, { status: 404 });
}

// app/routes/resources/seed/_route.tsx
var route_exports25 = {};
__export(route_exports25, {
  loader: () => loader18
});
import { json as json20 } from "@remix-run/node";
import bcrypt4 from "bcryptjs";

// app/data/accountants.ts
var ACCOUNTANTS = [
  {
    name: "Pilot",
    description: "Pilot handles your startup\u2019s finance, accounting, and tax prep needs, so you can focus on what matters most\u2014building your business. When you work with Pilot, you have a team of US-based accounting experts and fractional CFOs ready to support you at every stage of your company. They're the largest startup accounting provider in the world, and work with 1000+ startups today from pre-seed to Series D.",
    logo: "/images/accountants/pilot.png",
    services: ["Accounting", "Tax", "Bookkeeping", "CFO", "R&D Tax Credit"],
    website: "https://pilot.com",
    address: "San Francisco, CA",
    accountingSoftware: "Xero",
    otherSoftware: [
      "Carta",
      "Expensify",
      "Gusto",
      "Bill.com",
      "Stripe",
      "Plaid"
    ]
  },
  {
    name: "Countsy",
    description: "Countsy provides Finance, Accounting and HR Solutions to venture backed startups. Through a unique combination of an on demand CFO, CPO (Chief People Officer) and streamlined technologies, we free you from back office management and empower you to focus on what matters most. Delighting customers. Perfecting solutions. Accelerating growth. From Payroll and Benefits to GAAP Financials and Board Reporting, you get the support you need to be transaction ready. Efficient. Scalable. Done right.",
    logo: "/images/accountants/counts.png",
    services: ["Accounting", "Tax", "Bookkeeping", "CFO", "R&D Tax Credit"],
    website: "https://www.countsy.com/",
    address: "San Francisco, CA",
    accountingSoftware: "Gusto",
    otherSoftware: ["Quickbooks", "Xero", "Carta", "Bill.com"]
  },
  {
    name: "Kruze Consulting",
    description: "Kruze Consulting is a leading provider of accounting, finance, HR, and tax consulting to seed and venture capital-funded startups. Kruze\u2019s clients have collectively raised over $10 billion in VC financing, and Kruze\u2019s clients are regularly acquired by the largest public technology companies. Kruze Consulting\u2019s tax credit advisory is reducing our clients'\u200B burn by over $10 million this year, and Kruze\u2019s team recommends best-in-class financial and HR systems that help make data-driven startup founders more productive. Visit https://kruzeconsulting.com/ to learn more.",
    logo: "/images/accountants/kruze.png",
    services: ["Accounting", "Tax", "Bookkeeping", "CFO", "R&D Tax Credit"],
    website: "https://kruzeconsulting.com/",
    address: "San Francisco, CA",
    accountingSoftware: "Bill.com",
    otherSoftware: ["Quickbooks", "Xero", "Gusto"]
  },
  // {
  //   name: "KPMG Spark",
  //   description: "KPMG Spark is an online bookkeeping service designed for small business owners. Our technology automates the majority of work associated with bookkeeping, taxes, and payroll, so you can focus on making your business successful. Our team of accountants are available to answer questions, provide advice, and help you understand the numbers.",
  //   image: "/images/accountants/kpmg.png",
  //   services: ["Accounting", "Tax", "Bookkeeping", "CFO", "R&D Tax Credit"],
  //   website: "https://www.kpmgspark.com/",
  //   address: "San Francisco, CA",
  //   accountingSoftware: "Quickbooks",
  //   otherSoftware: ["Quickbooks", "Xero", "Gusto", "Bill.com"],
  // },
  {
    name: "Countabl",
    description: "Countabl is a tech-enabled service that creates the experience of a full financial team for the cost of a part-time employee. Our virtual workforce of bookkeepers, accountants, and financial analysts integrate remotely with startups, small businesses, and non-profits to build and maintain strong financial management practices from day one - through growth and scale.",
    logo: "/images/accountants/countabl.png",
    services: ["Accounting", "Tax", "Bookkeeping", "CFO", "R&D Tax Credit"],
    website: "https://www.countabl.com/",
    address: "San Francisco, CA",
    accountingSoftware: "Xero",
    otherSoftware: ["Quickbooks", "Gusto", "Bill.com"]
  },
  {
    name: "Attivo Partners LLC",
    description: "With our fractional CFO and accounting services, we help founders navigate the complexities of company building through all stages of the journey - raising capital, building business models, operationalizing for scale, and achieving successful exits.",
    logo: "/images/accountants/attivo.png",
    services: ["Accounting", "Tax", "Bookkeeping", "CFO", "R&D Tax Credit"],
    website: "https://www.attivopartners.com/",
    address: "San Francisco, CA",
    accountingSoftware: "Bill.com",
    otherSoftware: ["Quickbooks", "Xero", "Gusto"]
  },
  {
    name: "Bench Accounting",
    description: "Bench is the all-in-one financial solution that helps you grow your business. Get your bookkeeping, tax prep, and filing done by experts\u2014with unlimited advisory services.",
    logo: "/images/accountants/bench.png",
    services: ["Accounting", "Tax", "Bookkeeping", "CFO", "R&D Tax Credit"],
    website: "https://bench.co/",
    address: "San Francisco, CA",
    accountingSoftware: "Xero",
    otherSoftware: ["Carta", "Expensify", "Stripe", "Gusto", "Bill.com"]
  },
  {
    name: "Fondo",
    description: "Fondo is an all-in-one accounting platform backed by Y Combinator that makes Bookkeeping, Tax, and Tax Credits easy for startups. Know your burn rate, runway, and financial details to make important company decisions. Getting your books closed and filing your taxes can also have an ROI. Fondo can help you identify and claim various tax credits that can help extend your startup's runway. We're offering $1,100 off to Brex customers.",
    logo: "/images/accountants/fondo.png",
    services: ["Accounting", "Tax", "Bookkeeping", "CFO", "R&D Tax Credit"],
    website: "https://fondo.io/",
    address: "San Francisco, CA",
    accountingSoftware: "Quickbooks",
    otherSoftware: ["Expensify", "Stripe", "Xero", "Gusto", "Bill.com"]
  },
  {
    name: "Furey",
    description: "Furey is the accounting partner for more than 75 venture-backed startups and counting. We build innovative solutions that combine the best guidance and the smartest technology to help companies make smarter decisions and move forward confidently. Our clients\u2014high-growth companies from many different industries\u2014have raised nearly $2 billion in funding to date.",
    logo: "/images/accountants/furey.png",
    services: ["Accounting", "Tax", "Bookkeeping", "CFO", "R&D Tax Credit"],
    website: "https://fureycpa.com/",
    address: "San Francisco, CA",
    accountingSoftware: "Plaid",
    otherSoftware: [
      "Quickbooks",
      "Xero",
      "Gusto",
      "Bill.com",
      "Expensify",
      "Stripe"
    ]
  },
  {
    name: "TaxTaker",
    description: "Over 80% of startups are missing out on billions of dollars in government sponsored programs. Don't be like that. Thanks to the R&D tax credit and Employee Retention Credit programs, startups are getting back tens of thousands of dollars in free money.",
    logo: "/images/accountants/taxtaker.png",
    services: ["Accounting", "Tax", "Bookkeeping", "CFO", "R&D Tax Credit"],
    website: "https://taxtaker.com/",
    address: "San Francisco, CA",
    accountingSoftware: "Expensify",
    otherSoftware: ["Quickbooks", "Xero", "Gusto", "Bill.com"]
  }
];

// app/data/companies.ts
var COMPANIES2 = [
  {
    name: "Figma",
    logo: "/logos/figma.svg",
    industry: "design"
  },
  {
    name: "Airbnb",
    logo: "/logos/airbnb.svg",
    industry: "hospitality"
  },
  {
    name: "Asana",
    logo: "/logos/asana.svg",
    industry: "management"
  },
  {
    name: "Google Cloud",
    logo: "/logos/google-cloud.svg",
    industry: "cloud computing"
  },
  {
    name: "Jira",
    logo: "/logos/jira.svg",
    industry: "software"
  },
  {
    name: "Netflix",
    logo: "/logos/netflix.svg",
    industry: "entertainment"
  },
  {
    name: "Slack",
    logo: "/logos/slack.svg",
    industry: "software"
  },
  {
    name: "Microsoft Teams",
    logo: "/logos/teams.svg",
    industry: "software"
  },
  {
    name: "Shopify",
    logo: "/logos/shopify.svg",
    industry: "e-commerce"
  },
  {
    name: "Monday.com",
    logo: "/logos/monday.svg",
    industry: "software"
  },
  {
    name: "Notion",
    logo: "/logos/notion.svg",
    industry: "software"
  },
  {
    name: "Arc",
    logo: "/logos/arc.svg",
    industry: "software"
  },
  {
    name: "Facebook",
    logo: "/logos/facebook.svg",
    industry: "social media"
  },
  {
    name: "Loom",
    logo: "/logos/loom.svg",
    industry: "software"
  },
  {
    name: "Neon",
    logo: "/logos/neon.svg",
    industry: "software"
  }
];

// app/data/contacts.ts
var CONTACTS = [
  {
    fullName: "James Taylor",
    email: "james.taylor@example.com",
    username: "jamest",
    avatar: "/avatars/avatar1.png"
  },
  {
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    username: "janesmith",
    avatar: "/avatars/avatar2.png"
  },
  {
    fullName: "Michael Johnson",
    email: "michael.johnson@example.com",
    username: "michaelj",
    avatar: "/avatars/avatar3.png"
  },
  {
    fullName: "Emily Williams",
    email: "emily.williams@example.com",
    username: "emilyw",
    avatar: "/avatars/avatar4.png"
  },
  {
    fullName: "Robert Brown",
    email: "robert.brown@example.com",
    username: "robertb",
    avatar: "/avatars/avatar5.png"
  },
  {
    fullName: "Olivia Davis",
    email: "olivia.davis@example.com",
    username: "oliviad",
    avatar: "/avatars/avatar6.png"
  },
  {
    fullName: "William Miller",
    email: "william.miller@example.com",
    username: "williamm",
    avatar: "/avatars/avatar7.png"
  },
  {
    fullName: "Sophia Wilson",
    email: "sophia.wilson@example.com",
    username: "sophiaw",
    avatar: "/avatars/avatar8.png"
  },
  {
    fullName: "Ava Martinez",
    email: "ava.martinez@example.com",
    username: "avam",
    avatar: "/avatars/avatar10.png"
  }
];

// app/data/transactions.ts
var TRANSACTIONS = [
  {
    number: getTransactionNumber(),
    amount: 39.99,
    type: "Subscribe",
    status: "Success",
    createdAt: new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 5)
  },
  {
    number: getTransactionNumber(),
    amount: 55,
    type: "Transfer",
    status: "Canceled",
    createdAt: new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 20)
  },
  {
    number: getTransactionNumber(),
    amount: 189,
    type: "Subscribe",
    status: "Pending",
    createdAt: new Date((/* @__PURE__ */ new Date()).getFullYear(), 1, 15)
  },
  {
    number: getTransactionNumber(),
    amount: 14.55,
    type: "Transfer",
    status: "Pending",
    createdAt: new Date((/* @__PURE__ */ new Date()).getFullYear(), 2, 1)
  },
  {
    number: getTransactionNumber(),
    amount: 98.99,
    type: "Receive",
    status: "Canceled",
    createdAt: new Date((/* @__PURE__ */ new Date()).getFullYear(), 3, 20)
  },
  {
    number: getTransactionNumber(),
    amount: 588,
    type: "Receive",
    status: "Success",
    createdAt: new Date((/* @__PURE__ */ new Date()).getFullYear(), 2, 2)
  },
  {
    number: getTransactionNumber(),
    amount: 78,
    type: "Transfer",
    status: "Success",
    createdAt: new Date((/* @__PURE__ */ new Date()).getFullYear(), 1, 29)
  },
  {
    number: getTransactionNumber(),
    amount: 99,
    type: "Subscribe",
    status: "Canceled",
    createdAt: new Date((/* @__PURE__ */ new Date()).getFullYear(), 5, 11)
  },
  {
    number: getTransactionNumber(),
    amount: 45.08,
    type: "Receive",
    status: "Pending",
    createdAt: new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 5)
  },
  {
    number: getTransactionNumber(),
    amount: 99,
    type: "Subscribe",
    status: "Canceled",
    createdAt: new Date((/* @__PURE__ */ new Date()).getFullYear(), 6, 5)
  }
];

// app/data/countries.ts
var COUNTRIES = [
  {
    name: "Ascension Island",
    code: "AC",
    emoji: "\u{1F1E6}\u{1F1E8}",
    unicode: "U+1F1E6 U+1F1E8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg"
  },
  {
    name: "Andorra",
    code: "AD",
    emoji: "\u{1F1E6}\u{1F1E9}",
    unicode: "U+1F1E6 U+1F1E9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg"
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    emoji: "\u{1F1E6}\u{1F1EA}",
    unicode: "U+1F1E6 U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg"
  },
  {
    name: "Afghanistan",
    code: "AF",
    emoji: "\u{1F1E6}\u{1F1EB}",
    unicode: "U+1F1E6 U+1F1EB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg"
  },
  {
    name: "Antigua & Barbuda",
    code: "AG",
    emoji: "\u{1F1E6}\u{1F1EC}",
    unicode: "U+1F1E6 U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg"
  },
  {
    name: "Anguilla",
    code: "AI",
    emoji: "\u{1F1E6}\u{1F1EE}",
    unicode: "U+1F1E6 U+1F1EE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg"
  },
  {
    name: "Albania",
    code: "AL",
    emoji: "\u{1F1E6}\u{1F1F1}",
    unicode: "U+1F1E6 U+1F1F1",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg"
  },
  {
    name: "Armenia",
    code: "AM",
    emoji: "\u{1F1E6}\u{1F1F2}",
    unicode: "U+1F1E6 U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg"
  },
  {
    name: "Angola",
    code: "AO",
    emoji: "\u{1F1E6}\u{1F1F4}",
    unicode: "U+1F1E6 U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg"
  },
  {
    name: "Antarctica",
    code: "AQ",
    emoji: "\u{1F1E6}\u{1F1F6}",
    unicode: "U+1F1E6 U+1F1F6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg"
  },
  {
    name: "Argentina",
    code: "AR",
    emoji: "\u{1F1E6}\u{1F1F7}",
    unicode: "U+1F1E6 U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg"
  },
  {
    name: "American Samoa",
    code: "AS",
    emoji: "\u{1F1E6}\u{1F1F8}",
    unicode: "U+1F1E6 U+1F1F8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg"
  },
  {
    name: "Austria",
    code: "AT",
    emoji: "\u{1F1E6}\u{1F1F9}",
    unicode: "U+1F1E6 U+1F1F9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg"
  },
  {
    name: "Australia",
    code: "AU",
    emoji: "\u{1F1E6}\u{1F1FA}",
    unicode: "U+1F1E6 U+1F1FA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg"
  },
  {
    name: "Aruba",
    code: "AW",
    emoji: "\u{1F1E6}\u{1F1FC}",
    unicode: "U+1F1E6 U+1F1FC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg"
  },
  {
    name: "\xC5land Islands",
    code: "AX",
    emoji: "\u{1F1E6}\u{1F1FD}",
    unicode: "U+1F1E6 U+1F1FD",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg"
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    emoji: "\u{1F1E6}\u{1F1FF}",
    unicode: "U+1F1E6 U+1F1FF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg"
  },
  {
    name: "Bosnia & Herzegovina",
    code: "BA",
    emoji: "\u{1F1E7}\u{1F1E6}",
    unicode: "U+1F1E7 U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg"
  },
  {
    name: "Barbados",
    code: "BB",
    emoji: "\u{1F1E7}\u{1F1E7}",
    unicode: "U+1F1E7 U+1F1E7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg"
  },
  {
    name: "Bangladesh",
    code: "BD",
    emoji: "\u{1F1E7}\u{1F1E9}",
    unicode: "U+1F1E7 U+1F1E9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg"
  },
  {
    name: "Belgium",
    code: "BE",
    emoji: "\u{1F1E7}\u{1F1EA}",
    unicode: "U+1F1E7 U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg"
  },
  {
    name: "Burkina Faso",
    code: "BF",
    emoji: "\u{1F1E7}\u{1F1EB}",
    unicode: "U+1F1E7 U+1F1EB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg"
  },
  {
    name: "Bulgaria",
    code: "BG",
    emoji: "\u{1F1E7}\u{1F1EC}",
    unicode: "U+1F1E7 U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg"
  },
  {
    name: "Bahrain",
    code: "BH",
    emoji: "\u{1F1E7}\u{1F1ED}",
    unicode: "U+1F1E7 U+1F1ED",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg"
  },
  {
    name: "Burundi",
    code: "BI",
    emoji: "\u{1F1E7}\u{1F1EE}",
    unicode: "U+1F1E7 U+1F1EE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg"
  },
  {
    name: "Benin",
    code: "BJ",
    emoji: "\u{1F1E7}\u{1F1EF}",
    unicode: "U+1F1E7 U+1F1EF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg"
  },
  {
    name: "St. Barth\xE9lemy",
    code: "BL",
    emoji: "\u{1F1E7}\u{1F1F1}",
    unicode: "U+1F1E7 U+1F1F1",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg"
  },
  {
    name: "Bermuda",
    code: "BM",
    emoji: "\u{1F1E7}\u{1F1F2}",
    unicode: "U+1F1E7 U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg"
  },
  {
    name: "Brunei",
    code: "BN",
    emoji: "\u{1F1E7}\u{1F1F3}",
    unicode: "U+1F1E7 U+1F1F3",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg"
  },
  {
    name: "Bolivia",
    code: "BO",
    emoji: "\u{1F1E7}\u{1F1F4}",
    unicode: "U+1F1E7 U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg"
  },
  {
    name: "Caribbean Netherlands",
    code: "BQ",
    emoji: "\u{1F1E7}\u{1F1F6}",
    unicode: "U+1F1E7 U+1F1F6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg"
  },
  {
    name: "Brazil",
    code: "BR",
    emoji: "\u{1F1E7}\u{1F1F7}",
    unicode: "U+1F1E7 U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg"
  },
  {
    name: "Bahamas",
    code: "BS",
    emoji: "\u{1F1E7}\u{1F1F8}",
    unicode: "U+1F1E7 U+1F1F8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg"
  },
  {
    name: "Bhutan",
    code: "BT",
    emoji: "\u{1F1E7}\u{1F1F9}",
    unicode: "U+1F1E7 U+1F1F9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg"
  },
  {
    name: "Bouvet Island",
    code: "BV",
    emoji: "\u{1F1E7}\u{1F1FB}",
    unicode: "U+1F1E7 U+1F1FB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg"
  },
  {
    name: "Botswana",
    code: "BW",
    emoji: "\u{1F1E7}\u{1F1FC}",
    unicode: "U+1F1E7 U+1F1FC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg"
  },
  {
    name: "Belarus",
    code: "BY",
    emoji: "\u{1F1E7}\u{1F1FE}",
    unicode: "U+1F1E7 U+1F1FE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg"
  },
  {
    name: "Belize",
    code: "BZ",
    emoji: "\u{1F1E7}\u{1F1FF}",
    unicode: "U+1F1E7 U+1F1FF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg"
  },
  {
    name: "Canada",
    code: "CA",
    emoji: "\u{1F1E8}\u{1F1E6}",
    unicode: "U+1F1E8 U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg"
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC",
    emoji: "\u{1F1E8}\u{1F1E8}",
    unicode: "U+1F1E8 U+1F1E8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg"
  },
  {
    name: "Congo - Kinshasa",
    code: "CD",
    emoji: "\u{1F1E8}\u{1F1E9}",
    unicode: "U+1F1E8 U+1F1E9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg"
  },
  {
    name: "Central African Republic",
    code: "CF",
    emoji: "\u{1F1E8}\u{1F1EB}",
    unicode: "U+1F1E8 U+1F1EB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg"
  },
  {
    name: "Congo - Brazzaville",
    code: "CG",
    emoji: "\u{1F1E8}\u{1F1EC}",
    unicode: "U+1F1E8 U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg"
  },
  {
    name: "Switzerland",
    code: "CH",
    emoji: "\u{1F1E8}\u{1F1ED}",
    unicode: "U+1F1E8 U+1F1ED",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg"
  },
  {
    name: "C\xF4te d\u2019Ivoire",
    code: "CI",
    emoji: "\u{1F1E8}\u{1F1EE}",
    unicode: "U+1F1E8 U+1F1EE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg"
  },
  {
    name: "Cook Islands",
    code: "CK",
    emoji: "\u{1F1E8}\u{1F1F0}",
    unicode: "U+1F1E8 U+1F1F0",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg"
  },
  {
    name: "Chile",
    code: "CL",
    emoji: "\u{1F1E8}\u{1F1F1}",
    unicode: "U+1F1E8 U+1F1F1",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg"
  },
  {
    name: "Cameroon",
    code: "CM",
    emoji: "\u{1F1E8}\u{1F1F2}",
    unicode: "U+1F1E8 U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg"
  },
  {
    name: "China",
    code: "CN",
    emoji: "\u{1F1E8}\u{1F1F3}",
    unicode: "U+1F1E8 U+1F1F3",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg"
  },
  {
    name: "Colombia",
    code: "CO",
    emoji: "\u{1F1E8}\u{1F1F4}",
    unicode: "U+1F1E8 U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg"
  },
  {
    name: "Clipperton Island",
    code: "CP",
    emoji: "\u{1F1E8}\u{1F1F5}",
    unicode: "U+1F1E8 U+1F1F5",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CP.svg"
  },
  {
    name: "Costa Rica",
    code: "CR",
    emoji: "\u{1F1E8}\u{1F1F7}",
    unicode: "U+1F1E8 U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg"
  },
  {
    name: "Cuba",
    code: "CU",
    emoji: "\u{1F1E8}\u{1F1FA}",
    unicode: "U+1F1E8 U+1F1FA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg"
  },
  {
    name: "Cape Verde",
    code: "CV",
    emoji: "\u{1F1E8}\u{1F1FB}",
    unicode: "U+1F1E8 U+1F1FB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg"
  },
  {
    name: "Cura\xE7ao",
    code: "CW",
    emoji: "\u{1F1E8}\u{1F1FC}",
    unicode: "U+1F1E8 U+1F1FC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg"
  },
  {
    name: "Christmas Island",
    code: "CX",
    emoji: "\u{1F1E8}\u{1F1FD}",
    unicode: "U+1F1E8 U+1F1FD",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg"
  },
  {
    name: "Cyprus",
    code: "CY",
    emoji: "\u{1F1E8}\u{1F1FE}",
    unicode: "U+1F1E8 U+1F1FE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg"
  },
  {
    name: "Czechia",
    code: "CZ",
    emoji: "\u{1F1E8}\u{1F1FF}",
    unicode: "U+1F1E8 U+1F1FF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg"
  },
  {
    name: "Germany",
    code: "DE",
    emoji: "\u{1F1E9}\u{1F1EA}",
    unicode: "U+1F1E9 U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg"
  },
  {
    name: "Diego Garcia",
    code: "DG",
    emoji: "\u{1F1E9}\u{1F1EC}",
    unicode: "U+1F1E9 U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DG.svg"
  },
  {
    name: "Djibouti",
    code: "DJ",
    emoji: "\u{1F1E9}\u{1F1EF}",
    unicode: "U+1F1E9 U+1F1EF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg"
  },
  {
    name: "Denmark",
    code: "DK",
    emoji: "\u{1F1E9}\u{1F1F0}",
    unicode: "U+1F1E9 U+1F1F0",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg"
  },
  {
    name: "Dominica",
    code: "DM",
    emoji: "\u{1F1E9}\u{1F1F2}",
    unicode: "U+1F1E9 U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg"
  },
  {
    name: "Dominican Republic",
    code: "DO",
    emoji: "\u{1F1E9}\u{1F1F4}",
    unicode: "U+1F1E9 U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg"
  },
  {
    name: "Algeria",
    code: "DZ",
    emoji: "\u{1F1E9}\u{1F1FF}",
    unicode: "U+1F1E9 U+1F1FF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg"
  },
  {
    name: "Ceuta & Melilla",
    code: "EA",
    emoji: "\u{1F1EA}\u{1F1E6}",
    unicode: "U+1F1EA U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EA.svg"
  },
  {
    name: "Ecuador",
    code: "EC",
    emoji: "\u{1F1EA}\u{1F1E8}",
    unicode: "U+1F1EA U+1F1E8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg"
  },
  {
    name: "Estonia",
    code: "EE",
    emoji: "\u{1F1EA}\u{1F1EA}",
    unicode: "U+1F1EA U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg"
  },
  {
    name: "Egypt",
    code: "EG",
    emoji: "\u{1F1EA}\u{1F1EC}",
    unicode: "U+1F1EA U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg"
  },
  {
    name: "Western Sahara",
    code: "EH",
    emoji: "\u{1F1EA}\u{1F1ED}",
    unicode: "U+1F1EA U+1F1ED",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EH.svg"
  },
  {
    name: "Eritrea",
    code: "ER",
    emoji: "\u{1F1EA}\u{1F1F7}",
    unicode: "U+1F1EA U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg"
  },
  {
    name: "Spain",
    code: "ES",
    emoji: "\u{1F1EA}\u{1F1F8}",
    unicode: "U+1F1EA U+1F1F8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg"
  },
  {
    name: "Ethiopia",
    code: "ET",
    emoji: "\u{1F1EA}\u{1F1F9}",
    unicode: "U+1F1EA U+1F1F9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg"
  },
  {
    name: "European Union",
    code: "EU",
    emoji: "\u{1F1EA}\u{1F1FA}",
    unicode: "U+1F1EA U+1F1FA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EU.svg"
  },
  {
    name: "Finland",
    code: "FI",
    emoji: "\u{1F1EB}\u{1F1EE}",
    unicode: "U+1F1EB U+1F1EE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg"
  },
  {
    name: "Fiji",
    code: "FJ",
    emoji: "\u{1F1EB}\u{1F1EF}",
    unicode: "U+1F1EB U+1F1EF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg"
  },
  {
    name: "Falkland Islands",
    code: "FK",
    emoji: "\u{1F1EB}\u{1F1F0}",
    unicode: "U+1F1EB U+1F1F0",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg"
  },
  {
    name: "Micronesia",
    code: "FM",
    emoji: "\u{1F1EB}\u{1F1F2}",
    unicode: "U+1F1EB U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg"
  },
  {
    name: "Faroe Islands",
    code: "FO",
    emoji: "\u{1F1EB}\u{1F1F4}",
    unicode: "U+1F1EB U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg"
  },
  {
    name: "France",
    code: "FR",
    emoji: "\u{1F1EB}\u{1F1F7}",
    unicode: "U+1F1EB U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg"
  },
  {
    name: "Gabon",
    code: "GA",
    emoji: "\u{1F1EC}\u{1F1E6}",
    unicode: "U+1F1EC U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg"
  },
  {
    name: "United Kingdom",
    code: "GB",
    emoji: "\u{1F1EC}\u{1F1E7}",
    unicode: "U+1F1EC U+1F1E7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg"
  },
  {
    name: "Grenada",
    code: "GD",
    emoji: "\u{1F1EC}\u{1F1E9}",
    unicode: "U+1F1EC U+1F1E9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg"
  },
  {
    name: "Georgia",
    code: "GE",
    emoji: "\u{1F1EC}\u{1F1EA}",
    unicode: "U+1F1EC U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg"
  },
  {
    name: "French Guiana",
    code: "GF",
    emoji: "\u{1F1EC}\u{1F1EB}",
    unicode: "U+1F1EC U+1F1EB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg"
  },
  {
    name: "Guernsey",
    code: "GG",
    emoji: "\u{1F1EC}\u{1F1EC}",
    unicode: "U+1F1EC U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg"
  },
  {
    name: "Ghana",
    code: "GH",
    emoji: "\u{1F1EC}\u{1F1ED}",
    unicode: "U+1F1EC U+1F1ED",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg"
  },
  {
    name: "Gibraltar",
    code: "GI",
    emoji: "\u{1F1EC}\u{1F1EE}",
    unicode: "U+1F1EC U+1F1EE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg"
  },
  {
    name: "Greenland",
    code: "GL",
    emoji: "\u{1F1EC}\u{1F1F1}",
    unicode: "U+1F1EC U+1F1F1",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg"
  },
  {
    name: "Gambia",
    code: "GM",
    emoji: "\u{1F1EC}\u{1F1F2}",
    unicode: "U+1F1EC U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg"
  },
  {
    name: "Guinea",
    code: "GN",
    emoji: "\u{1F1EC}\u{1F1F3}",
    unicode: "U+1F1EC U+1F1F3",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg"
  },
  {
    name: "Guadeloupe",
    code: "GP",
    emoji: "\u{1F1EC}\u{1F1F5}",
    unicode: "U+1F1EC U+1F1F5",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg"
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    emoji: "\u{1F1EC}\u{1F1F6}",
    unicode: "U+1F1EC U+1F1F6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg"
  },
  {
    name: "Greece",
    code: "GR",
    emoji: "\u{1F1EC}\u{1F1F7}",
    unicode: "U+1F1EC U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg"
  },
  {
    name: "South Georgia & South Sandwich Islands",
    code: "GS",
    emoji: "\u{1F1EC}\u{1F1F8}",
    unicode: "U+1F1EC U+1F1F8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg"
  },
  {
    name: "Guatemala",
    code: "GT",
    emoji: "\u{1F1EC}\u{1F1F9}",
    unicode: "U+1F1EC U+1F1F9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg"
  },
  {
    name: "Guam",
    code: "GU",
    emoji: "\u{1F1EC}\u{1F1FA}",
    unicode: "U+1F1EC U+1F1FA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg"
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    emoji: "\u{1F1EC}\u{1F1FC}",
    unicode: "U+1F1EC U+1F1FC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg"
  },
  {
    name: "Guyana",
    code: "GY",
    emoji: "\u{1F1EC}\u{1F1FE}",
    unicode: "U+1F1EC U+1F1FE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg"
  },
  {
    name: "Hong Kong SAR China",
    code: "HK",
    emoji: "\u{1F1ED}\u{1F1F0}",
    unicode: "U+1F1ED U+1F1F0",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg"
  },
  {
    name: "Heard & McDonald Islands",
    code: "HM",
    emoji: "\u{1F1ED}\u{1F1F2}",
    unicode: "U+1F1ED U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HM.svg"
  },
  {
    name: "Honduras",
    code: "HN",
    emoji: "\u{1F1ED}\u{1F1F3}",
    unicode: "U+1F1ED U+1F1F3",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg"
  },
  {
    name: "Croatia",
    code: "HR",
    emoji: "\u{1F1ED}\u{1F1F7}",
    unicode: "U+1F1ED U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg"
  },
  {
    name: "Haiti",
    code: "HT",
    emoji: "\u{1F1ED}\u{1F1F9}",
    unicode: "U+1F1ED U+1F1F9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg"
  },
  {
    name: "Hungary",
    code: "HU",
    emoji: "\u{1F1ED}\u{1F1FA}",
    unicode: "U+1F1ED U+1F1FA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg"
  },
  {
    name: "Canary Islands",
    code: "IC",
    emoji: "\u{1F1EE}\u{1F1E8}",
    unicode: "U+1F1EE U+1F1E8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IC.svg"
  },
  {
    name: "Indonesia",
    code: "ID",
    emoji: "\u{1F1EE}\u{1F1E9}",
    unicode: "U+1F1EE U+1F1E9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg"
  },
  {
    name: "Ireland",
    code: "IE",
    emoji: "\u{1F1EE}\u{1F1EA}",
    unicode: "U+1F1EE U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg"
  },
  {
    name: "Israel",
    code: "IL",
    emoji: "\u{1F1EE}\u{1F1F1}",
    unicode: "U+1F1EE U+1F1F1",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg"
  },
  {
    name: "Isle of Man",
    code: "IM",
    emoji: "\u{1F1EE}\u{1F1F2}",
    unicode: "U+1F1EE U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg"
  },
  {
    name: "India",
    code: "IN",
    emoji: "\u{1F1EE}\u{1F1F3}",
    unicode: "U+1F1EE U+1F1F3",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg"
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    emoji: "\u{1F1EE}\u{1F1F4}",
    unicode: "U+1F1EE U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg"
  },
  {
    name: "Iraq",
    code: "IQ",
    emoji: "\u{1F1EE}\u{1F1F6}",
    unicode: "U+1F1EE U+1F1F6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg"
  },
  {
    name: "Iran",
    code: "IR",
    emoji: "\u{1F1EE}\u{1F1F7}",
    unicode: "U+1F1EE U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg"
  },
  {
    name: "Iceland",
    code: "IS",
    emoji: "\u{1F1EE}\u{1F1F8}",
    unicode: "U+1F1EE U+1F1F8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg"
  },
  {
    name: "Italy",
    code: "IT",
    emoji: "\u{1F1EE}\u{1F1F9}",
    unicode: "U+1F1EE U+1F1F9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg"
  },
  {
    name: "Jersey",
    code: "JE",
    emoji: "\u{1F1EF}\u{1F1EA}",
    unicode: "U+1F1EF U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg"
  },
  {
    name: "Jamaica",
    code: "JM",
    emoji: "\u{1F1EF}\u{1F1F2}",
    unicode: "U+1F1EF U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg"
  },
  {
    name: "Jordan",
    code: "JO",
    emoji: "\u{1F1EF}\u{1F1F4}",
    unicode: "U+1F1EF U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg"
  },
  {
    name: "Japan",
    code: "JP",
    emoji: "\u{1F1EF}\u{1F1F5}",
    unicode: "U+1F1EF U+1F1F5",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg"
  },
  {
    name: "Kenya",
    code: "KE",
    emoji: "\u{1F1F0}\u{1F1EA}",
    unicode: "U+1F1F0 U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg"
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    emoji: "\u{1F1F0}\u{1F1EC}",
    unicode: "U+1F1F0 U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg"
  },
  {
    name: "Cambodia",
    code: "KH",
    emoji: "\u{1F1F0}\u{1F1ED}",
    unicode: "U+1F1F0 U+1F1ED",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg"
  },
  {
    name: "Kiribati",
    code: "KI",
    emoji: "\u{1F1F0}\u{1F1EE}",
    unicode: "U+1F1F0 U+1F1EE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg"
  },
  {
    name: "Comoros",
    code: "KM",
    emoji: "\u{1F1F0}\u{1F1F2}",
    unicode: "U+1F1F0 U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg"
  },
  {
    name: "St. Kitts & Nevis",
    code: "KN",
    emoji: "\u{1F1F0}\u{1F1F3}",
    unicode: "U+1F1F0 U+1F1F3",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg"
  },
  {
    name: "North Korea",
    code: "KP",
    emoji: "\u{1F1F0}\u{1F1F5}",
    unicode: "U+1F1F0 U+1F1F5",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg"
  },
  {
    name: "South Korea",
    code: "KR",
    emoji: "\u{1F1F0}\u{1F1F7}",
    unicode: "U+1F1F0 U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg"
  },
  {
    name: "Kuwait",
    code: "KW",
    emoji: "\u{1F1F0}\u{1F1FC}",
    unicode: "U+1F1F0 U+1F1FC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg"
  },
  {
    name: "Cayman Islands",
    code: "KY",
    emoji: "\u{1F1F0}\u{1F1FE}",
    unicode: "U+1F1F0 U+1F1FE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg"
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    emoji: "\u{1F1F0}\u{1F1FF}",
    unicode: "U+1F1F0 U+1F1FF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg"
  },
  {
    name: "Laos",
    code: "LA",
    emoji: "\u{1F1F1}\u{1F1E6}",
    unicode: "U+1F1F1 U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg"
  },
  {
    name: "Lebanon",
    code: "LB",
    emoji: "\u{1F1F1}\u{1F1E7}",
    unicode: "U+1F1F1 U+1F1E7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg"
  },
  {
    name: "St. Lucia",
    code: "LC",
    emoji: "\u{1F1F1}\u{1F1E8}",
    unicode: "U+1F1F1 U+1F1E8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg"
  },
  {
    name: "Liechtenstein",
    code: "LI",
    emoji: "\u{1F1F1}\u{1F1EE}",
    unicode: "U+1F1F1 U+1F1EE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg"
  },
  {
    name: "Sri Lanka",
    code: "LK",
    emoji: "\u{1F1F1}\u{1F1F0}",
    unicode: "U+1F1F1 U+1F1F0",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg"
  },
  {
    name: "Liberia",
    code: "LR",
    emoji: "\u{1F1F1}\u{1F1F7}",
    unicode: "U+1F1F1 U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg"
  },
  {
    name: "Lesotho",
    code: "LS",
    emoji: "\u{1F1F1}\u{1F1F8}",
    unicode: "U+1F1F1 U+1F1F8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg"
  },
  {
    name: "Lithuania",
    code: "LT",
    emoji: "\u{1F1F1}\u{1F1F9}",
    unicode: "U+1F1F1 U+1F1F9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg"
  },
  {
    name: "Luxembourg",
    code: "LU",
    emoji: "\u{1F1F1}\u{1F1FA}",
    unicode: "U+1F1F1 U+1F1FA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg"
  },
  {
    name: "Latvia",
    code: "LV",
    emoji: "\u{1F1F1}\u{1F1FB}",
    unicode: "U+1F1F1 U+1F1FB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg"
  },
  {
    name: "Libya",
    code: "LY",
    emoji: "\u{1F1F1}\u{1F1FE}",
    unicode: "U+1F1F1 U+1F1FE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg"
  },
  {
    name: "Morocco",
    code: "MA",
    emoji: "\u{1F1F2}\u{1F1E6}",
    unicode: "U+1F1F2 U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg"
  },
  {
    name: "Monaco",
    code: "MC",
    emoji: "\u{1F1F2}\u{1F1E8}",
    unicode: "U+1F1F2 U+1F1E8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg"
  },
  {
    name: "Moldova",
    code: "MD",
    emoji: "\u{1F1F2}\u{1F1E9}",
    unicode: "U+1F1F2 U+1F1E9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg"
  },
  {
    name: "Montenegro",
    code: "ME",
    emoji: "\u{1F1F2}\u{1F1EA}",
    unicode: "U+1F1F2 U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg"
  },
  {
    name: "St. Martin",
    code: "MF",
    emoji: "\u{1F1F2}\u{1F1EB}",
    unicode: "U+1F1F2 U+1F1EB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg"
  },
  {
    name: "Madagascar",
    code: "MG",
    emoji: "\u{1F1F2}\u{1F1EC}",
    unicode: "U+1F1F2 U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg"
  },
  {
    name: "Marshall Islands",
    code: "MH",
    emoji: "\u{1F1F2}\u{1F1ED}",
    unicode: "U+1F1F2 U+1F1ED",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg"
  },
  {
    name: "North Macedonia",
    code: "MK",
    emoji: "\u{1F1F2}\u{1F1F0}",
    unicode: "U+1F1F2 U+1F1F0",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg"
  },
  {
    name: "Mali",
    code: "ML",
    emoji: "\u{1F1F2}\u{1F1F1}",
    unicode: "U+1F1F2 U+1F1F1",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg"
  },
  {
    name: "Myanmar (Burma)",
    code: "MM",
    emoji: "\u{1F1F2}\u{1F1F2}",
    unicode: "U+1F1F2 U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg"
  },
  {
    name: "Mongolia",
    code: "MN",
    emoji: "\u{1F1F2}\u{1F1F3}",
    unicode: "U+1F1F2 U+1F1F3",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg"
  },
  {
    name: "Macao SAR China",
    code: "MO",
    emoji: "\u{1F1F2}\u{1F1F4}",
    unicode: "U+1F1F2 U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg"
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    emoji: "\u{1F1F2}\u{1F1F5}",
    unicode: "U+1F1F2 U+1F1F5",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg"
  },
  {
    name: "Martinique",
    code: "MQ",
    emoji: "\u{1F1F2}\u{1F1F6}",
    unicode: "U+1F1F2 U+1F1F6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg"
  },
  {
    name: "Mauritania",
    code: "MR",
    emoji: "\u{1F1F2}\u{1F1F7}",
    unicode: "U+1F1F2 U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg"
  },
  {
    name: "Montserrat",
    code: "MS",
    emoji: "\u{1F1F2}\u{1F1F8}",
    unicode: "U+1F1F2 U+1F1F8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg"
  },
  {
    name: "Malta",
    code: "MT",
    emoji: "\u{1F1F2}\u{1F1F9}",
    unicode: "U+1F1F2 U+1F1F9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg"
  },
  {
    name: "Mauritius",
    code: "MU",
    emoji: "\u{1F1F2}\u{1F1FA}",
    unicode: "U+1F1F2 U+1F1FA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg"
  },
  {
    name: "Maldives",
    code: "MV",
    emoji: "\u{1F1F2}\u{1F1FB}",
    unicode: "U+1F1F2 U+1F1FB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg"
  },
  {
    name: "Malawi",
    code: "MW",
    emoji: "\u{1F1F2}\u{1F1FC}",
    unicode: "U+1F1F2 U+1F1FC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg"
  },
  {
    name: "Mexico",
    code: "MX",
    emoji: "\u{1F1F2}\u{1F1FD}",
    unicode: "U+1F1F2 U+1F1FD",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg"
  },
  {
    name: "Malaysia",
    code: "MY",
    emoji: "\u{1F1F2}\u{1F1FE}",
    unicode: "U+1F1F2 U+1F1FE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg"
  },
  {
    name: "Mozambique",
    code: "MZ",
    emoji: "\u{1F1F2}\u{1F1FF}",
    unicode: "U+1F1F2 U+1F1FF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg"
  },
  {
    name: "Namibia",
    code: "NA",
    emoji: "\u{1F1F3}\u{1F1E6}",
    unicode: "U+1F1F3 U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg"
  },
  {
    name: "New Caledonia",
    code: "NC",
    emoji: "\u{1F1F3}\u{1F1E8}",
    unicode: "U+1F1F3 U+1F1E8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg"
  },
  {
    name: "Niger",
    code: "NE",
    emoji: "\u{1F1F3}\u{1F1EA}",
    unicode: "U+1F1F3 U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg"
  },
  {
    name: "Norfolk Island",
    code: "NF",
    emoji: "\u{1F1F3}\u{1F1EB}",
    unicode: "U+1F1F3 U+1F1EB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg"
  },
  {
    name: "Nigeria",
    code: "NG",
    emoji: "\u{1F1F3}\u{1F1EC}",
    unicode: "U+1F1F3 U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg"
  },
  {
    name: "Nicaragua",
    code: "NI",
    emoji: "\u{1F1F3}\u{1F1EE}",
    unicode: "U+1F1F3 U+1F1EE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg"
  },
  {
    name: "Netherlands",
    code: "NL",
    emoji: "\u{1F1F3}\u{1F1F1}",
    unicode: "U+1F1F3 U+1F1F1",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg"
  },
  {
    name: "Norway",
    code: "NO",
    emoji: "\u{1F1F3}\u{1F1F4}",
    unicode: "U+1F1F3 U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg"
  },
  {
    name: "Nepal",
    code: "NP",
    emoji: "\u{1F1F3}\u{1F1F5}",
    unicode: "U+1F1F3 U+1F1F5",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg"
  },
  {
    name: "Nauru",
    code: "NR",
    emoji: "\u{1F1F3}\u{1F1F7}",
    unicode: "U+1F1F3 U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg"
  },
  {
    name: "Niue",
    code: "NU",
    emoji: "\u{1F1F3}\u{1F1FA}",
    unicode: "U+1F1F3 U+1F1FA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg"
  },
  {
    name: "New Zealand",
    code: "NZ",
    emoji: "\u{1F1F3}\u{1F1FF}",
    unicode: "U+1F1F3 U+1F1FF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg"
  },
  {
    name: "Oman",
    code: "OM",
    emoji: "\u{1F1F4}\u{1F1F2}",
    unicode: "U+1F1F4 U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg"
  },
  {
    name: "Panama",
    code: "PA",
    emoji: "\u{1F1F5}\u{1F1E6}",
    unicode: "U+1F1F5 U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg"
  },
  {
    name: "Peru",
    code: "PE",
    emoji: "\u{1F1F5}\u{1F1EA}",
    unicode: "U+1F1F5 U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg"
  },
  {
    name: "French Polynesia",
    code: "PF",
    emoji: "\u{1F1F5}\u{1F1EB}",
    unicode: "U+1F1F5 U+1F1EB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg"
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    emoji: "\u{1F1F5}\u{1F1EC}",
    unicode: "U+1F1F5 U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg"
  },
  {
    name: "Philippines",
    code: "PH",
    emoji: "\u{1F1F5}\u{1F1ED}",
    unicode: "U+1F1F5 U+1F1ED",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg"
  },
  {
    name: "Pakistan",
    code: "PK",
    emoji: "\u{1F1F5}\u{1F1F0}",
    unicode: "U+1F1F5 U+1F1F0",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg"
  },
  {
    name: "Poland",
    code: "PL",
    emoji: "\u{1F1F5}\u{1F1F1}",
    unicode: "U+1F1F5 U+1F1F1",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg"
  },
  {
    name: "St. Pierre & Miquelon",
    code: "PM",
    emoji: "\u{1F1F5}\u{1F1F2}",
    unicode: "U+1F1F5 U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg"
  },
  {
    name: "Pitcairn Islands",
    code: "PN",
    emoji: "\u{1F1F5}\u{1F1F3}",
    unicode: "U+1F1F5 U+1F1F3",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg"
  },
  {
    name: "Puerto Rico",
    code: "PR",
    emoji: "\u{1F1F5}\u{1F1F7}",
    unicode: "U+1F1F5 U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg"
  },
  {
    name: "Palestinian Territories",
    code: "PS",
    emoji: "\u{1F1F5}\u{1F1F8}",
    unicode: "U+1F1F5 U+1F1F8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg"
  },
  {
    name: "Portugal",
    code: "PT",
    emoji: "\u{1F1F5}\u{1F1F9}",
    unicode: "U+1F1F5 U+1F1F9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg"
  },
  {
    name: "Palau",
    code: "PW",
    emoji: "\u{1F1F5}\u{1F1FC}",
    unicode: "U+1F1F5 U+1F1FC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg"
  },
  {
    name: "Paraguay",
    code: "PY",
    emoji: "\u{1F1F5}\u{1F1FE}",
    unicode: "U+1F1F5 U+1F1FE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg"
  },
  {
    name: "Qatar",
    code: "QA",
    emoji: "\u{1F1F6}\u{1F1E6}",
    unicode: "U+1F1F6 U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg"
  },
  {
    name: "R\xE9union",
    code: "RE",
    emoji: "\u{1F1F7}\u{1F1EA}",
    unicode: "U+1F1F7 U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg"
  },
  {
    name: "Romania",
    code: "RO",
    emoji: "\u{1F1F7}\u{1F1F4}",
    unicode: "U+1F1F7 U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg"
  },
  {
    name: "Serbia",
    code: "RS",
    emoji: "\u{1F1F7}\u{1F1F8}",
    unicode: "U+1F1F7 U+1F1F8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg"
  },
  {
    name: "Russia",
    code: "RU",
    emoji: "\u{1F1F7}\u{1F1FA}",
    unicode: "U+1F1F7 U+1F1FA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg"
  },
  {
    name: "Rwanda",
    code: "RW",
    emoji: "\u{1F1F7}\u{1F1FC}",
    unicode: "U+1F1F7 U+1F1FC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg"
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    emoji: "\u{1F1F8}\u{1F1E6}",
    unicode: "U+1F1F8 U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg"
  },
  {
    name: "Solomon Islands",
    code: "SB",
    emoji: "\u{1F1F8}\u{1F1E7}",
    unicode: "U+1F1F8 U+1F1E7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg"
  },
  {
    name: "Seychelles",
    code: "SC",
    emoji: "\u{1F1F8}\u{1F1E8}",
    unicode: "U+1F1F8 U+1F1E8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg"
  },
  {
    name: "Sudan",
    code: "SD",
    emoji: "\u{1F1F8}\u{1F1E9}",
    unicode: "U+1F1F8 U+1F1E9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg"
  },
  {
    name: "Sweden",
    code: "SE",
    emoji: "\u{1F1F8}\u{1F1EA}",
    unicode: "U+1F1F8 U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg"
  },
  {
    name: "Singapore",
    code: "SG",
    emoji: "\u{1F1F8}\u{1F1EC}",
    unicode: "U+1F1F8 U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg"
  },
  {
    name: "St. Helena",
    code: "SH",
    emoji: "\u{1F1F8}\u{1F1ED}",
    unicode: "U+1F1F8 U+1F1ED",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg"
  },
  {
    name: "Slovenia",
    code: "SI",
    emoji: "\u{1F1F8}\u{1F1EE}",
    unicode: "U+1F1F8 U+1F1EE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg"
  },
  {
    name: "Svalbard & Jan Mayen",
    code: "SJ",
    emoji: "\u{1F1F8}\u{1F1EF}",
    unicode: "U+1F1F8 U+1F1EF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg"
  },
  {
    name: "Slovakia",
    code: "SK",
    emoji: "\u{1F1F8}\u{1F1F0}",
    unicode: "U+1F1F8 U+1F1F0",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg"
  },
  {
    name: "Sierra Leone",
    code: "SL",
    emoji: "\u{1F1F8}\u{1F1F1}",
    unicode: "U+1F1F8 U+1F1F1",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg"
  },
  {
    name: "San Marino",
    code: "SM",
    emoji: "\u{1F1F8}\u{1F1F2}",
    unicode: "U+1F1F8 U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg"
  },
  {
    name: "Senegal",
    code: "SN",
    emoji: "\u{1F1F8}\u{1F1F3}",
    unicode: "U+1F1F8 U+1F1F3",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg"
  },
  {
    name: "Somalia",
    code: "SO",
    emoji: "\u{1F1F8}\u{1F1F4}",
    unicode: "U+1F1F8 U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg"
  },
  {
    name: "Suriname",
    code: "SR",
    emoji: "\u{1F1F8}\u{1F1F7}",
    unicode: "U+1F1F8 U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg"
  },
  {
    name: "South Sudan",
    code: "SS",
    emoji: "\u{1F1F8}\u{1F1F8}",
    unicode: "U+1F1F8 U+1F1F8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg"
  },
  {
    name: "S\xE3o Tom\xE9 & Pr\xEDncipe",
    code: "ST",
    emoji: "\u{1F1F8}\u{1F1F9}",
    unicode: "U+1F1F8 U+1F1F9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg"
  },
  {
    name: "El Salvador",
    code: "SV",
    emoji: "\u{1F1F8}\u{1F1FB}",
    unicode: "U+1F1F8 U+1F1FB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg"
  },
  {
    name: "Sint Maarten",
    code: "SX",
    emoji: "\u{1F1F8}\u{1F1FD}",
    unicode: "U+1F1F8 U+1F1FD",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg"
  },
  {
    name: "Syria",
    code: "SY",
    emoji: "\u{1F1F8}\u{1F1FE}",
    unicode: "U+1F1F8 U+1F1FE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg"
  },
  {
    name: "Eswatini",
    code: "SZ",
    emoji: "\u{1F1F8}\u{1F1FF}",
    unicode: "U+1F1F8 U+1F1FF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg"
  },
  {
    name: "Tristan da Cunha",
    code: "TA",
    emoji: "\u{1F1F9}\u{1F1E6}",
    unicode: "U+1F1F9 U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TA.svg"
  },
  {
    name: "Turks & Caicos Islands",
    code: "TC",
    emoji: "\u{1F1F9}\u{1F1E8}",
    unicode: "U+1F1F9 U+1F1E8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg"
  },
  {
    name: "Chad",
    code: "TD",
    emoji: "\u{1F1F9}\u{1F1E9}",
    unicode: "U+1F1F9 U+1F1E9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg"
  },
  {
    name: "French Southern Territories",
    code: "TF",
    emoji: "\u{1F1F9}\u{1F1EB}",
    unicode: "U+1F1F9 U+1F1EB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TF.svg"
  },
  {
    name: "Togo",
    code: "TG",
    emoji: "\u{1F1F9}\u{1F1EC}",
    unicode: "U+1F1F9 U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg"
  },
  {
    name: "Thailand",
    code: "TH",
    emoji: "\u{1F1F9}\u{1F1ED}",
    unicode: "U+1F1F9 U+1F1ED",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg"
  },
  {
    name: "Tajikistan",
    code: "TJ",
    emoji: "\u{1F1F9}\u{1F1EF}",
    unicode: "U+1F1F9 U+1F1EF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg"
  },
  {
    name: "Tokelau",
    code: "TK",
    emoji: "\u{1F1F9}\u{1F1F0}",
    unicode: "U+1F1F9 U+1F1F0",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg"
  },
  {
    name: "Timor-Leste",
    code: "TL",
    emoji: "\u{1F1F9}\u{1F1F1}",
    unicode: "U+1F1F9 U+1F1F1",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg"
  },
  {
    name: "Turkmenistan",
    code: "TM",
    emoji: "\u{1F1F9}\u{1F1F2}",
    unicode: "U+1F1F9 U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg"
  },
  {
    name: "Tunisia",
    code: "TN",
    emoji: "\u{1F1F9}\u{1F1F3}",
    unicode: "U+1F1F9 U+1F1F3",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg"
  },
  {
    name: "Tonga",
    code: "TO",
    emoji: "\u{1F1F9}\u{1F1F4}",
    unicode: "U+1F1F9 U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg"
  },
  {
    name: "Turkey",
    code: "TR",
    emoji: "\u{1F1F9}\u{1F1F7}",
    unicode: "U+1F1F9 U+1F1F7",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg"
  },
  {
    name: "Trinidad & Tobago",
    code: "TT",
    emoji: "\u{1F1F9}\u{1F1F9}",
    unicode: "U+1F1F9 U+1F1F9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg"
  },
  {
    name: "Tuvalu",
    code: "TV",
    emoji: "\u{1F1F9}\u{1F1FB}",
    unicode: "U+1F1F9 U+1F1FB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg"
  },
  {
    name: "Taiwan",
    code: "TW",
    emoji: "\u{1F1F9}\u{1F1FC}",
    unicode: "U+1F1F9 U+1F1FC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg"
  },
  {
    name: "Tanzania",
    code: "TZ",
    emoji: "\u{1F1F9}\u{1F1FF}",
    unicode: "U+1F1F9 U+1F1FF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg"
  },
  {
    name: "Ukraine",
    code: "UA",
    emoji: "\u{1F1FA}\u{1F1E6}",
    unicode: "U+1F1FA U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg"
  },
  {
    name: "Uganda",
    code: "UG",
    emoji: "\u{1F1FA}\u{1F1EC}",
    unicode: "U+1F1FA U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg"
  },
  {
    name: "U.S. Outlying Islands",
    code: "UM",
    emoji: "\u{1F1FA}\u{1F1F2}",
    unicode: "U+1F1FA U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UM.svg"
  },
  {
    name: "United Nations",
    code: "UN",
    emoji: "\u{1F1FA}\u{1F1F3}",
    unicode: "U+1F1FA U+1F1F3",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UN.svg"
  },
  {
    name: "United States",
    code: "US",
    emoji: "\u{1F1FA}\u{1F1F8}",
    unicode: "U+1F1FA U+1F1F8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg"
  },
  {
    name: "Uruguay",
    code: "UY",
    emoji: "\u{1F1FA}\u{1F1FE}",
    unicode: "U+1F1FA U+1F1FE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg"
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    emoji: "\u{1F1FA}\u{1F1FF}",
    unicode: "U+1F1FA U+1F1FF",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg"
  },
  {
    name: "Vatican City",
    code: "VA",
    emoji: "\u{1F1FB}\u{1F1E6}",
    unicode: "U+1F1FB U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg"
  },
  {
    name: "St. Vincent & Grenadines",
    code: "VC",
    emoji: "\u{1F1FB}\u{1F1E8}",
    unicode: "U+1F1FB U+1F1E8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg"
  },
  {
    name: "Venezuela",
    code: "VE",
    emoji: "\u{1F1FB}\u{1F1EA}",
    unicode: "U+1F1FB U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg"
  },
  {
    name: "British Virgin Islands",
    code: "VG",
    emoji: "\u{1F1FB}\u{1F1EC}",
    unicode: "U+1F1FB U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg"
  },
  {
    name: "U.S. Virgin Islands",
    code: "VI",
    emoji: "\u{1F1FB}\u{1F1EE}",
    unicode: "U+1F1FB U+1F1EE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg"
  },
  {
    name: "Vietnam",
    code: "VN",
    emoji: "\u{1F1FB}\u{1F1F3}",
    unicode: "U+1F1FB U+1F1F3",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg"
  },
  {
    name: "Vanuatu",
    code: "VU",
    emoji: "\u{1F1FB}\u{1F1FA}",
    unicode: "U+1F1FB U+1F1FA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg"
  },
  {
    name: "Wallis & Futuna",
    code: "WF",
    emoji: "\u{1F1FC}\u{1F1EB}",
    unicode: "U+1F1FC U+1F1EB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg"
  },
  {
    name: "Samoa",
    code: "WS",
    emoji: "\u{1F1FC}\u{1F1F8}",
    unicode: "U+1F1FC U+1F1F8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg"
  },
  {
    name: "Kosovo",
    code: "XK",
    emoji: "\u{1F1FD}\u{1F1F0}",
    unicode: "U+1F1FD U+1F1F0",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg"
  },
  {
    name: "Yemen",
    code: "YE",
    emoji: "\u{1F1FE}\u{1F1EA}",
    unicode: "U+1F1FE U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg"
  },
  {
    name: "Mayotte",
    code: "YT",
    emoji: "\u{1F1FE}\u{1F1F9}",
    unicode: "U+1F1FE U+1F1F9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg"
  },
  {
    name: "South Africa",
    code: "ZA",
    emoji: "\u{1F1FF}\u{1F1E6}",
    unicode: "U+1F1FF U+1F1E6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg"
  },
  {
    name: "Zambia",
    code: "ZM",
    emoji: "\u{1F1FF}\u{1F1F2}",
    unicode: "U+1F1FF U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg"
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    emoji: "\u{1F1FF}\u{1F1FC}",
    unicode: "U+1F1FF U+1F1FC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg"
  },
  {
    name: "England",
    code: "ENGLAND",
    emoji: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}",
    unicode: "U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg"
  },
  {
    name: "Scotland",
    code: "SCOTLAND",
    emoji: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
    unicode: "U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg"
  },
  {
    name: "Wales",
    code: "WALES",
    emoji: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}",
    unicode: "U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg"
  }
];

// app/data/faqs.ts
var FAQS = [
  {
    tags: ["Payment Card", "Transaction", "Security"],
    question: "How do I initiate a transaction with my payment card?",
    answer: "To make a transaction with your payment card, simply insert or swipe your card at a supported point-of-sale terminal, or enter your card details when shopping online. Follow the on-screen prompts to complete the transaction securely.",
    likes: 14
  },
  {
    tags: ["Payment Card", "Security"],
    question: "What should I do if my payment card is lost or stolen?",
    answer: "If your payment card is lost or stolen, immediately contact our customer support hotline or use our mobile app to report it. We will promptly block your card to prevent unauthorized transactions and guide you through the replacement process.",
    likes: 22
  },
  {
    tags: ["Investments", "Portfolio Management"],
    question: "How can I diversify my investment portfolio effectively?",
    answer: "Diversifying your investment portfolio involves spreading your investments across different asset classes to reduce risk. Our investment advisors can help you create a diversified portfolio tailored to your financial goals and risk tolerance.",
    likes: 54
  },
  {
    tags: ["Online Banking", "Security"],
    question: "What security measures are in place to protect my online banking account?",
    answer: "We employ state-of-the-art encryption, multi-factor authentication, and continuous monitoring to protect your online banking account from unauthorized access and fraudulent activities.",
    likes: 17
  },
  {
    tags: ["Mobile App", "Features"],
    question: "What features are available in your mobile app for tracking expenses?",
    answer: "Our mobile app offers expense tracking, budgeting tools, real-time transaction alerts, and spending analysis. You can gain better control over your finances by utilizing these features.",
    likes: 33
  },
  {
    tags: ["Cryptocurrency", "Trading"],
    question: "How can I start trading cryptocurrencies on your platform?",
    answer: "To begin trading cryptocurrencies, sign up for an account, complete the verification process, and deposit funds. Then, you can access our trading platform and place orders for various cryptocurrencies.",
    likes: 12
  },
  {
    tags: ["Digital Wallet", "Compatibility"],
    question: "Is your digital wallet compatible with contactless payment terminals?",
    answer: "Yes, our digital wallet is compatible with contactless payment terminals. You can simply tap your mobile device or linked payment card to make contactless payments at supported locations.",
    likes: 59
  },
  {
    tags: ["Savings Account", "Interest Rates"],
    question: "What are the current interest rates on your savings accounts?",
    answer: "Our savings account interest rates are subject to change and may vary by account type and balance. To view the most up-to-date rates, please visit our website or contact our customer support team.",
    likes: 28
  },
  {
    tags: ["Customer Support", "Contact"],
    question: "How can I reach your customer support team for assistance?",
    answer: "You can reach our customer support team by phone, email, or through our online chat feature on our website and mobile app. We're here to assist you with any questions or issues you may have.",
    likes: 76
  },
  {
    tags: ["Personal Loans", "Application"],
    question: "What documents do I need to provide when applying for a personal loan?",
    answer: "When applying for a personal loan, you typically need to provide proof of identity, income statements, and other financial documents. Specific requirements may vary, so it's best to check our loan application guidelines for details.",
    likes: 5
  }
];

// app/routes/resources/seed/_route.tsx
async function loader18({ request }) {
  let email = "demo@finlab.com", fullName = "John Doe";
  await prisma.notification.deleteMany({}), await prisma.transaction.deleteMany({}), await prisma.contact.deleteMany({}), await prisma.card.deleteMany({}), await prisma.user.deleteMany({}), await prisma.password.deleteMany({}), await prisma.accountant.deleteMany({}), await prisma.company.deleteMany({}), await prisma.country.deleteMany({}), await prisma.faq.deleteMany({}), await prisma.partnerRequest.deleteMany({});
  let hashedPassword = await bcrypt4.hash("demo123", 10), user = await prisma.user.create({
    data: {
      email,
      fullName,
      avatar: "/avatars/avatar9.png",
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
  await prisma.accountant.createMany({
    data: ACCOUNTANTS.map((accountant) => ({
      ...accountant
    }))
  }), await prisma.company.createMany({
    data: COMPANIES2.map((company) => ({
      ...company
    }))
  });
  let companies = await prisma.company.findMany();
  function getRandomCompanyId() {
    let randomIndex = Math.floor(Math.random() * companies.length);
    return companies[randomIndex].id;
  }
  return await prisma.transaction.createMany({
    data: TRANSACTIONS.map((transaction) => ({
      ...transaction,
      companyId: getRandomCompanyId(),
      userId: user.id
    }))
  }), await prisma.contact.createMany({
    data: CONTACTS.map((contact) => ({
      ...contact
    }))
  }), await prisma.faq.createMany({
    data: FAQS.map((item) => ({
      ...item
    }))
  }), await prisma.country.createMany({
    data: COUNTRIES.map((country) => ({
      name: country.name,
      code: country.code,
      emoji: country.emoji,
      unicode: country.unicode,
      image: country.image
    }))
  }), json20({ message: "Database seeded successfully!" });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-34K63VNX.js", imports: ["/build/_shared/chunk-X3PXDGUE.js", "/build/_shared/chunk-F4KNNEUR.js", "/build/_shared/chunk-4FN3O26K.js", "/build/_shared/chunk-5LRPLEYO.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-PLT55Z5M.js", "/build/_shared/chunk-2Z2JGDFU.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-I3UASJ6O.js", imports: ["/build/_shared/chunk-D52ASTK7.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-GKR4NGVM.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_auth/_layout": { id: "routes/_auth/_layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth/_layout-3HZIFL7U.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_auth/login/_route": { id: "routes/_auth/login/_route", parentId: "routes/_auth/_layout", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth/login/_route-PFVWB2MP.js", imports: ["/build/_shared/chunk-4RTNJEM4.js", "/build/_shared/chunk-63W34KY2.js", "/build/_shared/chunk-YOFWV2PG.js", "/build/_shared/chunk-FZF5PG77.js", "/build/_shared/chunk-D52ASTK7.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_auth/logout/_route": { id: "routes/_auth/logout/_route", parentId: "routes/_auth/_layout", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth/logout/_route-IE4EVASC.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_auth/signup/_route": { id: "routes/_auth/signup/_route", parentId: "routes/_auth/_layout", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth/signup/_route-54Q2TTSS.js", imports: ["/build/_shared/chunk-NF5G63ER.js", "/build/_shared/chunk-YOFWV2PG.js", "/build/_shared/chunk-FZF5PG77.js", "/build/_shared/chunk-D52ASTK7.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_client/_index/_index": { id: "routes/_client/_index/_index", parentId: "routes/_client/_layout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_client/_index/_index-6KSCI4LP.js", imports: ["/build/_shared/chunk-GKR4NGVM.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_client/_layout": { id: "routes/_client/_layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_client/_layout-YTA4FJZV.js", imports: ["/build/_shared/chunk-H44KENJ7.js", "/build/_shared/chunk-AY67IE6U.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_client/product/_route": { id: "routes/_client/product/_route", parentId: "routes/_client/_layout", path: "product", index: void 0, caseSensitive: void 0, module: "/build/routes/_client/product/_route-DHBRDVAS.js", imports: ["/build/_shared/chunk-GKR4NGVM.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_client/resources/accountant.$id.details/_route": { id: "routes/_client/resources/accountant.$id.details/_route", parentId: "routes/_client/_layout", path: "resources/accountant/:id/details", index: void 0, caseSensitive: void 0, module: "/build/routes/_client/resources/accountant.$id.details/_route-RPGNYPKN.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-63W34KY2.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_client/resources/accountants/_route": { id: "routes/_client/resources/accountants/_route", parentId: "routes/_client/_layout", path: "resources/accountants", index: void 0, caseSensitive: void 0, module: "/build/routes/_client/resources/accountants/_route-VBOBQVXU.js", imports: ["/build/_shared/chunk-63W34KY2.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-GKR4NGVM.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_client/resources/partner/_route": { id: "routes/_client/resources/partner/_route", parentId: "routes/_client/_layout", path: "resources/partner", index: void 0, caseSensitive: void 0, module: "/build/routes/_client/resources/partner/_route-NXF6NLSU.js", imports: ["/build/_shared/chunk-GKR4NGVM.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_client/solutions/personal/_route": { id: "routes/_client/solutions/personal/_route", parentId: "routes/_client/_layout", path: "solutions/personal", index: void 0, caseSensitive: void 0, module: "/build/routes/_client/solutions/personal/_route-FHMZXFQY.js", imports: ["/build/_shared/chunk-GKR4NGVM.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_client/solutions/startup/_route": { id: "routes/_client/solutions/startup/_route", parentId: "routes/_client/_layout", path: "solutions/startup", index: void 0, caseSensitive: void 0, module: "/build/routes/_client/solutions/startup/_route-ISF3WYY5.js", imports: ["/build/_shared/chunk-GKR4NGVM.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_client/support/_route": { id: "routes/_client/support/_route", parentId: "routes/_client/_layout", path: "support", index: void 0, caseSensitive: void 0, module: "/build/routes/_client/support/_route-CMTNOUJV.js", imports: ["/build/_shared/chunk-GKR4NGVM.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard/_layout": { id: "routes/dashboard/_layout", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/_layout-G7UD4D4R.js", imports: ["/build/_shared/chunk-PVJS4Y7A.js", "/build/_shared/chunk-GO4JRDYJ.js", "/build/_shared/chunk-63W34KY2.js", "/build/_shared/chunk-FZF5PG77.js", "/build/_shared/chunk-AY67IE6U.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard/help-center/_route": { id: "routes/dashboard/help-center/_route", parentId: "routes/dashboard/_layout", path: "help-center", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/help-center/_route-AD7ZWLWY.js", imports: ["/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard/notifications/_route": { id: "routes/dashboard/notifications/_route", parentId: "routes/dashboard/_layout", path: "notifications", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/notifications/_route-2IOOG2UI.js", imports: ["/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard/overview/_index/_route": { id: "routes/dashboard/overview/_index/_route", parentId: "routes/dashboard/overview/_layout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/overview/_index/_route-74QUZW3V.js", imports: ["/build/_shared/chunk-JKFKI22T.js", "/build/_shared/chunk-XZKDVL3R.js", "/build/_shared/chunk-PVJS4Y7A.js", "/build/_shared/chunk-GO4JRDYJ.js", "/build/_shared/chunk-63W34KY2.js", "/build/_shared/chunk-FZF5PG77.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard/overview/_layout": { id: "routes/dashboard/overview/_layout", parentId: "routes/dashboard/_layout", path: "overview", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/overview/_layout-EXWPM3ZE.js", imports: ["/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard/overview/statistics/_route": { id: "routes/dashboard/overview/statistics/_route", parentId: "routes/dashboard/overview/_layout", path: "statistics", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/overview/statistics/_route-554OS4PR.js", imports: ["/build/_shared/chunk-XZKDVL3R.js", "/build/_shared/chunk-T34PS4T2.js", "/build/_shared/chunk-PVJS4Y7A.js", "/build/_shared/chunk-GO4JRDYJ.js", "/build/_shared/chunk-63W34KY2.js", "/build/_shared/chunk-FZF5PG77.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard/overview/transactions/_route": { id: "routes/dashboard/overview/transactions/_route", parentId: "routes/dashboard/overview/_layout", path: "transactions", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/overview/transactions/_route-GAFGPC2B.js", imports: ["/build/_shared/chunk-T34PS4T2.js", "/build/_shared/chunk-PVJS4Y7A.js", "/build/_shared/chunk-GO4JRDYJ.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-63W34KY2.js", "/build/_shared/chunk-NF5G63ER.js", "/build/_shared/chunk-FZF5PG77.js", "/build/_shared/chunk-D52ASTK7.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard/settings/_index/_route": { id: "routes/dashboard/settings/_index/_route", parentId: "routes/dashboard/settings/_layout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/settings/_index/_route-S4S536F5.js", imports: ["/build/_shared/chunk-GO4JRDYJ.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-63W34KY2.js", "/build/_shared/chunk-YOFWV2PG.js", "/build/_shared/chunk-FZF5PG77.js", "/build/_shared/chunk-D52ASTK7.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard/settings/_layout": { id: "routes/dashboard/settings/_layout", parentId: "routes/dashboard/_layout", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/settings/_layout-A7VCRUEX.js", imports: ["/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard/settings/security/_route": { id: "routes/dashboard/settings/security/_route", parentId: "routes/dashboard/settings/_layout", path: "security", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/settings/security/_route-OKVXNSFZ.js", imports: ["/build/_shared/chunk-GO4JRDYJ.js", "/build/_shared/chunk-4RTNJEM4.js", "/build/_shared/chunk-63W34KY2.js", "/build/_shared/chunk-YOFWV2PG.js", "/build/_shared/chunk-FZF5PG77.js", "/build/_shared/chunk-D52ASTK7.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard/wallets/card.$cardId.details/_route": { id: "routes/dashboard/wallets/card.$cardId.details/_route", parentId: "routes/dashboard/_layout", path: "wallets/card/:cardId/details", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/wallets/card.$cardId.details/_route-NT52QO6Y.js", imports: ["/build/_shared/chunk-US4PENWW.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-NF5G63ER.js", "/build/_shared/chunk-YOFWV2PG.js", "/build/_shared/chunk-D52ASTK7.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard/wallets/index/_route": { id: "routes/dashboard/wallets/index/_route", parentId: "routes/dashboard/_layout", path: "wallets/", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/wallets/index/_route-LFOMINGS.js", imports: ["/build/_shared/chunk-US4PENWW.js", "/build/_shared/chunk-JKFKI22T.js", "/build/_shared/chunk-XZKDVL3R.js", "/build/_shared/chunk-D52ASTK7.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-7R6R7F3W.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-NWSSZWUS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/resources/companies-combobox/_route": { id: "routes/resources/companies-combobox/_route", parentId: "root", path: "resources/companies-combobox", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/companies-combobox/_route-MYYMIDPJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/resources/countries-combobox/_route": { id: "routes/resources/countries-combobox/_route", parentId: "root", path: "resources/countries-combobox", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/countries-combobox/_route-WPZ7Z5MC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/resources/new-card/_route": { id: "routes/resources/new-card/_route", parentId: "root", path: "resources/new-card", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/new-card/_route-NBTPGV2Z.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/resources/notification/_route": { id: "routes/resources/notification/_route", parentId: "root", path: "resources/notification", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/notification/_route-VNISOWDD.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/resources/operation/_route": { id: "routes/resources/operation/_route", parentId: "root", path: "resources/operation", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/operation/_route-XWNKZ4K7.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/resources/seed/_route": { id: "routes/resources/seed/_route", parentId: "root", path: "resources/seed", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/seed/_route-OTCOPMEZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "cc118851", hmr: { runtime: "/build/_shared/chunk-5LRPLEYO.js", timestamp: 1758346260221 }, url: "/build/manifest-CC118851.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/_auth/_layout": {
    id: "routes/_auth/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  },
  "routes/_auth/login/_route": {
    id: "routes/_auth/login/_route",
    parentId: "routes/_auth/_layout",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/_auth/logout/_route": {
    id: "routes/_auth/logout/_route",
    parentId: "routes/_auth/_layout",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/_auth/signup/_route": {
    id: "routes/_auth/signup/_route",
    parentId: "routes/_auth/_layout",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports3
  },
  "routes/_client/_layout": {
    id: "routes/_client/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports2
  },
  "routes/_client/_index/_index": {
    id: "routes/_client/_index/_index",
    parentId: "routes/_client/_layout",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/_client/product/_route": {
    id: "routes/_client/product/_route",
    parentId: "routes/_client/_layout",
    path: "product",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports4
  },
  "routes/_client/resources/accountant.$id.details/_route": {
    id: "routes/_client/resources/accountant.$id.details/_route",
    parentId: "routes/_client/_layout",
    path: "resources/accountant/:id/details",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports5
  },
  "routes/_client/resources/accountants/_route": {
    id: "routes/_client/resources/accountants/_route",
    parentId: "routes/_client/_layout",
    path: "resources/accountants",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports6
  },
  "routes/_client/resources/partner/_route": {
    id: "routes/_client/resources/partner/_route",
    parentId: "routes/_client/_layout",
    path: "resources/partner",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports7
  },
  "routes/_client/solutions/personal/_route": {
    id: "routes/_client/solutions/personal/_route",
    parentId: "routes/_client/_layout",
    path: "solutions/personal",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports8
  },
  "routes/_client/solutions/startup/_route": {
    id: "routes/_client/solutions/startup/_route",
    parentId: "routes/_client/_layout",
    path: "solutions/startup",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports9
  },
  "routes/_client/support/_route": {
    id: "routes/_client/support/_route",
    parentId: "routes/_client/_layout",
    path: "support",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports10
  },
  "routes/dashboard/_layout": {
    id: "routes/dashboard/_layout",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports3
  },
  "routes/dashboard/help-center/_route": {
    id: "routes/dashboard/help-center/_route",
    parentId: "routes/dashboard/_layout",
    path: "help-center",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports11
  },
  "routes/dashboard/notifications/_route": {
    id: "routes/dashboard/notifications/_route",
    parentId: "routes/dashboard/_layout",
    path: "notifications",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports12
  },
  "routes/dashboard/overview/_layout": {
    id: "routes/dashboard/overview/_layout",
    parentId: "routes/dashboard/_layout",
    path: "overview",
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports4
  },
  "routes/dashboard/overview/_index/_route": {
    id: "routes/dashboard/overview/_index/_route",
    parentId: "routes/dashboard/overview/_layout",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports13
  },
  "routes/dashboard/overview/statistics/_route": {
    id: "routes/dashboard/overview/statistics/_route",
    parentId: "routes/dashboard/overview/_layout",
    path: "statistics",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports14
  },
  "routes/dashboard/overview/transactions/_route": {
    id: "routes/dashboard/overview/transactions/_route",
    parentId: "routes/dashboard/overview/_layout",
    path: "transactions",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports16
  },
  "routes/dashboard/settings/_layout": {
    id: "routes/dashboard/settings/_layout",
    parentId: "routes/dashboard/_layout",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports5
  },
  "routes/dashboard/settings/_index/_route": {
    id: "routes/dashboard/settings/_index/_route",
    parentId: "routes/dashboard/settings/_layout",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports18
  },
  "routes/dashboard/settings/security/_route": {
    id: "routes/dashboard/settings/security/_route",
    parentId: "routes/dashboard/settings/_layout",
    path: "security",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports19
  },
  "routes/dashboard/wallets/card.$cardId.details/_route": {
    id: "routes/dashboard/wallets/card.$cardId.details/_route",
    parentId: "routes/dashboard/_layout",
    path: "wallets/card/:cardId/details",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports20
  },
  "routes/dashboard/wallets/index/_route": {
    id: "routes/dashboard/wallets/index/_route",
    parentId: "routes/dashboard/_layout",
    path: "wallets/",
    index: !0,
    caseSensitive: void 0,
    module: route_exports21
  },
  "routes/resources/companies-combobox/_route": {
    id: "routes/resources/companies-combobox/_route",
    parentId: "root",
    path: "resources/companies-combobox",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports15
  },
  "routes/resources/countries-combobox/_route": {
    id: "routes/resources/countries-combobox/_route",
    parentId: "root",
    path: "resources/countries-combobox",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports17
  },
  "routes/resources/new-card/_route": {
    id: "routes/resources/new-card/_route",
    parentId: "root",
    path: "resources/new-card",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports22
  },
  "routes/resources/notification/_route": {
    id: "routes/resources/notification/_route",
    parentId: "root",
    path: "resources/notification",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports23
  },
  "routes/resources/operation/_route": {
    id: "routes/resources/operation/_route",
    parentId: "root",
    path: "resources/operation",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports24
  },
  "routes/resources/seed/_route": {
    id: "routes/resources/seed/_route",
    parentId: "root",
    path: "resources/seed",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports25
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
