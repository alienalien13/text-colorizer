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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

// aux functions
var getById = function getById(id) {
	return document.getElementById(id);
},
    log = console.log;
// - - - - - - - - - - - - - - - - - - - - - - - - - - -


// global funcs
var init = function init() {

	// DOM elements / their values
	var text = getById('text').innerText,
	    accept = getById('accept');

	// main function
	function textTransform() {

		// input text
		var string = text.split(' ');

		var actualColor = 0;

		// set random color from colors-arguments
		function setColor(gotten_colors) {

			function getRandom() {
				var rand = Math.floor(Math.random() * gotten_colors.length);
				if (rand === actualColor) return getRandom();else return rand;
			}

			/* (gotten_colors.length < 2) ? actualColor = 0 :  */actualColor = getRandom();
			return gotten_colors[actualColor];
		}

		/*
  	output text
  	each word in string to array of letters
  	each letter to span
  	join letters back to words
  	join words separated by ' '
  */
		var newStr = string.map(function (word) {
			return word.split('').map(function (symbol) {
				return '<span style="color: ' + setColor(getColors(getById('colors').value)) + '">' + symbol + '</span>';
			}).join('');
		}).join(' ');

		getById('text2').innerHTML = newStr;

		log(getColors(getById('colors').value));
	}

	accept.addEventListener('click', textTransform);
};

// getting colors array from input textarea
var getColors = function getColors(inputColorsList) {

	var newList = inputColorsList.split('').map(function (item) {
		return item === ',' || item === ';' || item === '\n' ? ' ' : item;
	}).join('').split(' ').filter(function (item) {
		return item !== '';
	});

	var colorsList = new Set(newList);

	return Array.from(colorsList);
};
// - - - - - - - - - - - - - - - - - -

window.addEventListener('load', init);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);