import {
  require_react
} from "/build/_shared/chunk-YO2OJM7X.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/globalthis/implementation.browser.js
var require_implementation_browser = __commonJS({
  "node_modules/globalthis/implementation.browser.js"(exports, module) {
    "use strict";
    if (typeof self !== "undefined") {
      module.exports = self;
    } else if (typeof window !== "undefined") {
      module.exports = window;
    } else {
      module.exports = Function("return this")();
    }
  }
});

// node_modules/globalthis/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/globalthis/polyfill.js"(exports, module) {
    "use strict";
    var implementation = require_implementation_browser();
    module.exports = function getPolyfill() {
      if (typeof globalThis !== "object" || !globalThis || globalThis.Math !== Math || globalThis.Array !== Array) {
        return implementation;
      }
      return globalThis;
    };
  }
});

// node_modules/qj/lib/index.js
var require_lib = __commonJS({
  "node_modules/qj/lib/index.js"(exports, module) {
    (function() {
      var QJ, rreturn, rtrim;
      QJ = function(selector) {
        if (QJ.isDOMElement(selector)) {
          return selector;
        }
        return document.querySelectorAll(selector);
      };
      QJ.isDOMElement = function(el) {
        return el && el.nodeName != null;
      };
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      QJ.trim = function(text) {
        if (text === null) {
          return "";
        } else {
          return (text + "").replace(rtrim, "");
        }
      };
      rreturn = /\r/g;
      QJ.val = function(el, val) {
        var ret;
        if (arguments.length > 1) {
          return el.value = val;
        } else {
          ret = el.value;
          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } else {
            if (ret === null) {
              return "";
            } else {
              return ret;
            }
          }
        }
      };
      QJ.preventDefault = function(eventObject) {
        if (typeof eventObject.preventDefault === "function") {
          eventObject.preventDefault();
          return;
        }
        eventObject.returnValue = false;
        return false;
      };
      QJ.normalizeEvent = function(e2) {
        var original;
        original = e2;
        e2 = {
          which: original.which != null ? original.which : void 0,
          target: original.target || original.srcElement,
          preventDefault: function() {
            return QJ.preventDefault(original);
          },
          originalEvent: original,
          data: original.data || original.detail
        };
        if (e2.which == null) {
          e2.which = original.charCode != null ? original.charCode : original.keyCode;
        }
        return e2;
      };
      QJ.on = function(element, eventName, callback) {
        var el, i2, j, len, len1, multEventName, originalCallback, ref;
        if (element.length) {
          for (i2 = 0, len = element.length; i2 < len; i2++) {
            el = element[i2];
            QJ.on(el, eventName, callback);
          }
          return;
        }
        if (eventName.match(" ")) {
          ref = eventName.split(" ");
          for (j = 0, len1 = ref.length; j < len1; j++) {
            multEventName = ref[j];
            QJ.on(element, multEventName, callback);
          }
          return;
        }
        originalCallback = callback;
        callback = function(e2) {
          e2 = QJ.normalizeEvent(e2);
          return originalCallback(e2);
        };
        if (element.addEventListener) {
          return element.addEventListener(eventName, callback, false);
        }
        if (element.attachEvent) {
          eventName = "on" + eventName;
          return element.attachEvent(eventName, callback);
        }
        element["on" + eventName] = callback;
      };
      QJ.addClass = function(el, className) {
        var e2;
        if (el.length) {
          return function() {
            var i2, len, results;
            results = [];
            for (i2 = 0, len = el.length; i2 < len; i2++) {
              e2 = el[i2];
              results.push(QJ.addClass(e2, className));
            }
            return results;
          }();
        }
        if (el.classList) {
          return el.classList.add(className);
        } else {
          return el.className += " " + className;
        }
      };
      QJ.hasClass = function(el, className) {
        var e2, hasClass, i2, len;
        if (el.length) {
          hasClass = true;
          for (i2 = 0, len = el.length; i2 < len; i2++) {
            e2 = el[i2];
            hasClass = hasClass && QJ.hasClass(e2, className);
          }
          return hasClass;
        }
        if (el.classList) {
          return el.classList.contains(className);
        } else {
          return new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
        }
      };
      QJ.removeClass = function(el, className) {
        var cls, e2, i2, len, ref, results;
        if (el.length) {
          return function() {
            var i3, len2, results2;
            results2 = [];
            for (i3 = 0, len2 = el.length; i3 < len2; i3++) {
              e2 = el[i3];
              results2.push(QJ.removeClass(e2, className));
            }
            return results2;
          }();
        }
        if (el.classList) {
          ref = className.split(" ");
          results = [];
          for (i2 = 0, len = ref.length; i2 < len; i2++) {
            cls = ref[i2];
            results.push(el.classList.remove(cls));
          }
          return results;
        } else {
          return el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
      };
      QJ.toggleClass = function(el, className, bool) {
        var e2;
        if (el.length) {
          return function() {
            var i2, len, results;
            results = [];
            for (i2 = 0, len = el.length; i2 < len; i2++) {
              e2 = el[i2];
              results.push(QJ.toggleClass(e2, className, bool));
            }
            return results;
          }();
        }
        if (bool) {
          if (!QJ.hasClass(el, className)) {
            return QJ.addClass(el, className);
          }
        } else {
          return QJ.removeClass(el, className);
        }
      };
      QJ.append = function(el, toAppend) {
        var e2;
        if (el.length) {
          return function() {
            var i2, len, results;
            results = [];
            for (i2 = 0, len = el.length; i2 < len; i2++) {
              e2 = el[i2];
              results.push(QJ.append(e2, toAppend));
            }
            return results;
          }();
        }
        return el.insertAdjacentHTML("beforeend", toAppend);
      };
      QJ.find = function(el, selector) {
        if (el instanceof NodeList || el instanceof Array) {
          el = el[0];
        }
        return el.querySelectorAll(selector);
      };
      QJ.trigger = function(el, name, data) {
        var e2, error, ev;
        try {
          ev = new CustomEvent(name, {
            detail: data
          });
        } catch (error2) {
          e2 = error2;
          ev = document.createEvent("CustomEvent");
          if (ev.initCustomEvent) {
            ev.initCustomEvent(name, true, true, data);
          } else {
            ev.initEvent(name, true, true, data);
          }
        }
        return el.dispatchEvent(ev);
      };
      module.exports = QJ;
    }).call(exports);
  }
});

// node_modules/payment/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/payment/lib/index.js"(exports, module) {
    (function() {
      var Payment2, QJ, cardFromNumber, cardFromType, cards, cursorSafeAssignValue, defaultFormat, formatBackCardNumber, formatBackExpiry, formatCardNumber, formatExpiry, formatForwardExpiry, formatForwardSlash, formatMonthExpiry, globalThis2, hasTextSelected, luhnCheck, reFormatCardNumber, restrictCVC, restrictCardNumber, restrictCombinedExpiry, restrictExpiry, restrictMonthExpiry, restrictNumeric, restrictYearExpiry, setCardType, indexOf = [].indexOf || function(item) {
        for (var i2 = 0, l2 = this.length; i2 < l2; i2++) {
          if (i2 in this && this[i2] === item)
            return i2;
        }
        return -1;
      };
      globalThis2 = require_polyfill()();
      QJ = require_lib();
      defaultFormat = /(\d{1,4})/g;
      cards = [
        {
          type: "amex",
          pattern: /^3[47]/,
          format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
          length: [15],
          cvcLength: [4],
          luhn: true
        },
        {
          type: "dankort",
          pattern: /^5019/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        },
        {
          type: "dinersclub",
          pattern: /^(36|38|30[0-5])/,
          format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
          length: [14],
          cvcLength: [3],
          luhn: true
        },
        {
          type: "discover",
          pattern: /^(6011|65|64[4-9]|622)/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        },
        {
          type: "elo",
          pattern: /^401178|^401179|^431274|^438935|^451416|^457393|^457631|^457632|^504175|^627780|^636297|^636369|^636368|^(506699|5067[0-6]\d|50677[0-8])|^(50900\d|5090[1-9]\d|509[1-9]\d{2})|^65003[1-3]|^(65003[5-9]|65004\d|65005[0-1])|^(65040[5-9]|6504[1-3]\d)|^(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|^(65054[1-9]|6505[5-8]\d|65059[0-8])|^(65070\d|65071[0-8])|^65072[0-7]|^(65090[1-9]|65091\d|650920)|^(65165[2-9]|6516[6-7]\d)|^(65500\d|65501\d)|^(65502[1-9]|6550[3-4]\d|65505[0-8])|^(65092[1-9]|65097[0-8])/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        },
        {
          type: "hipercard",
          pattern: /^(384100|384140|384160|606282|637095|637568|60(?!11))/,
          format: defaultFormat,
          length: [14, 15, 16, 17, 18, 19],
          cvcLength: [3],
          luhn: true
        },
        {
          type: "jcb",
          pattern: /^(308[8-9]|309[0-3]|3094[0]{4}|309[6-9]|310[0-2]|311[2-9]|3120|315[8-9]|333[7-9]|334[0-9]|35)/,
          format: defaultFormat,
          length: [16, 19],
          cvcLength: [3],
          luhn: true
        },
        {
          type: "laser",
          pattern: /^(6706|6771|6709)/,
          format: defaultFormat,
          length: [16, 17, 18, 19],
          cvcLength: [3],
          luhn: true
        },
        {
          type: "maestro",
          pattern: /^(50|5[6-9]|6007|6220|6304|6703|6708|6759|676[1-3])/,
          format: defaultFormat,
          length: [12, 13, 14, 15, 16, 17, 18, 19],
          cvcLength: [3],
          luhn: true
        },
        {
          type: "mastercard",
          pattern: /^(5[1-5]|677189)|^(22[2-9][1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        },
        {
          type: "mir",
          pattern: /^220[0-4][0-9][0-9]\d{10}$/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        },
        {
          type: "troy",
          pattern: /^9792/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        },
        {
          type: "unionpay",
          pattern: /^62/,
          format: defaultFormat,
          length: [16, 17, 18, 19],
          cvcLength: [3],
          luhn: false
        },
        {
          type: "visaelectron",
          pattern: /^4(026|17500|405|508|844|91[37])/,
          format: defaultFormat,
          length: [16],
          cvcLength: [3],
          luhn: true
        },
        {
          type: "visa",
          pattern: /^4/,
          format: defaultFormat,
          length: [13, 16],
          cvcLength: [3],
          luhn: true
        }
      ];
      cardFromNumber = function(num) {
        var card, foundCard, j, len, match;
        num = (num + "").replace(/\D/g, "");
        foundCard = void 0;
        for (j = 0, len = cards.length; j < len; j++) {
          card = cards[j];
          if (match = num.match(card.pattern)) {
            if (!foundCard || match[0].length > foundCard[1][0].length) {
              foundCard = [card, match];
            }
          }
        }
        return foundCard && foundCard[0];
      };
      cardFromType = function(type) {
        var card, j, len;
        for (j = 0, len = cards.length; j < len; j++) {
          card = cards[j];
          if (card.type === type) {
            return card;
          }
        }
      };
      luhnCheck = function(num) {
        var digit, digits, j, len, odd, sum;
        odd = true;
        sum = 0;
        digits = (num + "").split("").reverse();
        for (j = 0, len = digits.length; j < len; j++) {
          digit = digits[j];
          digit = parseInt(digit, 10);
          if (odd = !odd) {
            digit *= 2;
          }
          if (digit > 9) {
            digit -= 9;
          }
          sum += digit;
        }
        return sum % 10 === 0;
      };
      hasTextSelected = function(target) {
        var e2, ref;
        try {
          if (target.selectionStart != null && target.selectionStart !== target.selectionEnd) {
            return true;
          }
          if ((typeof document !== "undefined" && document !== null ? (ref = document.selection) != null ? ref.createRange : void 0 : void 0) != null) {
            if (document.selection.createRange().text) {
              return true;
            }
          }
        } catch (error) {
          e2 = error;
        }
        return false;
      };
      reFormatCardNumber = function(e2) {
        return setTimeout(function(_this) {
          return function() {
            var target, value;
            target = e2.target;
            value = QJ.val(target);
            value = Payment2.fns.formatCardNumber(value);
            cursorSafeAssignValue(target, value);
            return QJ.trigger(target, "change");
          };
        }(this));
      };
      formatCardNumber = function(maxLength) {
        return function(e2) {
          var card, digit, i2, j, len, length, re, target, upperLength, upperLengths, value;
          if (e2.which > 0) {
            digit = String.fromCharCode(e2.which);
            value = QJ.val(e2.target) + digit;
          } else {
            digit = e2.data;
            value = QJ.val(e2.target);
          }
          if (!/^\d+$/.test(digit)) {
            return;
          }
          target = e2.target;
          card = cardFromNumber(value);
          length = value.replace(/\D/g, "").length;
          upperLengths = [16];
          if (card) {
            upperLengths = card.length;
          }
          if (maxLength) {
            upperLengths = upperLengths.filter(function(x) {
              return x <= maxLength;
            });
          }
          for (i2 = j = 0, len = upperLengths.length; j < len; i2 = ++j) {
            upperLength = upperLengths[i2];
            if (length >= upperLength && upperLengths[i2 + 1]) {
              continue;
            }
            if (length >= upperLength) {
              return;
            }
          }
          if (hasTextSelected(target)) {
            return;
          }
          if (card && card.type === "amex") {
            re = /^(\d{4}|\d{4}\s\d{6})$/;
          } else {
            re = /(?:^|\s)(\d{4})$/;
          }
          value = value.substring(0, value.length - 1);
          if (re.test(value)) {
            e2.preventDefault();
            QJ.val(target, value + " " + digit);
            return QJ.trigger(target, "change");
          }
        };
      };
      formatBackCardNumber = function(e2) {
        var target, value;
        target = e2.target;
        value = QJ.val(target);
        if (e2.meta) {
          return;
        }
        if (e2.which !== 8) {
          return;
        }
        if (hasTextSelected(target)) {
          return;
        }
        if (/\d\s$/.test(value)) {
          e2.preventDefault();
          QJ.val(target, value.replace(/\d\s$/, ""));
          return QJ.trigger(target, "change");
        } else if (/\s\d?$/.test(value)) {
          e2.preventDefault();
          QJ.val(target, value.replace(/\s\d?$/, ""));
          return QJ.trigger(target, "change");
        }
      };
      formatExpiry = function(e2) {
        var digit, target, val;
        target = e2.target;
        if (e2.which > 0) {
          digit = String.fromCharCode(e2.which);
          val = QJ.val(target) + digit;
        } else {
          digit = e2.data;
          val = QJ.val(target);
        }
        if (!/^\d+$/.test(digit)) {
          return;
        }
        if (/^\d$/.test(val) && (val !== "0" && val !== "1")) {
          e2.preventDefault();
          QJ.val(target, "0" + val + " / ");
          return QJ.trigger(target, "change");
        } else if (/^\d\d$/.test(val)) {
          e2.preventDefault();
          QJ.val(target, val + " / ");
          return QJ.trigger(target, "change");
        }
      };
      formatMonthExpiry = function(e2) {
        var digit, target, val;
        digit = String.fromCharCode(e2.which);
        if (!/^\d+$/.test(digit)) {
          return;
        }
        target = e2.target;
        val = QJ.val(target) + digit;
        if (/^\d$/.test(val) && (val !== "0" && val !== "1")) {
          e2.preventDefault();
          QJ.val(target, "0" + val);
          return QJ.trigger(target, "change");
        } else if (/^\d\d$/.test(val)) {
          e2.preventDefault();
          QJ.val(target, "" + val);
          return QJ.trigger(target, "change");
        }
      };
      formatForwardExpiry = function(e2) {
        var digit, target, val;
        digit = String.fromCharCode(e2.which);
        if (!/^\d+$/.test(digit)) {
          return;
        }
        target = e2.target;
        val = QJ.val(target);
        if (/^\d\d$/.test(val)) {
          QJ.val(target, val + " / ");
          return QJ.trigger(target, "change");
        }
      };
      formatForwardSlash = function(e2) {
        var slash, target, val;
        slash = String.fromCharCode(e2.which);
        if (slash !== "/") {
          return;
        }
        target = e2.target;
        val = QJ.val(target);
        if (/^\d$/.test(val) && val !== "0") {
          QJ.val(target, "0" + val + " / ");
          return QJ.trigger(target, "change");
        }
      };
      formatBackExpiry = function(e2) {
        var target, value;
        if (e2.metaKey) {
          return;
        }
        target = e2.target;
        value = QJ.val(target);
        if (e2.which !== 8) {
          return;
        }
        if (hasTextSelected(target)) {
          return;
        }
        if (/\d(\s|\/)+$/.test(value)) {
          e2.preventDefault();
          QJ.val(target, value.replace(/\d(\s|\/)*$/, ""));
          return QJ.trigger(target, "change");
        } else if (/\s\/\s?\d?$/.test(value)) {
          e2.preventDefault();
          QJ.val(target, value.replace(/\s\/\s?\d?$/, ""));
          return QJ.trigger(target, "change");
        }
      };
      restrictNumeric = function(e2) {
        var input;
        if (e2.metaKey || e2.ctrlKey) {
          return true;
        }
        if (e2.which === 32) {
          return e2.preventDefault();
        }
        if (e2.which === 0) {
          return true;
        }
        if (e2.which < 33) {
          return true;
        }
        input = String.fromCharCode(e2.which);
        if (!/[\d\s]/.test(input)) {
          return e2.preventDefault();
        }
      };
      restrictCardNumber = function(maxLength) {
        return function(e2) {
          var card, digit, length, target, value;
          target = e2.target;
          digit = String.fromCharCode(e2.which);
          if (!/^\d+$/.test(digit)) {
            return;
          }
          if (hasTextSelected(target)) {
            return;
          }
          value = (QJ.val(target) + digit).replace(/\D/g, "");
          card = cardFromNumber(value);
          length = 16;
          if (card) {
            length = card.length[card.length.length - 1];
          }
          if (maxLength) {
            length = Math.min(length, maxLength);
          }
          if (!(value.length <= length)) {
            return e2.preventDefault();
          }
        };
      };
      restrictExpiry = function(e2, length) {
        var digit, target, value;
        target = e2.target;
        digit = String.fromCharCode(e2.which);
        if (!/^\d+$/.test(digit)) {
          return;
        }
        if (hasTextSelected(target)) {
          return;
        }
        value = QJ.val(target) + digit;
        value = value.replace(/\D/g, "");
        if (value.length > length) {
          return e2.preventDefault();
        }
      };
      restrictCombinedExpiry = function(e2) {
        return restrictExpiry(e2, 6);
      };
      restrictMonthExpiry = function(e2) {
        return restrictExpiry(e2, 2);
      };
      restrictYearExpiry = function(e2) {
        return restrictExpiry(e2, 4);
      };
      restrictCVC = function(e2) {
        var digit, target, val;
        target = e2.target;
        digit = String.fromCharCode(e2.which);
        if (!/^\d+$/.test(digit)) {
          return;
        }
        if (hasTextSelected(target)) {
          return;
        }
        val = QJ.val(target) + digit;
        if (!(val.length <= 4)) {
          return e2.preventDefault();
        }
      };
      setCardType = function(e2) {
        var allTypes, card, cardType, target, val;
        target = e2.target;
        val = QJ.val(target);
        cardType = Payment2.fns.cardType(val) || "unknown";
        if (!QJ.hasClass(target, cardType)) {
          allTypes = function() {
            var j, len, results;
            results = [];
            for (j = 0, len = cards.length; j < len; j++) {
              card = cards[j];
              results.push(card.type);
            }
            return results;
          }();
          QJ.removeClass(target, "unknown");
          QJ.removeClass(target, allTypes.join(" "));
          QJ.addClass(target, cardType);
          QJ.toggleClass(target, "identified", cardType !== "unknown");
          return QJ.trigger(target, "payment.cardType", cardType);
        }
      };
      cursorSafeAssignValue = function(target, value) {
        var selectionEnd;
        selectionEnd = target.selectionEnd;
        QJ.val(target, value);
        if (selectionEnd) {
          return target.selectionEnd = selectionEnd;
        }
      };
      Payment2 = function() {
        function Payment3() {
        }
        Payment3.J = QJ;
        Payment3.fns = {
          cardExpiryVal: function(value) {
            var month, prefix, ref, year;
            value = value.replace(/\s/g, "");
            ref = value.split("/", 2), month = ref[0], year = ref[1];
            if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
              prefix = (/* @__PURE__ */ new Date()).getFullYear();
              prefix = prefix.toString().slice(0, 2);
              year = prefix + year;
            }
            month = parseInt(month, 10);
            year = parseInt(year, 10);
            return {
              month,
              year
            };
          },
          validateCardNumber: function(num) {
            var card, ref;
            num = (num + "").replace(/\s+|-/g, "");
            if (!/^\d+$/.test(num)) {
              return false;
            }
            card = cardFromNumber(num);
            if (!card) {
              return false;
            }
            return (ref = num.length, indexOf.call(card.length, ref) >= 0) && (card.luhn === false || luhnCheck(num));
          },
          validateCardExpiry: function(month, year) {
            var currentTime, expiry, prefix, ref, ref1;
            if (typeof month === "object" && "month" in month) {
              ref = month, month = ref.month, year = ref.year;
            } else if (typeof month === "string" && indexOf.call(month, "/") >= 0) {
              ref1 = Payment3.fns.cardExpiryVal(month), month = ref1.month, year = ref1.year;
            }
            if (!(month && year)) {
              return false;
            }
            month = QJ.trim(month);
            year = QJ.trim(year);
            if (!/^\d+$/.test(month)) {
              return false;
            }
            if (!/^\d+$/.test(year)) {
              return false;
            }
            month = parseInt(month, 10);
            if (!(month && month <= 12)) {
              return false;
            }
            if (year.length === 2) {
              prefix = (/* @__PURE__ */ new Date()).getFullYear();
              prefix = prefix.toString().slice(0, 2);
              year = prefix + year;
            }
            expiry = new Date(year, month);
            currentTime = /* @__PURE__ */ new Date();
            expiry.setMonth(expiry.getMonth() - 1);
            expiry.setMonth(expiry.getMonth() + 1, 1);
            return expiry > currentTime;
          },
          validateCardCVC: function(cvc, type) {
            var ref, ref1;
            cvc = QJ.trim(cvc);
            if (!/^\d+$/.test(cvc)) {
              return false;
            }
            if (type && cardFromType(type)) {
              return ref = cvc.length, indexOf.call((ref1 = cardFromType(type)) != null ? ref1.cvcLength : void 0, ref) >= 0;
            } else {
              return cvc.length >= 3 && cvc.length <= 4;
            }
          },
          cardType: function(num) {
            var ref;
            if (!num) {
              return null;
            }
            return ((ref = cardFromNumber(num)) != null ? ref.type : void 0) || null;
          },
          formatCardNumber: function(num) {
            var card, groups, ref, upperLength;
            card = cardFromNumber(num);
            if (!card) {
              return num;
            }
            upperLength = card.length[card.length.length - 1];
            num = num.replace(/\D/g, "");
            num = num.slice(0, upperLength);
            if (card.format.global) {
              return (ref = num.match(card.format)) != null ? ref.join(" ") : void 0;
            } else {
              groups = card.format.exec(num);
              if (groups == null) {
                return;
              }
              groups.shift();
              groups = groups.filter(function(n2) {
                return n2;
              });
              return groups.join(" ");
            }
          }
        };
        Payment3.restrictNumeric = function(el) {
          QJ.on(el, "keypress", restrictNumeric);
          return QJ.on(el, "input", restrictNumeric);
        };
        Payment3.cardExpiryVal = function(el) {
          return Payment3.fns.cardExpiryVal(QJ.val(el));
        };
        Payment3.formatCardCVC = function(el) {
          Payment3.restrictNumeric(el);
          QJ.on(el, "keypress", restrictCVC);
          QJ.on(el, "input", restrictCVC);
          return el;
        };
        Payment3.formatCardExpiry = function(el) {
          var month, year;
          Payment3.restrictNumeric(el);
          if (el.length && el.length === 2) {
            month = el[0], year = el[1];
            this.formatCardExpiryMultiple(month, year);
          } else {
            QJ.on(el, "keypress", restrictCombinedExpiry);
            QJ.on(el, "keypress", formatExpiry);
            QJ.on(el, "keypress", formatForwardSlash);
            QJ.on(el, "keypress", formatForwardExpiry);
            QJ.on(el, "keydown", formatBackExpiry);
            QJ.on(el, "input", formatExpiry);
          }
          return el;
        };
        Payment3.formatCardExpiryMultiple = function(month, year) {
          QJ.on(month, "keypress", restrictMonthExpiry);
          QJ.on(month, "keypress", formatMonthExpiry);
          QJ.on(month, "input", formatMonthExpiry);
          QJ.on(year, "keypress", restrictYearExpiry);
          return QJ.on(year, "input", restrictYearExpiry);
        };
        Payment3.formatCardNumber = function(el, maxLength) {
          Payment3.restrictNumeric(el);
          QJ.on(el, "keypress", restrictCardNumber(maxLength));
          QJ.on(el, "keypress", formatCardNumber(maxLength));
          QJ.on(el, "keydown", formatBackCardNumber);
          QJ.on(el, "keyup blur", setCardType);
          QJ.on(el, "blur", formatCardNumber(maxLength));
          QJ.on(el, "paste", reFormatCardNumber);
          QJ.on(el, "input", formatCardNumber(maxLength));
          return el;
        };
        Payment3.getCardArray = function() {
          return cards;
        };
        Payment3.setCardArray = function(cardArray) {
          cards = cardArray;
          return true;
        };
        Payment3.addToCardArray = function(cardObject) {
          return cards.push(cardObject);
        };
        Payment3.removeFromCardArray = function(type) {
          var key, value;
          for (key in cards) {
            value = cards[key];
            if (value.type === type) {
              cards.splice(key, 1);
            }
          }
          return true;
        };
        return Payment3;
      }();
      module.exports = Payment2;
      globalThis2.Payment = Payment2;
    }).call(exports);
  }
});

// node_modules/react-credit-cards-2/dist/es/index.js
var import_react = __toESM(require_react());
var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
var t = { visa: { niceType: "Visa", type: "visa", patterns: [4], gaps: [4, 8, 12], lengths: [16, 18, 19], code: { name: "CVV", size: 3 } }, mastercard: { niceType: "Mastercard", type: "mastercard", patterns: [[51, 55], [2221, 2229], [223, 229], [23, 26], [270, 271], 2720], gaps: [4, 8, 12], lengths: [16], code: { name: "CVC", size: 3 } }, "american-express": { niceType: "American Express", type: "american-express", patterns: [34, 37], gaps: [4, 10], lengths: [15], code: { name: "CID", size: 4 } }, "diners-club": { niceType: "Diners Club", type: "diners-club", patterns: [[300, 305], 36, 38, 39], gaps: [4, 10], lengths: [14, 16, 19], code: { name: "CVV", size: 3 } }, discover: { niceType: "Discover", type: "discover", patterns: [6011, [644, 649], 65], gaps: [4, 8, 12], lengths: [16, 19], code: { name: "CID", size: 3 } }, jcb: { niceType: "JCB", type: "jcb", patterns: [2131, 1800, [3528, 3589]], gaps: [4, 8, 12], lengths: [16, 17, 18, 19], code: { name: "CVV", size: 3 } }, unionpay: { niceType: "UnionPay", type: "unionpay", patterns: [620, [624, 626], [62100, 62182], [62184, 62187], [62185, 62197], [62200, 62205], [622010, 622999], 622018, [622019, 622999], [62207, 62209], [622126, 622925], [623, 626], 6270, 6272, 6276, [627700, 627779], [627781, 627799], [6282, 6289], 6291, 6292, 810, [8110, 8131], [8132, 8151], [8152, 8163], [8164, 8171]], gaps: [4, 8, 12], lengths: [14, 15, 16, 17, 18, 19], code: { name: "CVN", size: 3 } }, maestro: { niceType: "Maestro", type: "maestro", patterns: [493698, [5e5, 504174], [504176, 506698], [506779, 508999], [56, 59], 63, 67, 6], gaps: [4, 8, 12], lengths: [12, 13, 14, 15, 16, 17, 18, 19], code: { name: "CVC", size: 3 } }, elo: { niceType: "Elo", type: "elo", patterns: [401178, 401179, 438935, 457631, 457632, 431274, 451416, 457393, 504175, [506699, 506778], [509e3, 509999], 627780, 636297, 636368, [650031, 650033], [650035, 650051], [650405, 650439], [650485, 650538], [650541, 650598], [650700, 650718], [650720, 650727], [650901, 650978], [651652, 651679], [655e3, 655019], [655021, 655058]], gaps: [4, 8, 12], lengths: [16], code: { name: "CVE", size: 3 } }, mir: { niceType: "Mir", type: "mir", patterns: [[2200, 2204]], gaps: [4, 8, 12], lengths: [16, 17, 18, 19], code: { name: "CVP2", size: 3 } }, hiper: { niceType: "Hiper", type: "hiper", patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612], gaps: [4, 8, 12], lengths: [16], code: { name: "CVC", size: 3 } }, hipercard: { niceType: "Hipercard", type: "hipercard", patterns: [606282], gaps: [4, 8, 12], lengths: [16], code: { name: "CVC", size: 3 } } };
var n = {};
var a = {};
Object.defineProperty(a, "__esModule", { value: true }), a.clone = void 0, a.clone = function(e2) {
  return e2 ? JSON.parse(JSON.stringify(e2)) : null;
};
var s = {};
Object.defineProperty(s, "__esModule", { value: true }), s.matches = void 0, s.matches = function(e2, r2) {
  return Array.isArray(r2) ? function(e3, r3, t2) {
    var n2 = String(r3).length, a2 = e3.substr(0, n2), s2 = parseInt(a2, 10);
    return r3 = parseInt(String(r3).substr(0, a2.length), 10), t2 = parseInt(String(t2).substr(0, a2.length), 10), s2 >= r3 && s2 <= t2;
  }(e2, r2[0], r2[1]) : function(e3, r3) {
    return (r3 = String(r3)).substring(0, e3.length) === e3.substring(0, r3.length);
  }(e2, r2);
}, Object.defineProperty(n, "__esModule", { value: true }), n.addMatchingCardsToResults = void 0;
var c = a;
var i = s;
n.addMatchingCardsToResults = function(e2, r2, t2) {
  var n2, a2;
  for (n2 = 0; n2 < r2.patterns.length; n2++) {
    var s2 = r2.patterns[n2];
    if (i.matches(e2, s2)) {
      var o2 = c.clone(r2);
      a2 = Array.isArray(s2) ? String(s2[0]).length : String(s2).length, e2.length >= a2 && (o2.matchStrength = a2), t2.push(o2);
      break;
    }
  }
};
var o = {};
Object.defineProperty(o, "__esModule", { value: true }), o.isValidInputType = void 0, o.isValidInputType = function(e2) {
  return "string" == typeof e2 || e2 instanceof String;
};
var l = {};
Object.defineProperty(l, "__esModule", { value: true }), l.findBestMatch = void 0, l.findBestMatch = function(e2) {
  return function(e3) {
    var r2 = e3.filter(function(e4) {
      return e4.matchStrength;
    }).length;
    return r2 > 0 && r2 === e3.length;
  }(e2) ? e2.reduce(function(e3, r2) {
    return e3 ? Number(e3.matchStrength) < Number(r2.matchStrength) ? r2 : e3 : r2;
  }) : null;
};
var d = r && r.__assign || function() {
  return d = Object.assign || function(e2) {
    for (var r2, t2 = 1, n2 = arguments.length; t2 < n2; t2++)
      for (var a2 in r2 = arguments[t2])
        Object.prototype.hasOwnProperty.call(r2, a2) && (e2[a2] = r2[a2]);
    return e2;
  }, d.apply(this, arguments);
};
var u = t;
var p = n;
var m = o;
var f = l;
var v = a;
var g = {};
var h = { VISA: "visa", MASTERCARD: "mastercard", AMERICAN_EXPRESS: "american-express", DINERS_CLUB: "diners-club", DISCOVER: "discover", JCB: "jcb", UNIONPAY: "unionpay", MAESTRO: "maestro", ELO: "elo", MIR: "mir", HIPER: "hiper", HIPERCARD: "hipercard" };
var y = [h.VISA, h.MASTERCARD, h.AMERICAN_EXPRESS, h.DINERS_CLUB, h.DISCOVER, h.JCB, h.UNIONPAY, h.MAESTRO, h.ELO, h.MIR, h.HIPER, h.HIPERCARD];
var _ = v.clone(y);
function b(e2) {
  return g[e2] || u[e2];
}
function C(e2, r2) {
  void 0 === r2 && (r2 = false);
  var t2 = _.indexOf(e2);
  if (!r2 && -1 === t2)
    throw new Error('"' + e2 + '" is not a supported card type.');
  return t2;
}
function E(e2) {
  var r2 = [];
  if (!m.isValidInputType(e2))
    return r2;
  if (0 === e2.length)
    return _.map(function(e3) {
      return v.clone(b(e3));
    });
  _.forEach(function(t3) {
    var n2 = b(t3);
    p.addMatchingCardsToResults(e2, n2, r2);
  });
  var t2 = f.findBestMatch(r2);
  return t2 ? [t2] : r2;
}
E.getTypeInfo = function(e2) {
  return v.clone(b(e2));
}, E.removeCard = function(e2) {
  var r2 = C(e2);
  _.splice(r2, 1);
}, E.addCard = function(e2) {
  var r2 = C(e2.type, true);
  g[e2.type] = e2, -1 === r2 && _.push(e2.type);
}, E.updateCard = function(e2, r2) {
  var t2 = g[e2] || u[e2];
  if (!t2)
    throw new Error('"' + e2 + "\" is not a recognized type. Use `addCard` instead.'");
  if (r2.type && t2.type !== r2.type)
    throw new Error("Cannot overwrite type parameter.");
  var n2 = v.clone(t2);
  n2 = d(d({}, n2), r2), g[n2.type] = n2;
}, E.changeOrder = function(e2, r2) {
  var t2 = C(e2);
  _.splice(t2, 1), _.splice(r2, 0, e2);
}, E.resetModifications = function() {
  _ = v.clone(y), g = {};
}, E.types = h;
var S = E;
var N = { niceType: "Dankort", type: "dankort", patterns: [5019], gaps: [4, 8, 12], lengths: [16], code: { name: "CVC", size: 3 } };
var M = { niceType: "Laser", type: "laser", patterns: [6706, 6771, 6709], gaps: [4, 8, 12], lengths: [16, 19], code: { name: "CVV", size: 3 } };
var R = { niceType: "Visa Electron", type: "visa-electron", patterns: [4026, 417500, 4405, 4508, 4844, 49137], gaps: [4, 8, 12], lengths: [16], code: { name: "CVV", size: 3 } };
var T = { validate: function(e2) {
  var r2, t2, n2 = String(e2).replace(/[\s]/g, ""), a2 = n2.length, s2 = false, c2 = 0;
  if (!/^[0-9]+$/.test(n2))
    return false;
  for (var i2 = a2; i2 > 0; i2--) {
    if (r2 = parseInt(n2.charAt(i2 - 1)), s2) {
      switch (t2 = 2 * r2) {
        case 10:
          t2 = 1;
          break;
        case 12:
          t2 = 3;
          break;
        case 14:
          t2 = 5;
          break;
        case 16:
          t2 = 7;
          break;
        case 18:
          t2 = 9;
      }
      c2 += t2;
    } else
      c2 += r2;
    s2 = !s2;
  }
  return 0 !== c2 && c2 % 10 == 0;
} }.validate;
var I = function(e2) {
  var r2 = S(e2.toString().trim().replace(" ", ""));
  if (1 === r2.length) {
    var t2 = r2.shift();
    return (null == t2 ? void 0 : t2.type) || "unknown";
  }
  return "unknown";
};
var V = function() {
  return S.updateCard(S.types.MAESTRO, { patterns: [493698, [5e3, 5018], [502e3, 506698], [506779, 508999], [56, 59], 63, 67, 6] }), S.updateCard(S.types.HIPERCARD, { patterns: [384100, 384140, 384160, 606282, 637095, 637568] }), S.addCard(N), S.addCard(M), S.addCard(R), Object.values(S.types).concat(["dankort", "laser", "visa-electron"]);
};
var A = { amex: ["amex", "americanexpress", "american-express"], dinersclub: ["diners", "dinersclub", "diners-club"], visaelectron: ["visaelectron", "visa-electron"] };
function O(r2) {
  var t2 = r2.acceptedCards, n2 = void 0 === t2 ? [] : t2, a2 = r2.number, s2 = r2.issuer, c2 = r2.preview, i2 = void 0 !== c2 && c2, o2 = r2.expiry, l2 = r2.cvc, d2 = r2.focused, u2 = r2.locale, p2 = void 0 === u2 ? { valid: "valid thru" } : u2, m2 = r2.name, f2 = r2.placeholders, v2 = void 0 === f2 ? { name: "YOUR NAME HERE" } : f2, g2 = r2.callback, h2 = import_react.default.useState(V()), y2 = h2[0], _2 = h2[1], b2 = import_react.default.useMemo(function() {
    return (null == n2 ? void 0 : n2.length) ? y2.filter(function(e2) {
      return n2.includes(e2);
    }) : y2;
  }, [n2, y2]), C2 = import_react.default.useMemo(function() {
    var e2 = "unknown";
    if (a2) {
      var r3 = I(a2);
      b2.includes(r3) && (e2 = r3);
    }
    var t3 = 16;
    return A.amex.includes(e2) ? t3 = 15 : (null == A ? void 0 : A.dinersclub.includes(e2)) ? t3 = 14 : ["hipercard", "mastercard", "visa"].includes(e2) && (t3 = 19), { issuer: e2, maxLength: t3 };
  }, [a2, b2]), E2 = import_react.default.useMemo(function() {
    return i2 && s2 ? s2.toLowerCase() : C2.issuer;
  }, [C2.issuer, s2, i2]), S2 = import_react.default.useMemo(function() {
    var e2 = i2 ? 19 : C2.maxLength, r3 = "number" == typeof a2 ? a2.toString() : String(a2).replace(/[A-Za-z]| /g, "");
    for (isNaN(parseInt(r3, 10)) && !i2 && (r3 = ""), e2 > 16 && (e2 = r3.length <= 16 ? 16 : e2), r3.length > e2 && (r3 = r3.slice(0, e2)); r3.length < e2; )
      r3 += "\u2022";
    if (A.amex.includes(E2) || A.dinersclub.includes(E2)) {
      var t3 = [0, 4, 10], n3 = [4, 6, 5];
      r3 = "".concat(r3.substr(t3[0], n3[0]), " ").concat(r3.substr(t3[1], n3[1]), " ").concat(r3.substr(t3[2], n3[2]));
    } else if (r3.length > 16) {
      t3 = [0, 4, 8, 12], n3 = [4, 7];
      r3 = "".concat(r3.substr(t3[0], n3[0]), " ").concat(r3.substr(t3[1], n3[0]), " ").concat(r3.substr(t3[2], n3[0]), " ").concat(r3.substr(t3[3], n3[1]));
    } else
      for (var s3 = 1; s3 < e2 / 4; s3++) {
        var c3 = 4 * s3 + (s3 - 1);
        r3 = "".concat(r3.slice(0, c3), " ").concat(r3.slice(c3));
      }
    return r3;
  }, [C2.maxLength, E2, a2, i2]), N2 = import_react.default.useMemo(function() {
    var e2, r3 = "number" == typeof o2 ? o2.toString() : o2, t3 = "", n3 = "";
    for (r3.includes("/") ? (t3 = (e2 = r3.split("/"))[0], n3 = e2[1]) : r3.length && (t3 = r3.substr(0, 2), n3 = r3.substr(2, 6)); t3.length < 2; )
      t3 += "\u2022";
    for (n3.length > 2 && (n3 = n3.substr(2, 4)); n3.length < 2; )
      n3 += "\u2022";
    return "".concat(t3, "/").concat(n3);
  }, [o2]), M2 = import_react.default.useCallback(function(e2) {
    if (e2.length)
      _2(y2.filter(function(r4) {
        return e2.includes(r4);
      }));
    else {
      var r3 = V();
      _2(r3);
    }
  }, [y2]);
  return import_react.default.useEffect(function() {
    S2 !== a2 && "function" == typeof g2 && g2(C2, T(String(a2))), V().toString() !== y2.toString() && M2(n2);
  }, [n2, g2, C2, S2, M2, a2, y2]), import_react.default.createElement("div", { key: "Cards", className: "rccs", "data-testid": "rccs" }, import_react.default.createElement("div", { "data-testid": "rccs__card", className: ["rccs__card", "rccs__card--".concat(E2), "cvc" === d2 && "american-express" !== E2 ? "rccs__card--flipped" : ""].join(" ").trim() }, import_react.default.createElement("div", { className: "rccs__card--front" }, import_react.default.createElement("div", { className: "rccs__card__background" }), import_react.default.createElement("div", { className: "rccs__issuer" }), import_react.default.createElement("div", { className: ["rccs__cvc__front", "cvc" === d2 ? "rccs--focused" : ""].join(" ").trim() }, l2), import_react.default.createElement("div", { className: ["rccs__number", S2.replace(/ /g, "").length > 16 ? "rccs__number--large" : "", "number" === d2 ? "rccs--focused" : "", "\u2022" !== S2.substr(0, 1) ? "rccs--filled" : ""].join(" ").trim() }, S2), import_react.default.createElement("div", { className: ["rccs__name", "name" === d2 ? "rccs--focused" : "", m2 ? "rccs--filled" : ""].join(" ").trim() }, m2 || v2.name), import_react.default.createElement("div", { className: ["rccs__expiry", "expiry" === d2 ? "rccs--focused" : "", "\u2022" !== N2.substr(0, 1) ? "rccs--filled" : ""].join(" ").trim() }, import_react.default.createElement("div", { className: "rccs__expiry__valid" }, p2.valid), import_react.default.createElement("div", { className: "rccs__expiry__value" }, N2)), import_react.default.createElement("div", { className: "rccs__chip" })), import_react.default.createElement("div", { className: "rccs__card--back" }, import_react.default.createElement("div", { className: "rccs__card__background" }), import_react.default.createElement("div", { className: "rccs__stripe" }), import_react.default.createElement("div", { className: "rccs__signature" }), import_react.default.createElement("div", { className: ["rccs__cvc", "cvc" === d2 ? "rccs--focused" : ""].join(" ").trim() }, l2), import_react.default.createElement("div", { className: "rccs__issuer" }))));
}

// app/utils/payment.ts
var import_payment = __toESM(require_lib2());
function clearNumber(value = "") {
  return value.replace(/\D+/g, "");
}
function formatCreditCardNumber(value) {
  if (!value) {
    return value;
  }
  const issuer = import_payment.default.fns.cardType(value);
  const clearValue = clearNumber(value);
  let nextValue;
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
  const clearValue = clearNumber(value);
  let maxLength = 4;
  if (allValues.number) {
    const issuer = import_payment.default.fns.cardType(allValues.number);
    maxLength = issuer === "amex" ? 4 : 3;
  }
  return clearValue.slice(0, maxLength);
}
function formatExpirationDate(value) {
  const clearValue = clearNumber(value);
  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }
  return clearValue;
}

export {
  O,
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
};
//# sourceMappingURL=/build/_shared/chunk-AYGOFMHR.js.map
