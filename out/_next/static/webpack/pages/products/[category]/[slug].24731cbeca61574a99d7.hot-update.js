webpackHotUpdate_N_E("pages/products/[category]/[slug]",{

/***/ "./context/CartContext.js":
/*!********************************!*\
  !*** ./context/CartContext.js ***!
  \********************************/
/*! exports provided: CartContext, CartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartProvider\", function() { return CartProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/soap-website/frontend/context/CartContext.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])(null);\nvar CartProvider = function CartProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    setItems: function setItems(item) {\n      setState(function (old) {\n        return _objectSpread(_objectSpread({}, old), {}, {\n          cartItems: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(old.cartItems), [item])\n        });\n      });\n    },\n    removeItems: function removeItems(item) {\n      setState(function (old) {\n        return _objectSpread(_objectSpread({}, old), {}, {\n          cartItems: []\n        });\n      });\n    },\n    cartItems: []\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var cartItems = localStorage.getItem(\"cartItems\");\n\n    if (cartItems) {\n      setState(_objectSpread(_objectSpread({}, state), {}, {\n        cartItems: JSON.parse(cartItems)\n      }));\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (state.cartItems) {\n      localStorage.setItem(\"cartItems\", JSON.stringify(state.cartItems));\n    }\n  }, [state]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(CartContext.Provider, {\n    value: state,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CartProvider, \"r3LdTUMVfSdWlG6I63/P6G0aZh0=\");\n\n_c = CartProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"CartProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9DYXJ0Q29udGV4dC5qcz9jNGE0Il0sIm5hbWVzIjpbIkNhcnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNhcnRQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJzZXRJdGVtcyIsIml0ZW0iLCJzZXRTdGF0ZSIsIm9sZCIsImNhcnRJdGVtcyIsInJlbW92ZUl0ZW1zIiwic3RhdGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsSUFBRCxDQUFqQztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNYQyxzREFBUSxDQUFDO0FBQ2pDQyxZQUFRLEVBQUUsa0JBQVVDLElBQVYsRUFBZ0I7QUFDeEJDLGNBQVEsQ0FBQyxVQUFDQyxHQUFEO0FBQUEsK0NBQWVBLEdBQWY7QUFBb0JDLG1CQUFTLHlHQUFNRCxHQUFHLENBQUNDLFNBQVYsSUFBcUJILElBQXJCO0FBQTdCO0FBQUEsT0FBRCxDQUFSO0FBQ0QsS0FIZ0M7QUFJakNJLGVBQVcsRUFBRSxxQkFBVUosSUFBVixFQUFnQjtBQUMzQkMsY0FBUSxDQUFDLFVBQUNDLEdBQUQ7QUFBQSwrQ0FBZUEsR0FBZjtBQUFvQkMsbUJBQVMsRUFBRTtBQUEvQjtBQUFBLE9BQUQsQ0FBUjtBQUNELEtBTmdDO0FBT2pDQSxhQUFTLEVBQUU7QUFQc0IsR0FBRCxDQURHO0FBQUEsTUFDOUJFLEtBRDhCO0FBQUEsTUFDdkJKLFFBRHVCOztBQVdyQ0sseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUgsU0FBUyxHQUFHSSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBbEI7O0FBRUEsUUFBSUwsU0FBSixFQUFlO0FBQ2JGLGNBQVEsaUNBQ0hJLEtBREc7QUFFTkYsaUJBQVMsRUFBRU0sSUFBSSxDQUFDQyxLQUFMLENBQVdQLFNBQVg7QUFGTCxTQUFSO0FBSUQ7QUFDRixHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0FHLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlELEtBQUssQ0FBQ0YsU0FBVixFQUFxQjtBQUNuQkksa0JBQVksQ0FBQ0ksT0FBYixDQUFxQixXQUFyQixFQUFrQ0YsSUFBSSxDQUFDRyxTQUFMLENBQWVQLEtBQUssQ0FBQ0YsU0FBckIsQ0FBbEM7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDRSxLQUFELENBSk0sQ0FBVDtBQU1BLHNCQUNFLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRUEsS0FBN0I7QUFBQSxjQUFxQ1IsS0FBSyxDQUFDZ0I7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBR0QsQ0EvQk07O0dBQU1qQixZOztLQUFBQSxZIiwiZmlsZSI6Ii4vY29udGV4dC9DYXJ0Q29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgc2V0SXRlbXM6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBzZXRTdGF0ZSgob2xkKSA9PiAoeyAuLi5vbGQsIGNhcnRJdGVtczogWy4uLm9sZC5jYXJ0SXRlbXMsIGl0ZW1dIH0pKTtcbiAgICB9LFxuICAgIHJlbW92ZUl0ZW1zOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgc2V0U3RhdGUoKG9sZCkgPT4gKHsgLi4ub2xkLCBjYXJ0SXRlbXM6IFtdIH0pKTtcbiAgICB9LFxuICAgIGNhcnRJdGVtczogW10sXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FydEl0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0SXRlbXNcIik7XG5cbiAgICBpZiAoY2FydEl0ZW1zKSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IEpTT04ucGFyc2UoY2FydEl0ZW1zKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmNhcnRJdGVtcykge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoc3RhdGUuY2FydEl0ZW1zKSk7XG4gICAgfVxuICB9LCBbc3RhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9Pntwcm9wcy5jaGlsZHJlbn08L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/CartContext.js\n");

/***/ })

})