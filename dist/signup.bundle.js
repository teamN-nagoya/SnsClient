/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/Packet.ts":
/*!**********************!*\
  !*** ./ts/Packet.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Packet\": () => (/* binding */ Packet)\n/* harmony export */ });\nclass Packet {\n    PacketType = null;\n    constructor() {\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/Packet.ts?");

/***/ }),

/***/ "./ts/common/util.ts":
/*!***************************!*\
  !*** ./ts/common/util.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"digestMessage\": () => (/* binding */ digestMessage)\n/* harmony export */ });\nasync function digestMessage(message) {\n    const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array\n    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message\n    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array\n    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string\n    return hashHex;\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/common/util.ts?");

/***/ }),

/***/ "./ts/common/webSocket.ts":
/*!********************************!*\
  !*** ./ts/common/webSocket.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"webSocket\": () => (/* binding */ webSocket)\n/* harmony export */ });\nconst webSocket = new WebSocket(\"ws:localhost:5001\");\n\n\n//# sourceURL=webpack://sns_client/./ts/common/webSocket.ts?");

/***/ }),

/***/ "./ts/packets/C2SPacket.ts":
/*!*********************************!*\
  !*** ./ts/packets/C2SPacket.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"C2SPacket\": () => (/* binding */ C2SPacket)\n/* harmony export */ });\n/* harmony import */ var _Packet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Packet */ \"./ts/Packet.ts\");\n\nclass C2SPacket extends _Packet__WEBPACK_IMPORTED_MODULE_0__.Packet {\n    C2SPacketType = null;\n    constructor() {\n        super();\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/C2SPacket.ts?");

/***/ }),

/***/ "./ts/packets/c2s/SignUpRequestC2SPacket.ts":
/*!**************************************************!*\
  !*** ./ts/packets/c2s/SignUpRequestC2SPacket.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignUpRequestC2SPacket\": () => (/* binding */ SignUpRequestC2SPacket)\n/* harmony export */ });\n/* harmony import */ var _C2SPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../C2SPacket */ \"./ts/packets/C2SPacket.ts\");\n\nclass SignUpRequestC2SPacket extends _C2SPacket__WEBPACK_IMPORTED_MODULE_0__.C2SPacket {\n    SignUpRequestC2SPacketType = null;\n    userId;\n    userName;\n    passwordHash;\n    constructor(userId, userName, passwordHash) {\n        super();\n        this.userId = userId;\n        this.userName = userName;\n        this.passwordHash = passwordHash;\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/c2s/SignUpRequestC2SPacket.ts?");

/***/ }),

/***/ "./ts/signup.ts":
/*!**********************!*\
  !*** ./ts/signup.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _packets_c2s_SignUpRequestC2SPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packets/c2s/SignUpRequestC2SPacket */ \"./ts/packets/c2s/SignUpRequestC2SPacket.ts\");\n/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/util */ \"./ts/common/util.ts\");\n/* harmony import */ var _common_webSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/webSocket */ \"./ts/common/webSocket.ts\");\n\n\n\nconst userIdElement = document.getElementById(\"user_id\");\nconst userNameElement = document.getElementById(\"user_name\");\nconst passElement = document.getElementById(\"password\");\nconst errorElement = document.getElementById(\"error\");\nconst submitElement = document.getElementById(\"submit\");\nsubmitElement.addEventListener(\"click\", submit);\n_common_webSocket__WEBPACK_IMPORTED_MODULE_2__.webSocket.onmessage = (event) => {\n    if (event.data == \"Login execution!\") {\n        let loc = window.location;\n        loc.href = \"./signin.html\";\n        window.location = loc;\n    }\n};\nasync function submit() {\n    const userId = userIdElement.value;\n    const userName = userNameElement.value;\n    const passWord = passElement.value;\n    const hash = (0,_common_util__WEBPACK_IMPORTED_MODULE_1__.digestMessage)(passWord);\n    if (!userId) {\n        errorElement.textContent = \"ユーザーIDを入力してください。\";\n        return;\n    }\n    if (!userName) {\n        errorElement.textContent = \"ユーザーネームを入力してください。\";\n        return;\n    }\n    if (!passWord) {\n        errorElement.textContent = \"パスワードを入力してください。\";\n        return;\n    }\n    if (passWord.length < 5) {\n        errorElement.textContent = \"パスワードは5文字以上です。\";\n        return;\n    }\n    const packet = new _packets_c2s_SignUpRequestC2SPacket__WEBPACK_IMPORTED_MODULE_0__.SignUpRequestC2SPacket(userId, userName, await hash);\n    _common_webSocket__WEBPACK_IMPORTED_MODULE_2__.webSocket.send(JSON.stringify(packet));\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/signup.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/signup.ts");
/******/ 	
/******/ })()
;