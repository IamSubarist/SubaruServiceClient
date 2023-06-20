"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Catalog.jsx":
/*!************************************!*\
  !*** ./src/components/Catalog.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Catalog\": function() { return /* binding */ Catalog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter */ \"./src/components/Filter.jsx\");\n/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination */ \"./src/components/Pagination.jsx\");\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductItem */ \"./src/components/ProductItem.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _CategoryBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CategoryBar */ \"./src/components/CategoryBar.jsx\");\n/* harmony import */ var _NavBar_ui_BurgerMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavBar/ui/BurgerMenu */ \"./src/components/NavBar/ui/BurgerMenu.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n/* harmony import */ var _public_assets_Disk_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/Disk.png */ \"./public/assets/Disk.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Catalog = ()=>{\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedBrand, setSelectedBrand] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [brands, setBrands] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const brandsResponse = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.API_BASE_URL).concat(_constants__WEBPACK_IMPORTED_MODULE_8__.BRANDS_URL));\n                setBrands(brandsResponse.data);\n                const categoriesResponse = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.API_BASE_URL).concat(_constants__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES_URL));\n                setCategories(categoriesResponse.data);\n            } catch (error) {\n                console.log(error);\n            }\n        }\n        fetchData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProducts = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.API_BASE_URL).concat(_constants__WEBPACK_IMPORTED_MODULE_8__.DEVICES_URL), {\n                    params: {\n                        page: currentPage,\n                        typeId: selectedCategory,\n                        brandId: selectedBrand\n                    }\n                });\n                const { data  } = response;\n                if (data.rows && Array.isArray(data.rows)) {\n                    setFilteredProducts(data.rows);\n                    setTotalPages(data.totalPages);\n                } else {\n                    console.error(\"Invalid data format:\", data);\n                }\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchProducts();\n    }, [\n        currentPage,\n        selectedCategory,\n        selectedBrand\n    ]);\n    const filterProducts = ()=>{\n        const filteredData = filteredProducts.filter((product)=>{\n            let priceInRange = true;\n            if (minPrice !== \"\" && maxPrice !== \"\") {\n                priceInRange = product.price >= minPrice && product.price <= maxPrice;\n            } else if (minPrice !== \"\") {\n                priceInRange = product.price >= minPrice;\n            } else if (maxPrice !== \"\") {\n                priceInRange = product.price <= maxPrice;\n            }\n            return priceInRange;\n        });\n        setFilteredProducts(filteredData);\n    };\n    const handlePriceFilter = (min, max)=>{\n        setMinPrice(min);\n        setMaxPrice(max);\n        filterProducts();\n    };\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const handlePageChange = (pageNumber)=>{\n        setCurrentPage(pageNumber);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"catalog\",\n        className: \"container mx-auto mt-28\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl sm:text-5xl text-gray-700 font-bold mb-4 absolute -z-10\",\n                children: \"Каталог\"\n            }, void 0, false, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-5xl sm:text-9xl text-gray-200 font-bold mb-4 relative -z-20 -top-2 sm:-top-14\",\n                children: \"Каталог\"\n            }, void 0, false, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex bg-white rounded-lg shadow-md\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryBar__WEBPACK_IMPORTED_MODULE_6__.CategoryBar, {\n                            onClick: handleCategoryClick\n                        }, void 0, false, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col sm:flex-row gap-10 mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full sm:w-64\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    handlePriceFilter: handlePriceFilter,\n                                    brands: brands\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4\",\n                                children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        product: product\n                                    }, product.id, false, {\n                                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        currentPage: currentPage,\n                        totalPages: totalPages,\n                        onPageChange: handlePageChange\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Catalog, \"RqLs+bjEXt3gWaeVTjVN788tHCs=\");\n_c = Catalog;\nvar _c;\n$RefreshReg$(_c, \"Catalog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CLENBQUNDLEtBQUtDLE1BQVE7UUFDdENuQyxZQUFZa0M7UUFDWmhDLFlBQVlpQztRQUNaUjtJQUNGO0lBRUEsTUFBTVMsc0JBQXNCLENBQUNDLFdBQWE7UUFDeEN2QyxvQkFBb0J1QztJQUN0QjtJQUVBLE1BQU1DLG1CQUFtQixDQUFDQyxhQUFlO1FBQ3ZDN0MsZUFBZTZDO0lBQ2pCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLElBQUc7UUFBVUMsV0FBVTs7MEJBQzFCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBbUU7Ozs7OzswQkFHakYsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFxRjs7Ozs7OzBCQUduRyw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDRjt3QkFBSUUsV0FBVTtrQ0FDYiw0RUFBQzFELHFEQUFXQTs0QkFBQzRELFNBQVNSOzs7Ozs7Ozs7OztrQ0FFeEIsOERBQUNJO3dCQUFJRSxXQUFVOzswQ0FDYiw4REFBQ0Y7Z0NBQUlFLFdBQVU7MENBQ2IsNEVBQUMvRCwrQ0FBTUE7b0NBQUNzRCxtQkFBbUJBO29DQUFtQjVCLFFBQVFBOzs7Ozs7Ozs7OzswQ0FPeEQsOERBQUNtQztnQ0FBSUUsV0FBVTswQ0FDWm5DLGlCQUFpQnNDLEdBQUcsQ0FBQyxDQUFDZix3QkFDckIsOERBQUNqRCxvREFBV0E7d0NBQWtCaUQsU0FBU0E7dUNBQXJCQSxRQUFRVyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUlsQyw4REFBQzdELG1EQUFVQTt3QkFDVGEsYUFBYUE7d0JBQ2JFLFlBQVlBO3dCQUNabUQsY0FBY1I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QixFQUFFO0dBeEhXOUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy5qc3g/YTA0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi9GaWx0ZXJcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL1BhZ2luYXRpb25cIjtcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi9Qcm9kdWN0SXRlbVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlCYXIgfSBmcm9tIFwiLi9DYXRlZ29yeUJhclwiO1xuaW1wb3J0IEJ1cmdlck1lbnUgZnJvbSBcIi4vTmF2QmFyL3VpL0J1cmdlck1lbnVcIjtcbmltcG9ydCB7XG4gIEFQSV9CQVNFX1VSTCxcbiAgREVWSUNFU19VUkwsXG4gIEJSQU5EU19VUkwsXG4gIENBVEVHT1JJRVNfVVJMLFxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgRGlzayBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9EaXNrLnBuZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBDYXRhbG9nID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbdG90YWxQYWdlcywgc2V0VG90YWxQYWdlc10gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFttaW5QcmljZSwgc2V0TWluUHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttYXhQcmljZSwgc2V0TWF4UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWxlY3RlZEJyYW5kLCBzZXRTZWxlY3RlZEJyYW5kXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYnJhbmRzLCBzZXRCcmFuZHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmlsdGVyZWRQcm9kdWN0cywgc2V0RmlsdGVyZWRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBicmFuZHNSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfQkFTRV9VUkx9JHtCUkFORFNfVVJMfWApO1xuICAgICAgICBzZXRCcmFuZHMoYnJhbmRzUmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgY29uc3QgY2F0ZWdvcmllc1Jlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0ke0NBVEVHT1JJRVNfVVJMfWBcbiAgICAgICAgKTtcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhjYXRlZ29yaWVzUmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfQkFTRV9VUkx9JHtERVZJQ0VTX1VSTH1gLCB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBwYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHR5cGVJZDogc2VsZWN0ZWRDYXRlZ29yeSxcbiAgICAgICAgICAgIGJyYW5kSWQ6IHNlbGVjdGVkQnJhbmQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XG5cbiAgICAgICAgaWYgKGRhdGEucm93cyAmJiBBcnJheS5pc0FycmF5KGRhdGEucm93cykpIHtcbiAgICAgICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKGRhdGEucm93cyk7XG4gICAgICAgICAgc2V0VG90YWxQYWdlcyhkYXRhLnRvdGFsUGFnZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGRhdGEgZm9ybWF0OlwiLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgfSwgW2N1cnJlbnRQYWdlLCBzZWxlY3RlZENhdGVnb3J5LCBzZWxlY3RlZEJyYW5kXSk7XG5cbiAgY29uc3QgZmlsdGVyUHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gZmlsdGVyZWRQcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHtcbiAgICAgIGxldCBwcmljZUluUmFuZ2UgPSB0cnVlO1xuICAgICAgaWYgKG1pblByaWNlICE9PSBcIlwiICYmIG1heFByaWNlICE9PSBcIlwiKSB7XG4gICAgICAgIHByaWNlSW5SYW5nZSA9IHByb2R1Y3QucHJpY2UgPj0gbWluUHJpY2UgJiYgcHJvZHVjdC5wcmljZSA8PSBtYXhQcmljZTtcbiAgICAgIH0gZWxzZSBpZiAobWluUHJpY2UgIT09IFwiXCIpIHtcbiAgICAgICAgcHJpY2VJblJhbmdlID0gcHJvZHVjdC5wcmljZSA+PSBtaW5QcmljZTtcbiAgICAgIH0gZWxzZSBpZiAobWF4UHJpY2UgIT09IFwiXCIpIHtcbiAgICAgICAgcHJpY2VJblJhbmdlID0gcHJvZHVjdC5wcmljZSA8PSBtYXhQcmljZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByaWNlSW5SYW5nZTtcbiAgICB9KTtcblxuICAgIHNldEZpbHRlcmVkUHJvZHVjdHMoZmlsdGVyZWREYXRhKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmljZUZpbHRlciA9IChtaW4sIG1heCkgPT4ge1xuICAgIHNldE1pblByaWNlKG1pbik7XG4gICAgc2V0TWF4UHJpY2UobWF4KTtcbiAgICBmaWx0ZXJQcm9kdWN0cygpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2xpY2sgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICBzZXRTZWxlY3RlZENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2VOdW1iZXIpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShwYWdlTnVtYmVyKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJjYXRhbG9nXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXQtMjhcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTV4bCB0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZCBtYi00IGFic29sdXRlIC16LTEwXCI+XG4gICAgICAgINCa0LDRgtCw0LvQvtCzXG4gICAgICA8L2gyPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNXhsIHNtOnRleHQtOXhsIHRleHQtZ3JheS0yMDAgZm9udC1ib2xkIG1iLTQgcmVsYXRpdmUgLXotMjAgLXRvcC0yIHNtOi10b3AtMTRcIj5cbiAgICAgICAg0JrQsNGC0LDQu9C+0LNcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgIDxDYXRlZ29yeUJhciBvbkNsaWNrPXtoYW5kbGVDYXRlZ29yeUNsaWNrfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC0xMCBtdC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy02NFwiPlxuICAgICAgICAgICAgPEZpbHRlciBoYW5kbGVQcmljZUZpbHRlcj17aGFuZGxlUHJpY2VGaWx0ZXJ9IGJyYW5kcz17YnJhbmRzfSAvPlxuICAgICAgICAgICAgey8qIDxJbWFnZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtbGVmdC1mdWxsIHNtOi1sZWZ0LTYwXCJcbiAgICAgICAgICAgICAgc3JjPXtEaXNrfVxuICAgICAgICAgICAgICBhbHQ9e0Rpc2t9XG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICA8UHJvZHVjdEl0ZW0ga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICB0b3RhbFBhZ2VzPXt0b3RhbFBhZ2VzfVxuICAgICAgICAgIG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmlsdGVyIiwiUGFnaW5hdGlvbiIsIlByb2R1Y3RJdGVtIiwiYXhpb3MiLCJMaW5rIiwiQ2F0ZWdvcnlCYXIiLCJCdXJnZXJNZW51IiwiQVBJX0JBU0VfVVJMIiwiREVWSUNFU19VUkwiLCJCUkFORFNfVVJMIiwiQ0FURUdPUklFU19VUkwiLCJEaXNrIiwiSW1hZ2UiLCJDYXRhbG9nIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInRvdGFsUGFnZXMiLCJzZXRUb3RhbFBhZ2VzIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwibWF4UHJpY2UiLCJzZXRNYXhQcmljZSIsInNlbGVjdGVkQnJhbmQiLCJzZXRTZWxlY3RlZEJyYW5kIiwiYnJhbmRzIiwic2V0QnJhbmRzIiwiZmlsdGVyZWRQcm9kdWN0cyIsInNldEZpbHRlcmVkUHJvZHVjdHMiLCJmZXRjaERhdGEiLCJicmFuZHNSZXNwb25zZSIsImdldCIsImRhdGEiLCJjYXRlZ29yaWVzUmVzcG9uc2UiLCJzZXRDYXRlZ29yaWVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hQcm9kdWN0cyIsInJlc3BvbnNlIiwicGFyYW1zIiwicGFnZSIsInR5cGVJZCIsImJyYW5kSWQiLCJyb3dzIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyUHJvZHVjdHMiLCJmaWx0ZXJlZERhdGEiLCJmaWx0ZXIiLCJwcm9kdWN0IiwicHJpY2VJblJhbmdlIiwicHJpY2UiLCJoYW5kbGVQcmljZUZpbHRlciIsIm1pbiIsIm1heCIsImhhbmRsZUNhdGVnb3J5Q2xpY2siLCJjYXRlZ29yeSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlTnVtYmVyIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJoMiIsIm9uQ2xpY2siLCJtYXAiLCJvblBhZ2VDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Catalog.jsx\n"));

/***/ })

});