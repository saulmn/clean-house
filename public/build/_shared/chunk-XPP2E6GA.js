import {
  require_jsx_runtime
} from "/build/_shared/chunk-7ZK5QKWH.js";
import {
  require_react
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:~/models/transaction.server
var require_transaction = __commonJS({
  "empty-module:~/models/transaction.server"(exports, module) {
    module.exports = {};
  }
});

// node_modules/remix-utils/browser/react/client-only.js
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/remix-utils/browser/react/use-hydrated.js
var import_react = __toESM(require_react());
var hydrating = true;
function useHydrated() {
  let [hydrated, setHydrated] = (0, import_react.useState)(() => !hydrating);
  (0, import_react.useEffect)(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);
  return hydrated;
}

// node_modules/remix-utils/browser/react/client-only.js
function ClientOnly({ children, fallback = null }) {
  return useHydrated() ? (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: children() }) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: fallback });
}

export {
  ClientOnly,
  require_transaction
};
//# sourceMappingURL=/build/_shared/chunk-XPP2E6GA.js.map
