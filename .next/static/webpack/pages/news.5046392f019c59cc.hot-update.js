"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./src/components/NewsItem.jsx":
/*!*************************************!*\
  !*** ./src/components/NewsItem.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n\n\n\n\n\nconst NewsItem = (param)=>{\n    let { news  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-around w-[310px] p-4 h-[530px] bg-white rounded-lg shadow-xl mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"w-full h-1/3 object-cover\",\n                priority: true,\n                width: 200,\n                height: 200,\n                src: \"\".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.API_BASE_URL).concat(news.img[0]),\n                alt: news.title\n            }, void 0, false, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/NewsItem.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg\",\n                        children: news.title\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/NewsItem.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-justify text-sm mt-4\",\n                        children: news.description.slice(0, 200) + \"...\"\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/NewsItem.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/NewsItem.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"main-btn transition-all duration-500\",\n                href: \"/news/\".concat(news.id),\n                children: \"Подробнее...\"\n            }, void 0, false, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/NewsItem.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/NewsItem.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NewsItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsItem);\nvar _c;\n$RefreshReg$(_c, \"NewsItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXdzSXRlbS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUNIO0FBQ2tCO0FBRTVDLE1BQU1JLFdBQVcsU0FBYztRQUFiLEVBQUVDLEtBQUksRUFBRTtJQUN4QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNQLG1EQUFLQTtnQkFDSk8sV0FBVTtnQkFDVkMsUUFBUTtnQkFDUkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBSyxHQUFrQk4sT0FBZkYsb0RBQVlBLEVBQWUsT0FBWkUsS0FBS08sR0FBRyxDQUFDLEVBQUU7Z0JBQ2xDQyxLQUFLUixLQUFLUyxLQUFLOzs7Ozs7MEJBRWpCLDhEQUFDUjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNRO3dCQUFFUixXQUFVO2tDQUFXRixLQUFLUyxLQUFLOzs7Ozs7a0NBQ2xDLDhEQUFDQzt3QkFBRVIsV0FBVTtrQ0FDVkYsS0FBS1csV0FBVyxDQUFDQyxLQUFLLENBQUMsR0FBRyxPQUFPOzs7Ozs7Ozs7Ozs7MEJBR3RDLDhEQUFDaEIsa0RBQUlBO2dCQUNITSxXQUFVO2dCQUNWVyxNQUFNLFNBQWlCLE9BQVJiLEtBQUtjLEVBQUU7MEJBQ3ZCOzs7Ozs7Ozs7Ozs7QUFLUDtLQXpCTWY7QUEyQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmV3c0l0ZW0uanN4PzU1Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IE5ld3NJdGVtID0gKHsgbmV3cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYXJvdW5kIHctWzMxMHB4XSBwLTQgaC1bNTMwcHhdIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LXhsIG1iLThcIj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLzMgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgIHNyYz17YCR7QVBJX0JBU0VfVVJMfSR7bmV3cy5pbWdbMF19YH1cbiAgICAgICAgYWx0PXtuZXdzLnRpdGxlfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYi0yXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj57bmV3cy50aXRsZX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeSB0ZXh0LXNtIG10LTRcIj5cbiAgICAgICAgICB7bmV3cy5kZXNjcmlwdGlvbi5zbGljZSgwLCAyMDApICsgXCIuLi5cIn1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9XCJtYWluLWJ0biB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcIlxuICAgICAgICBocmVmPXtgL25ld3MvJHtuZXdzLmlkfWB9XG4gICAgICA+XG4gICAgICAgINCf0L7QtNGA0L7QsdC90LXQtS4uLlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3c0l0ZW07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiUmVhY3QiLCJBUElfQkFTRV9VUkwiLCJOZXdzSXRlbSIsIm5ld3MiLCJkaXYiLCJjbGFzc05hbWUiLCJwcmlvcml0eSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiaW1nIiwiYWx0IiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJzbGljZSIsImhyZWYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NewsItem.jsx\n"));

/***/ })

});