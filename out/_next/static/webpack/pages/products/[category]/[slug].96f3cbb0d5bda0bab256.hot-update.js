webpackHotUpdate_N_E("pages/products/[category]/[slug]",{

/***/ "./components/ProductPage.js":
/*!***********************************!*\
  !*** ./components/ProductPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/ProductPage.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ProductPage = function ProductPage(_ref) {\n  _s();\n\n  var slug = _ref.slug;\n  var products = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_3__[\"Context\"]).data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      product = _useState[0],\n      setProduct = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (products !== undefined) {\n      setProduct(products.filter(function (product) {\n        return product.slug === slug;\n      }));\n      setProduct(function (product) {\n        return product[0];\n      });\n    }\n  }, [products]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: \"jsx-4041397581\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"http://localhost:1337\".concat(product === null || product === void 0 ? void 0 : product.photo.formats.large.url),\n        alt: product === null || product === void 0 ? void 0 : product.photo.alternativeText,\n        className: \"jsx-4041397581\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-4041397581\" + \" \" + \"header-title-container\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"4041397581\",\n      children: \"img.jsx-4041397581{width:100%;height:60vh;object-fit:cover;position:relative;}.header-title-container.jsx-4041397581{border:1px solid red;position:absolute;top:20%;left:15%;height:30%;width:70%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9QaHBzdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3RQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHc0IsQUFPVSxXQU5ULFVBT00sRUFORCxnQkFPVCxDQU5VLE9BT1QsU0FDRSxFQVBiLFNBUVksVUFDWiIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvUGhwc3Rvcm1Qcm9qZWN0cy9zb2FwLXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCBQcm9kdWN0UGFnZSA9ICh7IHNsdWcgfSkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZUNvbnRleHQoQ29udGV4dCkuZGF0YTtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9kdWN0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRQcm9kdWN0KHByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5zbHVnID09PSBzbHVnKSk7XG4gICAgICBzZXRQcm9kdWN0KChwcm9kdWN0KSA9PiBwcm9kdWN0WzBdKTtcbiAgICB9XG4gIH0sIFtwcm9kdWN0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cHJvZHVjdD8ucGhvdG8uZm9ybWF0cy5sYXJnZS51cmx9YH1cbiAgICAgICAgICBhbHQ9e3Byb2R1Y3Q/LnBob3RvLmFsdGVybmF0aXZlVGV4dH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGUtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICBsZWZ0OiAxNSU7XG4gICAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/ProductPage.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductPage, \"5/7BZAsw1DkHlAc6Rhf6dLR5vhU=\");\n\n_c = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZS5qcz84YmEwIl0sIm5hbWVzIjpbIlByb2R1Y3RQYWdlIiwic2x1ZyIsInByb2R1Y3RzIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJkYXRhIiwidXNlU3RhdGUiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsImZpbHRlciIsInBob3RvIiwiZm9ybWF0cyIsImxhcmdlIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDaEMsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUFWLENBQW9CQyxJQUFyQzs7QUFEZ0Msa0JBRUZDLHNEQUFRLEVBRk47QUFBQSxNQUV6QkMsT0FGeUI7QUFBQSxNQUVoQkMsVUFGZ0I7O0FBSWhDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUCxRQUFRLEtBQUtRLFNBQWpCLEVBQTRCO0FBQzFCRixnQkFBVSxDQUFDTixRQUFRLENBQUNTLE1BQVQsQ0FBZ0IsVUFBQ0osT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ04sSUFBUixLQUFpQkEsSUFBOUI7QUFBQSxPQUFoQixDQUFELENBQVY7QUFDQU8sZ0JBQVUsQ0FBQyxVQUFDRCxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDLENBQUQsQ0FBcEI7QUFBQSxPQUFELENBQVY7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDTCxRQUFELENBTE0sQ0FBVDtBQU9BLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQUE7QUFBQSw4QkFDRTtBQUNFLFdBQUcsaUNBQTBCSyxPQUExQixhQUEwQkEsT0FBMUIsdUJBQTBCQSxPQUFPLENBQUVLLEtBQVQsQ0FBZUMsT0FBZixDQUF1QkMsS0FBdkIsQ0FBNkJDLEdBQXZELENBREw7QUFFRSxXQUFHLEVBQUVSLE9BQUYsYUFBRUEsT0FBRix1QkFBRUEsT0FBTyxDQUFFSyxLQUFULENBQWVJLGVBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFBLDRDQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkJELENBeENEOztHQUFNaEIsVzs7S0FBQUEsVztBQTBDU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RQYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmNvbnN0IFByb2R1Y3RQYWdlID0gKHsgc2x1ZyB9KSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlQ29udGV4dChDb250ZXh0KS5kYXRhO1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2R1Y3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFByb2R1Y3QocHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LnNsdWcgPT09IHNsdWcpKTtcbiAgICAgIHNldFByb2R1Y3QoKHByb2R1Y3QpID0+IHByb2R1Y3RbMF0pO1xuICAgIH1cbiAgfSwgW3Byb2R1Y3RzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtwcm9kdWN0Py5waG90by5mb3JtYXRzLmxhcmdlLnVybH1gfVxuICAgICAgICAgIGFsdD17cHJvZHVjdD8ucGhvdG8uYWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZS1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXItdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMjAlO1xuICAgICAgICAgIGxlZnQ6IDE1JTtcbiAgICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductPage.js\n");

/***/ })

})