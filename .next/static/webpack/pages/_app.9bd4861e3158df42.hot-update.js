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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Auth = (param)=>{\n    let { onClose , issLogin  } = param;\n    _s();\n    // const [username, setUsername] = useState(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleRegister = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:5000/api/user/registration\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    password,\n                    email\n                })\n            });\n            const data = await response.json();\n            console.log(data.message);\n        // Здесь вы можете добавить код для обработки успешной регистрации, например, перенаправление на другую страницу\n        } catch (error) {\n            console.error(\"Ошибка:\", error);\n        }\n    };\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute left-0 top-0 w-full h-full bg-black/50 z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"absolute right-0 w-1/4 h-full bg-white pt-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col mx-8 gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-3xl font-bold\",\n                                children: isLogin ? \"Авторизация\" : \"Регистрация\"\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>console.log(issLogin),\n                                className: \"border border-black rounded-md\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"stroke-width\": \"1.5\",\n                                    stroke: \"currentColor\",\n                                    class: \"w-6 h-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        d: \"M6 18L18 6M6 6l12 12\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col border rounded-md border-blue-900 p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-2 w-full\",\n                            children: [\n                                isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>setUsername(e.target.value),\n                                    className: \"outline-none border-b border-blue-900 h-10\",\n                                    placeholder: \"Ваше имя\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    className: \"outline-none border-b border-blue-900 h-10\",\n                                    placeholder: \"Введите email\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    className: \"outline-none border-b border-blue-900 h-10\",\n                                    placeholder: \"Введите пароль\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleRegister,\n                                className: \"text-white bg-blue-900 rounded-md w-full py-2 mb-1\",\n                                children: isLogin ? \"Войти\" : \"Зарегистрироваться\"\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, undefined),\n                            isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Нет аккаунта?\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-blue-900\",\n                                        href: \"/\",\n                                        children: \"Зарегестрируйтесь!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Есть аккаунт?\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-blue-900\",\n                                        href: \"/\",\n                                        children: \"Войдите!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Auth, \"j26WF0VAUeYm/An1/bexuWawJIE=\");\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anN4Pzk5ODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEF1dGggPSAoeyBvbkNsb3NlLCBpc3NMb2dpbiB9KSA9PiB7XG4gIC8vIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlUmVnaXN0ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyL3JlZ2lzdHJhdGlvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcGFzc3dvcmQsIGVtYWlsIH0pLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YS5tZXNzYWdlKTtcblxuICAgICAgLy8g0JfQtNC10YHRjCDQstGLINC80L7QttC10YLQtSDQtNC+0LHQsNCy0LjRgtGMINC60L7QtCDQtNC70Y8g0L7QsdGA0LDQsdC+0YLQutC4INGD0YHQv9C10YjQvdC+0Lkg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCwg0L3QsNC/0YDQuNC80LXRgCwg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC90LAg0LTRgNGD0LPRg9GOINGB0YLRgNCw0L3QuNGG0YNcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcItCe0YjQuNCx0LrQsDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtMCB3LWZ1bGwgaC1mdWxsIGJnLWJsYWNrLzUwIHotMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB3LTEvNCBoLWZ1bGwgYmctd2hpdGUgcHQtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXgtOCBnYXAtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAge2lzTG9naW4gPyBcItCQ0LLRgtC+0YDQuNC30LDRhtC40Y9cIiA6IFwi0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1wifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhpc3NMb2dpbil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmxhY2sgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidy02IGgtNlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJvcmRlciByb3VuZGVkLW1kIGJvcmRlci1ibHVlLTkwMCBwLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMiB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAge2lzTG9naW4gPyAoXG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGJvcmRlci1iIGJvcmRlci1ibHVlLTkwMCBoLTEwXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQsNGI0LUg0LjQvNGPXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgYm9yZGVyLWIgYm9yZGVyLWJsdWUtOTAwIGgtMTBcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUgZW1haWxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGJvcmRlci1iIGJvcmRlci1ibHVlLTkwMCBoLTEwXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZWdpc3Rlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1ibHVlLTkwMCByb3VuZGVkLW1kIHctZnVsbCBweS0yIG1iLTFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNMb2dpbiA/IFwi0JLQvtC50YLQuFwiIDogXCLQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAge2lzTG9naW4gPyAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAg0J3QtdGCINCw0LrQutCw0YPQvdGC0LA/e1wiIFwifVxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS05MDBcIiBocmVmPXtcIi9cIn0+XG4gICAgICAgICAgICAgICAgICDQl9Cw0YDQtdCz0LXRgdGC0YDQuNGA0YPQudGC0LXRgdGMIVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgINCV0YHRgtGMINCw0LrQutCw0YPQvdGCP3tcIiBcIn1cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtOTAwXCIgaHJlZj17XCIvXCJ9PlxuICAgICAgICAgICAgICAgICAg0JLQvtC50LTQuNGC0LUhXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBdXRoIiwib25DbG9zZSIsImlzc0xvZ2luIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVSZWdpc3RlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZXJyb3IiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZS13aWR0aCIsInN0cm9rZSIsImNsYXNzIiwicGF0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwiZCIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwic2V0VXNlcm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Auth.jsx\n"));

/***/ })

});