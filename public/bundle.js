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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/image.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/image.jsx":
/*!**************************!*\
  !*** ./client/image.jsx ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/luantran/Documents/FEC/image-module/image-module/client/image.jsx: Expected corresponding JSX closing tag for <Button2ton> (14:54)\\n\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m\\t\\t\\u001b[36mreturn\\u001b[39m(\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m\\t\\t\\t\\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"grid-container\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 14 | \\u001b[39m\\t\\t\\t  \\u001b[33m<\\u001b[39m\\u001b[33mButton2ton\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m'item6 Button'\\u001b[39m\\u001b[33m>\\u001b[39m \\u001b[33mView\\u001b[39m \\u001b[33mPhotos\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mButton\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\t\\t\\t                                                   \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m\\t\\t\\t  \\u001b[33m<\\u001b[39m\\u001b[33mButton\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m'item4 Button2'\\u001b[39m\\u001b[33m>\\u001b[39m \\u001b[33mShare\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mButton\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m\\t\\t\\t  \\u001b[33m<\\u001b[39m\\u001b[33mButton\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m'item4 Button3'\\u001b[39m\\u001b[33m>\\u001b[39m \\u001b[33mSave\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mButton\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m\\t\\t\\t  \\u001b[0m\\n    at _class.raise (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:3939:15)\\n    at _class.jsxParseElementAt (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:3600:18)\\n    at _class.jsxParseElementAt (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:3573:34)\\n    at _class.jsxParseElement (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:3626:19)\\n    at _class.parseExprAtom (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:3633:21)\\n    at _class.parseExprSubscripts (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:5924:21)\\n    at _class.parseMaybeUnary (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:5903:21)\\n    at _class.parseExprOps (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:5812:21)\\n    at _class.parseMaybeConditional (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:5784:21)\\n    at _class.parseMaybeAssign (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:5731:21)\\n    at _class.parseParenAndDistinguishExpression (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:6482:28)\\n    at _class.parseExprAtom (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:6284:21)\\n    at _class.parseExprAtom (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:3635:52)\\n    at _class.parseExprSubscripts (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:5924:21)\\n    at _class.parseMaybeUnary (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:5903:21)\\n    at _class.parseExprOps (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:5812:21)\\n    at _class.parseMaybeConditional (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:5784:21)\\n    at _class.parseMaybeAssign (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:5731:21)\\n    at _class.parseExpression (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:5684:21)\\n    at _class.parseReturnStatement (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:7508:28)\\n    at _class.parseStatementContent (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:7187:21)\\n    at _class.parseStatement (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:7153:17)\\n    at _class.parseBlockOrModuleBlockBody (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:7707:23)\\n    at _class.parseBlockBody (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:7694:10)\\n    at _class.parseBlock (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:7683:10)\\n    at _class.parseFunctionBody (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:6933:24)\\n    at _class.parseFunctionBodyAndFinish (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:6913:10)\\n    at _class.parseMethod (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:6865:10)\\n    at _class.pushClassMethod (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:8087:30)\\n    at _class.parseClassMemberWithIsStatic (/Users/luantran/Documents/FEC/image-module/image-module/node_modules/@babel/parser/lib/index.js:8006:12)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvaW1hZ2UuanN4LmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/image.jsx\n");

/***/ })

/******/ });