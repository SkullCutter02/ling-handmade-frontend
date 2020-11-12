webpackHotUpdate_N_E("pages/products/[category]/[slug]",{

/***/ "./components/ProductPage.js":
/*!***********************************!*\
  !*** ./components/ProductPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context.js\");\n\n\nvar _jsxFileName = \"/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/ProductPage.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ProductPage = function ProductPage(_ref) {\n  _s();\n\n  var slug = _ref.slug;\n  var products = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_4__[\"Context\"]).data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      product = _useState[0],\n      setProduct = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (products !== undefined) {\n      setProduct(products.filter(function (product) {\n        return product.slug === slug;\n      }));\n      setProduct(function (product) {\n        return product[0];\n      });\n    }\n  }, [products]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: \"jsx-3374725766\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"http://localhost:1337\".concat(product === null || product === void 0 ? void 0 : product.photo.formats.large.url),\n        alt: product === null || product === void 0 ? void 0 : product.photo.alternativeText,\n        className: \"jsx-3374725766\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3374725766\" + \" \" + \"header-title-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-3374725766\" + \" \" + \"title\",\n          children: product === null || product === void 0 ? void 0 : product.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-3374725766\" + \" \" + \"line\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/products/\".concat(product === null || product === void 0 ? void 0 : product.categories[0].slug),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"jsx-3374725766\" + \" \" + \"back\",\n            children: \"BACK\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3374725766\" + \" \" + \"main-body-section\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n          className: \"jsx-3374725766\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            className: \"jsx-3374725766\" + \" \" + \"description-title\",\n            children: \"Description:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"jsx-3374725766\" + \" \" + \"description\",\n            children: product === null || product === void 0 ? void 0 : product.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n          className: \"jsx-3374725766\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            className: \"jsx-3374725766\",\n            children: [\"Price: $\", product === null || product === void 0 ? void 0 : product.price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            className: \"jsx-3374725766\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n              className: \"jsx-3374725766\",\n              children: \"Ingredients:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, _this), \" \", product === null || product === void 0 ? void 0 : product.ingredients]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3374725766\",\n      children: \"img.jsx-3374725766{width:100%;height:60vh;object-fit:cover;position:relative;}.header-title-container.jsx-3374725766{position:absolute;top:25%;left:15%;height:25%;width:70%;background:rgba(0,0,0,0.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-3374725766{color:white;font-size:50px;text-align:center;margin-bottom:4px;}.line.jsx-3374725766{width:70px;padding-top:5px;border-bottom:4px solid #af9b7d;margin:0 auto;}.back.jsx-3374725766{width:120px;height:15%;margin:0 auto;margin-top:20px;background:#af9b7d;border:3px solid #af9b7d;color:black;font-size:1rem;cursor:pointer;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;}.back.jsx-3374725766:hover{background:none;}.main-body-section.jsx-3374725766{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;margin:10px;}main.jsx-3374725766{width:45%;margin-right:10px;}aside.jsx-3374725766{margin-right:5px;width:45%;}.description.jsx-3374725766{margin-top:10px;}h4.jsx-3374725766{margin-top:10px;font-weight:400;}strong.jsx-3374725766{font-size:40px;}@media screen and (max-width:1020px){.header-title-container.jsx-3374725766{top:23%;}}@media screen and (max-width:900px){.header-title-container.jsx-3374725766{top:20%;}}@media screen and (max-width:700px){.header-title-container.jsx-3374725766{top:17%;height:22%;}.title.jsx-3374725766{font-size:42px;}.main-body-section.jsx-3374725766{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-3374725766{width:85%;margin-bottom:5px;}aside.jsx-3374725766{width:85%;margin-bottom:15px;}}@media screen and (max-width:600px){.header-title-container.jsx-3374725766{top:16%;}.title.jsx-3374725766{font-size:38px;}.back.jsx-3374725766{font-size:0.8rem;}}@media screen and (max-width:500px){.header-title-container.jsx-3374725766{top:16%;height:17%;}.title.jsx-3374725766{font-size:32px;}.back.jsx-3374725766{font-size:0.7rem;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3VsbGN1dHRlci9QaHBzdG9ybVByb2plY3RzL3NvYXAtd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3RQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDa0IsQUFHc0IsQUFPTyxBQVlOLEFBT0QsQUFPQyxBQWVJLEFBSUwsQUFPRCxBQUtPLEFBS0QsQUFJQSxBQUtELEFBS0wsQUFNQSxBQU1BLEFBS08sQUFJZSxBQUtwQixBQUtBLEFBT0YsQUFJTyxBQUlFLEFBTVQsQUFLTyxBQUlFLFFBNURuQixBQU1BLEFBTWEsQUEwQmIsQUFjYSxFQTVFSyxBQWtERSxBQUtDLENBbEhULEFBMEJJLEFBMEJILENBakNFLEFBY0osR0E2Q2IsQUFzQkUsQUF5QkEsQUFlQSxDQTVGRixBQXFCQSxBQUlrQixDQVROLEFBaUVWLEFBZUEsQ0F6SVEsQ0F5RlIsQUF3Q0EsSUF2SWlCLEFBaUNILEdBMUJMLENBWVMsQUFPYyxBQXNDbEMsQ0FMQSxBQWtERSxDQUtBLEdBekNGLEdBakVhLEVBMEJLLEdBakNFLEtBbUJBLENBWFIsT0EwQlMsR0F6QlcsRUFSaEMsQ0F5QmdCLElBTmhCLFNBZTJCLENBUjNCLFVBakJlLEVBeUNnQixZQWZqQixLQWtFUyxPQWpFTixlQUNBLGVBQ1Msa0JBNUJGLHNDQTZCRyxBQStEekIsYUFuRFksWUFDZCxlQXpDeUIsa0JBNkJZLDhFQUNyQyxHQTdCQSIsImZpbGUiOiIvVXNlcnMvc2t1bGxjdXR0ZXIvUGhwc3Rvcm1Qcm9qZWN0cy9zb2FwLXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCBQcm9kdWN0UGFnZSA9ICh7IHNsdWcgfSkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZUNvbnRleHQoQ29udGV4dCkuZGF0YTtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9kdWN0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRQcm9kdWN0KHByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5zbHVnID09PSBzbHVnKSk7XG4gICAgICBzZXRQcm9kdWN0KChwcm9kdWN0KSA9PiBwcm9kdWN0WzBdKTtcbiAgICB9XG4gIH0sIFtwcm9kdWN0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cHJvZHVjdD8ucGhvdG8uZm9ybWF0cy5sYXJnZS51cmx9YH1cbiAgICAgICAgICBhbHQ9e3Byb2R1Y3Q/LnBob3RvLmFsdGVybmF0aXZlVGV4dH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb2R1Y3Q/Lm5hbWV9PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtwcm9kdWN0Py5jYXRlZ29yaWVzWzBdLnNsdWd9YH0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJhY2tcIj5CQUNLPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJvZHktc2VjdGlvblwiPlxuICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXRpdGxlXCI+RGVzY3JpcHRpb246PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e3Byb2R1Y3Q/LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPGFzaWRlPlxuICAgICAgICAgICAgPGgyPlByaWNlOiAke3Byb2R1Y3Q/LnByaWNlfTwvaDI+XG4gICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+SW5ncmVkaWVudHM6PC9zdHJvbmc+IHtwcm9kdWN0Py5pbmdyZWRpZW50c31cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgIGxlZnQ6IDE1JTtcbiAgICAgICAgICBoZWlnaHQ6IDI1JTtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saW5lIHtcbiAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjYWY5YjdkO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2sge1xuICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNhZjliN2Q7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2FmOWI3ZDtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWNrOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tYm9keS1zZWN0aW9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYXNpZGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoNCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIwcHgpIHtcbiAgICAgICAgICAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB0b3A6IDIzJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgIC5oZWFkZXItdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRvcDogMjAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgLmhlYWRlci10aXRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgdG9wOiAxNyU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIyJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tYWluLWJvZHktc2VjdGlvbiB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5oZWFkZXItdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRvcDogMTYlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJhY2sge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB0b3A6IDE2JTtcbiAgICAgICAgICAgIGhlaWdodDogMTclO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJhY2sge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQYWdlO1xuIl19 */\\n/*@ sourceURL=/Users/skullcutter/PhpstormProjects/soap-website/frontend/components/ProductPage.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductPage, \"5/7BZAsw1DkHlAc6Rhf6dLR5vhU=\");\n\n_c = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZS5qcz84YmEwIl0sIm5hbWVzIjpbIlByb2R1Y3RQYWdlIiwic2x1ZyIsInByb2R1Y3RzIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJkYXRhIiwidXNlU3RhdGUiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsImZpbHRlciIsInBob3RvIiwiZm9ybWF0cyIsImxhcmdlIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0IiwibmFtZSIsImNhdGVnb3JpZXMiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiaW5ncmVkaWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDaEMsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUFWLENBQW9CQyxJQUFyQzs7QUFEZ0Msa0JBRUZDLHNEQUFRLEVBRk47QUFBQSxNQUV6QkMsT0FGeUI7QUFBQSxNQUVoQkMsVUFGZ0I7O0FBSWhDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUCxRQUFRLEtBQUtRLFNBQWpCLEVBQTRCO0FBQzFCRixnQkFBVSxDQUFDTixRQUFRLENBQUNTLE1BQVQsQ0FBZ0IsVUFBQ0osT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ04sSUFBUixLQUFpQkEsSUFBOUI7QUFBQSxPQUFoQixDQUFELENBQVY7QUFDQU8sZ0JBQVUsQ0FBQyxVQUFDRCxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDLENBQUQsQ0FBcEI7QUFBQSxPQUFELENBQVY7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDTCxRQUFELENBTE0sQ0FBVDtBQU9BLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFO0FBQUE7QUFBQSw4QkFDRTtBQUNFLFdBQUcsaUNBQTBCSyxPQUExQixhQUEwQkEsT0FBMUIsdUJBQTBCQSxPQUFPLENBQUVLLEtBQVQsQ0FBZUMsT0FBZixDQUF1QkMsS0FBdkIsQ0FBNkJDLEdBQXZELENBREw7QUFFRSxXQUFHLEVBQUVSLE9BQUYsYUFBRUEsT0FBRix1QkFBRUEsT0FBTyxDQUFFSyxLQUFULENBQWVJLGVBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFBLDRDQUFlLHdCQUFmO0FBQUEsZ0NBQ0U7QUFBQSw4Q0FBYyxPQUFkO0FBQUEsb0JBQXVCVCxPQUF2QixhQUF1QkEsT0FBdkIsdUJBQXVCQSxPQUFPLENBQUVVO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLDhDQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxzQkFBZVYsT0FBZixhQUFlQSxPQUFmLHVCQUFlQSxPQUFPLENBQUVXLFVBQVQsQ0FBb0IsQ0FBcEIsRUFBdUJqQixJQUF0QyxDQUFWO0FBQUEsaUNBQ0U7QUFBQSxnREFBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBWUU7QUFBQSw0Q0FBZSxtQkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQSxrQ0FDRTtBQUFBLGdEQUFjLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxnREFBYSxhQUFiO0FBQUEsc0JBQTRCTSxPQUE1QixhQUE0QkEsT0FBNUIsdUJBQTRCQSxPQUFPLENBQUVZO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0U7QUFBQTtBQUFBLGtDQUNFO0FBQUE7QUFBQSxtQ0FBYVosT0FBYixhQUFhQSxPQUFiLHVCQUFhQSxPQUFPLENBQUVhLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLE9BQ2lDYixPQURqQyxhQUNpQ0EsT0FEakMsdUJBQ2lDQSxPQUFPLENBQUVjLFdBRDFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvTEQsQ0EvTEQ7O0dBQU1yQixXOztLQUFBQSxXO0FBaU1TQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdFBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY29uc3QgUHJvZHVjdFBhZ2UgPSAoeyBzbHVnIH0pID0+IHtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VDb250ZXh0KENvbnRleHQpLmRhdGE7XG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvZHVjdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0UHJvZHVjdChwcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3Quc2x1ZyA9PT0gc2x1ZykpO1xuICAgICAgc2V0UHJvZHVjdCgocHJvZHVjdCkgPT4gcHJvZHVjdFswXSk7XG4gICAgfVxuICB9LCBbcHJvZHVjdHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke3Byb2R1Y3Q/LnBob3RvLmZvcm1hdHMubGFyZ2UudXJsfWB9XG4gICAgICAgICAgYWx0PXtwcm9kdWN0Py5waG90by5hbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9kdWN0Py5uYW1lfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgLz5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cHJvZHVjdD8uY2F0ZWdvcmllc1swXS5zbHVnfWB9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiYWNrXCI+QkFDSzwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib2R5LXNlY3Rpb25cIj5cbiAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi10aXRsZVwiPkRlc2NyaXB0aW9uOjwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntwcm9kdWN0Py5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDxhc2lkZT5cbiAgICAgICAgICAgIDxoMj5QcmljZTogJHtwcm9kdWN0Py5wcmljZX08L2gyPlxuICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICA8c3Ryb25nPkluZ3JlZGllbnRzOjwvc3Ryb25nPiB7cHJvZHVjdD8uaW5ncmVkaWVudHN9XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlci10aXRsZS1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICBsZWZ0OiAxNSU7XG4gICAgICAgICAgaGVpZ2h0OiAyNSU7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGluZSB7XG4gICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2FmOWI3ZDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWNrIHtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNSU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWY5YjdkO1xuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNhZjliN2Q7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAuYmFjazpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLWJvZHktc2VjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFzaWRlIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyMHB4KSB7XG4gICAgICAgICAgLmhlYWRlci10aXRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgdG9wOiAyMyU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgIC5oZWFkZXItdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRvcDogMTclO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWFpbi1ib2R5LXNlY3Rpb24ge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXNpZGUge1xuICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuaGVhZGVyLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB0b3A6IDE2JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgLmhlYWRlci10aXRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgdG9wOiAxNiU7XG4gICAgICAgICAgICBoZWlnaHQ6IDE3JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductPage.js\n");

/***/ })

})