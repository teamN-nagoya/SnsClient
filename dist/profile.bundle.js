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

/***/ "./ts/packets/c2s/FollowC2SPacket.ts":
/*!*******************************************!*\
  !*** ./ts/packets/c2s/FollowC2SPacket.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FollowC2SPacket\": () => (/* binding */ FollowC2SPacket)\n/* harmony export */ });\n/* harmony import */ var _C2SPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../C2SPacket */ \"./ts/packets/C2SPacket.ts\");\n\nclass FollowC2SPacket extends _C2SPacket__WEBPACK_IMPORTED_MODULE_0__.C2SPacket {\n    FollowC2SPacketType = null;\n    followUserId;\n    myId;\n    constructor(followUserId, myId) {\n        super();\n        this.followUserId = followUserId;\n        this.myId = myId;\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/c2s/FollowC2SPacket.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProfileRequestC2SPacket\": () => (/* binding */ ProfileRequestC2SPacket)\n/* harmony export */ });\n/* harmony import */ var _C2SPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../C2SPacket */ \"./ts/packets/C2SPacket.ts\");\n\nclass ProfileRequestC2SPacket extends _C2SPacket__WEBPACK_IMPORTED_MODULE_0__.C2SPacket {\n    ProfileRequestC2SPacketType = null;\n    myId;\n    userId;\n    constructor(myId, userId) {\n        super();\n        this.myId = myId;\n        this.userId = userId;\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/c2s/ProfileRequestC2SPacket.ts?");

/***/ }),

/***/ "./ts/packets/c2s/UnFollowC2SPacket.ts":
/*!*********************************************!*\
  !*** ./ts/packets/c2s/UnFollowC2SPacket.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UnFollowC2SPacket\": () => (/* binding */ UnFollowC2SPacket)\n/* harmony export */ });\n/* harmony import */ var _C2SPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../C2SPacket */ \"./ts/packets/C2SPacket.ts\");\n\nclass UnFollowC2SPacket extends _C2SPacket__WEBPACK_IMPORTED_MODULE_0__.C2SPacket {\n    UnFollowC2SPacketType = null;\n    followUserId;\n    myId;\n    constructor(followUserId, myId) {\n        super();\n        this.followUserId = followUserId;\n        this.myId = myId;\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/c2s/UnFollowC2SPacket.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_webSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/webSocket */ \"./ts/common/webSocket.ts\");\n/* harmony import */ var _packets_c2s_MessagesRequestC2SPacket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packets/c2s/MessagesRequestC2SPacket */ \"./ts/packets/c2s/MessagesRequestC2SPacket.ts\");\n/* harmony import */ var _packets_s2c_MessageReturnS2CPacket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./packets/s2c/MessageReturnS2CPacket */ \"./ts/packets/s2c/MessageReturnS2CPacket.ts\");\n/* harmony import */ var _packets_s2c_ProfileReturnS2CPacket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packets/s2c/ProfileReturnS2CPacket */ \"./ts/packets/s2c/ProfileReturnS2CPacket.ts\");\n/* harmony import */ var _packets_c2s_ProfileRequestC2SPacket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./packets/c2s/ProfileRequestC2SPacket */ \"./ts/packets/c2s/ProfileRequestC2SPacket.ts\");\n/* harmony import */ var _packets_c2s_FollowC2SPacket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./packets/c2s/FollowC2SPacket */ \"./ts/packets/c2s/FollowC2SPacket.ts\");\n/* harmony import */ var _common_left__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/left */ \"./ts/common/left.ts\");\n/* harmony import */ var _packets_c2s_UnFollowC2SPacket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./packets/c2s/UnFollowC2SPacket */ \"./ts/packets/c2s/UnFollowC2SPacket.ts\");\n/* harmony import */ var _common_translate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/translate */ \"./ts/common/translate.ts\");\n\n\n\n\n\n\n\n\n\n_common_left__WEBPACK_IMPORTED_MODULE_6__.init();\nconst userNameElement = document.getElementById(\"user_name\");\nconst userIdElement = document.getElementById(\"user_id\");\nconst followElement = document.getElementById(\"follow\");\nif (!_common_left__WEBPACK_IMPORTED_MODULE_6__.hash.userId) {\n    _common_left__WEBPACK_IMPORTED_MODULE_6__.hash.userId = \"yuuki1101927\";\n}\nuserIdElement.textContent = _common_left__WEBPACK_IMPORTED_MODULE_6__.hash.userId;\nconsole.log(`userId:${_common_left__WEBPACK_IMPORTED_MODULE_6__.hash.userId},myId:${_common_left__WEBPACK_IMPORTED_MODULE_6__.hash.myId}`);\nif (_common_left__WEBPACK_IMPORTED_MODULE_6__.hash.userId == _common_left__WEBPACK_IMPORTED_MODULE_6__.hash.myId) {\n    console.log(\"z\");\n    followElement.textContent = \"Edit Profile\";\n}\nfollowElement.addEventListener(\"click\", (event) => {\n    const followType = followElement.textContent;\n    switch (followType) {\n        case \"Follow\":\n            followElement.textContent = \"Following\";\n            console.log(new _packets_c2s_UnFollowC2SPacket__WEBPACK_IMPORTED_MODULE_7__.UnFollowC2SPacket(_common_left__WEBPACK_IMPORTED_MODULE_6__.hash.userId, _common_left__WEBPACK_IMPORTED_MODULE_6__.hash.myId));\n            break;\n        case \"Following\":\n            followElement.textContent = \"Follow\";\n            console.log(new _packets_c2s_FollowC2SPacket__WEBPACK_IMPORTED_MODULE_5__.FollowC2SPacket(_common_left__WEBPACK_IMPORTED_MODULE_6__.hash.userId, _common_left__WEBPACK_IMPORTED_MODULE_6__.hash.myId));\n            break;\n        case \"Edit Profile\":\n            break;\n    }\n});\nconst profileRequest = new _packets_c2s_ProfileRequestC2SPacket__WEBPACK_IMPORTED_MODULE_4__.ProfileRequestC2SPacket(_common_left__WEBPACK_IMPORTED_MODULE_6__.hash.myId, _common_left__WEBPACK_IMPORTED_MODULE_6__.hash.userId);\nconst messageRequest = new _packets_c2s_MessagesRequestC2SPacket__WEBPACK_IMPORTED_MODULE_1__.MessagesRequestC2SPacket(_common_left__WEBPACK_IMPORTED_MODULE_6__.hash.userId);\nconsole.log(profileRequest);\nconsole.log(messageRequest);\nconst list = document.getElementById(\"tweetList\");\n_common_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.onmessage = (event) => {\n    const rawPacket = JSON.parse(event.data);\n    if (\"MessageReturnS2CPacketType\" in rawPacket) {\n        const packet = rawPacket;\n        const { element, messageId } = (0,_packets_s2c_MessageReturnS2CPacket__WEBPACK_IMPORTED_MODULE_2__.html)(packet);\n        list.appendChild(element);\n        (0,_common_translate__WEBPACK_IMPORTED_MODULE_8__.translate)(packet.message, (output) => {\n            document.getElementsByName(messageId).forEach((elem) => {\n                elem.innerHTML = output;\n            });\n        });\n    }\n    else if (\"ProfileReturnS2CPacketType\" in rawPacket) {\n        const packet = rawPacket;\n        userNameElement.textContent = packet.userName;\n        if (followElement.textContent != \"Edit Profile\")\n            if (packet.following) {\n                followElement.textContent = \"Following\";\n            }\n    }\n};\n_common_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.onmessage(new MessageEvent('worker', {\n    data: JSON.stringify(new _packets_s2c_MessageReturnS2CPacket__WEBPACK_IMPORTED_MODULE_2__.MessageReturnS2CPacket(\"yuuki1101927\", \"ゆうきくん\", Date.now(), \"ae\", \"俺は神だ\"))\n}));\n_common_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.onmessage(new MessageEvent('worker', {\n    data: JSON.stringify(new _packets_s2c_ProfileReturnS2CPacket__WEBPACK_IMPORTED_MODULE_3__.ProfileReturnS2CPacket(\"ゆうきくん\", true))\n}));\n\n\n//# sourceURL=webpack://sns_client/./ts/profile.ts?");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"profile": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksns_client"] = self["webpackChunksns_client"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./ts/profile.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;