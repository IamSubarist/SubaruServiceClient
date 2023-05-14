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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Auth = (param)=>{\n    let { onClose  } = param;\n    _s();\n    // const [username, setUsername] = useState(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleRegister = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:5000/api/user/registration\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    password,\n                    email\n                })\n            });\n            const data = await response.json();\n            console.log(data.message);\n            setIsLogin(false);\n            console.log(isLogin);\n        // Здесь вы можете добавить код для обработки успешной регистрации, например, перенаправление на другую страницу\n        } catch (error) {\n            console.error(\"Ошибка:\", error);\n        }\n    };\n    const handleLogin = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:5000/api/user/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            const data = await response.json();\n            if (response.ok) {\n                const token = data.token;\n                // Сохраните токен аутентификации в хранилище (localStorage, cookie и т. д.)\n                localStorage.setItem(\"authToken\", token);\n            // Здесь вы можете добавить код для обработки успешной аутентификации, например, перенаправление на другую страницу\n            } else {\n                console.error(\"Ошибка аутентификации:\", data.message);\n            }\n        } catch (error) {\n            console.error(\"Ошибка:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: isLogin ? \"absolute left-0 top-0 w-full h-full bg-black/50 z-10\" : \"hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"absolute right-0 w-1/4 h-full bg-white pt-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col mx-8 gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-3xl font-bold\",\n                                children: isLogin ? \"Авторизация\" : \"Регистрация\"\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: onClose,\n                                className: \"border border-black rounded-md\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    strokeWidth: \"1.5\",\n                                    stroke: \"currentColor\",\n                                    className: \"w-6 h-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        d: \"M6 18L18 6M6 6l12 12\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col border rounded-md border-blue-900 p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-2 w-full\",\n                            children: [\n                                isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 17\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>setUsername(e.target.value),\n                                    className: \"outline-none border-b border-blue-900 h-10\",\n                                    placeholder: \"Ваше имя\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    className: \"outline-none border-b border-blue-900 h-10\",\n                                    placeholder: \"Введите email\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    className: \"outline-none border-b border-blue-900 h-10\",\n                                    placeholder: \"Введите пароль\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: isLogin ? handleLogin : handleRegister,\n                                className: \"text-white bg-blue-900 rounded-md w-full py-2 mb-1\",\n                                children: isLogin ? \"Войти\" : \"Зарегистрироваться\"\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, undefined),\n                            isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Нет аккаунта?\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-blue-900\",\n                                        href: \"/\",\n                                        children: \"Зарегестрируйтесь!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 126,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Есть аккаунт?\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-blue-900\",\n                                        href: \"/\",\n                                        children: \"Войдите!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                                lineNumber: 133,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Auth.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Auth, \"j26WF0VAUeYm/An1/bexuWawJIE=\");\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxLQUFLO29DQUMzQ25CLFdBQVU7b0NBQ1ZvQixhQUFZO29DQUNaQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJWCw4REFBQ3RCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQ0NDLFNBQVN6QixVQUFVZ0IsY0FBY2QsY0FBYztnQ0FDL0NvQixXQUFVOzBDQUVUdEIsVUFBVSxVQUFVLG9CQUFvQjs7Ozs7OzRCQUUxQ0Esd0JBQ0MsOERBQUNxQjs7b0NBQUk7b0NBQ1c7a0RBQ2QsOERBQUN1Qjt3Q0FBRXRCLFdBQVU7d0NBQWdCdUIsTUFBTTtrREFBSzs7Ozs7Ozs7Ozs7MERBSzFDLDhEQUFDeEI7O29DQUFJO29DQUNXO2tEQUNkLDhEQUFDdUI7d0NBQUV0QixXQUFVO3dDQUFnQnVCLE1BQU07a0RBQUs7Ozs7Ozs7Ozs7O3lDQUkzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQTlJTW5EO0tBQUFBO0FBZ0pOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0F1dGguanN4Pzk5ODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEF1dGggPSAoeyBvbkNsb3NlIH0pID0+IHtcbiAgLy8gY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVJlZ2lzdGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci9yZWdpc3RyYXRpb25cIixcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBhc3N3b3JkLCBlbWFpbCB9KSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEubWVzc2FnZSk7XG4gICAgICBzZXRJc0xvZ2luKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKGlzTG9naW4pO1xuICAgICAgLy8g0JfQtNC10YHRjCDQstGLINC80L7QttC10YLQtSDQtNC+0LHQsNCy0LjRgtGMINC60L7QtCDQtNC70Y8g0L7QsdGA0LDQsdC+0YLQutC4INGD0YHQv9C10YjQvdC+0Lkg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCwg0L3QsNC/0YDQuNC80LXRgCwg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC90LAg0LTRgNGD0LPRg9GOINGB0YLRgNCw0L3QuNGG0YNcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcItCe0YjQuNCx0LrQsDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci9sb2dpblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gZGF0YS50b2tlbjtcbiAgICAgICAgLy8g0KHQvtGF0YDQsNC90LjRgtC1INGC0L7QutC10L0g0LDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjQuCDQsiDRhdGA0LDQvdC40LvQuNGJ0LUgKGxvY2FsU3RvcmFnZSwgY29va2llINC4INGCLiDQtC4pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFRva2VuXCIsIHRva2VuKTtcblxuICAgICAgICAvLyDQl9C00LXRgdGMINCy0Ysg0LzQvtC20LXRgtC1INC00L7QsdCw0LLQuNGC0Ywg0LrQvtC0INC00LvRjyDQvtCx0YDQsNCx0L7RgtC60Lgg0YPRgdC/0LXRiNC90L7QuSDQsNGD0YLQtdC90YLQuNGE0LjQutCw0YbQuNC4LCDQvdCw0L/RgNC40LzQtdGALCDQv9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40LUg0L3QsCDQtNGA0YPQs9GD0Y4g0YHRgtGA0LDQvdC40YbRg1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcItCe0YjQuNCx0LrQsCDQsNGD0YLQtdC90YLQuNGE0LjQutCw0YbQuNC4OlwiLCBkYXRhLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi0J7RiNC40LHQutCwOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgaXNMb2dpblxuICAgICAgICAgID8gXCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgdy1mdWxsIGgtZnVsbCBiZy1ibGFjay81MCB6LTEwXCJcbiAgICAgICAgICA6IFwiaGlkZGVuXCJcbiAgICAgIH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdy0xLzQgaC1mdWxsIGJnLXdoaXRlIHB0LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG14LTggZ2FwLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIHtpc0xvZ2luID8gXCLQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPXCIgOiBcItCg0LXQs9C40YHRgtGA0LDRhtC40Y9cIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFjayByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJvcmRlciByb3VuZGVkLW1kIGJvcmRlci1ibHVlLTkwMCBwLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMiB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAge2lzTG9naW4gPyAoXG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGJvcmRlci1iIGJvcmRlci1ibHVlLTkwMCBoLTEwXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQsNGI0LUg0LjQvNGPXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgYm9yZGVyLWIgYm9yZGVyLWJsdWUtOTAwIGgtMTBcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUgZW1haWxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGJvcmRlci1iIGJvcmRlci1ibHVlLTkwMCBoLTEwXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtpc0xvZ2luID8gaGFuZGxlTG9naW4gOiBoYW5kbGVSZWdpc3Rlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1ibHVlLTkwMCByb3VuZGVkLW1kIHctZnVsbCBweS0yIG1iLTFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNMb2dpbiA/IFwi0JLQvtC50YLQuFwiIDogXCLQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAge2lzTG9naW4gPyAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAg0J3QtdGCINCw0LrQutCw0YPQvdGC0LA/e1wiIFwifVxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS05MDBcIiBocmVmPXtcIi9cIn0+XG4gICAgICAgICAgICAgICAgICDQl9Cw0YDQtdCz0LXRgdGC0YDQuNGA0YPQudGC0LXRgdGMIVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgINCV0YHRgtGMINCw0LrQutCw0YPQvdGCP3tcIiBcIn1cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtOTAwXCIgaHJlZj17XCIvXCJ9PlxuICAgICAgICAgICAgICAgICAg0JLQvtC50LTQuNGC0LUhXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBdXRoIiwib25DbG9zZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlbWFpbCIsInNldEVtYWlsIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJoYW5kbGVSZWdpc3RlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZXJyb3IiLCJoYW5kbGVMb2dpbiIsIm9rIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwic2V0VXNlcm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Auth.jsx\n"));

/***/ })

});