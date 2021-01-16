webpackHotUpdate_N_E("pages/products/[category]/[slug]",{

/***/ "./context/CartContext.js":
/*!********************************!*\
  !*** ./context/CartContext.js ***!
  \********************************/
/*! exports provided: CartContext, CartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartProvider\", function() { return CartProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/soap-website/frontend/context/CartContext.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])(null);\nvar CartProvider = function CartProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    setItem: function setItem(item) {\n      setState(function (old) {\n        return _objectSpread(_objectSpread({}, old), {}, {\n          cartItems: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(old.cartItems), [item])\n        });\n      });\n      localStorage.setItem(\"cartItems\", JSON.stringify(state.cartItems));\n    },\n    removeItem: function removeItem(item) {\n      var arr = state.cartItems.filter(function (cartItem) {\n        return cartItem.name !== item.name;\n      });\n      setState(function (old) {\n        return _objectSpread(_objectSpread({}, old), {}, {\n          cartItems: arr\n        });\n      });\n    },\n    cartItems: []\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var cartItems = localStorage.getItem(\"cartItems\");\n\n    if (cartItems) {\n      setState(_objectSpread(_objectSpread({}, state), {}, {\n        cartItems: JSON.parse(cartItems)\n      }));\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(CartContext.Provider, {\n    value: state,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CartProvider, \"v9NTmfaUpQwnUq9qoeXjfww4t4U=\");\n\n_c = CartProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"CartProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9DYXJ0Q29udGV4dC5qcz9jNGE0Il0sIm5hbWVzIjpbIkNhcnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNhcnRQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJzZXRJdGVtIiwiaXRlbSIsInNldFN0YXRlIiwib2xkIiwiY2FydEl0ZW1zIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXRlIiwicmVtb3ZlSXRlbSIsImFyciIsImZpbHRlciIsImNhcnRJdGVtIiwibmFtZSIsInVzZUVmZmVjdCIsImdldEl0ZW0iLCJwYXJzZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsSUFBRCxDQUFqQztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNYQyxzREFBUSxDQUFDO0FBQ2pDQyxXQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJDLGNBQVEsQ0FBQyxVQUFDQyxHQUFEO0FBQUEsK0NBQ0pBLEdBREk7QUFFUEMsbUJBQVMseUdBQU1ELEdBQUcsQ0FBQ0MsU0FBVixJQUFxQkgsSUFBckI7QUFGRjtBQUFBLE9BQUQsQ0FBUjtBQUlBSSxrQkFBWSxDQUFDTCxPQUFiLENBQXFCLFdBQXJCLEVBQWtDTSxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsS0FBSyxDQUFDSixTQUFyQixDQUFsQztBQUNELEtBUGdDO0FBUWpDSyxjQUFVLEVBQUUsb0JBQVVSLElBQVYsRUFBZ0I7QUFDMUIsVUFBTVMsR0FBRyxHQUFHRixLQUFLLENBQUNKLFNBQU4sQ0FBZ0JPLE1BQWhCLENBQ1YsVUFBQ0MsUUFBRDtBQUFBLGVBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxLQUFrQlosSUFBSSxDQUFDWSxJQUFyQztBQUFBLE9BRFUsQ0FBWjtBQUdBWCxjQUFRLENBQUMsVUFBQ0MsR0FBRDtBQUFBLCtDQUFlQSxHQUFmO0FBQW9CQyxtQkFBUyxFQUFFTTtBQUEvQjtBQUFBLE9BQUQsQ0FBUjtBQUNELEtBYmdDO0FBY2pDTixhQUFTLEVBQUU7QUFkc0IsR0FBRCxDQURHO0FBQUEsTUFDOUJJLEtBRDhCO0FBQUEsTUFDdkJOLFFBRHVCOztBQWtCckNZLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1WLFNBQVMsR0FBR0MsWUFBWSxDQUFDVSxPQUFiLENBQXFCLFdBQXJCLENBQWxCOztBQUVBLFFBQUlYLFNBQUosRUFBZTtBQUNiRixjQUFRLGlDQUNITSxLQURHO0FBRU5KLGlCQUFTLEVBQUVFLElBQUksQ0FBQ1UsS0FBTCxDQUFXWixTQUFYO0FBRkwsU0FBUjtBQUlEO0FBQ0YsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdBLHNCQUNFLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRUksS0FBN0I7QUFBQSxjQUFxQ1YsS0FBSyxDQUFDbUI7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBR0QsQ0FoQ007O0dBQU1wQixZOztLQUFBQSxZIiwiZmlsZSI6Ii4vY29udGV4dC9DYXJ0Q29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgc2V0SXRlbTogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHNldFN0YXRlKChvbGQpID0+ICh7XG4gICAgICAgIC4uLm9sZCxcbiAgICAgICAgY2FydEl0ZW1zOiBbLi4ub2xkLmNhcnRJdGVtcywgaXRlbV0sXG4gICAgICB9KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5jYXJ0SXRlbXMpKTtcbiAgICB9LFxuICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBjb25zdCBhcnIgPSBzdGF0ZS5jYXJ0SXRlbXMuZmlsdGVyKFxuICAgICAgICAoY2FydEl0ZW0pID0+IGNhcnRJdGVtLm5hbWUgIT09IGl0ZW0ubmFtZVxuICAgICAgKTtcbiAgICAgIHNldFN0YXRlKChvbGQpID0+ICh7IC4uLm9sZCwgY2FydEl0ZW1zOiBhcnIgfSkpO1xuICAgIH0sXG4gICAgY2FydEl0ZW1zOiBbXSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRJdGVtc1wiKTtcblxuICAgIGlmIChjYXJ0SXRlbXMpIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogSlNPTi5wYXJzZShjYXJ0SXRlbXMpLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57cHJvcHMuY2hpbGRyZW59PC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/CartContext.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false

})