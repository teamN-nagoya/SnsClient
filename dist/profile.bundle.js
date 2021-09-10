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

/***/ "./ts/packets/c2s/UserFollowersC2SPacket.ts":
/*!**************************************************!*\
  !*** ./ts/packets/c2s/UserFollowersC2SPacket.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserFollowersC2SPacket\": () => (/* binding */ UserFollowersC2SPacket)\n/* harmony export */ });\n/* harmony import */ var _C2SPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../C2SPacket */ \"./ts/packets/C2SPacket.ts\");\n\nclass UserFollowersC2SPacket extends _C2SPacket__WEBPACK_IMPORTED_MODULE_0__.C2SPacket {\n    UserFollowersC2SPacketType = null;\n    userId;\n    constructor(userId) {\n        super();\n        this.userId = userId;\n    }\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/c2s/UserFollowersC2SPacket.ts?");

/***/ }),

/***/ "./ts/packets/s2c/FollowersReturnS2CPacket.ts":
/*!****************************************************!*\
  !*** ./ts/packets/s2c/FollowersReturnS2CPacket.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FollowersReturnS2CPacket\": () => (/* binding */ FollowersReturnS2CPacket),\n/* harmony export */   \"htmlF\": () => (/* binding */ htmlF)\n/* harmony export */ });\n/* harmony import */ var _S2CPacket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../S2CPacket */ \"./ts/packets/S2CPacket.ts\");\n\nclass FollowersReturnS2CPacket extends _S2CPacket__WEBPACK_IMPORTED_MODULE_0__.S2CPacket {\n    FollowersReturnS2CPacketType = null;\n    myId;\n    followerUserIds;\n    constructor(myId, followerUserIds) {\n        super();\n        this.myId = myId;\n        this.followerUserIds = followerUserIds;\n    }\n}\nfunction htmlF(packet) {\n    let html = \"\";\n    packet.followerUserIds.forEach((userId) => {\n        const a = `\n\t\t<div class=\"followUser\" id=\"_${userId}\">\n\t\t\t<img src=\".././img/profile.svg\" alt=\"follower\" class=\"followUsericon\">\n\t\t\t<p class=\"followUsername\">\n\t\t\t\t${userId}\n\t\t\t</p>\n\t\t</div>\n\t\t`;\n        html += a;\n    });\n    const tempEl = document.createElement('li');\n    tempEl.innerHTML = html;\n    return { element: tempEl.firstElementChild, followerUserIds: packet.followerUserIds };\n}\n\n\n//# sourceURL=webpack://sns_client/./ts/packets/s2c/FollowersReturnS2CPacket.ts?");

/***/ }),

/***/ "./ts/profile.ts":
/*!***********************!*\
  !*** ./ts/profile.ts ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_webSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/webSocket */ \"./ts/common/webSocket.ts\");\n/* harmony import */ var _packets_c2s_MessagesRequestC2SPacket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packets/c2s/MessagesRequestC2SPacket */ \"./ts/packets/c2s/MessagesRequestC2SPacket.ts\");\n/* harmony import */ var _packets_s2c_MessageReturnS2CPacket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./packets/s2c/MessageReturnS2CPacket */ \"./ts/packets/s2c/MessageReturnS2CPacket.ts\");\n/* harmony import */ var _packets_c2s_ProfileRequestC2SPacket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packets/c2s/ProfileRequestC2SPacket */ \"./ts/packets/c2s/ProfileRequestC2SPacket.ts\");\n/* harmony import */ var _packets_c2s_FollowC2SPacket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./packets/c2s/FollowC2SPacket */ \"./ts/packets/c2s/FollowC2SPacket.ts\");\n/* harmony import */ var _common_left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/left */ \"./ts/common/left.ts\");\n/* harmony import */ var _packets_c2s_UnFollowC2SPacket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./packets/c2s/UnFollowC2SPacket */ \"./ts/packets/c2s/UnFollowC2SPacket.ts\");\n/* harmony import */ var _common_translate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/translate */ \"./ts/common/translate.ts\");\n/* harmony import */ var _packets_c2s_UserFollowersC2SPacket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./packets/c2s/UserFollowersC2SPacket */ \"./ts/packets/c2s/UserFollowersC2SPacket.ts\");\n/* harmony import */ var _packets_s2c_FollowersReturnS2CPacket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./packets/s2c/FollowersReturnS2CPacket */ \"./ts/packets/s2c/FollowersReturnS2CPacket.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_webSocket__WEBPACK_IMPORTED_MODULE_0__]);\n_common_webSocket__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n_common_left__WEBPACK_IMPORTED_MODULE_5__.init();\nconst userNameElement = document.getElementById(\"user_name\");\nconst userIdElement = document.getElementById(\"user_id\");\nconst followersElement = document.getElementById(\"followers\");\nconst followersTextElement = document.getElementById(\"followerText\");\nif (!_common_left__WEBPACK_IMPORTED_MODULE_5__.hash.userId) {\n    _common_left__WEBPACK_IMPORTED_MODULE_5__.hash.userId = \"yuuki1101927\";\n}\nuserIdElement.textContent = _common_left__WEBPACK_IMPORTED_MODULE_5__.hash.userId;\nconsole.log(`userId:${_common_left__WEBPACK_IMPORTED_MODULE_5__.hash.userId},myId:${_common_left__WEBPACK_IMPORTED_MODULE_5__.hash.myId}`);\nfollowersTextElement.addEventListener(\"click\", (event) => {\n    if (_common_left__WEBPACK_IMPORTED_MODULE_5__.hash.userId == _common_left__WEBPACK_IMPORTED_MODULE_5__.hash.myId)\n        return;\n    const followType = followersTextElement.textContent;\n    switch (followType) {\n        case \"Others Followers\":\n            followersTextElement.textContent = \"All Followers\";\n            _common_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.send(JSON.stringify(new _packets_c2s_UnFollowC2SPacket__WEBPACK_IMPORTED_MODULE_6__.UnFollowC2SPacket(_common_left__WEBPACK_IMPORTED_MODULE_5__.hash.userId, _common_left__WEBPACK_IMPORTED_MODULE_5__.hash.myId)));\n            break;\n        case \"All Followers\":\n            followersTextElement.textContent = \"Others Followers\";\n            _common_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.send(JSON.stringify(new _packets_c2s_FollowC2SPacket__WEBPACK_IMPORTED_MODULE_4__.FollowC2SPacket(_common_left__WEBPACK_IMPORTED_MODULE_5__.hash.userId, _common_left__WEBPACK_IMPORTED_MODULE_5__.hash.myId)));\n            break;\n    }\n});\nconst profileRequest = new _packets_c2s_ProfileRequestC2SPacket__WEBPACK_IMPORTED_MODULE_3__.ProfileRequestC2SPacket(_common_left__WEBPACK_IMPORTED_MODULE_5__.hash.myId, _common_left__WEBPACK_IMPORTED_MODULE_5__.hash.userId);\nconst messageRequest = new _packets_c2s_MessagesRequestC2SPacket__WEBPACK_IMPORTED_MODULE_1__.MessagesRequestC2SPacket(_common_left__WEBPACK_IMPORTED_MODULE_5__.hash.userId);\nconst followersRequest = new _packets_c2s_UserFollowersC2SPacket__WEBPACK_IMPORTED_MODULE_8__.UserFollowersC2SPacket(_common_left__WEBPACK_IMPORTED_MODULE_5__.hash.userId);\n_common_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.send(JSON.stringify(profileRequest));\n_common_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.send(JSON.stringify(messageRequest));\n_common_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.send(JSON.stringify(followersRequest));\nconst list = document.getElementById(\"posts\");\n_common_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket.onmessage = (event) => {\n    const rawPacket = JSON.parse(event.data);\n    if (\"MessageReturnS2CPacketType\" in rawPacket) {\n        const packet = rawPacket;\n        const { element, messageId } = (0,_packets_s2c_MessageReturnS2CPacket__WEBPACK_IMPORTED_MODULE_2__.htmlM)(packet);\n        list.appendChild(element);\n        (0,_common_translate__WEBPACK_IMPORTED_MODULE_7__.translate)(packet.message, (output) => {\n            document.getElementsByName(messageId).forEach((elem) => {\n                elem.innerHTML = output;\n            });\n        });\n    }\n    else if (\"ProfileReturnS2CPacketType\" in rawPacket) {\n        const packet = rawPacket;\n        userNameElement.textContent = packet.userName;\n        if (packet.following) {\n            followersTextElement.textContent = \"Others Followers\";\n        }\n    }\n    else if (\"FollowersReturnS2CPacketType\" in rawPacket) {\n        const packet = rawPacket;\n        packet.followerUserIds = packet.followerUserIds.filter((element) => { return element != _common_left__WEBPACK_IMPORTED_MODULE_5__.hash.myId; });\n        const { element, followerUserIds } = (0,_packets_s2c_FollowersReturnS2CPacket__WEBPACK_IMPORTED_MODULE_9__.htmlF)(packet);\n        followersElement.appendChild(element);\n        followerUserIds.forEach((userId) => {\n            document.getElementById(`_${userId}`)?.addEventListener(\"click\", () => {\n                _common_left__WEBPACK_IMPORTED_MODULE_5__.hash.userId = userId;\n                window.location.href = `./profile.html#${JSON.stringify(_common_left__WEBPACK_IMPORTED_MODULE_5__.hash)}`;\n                location.reload();\n                location.hash = \"\";\n            });\n        });\n    }\n};\n\n});\n\n//# sourceURL=webpack://sns_client/./ts/profile.ts?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep.catch(reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise.catch(rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
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