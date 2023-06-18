"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/create_review";
exports.ids = ["pages/create_review"];
exports.modules = {

/***/ "./pages/create_review.jsx":
/*!*********************************!*\
  !*** ./pages/create_review.jsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/components/Modal */ \"./src/components/Modal.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/constants */ \"./src/constants/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);\naxios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst createReview = ()=>{\n    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    const [description, setDescription] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isTransitioned, setIsTransitioned] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [remainingTime, setRemainingTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(3);\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let timer;\n        if (showModal && remainingTime > 0) {\n            timer = setInterval(()=>{\n                setRemainingTime((prevTime)=>prevTime - 1);\n            }, 1000);\n        }\n        return ()=>{\n            clearInterval(timer);\n        };\n    }, [\n        showModal,\n        remainingTime\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const errors = {};\n        if (name.trim() === \"\") {\n            errors.name = \"Это обязательное поле\";\n        }\n        if (description.trim() === \"\") {\n            errors.description = \"Это обязательное поле\";\n        }\n        setErrors(errors);\n        if (Object.keys(errors).length === 0) {\n            try {\n                await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(`${_src_constants__WEBPACK_IMPORTED_MODULE_4__.API_BASE_URL}${_src_constants__WEBPACK_IMPORTED_MODULE_4__.REVIEWS_URL}`, {\n                    name,\n                    description\n                });\n                // Категория успешно добавлена\n                // Можете выполнить какие-то дополнительные действия, например очистить форму\n                setName(\"\");\n                setDescription(\"\");\n                setTimeout(()=>{\n                    setIsTransitioned(true);\n                }, 100);\n                setTimeout(()=>{\n                    setShowModal(false);\n                }, 3000);\n                setShowModal(true);\n            } catch (error) {\n                // Обработка ошибки при добавлении категории\n                console.log(error);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"shadow-box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"main-title\",\n                children: \"Создание отзыва\"\n            }, void 0, false, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/create_review.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Ваше имя\",\n                        onChange: (e)=>setName(e.target.value),\n                        value: name,\n                        type: \"text\",\n                        className: `${errors.name && \"border-red-500\"} input`\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/create_review.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    errors.name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 text-sm mb-2\",\n                        children: errors.name\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/create_review.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        placeholder: \"Ваш отзыв\",\n                        onChange: (e)=>setDescription(e.target.value),\n                        value: description,\n                        type: \"text\",\n                        className: `${errors.description && \"border-red-500\"} input`\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/create_review.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    errors.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 text-sm mb-2\",\n                        children: errors.description\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/create_review.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"main-btn translate-all duration-500\",\n                        children: \"Оставить отзыв\"\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/create_review.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/create_review.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                isTransitioned: isTransitioned,\n                remainingTime: remainingTime,\n                setShowModal: setShowModal,\n                title: [\n                    \"Успешно!\",\n                    \"Благодарим вас за отзыв\"\n                ]\n            }, void 0, false, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/create_review.jsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/pages/create_review.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReview);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGVfcmV2aWV3LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDUTtBQUN6QjtBQUNrQztBQUU1RCxNQUFNTyxlQUFlLElBQU07SUFDekIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLHFEQUFjLENBQUM7SUFDdkMsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdWLHFEQUFjLENBQUM7SUFDckQsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFELE1BQU0sQ0FBQ2MsZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2dCLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDLENBQUM7SUFFdENDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJaUI7UUFDSixJQUFJUixhQUFhSSxnQkFBZ0IsR0FBRztZQUNsQ0ksUUFBUUMsWUFBWSxJQUFNO2dCQUN4QkosaUJBQWlCLENBQUNLLFdBQWFBLFdBQVc7WUFDNUMsR0FBRztRQUNMLENBQUM7UUFDRCxPQUFPLElBQU07WUFDWEMsY0FBY0g7UUFDaEI7SUFDRixHQUFHO1FBQUNSO1FBQVdJO0tBQWM7SUFFN0IsTUFBTVEsZUFBZSxPQUFPQyxJQUFNO1FBQ2hDQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1SLFNBQVMsQ0FBQztRQUNoQixJQUFJVixLQUFLbUIsSUFBSSxPQUFPLElBQUk7WUFDdEJULE9BQU9WLElBQUksR0FBRztRQUNoQixDQUFDO1FBQ0QsSUFBSUUsWUFBWWlCLElBQUksT0FBTyxJQUFJO1lBQzdCVCxPQUFPUixXQUFXLEdBQUc7UUFDdkIsQ0FBQztRQUNEUyxVQUFVRDtRQUNWLElBQUlVLE9BQU9DLElBQUksQ0FBQ1gsUUFBUVksTUFBTSxLQUFLLEdBQUc7WUFDcEMsSUFBSTtnQkFDRixNQUFNMUIsa0RBQVUsQ0FBQyxDQUFDLEVBQUVDLHdEQUFZQSxDQUFDLEVBQUVDLHVEQUFXQSxDQUFDLENBQUMsRUFBRTtvQkFDaERFO29CQUNBRTtnQkFDRjtnQkFDQSw4QkFBOEI7Z0JBQzlCLDZFQUE2RTtnQkFDN0VELFFBQVE7Z0JBQ1JFLGVBQWU7Z0JBQ2ZxQixXQUFXLElBQU07b0JBQ2ZqQixrQkFBa0IsSUFBSTtnQkFDeEIsR0FBRztnQkFFSGlCLFdBQVcsSUFBTTtvQkFDZm5CLGFBQWEsS0FBSztnQkFDcEIsR0FBRztnQkFDSEEsYUFBYSxJQUFJO1lBQ25CLEVBQUUsT0FBT29CLE9BQU87Z0JBQ2QsNENBQTRDO2dCQUM1Q0MsUUFBUUMsR0FBRyxDQUFDRjtZQUNkO1FBQ0YsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBYTs7Ozs7OzBCQUMzQiw4REFBQ0U7Z0JBQUtGLFdBQVU7Z0JBQWdCRyxVQUFVaEI7O2tDQUN4Qyw4REFBQ2lCO3dCQUNDQyxhQUFZO3dCQUNaQyxVQUFVLENBQUNsQixJQUFNaEIsUUFBUWdCLEVBQUVtQixNQUFNLENBQUNDLEtBQUs7d0JBQ3ZDQSxPQUFPckM7d0JBQ1BzQyxNQUFLO3dCQUNMVCxXQUFXLENBQUMsRUFBRW5CLE9BQU9WLElBQUksSUFBSSxpQkFBaUIsTUFBTSxDQUFDOzs7Ozs7b0JBRXREVSxPQUFPVixJQUFJLGtCQUNWLDhEQUFDdUM7d0JBQUVWLFdBQVU7a0NBQTZCbkIsT0FBT1YsSUFBSTs7Ozs7O2tDQUV2RCw4REFBQ3dDO3dCQUNDTixhQUFZO3dCQUNaQyxVQUFVLENBQUNsQixJQUFNZCxlQUFlYyxFQUFFbUIsTUFBTSxDQUFDQyxLQUFLO3dCQUM5Q0EsT0FBT25DO3dCQUNQb0MsTUFBSzt3QkFDTFQsV0FBVyxDQUFDLEVBQUVuQixPQUFPUixXQUFXLElBQUksaUJBQWlCLE1BQU0sQ0FBQzs7Ozs7O29CQUU3RFEsT0FBT1IsV0FBVyxrQkFDakIsOERBQUNxQzt3QkFBRVYsV0FBVTtrQ0FBNkJuQixPQUFPUixXQUFXOzs7Ozs7a0NBRTlELDhEQUFDdUM7d0JBQU9ILE1BQUs7d0JBQVNULFdBQVU7a0NBQXNDOzs7Ozs7Ozs7Ozs7WUFJdkV6QiwyQkFDQyw4REFBQ1osNkRBQUtBO2dCQUNKYyxnQkFBZ0JBO2dCQUNoQkUsZUFBZUE7Z0JBQ2ZILGNBQWNBO2dCQUNkcUMsT0FBTztvQkFBQztvQkFBWTtpQkFBMEI7Ozs7Ozs7Ozs7OztBQUt4RDtBQUVBLGlFQUFlM0MsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LW5ldHhqcy8uL3BhZ2VzL2NyZWF0ZV9yZXZpZXcuanN4PzFlMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gXCJAL3NyYy9jb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQVBJX0JBU0VfVVJMLCBSRVZJRVdTX1VSTCB9IGZyb20gXCJAL3NyYy9jb25zdGFudHNcIjtcblxuY29uc3QgY3JlYXRlUmV2aWV3ID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzVHJhbnNpdGlvbmVkLCBzZXRJc1RyYW5zaXRpb25lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZW1haW5pbmdUaW1lLCBzZXRSZW1haW5pbmdUaW1lXSA9IHVzZVN0YXRlKDMpO1xuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVyO1xuICAgIGlmIChzaG93TW9kYWwgJiYgcmVtYWluaW5nVGltZSA+IDApIHtcbiAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRSZW1haW5pbmdUaW1lKChwcmV2VGltZSkgPT4gcHJldlRpbWUgLSAxKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgfTtcbiAgfSwgW3Nob3dNb2RhbCwgcmVtYWluaW5nVGltZV0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZXJyb3JzID0ge307XG4gICAgaWYgKG5hbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBlcnJvcnMubmFtZSA9IFwi0K3RgtC+INC+0LHRj9C30LDRgtC10LvRjNC90L7QtSDQv9C+0LvQtVwiO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb24udHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBlcnJvcnMuZGVzY3JpcHRpb24gPSBcItCt0YLQviDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+0LUg0L/QvtC70LVcIjtcbiAgICB9XG4gICAgc2V0RXJyb3JzKGVycm9ycyk7XG4gICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0FQSV9CQVNFX1VSTH0ke1JFVklFV1NfVVJMfWAsIHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8g0JrQsNGC0LXQs9C+0YDQuNGPINGD0YHQv9C10YjQvdC+INC00L7QsdCw0LLQu9C10L3QsFxuICAgICAgICAvLyDQnNC+0LbQtdGC0LUg0LLRi9C/0L7Qu9C90LjRgtGMINC60LDQutC40LUt0YLQviDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C1INC00LXQudGB0YLQstC40Y8sINC90LDQv9GA0LjQvNC10YAg0L7Rh9C40YHRgtC40YLRjCDRhNC+0YDQvNGDXG4gICAgICAgIHNldE5hbWUoXCJcIik7XG4gICAgICAgIHNldERlc2NyaXB0aW9uKFwiXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRJc1RyYW5zaXRpb25lZCh0cnVlKTtcbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8g0J7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0LrQuCDQv9GA0Lgg0LTQvtCx0LDQstC70LXQvdC40Lgg0LrQsNGC0LXQs9C+0YDQuNC4XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1ib3hcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+0KHQvtC30LTQsNC90LjQtSDQvtGC0LfRi9Cy0LA8L2gxPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LDRiNC1INC40LzRj1wiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtlcnJvcnMubmFtZSAmJiBcImJvcmRlci1yZWQtNTAwXCJ9IGlucHV0YH1cbiAgICAgICAgLz5cbiAgICAgICAge2Vycm9ycy5uYW1lICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbSBtYi0yXCI+e2Vycm9ycy5uYW1lfTwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCw0Ygg0L7RgtC30YvQslwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2Vycm9ycy5kZXNjcmlwdGlvbiAmJiBcImJvcmRlci1yZWQtNTAwXCJ9IGlucHV0YH1cbiAgICAgICAgLz5cbiAgICAgICAge2Vycm9ycy5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gbWItMlwiPntlcnJvcnMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICApfVxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJtYWluLWJ0biB0cmFuc2xhdGUtYWxsIGR1cmF0aW9uLTUwMFwiPlxuICAgICAgICAgINCe0YHRgtCw0LLQuNGC0Ywg0L7RgtC30YvQslxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHtzaG93TW9kYWwgJiYgKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBpc1RyYW5zaXRpb25lZD17aXNUcmFuc2l0aW9uZWR9XG4gICAgICAgICAgcmVtYWluaW5nVGltZT17cmVtYWluaW5nVGltZX1cbiAgICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgICAgICB0aXRsZT17W1wi0KPRgdC/0LXRiNC90L4hXCIsIFwi0JHQu9Cw0LPQvtC00LDRgNC40Lwg0LLQsNGBINC30LAg0L7RgtC30YvQslwiXX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZXZpZXc7XG4iXSwibmFtZXMiOlsiTW9kYWwiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJBUElfQkFTRV9VUkwiLCJSRVZJRVdTX1VSTCIsImNyZWF0ZVJldmlldyIsIm5hbWUiLCJzZXROYW1lIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImlzVHJhbnNpdGlvbmVkIiwic2V0SXNUcmFuc2l0aW9uZWQiLCJyZW1haW5pbmdUaW1lIiwic2V0UmVtYWluaW5nVGltZSIsImVycm9ycyIsInNldEVycm9ycyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInBvc3QiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwIiwidGV4dGFyZWEiLCJidXR0b24iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create_review.jsx\n");

/***/ }),

/***/ "./src/components/Modal.jsx":
/*!**********************************!*\
  !*** ./src/components/Modal.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Modal = ({ isTransitioned , remainingTime , setShowModal , title  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `fixed inset-0 bg-black transition-opacity duration-300 ${isTransitioned ? \"visible opacity-30\" : \"invisible opacity-20\"}`\n            }, void 0, false, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Modal.jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `fixed mx-auto sm:right-1/3 top-20 w- sm:w-1/3 p-2 border-2 border-blue-900 rounded-md bg-white text-center transition-transform duration-300 ${isTransitioned ? \"scale-1\" : \"scale-0\"}`,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-bold mb-4\",\n                        children: title[0]\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Modal.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: title[1]\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Modal.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-4 px-4 py-2 bg-blue-900 text-white rounded transition-all duration-500 ease-in-out hover:bg-blue-700\",\n                        onClick: ()=>setShowModal(false),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Закрыть (\",\n                                remainingTime,\n                                \"s)\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Modal.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Modal.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/roman/Рабочий стол/projects/diplom/client/src/components/Modal.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLFFBQVEsQ0FBQyxFQUFFQyxlQUFjLEVBQUVDLGNBQWEsRUFBRUMsYUFBWSxFQUFFQyxNQUFLLEVBQUUsR0FBSztJQUN4RSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUNDQyxXQUFXLENBQUMsdURBQXVELEVBQ2pFTCxpQkFBaUIsdUJBQXVCLHNCQUFzQixDQUMvRCxDQUFDOzs7Ozs7MEJBRUosOERBQUNJO2dCQUNDQyxXQUFXLENBQUMsNklBQTZJLEVBQ3ZKTCxpQkFBaUIsWUFBWSxTQUFTLENBQ3ZDLENBQUM7O2tDQUVGLDhEQUFDTTt3QkFBR0QsV0FBVTtrQ0FBMkJGLEtBQUssQ0FBQyxFQUFFOzs7Ozs7a0NBQ2pELDhEQUFDSTtrQ0FBR0osS0FBSyxDQUFDLEVBQUU7Ozs7OztrQ0FDWiw4REFBQ0s7d0JBQ0NILFdBQVU7d0JBQ1ZJLFNBQVMsSUFBTVAsYUFBYSxLQUFLO2tDQUVqQyw0RUFBQ0s7O2dDQUFFO2dDQUFVTjtnQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LW5ldHhqcy8uL3NyYy9jb21wb25lbnRzL01vZGFsLmpzeD9lZDhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTW9kYWwgPSAoeyBpc1RyYW5zaXRpb25lZCwgcmVtYWluaW5nVGltZSwgc2V0U2hvd01vZGFsLCB0aXRsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgaW5zZXQtMCBiZy1ibGFjayB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgaXNUcmFuc2l0aW9uZWQgPyBcInZpc2libGUgb3BhY2l0eS0zMFwiIDogXCJpbnZpc2libGUgb3BhY2l0eS0yMFwiXG4gICAgICAgIH1gfVxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCBteC1hdXRvIHNtOnJpZ2h0LTEvMyB0b3AtMjAgdy0gc206dy0xLzMgcC0yIGJvcmRlci0yIGJvcmRlci1ibHVlLTkwMCByb3VuZGVkLW1kIGJnLXdoaXRlIHRleHQtY2VudGVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgIGlzVHJhbnNpdGlvbmVkID8gXCJzY2FsZS0xXCIgOiBcInNjYWxlLTBcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+e3RpdGxlWzBdfTwvaDI+XG4gICAgICAgIDxwPnt0aXRsZVsxXX08L3A+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHB4LTQgcHktMiBiZy1ibHVlLTkwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGhvdmVyOmJnLWJsdWUtNzAwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgPHA+0JfQsNC60YDRi9GC0YwgKHtyZW1haW5pbmdUaW1lfXMpPC9wPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsImlzVHJhbnNpdGlvbmVkIiwicmVtYWluaW5nVGltZSIsInNldFNob3dNb2RhbCIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Modal.jsx\n");

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_BASE_URL\": () => (/* binding */ API_BASE_URL),\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"BRANDS_URL\": () => (/* binding */ BRANDS_URL),\n/* harmony export */   \"CARTS_URL\": () => (/* binding */ CARTS_URL),\n/* harmony export */   \"CATEGORIES_URL\": () => (/* binding */ CATEGORIES_URL),\n/* harmony export */   \"DEVICES_URL\": () => (/* binding */ DEVICES_URL),\n/* harmony export */   \"HEADER_NAVBAR\": () => (/* binding */ HEADER_NAVBAR),\n/* harmony export */   \"MAILS_URL\": () => (/* binding */ MAILS_URL),\n/* harmony export */   \"NEWS_URL\": () => (/* binding */ NEWS_URL),\n/* harmony export */   \"ORDERS_URL\": () => (/* binding */ ORDERS_URL),\n/* harmony export */   \"REVIEWS_URL\": () => (/* binding */ REVIEWS_URL),\n/* harmony export */   \"USERS_URL\": () => (/* binding */ USERS_URL)\n/* harmony export */ });\nconst BASE_URL = \"http://localhost:5000\";\nconst HEADER_NAVBAR = [\n    {\n        name: \"Главная\",\n        href: \"/\"\n    },\n    {\n        name: \"Новости\",\n        href: \"/news\"\n    },\n    {\n        name: \"О нас\",\n        href: \"/about\"\n    },\n    {\n        name: \"Контакты\",\n        href: \"/contacts\"\n    },\n    {\n        name: \"Консультация/Запись\",\n        href: \"/consultation\"\n    }\n];\nconst API_BASE_URL = \"http://80.78.241.172:5000/\";\nconst CATEGORIES_URL = \"api/type/\";\nconst BRANDS_URL = \"api/brand/\";\nconst DEVICES_URL = \"api/device/\";\nconst NEWS_URL = \"api/news/\";\nconst ORDERS_URL = \"api/order/\";\nconst REVIEWS_URL = \"api/review/\";\nconst MAILS_URL = \"api/mail/\";\nconst CARTS_URL = \"api/cart/\";\nconst USERS_URL = \"api/user/\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxXQUFXQyx1QkFBb0MsQ0FBQztBQUV0RCxNQUFNRyxnQkFBZ0I7SUFDM0I7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNELENBQUM7QUFFSyxNQUFNQyxlQUFlLDZCQUE2QjtBQUVsRCxNQUFNQyxpQkFBaUIsWUFBWTtBQUNuQyxNQUFNQyxhQUFhLGFBQWE7QUFDaEMsTUFBTUMsY0FBYyxjQUFjO0FBQ2xDLE1BQU1DLFdBQVcsWUFBWTtBQUM3QixNQUFNQyxhQUFhLGFBQWE7QUFDaEMsTUFBTUMsY0FBYyxjQUFjO0FBQ2xDLE1BQU1DLFlBQVksWUFBWTtBQUM5QixNQUFNQyxZQUFZLFlBQVk7QUFDOUIsTUFBTUMsWUFBWSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtbmV0eGpzLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/MWMwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkw7XG5cbmV4cG9ydCBjb25zdCBIRUFERVJfTkFWQkFSID0gW1xuICB7XG4gICAgbmFtZTogXCLQk9C70LDQstC90LDRj1wiLFxuICAgIGhyZWY6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLQndC+0LLQvtGB0YLQuFwiLFxuICAgIGhyZWY6IFwiL25ld3NcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi0J4g0L3QsNGBXCIsXG4gICAgaHJlZjogXCIvYWJvdXRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi0JrQvtC90YLQsNC60YLRi1wiLFxuICAgIGhyZWY6IFwiL2NvbnRhY3RzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcItCa0L7QvdGB0YPQu9GM0YLQsNGG0LjRjy/Ql9Cw0L/QuNGB0YxcIixcbiAgICBocmVmOiBcIi9jb25zdWx0YXRpb25cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBBUElfQkFTRV9VUkwgPSBcImh0dHA6Ly84MC43OC4yNDEuMTcyOjUwMDAvXCI7XG5cbmV4cG9ydCBjb25zdCBDQVRFR09SSUVTX1VSTCA9IFwiYXBpL3R5cGUvXCI7XG5leHBvcnQgY29uc3QgQlJBTkRTX1VSTCA9IFwiYXBpL2JyYW5kL1wiO1xuZXhwb3J0IGNvbnN0IERFVklDRVNfVVJMID0gXCJhcGkvZGV2aWNlL1wiO1xuZXhwb3J0IGNvbnN0IE5FV1NfVVJMID0gXCJhcGkvbmV3cy9cIjtcbmV4cG9ydCBjb25zdCBPUkRFUlNfVVJMID0gXCJhcGkvb3JkZXIvXCI7XG5leHBvcnQgY29uc3QgUkVWSUVXU19VUkwgPSBcImFwaS9yZXZpZXcvXCI7XG5leHBvcnQgY29uc3QgTUFJTFNfVVJMID0gXCJhcGkvbWFpbC9cIjtcbmV4cG9ydCBjb25zdCBDQVJUU19VUkwgPSBcImFwaS9jYXJ0L1wiO1xuZXhwb3J0IGNvbnN0IFVTRVJTX1VSTCA9IFwiYXBpL3VzZXIvXCI7XG4iXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwiSEVBREVSX05BVkJBUiIsIm5hbWUiLCJocmVmIiwiQVBJX0JBU0VfVVJMIiwiQ0FURUdPUklFU19VUkwiLCJCUkFORFNfVVJMIiwiREVWSUNFU19VUkwiLCJORVdTX1VSTCIsIk9SREVSU19VUkwiLCJSRVZJRVdTX1VSTCIsIk1BSUxTX1VSTCIsIkNBUlRTX1VSTCIsIlVTRVJTX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants/constants.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _constants__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _constants__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtbmV0eGpzLy4vc3JjL2NvbnN0YW50cy9pbmRleC5qcz8xOGI3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2NvbnN0YW50c1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constants/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/create_review.jsx"));
module.exports = __webpack_exports__;

})();