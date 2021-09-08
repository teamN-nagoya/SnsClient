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

/***/ "./ts/packets/C2SPacket.ts":
/*!*********************************!*\
  !*** ./ts/packets/C2SPacket.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"C2SPacket\": () => (/* binding */ C2SPacket)\n/* harmony export */ });\n/* harmony import */ var _Packet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Packet */ \"./ts/Packet.ts\");\n\nclass C2SPacket extends _Packet__WEBPACK_IMPORTED_MODULE_0__.Packet {\n    C2SPacketType = null;\n    constructor() {\n        super();\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/C2SPacket.ts?");

/***/ }),

/***/ "./ts/packets/S2CPacket.ts":
/*!*********************************!*\
  !*** ./ts/packets/S2CPacket.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"S2CPacket\": () => (/* binding */ S2CPacket)\n/* harmony export */ });\n/* harmony import */ var _Packet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Packet */ \"./ts/Packet.ts\");\n\nclass S2CPacket extends _Packet__WEBPACK_IMPORTED_MODULE_0__.Packet {\n    S2CPacketType = null;\n    constructor() {\n        super();\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/S2CPacket.ts?");

/***/ }),

/***/ "./ts/packets/c2s/MessagesRequestC2SPacket.ts":
/*!****************************************************!*\
  !*** ./ts/packets/c2s/MessagesRequestC2SPacket.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessagesRequestC2SPacket\": () => (/* binding */ MessagesRequestC2SPacket)\n/* harmony export */ });\n/* harmony import */ var _C2SPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../C2SPacket */ \"./ts/packets/C2SPacket.ts\");\n\nclass MessagesRequestC2SPacket extends _C2SPacket__WEBPACK_IMPORTED_MODULE_0__.C2SPacket {\n    MessagesRequestC2SPacketType = null;\n    userId;\n    constructor(userId) {\n        super();\n        this.userId = userId;\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/c2s/MessagesRequestC2SPacket.ts?");

/***/ }),

/***/ "./ts/packets/s2c/MessageReturnS2CPacket.ts":
/*!**************************************************!*\
  !*** ./ts/packets/s2c/MessageReturnS2CPacket.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessageReturnS2CPacket\": () => (/* binding */ MessageReturnS2CPacket),\n/* harmony export */   \"html\": () => (/* binding */ html)\n/* harmony export */ });\n/* harmony import */ var _S2CPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../S2CPacket */ \"./ts/packets/S2CPacket.ts\");\n\nclass MessageReturnS2CPacket extends _S2CPacket__WEBPACK_IMPORTED_MODULE_0__.S2CPacket {\n    MessageReturnS2CPacketType = null;\n    userId;\n    time;\n    messageId;\n    message;\n    constructor(userId, time, messageId, message) {\n        super();\n        this.userId = userId;\n        if (typeof time == \"number\") {\n            this.time = time;\n        }\n        else {\n            this.time = time.getTime();\n        }\n        this.messageId = messageId;\n        this.message = message;\n    }\n}\nfunction html(packet) {\n    const html = `</li>\n        <div id=\"tweet\" class=\"box\">\n            <div id=\"message\">${packet.message}</div>\n            <div id=\"message_id\">${packet.messageId}</div>\n            <button id=\"nice\">${0}</button>\n            <div id=\"time\">${new Date(packet.time).toLocaleString()}</div>\n        </div>\n    </li>`;\n    const tempEl = document.createElement('div');\n    tempEl.innerHTML = html;\n    return tempEl.firstElementChild;\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/s2c/MessageReturnS2CPacket.ts?");

/***/ }),

/***/ "./ts/packets/s2c/ProfileReturnS2CPacket.ts":
/*!**************************************************!*\
  !*** ./ts/packets/s2c/ProfileReturnS2CPacket.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProfileReturnS2CPacket\": () => (/* binding */ ProfileReturnS2CPacket)\n/* harmony export */ });\n/* harmony import */ var _S2CPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../S2CPacket */ \"./ts/packets/S2CPacket.ts\");\n\nclass ProfileReturnS2CPacket extends _S2CPacket__WEBPACK_IMPORTED_MODULE_0__.S2CPacket {\n    ProfileReturnS2CPacketType = null;\n    userName;\n    following;\n    constructor(userName, following) {\n        super();\n        this.userName = userName;\n        this.following = following;\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/s2c/ProfileReturnS2CPacket.ts?");

/***/ }),

/***/ "./ts/profile.ts":
/*!***********************!*\
  !*** ./ts/profile.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webSocket */ \"./ts/webSocket.ts\");\n/* harmony import */ var _packets_c2s_MessagesRequestC2SPacket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packets/c2s/MessagesRequestC2SPacket */ \"./ts/packets/c2s/MessagesRequestC2SPacket.ts\");\n/* harmony import */ var _packets_s2c_MessageReturnS2CPacket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./packets/s2c/MessageReturnS2CPacket */ \"./ts/packets/s2c/MessageReturnS2CPacket.ts\");\n/* harmony import */ var _packets_s2c_ProfileReturnS2CPacket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packets/s2c/ProfileReturnS2CPacket */ \"./ts/packets/s2c/ProfileReturnS2CPacket.ts\");\n\n\n\n\nlet userId = location.hash;\nif (!userId) {\n    location.hash = \"yuuki1101927\";\n    userId = \"yuuki1101927\";\n}\nconst userName = document.getElementById(\"user_name\");\nconst follow = document.getElementById(\"follow\");\nif (userId == _webSocket__WEBPACK_IMPORTED_MODULE_0__.myId) {\n    follow.textContent = \"Edit Profile\";\n}\nconst messageRequest = new _packets_c2s_MessagesRequestC2SPacket__WEBPACK_IMPORTED_MODULE_1__.MessagesRequestC2SPacket(userId);\nconsole.log(messageRequest);\nconst list = document.getElementById(\"tweetList\");\n_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.onmessage = (event) => {\n    const json = event.data;\n    const rawPacket = JSON.parse(event.data);\n    if (\"MessageReturnS2CPacketType\" in rawPacket) {\n        const packet = rawPacket;\n        console.log(packet);\n        list.appendChild((0,_packets_s2c_MessageReturnS2CPacket__WEBPACK_IMPORTED_MODULE_2__.html)(packet));\n    }\n    else if (\"ProfileReturnS2CPacketType\" in rawPacket) {\n        const packet = rawPacket;\n        userName.textContent = packet.userName;\n        if (packet.following) {\n            follow.textContent = \"Following\";\n        }\n    }\n};\n_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.onmessage(new MessageEvent('worker', {\n    data: JSON.stringify(new _packets_s2c_MessageReturnS2CPacket__WEBPACK_IMPORTED_MODULE_2__.MessageReturnS2CPacket(\"yuuki1101927\", Date.now(), \"ae\", \"俺は神だ\"))\n}));\n_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.onmessage(new MessageEvent('worker', {\n    data: JSON.stringify(new _packets_s2c_ProfileReturnS2CPacket__WEBPACK_IMPORTED_MODULE_3__.ProfileReturnS2CPacket(\"ゆうきくん\", true))\n}));\n\n\n//# sourceURL=webpack://sns_client/./ts/profile.ts?");

/***/ }),

/***/ "./ts/webSocket.ts":
/*!*************************!*\
  !*** ./ts/webSocket.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"webSocket\": () => (/* binding */ webSocket),\n/* harmony export */   \"myId\": () => (/* binding */ myId)\n/* harmony export */ });\nconst webSocket = new WebSocket(\"ws:localhost:5001\");\nconst myId = \"%myId%\";\n\n\n//# sourceURL=webpack://sns_client/./ts/webSocket.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/profile.ts");
/******/ 	
/******/ })()
;