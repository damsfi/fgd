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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/dashboard/to_do.module.scss */ \"./src/styles/dashboard/to_do.module.scss\");\n/* harmony import */ var _styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _TodoComps_to_do_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoComps/to_do_form */ \"./src/Components/dashboard/TodoComps/to_do_form.tsx\");\n/* harmony import */ var _TodoComps_to_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoComps/to_do */ \"./src/Components/dashboard/TodoComps/to_do.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Todos = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            title: \"Read recommended books\"\n        },\n        {\n            title: \"write disstrack about jake paul\"\n        },\n        {\n            title: \"write love letter\"\n        },\n        {\n            title: \"block ex\"\n        },\n        {\n            title: \"Watch mak's workshop\"\n        },\n        {\n            title: \"Watch mak's workshop\"\n        }, \n    ]), tasks = ref[0], setTasks = ref[1];\n    var addTask = function(title) {\n        var newTasks = [\n            {\n                title: title\n            }\n        ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(tasks));\n        setTasks(newTasks);\n    };\n    var removeTask = function(index) {\n        var newTasks = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(tasks);\n        newTasks.splice(index, 1);\n        setTasks(newTasks);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_5___default().todos_cont),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_5___default().todo_scroll),\n                children: tasks.map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodoComps_to_do__WEBPACK_IMPORTED_MODULE_3__.Todo, {\n                        task: task,\n                        index: index,\n                        removeTask: removeTask\n                    }, index + task.title, false, {\n                        fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_5___default().to_do_form),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodoComps_to_do_form__WEBPACK_IMPORTED_MODULE_2__.TodoForm, {\n                    addTask: addTask\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_s(Todos, \"Dovq0vA7lXa3p9c8/3IopvzO5yQ=\");\n_c = Todos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9kYXNoYm9hcmQvdG9kby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQXdDO0FBQ3NCO0FBQ1o7QUFFVDtBQUV6QyxJQUFNSyxLQUFLLEdBQUcsV0FBTTs7SUFDbEIsSUFBMEJKLEdBbUJ4QixHQW5Cd0JBLCtDQUFRLENBQUM7UUFDakM7WUFDRUssS0FBSyxFQUFFLHdCQUF3QjtTQUNoQztRQUNEO1lBQ0VBLEtBQUssRUFBRSxpQ0FBaUM7U0FDekM7UUFDRDtZQUNFQSxLQUFLLEVBQUUsbUJBQW1CO1NBQzNCO1FBQ0Q7WUFDRUEsS0FBSyxFQUFFLFVBQVU7U0FDbEI7UUFDRDtZQUNJQSxLQUFLLEVBQUUsc0JBQXNCO1NBQzlCO1FBQ0Q7WUFDRUEsS0FBSyxFQUFFLHNCQUFzQjtTQUM5QjtLQUNKLENBQUMsRUFuQktDLEtBQUssR0FBY04sR0FtQnhCLEdBbkJVLEVBQUVPLFFBQVEsR0FBSVAsR0FtQnhCLEdBbkJvQjtJQXFCdEIsSUFBTVEsT0FBTyxHQUFHLFNBQUNILEtBQWEsRUFBSztRQUNqQyxJQUFNSSxRQUFRLEdBQW9CO1lBQUM7Z0JBQUVKLEtBQUssRUFBRUEsS0FBSzthQUFFO1NBQVcsQ0FBNUIsTUFBNEIsQ0FBVCxxRkFBR0MsS0FBSyxDQUFMQSxDQUFNO1FBQzlEQyxRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFNQyxVQUFVLEdBQUcsU0FBQ0MsS0FBYSxFQUFLO1FBQ3BDLElBQU1GLFFBQVEsR0FBcUIscUZBQUdILEtBQUssQ0FBTEE7UUFDdENHLFFBQVEsQ0FBQ0csTUFBTSxDQUFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUJKLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELHFCQUNFLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBRWIsdUZBQWlCOzswQkFDL0IsOERBQUNZLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWIsd0ZBQWtCOzBCQUMvQkssS0FBSyxDQUFDVyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFUCxLQUFLO3lDQUNyQiw4REFBQ1Isa0RBQUk7d0JBQ0hlLElBQUksRUFBRUEsSUFBSTt3QkFDVlAsS0FBSyxFQUFFQSxLQUFLO3dCQUNaRCxVQUFVLEVBQUVBLFVBQVU7dUJBQ2pCQyxLQUFLLEdBQUdPLElBQUksQ0FBQ2IsS0FBSzs7Ozs2QkFDdkI7aUJBQ0gsQ0FBQzs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNRLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWIsdUZBQWlCOzBCQUMvQiw0RUFBQ0MsMkRBQVE7b0JBQUNNLE9BQU8sRUFBRUEsT0FBTzs7Ozs7eUJBQUk7Ozs7O3FCQUMxQjs7Ozs7O2FBQ0YsQ0FDTjtBQUNKLENBQUM7R0FsREtKLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQW1EWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL2Rhc2hib2FyZC90b2RvLnRzeD81ODZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZGFzaGJvYXJkL3RvX2RvLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IFRvZG9Gb3JtIH0gZnJvbSBcIi4vVG9kb0NvbXBzL3RvX2RvX2Zvcm1cIjtcclxuaW1wb3J0IHsgdG9fZG9fY29udGVudCB9IGZyb20gXCIuLi8uLi90eXBlcy90b19kb190eXBlc1wiO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vVG9kb0NvbXBzL3RvX2RvXCI7XHJcblxyXG5jb25zdCBUb2RvcyA9ICgpID0+IHtcclxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUmVhZCByZWNvbW1lbmRlZCBib29rc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwid3JpdGUgZGlzc3RyYWNrIGFib3V0IGpha2UgcGF1bFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwid3JpdGUgbG92ZSBsZXR0ZXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcImJsb2NrIGV4XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIldhdGNoIG1haydzIHdvcmtzaG9wXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJXYXRjaCBtYWsncyB3b3Jrc2hvcFwiLFxyXG4gICAgICB9LFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBhZGRUYXNrID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IG5ld1Rhc2tzOiB0b19kb19jb250ZW50W10gPSBbeyB0aXRsZTogdGl0bGUgfSwgLi4udGFza3NdO1xyXG4gICAgc2V0VGFza3MobmV3VGFza3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFza3M6IHRvX2RvX2NvbnRlbnRbXSA9IFsuLi50YXNrc107XHJcbiAgICBuZXdUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0VGFza3MobmV3VGFza3MpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZG9zX2NvbnR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZG9fc2Nyb2xsfT5cclxuICAgICAgICB7dGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFRvZG9cclxuICAgICAgICAgICAgdGFzaz17dGFza31cclxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICByZW1vdmVUYXNrPXtyZW1vdmVUYXNrfVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4ICsgdGFzay50aXRsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvX2RvX2Zvcm19PlxyXG4gICAgICAgIDxUb2RvRm9ybSBhZGRUYXNrPXthZGRUYXNrfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlRvZG9Gb3JtIiwiVG9kbyIsIlRvZG9zIiwidGl0bGUiLCJ0YXNrcyIsInNldFRhc2tzIiwiYWRkVGFzayIsIm5ld1Rhc2tzIiwicmVtb3ZlVGFzayIsImluZGV4Iiwic3BsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwidG9kb3NfY29udCIsInRvZG9fc2Nyb2xsIiwibWFwIiwidGFzayIsInRvX2RvX2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/dashboard/todo.tsx\n"));

/***/ })

});