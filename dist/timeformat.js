/*!
 * time-format
 * @version 0.0.1
 * @see https://github.com/varjay/
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TimeFormat"] = factory();
	else
		root["TimeFormat"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


function getwhen (timestamp) {
  var dd = new Date()
  var now = dd.getTime()
  var todayStart = `${dd.getFullYear()}/${dd.getMonth() + 1}/${dd.getDate()} 00:00:00`
  todayStart = new Date(todayStart).getTime()
  var diff = now - timestamp
  // console.log(now)
  /*
   * 小于分钟、小于小时、小于一天、小于两天、小于7天
   * 60000    3600000 86400000 172800000 604800000
   **/
  if (diff < 6000) {
    return 'seconds'
  } else if (diff < 3600000) {
    return 'minutes'
  } else if (timestamp >= todayStart) {
    return 'today'
  } else if (timestamp > todayStart - 86400000) {
    return 'yesterday'
  } else if (timestamp > todayStart - 604800000) {
    return 'week'
  } else {
    return 'full'
  }
}

function TimeFormat(format, time, options) {
  var timestamp = time
  var date
  if ((typeof time) === 'string' && time.length !== 13) {
    // 日期转为时间戳
    time = time.replace(/-/g, '/')
    timestamp = new Date(time).getTime()
  }
  date = new Date(timestamp * 1)

  var year = date.getFullYear()     // 获取完整的年份(4位,1970-????)
  var month = date.getMonth() + 1   // 获取当前月份(0-11,0代表1月)
  var day = date.getDate()          // 获取当前日(1-31)
  var week = date.getDay()          // 获取当前星期X(0-6,0代表星期天)
  var hours = date.getHours()       // 获取当前小时数(0-23)
  var minutes = date.getMinutes()   // 获取当前分钟数(0-59)
  var seconds = date.getSeconds()   // 获取当前秒数(0-59)

  var localLang = navigator.language.replace(/-/g, '').toLowerCase()
  var Lang
  var template
  var type = getwhen(timestamp)
  // console.log(type)
  switch (localLang) {
    case 'zhcn': Lang = _lang_index__WEBPACK_IMPORTED_MODULE_0__["default"].zhcn; break
    default: Lang = _lang_index__WEBPACK_IMPORTED_MODULE_0__["default"].en
  }

  if (format === 'detail' || format === 'short' || format === 'ago') {
    let _type
    if (type === 'seconds' || type === 'minutes') {
      _type = 'today'
    } else {
      _type = type
    }
    var local = new Lang(month, week)
    template = local.getFormat(format, _type)
    format = template
  }
  format = format.replace('yyyy', year)
  format = format.replace('MM', month < 10 ? '0' + month : month)
  format = format.replace('dd', day < 10 ? '0' + day : day)
  format = format.replace('HH', hours < 10 ? '0' + hours : hours)
  format = format.replace('mm', minutes < 10 ? '0' + minutes : minutes)

  format = format.replace('ss', seconds < 10 ? '0' + seconds : seconds)
  return format
}

TimeFormat.Version = '0.0.1'

/* harmony default export */ __webpack_exports__["default"] = (TimeFormat);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _zhcn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["default"] = ({
  en: _en__WEBPACK_IMPORTED_MODULE_0__["default"],
  zhcn: _zhcn__WEBPACK_IMPORTED_MODULE_1__["default"]
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class lang {
  constructor (month, week) {
    this.m1 = 'jan'
    this.m2 = 'feb'
    this.m3 = 'mar'
    this.m4 = 'apr'
    this.m5 = 'may'
    this.m6 = 'jun'
    this.m7 = 'jul'
    this.m8 = 'aug'
    this.m9 = 'sept'
    this.m10 = 'oct'
    this.m11 = 'nov'
    this.m12 = 'dec'
    this.w0 = 'Sunday'
    this.w1 = 'Monday'
    this.w2 = 'Tuesday'
    this.w3 = 'Wednesday'
    this.w4 = 'Thursday'
    this.w5 = 'Friday'
    this.w6 = 'Saturday'
    this.yesterday = 'Yesterday'

    this.detail = {
      full: `dd ${this['m' + month]} yyyy HH:mm`,
      week: `${this['w' + week]} HH:mm`,
      yesterday: `${this.yesterday} HH:mm`,
      today: 'HH:mm'
    }
    this.short = {
      full: 'yyyy/MM/dd',
      week: this['w' + week],
      yesterday: this.yesterday,
      today: 'HH:mm'
    }
  }
  getFormat (mode, type) {
    return this[mode][type]
  }
}
/* harmony default export */ __webpack_exports__["default"] = (lang);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class lang {
  constructor (month, week) {
    this.week = week
    this.w0 = '星期日'
    this.w1 = '星期一'
    this.w2 = '星期二'
    this.w3 = '星期三'
    this.w4 = '星期四'
    this.w5 = '星期五'
    this.w6 = '星期六'
    this.yesterday = '昨天'

    this.detail = {
      full: 'yyyy年MM月dd日 HH:mm',
      week: `${this['w' + week]} HH:mm`,
      yesterday: `${this.yesterday} HH:mm`,
      today: 'HH:mm'
    }
    this.short = {
      full: 'yyyy/MM/dd',
      week: this['w' + week],
      yesterday: this.yesterday,
      today: 'HH:mm'
    }
  }
  getFormat (mode, type) {
    return this[mode][type]
  }
}
/* harmony default export */ __webpack_exports__["default"] = (lang);

/***/ })
/******/ ])["default"];
});