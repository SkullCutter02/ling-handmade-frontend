_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(t,e,r){r("GcxT"),t.exports=r("nOHt")},"1TCz":function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return f}));var n=r("rePB"),o=r("nKUr"),c=(r("q1tI"),r("mk7R")),i=r("xKSj");r("L1EO"),r("VAPu");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t){var e=t.Component,r=t.pageProps;return Object(o.jsx)(c.b,{children:Object(o.jsx)(i.b,{children:Object(o.jsx)(e,a({},r))})})}},"6tQU":function(t,e,r){"use strict";(function(t){var r=t.env.NEXT_PUBLIC_HOST||"http://localhost:1337";e.a=r}).call(this,r("8oxB"))},"8oxB":function(t,e){var r,n,o=t.exports={};function c(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===c||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:c}catch(t){r=c}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var a,f=[],s=!1,l=-1;function p(){s&&a&&(s=!1,a.length?f=a.concat(f):l=-1,f.length&&b())}function b(){if(!s){var t=u(p);s=!0;for(var e=f.length;e;){for(a=f,f=[];++l<e;)a&&a[l].run();l=-1,e=f.length}a=null,s=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];f.push(new y(t,e)),1!==f.length||s||u(b)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},GcxT:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},L1EO:function(t,e,r){},VAPu:function(t,e,r){},mk7R:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?c(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return O}));var s=r("rePB"),l=r("nKUr"),p=r("q1tI"),b=r.n(p),y=r("6tQU");function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=f(t);if(e){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}var m=b.a.createContext(void 0),O=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(f,t);var e,r,u,a=h(f);function f(){var t;n(this,f);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=a.call.apply(a,[this].concat(r)),Object(s.a)(c(t),"state",{}),t}return e=f,(r=[{key:"componentDidMount",value:function(){var t=this;fetch("".concat(y.a,"/products")).then((function(t){return t.json()})).then((function(e){return t.setState({data:e})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return Object(l.jsx)(m.Provider,{value:this.state,children:this.props.children})}}])&&o(e.prototype,r),u&&o(e,u),f}(p.Component)},rePB:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},xKSj:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return l}));var c=r("rePB"),i=r("nKUr"),u=r("q1tI");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=Object(u.createContext)(null),l=function(t){var e=Object(u.useState)({setItem:function(t){n((function(e){return f(f({},e),{},{cartItems:[].concat(o(e.cartItems),[t])})}))},removeItem:function(t){n((function(e){return f(f({},e),{},{cartItems:e.cartItems.filter((function(e){return e.name!==t.name}))})}))},cartItems:[]}),r=e[0],n=e[1];return Object(u.useEffect)((function(){var t=localStorage.getItem("cartItems");t&&n(f(f({},r),{},{cartItems:JSON.parse(t)}))}),[]),Object(u.useEffect)((function(){r.cartItems&&localStorage.setItem("cartItems",JSON.stringify(r.cartItems))}),[r]),Object(i.jsx)(s.Provider,{value:r,children:t.children})}}},[[0,0,2,1]]]);