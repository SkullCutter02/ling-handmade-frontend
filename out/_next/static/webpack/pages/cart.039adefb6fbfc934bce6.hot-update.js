webpackHotUpdate_N_E("pages/cart",{

/***/ "./pages/cart/index.js":
/*!*****************************!*\
  !*** ./pages/cart/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/CartContext */ \"./context/CartContext.js\");\n/* harmony import */ var _utils_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/spinner */ \"./utils/spinner.js\");\n/* harmony import */ var _utils_host__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/host */ \"./utils/host.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/WebStormProjects/soap-website/frontend/pages/cart/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CartPage = function CartPage() {\n  _s();\n\n  var cartContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_CartContext__WEBPACK_IMPORTED_MODULE_5__[\"CartContext\"]);\n\n  var removeFromCart = function removeFromCart(cartItem) {\n    if (cartContext) {\n      cartContext.removeItem(cartItem);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-2923277533\" + \" \" + \"container\",\n        children: cartContext ? cartContext.cartItems.map(function (cartItem) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-2923277533\" + \" \" + \"cart-item-container\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"jsx-2923277533\" + \" \" + \"left\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: \"\".concat(_utils_host__WEBPACK_IMPORTED_MODULE_7__[\"default\"] === \"http://localhost:1337\" ? \"http://localhost:1337\" : \"\").concat(cartItem === null || cartItem === void 0 ? void 0 : cartItem.photo.formats.small.url),\n                  alt: cartItem === null || cartItem === void 0 ? void 0 : cartItem.photo.alternativeText,\n                  className: \"jsx-2923277533\" + \" \" + \"item-img\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 27,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"jsx-2923277533\" + \" \" + \"right\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                  href: \"/products/\".concat(cartItem.categories[0].slug, \"/\").concat(cartItem.slug),\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                    className: \"jsx-2923277533\" + \" \" + \"product-name\",\n                    children: cartItem.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 41,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 38,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: \"jsx-2923277533\" + \" \" + \"product-description\",\n                  children: cartItem.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 43,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  onClick: function onClick() {\n                    return removeFromCart(cartItem);\n                  },\n                  className: \"jsx-2923277533\" + \" \" + \"remove-cart-btn\",\n                  children: \"Remove from Cart\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 15\n          }, _this);\n        }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: _utils_spinner__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n          alt: \"spinner\",\n          className: \"jsx-2923277533\" + \" \" + \"spinner\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2923277533\",\n      children: \".spinner.jsx-2923277533{display:block;margin:0 auto;width:200px;}.container.jsx-2923277533{width:85%;margin:0 auto;}.cart-item-container.jsx-2923277533{width:100%;margin:50px 0;border:2px solid grey;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px;}.left.jsx-2923277533{width:35%;margin-right:20px;}.item-img.jsx-2923277533{height:100%;width:100%;object-fit:cover;}.right.jsx-2923277533{width:calc(100% - 35%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-name.jsx-2923277533{cursor:pointer;}.product-description.jsx-2923277533{display:block;text-overflow:ellipsis;word-wrap:break-word;overflow:hidden;line-height:1.4em;max-height:\".concat(1.4 * 5, \"em;}.remove-cart-btn.jsx-2923277533{cursor:pointer;width:100px;height:25px;border:none;font-size:0.6rem;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin:10px 20px;background:#bf4141;color:white;border-radius:6px;}.remove-cart-btn.jsx-2923277533:hover{background:#ab0f0f;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9wYWdlcy9jYXJ0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEa0IsQUFHeUIsQUFNSixBQUtDLEFBUUQsQUFLRSxBQU1XLEFBT1IsQUFJRCxBQVNDLEFBYUksVUF4REwsQUFhSSxDQVJKLENBYUgsRUF4QkcsQUF5Q1MsQ0FKekIsQUFhYyxJQWFkLElBdENtQixBQUtKLENBdkJmLENBS3dCLEVBdUNWLENBbERBLEFBbUJkLFNBc0J1QixFQVVULENBbERkLEFBd0JBLE9BYmUsSUF3Q0ksT0FWRCxVQVdJLE1BVkYsa0JBQ3dCLEtBZHBCLHdCQWpCVCxhQUNmLEFBK0JBLE1BU21CLGlCQUNFLGtCQXhCVyxDQXlCbEIsWUFDTSxrQkFDcEIsb0ZBMUJBIiwiZmlsZSI6Ii9Vc2Vycy9za3VsbGN1dHRlci9XZWJTdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9wYWdlcy9jYXJ0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IENhcnRDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQ2FydENvbnRleHRcIjtcbmltcG9ydCBzcGlubmVyIGZyb20gXCIuLi8uLi91dGlscy9zcGlubmVyXCI7XG5pbXBvcnQgaG9zdCBmcm9tIFwiLi4vLi4vdXRpbHMvaG9zdFwiO1xuXG5jb25zdCBDYXJ0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY2FydENvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcblxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChjYXJ0SXRlbSkgPT4ge1xuICAgIGlmIChjYXJ0Q29udGV4dCkge1xuICAgICAgY2FydENvbnRleHQucmVtb3ZlSXRlbShjYXJ0SXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICB7Y2FydENvbnRleHQgPyAoXG4gICAgICAgICAgICBjYXJ0Q29udGV4dC5jYXJ0SXRlbXMubWFwKChjYXJ0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0taW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdCA9PT0gXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSR7Y2FydEl0ZW0/LnBob3RvLmZvcm1hdHMuc21hbGwudXJsfWB9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtjYXJ0SXRlbT8ucGhvdG8uYWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9kdWN0cy8ke2NhcnRJdGVtLmNhdGVnb3JpZXNbMF0uc2x1Z30vJHtjYXJ0SXRlbS5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+e2NhcnRJdGVtLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZW1vdmUtY2FydC1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZyb21DYXJ0KGNhcnRJdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZSBmcm9tIENhcnRcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3Bpbm5lclwiIHNyYz17c3Bpbm5lcn0gYWx0PVwic3Bpbm5lclwiIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJ0LWl0ZW0tY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDUwcHggMDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtLWltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzUlKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAkezEuNCAqIDV9ZW07XG4gICAgICAgIH1cblxuICAgICAgICAucmVtb3ZlLWNhcnQtYnRuIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2JmNDE0MTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlbW92ZS1jYXJ0LWJ0bjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2FiMGYwZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJ0UGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/skullcutter/WebStormProjects/soap-website/frontend/pages/cart/index.js */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CartPage, \"teNfHskmYmlRlNfs2B9o3PcbrpE=\");\n\n_c = CartPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC9pbmRleC5qcz8wOTc4Il0sIm5hbWVzIjpbIkNhcnRQYWdlIiwiY2FydENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJyZW1vdmVGcm9tQ2FydCIsImNhcnRJdGVtIiwicmVtb3ZlSXRlbSIsImNhcnRJdGVtcyIsIm1hcCIsImhvc3QiLCJwaG90byIsImZvcm1hdHMiLCJzbWFsbCIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsImNhdGVnb3JpZXMiLCJzbHVnIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic3Bpbm5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUNDLGdFQUFELENBQTlCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ25DLFFBQUlKLFdBQUosRUFBaUI7QUFDZkEsaUJBQVcsQ0FBQ0ssVUFBWixDQUF1QkQsUUFBdkI7QUFDRDtBQUNGLEdBSkQ7O0FBTUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQSw2QkFDRTtBQUFBLDRDQUFlLFdBQWY7QUFBQSxrQkFDR0osV0FBVyxHQUNWQSxXQUFXLENBQUNNLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLFVBQUNILFFBQUQ7QUFBQSw4QkFDeEIscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsbUNBQ0U7QUFBQSxrREFBZSxxQkFBZjtBQUFBLHNDQUNFO0FBQUEsb0RBQWUsTUFBZjtBQUFBLHVDQUNFO0FBRUUscUJBQUcsWUFDREksbURBQUksS0FBSyx1QkFBVCxHQUNJLHVCQURKLEdBRUksRUFISCxTQUlBSixRQUpBLGFBSUFBLFFBSkEsdUJBSUFBLFFBQVEsQ0FBRUssS0FBVixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXhCLENBQThCQyxHQUo5QixDQUZMO0FBT0UscUJBQUcsRUFBRVIsUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVLLEtBQVYsQ0FBZ0JJLGVBUHZCO0FBQUEsc0RBQ1k7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVlFO0FBQUEsb0RBQWUsT0FBZjtBQUFBLHdDQUNFLHFFQUFDLGdEQUFEO0FBQ0Usc0JBQUksc0JBQWVULFFBQVEsQ0FBQ1UsVUFBVCxDQUFvQixDQUFwQixFQUF1QkMsSUFBdEMsY0FBOENYLFFBQVEsQ0FBQ1csSUFBdkQsQ0FETjtBQUFBLHlDQUdFO0FBQUEsd0RBQWMsY0FBZDtBQUFBLDhCQUE4QlgsUUFBUSxDQUFDWTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQU1FO0FBQUEsc0RBQWEscUJBQWI7QUFBQSw0QkFDR1osUUFBUSxDQUFDYTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkYsZUFTRTtBQUVFLHlCQUFPLEVBQUU7QUFBQSwyQkFBTWQsY0FBYyxDQUFDQyxRQUFELENBQXBCO0FBQUEsbUJBRlg7QUFBQSxzREFDWSxpQkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEd0I7QUFBQSxTQUExQixDQURVLGdCQW1DVjtBQUF5QixhQUFHLEVBQUVjLHNEQUE5QjtBQUF1QyxhQUFHLEVBQUMsU0FBM0M7QUFBQSw4Q0FBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUEsODVCQTJGb0IsTUFBTSxDQTNGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtIRCxDQTNIRDs7R0FBTW5CLFE7O0tBQUFBLFE7QUE2SFNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FydC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBDYXJ0Q29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0NhcnRDb250ZXh0XCI7XG5pbXBvcnQgc3Bpbm5lciBmcm9tIFwiLi4vLi4vdXRpbHMvc3Bpbm5lclwiO1xuaW1wb3J0IGhvc3QgZnJvbSBcIi4uLy4uL3V0aWxzL2hvc3RcIjtcblxuY29uc3QgQ2FydFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcnRDb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG5cbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoY2FydEl0ZW0pID0+IHtcbiAgICBpZiAoY2FydENvbnRleHQpIHtcbiAgICAgIGNhcnRDb250ZXh0LnJlbW92ZUl0ZW0oY2FydEl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAge2NhcnRDb250ZXh0ID8gKFxuICAgICAgICAgICAgY2FydENvbnRleHQuY2FydEl0ZW1zLm1hcCgoY2FydEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1pdGVtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3QgPT09IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0ke2NhcnRJdGVtPy5waG90by5mb3JtYXRzLnNtYWxsLnVybH1gfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17Y2FydEl0ZW0/LnBob3RvLmFsdGVybmF0aXZlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvZHVjdHMvJHtjYXJ0SXRlbS5jYXRlZ29yaWVzWzBdLnNsdWd9LyR7Y2FydEl0ZW0uc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiPntjYXJ0SXRlbS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVtb3ZlLWNhcnQtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVGcm9tQ2FydChjYXJ0SXRlbSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBSZW1vdmUgZnJvbSBDYXJ0XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNwaW5uZXJcIiBzcmM9e3NwaW5uZXJ9IGFsdD1cInNwaW5uZXJcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNwaW5uZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuY2FydC1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiA1MHB4IDA7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGVmdCB7XG4gICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1pbWcge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1JSk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgICAgbWF4LWhlaWdodDogJHsxLjQgKiA1fWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlbW92ZS1jYXJ0LWJ0biB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNiZjQxNDE7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZW1vdmUtY2FydC1idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNhYjBmMGY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cart/index.js\n");

/***/ })

})