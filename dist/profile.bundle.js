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

/***/ "./ts/common/left.ts":
/*!***************************!*\
  !*** ./ts/common/left.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"homeElement\": () => (/* binding */ homeElement),\n/* harmony export */   \"profileElement\": () => (/* binding */ profileElement)\n/* harmony export */ });\nfunction init() { }\nconst homeElement = document.getElementById(\"home\");\nconst profileElement = document.getElementById(\"profile\");\nhomeElement.addEventListener(\"click\", (event) => {\n    window.location.href = `./home.html${window.location.hash}`;\n});\nprofileElement.addEventListener(\"click\", (event) => {\n    window.location.href = `./profile.html${window.location.hash}`;\n});\n\n\n//# sourceURL=webpack://sns_client/./ts/common/left.ts?");

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

/***/ "./ts/packets/S2CPacket.ts":
/*!*********************************!*\
  !*** ./ts/packets/S2CPacket.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"S2CPacket\": () => (/* binding */ S2CPacket)\n/* harmony export */ });\n/* harmony import */ var _Packet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Packet */ \"./ts/Packet.ts\");\n\nclass S2CPacket extends _Packet__WEBPACK_IMPORTED_MODULE_0__.Packet {\n    S2CPacketType = null;\n    constructor() {\n        super();\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/S2CPacket.ts?");

/***/ }),

/***/ "./ts/packets/c2s/FollowRequestC2SPacket.ts":
/*!**************************************************!*\
  !*** ./ts/packets/c2s/FollowRequestC2SPacket.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FollowRequestC2SPacket\": () => (/* binding */ FollowRequestC2SPacket)\n/* harmony export */ });\n/* harmony import */ var _C2SPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../C2SPacket */ \"./ts/packets/C2SPacket.ts\");\n\nclass FollowRequestC2SPacket extends _C2SPacket__WEBPACK_IMPORTED_MODULE_0__.C2SPacket {\n    FollowRequestC2SPacketType = null;\n    followUserId;\n    myId;\n    constructor(followUserId, myId) {\n        super();\n        this.followUserId = followUserId;\n        this.myId = myId;\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/c2s/FollowRequestC2SPacket.ts?");

/***/ }),

/***/ "./ts/packets/c2s/MessagesRequestC2SPacket.ts":
/*!****************************************************!*\
  !*** ./ts/packets/c2s/MessagesRequestC2SPacket.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessagesRequestC2SPacket\": () => (/* binding */ MessagesRequestC2SPacket)\n/* harmony export */ });\n/* harmony import */ var _C2SPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../C2SPacket */ \"./ts/packets/C2SPacket.ts\");\n\nclass MessagesRequestC2SPacket extends _C2SPacket__WEBPACK_IMPORTED_MODULE_0__.C2SPacket {\n    MessagesRequestC2SPacketType = null;\n    userId;\n    constructor(userId) {\n        super();\n        this.userId = userId;\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/c2s/MessagesRequestC2SPacket.ts?");

/***/ }),

/***/ "./ts/packets/c2s/ProfileRequestC2SPacket.ts":
/*!***************************************************!*\
  !*** ./ts/packets/c2s/ProfileRequestC2SPacket.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProfileRequestC2SPacket\": () => (/* binding */ ProfileRequestC2SPacket)\n/* harmony export */ });\n/* harmony import */ var _C2SPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../C2SPacket */ \"./ts/packets/C2SPacket.ts\");\n\nclass ProfileRequestC2SPacket extends _C2SPacket__WEBPACK_IMPORTED_MODULE_0__.C2SPacket {\n    ProfileRequestC2SPacketType = null;\n    userId;\n    constructor(userId) {\n        super();\n        this.userId = userId;\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/c2s/ProfileRequestC2SPacket.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_webSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/webSocket */ \"./ts/common/webSocket.ts\");\n/* harmony import */ var _packets_c2s_MessagesRequestC2SPacket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packets/c2s/MessagesRequestC2SPacket */ \"./ts/packets/c2s/MessagesRequestC2SPacket.ts\");\n/* harmony import */ var _packets_s2c_MessageReturnS2CPacket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./packets/s2c/MessageReturnS2CPacket */ \"./ts/packets/s2c/MessageReturnS2CPacket.ts\");\n/* harmony import */ var _packets_s2c_ProfileReturnS2CPacket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packets/s2c/ProfileReturnS2CPacket */ \"./ts/packets/s2c/ProfileReturnS2CPacket.ts\");\n/* harmony import */ var _packets_c2s_ProfileRequestC2SPacket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./packets/c2s/ProfileRequestC2SPacket */ \"./ts/packets/c2s/ProfileRequestC2SPacket.ts\");\n/* harmony import */ var _common_left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/left */ \"./ts/common/left.ts\");\n/* harmony import */ var _packets_c2s_FollowRequestC2SPacket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./packets/c2s/FollowRequestC2SPacket */ \"./ts/packets/c2s/FollowRequestC2SPacket.ts\");\n\n\n\n\n\n\n\n_common_left__WEBPACK_IMPORTED_MODULE_5__.init();\nconst userNameElement = document.getElementById(\"user_name\");\nconst userIdElement = document.getElementById(\"user_id\");\nconst followElement = document.getElementById(\"follow\");\nlet hash = JSON.parse(decodeURI(location.hash.substring(1)));\nif (!hash.userId) {\n    hash.userId = \"yuuki1101927\";\n}\nuserIdElement.textContent = hash.userId;\nconsole.log(`userId:${hash.userId},myId:${hash.myId}`);\nif (hash.userId == hash.myId) {\n    console.log(\"z\");\n    followElement.textContent = \"Edit Profile\";\n}\nfollowElement.addEventListener(\"click\", (event) => {\n    const followType = followElement.textContent;\n    const packet = new _packets_c2s_FollowRequestC2SPacket__WEBPACK_IMPORTED_MODULE_6__.FollowRequestC2SPacket(hash.userId, hash.myId);\n    switch (followType) {\n        case \"Follow\":\n            followElement.textContent = \"Following\";\n            console.log(packet);\n            break;\n        case \"Following\":\n            followElement.textContent = \"Follow\";\n            console.log(packet);\n            break;\n        case \"Edit Profile\":\n            break;\n    }\n});\nconst profileRequest = new _packets_c2s_ProfileRequestC2SPacket__WEBPACK_IMPORTED_MODULE_4__.ProfileRequestC2SPacket(hash.userId);\nconst messageRequest = new _packets_c2s_MessagesRequestC2SPacket__WEBPACK_IMPORTED_MODULE_1__.MessagesRequestC2SPacket(hash.userId);\nconsole.log(profileRequest);\nconsole.log(messageRequest);\nconst list = document.getElementById(\"tweetList\");\n_common_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.onmessage = (event) => {\n    const rawPacket = JSON.parse(event.data);\n    if (\"MessageReturnS2CPacketType\" in rawPacket) {\n        const packet = rawPacket;\n        list.appendChild((0,_packets_s2c_MessageReturnS2CPacket__WEBPACK_IMPORTED_MODULE_2__.html)(packet));\n    }\n    else if (\"ProfileReturnS2CPacketType\" in rawPacket) {\n        const packet = rawPacket;\n        userNameElement.textContent = packet.userName;\n        if (followElement.textContent != \"Edit Profile\")\n            if (packet.following) {\n                followElement.textContent = \"Following\";\n            }\n    }\n};\n_common_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.onmessage(new MessageEvent('worker', {\n    data: JSON.stringify(new _packets_s2c_MessageReturnS2CPacket__WEBPACK_IMPORTED_MODULE_2__.MessageReturnS2CPacket(\"yuuki1101927\", Date.now(), \"ae\", \"俺は神だ\"))\n}));\n_common_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.onmessage(new MessageEvent('worker', {\n    data: JSON.stringify(new _packets_s2c_ProfileReturnS2CPacket__WEBPACK_IMPORTED_MODULE_3__.ProfileReturnS2CPacket(\"ゆうきくん\", true))\n}));\n\n\n//# sourceURL=webpack://sns_client/./ts/profile.ts?");

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