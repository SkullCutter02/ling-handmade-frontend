webpackHotUpdate_N_E("pages/cart",{

/***/ "./pages/cart/index.js":
/*!*****************************!*\
  !*** ./pages/cart/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/CartContext */ \"./context/CartContext.js\");\n/* harmony import */ var _utils_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/spinner */ \"./utils/spinner.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/soap-website/frontend/pages/cart/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar CartPage = function CartPage() {\n  _s();\n\n  var cartContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_CartContext__WEBPACK_IMPORTED_MODULE_4__[\"CartContext\"]);\n\n  var removeFromCart = function removeFromCart(cartItem) {\n    if (cartContext) {\n      cartContext.removeItem(cartItem);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: cartContext ? cartContext.cartItems.map(function (cartItem) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-1000826600\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-1000826600\",\n            children: cartItem.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return removeFromCart(cartItem);\n            },\n            className: \"jsx-1000826600\",\n            children: \"Remove from Cart\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 13\n        }, _this);\n      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: _utils_spinner__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        alt: \"spinner\",\n        className: \"jsx-1000826600\" + \" \" + \"spinner\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1000826600\",\n      children: \".spinner.jsx-1000826600{display:block;margin:0 auto;width:200px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9wYWdlcy9jYXJ0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFHeUIsY0FDQSxjQUNGLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL3NrdWxsY3V0dGVyL1dlYlN0b3JtUHJvamVjdHMvc29hcC13ZWJzaXRlL2Zyb250ZW5kL3BhZ2VzL2NhcnQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9DYXJ0Q29udGV4dFwiO1xuaW1wb3J0IHNwaW5uZXIgZnJvbSBcIi4uLy4uL3V0aWxzL3NwaW5uZXJcIjtcblxuY29uc3QgQ2FydFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcnRDb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG5cbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoY2FydEl0ZW0pID0+IHtcbiAgICBpZiAoY2FydENvbnRleHQpIHtcbiAgICAgIGNhcnRDb250ZXh0LnJlbW92ZUl0ZW0oY2FydEl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtjYXJ0Q29udGV4dCA/IChcbiAgICAgICAgICBjYXJ0Q29udGV4dC5jYXJ0SXRlbXMubWFwKChjYXJ0SXRlbSkgPT4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+e2NhcnRJdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZyb21DYXJ0KGNhcnRJdGVtKX0+XG4gICAgICAgICAgICAgICAgUmVtb3ZlIGZyb20gQ2FydFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcGlubmVyXCIgc3JjPXtzcGlubmVyfSBhbHQ9XCJzcGlubmVyXCIgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydFBhZ2U7XG4iXX0= */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/soap-website/frontend/pages/cart/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CartPage, \"teNfHskmYmlRlNfs2B9o3PcbrpE=\");\n\n_c = CartPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC9pbmRleC5qcz8wOTc4Il0sIm5hbWVzIjpbIkNhcnRQYWdlIiwiY2FydENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJyZW1vdmVGcm9tQ2FydCIsImNhcnRJdGVtIiwicmVtb3ZlSXRlbSIsImNhcnRJdGVtcyIsIm1hcCIsIm5hbWUiLCJzcGlubmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUE5Qjs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUNuQyxRQUFJSixXQUFKLEVBQWlCO0FBQ2ZBLGlCQUFXLENBQUNLLFVBQVosQ0FBdUJELFFBQXZCO0FBQ0Q7QUFDRixHQUpEOztBQU1BLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFLHFFQUFDLDBEQUFEO0FBQUEsZ0JBQ0dKLFdBQVcsR0FDVkEsV0FBVyxDQUFDTSxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixVQUFDSCxRQUFEO0FBQUEsNEJBQ3hCO0FBQUE7QUFBQSxrQ0FDRTtBQUFBO0FBQUEsc0JBQUlBLFFBQVEsQ0FBQ0k7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU1MLGNBQWMsQ0FBQ0MsUUFBRCxDQUFwQjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR3QjtBQUFBLE9BQTFCLENBRFUsZ0JBVVY7QUFBeUIsV0FBRyxFQUFFSyxzREFBOUI7QUFBdUMsV0FBRyxFQUFDLFNBQTNDO0FBQUEsNENBQWU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBbkNEOztHQUFNVixROztLQUFBQSxRO0FBcUNTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhcnQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9DYXJ0Q29udGV4dFwiO1xuaW1wb3J0IHNwaW5uZXIgZnJvbSBcIi4uLy4uL3V0aWxzL3NwaW5uZXJcIjtcblxuY29uc3QgQ2FydFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcnRDb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG5cbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoY2FydEl0ZW0pID0+IHtcbiAgICBpZiAoY2FydENvbnRleHQpIHtcbiAgICAgIGNhcnRDb250ZXh0LnJlbW92ZUl0ZW0oY2FydEl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtjYXJ0Q29udGV4dCA/IChcbiAgICAgICAgICBjYXJ0Q29udGV4dC5jYXJ0SXRlbXMubWFwKChjYXJ0SXRlbSkgPT4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+e2NhcnRJdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZyb21DYXJ0KGNhcnRJdGVtKX0+XG4gICAgICAgICAgICAgICAgUmVtb3ZlIGZyb20gQ2FydFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcGlubmVyXCIgc3JjPXtzcGlubmVyfSBhbHQ9XCJzcGlubmVyXCIgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cart/index.js\n");

/***/ })

})