webpackHotUpdate_N_E("pages/_app",{

/***/ "./context/CartContext.js":
/*!********************************!*\
  !*** ./context/CartContext.js ***!
  \********************************/
/*! exports provided: CartContext, CartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartProvider\", function() { return CartProvider; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/soap-website/frontend/context/CartContext.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__[\"createContext\"])(null);\nvar CartProvider = function CartProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    setItem: function () {\n      var _setItem = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(item) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return setState(function (old) {\n                  return _objectSpread(_objectSpread({}, old), {}, {\n                    cartItems: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(old.cartItems), [item])\n                  });\n                });\n\n              case 2:\n                localStorage.setItem(\"cartItems\", JSON.stringify(state.cartItems));\n                console.log(localStorage.getItem(\"cartItems\"));\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function setItem(_x) {\n        return _setItem.apply(this, arguments);\n      }\n\n      return setItem;\n    }(),\n    removeItem: function () {\n      var _removeItem = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(item) {\n        var arr;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                arr = state.cartItems.filter(function (cartItem) {\n                  return cartItem.name !== item.name;\n                });\n                _context2.next = 3;\n                return setState(function (old) {\n                  return _objectSpread(_objectSpread({}, old), {}, {\n                    cartItems: arr\n                  });\n                });\n\n              case 3:\n                localStorage.setItem(\"cartItems\", JSON.stringify(state.cartItems));\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function removeItem(_x2) {\n        return _removeItem.apply(this, arguments);\n      }\n\n      return removeItem;\n    }(),\n    cartItems: []\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var cartItems = localStorage.getItem(\"cartItems\");\n\n    if (cartItems) {\n      setState(_objectSpread(_objectSpread({}, state), {}, {\n        cartItems: JSON.parse(cartItems)\n      }));\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(CartContext.Provider, {\n    value: state,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CartProvider, \"UbV99WqF1zTav5MXtCFMr0J7K/E=\");\n\n_c = CartProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"CartProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9DYXJ0Q29udGV4dC5qcz9jNGE0Il0sIm5hbWVzIjpbIkNhcnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNhcnRQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJzZXRJdGVtIiwiaXRlbSIsInNldFN0YXRlIiwib2xkIiwiY2FydEl0ZW1zIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiYXJyIiwiZmlsdGVyIiwiY2FydEl0ZW0iLCJuYW1lIiwidXNlRWZmZWN0IiwicGFyc2UiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsSUFBRCxDQUFqQztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNYQyxzREFBUSxDQUFDO0FBQ2pDQyxXQUFPO0FBQUEsc01BQUUsaUJBQWdCQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDREMsUUFBUSxDQUFDLFVBQUNDLEdBQUQ7QUFBQSx5REFDVkEsR0FEVTtBQUViQyw2QkFBUyx5R0FBTUQsR0FBRyxDQUFDQyxTQUFWLElBQXFCSCxJQUFyQjtBQUZJO0FBQUEsaUJBQUQsQ0FEUDs7QUFBQTtBQUtQSSw0QkFBWSxDQUFDTCxPQUFiLENBQXFCLFdBQXJCLEVBQWtDTSxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsS0FBSyxDQUFDSixTQUFyQixDQUFsQztBQUNBSyx1QkFBTyxDQUFDQyxHQUFSLENBQVlMLFlBQVksQ0FBQ00sT0FBYixDQUFxQixXQUFyQixDQUFaOztBQU5PO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0FEMEI7QUFTakNDLGNBQVU7QUFBQSx5TUFBRSxrQkFBZ0JYLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNKWSxtQkFESSxHQUNFTCxLQUFLLENBQUNKLFNBQU4sQ0FBZ0JVLE1BQWhCLENBQ1YsVUFBQ0MsUUFBRDtBQUFBLHlCQUFjQSxRQUFRLENBQUNDLElBQVQsS0FBa0JmLElBQUksQ0FBQ2UsSUFBckM7QUFBQSxpQkFEVSxDQURGO0FBQUE7QUFBQSx1QkFJSmQsUUFBUSxDQUFDLFVBQUNDLEdBQUQ7QUFBQSx5REFBZUEsR0FBZjtBQUFvQkMsNkJBQVMsRUFBRVM7QUFBL0I7QUFBQSxpQkFBRCxDQUpKOztBQUFBO0FBS1ZSLDRCQUFZLENBQUNMLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0NNLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxLQUFLLENBQUNKLFNBQXJCLENBQWxDOztBQUxVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0FUdUI7QUFnQmpDQSxhQUFTLEVBQUU7QUFoQnNCLEdBQUQsQ0FERztBQUFBLE1BQzlCSSxLQUQ4QjtBQUFBLE1BQ3ZCTixRQUR1Qjs7QUFvQnJDZSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNYixTQUFTLEdBQUdDLFlBQVksQ0FBQ00sT0FBYixDQUFxQixXQUFyQixDQUFsQjs7QUFFQSxRQUFJUCxTQUFKLEVBQWU7QUFDYkYsY0FBUSxpQ0FDSE0sS0FERztBQUVOSixpQkFBUyxFQUFFRSxJQUFJLENBQUNZLEtBQUwsQ0FBV2QsU0FBWDtBQUZMLFNBQVI7QUFJRDtBQUNGLEdBVFEsRUFTTixFQVRNLENBQVQ7QUFXQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVJLEtBQTdCO0FBQUEsY0FBcUNWLEtBQUssQ0FBQ3FCO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBbENNOztHQUFNdEIsWTs7S0FBQUEsWSIsImZpbGUiOiIuL2NvbnRleHQvQ2FydENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIHNldEl0ZW06IGFzeW5jIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBhd2FpdCBzZXRTdGF0ZSgob2xkKSA9PiAoe1xuICAgICAgICAuLi5vbGQsXG4gICAgICAgIGNhcnRJdGVtczogWy4uLm9sZC5jYXJ0SXRlbXMsIGl0ZW1dLFxuICAgICAgfSkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoc3RhdGUuY2FydEl0ZW1zKSk7XG4gICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRJdGVtc1wiKSk7XG4gICAgfSxcbiAgICByZW1vdmVJdGVtOiBhc3luYyBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgY29uc3QgYXJyID0gc3RhdGUuY2FydEl0ZW1zLmZpbHRlcihcbiAgICAgICAgKGNhcnRJdGVtKSA9PiBjYXJ0SXRlbS5uYW1lICE9PSBpdGVtLm5hbWVcbiAgICAgICk7XG4gICAgICBhd2FpdCBzZXRTdGF0ZSgob2xkKSA9PiAoeyAuLi5vbGQsIGNhcnRJdGVtczogYXJyIH0pKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydEl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KHN0YXRlLmNhcnRJdGVtcykpO1xuICAgIH0sXG4gICAgY2FydEl0ZW1zOiBbXSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRJdGVtc1wiKTtcblxuICAgIGlmIChjYXJ0SXRlbXMpIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogSlNPTi5wYXJzZShjYXJ0SXRlbXMpLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57cHJvcHMuY2hpbGRyZW59PC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/CartContext.js\n");

/***/ })

})