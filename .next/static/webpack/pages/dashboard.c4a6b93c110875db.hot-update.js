"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/Components/dashboard/todo.tsx":
/*!*******************************************!*\
  !*** ./src/Components/dashboard/todo.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/dashboard/to_do.module.scss */ \"./src/styles/dashboard/to_do.module.scss\");\n/* harmony import */ var _styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _TodoComps_to_do_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoComps/to_do_form */ \"./src/Components/dashboard/TodoComps/to_do_form.tsx\");\n/* harmony import */ var _TodoComps_to_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoComps/to_do */ \"./src/Components/dashboard/TodoComps/to_do.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Todos = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            title: \"Read recommended books\"\n        },\n        {\n            title: \"write disstrack about jake paul\"\n        },\n        {\n            title: \"write love letter\"\n        },\n        {\n            title: \"block ex on social media\"\n        }, \n    ]), tasks = ref[0], setTasks = ref[1];\n    var addTask = function(title) {\n        var newTasks = [\n            {\n                title: title\n            }\n        ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(tasks));\n        setTasks(newTasks);\n    };\n    var removeTask = function(index) {\n        var newTasks = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(tasks);\n        newTasks.splice(index, 1);\n        setTasks(newTasks);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_5___default().todos_cont),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_5___default().todo_scroll),\n                children: tasks.map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodoComps_to_do__WEBPACK_IMPORTED_MODULE_3__.Todo, {\n                        task: task,\n                        index: index,\n                        removeTask: removeTask\n                    }, index + task.title, false, {\n                        fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_5___default().to_do_form),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodoComps_to_do_form__WEBPACK_IMPORTED_MODULE_2__.TodoForm, {\n                    addTask: addTask\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Todos, \"a9l/j23Hmq2iNrlcyeYL4M8V/dQ=\");\n_c = Todos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9kYXNoYm9hcmQvdG9kby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQXdDO0FBQ3NCO0FBQ1o7QUFFVDtBQUV6QyxJQUFNSyxLQUFLLEdBQUcsV0FBTTs7SUFDbEIsSUFBMEJKLEdBYXhCLEdBYndCQSwrQ0FBUSxDQUFDO1FBQ2pDO1lBQ0VLLEtBQUssRUFBRSx3QkFBd0I7U0FDaEM7UUFDRDtZQUNFQSxLQUFLLEVBQUUsaUNBQWlDO1NBQ3pDO1FBQ0Q7WUFDRUEsS0FBSyxFQUFFLG1CQUFtQjtTQUMzQjtRQUNEO1lBQ0VBLEtBQUssRUFBRSwwQkFBMEI7U0FDbEM7S0FDRixDQUFDLEVBYktDLEtBQUssR0FBY04sR0FheEIsR0FiVSxFQUFFTyxRQUFRLEdBQUlQLEdBYXhCLEdBYm9CO0lBZXRCLElBQU1RLE9BQU8sR0FBRyxTQUFDSCxLQUFhLEVBQUs7UUFDakMsSUFBTUksUUFBUSxHQUFvQjtZQUFDO2dCQUFFSixLQUFLLEVBQUVBLEtBQUs7YUFBRTtTQUFXLENBQTVCLE1BQTRCLENBQVQscUZBQUdDLEtBQUssQ0FBTEEsQ0FBTTtRQUM5REMsUUFBUSxDQUFDRSxRQUFRLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBTUMsVUFBVSxHQUFHLFNBQUNDLEtBQWEsRUFBSztRQUNwQyxJQUFNRixRQUFRLEdBQXFCLHFGQUFHSCxLQUFLLENBQUxBO1FBQ3RDRyxRQUFRLENBQUNHLE1BQU0sQ0FBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFCSixRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQkFDRSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUViLHVGQUFpQjs7MEJBQy9CLDhEQUFDWSxLQUFHO2dCQUFDQyxTQUFTLEVBQUViLHdGQUFrQjswQkFDL0JLLEtBQUssQ0FBQ1csR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRVAsS0FBSzt5Q0FDckIsOERBQUNSLGtEQUFJO3dCQUNIZSxJQUFJLEVBQUVBLElBQUk7d0JBQ1ZQLEtBQUssRUFBRUEsS0FBSzt3QkFDWkQsVUFBVSxFQUFFQSxVQUFVO3VCQUNqQkMsS0FBSyxHQUFHTyxJQUFJLENBQUNiLEtBQUs7Ozs7NkJBQ3ZCO2lCQUNILENBQUM7Ozs7O3FCQUNFOzBCQUNOLDhEQUFDUSxLQUFHO2dCQUFDQyxTQUFTLEVBQUViLHVGQUFpQjswQkFDL0IsNEVBQUNDLDJEQUFRO29CQUFDTSxPQUFPLEVBQUVBLE9BQU87Ozs7O3lCQUFJOzs7OztxQkFDMUI7Ozs7OzthQUNGLENBQ047QUFDSixDQUFDO0dBNUNLSixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUE2Q1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9kYXNoYm9hcmQvdG9kby50c3g/NTg2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2Rhc2hib2FyZC90b19kby5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBUb2RvRm9ybSB9IGZyb20gXCIuL1RvZG9Db21wcy90b19kb19mb3JtXCI7XHJcbmltcG9ydCB7IHRvX2RvX2NvbnRlbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdG9fZG9fdHlwZXNcIjtcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL1RvZG9Db21wcy90b19kb1wiO1xyXG5cclxuY29uc3QgVG9kb3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlJlYWQgcmVjb21tZW5kZWQgYm9va3NcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIndyaXRlIGRpc3N0cmFjayBhYm91dCBqYWtlIHBhdWxcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIndyaXRlIGxvdmUgbGV0dGVyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJibG9jayBleCBvbiBzb2NpYWwgbWVkaWFcIixcclxuICAgIH0sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGFkZFRhc2sgPSAodGl0bGU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFza3M6IHRvX2RvX2NvbnRlbnRbXSA9IFt7IHRpdGxlOiB0aXRsZSB9LCAuLi50YXNrc107XHJcbiAgICBzZXRUYXNrcyhuZXdUYXNrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVGFzayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYXNrczogdG9fZG9fY29udGVudFtdID0gWy4uLnRhc2tzXTtcclxuICAgIG5ld1Rhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRUYXNrcyhuZXdUYXNrcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb3NfY29udH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb19zY3JvbGx9PlxyXG4gICAgICAgIHt0YXNrcy5tYXAoKHRhc2ssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8VG9kb1xyXG4gICAgICAgICAgICB0YXNrPXt0YXNrfVxyXG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgIHJlbW92ZVRhc2s9e3JlbW92ZVRhc2t9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXggKyB0YXNrLnRpdGxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9fZG9fZm9ybX0+XHJcbiAgICAgICAgPFRvZG9Gb3JtIGFkZFRhc2s9e2FkZFRhc2t9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVG9kb3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiVG9kb0Zvcm0iLCJUb2RvIiwiVG9kb3MiLCJ0aXRsZSIsInRhc2tzIiwic2V0VGFza3MiLCJhZGRUYXNrIiwibmV3VGFza3MiLCJyZW1vdmVUYXNrIiwiaW5kZXgiLCJzcGxpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ0b2Rvc19jb250IiwidG9kb19zY3JvbGwiLCJtYXAiLCJ0YXNrIiwidG9fZG9fZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/dashboard/todo.tsx\n"));

/***/ })

});