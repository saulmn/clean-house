import {
  require_session
} from "/build/_shared/chunk-D52ASTK7.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  BUY_URL
} from "/build/_shared/chunk-LBU24EHW.js";
import {
  buttonVariants,
  cn
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useLocation,
  useNavigation
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/nprogress/nprogress.js
var require_nprogress = __commonJS({
  "node_modules/nprogress/nprogress.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(factory);
      } else if (typeof exports === "object") {
        module.exports = factory();
      } else {
        root.NProgress = factory();
      }
    })(exports, function() {
      var NProgress2 = {};
      NProgress2.version = "0.2.0";
      var Settings = NProgress2.settings = {
        minimum: 0.08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: true,
        trickleRate: 0.02,
        trickleSpeed: 800,
        showSpinner: true,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      };
      NProgress2.configure = function(options) {
        var key, value;
        for (key in options) {
          value = options[key];
          if (value !== void 0 && options.hasOwnProperty(key))
            Settings[key] = value;
        }
        return this;
      };
      NProgress2.status = null;
      NProgress2.set = function(n) {
        var started = NProgress2.isStarted();
        n = clamp(n, Settings.minimum, 1);
        NProgress2.status = n === 1 ? null : n;
        var progress = NProgress2.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
        progress.offsetWidth;
        queue(function(next) {
          if (Settings.positionUsing === "")
            Settings.positionUsing = NProgress2.getPositioningCSS();
          css(bar, barPositionCSS(n, speed, ease));
          if (n === 1) {
            css(progress, {
              transition: "none",
              opacity: 1
            });
            progress.offsetWidth;
            setTimeout(function() {
              css(progress, {
                transition: "all " + speed + "ms linear",
                opacity: 0
              });
              setTimeout(function() {
                NProgress2.remove();
                next();
              }, speed);
            }, speed);
          } else {
            setTimeout(next, speed);
          }
        });
        return this;
      };
      NProgress2.isStarted = function() {
        return typeof NProgress2.status === "number";
      };
      NProgress2.start = function() {
        if (!NProgress2.status)
          NProgress2.set(0);
        var work = function() {
          setTimeout(function() {
            if (!NProgress2.status)
              return;
            NProgress2.trickle();
            work();
          }, Settings.trickleSpeed);
        };
        if (Settings.trickle)
          work();
        return this;
      };
      NProgress2.done = function(force) {
        if (!force && !NProgress2.status)
          return this;
        return NProgress2.inc(0.3 + 0.5 * Math.random()).set(1);
      };
      NProgress2.inc = function(amount) {
        var n = NProgress2.status;
        if (!n) {
          return NProgress2.start();
        } else {
          if (typeof amount !== "number") {
            amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
          }
          n = clamp(n + amount, 0, 0.994);
          return NProgress2.set(n);
        }
      };
      NProgress2.trickle = function() {
        return NProgress2.inc(Math.random() * Settings.trickleRate);
      };
      (function() {
        var initial = 0, current = 0;
        NProgress2.promise = function($promise) {
          if (!$promise || $promise.state() === "resolved") {
            return this;
          }
          if (current === 0) {
            NProgress2.start();
          }
          initial++;
          current++;
          $promise.always(function() {
            current--;
            if (current === 0) {
              initial = 0;
              NProgress2.done();
            } else {
              NProgress2.set((initial - current) / initial);
            }
          });
          return this;
        };
      })();
      NProgress2.render = function(fromStart) {
        if (NProgress2.isRendered())
          return document.getElementById("nprogress");
        addClass(document.documentElement, "nprogress-busy");
        var progress = document.createElement("div");
        progress.id = "nprogress";
        progress.innerHTML = Settings.template;
        var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress2.status || 0), parent = document.querySelector(Settings.parent), spinner;
        css(bar, {
          transition: "all 0 linear",
          transform: "translate3d(" + perc + "%,0,0)"
        });
        if (!Settings.showSpinner) {
          spinner = progress.querySelector(Settings.spinnerSelector);
          spinner && removeElement(spinner);
        }
        if (parent != document.body) {
          addClass(parent, "nprogress-custom-parent");
        }
        parent.appendChild(progress);
        return progress;
      };
      NProgress2.remove = function() {
        removeClass(document.documentElement, "nprogress-busy");
        removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
        var progress = document.getElementById("nprogress");
        progress && removeElement(progress);
      };
      NProgress2.isRendered = function() {
        return !!document.getElementById("nprogress");
      };
      NProgress2.getPositioningCSS = function() {
        var bodyStyle = document.body.style;
        var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
        if (vendorPrefix + "Perspective" in bodyStyle) {
          return "translate3d";
        } else if (vendorPrefix + "Transform" in bodyStyle) {
          return "translate";
        } else {
          return "margin";
        }
      };
      function clamp(n, min, max) {
        if (n < min)
          return min;
        if (n > max)
          return max;
        return n;
      }
      function toBarPerc(n) {
        return (-1 + n) * 100;
      }
      function barPositionCSS(n, speed, ease) {
        var barCSS;
        if (Settings.positionUsing === "translate3d") {
          barCSS = { transform: "translate3d(" + toBarPerc(n) + "%,0,0)" };
        } else if (Settings.positionUsing === "translate") {
          barCSS = { transform: "translate(" + toBarPerc(n) + "%,0)" };
        } else {
          barCSS = { "margin-left": toBarPerc(n) + "%" };
        }
        barCSS.transition = "all " + speed + "ms " + ease;
        return barCSS;
      }
      var queue = function() {
        var pending = [];
        function next() {
          var fn = pending.shift();
          if (fn) {
            fn(next);
          }
        }
        return function(fn) {
          pending.push(fn);
          if (pending.length == 1)
            next();
        };
      }();
      var css = function() {
        var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
        function camelCase(string) {
          return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
            return letter.toUpperCase();
          });
        }
        function getVendorProp(name) {
          var style = document.body.style;
          if (name in style)
            return name;
          var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
          while (i--) {
            vendorName = cssPrefixes[i] + capName;
            if (vendorName in style)
              return vendorName;
          }
          return name;
        }
        function getStyleProp(name) {
          name = camelCase(name);
          return cssProps[name] || (cssProps[name] = getVendorProp(name));
        }
        function applyCss(element, prop, value) {
          prop = getStyleProp(prop);
          element.style[prop] = value;
        }
        return function(element, properties) {
          var args = arguments, prop, value;
          if (args.length == 2) {
            for (prop in properties) {
              value = properties[prop];
              if (value !== void 0 && properties.hasOwnProperty(prop))
                applyCss(element, prop, value);
            }
          } else {
            applyCss(element, args[1], args[2]);
          }
        };
      }();
      function hasClass(element, name) {
        var list = typeof element == "string" ? element : classList(element);
        return list.indexOf(" " + name + " ") >= 0;
      }
      function addClass(element, name) {
        var oldList = classList(element), newList = oldList + name;
        if (hasClass(oldList, name))
          return;
        element.className = newList.substring(1);
      }
      function removeClass(element, name) {
        var oldList = classList(element), newList;
        if (!hasClass(element, name))
          return;
        newList = oldList.replace(" " + name + " ", " ");
        element.className = newList.substring(1, newList.length - 1);
      }
      function classList(element) {
        return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
      }
      function removeElement(element) {
        element && element.parentNode && element.parentNode.removeChild(element);
      }
      return NProgress2;
    });
  }
});

// app/root.tsx
var import_react2 = __toESM(require_react());

// css-bundle-update-plugin-ns:/Users/mac/Documents/1 - Projects/clean-house/node_modules/@remix-run/css-bundle/dist/esm/index.js
var cssBundleHref = false ? void 0 : void 0;

// app/root.tsx
var import_node = __toESM(require_node());
var import_nprogress = __toESM(require_nprogress());
var import_session = __toESM(require_session());

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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BuyThisTemplate() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed bottom-10 right-10 z-50 hidden shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)] md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Link,
    {
      to: BUY_URL,
      className: cn(buttonVariants({}), "w-full capitalize"),
      target: "_blank",
      children: "Buy this template"
    },
    void 0,
    false,
    {
      fileName: "app/components/BuyThisTemplate.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/BuyThisTemplate.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/utils/gtags.client.ts
var pageview = (url, trackingId) => {
  if (!window.gtag) {
    console.warn(
      "window.gtag is not defined. This could mean your google analytics script has not loaded on the page yet."
    );
    return;
  }
  window.gtag("config", trackingId, {
    page_path: url
  });
};

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: slick_default },
  { rel: "stylesheet", href: slick_theme_default },
  { rel: "stylesheet", href: styles_compiled_default },
  { rel: "stylesheet", href: style_default },
  { rel: "stylesheet", href: nprogress_default },
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
var meta = () => {
  return [
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
  ];
};
function App() {
  const location = useLocation();
  const navigation = useNavigation();
  const { gaTrackingId } = useLoaderData();
  import_nprogress.default.configure({ showSpinner: false });
  (0, import_react2.useEffect)(() => {
    if (gaTrackingId == null ? void 0 : gaTrackingId.length) {
      pageview(location.pathname, gaTrackingId);
    }
    if (navigation.state === "idle")
      import_nprogress.default.done();
    else
      import_nprogress.default.start();
  }, [location, gaTrackingId, navigation.state]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", children: [
      true ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "script",
          {
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`
          },
          void 0,
          false,
          {
            fileName: "app/root.tsx",
            lineNumber: 106,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "script",
          {
            async: true,
            id: "gtag-init",
            dangerouslySetInnerHTML: {
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `
            }
          },
          void 0,
          false,
          {
            fileName: "app/root.tsx",
            lineNumber: 110,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BuyThisTemplate, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
/*! Bundled license information:

nprogress/nprogress.js:
  (* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
   * @license MIT *)

@remix-run/css-bundle/dist/esm/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=/build/root-UCDW2KSK.js.map
