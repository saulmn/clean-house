import {
  formatToNow
} from "/build/_shared/chunk-IMJZAPXR.js";
import {
  InfoTooltip
} from "/build/_shared/chunk-PYU4XBSA.js";
import {
  require_db
} from "/build/_shared/chunk-63W34KY2.js";
import {
  useUser
} from "/build/_shared/chunk-JUES7YX4.js";
import {
  require_session
} from "/build/_shared/chunk-D52ASTK7.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  Logo
} from "/build/_shared/chunk-ML4Q7RBQ.js";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  CheckCheck,
  Close,
  Container,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Input,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  Paragraph,
  Sheet,
  SheetContent,
  SheetTrigger,
  X,
  buttonVariants,
  cn
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  require_jsx_dev_runtime,
  require_react,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard/_layout.tsx
var import_node = __toESM(require_node());

// app/routes/dashboard/components/Header.tsx
var import_react4 = __toESM(require_react());

// app/routes/dashboard/components/UserNav.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UserNav() {
  var _a;
  const user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Button,
      {
        variant: "ghost",
        className: "relative h-11 w-11 rounded-full bg-[#FFFFFF]/10",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, { className: "h-11 w-11", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarImage, { src: (_a = user.avatar) != null ? _a : "", alt: user.fullName }, void 0, false, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarFallback, { children: "FL" }, void 0, false, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard/components/UserNav.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard/components/UserNav.tsx",
        lineNumber: 24,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/components/UserNav.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      DropdownMenuContent,
      {
        className: "w-56 space-y-2 p-5",
        align: "end",
        forceMount: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Paragraph,
              {
                variant: "subtitle2",
                className: "text-lg font-medium leading-none",
                children: user.fullName
              },
              void 0,
              false,
              {
                fileName: "app/routes/dashboard/components/UserNav.tsx",
                lineNumber: 41,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs leading-none text-muted-foreground", children: user.email }, void 0, false, {
              fileName: "app/routes/dashboard/components/UserNav.tsx",
              lineNumber: 47,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 40,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { className: "py-0", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              to: "/dashboard/settings",
              className: "h-full w-full cursor-pointer py-1.5",
              children: "Settings"
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/components/UserNav.tsx",
              lineNumber: 55,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 54,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { className: "py-0", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              to: "/dashboard/help-center",
              className: "w-full cursor-pointer py-1.5",
              children: "Help Center"
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/components/UserNav.tsx",
              lineNumber: 66,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { className: "py-0", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Form,
            {
              action: "/logout",
              method: "POST",
              className: "w-full cursor-pointer py-1.5",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Log out" }, void 0, false, {
                fileName: "app/routes/dashboard/components/UserNav.tsx",
                lineNumber: 81,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/components/UserNav.tsx",
              lineNumber: 76,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/dashboard/components/UserNav.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/dashboard/components/UserNav.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/components/UserNav.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/hooks/useResponsive.tsx
var import_react2 = __toESM(require_react());
var useResponsive = () => {
  const [isMobile, setIsMobile] = (0, import_react2.useState)(false);
  const [isTablet, setIsTablet] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (window.innerWidth <= 768) {
        setIsMobile(false);
        setIsTablet(true);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { isMobile, isTablet };
};

// app/routes/dashboard/components/Notification.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Notification() {
  const { notifications, unreadNotifications } = useLoaderData();
  const notificationFetcher = useFetcher();
  const isMobile = useResponsive().isMobile;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Button,
        {
          size: "icon",
          className: "h-12 w-12 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "25",
              viewBox: "0 0 24 25",
              fill: "none",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "path",
                  {
                    d: "M12.0201 3.41016C8.71009 3.41016 6.02009 6.10016 6.02009 9.41016V12.3002C6.02009 12.9102 5.76009 13.8402 5.45009 14.3602L4.30009 16.2702C3.59009 17.4502 4.08009 18.7602 5.38009 19.2002C9.69009 20.6402 14.3401 20.6402 18.6501 19.2002C19.8601 18.8002 20.3901 17.3702 19.7301 16.2702L18.5801 14.3602C18.2801 13.8402 18.0201 12.9102 18.0201 12.3002V9.41016C18.0201 6.11016 15.3201 3.41016 12.0201 3.41016Z",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/dashboard/components/Notification.tsx",
                    lineNumber: 44,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
                  false,
                  {
                    fileName: "app/routes/dashboard/components/Notification.tsx",
                    lineNumber: 51,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "path",
                  {
                    d: "M15.02 19.5596C15.02 21.2096 13.67 22.5596 12.02 22.5596C11.2 22.5596 10.44 22.2196 9.90002 21.6796C9.36002 21.1396 9.02002 20.3796 9.02002 19.5596",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10"
                  },
                  void 0,
                  false,
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
            true,
            {
              fileName: "app/routes/dashboard/components/Notification.tsx",
              lineNumber: 37,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/dashboard/components/Notification.tsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      ),
      unreadNotifications ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute right-0 top-0 mr-2 mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-4 w-4 items-center justify-center rounded-full bg-error-400 p-1 text-xs text-white", children: unreadNotifications }, void 0, false, {
        fileName: "app/routes/dashboard/components/Notification.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard/components/Notification.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/components/Notification.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/components/Notification.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      DropdownMenuContent,
      {
        className: "mx-auto w-[350px] pb-5 md:w-[400px] md:p-5",
        align: isMobile ? "center" : "end",
        forceMount: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuLabel, { className: "pb-6 font-normal", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Paragraph, { className: " font-semibold", children: "Notification" }, void 0, false, {
                fileName: "app/routes/dashboard/components/Notification.tsx",
                lineNumber: 85,
                columnNumber: 13
              }, this),
              unreadNotifications ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                InfoTooltip,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckCheck, { className: "h-4 w-4 text-secondary-400" }, void 0, false, {
                    fileName: "app/routes/dashboard/components/Notification.tsx",
                    lineNumber: 89,
                    columnNumber: 23
                  }, this),
                  message: "Mark all as read",
                  onClick: () => {
                    notificationFetcher.submit(
                      { read: true },
                      {
                        method: "PUT",
                        action: "/resources/notification"
                      }
                    );
                  }
                },
                void 0,
                false,
                {
                  fileName: "app/routes/dashboard/components/Notification.tsx",
                  lineNumber: 88,
                  columnNumber: 15
                },
                this
              ) : null
            ] }, void 0, true, {
              fileName: "app/routes/dashboard/components/Notification.tsx",
              lineNumber: 84,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Paragraph, { variant: "body3", className: "text-secondary-300", children: [
              "You have ",
              unreadNotifications,
              " unread notifications"
            ] }, void 0, true, {
              fileName: "app/routes/dashboard/components/Notification.tsx",
              lineNumber: 103,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard/components/Notification.tsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          notifications.map((notification) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NotificationItem, { notification }, notification.id, false, {
            fileName: "app/routes/dashboard/components/Notification.tsx",
            lineNumber: 109,
            columnNumber: 11
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { className: "mt-4 hover:bg-white", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Link,
            {
              to: "/dashboard/notifications",
              className: cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full cursor-pointer focus-visible:ring-0"
              ),
              children: "See more Notification"
            },
            void 0,
            false,
            {
              fileName: "app/routes/dashboard/components/Notification.tsx",
              lineNumber: 113,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/dashboard/components/Notification.tsx",
            lineNumber: 112,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/dashboard/components/Notification.tsx",
        lineNumber: 78,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/components/Notification.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function NotificationItem({ notification }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { className: "items-start gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: notification.type === "Transfer" ? "/icons/money-send.svg" : "/icons/receive-money.svg",
        alt: notification.title
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard/components/Notification.tsx",
        lineNumber: 145,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/components/Notification.tsx",
      lineNumber: 144,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/components/Notification.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Paragraph,
          {
            variant: "body2",
            className: " pb-1 font-semibold text-secondary-500",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: notification.title }, void 0, false, {
              fileName: "app/routes/dashboard/components/Notification.tsx",
              lineNumber: 162,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/components/Notification.tsx",
            lineNumber: 158,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-1.5 text-sm font-normal text-secondary-300", children: [
          formatToNow(notification.createdAt),
          " ",
          notification.read ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-2 w-2 rounded-full bg-error-400" }, void 0, false, {
            fileName: "app/routes/dashboard/components/Notification.tsx",
            lineNumber: 168,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard/components/Notification.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/components/Notification.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Paragraph, { variant: "body3", className: "text-medium text-secondary-400", children: notification.description }, void 0, false, {
        fileName: "app/routes/dashboard/components/Notification.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/components/Notification.tsx",
      lineNumber: 156,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/components/Notification.tsx",
    lineNumber: 142,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard/components/Notification.tsx",
    lineNumber: 141,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/components/Header.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "fixed z-50 w-full bg-[#1C2634] py-5 font-manrope", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container, { className: "flex items-center justify-between xl:px-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-[72px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Logo, { primary: false }, void 0, false, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MobileNav, {}, void 0, false, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenu, { className: "hidden lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuList, { children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        NavLink,
        {
          to: item.href,
          className: ({ isActive }) => isActive ? "mx-1 whitespace-nowrap rounded-[14px] bg-[#FFFFFF]/10 px-5 py-3 text-sm font-medium text-white" : "mx-1 whitespace-nowrap  rounded-[14px] px-5 py-3  text-sm font-medium text-[#A2A6AA] duration-200 hover:bg-[#FFFFFF]/10 hover:text-white",
          children: item.name
        },
        void 0,
        false,
        {
          fileName: "app/routes/dashboard/components/Header.tsx",
          lineNumber: 36,
          columnNumber: 19
        },
        this
      ) }, item.name, false, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/components/Header.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative hidden lg:block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          Input,
          {
            placeholder: "Search anything here",
            className: "placeholder:text-[rgba(255, 255, 255, 0.50)] h-12 w-64 rounded-full border-none bg-[#FFFFFF]/10 py-2 pl-12 text-white"
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/components/Header.tsx",
            lineNumber: 54,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "25",
            viewBox: "0 0 24 25",
            fill: "none",
            className: "absolute left-3 top-[50%] -translate-y-1/2 transform",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "path",
                {
                  d: "M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z",
                  stroke: "white",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/dashboard/components/Header.tsx",
                  lineNumber: 67,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "path",
                {
                  d: "M22 22.5L20 20.5",
                  stroke: "white",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                },
                void 0,
                false,
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
          true,
          {
            fileName: "app/routes/dashboard/components/Header.tsx",
            lineNumber: 59,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Notification, {}, void 0, false, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UserNav, {}, void 0, false, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/components/Header.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/components/Header.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard/components/Header.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
var NAV_ITEMS = [
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
  const [open, setOpen] = (0, import_react4.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SheetTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      Button,
      {
        variant: "outline",
        size: "icon",
        className: "h-12 w-12 rounded-full border-none bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/10 lg:hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "22",
              height: "22",
              viewBox: "0 0 22 22",
              fill: "none",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "path",
                  {
                    d: "M2.75 6.41699H19.25",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/dashboard/components/Header.tsx",
                    lineNumber: 129,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "path",
                  {
                    d: "M2.75 11H19.25",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/dashboard/components/Header.tsx",
                    lineNumber: 135,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "path",
                  {
                    d: "M2.75 15.583H19.25",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                  },
                  void 0,
                  false,
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
            true,
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
      true,
      {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 117,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard/components/Header.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SheetContent, { side: "left", className: "bg-[#1C2634] pt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pb-14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Logo, { primary: false }, void 0, false, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 153,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Close, { className: "absolute -right-14 top-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#FFFFFF]/10 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(X, { className: "h-7 w-7 text-white" }, void 0, false, {
          fileName: "app/routes/dashboard/components/Header.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, false, {
          fileName: "app/routes/dashboard/components/Header.tsx",
          lineNumber: 158,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-96 flex-col justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col space-y-3", children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          NavLink,
          {
            to: item.href,
            onClick: () => setOpen(false),
            className: ({ isActive }) => isActive ? "mx-1 whitespace-nowrap rounded-full bg-[#FFFFFF]/10 px-8 py-3.5 text-xl text-white" : "mx-1 whitespace-nowrap rounded-full px-8 py-3.5 text-xl text-[#A2A6AA] duration-200 hover:bg-[#FFFFFF]/10 hover:text-white",
            children: item.name
          },
          item.name,
          false,
          {
            fileName: "app/routes/dashboard/components/Header.tsx",
            lineNumber: 164,
            columnNumber: 15
          },
          this
        )) }, void 0, false, {
          fileName: "app/routes/dashboard/components/Header.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          Form,
          {
            action: "/logout",
            method: "POST",
            className: "absolute bottom-5 translate-x-1/2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              Button,
              {
                variant: "link",
                className: "w-full text-xl font-normal text-error-300",
                children: "Log Out"
              },
              void 0,
              false,
              {
                fileName: "app/routes/dashboard/components/Header.tsx",
                lineNumber: 184,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard/components/Header.tsx",
            lineNumber: 179,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/components/Header.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/components/Header.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/components/Header.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/_layout.tsx
var import_session = __toESM(require_session());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function _layout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/routes/dashboard/_layout.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "h-auto min-h-screen w-screen bg-[#F4F4F7] pb-5 font-manrope", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/dashboard/_layout.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/_layout.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/_layout.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
export {
  _layout as default
};
//# sourceMappingURL=/build/routes/dashboard/_layout-65W2XGSL.js.map
