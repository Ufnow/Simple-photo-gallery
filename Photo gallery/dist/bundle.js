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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Http = new XMLHttpRequest();\nvar url = 'http://www.splashbase.co/api/v1/images/search?query=tree';\nHttp.open(\"GET\", url, true);\nHttp.send();\n\nHttp.onreadystatechange = function (e) {\n  var Arr = JSON.parse(Http.responseText);\n  var Arr2 = Arr.images;\n  filter('all');\n}; //load images depends on filter value\n\n\nwindow.filter = function filter(value) {\n  removeImg();\n  var Arr = JSON.parse(Http.responseText);\n  var Arr2 = Arr.images;\n  var out = \"\";\n  var i;\n  var id = 0;\n  var loadedImages = 0;\n\n  for (i = 0; i < Arr2.length && loadedImages < 10; i++) {\n    if (Arr2[i].site === value || value === 'all') {\n      if (i > 0 && (i % 4 === 0 || i % 8 === 0)) {\n        out += '<div class=\"imgcontainer ' + Arr2[i].site + ' box2\">' + '<img class = \"img\" src=\"' + Arr2[i].url + '\">' + '</div>';\n        loadedImages++;\n      } else {\n        out += '<div id =' + '\"' + id + '\"' + ' class=\"imgcontainer ' + Arr2[i].site + ' box1\">' + '<img class = \"img\" src=\"' + Arr2[i].url + '\">' + '</div>';\n        id++;\n        loadedImages++;\n      }\n    }\n  }\n\n  document.getElementById(\"images\").innerHTML = '<div id =\"container\" class = \"container\">' + out + '</div>';\n  keepObjectsSquare();\n\n  if (loadedImages > 9) {\n    document.getElementById(\"showmore\").innerHTML = '<div id =\"showmore-container\"><button id=\"showmore-btn\" onclick=\"Clicked()\">Show More</button></div>';\n    GlobalArrayState = i;\n    GlobalFilterValue = value;\n    GlobalId = id;\n  } else {\n    removeShowMore();\n    return false;\n  }\n}; //Removing all images from index.html\n\n\nfunction removeImg() {\n  var x = document.getElementById(\"container\");\n  x.parentNode.removeChild(x);\n  return false;\n} //Removing show more button\n\n\nfunction removeShowMore() {\n  var x = document.getElementById(\"showmore-container\");\n  x.parentNode.removeChild(x);\n  return false;\n} //buttons \"ative\" status controller\n\n\nvar btnContainer = document.getElementById(\"myBtnContainer\");\nvar btns = btnContainer.getElementsByClassName(\"btn\");\n\nfor (var i = 0; i < btns.length; i++) {\n  btns[i].addEventListener(\"click\", function () {\n    var current = document.getElementsByClassName(\"active\");\n    current[0].className = current[0].className.replace(\" active\", \"\");\n    this.className += \" active\";\n  });\n} //keeps square images \"square\" after resizing\n\n\nwindow.keepObjectsSquare = function keepObjectsSquare() {\n  var objects = document.getElementsByClassName(\"box1\");\n\n  for (var i = 0; i < objects.length; i++) {\n    var width = document.getElementById(i).offsetWidth;\n    document.getElementById(i).style.height = width + 'px';\n  }\n}; //Show more images button\n\n\nwindow.ShowMore = function ShowMore(filterValue, arrayPosition, idGeneratorPosition) {\n  var Arr = JSON.parse(Http.responseText);\n  var Arr2 = Arr.images;\n  var out = \"\";\n  var id = idGeneratorPosition;\n  var loadedImages = 0; //param to count how many images are loaded after click on \"show more\" button.\n\n  var allImagesLoaded = Arr2.length;\n  var counter = 0; //this param is some kind of helper to choose in if statment which picture will have class box1 or box2, in filter fuction it works on modulo\n\n  for (i = arrayPosition; i < Arr2.length && loadedImages < 10; i++) {\n    if (Arr2[i].site === filterValue || filterValue === 'all') {\n      if (counter === 4 || counter === 9) {\n        out += '<div class=\"imgcontainer ' + Arr2[i].site + ' box2\">' + '<img class = \"img\" src=\"' + Arr2[i].url + '\">' + '</div>';\n        loadedImages++;\n      } else {\n        out += '<div id =' + '\"' + id + '\"' + ' class=\"imgcontainer ' + Arr2[i].site + ' box1\">' + '<img class = \"img\" src=\"' + Arr2[i].url + '\">' + '</div>';\n        id++;\n        loadedImages++;\n      }\n\n      counter++;\n\n      if (counter === 10) {\n        counter = 0;\n      }\n    }\n\n    GlobalArrayState = i + 1;\n    GlobalId = id;\n\n    if (i + 1 === allImagesLoaded) {\n      removeShowMore();\n    }\n  }\n\n  document.getElementById(\"container\").lastChild.insertAdjacentHTML('afterend', out);\n  keepObjectsSquare();\n};\n\nvar GlobalId;\nvar GlobalArrayState;\nvar GlobalFilterValue;\n\nwindow.Clicked = function Clicked() {\n  ShowMore(GlobalFilterValue, GlobalArrayState, GlobalId);\n};\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/index.scss */\"./src/scss/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/scss/index.scss?");

/***/ })

/******/ });