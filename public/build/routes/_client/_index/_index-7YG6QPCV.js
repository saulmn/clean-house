import {
  CallToAction,
  Testimonial
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
  Paragraph,
  buttonVariants,
  cn
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/react-fast-marquee/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-fast-marquee/dist/index.js"(exports) {
    "use client";
    function ___$insertStyle(css) {
      if (!css || typeof window === "undefined") {
        return;
      }
      const style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.innerHTML = css;
      document.head.appendChild(style);
      return css;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = require_react();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
    ___$insertStyle('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');
    var Marquee2 = React.forwardRef(function Marquee3({ style = {}, className = "", autoFill = false, play = true, pauseOnHover = false, pauseOnClick = false, direction = "left", speed = 50, delay = 0, loop = 0, gradient = false, gradientColor = "white", gradientWidth = 200, onFinish, onCycleComplete, onMount, children }, ref) {
      const [containerWidth, setContainerWidth] = React.useState(0);
      const [marqueeWidth, setMarqueeWidth] = React.useState(0);
      const [multiplier, setMultiplier] = React.useState(1);
      const [isMounted, setIsMounted] = React.useState(false);
      const rootRef = React.useRef(null);
      const containerRef = ref || rootRef;
      const marqueeRef = React.useRef(null);
      const calculateWidth = React.useCallback(() => {
        if (marqueeRef.current && containerRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const marqueeRect = marqueeRef.current.getBoundingClientRect();
          let containerWidth2 = containerRect.width;
          let marqueeWidth2 = marqueeRect.width;
          if (direction === "up" || direction === "down") {
            containerWidth2 = containerRect.height;
            marqueeWidth2 = marqueeRect.height;
          }
          if (autoFill && containerWidth2 && marqueeWidth2) {
            setMultiplier(marqueeWidth2 < containerWidth2 ? Math.ceil(containerWidth2 / marqueeWidth2) : 1);
          } else {
            setMultiplier(1);
          }
          setContainerWidth(containerWidth2);
          setMarqueeWidth(marqueeWidth2);
        }
      }, [autoFill, containerRef, direction]);
      React.useEffect(() => {
        if (!isMounted)
          return;
        calculateWidth();
        if (marqueeRef.current && containerRef.current) {
          const resizeObserver = new ResizeObserver(() => calculateWidth());
          resizeObserver.observe(containerRef.current);
          resizeObserver.observe(marqueeRef.current);
          return () => {
            if (!resizeObserver)
              return;
            resizeObserver.disconnect();
          };
        }
      }, [calculateWidth, containerRef, isMounted]);
      React.useEffect(() => {
        calculateWidth();
      }, [calculateWidth, children]);
      React.useEffect(() => {
        setIsMounted(true);
      }, []);
      React.useEffect(() => {
        if (typeof onMount === "function") {
          onMount();
        }
      }, []);
      const duration = React.useMemo(() => {
        if (autoFill) {
          return marqueeWidth * multiplier / speed;
        } else {
          return marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;
        }
      }, [autoFill, containerWidth, marqueeWidth, multiplier, speed]);
      const containerStyle = React.useMemo(() => Object.assign(Object.assign({}, style), { ["--pause-on-hover"]: !play || pauseOnHover ? "paused" : "running", ["--pause-on-click"]: !play || pauseOnHover && !pauseOnClick || pauseOnClick ? "paused" : "running", ["--width"]: direction === "up" || direction === "down" ? `100vh` : "100%", ["--transform"]: direction === "up" ? "rotate(-90deg)" : direction === "down" ? "rotate(90deg)" : "none" }), [style, play, pauseOnHover, pauseOnClick, direction]);
      const gradientStyle = React.useMemo(() => ({
        ["--gradient-color"]: gradientColor,
        ["--gradient-width"]: typeof gradientWidth === "number" ? `${gradientWidth}px` : gradientWidth
      }), [gradientColor, gradientWidth]);
      const marqueeStyle = React.useMemo(() => ({
        ["--play"]: play ? "running" : "paused",
        ["--direction"]: direction === "left" ? "normal" : "reverse",
        ["--duration"]: `${duration}s`,
        ["--delay"]: `${delay}s`,
        ["--iteration-count"]: !!loop ? `${loop}` : "infinite",
        ["--min-width"]: autoFill ? `auto` : "100%"
      }), [play, direction, duration, delay, loop, autoFill]);
      const childStyle = React.useMemo(() => ({
        ["--transform"]: direction === "up" ? "rotate(90deg)" : direction === "down" ? "rotate(-90deg)" : "none"
      }), [direction]);
      const multiplyChildren = React.useCallback((multiplier2) => {
        return [
          ...Array(Number.isFinite(multiplier2) && multiplier2 >= 0 ? multiplier2 : 0)
        ].map((_, i) => React__default["default"].createElement(React.Fragment, { key: i }, React.Children.map(children, (child) => {
          return React__default["default"].createElement("div", { style: childStyle, className: "rfm-child" }, child);
        })));
      }, [childStyle, children]);
      return !isMounted ? null : React__default["default"].createElement(
        "div",
        { ref: containerRef, style: containerStyle, className: "rfm-marquee-container " + className },
        gradient && React__default["default"].createElement("div", { style: gradientStyle, className: "rfm-overlay" }),
        React__default["default"].createElement(
          "div",
          { className: "rfm-marquee", style: marqueeStyle, onAnimationIteration: onCycleComplete, onAnimationEnd: onFinish },
          React__default["default"].createElement("div", { className: "rfm-initial-child-container", ref: marqueeRef }, React.Children.map(children, (child) => {
            return React__default["default"].createElement("div", { style: childStyle, className: "rfm-child" }, child);
          })),
          multiplyChildren(multiplier - 1)
        ),
        React__default["default"].createElement("div", { className: "rfm-marquee", style: marqueeStyle }, multiplyChildren(multiplier))
      );
    });
    exports.default = Marquee2;
  }
});

// app/routes/_client/_index/Components/Hero.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-white pt-[68px] lg:relative lg:overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-9 lg:max-w-xl lg:py-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3 max-w-fit rounded-full bg-[#F4F4F7] px-1.5 py-2 text-xs md:mb-8 md:text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-primary px-[5px] py-1 font-medium text-white", children: "News!" }, void 0, false, {
          fileName: "app/routes/_client/_index/Components/Hero.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pl-2 text-secondary-500", children: "Update New features for active users \u2728" }, void 0, false, {
          fileName: "app/routes/_client/_index/Components/Hero.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/_index/Components/Hero.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Heading,
        {
          variant: "h1",
          className: "mb-6 font-bold text-[#1B2632] md:mb-10 lg:leading-tight lg:tracking-[-2.16px]",
          children: "Manages all your financial task using finlab"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_client/_index/Components/Hero.tsx",
          lineNumber: 23,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "body1", className: "mb-10", children: "We helping you to manage your business cashflow. we provide the best features that will help you to manage financial task easily." }, void 0, false, {
        fileName: "app/routes/_client/_index/Components/Hero.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-[60px] flex gap-2 md:gap-4 lg:mb-[74px]", children: [
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
                fileName: "app/routes/_client/_index/Components/Hero.tsx",
                lineNumber: 44,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_client/_index/Components/Hero.tsx",
            lineNumber: 36,
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
            fileName: "app/routes/_client/_index/Components/Hero.tsx",
            lineNumber: 46,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/_client/_index/Components/Hero.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Paragraph,
            {
              variant: "subtitle1",
              className: "mb-1 font-bold lg:text-5xl",
              children: [
                "290K ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-primary-500", children: "+" }, void 0, false, {
                  fileName: "app/routes/_client/_index/Components/Hero.tsx",
                  lineNumber: 64,
                  columnNumber: 22
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/_client/_index/Components/Hero.tsx",
              lineNumber: 60,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "body1", children: "Download" }, void 0, false, {
            fileName: "app/routes/_client/_index/Components/Hero.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/_index/Components/Hero.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Paragraph,
            {
              variant: "subtitle1",
              className: "mb-1 font-bold lg:text-5xl",
              children: [
                "110K ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-primary-500", children: "+" }, void 0, false, {
                  fileName: "app/routes/_client/_index/Components/Hero.tsx",
                  lineNumber: 73,
                  columnNumber: 22
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/_client/_index/Components/Hero.tsx",
              lineNumber: 69,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "body1", children: "Active user" }, void 0, false, {
            fileName: "app/routes/_client/_index/Components/Hero.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/_index/Components/Hero.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Paragraph,
            {
              variant: "subtitle1",
              className: "mb-1 font-bold lg:text-5xl",
              children: [
                "900K ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-primary-500", children: "+" }, void 0, false, {
                  fileName: "app/routes/_client/_index/Components/Hero.tsx",
                  lineNumber: 82,
                  columnNumber: 22
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/_client/_index/Components/Hero.tsx",
              lineNumber: 78,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { variant: "body1", children: "Business teams" }, void 0, false, {
            fileName: "app/routes/_client/_index/Components/Hero.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_client/_index/Components/Hero.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/_index/Components/Hero.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_client/_index/Components/Hero.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_client/_index/Components/Hero.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute hidden w-full bg-primary-800 lg:right-0 lg:top-[68px] lg:block lg:w-[80vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: "images/landing-hero.png",
        alt: "hero",
        className: "h-full w-full"
      },
      void 0,
      false,
      {
        fileName: "app/routes/_client/_index/Components/Hero.tsx",
        lineNumber: 91,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/_client/_index/Components/Hero.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_client/_index/Components/Hero.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_client/_index/Components/Solutions.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Solutions() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "bg-[#1E2836] py-10 lg:py-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container, { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-3 w-fit rounded-full bg-[#353E49] px-6 py-1.5 text-xs text-white lg:text-sm", children: "Our best solution for you \u2728" }, void 0, false, {
      fileName: "app/routes/_client/_index/Components/Solutions.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Heading,
      {
        variant: "h2",
        className: "mb-16 text-center font-bold leading-tight tracking-[-1.68px] text-white ",
        children: "We have solutions that work for you."
      },
      void 0,
      false,
      {
        fileName: "app/routes/_client/_index/Components/Solutions.tsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-6 flex w-full flex-col items-center overflow-hidden rounded-3xl bg-primary-800 lg:relative lg:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "basis-full p-5 md:basis-5/12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { variant: "h4", className: "pb-3 font-bold text-white", children: "Finlab for Personal" }, void 0, false, {
          fileName: "app/routes/_client/_index/Components/Solutions.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Paragraph, { variant: "body1", className: "pb-12 text-secondary-300", children: "Easy-to-use personal platform and spend management software in an integrated global solution." }, void 0, false, {
          fileName: "app/routes/_client/_index/Components/Solutions.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Link,
          {
            to: "/solutions/personal",
            className: cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mb-16 text-white md:mb-0"
            ),
            children: "Learn more"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_client/_index/Components/Solutions.tsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/_client/_index/Components/Solutions.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "basis-full md:basis-7/12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          src: "images/finlab-personal.png",
          alt: "finlab personal",
          className: "bottom-0 h-full lg:absolute"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_client/_index/Components/Solutions.tsx",
          lineNumber: 45,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_client/_index/Components/Solutions.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_client/_index/Components/Solutions.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-6 flex w-full flex-col items-center overflow-hidden rounded-3xl bg-white lg:relative lg:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "basis-full p-5 md:basis-5/12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { variant: "h4", className: "pb-3 font-bold text-secondary-500", children: "Finlab for Startup" }, void 0, false, {
          fileName: "app/routes/_client/_index/Components/Solutions.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Paragraph, { variant: "body1", className: "pb-12", children: "Easy-to-use personal platfrom and spend management software in an integrated global solution." }, void 0, false, {
          fileName: "app/routes/_client/_index/Components/Solutions.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Link,
          {
            to: "/solutions/startup",
            className: cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mb-16 md:mb-0"
            ),
            children: "Learn more"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_client/_index/Components/Solutions.tsx",
            lineNumber: 64,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/_client/_index/Components/Solutions.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "basis-7/12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          src: "images/finlab-startup.png",
          alt: "finlab startup",
          className: "bottom-0 right-0 h-full lg:absolute"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_client/_index/Components/Solutions.tsx",
          lineNumber: 76,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_client/_index/Components/Solutions.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_client/_index/Components/Solutions.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_client/_index/Components/Solutions.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_client/_index/Components/Solutions.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/_client/_index/Components/Features.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Features() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "bg-white py-10 lg:pt-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container, { className: "flex flex-col-reverse gap-10 md:flex-row md:gap-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "basis-full md:basis-1/2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "img",
        {
          src: "images/feature-landing.png",
          alt: "finlab features",
          className: "hidden w-full md:block md:h-[830px] lg:h-[910px]"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_client/_index/Components/Features.tsx",
          lineNumber: 8,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "img",
        {
          src: "images/mobile-feature.png",
          alt: "finlab features",
          className: "w-full object-cover md:hidden"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_client/_index/Components/Features.tsx",
          lineNumber: 13,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/_client/_index/Components/Features.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "basis-full md:basis-1/2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm", children: "Our best solution for you \u2728" }, void 0, false, {
        fileName: "app/routes/_client/_index/Components/Features.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
        true,
        {
          fileName: "app/routes/_client/_index/Components/Features.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Paragraph, { variant: "body1", className: "pb-10 lg:pb-12", children: "We have many features that can certainly help you manage finances and spend money" }, void 0, false, {
        fileName: "app/routes/_client/_index/Components/Features.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-5", children: FEATURES.map((feature, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          className: "group rounded-[10px] bg-[#F4F4F7] p-5 duration-200 hover:bg-primary-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-6 pb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "flex h-9 w-9 items-center justify-center rounded-full border border-secondary-300 text-secondary-300 group-hover:border-white group-hover:text-white", children: index + 1 }, void 0, false, {
                fileName: "app/routes/_client/_index/Components/Features.tsx",
                lineNumber: 44,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                Heading,
                {
                  variant: "h6",
                  className: "font-medium group-hover:text-white",
                  children: feature.label
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_client/_index/Components/Features.tsx",
                  lineNumber: 47,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/_client/_index/Components/Features.tsx",
              lineNumber: 43,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Paragraph, { variant: "body1", className: "group-hover:text-white", children: feature.description }, void 0, false, {
              fileName: "app/routes/_client/_index/Components/Features.tsx",
              lineNumber: 55,
              columnNumber: 17
            }, this)
          ]
        },
        index,
        true,
        {
          fileName: "app/routes/_client/_index/Components/Features.tsx",
          lineNumber: 39,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "app/routes/_client/_index/Components/Features.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_client/_index/Components/Features.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_client/_index/Components/Features.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
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
var import_react_fast_marquee = __toESM(require_dist());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Trusted() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: " bg-[#1E2836] py-10 lg:py-24", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Container, { className: "flex h-min flex-col items-end justify-between gap-5 pb-10 lg:flex-row lg:gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "basis-full lg:basis-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb-3 w-fit rounded-full bg-[#353E49] px-6 py-1.5 text-xs text-white lg:text-sm", children: "Our best solution for you \u2728" }, void 0, false, {
          fileName: "app/routes/_client/_index/Components/Trusted.tsx",
          lineNumber: 10,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          Heading,
          {
            variant: "h2",
            className: "font-bold leading-tight tracking-[-1.68px] text-white ",
            children: "20k+ company trust us as a financial companion"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_client/_index/Components/Trusted.tsx",
            lineNumber: 14,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/_client/_index/Components/Trusted.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "basis-full lg:basis-1/2 lg:pl-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Paragraph, { variant: "body1", className: "pb-6 text-secondary-300", children: "Our platform is adaptable to meet the financial processing requirements of global companies and support with multiple local bank channels and digital wallets." }, void 0, false, {
          fileName: "app/routes/_client/_index/Components/Trusted.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { size: "lg", variant: "outline", className: "text-white", children: "Learn more" }, void 0, false, {
          fileName: "app/routes/_client/_index/Components/Trusted.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_client/_index/Components/Trusted.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_client/_index/Components/Trusted.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "min-h-[40px] space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_fast_marquee.default, { children: COMPANIES.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          className: "mx-3 flex min-w-[200px] items-center justify-center rounded-2xl bg-[#353E4A] py-10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "img",
            {
              src: item.image,
              alt: item.label,
              className: "mx-auto h-10 w-20"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_client/_index/Components/Trusted.tsx",
              lineNumber: 44,
              columnNumber: 15
            },
            this
          )
        },
        item.label,
        false,
        {
          fileName: "app/routes/_client/_index/Components/Trusted.tsx",
          lineNumber: 40,
          columnNumber: 13
        },
        this
      )) }, void 0, false, {
        fileName: "app/routes/_client/_index/Components/Trusted.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_fast_marquee.default, { direction: "right", children: COMPANIES.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          className: "mx-3 flex min-w-[200px] items-center justify-center rounded-2xl bg-[#353E4A] py-10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "img",
            {
              src: item.image,
              alt: item.label,
              className: "mx-auto h-10 w-20"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_client/_index/Components/Trusted.tsx",
              lineNumber: 59,
              columnNumber: 15
            },
            this
          )
        },
        item.label,
        false,
        {
          fileName: "app/routes/_client/_index/Components/Trusted.tsx",
          lineNumber: 55,
          columnNumber: 13
        },
        this
      )) }, void 0, false, {
        fileName: "app/routes/_client/_index/Components/Trusted.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_client/_index/Components/Trusted.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
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
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Finlab - Remix Full Stack Client and Admin Finance Template" },
  {
    name: "theme-color",
    content: "#31B099"
  }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Hero, {}, void 0, false, {
      fileName: "app/routes/_client/_index/_index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Solutions, {}, void 0, false, {
      fileName: "app/routes/_client/_index/_index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Features, {}, void 0, false, {
      fileName: "app/routes/_client/_index/_index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Trusted, {}, void 0, false, {
      fileName: "app/routes/_client/_index/_index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Testimonial, {}, void 0, false, {
      fileName: "app/routes/_client/_index/_index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CallToAction, {}, void 0, false, {
      fileName: "app/routes/_client/_index/_index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_client/_index/_index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_client/_index/_index-7YG6QPCV.js.map
