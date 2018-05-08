/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const timerDisplay = document.querySelector('.display__time-left')\nconst endTime = document.querySelector('.display__end-time')\nconst buttons = document.querySelectorAll('[data-time]')\nlet countdown\n\nconst timer = (seconds) => {\n  const now = Date.now()\n  const then = now + seconds * 1000\n\n  clearInterval(countdown)\n  displayTimeLeft(seconds)\n  displayEndTime(then)\n\n  countdown = setInterval(() => {\n    const secondLeft = Math.round((then - Date.now()) / 1000)\n\n    if (secondLeft < 0) {\n      clearInterval(countdown)\n      return\n    }\n\n    displayTimeLeft(secondLeft)\n  }, 1000)\n}\n\nconst displayTimeLeft = (seconds) => {\n  const minutes = Math.floor(seconds / 60)\n  const hours = Math.floor(minutes / 60)\n  const remainderSeconds = `${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`\n  const remainderMinutes = `${minutes % 60 < 10 ? '0' : ''}${minutes % 60}`\n  const remainderHours = `${hours % 60 < 1 ? '' : hours + ':'}`\n  const displayTime = `${remainderHours}${remainderMinutes}:${remainderSeconds}`\n\n  document.title = displayTime\n  timerDisplay.textContent = displayTime\n}\n\nconst displayEndTime = (timestamp) => {\n  const end = new Date(timestamp)\n  const hours = end.getHours()\n  const minutes = end.getMinutes()\n\n  endTime.textContent = `Be Back At ${hours}:${minutes < 10 ? '0' : ''}${minutes}`\n}\n\nconst startTimer = event => {\n  const time = event.target.dataset.time | 0\n\n  event.preventDefault()\n  timer(time)\n}\n\nbuttons.forEach(button => button.addEventListener('click', startTimer))\ndocument.customForm.addEventListener('submit', event => {\n  const mins = (event.target.minutes.value | 0) * 60\n\n  event.preventDefault()\n  event.target.reset()\n  timer(mins)\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });