/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklearning_journal"] = self["webpackChunklearning_journal"] || []).push([["index"],{

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://learning-journal/./src/scss/main.scss?");

/***/ }),

/***/ "./src/img sync \\.(png%7Cjpe?g%7Cgif)$":
/*!***********************************************************!*\
  !*** ./src/img/ sync nonrecursive \.(png%7Cjpe?g%7Cgif)$ ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./article-image.png\": \"./src/img/article-image.png\",\n\t\"./blog-image-01.png\": \"./src/img/blog-image-01.png\",\n\t\"./blog-image-02.png\": \"./src/img/blog-image-02.png\",\n\t\"./blog-image-03.png\": \"./src/img/blog-image-03.png\",\n\t\"./blog-image-04.png\": \"./src/img/blog-image-04.png\",\n\t\"./blog-image-05.png\": \"./src/img/blog-image-05.png\",\n\t\"./blog-image-06.png\": \"./src/img/blog-image-06.png\",\n\t\"./logo.png\": \"./src/img/logo.png\",\n\t\"./profile-img.png\": \"./src/img/profile-img.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync \\\\.(png%7Cjpe?g%7Cgif)$\";\n\n//# sourceURL=webpack://learning-journal/./src/img/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _modules_blogs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/blogs.js */ \"./src/js/modules/blogs.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://learning-journal/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/blogs.js":
/*!*********************************!*\
  !*** ./src/js/modules/blogs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// create a context for all image files in a directory\nconst images = __webpack_require__(\"./src/img sync \\\\.(png%7Cjpe?g%7Cgif)$\");\n\n// create a blog post data array\nconst blogsData = [\n  {\n    title: 'blog one',\n    date: 'July 23, 2022',\n    excerpt: \"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path\",\n    img: images('./blog-image-01.png')\n  },\n  {\n    title: 'blog two',\n    date: 'July 23, 2022',\n    excerpt: \"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path\",\n    img: images('./blog-image-02.png')\n  },\n  {\n    title: 'blog three',\n    date: 'July 23, 2022',\n    excerpt: \"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path\",\n    img: images('./blog-image-03.png')\n  },\n  {\n    title: 'blog four',\n    date: 'July 23, 2022',\n    excerpt: \"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path\",\n    img: images('./blog-image-04.png')\n  },\n  {\n    title: 'blog five',\n    date: 'July 23, 2022',\n    excerpt: \"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path\",\n    img: images('./blog-image-05.png')\n  },\n  {\n    title: 'blog six',\n    date: 'July 23, 2022',\n    excerpt: \"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path\",\n    img: images('./blog-image-06.png')\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogsData);\n\n//# sourceURL=webpack://learning-journal/./src/js/modules/blogs.js?");

/***/ }),

/***/ "./src/img/article-image.png":
/*!***********************************!*\
  !*** ./src/img/article-image.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/article-image.png\";\n\n//# sourceURL=webpack://learning-journal/./src/img/article-image.png?");

/***/ }),

/***/ "./src/img/blog-image-01.png":
/*!***********************************!*\
  !*** ./src/img/blog-image-01.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/blog-image-01.png\";\n\n//# sourceURL=webpack://learning-journal/./src/img/blog-image-01.png?");

/***/ }),

/***/ "./src/img/blog-image-02.png":
/*!***********************************!*\
  !*** ./src/img/blog-image-02.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/blog-image-02.png\";\n\n//# sourceURL=webpack://learning-journal/./src/img/blog-image-02.png?");

/***/ }),

/***/ "./src/img/blog-image-03.png":
/*!***********************************!*\
  !*** ./src/img/blog-image-03.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/blog-image-03.png\";\n\n//# sourceURL=webpack://learning-journal/./src/img/blog-image-03.png?");

/***/ }),

/***/ "./src/img/blog-image-04.png":
/*!***********************************!*\
  !*** ./src/img/blog-image-04.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/blog-image-04.png\";\n\n//# sourceURL=webpack://learning-journal/./src/img/blog-image-04.png?");

/***/ }),

/***/ "./src/img/blog-image-05.png":
/*!***********************************!*\
  !*** ./src/img/blog-image-05.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/blog-image-05.png\";\n\n//# sourceURL=webpack://learning-journal/./src/img/blog-image-05.png?");

/***/ }),

/***/ "./src/img/blog-image-06.png":
/*!***********************************!*\
  !*** ./src/img/blog-image-06.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/blog-image-06.png\";\n\n//# sourceURL=webpack://learning-journal/./src/img/blog-image-06.png?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/logo.png\";\n\n//# sourceURL=webpack://learning-journal/./src/img/logo.png?");

/***/ }),

/***/ "./src/img/profile-img.png":
/*!*********************************!*\
  !*** ./src/img/profile-img.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/profile-img.png\";\n\n//# sourceURL=webpack://learning-journal/./src/img/profile-img.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);