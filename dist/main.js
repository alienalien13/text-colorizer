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

	var string = getById('text').innerText.split(' '),
	    // input text
	accept = getById('accept'); // accept button

	// main function
	function textTransform(colors) {

		var actualColor = 0; // actualColor value init

		// set random color from colors-arguments
		function setColor(gottenColors) {

			function getRandom() {
				var rand = Math.floor(Math.random() * gottenColors.length);
				if (rand === actualColor) return getRandom();else return rand;
			}

			if (gottenColors.length > 1) {
				actualColor = getRandom();
				return gottenColors[actualColor];
			} else if (gottenColors.length === 1) return gottenColors[0];
		}

		var newString = string.map(function (word) {
			return (// words array
				word.split('') // symbols array
				.map(function (symbol) {
					return '<span style="color: ' + setColor(colors) + '">' + symbol + '</span>';
				}) // transform symbol to <span>
				.join('')
			);
		}) // join symbols to words
		.join(' '); // join words to string

		getById('text').innerHTML = newString;
	}

	accept.addEventListener('click', function () {

		var allowedColors = ['red', 'black', 'gray', 'green', 'yellow', 'silver', 'blue', 'gold', 'white'],
		    unexpectedSymbols = getById('colors').value.match(/[^a-zA-Z\s\n,;\u000A]/ig);

		unexpectedSymbols || !getById('colors').value ? log('ERROR', unexpectedSymbols ? new Set(unexpectedSymbols) : 'EMPTY') : textTransform(getColors(getById('colors').value, allowedColors));

		log(getColors(getById('colors').value, allowedColors));
	});
};

// getting colors array from input textarea
var getColors = function getColors(inputColorsList, allowableColors) {
	return Array.from(new Set(inputColorsList.split('') // symbols array
	.map(function (symbol) {
		return symbol === ',' || symbol === ';' || symbol === '\n' ? ' ' : symbol;
	}) // replace ',' ';' and 'line break' with spacees
	.join('') // get single line string
	.split(' ') // get words
	.filter(function (item) {
		return item !== '' && allowableColors.indexOf(item) !== -1;
	}) // filter empty items in array and just allowed colors
	));
};

// - - - - - - - - - - - - - - - - - -

window.addEventListener('load', init);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);