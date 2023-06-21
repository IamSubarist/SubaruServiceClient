"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./pages/product_page.jsx":
/*!********************************!*\
  !*** ./pages/product_page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _src_components_Swiper_ProductSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/components/Swiper/ProductSlider */ \"./src/components/Swiper/ProductSlider.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/src/constants */ \"./src/constants/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProductPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isAdded, setIsAdded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProduct = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_src_constants__WEBPACK_IMPORTED_MODULE_5__.API_BASE_URL).concat(_src_constants__WEBPACK_IMPORTED_MODULE_5__.DEVICES_URL).concat(id));\n                setProduct(response.data);\n                console.log(response.data);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        if (id) {\n            fetchProduct();\n        }\n    }, [\n        id\n    ]);\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between flex-col gap-6 sm:flex-row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"shadow-box h-full w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"main-title\",\n                            children: product.name\n                        }, void 0, false, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Swiper_ProductSlider__WEBPACK_IMPORTED_MODULE_3__.ProductSlider, {\n                            product: product\n                        }, void 0, false, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"shadow-box h-full w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"main-title\",\n                            children: \"Характеристики товара\"\n                        }, void 0, false, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-10\",\n                            children: product.description\n                        }, void 0, false, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        product.info.map((i)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between gap-6 shadow-box\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"w-full font-bold text-justify\",\n                                            children: i.title\n                                        }, void 0, false, {\n                                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"w-full \",\n                                            children: i.description\n                                        }, void 0, false, {\n                                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"shadow-box h-full w-full sm:w-1/5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"main-title\",\n                            children: \"Стоимость\"\n                        }, void 0, false, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-bold text-xl\",\n                                    children: [\n                                        product.price,\n                                        \" ₽\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-gray-400 line-through\",\n                                    children: [\n                                        product.oldPrice,\n                                        \" ₽\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setIsAdded(true),\n                                    className: isAdded ? \"main-btn text-white bg-blue-900\" : \"main-btn transition-all duration-500\",\n                                    disabled: isAdded,\n                                    children: isAdded ? \"В корзине\" : \"В корзину\"\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/order/\".concat(product.id),\n                                    className: \"main-btn transition-all duration-500\",\n                                    children: \"Купить\"\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/product_page.jsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProductPage, \"9rY6iW56SLQcEAZ9MFx11CMO8DU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\nvar _c;\n$RefreshReg$(_c, \"ProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0X3BhZ2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDZDtBQUM0QztBQUN6QztBQUMrQjtBQUU1RCxNQUFNUyxjQUFjLElBQU07O0lBQ3hCLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVRLEdBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzNCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNDLE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWdCLGVBQWUsVUFBWTtZQUMvQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTWQsaURBQVMsQ0FBQyxHQUFrQkksT0FBZkQsd0RBQVlBLEVBQWlCSSxPQUFkSCx1REFBV0EsRUFBTSxPQUFIRztnQkFDakVHLFdBQVdJLFNBQVNFLElBQUk7Z0JBQ3hCQyxRQUFRQyxHQUFHLENBQUNKLFNBQVNFLElBQUk7WUFDM0IsRUFBRSxPQUFPRyxPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUNBO1lBQ2hCO1FBQ0Y7UUFFQSxJQUFJWixJQUFJO1lBQ05NO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ047S0FBRztJQUVQLElBQUksQ0FBQ0UsU0FBUztRQUNaLHFCQUFPLDhEQUFDVztzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUVELHFCQUNFO2tCQUNFLDRFQUFDQTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FBY1osUUFBUWEsSUFBSTs7Ozs7O3NDQUN6Qyw4REFBQ3JCLCtFQUFhQTs0QkFBQ1EsU0FBU0E7Ozs7Ozs7Ozs7Ozs4QkFFMUIsOERBQUNXO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQWE7Ozs7OztzQ0FDNUIsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUFTWixRQUFRYyxXQUFXOzs7Ozs7d0JBQzFDZCxRQUFRZSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxJQUFNOzRCQUN2QixxQkFDRSw4REFBQ047Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ007NENBQUVOLFdBQVU7c0RBQWlDSyxFQUFFRSxLQUFLOzs7Ozs7c0RBQ3JELDhEQUFDRDs0Q0FBRU4sV0FBVTtzREFBV0ssRUFBRUgsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBSTdDOzs7Ozs7OzhCQUVGLDhEQUFDSDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUFhOzs7Ozs7c0NBQzVCLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzt3Q0FBcUJaLFFBQVFvQixLQUFLO3dDQUFDOzs7Ozs7OzhDQUNsRCw4REFBQ1Q7b0NBQUlDLFdBQVU7O3dDQUNaWixRQUFRcUIsUUFBUTt3Q0FBQzs7Ozs7Ozs7Ozs7OztzQ0FHdEIsOERBQUNWOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1U7b0NBQ0NDLFNBQVMsSUFBTXBCLFdBQVcsSUFBSTtvQ0FDOUJTLFdBQ0VWLFVBQ0ksb0NBQ0Esc0NBQXNDO29DQUU1Q3NCLFVBQVV0Qjs4Q0FFVEEsVUFBVSxjQUFjLFdBQVc7Ozs7Ozs4Q0FFdEMsOERBQUNULGtEQUFJQTtvQ0FDSGdDLE1BQU0sVUFBcUIsT0FBWHpCLFFBQVFGLEVBQUU7b0NBQzFCYyxXQUFVOzhDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0E5RU1oQjs7UUFDV04sa0RBQVNBOzs7S0FEcEJNO0FBZ0ZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RfcGFnZS5qc3g/YzIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBQcm9kdWN0U2xpZGVyIH0gZnJvbSBcIkAvc3JjL2NvbXBvbmVudHMvU3dpcGVyL1Byb2R1Y3RTbGlkZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCwgREVWSUNFU19VUkwgfSBmcm9tIFwiQC9zcmMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IFByb2R1Y3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzQWRkZWQsIHNldElzQWRkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX0JBU0VfVVJMfSR7REVWSUNFU19VUkx9JHtpZH1gKTtcbiAgICAgICAgc2V0UHJvZHVjdChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGlkKSB7XG4gICAgICBmZXRjaFByb2R1Y3QoKTtcbiAgICB9XG4gIH0sIFtpZF0pO1xuXG4gIGlmICghcHJvZHVjdCkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGZsZXgtY29sIGdhcC02IHNtOmZsZXgtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWJveCBoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+e3Byb2R1Y3QubmFtZX08L2Rpdj5cbiAgICAgICAgICA8UHJvZHVjdFNsaWRlciBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctYm94IGgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj7QpdCw0YDQsNC60YLQtdGA0LjRgdGC0LjQutC4INGC0L7QstCw0YDQsDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTBcIj57cHJvZHVjdC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICB7cHJvZHVjdC5pbmZvLm1hcCgoaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBnYXAtNiBzaGFkb3ctYm94XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC1ib2xkIHRleHQtanVzdGlmeVwiPntpLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctZnVsbCBcIj57aS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWJveCBoLWZ1bGwgdy1mdWxsIHNtOnctMS81XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+0KHRgtC+0LjQvNC+0YHRgtGMPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsXCI+e3Byb2R1Y3QucHJpY2V9IOKCvTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGxpbmUtdGhyb3VnaFwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdC5vbGRQcmljZX0g4oK9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQWRkZWQodHJ1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgaXNBZGRlZFxuICAgICAgICAgICAgICAgICAgPyBcIm1haW4tYnRuIHRleHQtd2hpdGUgYmctYmx1ZS05MDBcIlxuICAgICAgICAgICAgICAgICAgOiBcIm1haW4tYnRuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQWRkZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpc0FkZGVkID8gXCLQkiDQutC+0YDQt9C40L3QtVwiIDogXCLQkiDQutC+0YDQt9C40L3Rg1wifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXtgL29yZGVyLyR7cHJvZHVjdC5pZH1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluLWJ0biB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDQmtGD0L/QuNGC0YxcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIlByb2R1Y3RTbGlkZXIiLCJMaW5rIiwiQVBJX0JBU0VfVVJMIiwiREVWSUNFU19VUkwiLCJQcm9kdWN0UGFnZSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImlzQWRkZWQiLCJzZXRJc0FkZGVkIiwiZmV0Y2hQcm9kdWN0IiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW5mbyIsIm1hcCIsImkiLCJwIiwidGl0bGUiLCJwcmljZSIsIm9sZFByaWNlIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product_page.jsx\n"));

/***/ })

});