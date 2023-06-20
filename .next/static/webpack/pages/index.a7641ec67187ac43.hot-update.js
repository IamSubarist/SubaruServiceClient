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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Catalog\": function() { return /* binding */ Catalog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter */ \"./src/components/Filter.jsx\");\n/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination */ \"./src/components/Pagination.jsx\");\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductItem */ \"./src/components/ProductItem.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _CategoryBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CategoryBar */ \"./src/components/CategoryBar.jsx\");\n/* harmony import */ var _NavBar_ui_BurgerMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavBar/ui/BurgerMenu */ \"./src/components/NavBar/ui/BurgerMenu.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n/* harmony import */ var _public_assets_Disk_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/Disk.png */ \"./public/assets/Disk.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Catalog = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [authenticated, setAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedBrand, setSelectedBrand] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [brands, setBrands] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const brandsResponse = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.API_BASE_URL).concat(_constants__WEBPACK_IMPORTED_MODULE_8__.BRANDS_URL));\n                setBrands(brandsResponse.data);\n                const categoriesResponse = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.API_BASE_URL).concat(_constants__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES_URL));\n                setCategories(categoriesResponse.data);\n            } catch (error) {\n                console.log(error);\n            }\n        }\n        fetchData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProducts = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.API_BASE_URL).concat(_constants__WEBPACK_IMPORTED_MODULE_8__.DEVICES_URL), {\n                    params: {\n                        page: currentPage,\n                        typeId: selectedCategory,\n                        brandId: selectedBrand\n                    }\n                });\n                const { data  } = response;\n                if (data.rows && Array.isArray(data.rows)) {\n                    setFilteredProducts(data.rows);\n                    setTotalPages(data.totalPages);\n                } else {\n                    console.error(\"Invalid data format:\", data);\n                }\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchProducts();\n        console.log(products);\n    }, [\n        currentPage,\n        selectedCategory,\n        selectedBrand\n    ]);\n    const filterProducts = ()=>{\n        const filteredData = filteredProducts.filter((product)=>{\n            let priceInRange = true;\n            if (minPrice !== \"\" && maxPrice !== \"\") {\n                priceInRange = product.price >= minPrice && product.price <= maxPrice;\n            } else if (minPrice !== \"\") {\n                priceInRange = product.price >= minPrice;\n            } else if (maxPrice !== \"\") {\n                priceInRange = product.price <= maxPrice;\n            }\n            let brandMatches = true;\n            if (selectedBrand !== \"\") {\n                brandMatches = product.brand === selectedBrand;\n            }\n            return priceInRange && brandMatches;\n        });\n        setFilteredProducts(filteredData);\n    };\n    const handlePriceFilter = (min, max)=>{\n        setMinPrice(min);\n        setMaxPrice(max);\n        filterProducts();\n    };\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const handlePageChange = (pageNumber)=>{\n        setCurrentPage(pageNumber);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"catalog\",\n        className: \"container mx-auto mt-28\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl sm:text-5xl text-gray-700 font-bold mb-4 absolute -z-10\",\n                children: \"Каталог\"\n            }, void 0, false, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-5xl sm:text-9xl text-gray-200 font-bold mb-4 relative -z-20 -top-2 sm:-top-14\",\n                children: \"Каталог\"\n            }, void 0, false, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex bg-white rounded-lg shadow-md\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryBar__WEBPACK_IMPORTED_MODULE_6__.CategoryBar, {\n                            onClick: handleCategoryClick\n                        }, void 0, false, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col sm:flex-row gap-10 mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full sm:w-64\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    handlePriceFilter: handlePriceFilter,\n                                    brands: brands\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                                lineNumber: 125,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4\",\n                                children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        product: product\n                                    }, product.id, false, {\n                                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        currentPage: currentPage,\n                        totalPages: totalPages,\n                        onPageChange: handlePageChange\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Catalog.jsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Catalog, \"XPmwSwBF2tBJ1cFH+GWqVSDqzJg=\");\n_c = Catalog;\nvar _c;\n$RefreshReg$(_c, \"Catalog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztrQ0FJbEMsOERBQUNwRSxtREFBVUE7d0JBQ1RpQixhQUFhQTt3QkFDYkUsWUFBWUE7d0JBQ1pzRCxjQUFjUjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCLEVBQUU7R0FqSVdyRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nLmpzeD9hMDRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuL0ZpbHRlclwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vUGFnaW5hdGlvblwiO1xuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuL1Byb2R1Y3RJdGVtXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBDYXRlZ29yeUJhciB9IGZyb20gXCIuL0NhdGVnb3J5QmFyXCI7XG5pbXBvcnQgQnVyZ2VyTWVudSBmcm9tIFwiLi9OYXZCYXIvdWkvQnVyZ2VyTWVudVwiO1xuaW1wb3J0IHtcbiAgQVBJX0JBU0VfVVJMLFxuICBERVZJQ0VTX1VSTCxcbiAgQlJBTkRTX1VSTCxcbiAgQ0FURUdPUklFU19VUkwsXG59IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBEaXNrIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL0Rpc2sucG5nXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGNvbnN0IENhdGFsb2cgPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbWluUHJpY2UsIHNldE1pblByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWF4UHJpY2UsIHNldE1heFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRCcmFuZCwgc2V0U2VsZWN0ZWRCcmFuZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2JyYW5kcywgc2V0QnJhbmRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpbHRlcmVkUHJvZHVjdHMsIHNldEZpbHRlcmVkUHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYnJhbmRzUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX0JBU0VfVVJMfSR7QlJBTkRTX1VSTH1gKTtcbiAgICAgICAgc2V0QnJhbmRzKGJyYW5kc1Jlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXNSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICBgJHtBUElfQkFTRV9VUkx9JHtDQVRFR09SSUVTX1VSTH1gXG4gICAgICAgICk7XG4gICAgICAgIHNldENhdGVnb3JpZXMoY2F0ZWdvcmllc1Jlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX0JBU0VfVVJMfSR7REVWSUNFU19VUkx9YCwge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcGFnZTogY3VycmVudFBhZ2UsXG4gICAgICAgICAgICB0eXBlSWQ6IHNlbGVjdGVkQ2F0ZWdvcnksXG4gICAgICAgICAgICBicmFuZElkOiBzZWxlY3RlZEJyYW5kLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuXG4gICAgICAgIGlmIChkYXRhLnJvd3MgJiYgQXJyYXkuaXNBcnJheShkYXRhLnJvd3MpKSB7XG4gICAgICAgICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhkYXRhLnJvd3MpO1xuICAgICAgICAgIHNldFRvdGFsUGFnZXMoZGF0YS50b3RhbFBhZ2VzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBkYXRhIGZvcm1hdDpcIiwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFByb2R1Y3RzKCk7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xuICB9LCBbY3VycmVudFBhZ2UsIHNlbGVjdGVkQ2F0ZWdvcnksIHNlbGVjdGVkQnJhbmRdKTtcblxuICBjb25zdCBmaWx0ZXJQcm9kdWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZFByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4ge1xuICAgICAgbGV0IHByaWNlSW5SYW5nZSA9IHRydWU7XG4gICAgICBpZiAobWluUHJpY2UgIT09IFwiXCIgJiYgbWF4UHJpY2UgIT09IFwiXCIpIHtcbiAgICAgICAgcHJpY2VJblJhbmdlID0gcHJvZHVjdC5wcmljZSA+PSBtaW5QcmljZSAmJiBwcm9kdWN0LnByaWNlIDw9IG1heFByaWNlO1xuICAgICAgfSBlbHNlIGlmIChtaW5QcmljZSAhPT0gXCJcIikge1xuICAgICAgICBwcmljZUluUmFuZ2UgPSBwcm9kdWN0LnByaWNlID49IG1pblByaWNlO1xuICAgICAgfSBlbHNlIGlmIChtYXhQcmljZSAhPT0gXCJcIikge1xuICAgICAgICBwcmljZUluUmFuZ2UgPSBwcm9kdWN0LnByaWNlIDw9IG1heFByaWNlO1xuICAgICAgfVxuXG4gICAgICBsZXQgYnJhbmRNYXRjaGVzID0gdHJ1ZTtcbiAgICAgIGlmIChzZWxlY3RlZEJyYW5kICE9PSBcIlwiKSB7XG4gICAgICAgIGJyYW5kTWF0Y2hlcyA9IHByb2R1Y3QuYnJhbmQgPT09IHNlbGVjdGVkQnJhbmQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmljZUluUmFuZ2UgJiYgYnJhbmRNYXRjaGVzO1xuICAgIH0pO1xuXG4gICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhmaWx0ZXJlZERhdGEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByaWNlRmlsdGVyID0gKG1pbiwgbWF4KSA9PiB7XG4gICAgc2V0TWluUHJpY2UobWluKTtcbiAgICBzZXRNYXhQcmljZShtYXgpO1xuICAgIGZpbHRlclByb2R1Y3RzKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlDbGljayA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZU51bWJlcikgPT4ge1xuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImNhdGFsb2dcIiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtdC0yOFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNXhsIHRleHQtZ3JheS03MDAgZm9udC1ib2xkIG1iLTQgYWJzb2x1dGUgLXotMTBcIj5cbiAgICAgICAg0JrQsNGC0LDQu9C+0LNcbiAgICAgIDwvaDI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC01eGwgc206dGV4dC05eGwgdGV4dC1ncmF5LTIwMCBmb250LWJvbGQgbWItNCByZWxhdGl2ZSAtei0yMCAtdG9wLTIgc206LXRvcC0xNFwiPlxuICAgICAgICDQmtCw0YLQsNC70L7Qs1xuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgICAgPENhdGVnb3J5QmFyIG9uQ2xpY2s9e2hhbmRsZUNhdGVnb3J5Q2xpY2t9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTEwIG10LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTY0XCI+XG4gICAgICAgICAgICA8RmlsdGVyIGhhbmRsZVByaWNlRmlsdGVyPXtoYW5kbGVQcmljZUZpbHRlcn0gYnJhbmRzPXticmFuZHN9IC8+XG4gICAgICAgICAgICB7LyogPEltYWdlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIC1sZWZ0LWZ1bGwgc206LWxlZnQtNjBcIlxuICAgICAgICAgICAgICBzcmM9e0Rpc2t9XG4gICAgICAgICAgICAgIGFsdD17RGlza31cbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgICAge2ZpbHRlcmVkUHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgIHRvdGFsUGFnZXM9e3RvdGFsUGFnZXN9XG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGaWx0ZXIiLCJQYWdpbmF0aW9uIiwiUHJvZHVjdEl0ZW0iLCJheGlvcyIsIkxpbmsiLCJDYXRlZ29yeUJhciIsIkJ1cmdlck1lbnUiLCJBUElfQkFTRV9VUkwiLCJERVZJQ0VTX1VSTCIsIkJSQU5EU19VUkwiLCJDQVRFR09SSUVTX1VSTCIsIkRpc2siLCJJbWFnZSIsIkNhdGFsb2ciLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiYXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyIsInNldFRvdGFsUGFnZXMiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwibWluUHJpY2UiLCJzZXRNaW5QcmljZSIsIm1heFByaWNlIiwic2V0TWF4UHJpY2UiLCJzZWxlY3RlZEJyYW5kIiwic2V0U2VsZWN0ZWRCcmFuZCIsImJyYW5kcyIsInNldEJyYW5kcyIsImZpbHRlcmVkUHJvZHVjdHMiLCJzZXRGaWx0ZXJlZFByb2R1Y3RzIiwiZmV0Y2hEYXRhIiwiYnJhbmRzUmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiY2F0ZWdvcmllc1Jlc3BvbnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hQcm9kdWN0cyIsInJlc3BvbnNlIiwicGFyYW1zIiwicGFnZSIsInR5cGVJZCIsImJyYW5kSWQiLCJyb3dzIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyUHJvZHVjdHMiLCJmaWx0ZXJlZERhdGEiLCJmaWx0ZXIiLCJwcm9kdWN0IiwicHJpY2VJblJhbmdlIiwicHJpY2UiLCJicmFuZE1hdGNoZXMiLCJicmFuZCIsImhhbmRsZVByaWNlRmlsdGVyIiwibWluIiwibWF4IiwiaGFuZGxlQ2F0ZWdvcnlDbGljayIsImNhdGVnb3J5IiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2VOdW1iZXIiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImgyIiwib25DbGljayIsIm1hcCIsIm9uUGFnZUNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Catalog.jsx\n"));

/***/ })

});