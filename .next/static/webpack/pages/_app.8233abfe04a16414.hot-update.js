"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Auth.jsx":
/*!*********************************!*\
  !*** ./src/components/Auth.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Auth = (param)=>{\n    let { onClose  } = param;\n    _s();\n    // const [username, setUsername] = useState(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleRegister = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:5000/api/user/registration\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    password,\n                    email\n                })\n            });\n            const data = await response.json();\n            console.log(data.message);\n        // Здесь вы можете добавить код для обработки успешной регистрации, например, перенаправление на другую страницу\n        } catch (error) {\n            console.error(\"Ошибка:\", error);\n        }\n    };\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute left-0 top-0 w-full h-full bg-black/50 z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"absolute right-0 w-1/4 h-full bg-white pt-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col mx-8 gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-3xl font-bold\",\n                                children: isLogin ? \"Авторизация\" : \"Регистрация\"\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: onClose,\n                                className: \"border border-black rounded-md\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"stroke-width\": \"1.5\",\n                                    stroke: \"currentColor\",\n                                    className: \"w-6 h-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        d: \"M6 18L18 6M6 6l12 12\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col border rounded-md border-blue-900 p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-2 w-full\",\n                            children: [\n                                isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>setUsername(e.target.value),\n                                    className: \"outline-none border-b border-blue-900 h-10\",\n                                    placeholder: \"Ваше имя\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    className: \"outline-none border-b border-blue-900 h-10\",\n                                    placeholder: \"Введите email\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    className: \"outline-none border-b border-blue-900 h-10\",\n                                    placeholder: \"Введите пароль\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleRegister,\n                                className: \"text-white bg-blue-900 rounded-md w-full py-2 mb-1\",\n                                children: isLogin ? \"Войти\" : \"Зарегистрироваться\"\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, undefined),\n                            isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Нет аккаунта?\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-blue-900\",\n                                        href: \"/\",\n                                        children: \"Зарегестрируйтесь!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Есть аккаунт?\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-blue-900\",\n                                        href: \"/\",\n                                        children: \"Войдите!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Auth, \"j26WF0VAUeYm/An1/bexuWawJIE=\");\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLE9BQU8sU0FBaUI7UUFBaEIsRUFBRUMsUUFBTyxFQUFFOztJQUN2QixnREFBZ0Q7SUFDaEQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNTyxpQkFBaUIsVUFBWTtRQUNqQyxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrQ0FDQTtnQkFDRUMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVYO29CQUFVRTtnQkFBTTtZQUN6QztZQUdGLE1BQU1VLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDSCxLQUFLSSxPQUFPO1FBRXhCLGdIQUFnSDtRQUNsSCxFQUFFLE9BQU9DLE9BQU87WUFDZEgsUUFBUUcsS0FBSyxDQUFDLFdBQVdBO1FBQzNCO0lBQ0Y7SUFFQSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR3RCLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUMscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUVELFdBQVU7MENBQ1ZILFVBQVUsZ0JBQWdCLGFBQWE7Ozs7OzswQ0FFMUMsOERBQUNLO2dDQUNDQyxTQUFTekI7Z0NBQ1RzQixXQUFVOzBDQUVWLDRFQUFDSTtvQ0FDQ0MsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsU0FBUTtvQ0FDUkMsZ0JBQWE7b0NBQ2JDLFFBQU87b0NBQ1BULFdBQVU7OENBRVYsNEVBQUNVO3dDQUNDQyxrQkFBZTt3Q0FDZkMsbUJBQWdCO3dDQUNoQkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLViw4REFBQ2Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOztnQ0FDWkgsd0JBQ0MsOERBQUNFOzs7OzhEQUVELDhEQUFDZTtvQ0FDQ0MsVUFBVSxDQUFDQyxJQUFNQyxZQUFZRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7b0NBQzNDbkIsV0FBVTtvQ0FDVm9CLGFBQVk7b0NBQ1pDLE1BQUs7Ozs7OzZDQUVSOzhDQUNELDhEQUFDUDtvQ0FDQ0MsVUFBVSxDQUFDQyxJQUFNbEMsU0FBU2tDLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztvQ0FDeENuQixXQUFVO29DQUNWb0IsYUFBWTtvQ0FDWkMsTUFBSzs7Ozs7OzhDQUVQLDhEQUFDUDtvQ0FDQ0MsVUFBVSxDQUFDQyxJQUFNcEMsWUFBWW9DLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztvQ0FDM0NuQixXQUFVO29DQUNWb0IsYUFBWTtvQ0FDWkMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSVgsOERBQUN0Qjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUNDQyxTQUFTcEI7Z0NBQ1RpQixXQUFVOzBDQUVUSCxVQUFVLFVBQVUsb0JBQW9COzs7Ozs7NEJBRTFDQSx3QkFDQyw4REFBQ0U7O29DQUFJO29DQUNXO2tEQUNkLDhEQUFDdUI7d0NBQUV0QixXQUFVO3dDQUFnQnVCLE1BQU07a0RBQUs7Ozs7Ozs7Ozs7OzBEQUsxQyw4REFBQ3hCOztvQ0FBSTtvQ0FDVztrREFDZCw4REFBQ3VCO3dDQUFFdEIsV0FBVTt3Q0FBZ0J1QixNQUFNO2tEQUFLOzs7Ozs7Ozs7Ozt5Q0FJM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0E5R005QztLQUFBQTtBQWdITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BdXRoLmpzeD85OTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBdXRoID0gKHsgb25DbG9zZSB9KSA9PiB7XG4gIC8vIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlUmVnaXN0ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyL3JlZ2lzdHJhdGlvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcGFzc3dvcmQsIGVtYWlsIH0pLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YS5tZXNzYWdlKTtcblxuICAgICAgLy8g0JfQtNC10YHRjCDQstGLINC80L7QttC10YLQtSDQtNC+0LHQsNCy0LjRgtGMINC60L7QtCDQtNC70Y8g0L7QsdGA0LDQsdC+0YLQutC4INGD0YHQv9C10YjQvdC+0Lkg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCwg0L3QsNC/0YDQuNC80LXRgCwg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC90LAg0LTRgNGD0LPRg9GOINGB0YLRgNCw0L3QuNGG0YNcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcItCe0YjQuNCx0LrQsDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtMCB3LWZ1bGwgaC1mdWxsIGJnLWJsYWNrLzUwIHotMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB3LTEvNCBoLWZ1bGwgYmctd2hpdGUgcHQtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXgtOCBnYXAtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAge2lzTG9naW4gPyBcItCQ0LLRgtC+0YDQuNC30LDRhtC40Y9cIiA6IFwi0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1wifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYm9yZGVyIHJvdW5kZWQtbWQgYm9yZGVyLWJsdWUtOTAwIHAtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIHctZnVsbFwiPlxuICAgICAgICAgICAgICB7aXNMb2dpbiA/IChcbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgYm9yZGVyLWIgYm9yZGVyLWJsdWUtOTAwIGgtMTBcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCw0YjQtSDQuNC80Y9cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBib3JkZXItYiBib3JkZXItYmx1ZS05MDAgaC0xMFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSBlbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgYm9yZGVyLWIgYm9yZGVyLWJsdWUtOTAwIGgtMTBcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlZ2lzdGVyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtOTAwIHJvdW5kZWQtbWQgdy1mdWxsIHB5LTIgbWItMVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpc0xvZ2luID8gXCLQktC+0LnRgtC4XCIgOiBcItCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1wifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7aXNMb2dpbiA/IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICDQndC10YIg0LDQutC60LDRg9C90YLQsD97XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTkwMFwiIGhyZWY9e1wiL1wifT5cbiAgICAgICAgICAgICAgICAgINCX0LDRgNC10LPQtdGB0YLRgNC40YDRg9C50YLQtdGB0YwhXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAg0JXRgdGC0Ywg0LDQutC60LDRg9C90YI/e1wiIFwifVxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS05MDBcIiBocmVmPXtcIi9cIn0+XG4gICAgICAgICAgICAgICAgICDQktC+0LnQtNC40YLQtSFcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF1dGgiLCJvbkNsb3NlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVSZWdpc3RlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZXJyb3IiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZS13aWR0aCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsImQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInNldFVzZXJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Auth.jsx\n"));

/***/ })

});