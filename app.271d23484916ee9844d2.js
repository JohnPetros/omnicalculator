/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 998:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/386ea08ab891d163a8b4.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/

;// CONCATENATED MODULE: ./src/utils/navigation.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Navigation = /*#__PURE__*/function () {
  function Navigation(routes) {
    _classCallCheck(this, Navigation);
    this.routes = routes;
  }
  return _createClass(Navigation, [{
    key: "navigate",
    value: function navigate(path) {
      var _this$routes$path;
      var route = (_this$routes$path = this.routes[path]) !== null && _this$routes$path !== void 0 ? _this$routes$path : this.routes['/not-found'];
      document.body.innerHTML = route.page;
      setTimeout(function () {
        new route.view();
      }, 500);
    }
  }, {
    key: "handleNavigate",
    value: function handleNavigate() {
      var _this = this;
      setTimeout(function () {
        var links = document.querySelectorAll("[data-navigation='link']");
        if (!links.length) return;
        var _iterator = _createForOfIteratorHelper(links),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var link = _step.value;
            link.addEventListener('click', function (event) {
              return _this.handleLinkClick(event);
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }, 1000);
    }
  }, {
    key: "handleLinkClick",
    value: function handleLinkClick(event) {
      event.preventDefault();
      window.history.pushState({}, "", event.target.href);
      var routeName = event.target.href.split('/').at(-1);
      this.navigate("/".concat(routeName));
      var customLoadEvent = new Event('navigate');
      document.dispatchEvent(customLoadEvent);
    }
  }]);
}();
;// CONCATENATED MODULE: ./src/utils/form.js
function form_typeof(o) { "@babel/helpers - typeof"; return form_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, form_typeof(o); }
function form_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = form_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function form_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return form_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? form_arrayLikeToArray(r, a) : void 0; } }
function form_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function form_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function form_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, form_toPropertyKey(o.key), o); } }
function form_createClass(e, r, t) { return r && form_defineProperties(e.prototype, r), t && form_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function form_toPropertyKey(t) { var i = form_toPrimitive(t, "string"); return "symbol" == form_typeof(i) ? i : i + ""; }
function form_toPrimitive(t, r) { if ("object" != form_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != form_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _onSubmit = /*#__PURE__*/new WeakMap();
var _calculator = /*#__PURE__*/new WeakMap();
var Form = /*#__PURE__*/function () {
  function Form(calculator) {
    var _this = this;
    form_classCallCheck(this, Form);
    _classPrivateFieldInitSpec(this, _onSubmit, void 0);
    _classPrivateFieldInitSpec(this, _calculator, void 0);
    _classPrivateFieldSet(_calculator, this, calculator);
    var form = document.querySelector("[data-".concat(_classPrivateFieldGet(_calculator, this), "='form']"));
    if (!form) return;
    this.form = form;
    this.form.addEventListener("submit", function (event) {
      return _this.handleFormSubmit(event);
    });
  }
  return form_createClass(Form, [{
    key: "clear",
    value: function clear() {
      this.form.reset();
    }
  }, {
    key: "clearField",
    value: function clearField(fieldName) {
      var field = this.form.querySelector("[data-".concat(_classPrivateFieldGet(_calculator, this), "='").concat(fieldName, "']"));
      if (field) field.value = "";
    }
  }, {
    key: "setField",
    value: function setField(fieldName, value) {
      var field = this.form.querySelector("[data-".concat(_classPrivateFieldGet(_calculator, this), "='").concat(fieldName, "']"));
      if (field) field.value = value;
    }
  }, {
    key: "focusField",
    value: function focusField(fieldName) {
      var field = this.form.querySelector("[data-".concat(_classPrivateFieldGet(_calculator, this), "='").concat(fieldName, "']"));
      if (field) field.focus();
    }
  }, {
    key: "getField",
    value: function getField(fieldName) {
      var field = this.form.querySelector("[data-".concat(_classPrivateFieldGet(_calculator, this), "='").concat(fieldName, "']"));
      return field !== null && field !== void 0 ? field : null;
    }
  }, {
    key: "getFields",
    value: function getFields(fieldName) {
      var fields = this.form.querySelectorAll("[data-".concat(_classPrivateFieldGet(_calculator, this), "='").concat(fieldName, "']"));
      return fields;
    }
  }, {
    key: "getCheckboxGroupValues",
    value: function getCheckboxGroupValues(groupName) {
      var checkedCheckboxes = [];
      var checkboxes = this.form.querySelectorAll("[data-".concat(_classPrivateFieldGet(_calculator, this), "='").concat(groupName, "']"));
      var _iterator = form_createForOfIteratorHelper(checkboxes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var checkbox = _step.value;
          if (checkbox.checked) checkedCheckboxes.push(checkbox.value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return checkedCheckboxes;
    }
  }, {
    key: "getRadioGroupValue",
    value: function getRadioGroupValue(groupName) {
      var radios = this.form.querySelectorAll("[data-".concat(_classPrivateFieldGet(_calculator, this), "='").concat(groupName, "']"));
      var _iterator2 = form_createForOfIteratorHelper(radios),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var radio = _step2.value;
          if (radio.checked) return radio.value;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "showForm",
    value: function showForm() {
      this.form.classList.remove('hidden');
    }
  }, {
    key: "showInputError",
    value: function showInputError(inputField, errorMessage) {
      var error = document.createElement('p');
      error.classList.add('input__error');
      error.textContent = errorMessage;
      inputField.parentElement.parentElement.append(error);
    }
  }, {
    key: "removeErrors",
    value: function removeErrors() {
      var errors = this.form.querySelectorAll('.input__error');
      var _iterator3 = form_createForOfIteratorHelper(errors),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var error = _step3.value;
          error.remove();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit(event) {
      event.preventDefault();
      this.removeErrors();
      if (typeof _classPrivateFieldGet(_onSubmit, this) === 'function') _classPrivateFieldGet(_onSubmit, this).call(this);
    }
  }, {
    key: "onSubmit",
    set: function set(onSubmit) {
      _classPrivateFieldSet(_onSubmit, this, onSubmit);
    }
  }]);
}();
;// CONCATENATED MODULE: ./src/utils/document.js
function document_typeof(o) { "@babel/helpers - typeof"; return document_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, document_typeof(o); }
function document_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function document_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, document_toPropertyKey(o.key), o); } }
function document_createClass(e, r, t) { return r && document_defineProperties(e.prototype, r), t && document_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function document_toPropertyKey(t) { var i = document_toPrimitive(t, "string"); return "symbol" == document_typeof(i) ? i : i + ""; }
function document_toPrimitive(t, r) { if ("object" != document_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != document_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function document_classPrivateFieldInitSpec(e, t, a) { document_checkPrivateRedeclaration(e, t), t.set(e, a); }
function document_checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function document_classPrivateFieldGet(s, a) { return s.get(document_assertClassBrand(s, a)); }
function document_classPrivateFieldSet(s, a, r) { return s.set(document_assertClassBrand(s, a), r), r; }
function document_assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _dataset = /*#__PURE__*/new WeakMap();
var Document = /*#__PURE__*/function () {
  function Document(dataset) {
    document_classCallCheck(this, Document);
    document_classPrivateFieldInitSpec(this, _dataset, void 0);
    document_classPrivateFieldSet(_dataset, this, dataset);
  }
  return document_createClass(Document, [{
    key: "select",
    value: function select(elementName) {
      return document.querySelector("[data-".concat(document_classPrivateFieldGet(_dataset, this), "='").concat(elementName, "']"));
    }
  }]);
}();
;// CONCATENATED MODULE: ./src/pages/bmi-calculator/bmi-calculator-view.js
function bmi_calculator_view_typeof(o) { "@babel/helpers - typeof"; return bmi_calculator_view_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, bmi_calculator_view_typeof(o); }
function bmi_calculator_view_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function bmi_calculator_view_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, bmi_calculator_view_toPropertyKey(o.key), o); } }
function bmi_calculator_view_createClass(e, r, t) { return r && bmi_calculator_view_defineProperties(e.prototype, r), t && bmi_calculator_view_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function bmi_calculator_view_toPropertyKey(t) { var i = bmi_calculator_view_toPrimitive(t, "string"); return "symbol" == bmi_calculator_view_typeof(i) ? i : i + ""; }
function bmi_calculator_view_toPrimitive(t, r) { if ("object" != bmi_calculator_view_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != bmi_calculator_view_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var BmiCalculatorView = /*#__PURE__*/function () {
  function BmiCalculatorView() {
    var _this = this;
    bmi_calculator_view_classCallCheck(this, BmiCalculatorView);
    this.form = new Form("bmi-calculator");
    this.document = new Document("bmi-calculator");
    this.form.onSubmit = function () {
      return _this.handleFormSubmit();
    };
  }
  return bmi_calculator_view_createClass(BmiCalculatorView, [{
    key: "calculate",
    value: function calculate(weight, height) {
      var bmi = weight / Math.pow(height / 100, 2);
      return parseFloat(bmi.toFixed(2));
    }
  }, {
    key: "getStatus",
    value: function getStatus(bmi) {
      if (bmi <= 16) return "Baixo peso grave";
      if (bmi <= 18.49) return "Baixo peso";
      if (bmi <= 24.99) return "Peso normal";
      if (bmi <= 29.99) return "Sobrepeso";
      if (bmi <= 34.99) return "Obesidade grau I";
      if (bmi <= 39.99) return "Obesidade grau II";
      return "Obesidade grau III";
    }
  }, {
    key: "hidePlaceholder",
    value: function hidePlaceholder() {
      var displayElement = this.document.select("placeholder");
      if (!displayElement) return;
      displayElement.classList.add('hidden');
    }
  }, {
    key: "showDisplay",
    value: function showDisplay() {
      var displayElement = this.document.select("display");
      if (!displayElement) return;
      if (displayElement) displayElement.classList.remove('hidden');
    }
  }, {
    key: "renderResult",
    value: function renderResult(bmi, username) {
      var weightStatus = this.getStatus(bmi);
      this.hidePlaceholder();
      this.showDisplay();
      var messageElement = this.document.select("message");
      var statusElement = this.document.select("status");
      var bmiElement = this.document.select("bmi");
      messageElement.textContent = "".concat(username, ", voc\xEA possui um \xEDndice de massa corporal igual a ").concat(bmi, ", sendo classificado como:");
      statusElement.textContent = weightStatus;
      bmiElement.textContent = "".concat(bmi, " KG/M\xB2");
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit() {
      var usernameField = this.form.getField("username");
      var weightField = this.form.getField("weight");
      var heightField = this.form.getField("height");
      if (!weightField.value || !heightField.value) return;
      var username = usernameField.value;
      var weight = parseFloat(weightField.value);
      var height = parseFloat(heightField.value);
      var bmi = this.calculate(weight, height);
      this.renderResult(bmi, username);
      this.form.clear();
      usernameField.value = username;
      this.form.focusField("height");
    }
  }]);
}();
;// CONCATENATED MODULE: ./src/pages/bmi-calculator/index.html
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(998), __webpack_require__.b);
// Module
var code = `<main class="calculator"> <div class="calculator__controls"> <h1 class="calculator__title"> Calculadora de IMC </h1> <form data-bmi-calculator="form" action class="calculator__form"> <div class="input"> <label for="username" class="input__label">Nome</label> <div class="input__field-container"> <div class="input__icon"> <i class="ph-bold ph-user"></i> </div> <input data-bmi-calculator="username" id="username" type="text" autofocus required class="input__field"> </div> </div> <div class="input"> <label for="height" class="input__label">Altura (cm)</label> <div class="input__field-container"> <div class="input__icon"> <i class="ph-bold ph-ruler"></i> </div> <input data-bmi-calculator="height" type="number" required class="input__field"> </div> </div> <div class="input"> <label for="weight" class="input__label">Peso (Kg)</label> <div class="input__field-container"> <div class="input__icon"> <i class="ph-bold ph-metronome"></i> </div> <input data-bmi-calculator="weight" type="number" required class="input__field"> </div> </div> <button type="submit" class="button"> <i class="ph-bold ph-calculator button__icon"></i> Calcular </button> </form> </div> <div class="calculator__result"> <div data-bmi-calculator="placeholder" class="calculator__result-placeholder"> <img src="${___HTML_LOADER_IMPORT_0___}" width="192" height="192" alt="calculator"> <h2 class="calculator__result-title">Resultados serão mostrados aqui </h2> <p class="calculator__result-message"> Complete o formulário e clique em "calcular" para ver o resultado. </p> </div> <div data-bmi-calculator="display" class="calculator__result-display hidden"> <h2 class="calculator__result-title"> Resultado </h2> <p data-bmi-calculator="message" class="calculator__result-message"> </p> <div class="display"> <strong data-bmi-calculator="status" class="display__value"> </strong> <span class="display__divisor"></span> <div> <p class="display__message"> Seu índice de massa corporal </p> <strong data-bmi-calculator="bmi" class="calculator__result-title"> 1,799.74 KG/M²</strong> </div> </div> </div> </div> </main> <nav class="navigation"> <ul class="navigation__links"> <li> <a data-navigation="link" href="age-group-calculator" class="navigation__link"> Calculadora de Faixa Etária </a> </li> <li> <a data-navigation="link" href="average-calculator" class="navigation__link"> Calculadora de Média Escolar </a> </li> <li> <a data-navigation="link" href="shipping-calculator" class="navigation__link"> Calculadora de Frete </a> </li> <li> <a data-navigation="link" href="payroll-calculator" class="navigation__link"> Calculadora de Folha de Pagamento </a> </li> </ul> </nav> `;
// Exports
/* harmony default export */ const bmi_calculator = (code);
;// CONCATENATED MODULE: ./src/pages/bmi-calculator/page.js



;// CONCATENATED MODULE: ./src/pages/age-group-calculator/age-group-calculator-view.js
function age_group_calculator_view_typeof(o) { "@babel/helpers - typeof"; return age_group_calculator_view_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, age_group_calculator_view_typeof(o); }
function age_group_calculator_view_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function age_group_calculator_view_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, age_group_calculator_view_toPropertyKey(o.key), o); } }
function age_group_calculator_view_createClass(e, r, t) { return r && age_group_calculator_view_defineProperties(e.prototype, r), t && age_group_calculator_view_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function age_group_calculator_view_toPropertyKey(t) { var i = age_group_calculator_view_toPrimitive(t, "string"); return "symbol" == age_group_calculator_view_typeof(i) ? i : i + ""; }
function age_group_calculator_view_toPrimitive(t, r) { if ("object" != age_group_calculator_view_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != age_group_calculator_view_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var AgeGroupCalculatorView = /*#__PURE__*/function () {
  function AgeGroupCalculatorView() {
    var _this = this;
    age_group_calculator_view_classCallCheck(this, AgeGroupCalculatorView);
    this.form = new Form("age-group-calculator");
    this.document = new Document("age-group-calculator");
    var startButton = this.document.select("start-button");
    var retartButton = this.document.select("restart-button");
    startButton.addEventListener('click', function (event) {
      return _this.handleStartButtonClick(event.currentTarget);
    });
    retartButton.addEventListener('click', function () {
      return _this.handleRestartButtonClick();
    });
    this.form.onSubmit = function () {
      return _this.handleFormSubmit();
    };
  }
  return age_group_calculator_view_createClass(AgeGroupCalculatorView, [{
    key: "getGroup",
    value: function getGroup(age) {
      var ageRanges = [{
        start: 0,
        end: 14,
        group: 'criança'
      }, {
        start: 15,
        end: 29,
        group: 'jovem'
      }, {
        start: 30,
        end: 60,
        group: 'adulto'
      }];
      for (var _i = 0, _ageRanges = ageRanges; _i < _ageRanges.length; _i++) {
        var range = _ageRanges[_i];
        if (age >= range.start && age <= range.end) {
          return range.group;
        }
      }
      return "idoso";
    }
  }, {
    key: "hidePlaceholder",
    value: function hidePlaceholder() {
      var displayElement = this.document.select("placeholder");
      if (!displayElement) return;
      displayElement.classList.add('hidden');
    }
  }, {
    key: "showDisplay",
    value: function showDisplay() {
      var displayElement = this.document.select("display");
      if (!displayElement) return;
      if (displayElement) displayElement.classList.remove('hidden');
    }
  }, {
    key: "renderResult",
    value: function renderResult(username, age) {
      var group = this.getGroup(age);
      this.hidePlaceholder();
      this.showDisplay();
      var messageElement = this.document.select("message");
      var groupElement = this.document.select("group");
      messageElement.textContent = "".concat(username, ", voc\xEA tem ").concat(age, " anos e \xE9 classificado como:");
      groupElement.textContent = group.toUpperCase();
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit() {
      var usernameField = this.form.getField("username");
      var ageField = this.form.getField("age");
      if (!ageField || !usernameField) return;
      if (Number(ageField.value) < 0) {
        this.form.showInputError(ageField, "Idade não pode ser valor negativo");
        return;
      }
      this.renderResult(usernameField.value, ageField.value);
      this.form.clearField("age");
      this.form.focusField("age");
    }
  }, {
    key: "handleRestartButtonClick",
    value: function handleRestartButtonClick() {
      location.reload();
    }
  }, {
    key: "handleStartButtonClick",
    value: function handleStartButtonClick(button) {
      button.parentElement.remove();
      this.form.showForm();
    }
  }]);
}();
;// CONCATENATED MODULE: ./src/pages/age-group-calculator/index.html
// Imports
var age_group_calculator_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(998), __webpack_require__.b);
// Module
var age_group_calculator_code = `<main class="calculator"> <div class="calculator__controls"> <h1 class="calculator__title"> Calculadora de Faixa Etária </h1> <form data-age-group-calculator="form" class="calculator__form hidden"> <div class="input"> <label for="username" class="input__label">Nome</label> <div class="input__field-container"> <div class="input__icon"> <i class="ph-bold ph-user"></i> </div> <input data-age-group-calculator="username" id="username" type="text" name="username" autofocus required class="input__field"> </div> </div> <div class="input"> <label for="age" class="input__label">Idade</label> <div class="input__field-container"> <div class="input__icon"> <i class="ph-bold ph-square-logo"></i> </div> <input data-age-group-calculator="age" id="age" type="number" name="age" autofocus required class="input__field"> </div> </div> <div data-age-group-calculator="buttons-group" class="calculator__buttons-group"> <button data-age-group-calculator="calculate-button" type="submit" class="button"> <i class="ph-bold ph-calculator button__icon"></i> Calcular </button> <button data-age-group-calculator="restart-button" type="button" class="button"> <i class="ph-bold ph-arrow-counter-clockwise button__icon"></i> Parar </button> </div> </form> <div class="calculator__button-container"> <button data-age-group-calculator="start-button" type="button" class="button"> <i class="ph-bold ph-play button__icon"></i> Iniciar </button> </div> </div> <div class="calculator__result"> <div data-age-group-calculator="placeholder" class="calculator__result-placeholder"> <img src="${age_group_calculator_HTML_LOADER_IMPORT_0_}" width="192" height="192" alt="calculator"> <h2 class="calculator__result-title">Resultados serão mostrados aqui </h2> <p class="calculator__result-message"> Complete o formulário e clique em "calcular" para ver o resultado. </p> </div> <div data-age-group-calculator="display" class="calculator__result-display hidden"> <h2 class="calculator__result-title"> Resultado </h2> <p data-age-group-calculator="message" class="calculator__result-message"> </p> <div class="display"> <strong data-age-group-calculator="group" class="display__value"> </strong> <span class="display__divisor"></span> </div> </div> </div> </main> <nav class="navigation"> <ul class="navigation__links"> <li> <a data-navigation="link" href="bmi-calculator" class="navigation__link"> Calculadora de IMC </a> </li> <li> <a data-navigation="link" href="average-calculator" class="navigation__link"> Calculadora de Média Escolar </a> </li> <li> <a data-navigation="link" href="shipping-calculator" class="navigation__link"> Calculadora de Frete </a> </li> <li> <a data-navigation="link" href="payroll-calculator" class="navigation__link"> Calculadora de Folha de Pagamento </a> </li> </ul> </nav> `;
// Exports
/* harmony default export */ const age_group_calculator = (age_group_calculator_code);
;// CONCATENATED MODULE: ./src/pages/age-group-calculator/page.js



;// CONCATENATED MODULE: ./src/pages/average-calculator/average-calculator-view.js
function average_calculator_view_typeof(o) { "@babel/helpers - typeof"; return average_calculator_view_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, average_calculator_view_typeof(o); }
function average_calculator_view_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = average_calculator_view_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function average_calculator_view_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return average_calculator_view_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? average_calculator_view_arrayLikeToArray(r, a) : void 0; } }
function average_calculator_view_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function average_calculator_view_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function average_calculator_view_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, average_calculator_view_toPropertyKey(o.key), o); } }
function average_calculator_view_createClass(e, r, t) { return r && average_calculator_view_defineProperties(e.prototype, r), t && average_calculator_view_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = average_calculator_view_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function average_calculator_view_toPropertyKey(t) { var i = average_calculator_view_toPrimitive(t, "string"); return "symbol" == average_calculator_view_typeof(i) ? i : i + ""; }
function average_calculator_view_toPrimitive(t, r) { if ("object" != average_calculator_view_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != average_calculator_view_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var AverageCalculatorView = /*#__PURE__*/function () {
  function AverageCalculatorView() {
    var _this = this;
    average_calculator_view_classCallCheck(this, AverageCalculatorView);
    _defineProperty(this, "numberOfInputGroups", 3);
    this.form = new Form("average-calculator");
    this.document = new Document("average-calculator");
    var startButton = this.document.select("start-button");
    var retartButton = this.document.select("restart-button");
    var addInputGroupButton = this.document.select("add-input-group-button");
    startButton.addEventListener('click', function (event) {
      return _this.handleStartButtonClick(event.currentTarget);
    });
    retartButton.addEventListener('click', function () {
      return _this.handleRestartButtonClick();
    });
    addInputGroupButton.addEventListener('click', function () {
      return _this.handleAddInputGroupButtonClick();
    });
    this.form.onSubmit = function () {
      return _this.handleFormSubmit();
    };
  }
  return average_calculator_view_createClass(AverageCalculatorView, [{
    key: "calculate",
    value: function calculate(gradesAndWeights, totalWeight) {
      var average = 0;
      var _iterator = average_calculator_view_createForOfIteratorHelper(gradesAndWeights),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
            grade = _step$value.grade,
            weight = _step$value.weight;
          average += grade * weight;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return average / totalWeight;
    }
  }, {
    key: "getStatus",
    value: function getStatus(average) {
      if (average <= 5) return "F";
      if (average <= 6) return "E";
      if (average <= 7) return "D";
      if (average <= 8) return "C";
      if (average <= 9) return "B";
      return "A";
    }
  }, {
    key: "hidePlaceholder",
    value: function hidePlaceholder() {
      var displayElement = this.document.select("placeholder");
      if (!displayElement) return;
      displayElement.classList.add('hidden');
    }
  }, {
    key: "showDisplay",
    value: function showDisplay() {
      var displayElement = this.document.select("display");
      if (!displayElement) return;
      if (displayElement) displayElement.classList.remove('hidden');
    }
  }, {
    key: "renderResult",
    value: function renderResult(average) {
      var status = this.getStatus(average);
      this.hidePlaceholder();
      this.showDisplay();
      var messageElement = this.document.select("message");
      var statusElement = this.document.select("status");
      var averageElement = this.document.select("average");
      messageElement.textContent = "Sua m\xE9dia ponderada \xE9 ".concat(average.toFixed(2), ", sendo classificada como:");
      statusElement.textContent = status;
      averageElement.textContent = average.toFixed(2);
    }
  }, {
    key: "appendInputGroup",
    value: function appendInputGroup(number) {
      var inputGroups = this.document.select("inputs-groups");
      var inputGroup = "\n    <div class=\"calculator__input-group\">\n       <div class=\"input\">\n         <label for=\"grade-".concat(number, "\" class=\"input__label\">Nota ").concat(number, "</label>\n         <div class=\"input__field-container\">\n           <div class=\"input__icon\">\n             <i class=\"ph-bold ph-exam\"></i>\n           </div>\n           <input\n             data-average-calculator=\"grade-").concat(number, "\"\n             id=\"grade-").concat(number, "\"\n             type=\"number\"\n             name=\"grade-").concat(number, "\"\n             autofocus\n             required\n             class=\"input__field\">\n         </div>\n       </div>\n\n       <div class=\"input\">\n         <label for=\"weight-2\" class=\"input__label\">Peso ").concat(number, "</label>\n         <div class=\"input__field-container\">\n           <div class=\"input__icon\">\n             <i class=\"ph-bold ph-barbell\"></i>\n           </div>\n           <input\n             data-average-calculator=\"weight-").concat(number, "\"\n             id=\"weight-").concat(number, "\"\n             type=\"number\"\n             name=\"weight-").concat(number, "\"\n             required\n             class=\"input__field\">\n         </div>\n       </div>\n   </div>");
      inputGroups.innerHTML += inputGroup;
    }
  }, {
    key: "renderInputGroups",
    value: function renderInputGroups() {
      for (var number = 1; number <= this.numberOfInputGroups; number++) {
        this.appendInputGroup(number);
      }
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit() {
      var gradesAndWeights = [];
      var totalWeight = 0;
      var hasErrors = false;
      for (var number = 1; number <= this.numberOfInputGroups; number++) {
        var gradeField = this.form.getField("grade-".concat(number));
        var weightField = this.form.getField("weight-".concat(number));
        var grade = parseInt(gradeField.value);
        var weight = parseInt(weightField.value);
        if (grade < 0 || grade > 10) {
          this.form.showInputError(gradeField, 'Nota não está entre 0 e 10');
          hasErrors = true;
        }
        if (weight < 1 || weight > 10) {
          this.form.showInputError(weightField, 'Peso não está entre 1 e 10');
          hasErrors = true;
        }
        gradesAndWeights.push({
          grade: grade,
          weight: weight
        });
        totalWeight += weight;
      }
      if (hasErrors) return;
      var average = this.calculate(gradesAndWeights, totalWeight);
      this.renderResult(average);
      this.form.focusField("grade-1");
    }
  }, {
    key: "handleAddInputGroupButtonClick",
    value: function handleAddInputGroupButtonClick() {
      this.numberOfInputGroups++;
      this.appendInputGroup(this.numberOfInputGroups);
    }
  }, {
    key: "handleRestartButtonClick",
    value: function handleRestartButtonClick() {
      location.reload();
    }
  }, {
    key: "handleStartButtonClick",
    value: function handleStartButtonClick(button) {
      button.parentElement.remove();
      this.form.showForm();
      this.renderInputGroups();
    }
  }]);
}();
;// CONCATENATED MODULE: ./src/pages/average-calculator/index.html
// Imports
var average_calculator_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(998), __webpack_require__.b);
// Module
var average_calculator_code = `<main class="calculator"> <div class="calculator__controls"> <h1 class="calculator__title"> Calculadora de Média Escolar </h1> <form data-average-calculator="form" class="calculator__form hidden"> <div data-average-calculator="inputs-groups" class="calculator__inputs-groups"> </div> <div data-average-calculator="buttons-group" class="calculator__buttons-group"> <button data-average-calculator="add-input-group-button" type="button" class="button"> <i class="ph-bold ph-plus button__icon"></i> Adicionar </button> <button data-average-calculator="calculate-button" type="bmit" class="button"> <i class="ph-bold ph-calculator button__icon"></i> Calcular </button> <button data-average-calculator="restart-button" type="button" class="button"> <i class="ph-bold ph-arrow-counter-clockwise button__icon"></i> Parar </button> </div> </form> <div class="calculator__button-container"> <button data-average-calculator="start-button" type="button" class="button"> <i class="ph-bold ph-play button__icon"></i> Iniciar </button> </div> </div> <div class="calculator__result"> <div data-average-calculator="placeholder" class="calculator__result-placeholder"> <img src="${average_calculator_HTML_LOADER_IMPORT_0_}" width="192" height="192" alt="calculator"> <h2 class="calculator__result-title">Resultados serão mostrados aqui </h2> <p class="calculator__result-message"> Complete o formulário e clique em "calcular" para ver o resultado. </p> </div> <div data-average-calculator="display" class="calculator__result-display hidden"> <h2 class="calculator__result-title"> Resultado </h2> <p data-average-calculator="message" class="calculator__result-message"> </p> <div class="display"> <strong data-average-calculator="status" class="display__value"> </strong> <span class="display__divisor"></span> <div> <p class="display__message"> Sua média ponderada </p> <strong data-average-calculator="average" class="calculator__result-title"> 1,799.74 KG/M²</strong> </div> </div> </div> </div> </main> <nav class="navigation"> <ul class="navigation__links"> <li> <a data-navigation="link" href="bmi-calculator" class="navigation__link"> Calculadora de IMC </a> </li> <li> <a data-navigation="link" href="age-group-calculator" class="navigation__link"> Calculadora de Faixa Etária </a> </li> <li> <a data-navigation="link" href="shipping-calculator" class="navigation__link"> Calculadora de Frete </a> </li> <li> <a data-navigation="link" href="payroll-calculator" class="navigation__link"> Calculadora de Folha de Pagamento </a> </li> </ul> </nav> `;
// Exports
/* harmony default export */ const average_calculator = (average_calculator_code);
;// CONCATENATED MODULE: ./src/pages/average-calculator/page.js



;// CONCATENATED MODULE: ./src/pages/shipping-calculator/shipping-calculator-view.js
function shipping_calculator_view_typeof(o) { "@babel/helpers - typeof"; return shipping_calculator_view_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, shipping_calculator_view_typeof(o); }
function shipping_calculator_view_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = shipping_calculator_view_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function shipping_calculator_view_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return shipping_calculator_view_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? shipping_calculator_view_arrayLikeToArray(r, a) : void 0; } }
function shipping_calculator_view_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function shipping_calculator_view_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function shipping_calculator_view_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, shipping_calculator_view_toPropertyKey(o.key), o); } }
function shipping_calculator_view_createClass(e, r, t) { return r && shipping_calculator_view_defineProperties(e.prototype, r), t && shipping_calculator_view_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function shipping_calculator_view_defineProperty(e, r, t) { return (r = shipping_calculator_view_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function shipping_calculator_view_toPropertyKey(t) { var i = shipping_calculator_view_toPrimitive(t, "string"); return "symbol" == shipping_calculator_view_typeof(i) ? i : i + ""; }
function shipping_calculator_view_toPrimitive(t, r) { if ("object" != shipping_calculator_view_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != shipping_calculator_view_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var ShippingCalculatorView = /*#__PURE__*/function () {
  function ShippingCalculatorView() {
    var _this = this;
    shipping_calculator_view_classCallCheck(this, ShippingCalculatorView);
    shipping_calculator_view_defineProperty(this, "REGIONS", {
      'southeast': {
        price: 1.2,
        discount: 0.12,
        name: "Sudeste"
      },
      'south': {
        price: 1.1,
        discount: 0.1,
        name: "Sul"
      },
      'west-center': {
        price: 1.15,
        discount: 0.08,
        name: "Centro Oeste"
      }
    });
    shipping_calculator_view_defineProperty(this, "FUEL_PRICE_PER_LITER", 2);
    shipping_calculator_view_defineProperty(this, "TRACKING_PRICE", 200);
    this.form = new Form("shipping-calculator");
    this.document = new Document("shipping-calculator");
    var startButton = this.document.select("start-button");
    var retartButton = this.document.select("restart-button");
    startButton.addEventListener('click', function (event) {
      return _this.handleStartButtonClick(event.currentTarget);
    });
    retartButton.addEventListener('click', function () {
      return _this.handleRestartButtonClick();
    });
    this.form.onSubmit = function () {
      return _this.handleFormSubmit();
    };
  }
  return shipping_calculator_view_createClass(ShippingCalculatorView, [{
    key: "hidePlaceholder",
    value: function hidePlaceholder() {
      var displayElement = this.document.select("placeholder");
      if (!displayElement) return;
      displayElement.classList.add('hidden');
    }
  }, {
    key: "showDisplay",
    value: function showDisplay() {
      var displayElement = this.document.select("display");
      if (!displayElement) return;
      if (displayElement) displayElement.classList.remove('hidden');
    }
  }, {
    key: "clearResults",
    value: function clearResults() {
      var resultsElement = this.document.select("results");
      resultsElement.innerHTML = "";
    }
  }, {
    key: "renderResult",
    value: function renderResult(piecesTotal, fuelTotal, hasTracking, region) {
      var resultsElement = this.document.select("results");
      var currencyFormatter = new CurrenyFormatter();
      this.hidePlaceholder();
      this.showDisplay();
      var total = piecesTotal + fuelTotal + (hasTracking ? this.TRACKING_PRICE : 0);
      var formattedTotal = currencyFormatter.format(total);
      var formattedFuelTotal = currencyFormatter.format(fuelTotal);
      var message = "O valor total do frete \xE9 de ".concat(formattedTotal, ", incluindo ").concat(formattedFuelTotal, " para combust\xEDvel");
      if (hasTracking) {
        var formattedTrackingPrice = currencyFormatter.format(this.TRACKING_PRICE);
        message += " e ".concat(formattedTrackingPrice, " para o rastreamento");
      }
      var result = "\n      <p\n        data-shipping-calculator=\"message\"\n        class=\"calculator__result-message\">\n        ".concat(message, "\n      </p>\n  \n      <div\n        class=\"display\">\n        <h3 class=\"calculator__result-title\">").concat(region, "</h3>\n        <strong\n          data-shipping-calculator=\"total\"\n          class=\"display__value\">\n          ").concat(formattedTotal, "\n        </strong>\n  \n        <span class=\"display__divisor\"></span>\n  \n        <div>\n          <p\n            class=\"display__message\">\n            Total de combust\xEDvel\n          </p>\n          <strong\n            data-shipping-calculator=\"total-fuel\"\n            class=\"calculator__result-title\">").concat(formattedFuelTotal, "\n          </strong>\n        </div>");
      resultsElement.innerHTML += result;
    }
  }, {
    key: "showButtonsGroup",
    value: function showButtonsGroup() {
      var buttonsGroup = document.querySelector("[data-age-group-calculator^='buttons-group']");
      if (!buttonsGroup) return;
      var classForHiding = buttonsGroup.dataset.ageGroupCalculator.split(":")[1];
      if (buttonsGroup) buttonsGroup.classList.remove(classForHiding);
    }
  }, {
    key: "calculatePiecesPrice",
    value: function calculatePiecesPrice(piecesCount, region) {
      var price = this.REGIONS[region].price;
      if (piecesCount > 1000) {
        var exceed = piecesCount - 1000;
        var discount = price * (1 - this.REGIONS[region].discount);
        return price * (piecesCount - exceed) + exceed * discount;
      }
      return price * piecesCount;
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit() {
      var hasErrors = false;
      var piecesCountField = this.form.getField("pieces-count");
      var piecesCount = parseInt(piecesCountField.value);
      if (piecesCount <= 0) {
        this.form.showInputError(piecesCountField, 'Número de peças não pode ser menor ou igual a zero');
        hasErrors = true;
      }
      var distanceField = this.form.getField("distance");
      var distance = parseFloat(distanceField.value);
      if (distance <= 0) {
        this.form.showInputError(distanceField, 'Distância não pode ser menor ou igual a zero');
        hasErrors = true;
      }
      var fuelPriceField = this.form.getField("fuel-price");
      var fuelPrice = parseFloat(fuelPriceField.value);
      if (fuelPrice < 0) {
        this.form.showInputError(fuelPriceField, 'Preço do combustível não pode ser menor que zero');
        hasErrors = true;
      }
      var trackingRadiosGroupValue = this.form.getRadioGroupValue("tracking");
      var hasTracking = trackingRadiosGroupValue === "true";
      var regions = this.form.getCheckboxGroupValues("region");
      if (hasErrors) return;
      var totalFuel = fuelPrice * distance;
      if (!regions.length) return;
      this.clearResults();
      var _iterator = shipping_calculator_view_createForOfIteratorHelper(regions),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var region = _step.value;
          var totalPieces = this.calculatePiecesPrice(piecesCount, region);
          this.renderResult(totalPieces, totalFuel, hasTracking, this.REGIONS[region].name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "handleRestartButtonClick",
    value: function handleRestartButtonClick() {
      location.reload();
    }
  }, {
    key: "handleStartButtonClick",
    value: function handleStartButtonClick(button) {
      button.remove();
      this.form.showForm();
    }
  }]);
}();
;// CONCATENATED MODULE: ./src/pages/shipping-calculator/index.html
// Imports
var shipping_calculator_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(998), __webpack_require__.b);
// Module
var shipping_calculator_code = ` <main class="calculator"> <div class="calculator__controls"> <h1 class="calculator__title"> Calculadora de Frete </h1> <form data-shipping-calculator="form" class="calculator__form hidden"> <div class="input"> <label for="pieces-count" class="input__label"> Número de peças </label> <div class="input__field-container"> <div class="input__icon"> <i class="ph-bold ph-wrench"></i> </div> <input data-shipping-calculator="pieces-count" id="pieces-count" type="number" name="pieces-count" autofocus required class="input__field"> </div> </div> <div class="radio-group"> <span for="pieces-count" class="radio-group__label"> Adicionar rastreamento de entrega? </span> <div class="radio-group__group"> <label for="tracking-enabled" class="radio-group__radio"> <input data-shipping-calculator="tracking" id="tracking-enabled" type="radio" name="tracking" value="true" required checked="checked" class="radio-group__field"> <span class="radio-group__indicator"> <span class="radio-group__indicator-circle"></span> </span> <span class="radio-group__field-label"> Sim </span> </label> <label for="tracking-disabled" class="radio-group__radio"> <input data-shipping-calculator="tracking" id="tracking-disabled" type="radio" name="tracking" value="false" required class="radio-group__field"> <span class="radio-group__indicator"> <span class="radio-group__indicator-circle"></span> </span> <span class="radio-group__field-label"> Não </span> </label> </div> </div> <div class="checkbox-group"> <span class="checkbox-group__label">Região de entrega</span> <label for="southeast" class="checkbox-group__checkbox"> <input data-shipping-calculator="region" id="southeast" type="checkbox" value="southeast" checked="checked" class="checkbox-group__field"/> <span class="checkbox-group__indicator"> <span class="checkbox-group__indicator-circle"></span> </span> <span class="checkbox-group__checkbox-label"> Sudeste </span> </label> <label for="west-center" class="checkbox-group__checkbox"> <input data-shipping-calculator="region" id="west-center" type="checkbox" value="west-center" class="checkbox-group__field"/> <span class="checkbox-group__indicator"> <span class="checkbox-group__indicator-circle"></span> </span> <span class="checkbox-group__checkbox-label"> Centro Oeste </span> </label> <label for="south" class="checkbox-group__checkbox"> <input data-shipping-calculator="region" id="south" type="checkbox" value="south" class="checkbox-group__field"/> <span class="checkbox-group__indicator"> <span class="checkbox-group__indicator-circle"></span> </span> <span class="checkbox-group__checkbox-label"> Sul </span> </label> </div> <div class="input"> <label for="distance" class="input__label"> Preço do combustível (R\$) </label> <div class="input__field-container"> <div class="input__icon"> <i class="ph-bold ph-gas-pump"></i> </div> <input data-shipping-calculator="fuel-price" id="fuel-price" type="number" name="fuel-price" autofocus required class="input__field"> </div> </div> <div class="input"> <label for="distance" class="input__label"> Distância (Km) </label> <div class="input__field-container"> <div class="input__icon"> <i class="ph-bold ph-truck"></i> </div> <input data-shipping-calculator="distance" id="distance" type="number" name="distance" autofocus required class="input__field"> </div> </div> <div data-shipping-calculator="buttons-group" class="calculator__buttons-group"> <button data-shipping-calculator="calculate-button" type="bmit" class="button"> <i class="ph-bold ph-calculator button__icon"></i> Calcular </button> <button data-shipping-calculator="restart-button" type="button" class="button"> <i class="ph-bold ph-arrow-counter-clockwise button__icon"></i> Parar </button> </div> </form> <div class="calculator__button-container"> <button data-shipping-calculator="start-button" type="button" class="button"> <i class="ph-bold ph-play button__icon"></i> Iniciar </button> </div> </div> <div class="calculator__result"> <div data-shipping-calculator="placeholder" class="calculator__result-placeholder"> <img src="${shipping_calculator_HTML_LOADER_IMPORT_0_}" width="192" height="192" alt="calculator"> <h2 class="calculator__result-title"> Resultados serão mostrados aqui </h2> <p class="calculator__result-message"> Complete o formulário e clique em "calcular" para ver o resultado. </p> </div> <div data-shipping-calculator="display" class="calculator__result-display hidden"> <h2 class="calculator__result-title"> Resultados </h2> <span data-shipping-calculator="results" class="calculator__result-display"> </span> </div> </div> </main> <nav class="navigation"> <ul class="navigation__links"> <li> <a data-navigation="link" href="bmi-calculator" class="navigation__link"> Calculadora de IMC </a> </li> <li> <a data-navigation="link" href="age-group-calculator" class="navigation__link"> Calculadora de Faixa Etária </a> </li> <li> <a data-navigation="link" href="average-calculator" class="navigation__link"> Calculadora de Média Escolar </a> </li> <li> <a data-navigation="link" href="payroll-calculator" class="navigation__link"> Calculadora de Folha de Pagamento </a> </li> </ul> </nav> `;
// Exports
/* harmony default export */ const shipping_calculator = (shipping_calculator_code);
;// CONCATENATED MODULE: ./src/pages/shipping-calculator/page.js



;// CONCATENATED MODULE: ./src/pages/payroll-calculator/payroll-calculator-view.js
function payroll_calculator_view_typeof(o) { "@babel/helpers - typeof"; return payroll_calculator_view_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, payroll_calculator_view_typeof(o); }
function payroll_calculator_view_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = payroll_calculator_view_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function payroll_calculator_view_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return payroll_calculator_view_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? payroll_calculator_view_arrayLikeToArray(r, a) : void 0; } }
function payroll_calculator_view_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function payroll_calculator_view_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function payroll_calculator_view_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, payroll_calculator_view_toPropertyKey(o.key), o); } }
function payroll_calculator_view_createClass(e, r, t) { return r && payroll_calculator_view_defineProperties(e.prototype, r), t && payroll_calculator_view_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function payroll_calculator_view_defineProperty(e, r, t) { return (r = payroll_calculator_view_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function payroll_calculator_view_toPropertyKey(t) { var i = payroll_calculator_view_toPrimitive(t, "string"); return "symbol" == payroll_calculator_view_typeof(i) ? i : i + ""; }
function payroll_calculator_view_toPrimitive(t, r) { if ("object" != payroll_calculator_view_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != payroll_calculator_view_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var PayrollCalculatorView = /*#__PURE__*/function () {
  function PayrollCalculatorView() {
    var _this = this;
    payroll_calculator_view_classCallCheck(this, PayrollCalculatorView);
    payroll_calculator_view_defineProperty(this, "HOURLY_SALARY", {
      employee: {
        morning: 0.1,
        afternoon: 0.12,
        night: 0.12
      },
      manager: {
        morning: 0.2,
        afternoon: 0.25,
        night: 0.3
      }
    });
    payroll_calculator_view_defineProperty(this, "minimumSalary", 0);
    payroll_calculator_view_defineProperty(this, "workers", []);
    this.form = new Form("payroll-calculator");
    this.document = new Document("payroll-calculator");
    var startButton = this.document.select("start-button");
    var restartButton = this.document.select("restart-button");
    var calculateButton = this.document.select("calculate-button");
    startButton.addEventListener('click', function (event) {
      return _this.handleStartButtonClick(event.currentTarget);
    });
    restartButton.addEventListener('click', function () {
      return _this.handleRestartButtonClick();
    });
    calculateButton.addEventListener('click', function () {
      return _this.handleCalculateButtonClick();
    });
    this.form.onSubmit = function () {
      return _this.handleFormSubmit();
    };
  }
  return payroll_calculator_view_createClass(PayrollCalculatorView, [{
    key: "getGroup",
    value: function getGroup(age) {
      var ageRanges = [{
        start: 0,
        end: 14,
        group: 'criança'
      }, {
        start: 15,
        end: 29,
        group: 'jovem'
      }, {
        start: 30,
        end: 60,
        group: 'adulto'
      }];
      for (var _i = 0, _ageRanges = ageRanges; _i < _ageRanges.length; _i++) {
        var range = _ageRanges[_i];
        if (age >= range.start && age <= range.end) {
          return range.group;
        }
      }
    }
  }, {
    key: "formatPrice",
    value: function formatPrice(price) {
      var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
      return formatter.format(price);
    }
  }, {
    key: "hidePlaceholder",
    value: function hidePlaceholder() {
      var displayElement = this.document.select("placeholder");
      if (!displayElement) return;
      displayElement.classList.add('hidden');
    }
  }, {
    key: "showDisplay",
    value: function showDisplay() {
      var displayElement = this.document.select("display");
      if (!displayElement) return;
      if (displayElement) displayElement.classList.remove('hidden');
    }
  }, {
    key: "clearResults",
    value: function clearResults() {
      var resultsElement = this.document.select("results");
      resultsElement.innerHTML = "";
    }
  }, {
    key: "renderResults",
    value: function renderResults() {
      var payroll = 0;
      var currenyFormatter = new CurrenyFormatter();
      var resultsElement = this.document.select("results");
      this.hidePlaceholder();
      this.showDisplay();
      var _iterator = payroll_calculator_view_createForOfIteratorHelper(this.workers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var worker = _step.value;
          var initialSalary = this.calculateInitialSalary(worker);
          var formattedInitialSalary = currenyFormatter.format(initialSalary);
          var mealVoucher = this.calculateMealVouncher(initialSalary);
          var formattedMealVoucher = currenyFormatter.format(mealVoucher);
          var finalSalary = initialSalary + mealVoucher;
          var formattedFinalSalary = currenyFormatter.format(finalSalary);
          payroll += finalSalary;
          var message = "O funcion\xE1rio com c\xF3digo ".concat(worker.code, " possui o sal\xE1rio de ").concat(formattedFinalSalary, ", considerando as ").concat(worker.workedHoursCount, " horas trabalhadas e ").concat(formattedMealVoucher, " de vale alimenta\xE7\xE3o");
          var result = "\n        <p\n          data-payroll-calculator=\"message\"\n          class=\"calculator__result-message\">\n          ".concat(message, "\n        </p>\n    \n        <div\n          class=\"display\">\n          <h4 class=\"calculator__result-title\">Sak\xE1rio final</h4>\n          <strong\n            data-payroll-calculator=\"total\"\n            class=\"display__value\">\n            ").concat(formattedFinalSalary, "\n          </strong>\n    \n          <span class=\"display__divisor\"></span>\n    \n          <div>\n            <p\n              class=\"display__message\">\n              Sal\xE1rio inicial\n            </p>\n            <strong\n              data-payroll-calculator=\"total-fuel\"\n              class=\"calculator__result-title\">").concat(formattedInitialSalary, "\n            </strong>\n          </div>");
          resultsElement.innerHTML += result;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var payrollTitleElement = this.document.select("payroll-title");
      payrollTitleElement.textContent = "Folha de pagamento para ".concat(this.workers.length, " funcion\xE1rios");
      var formattedPayroll = currenyFormatter.format(payroll);
      var payrollElement = this.document.select("payroll");
      payrollElement.textContent = formattedPayroll;
    }
  }, {
    key: "showButtonsGroup",
    value: function showButtonsGroup() {
      var buttonsGroup = document.querySelector("[data-age-group-calculator^='buttons-group']");
      if (!buttonsGroup) return;
      var classForHiding = buttonsGroup.dataset.ageGroupCalculator.split(":")[1];
      if (buttonsGroup) buttonsGroup.classList.remove(classForHiding);
    }
  }, {
    key: "calculateMealVouncher",
    value: function calculateMealVouncher(initialSalary) {
      if (initialSalary <= 800) return initialSalary * 0.25;
      if (initialSalary <= 1200) return initialSalary * 0.20;
      return initialSalary * 0.15;
    }
  }, {
    key: "calculateInitialSalary",
    value: function calculateInitialSalary(worker) {
      var minimumHourlySalary = this.HOURLY_SALARY[worker.category][worker.workShift] * this.minimumSalary;
      return worker.workedHoursCount * minimumHourlySalary;
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit() {
      var codeField = this.form.getField("code");
      var code = parseInt(codeField.value);
      var workedHoursCountField = this.form.getField("worked-hours-count");
      var workedHoursCount = parseInt(workedHoursCountField.value);
      if (workedHoursCount < 0) {
        this.form.showInputError(workedHoursCountField, 'Número de horas trabalhadas não pode ser menor que zero');
        return;
      }
      var minimumSalaryField = this.form.getField("minimum-salary");
      var minimumSalary = parseFloat(minimumSalaryField.value);
      if (minimumSalary < 0) {
        this.form.showInputError(minimumSalaryField, 'Salário mínimo não pode ser menor que zero');
        return;
      }
      this.minimumSalary = minimumSalary;
      var category = this.form.getRadioGroupValue("category");
      var workShift = this.form.getRadioGroupValue("work-shift");
      var worker = {
        code: code,
        workedHoursCount: workedHoursCount,
        category: category,
        workShift: workShift
      };
      this.form.clear();
      this.workers.push(worker);
    }
  }, {
    key: "handleCalculateButtonClick",
    value: function handleCalculateButtonClick() {
      if (this.workers.length) {
        this.clearResults();
        this.renderResults();
      }
    }
  }, {
    key: "handleRestartButtonClick",
    value: function handleRestartButtonClick() {
      location.reload();
    }
  }, {
    key: "handleStartButtonClick",
    value: function handleStartButtonClick(button) {
      button.remove();
      this.form.showForm();
    }
  }]);
}();
;// CONCATENATED MODULE: ./src/pages/payroll-calculator/index.html
// Imports
var payroll_calculator_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(998), __webpack_require__.b);
// Module
var payroll_calculator_code = `<main class="calculator"> <div class="calculator__controls"> <h1 class="calculator__title"> Calculadora de Folha de pagamento </h1> <form data-payroll-calculator="form" class="calculator__form hidden"> <div class="input"> <label for="code" class="input__label"> Código </label> <div class="input__field-container"> <div class="input__icon"> <i class="ph-bold ph-tag"></i> </div> <input data-payroll-calculator="code" id="code" type="number" name="code" autofocus required class="input__field"> </div> </div> <div class="input"> <label for="hours-count" class="input__label"> Horas trabalhadas </label> <div class="input__field-container"> <div class="input__icon"> <i class="ph-bold ph-clock"></i> </div> <input data-payroll-calculator="worked-hours-count" id="hours-count" type="number" name="hours-count" required class="input__field"> </div> </div> <div class="radio-group"> <span for="pieces-count" class="radio-group__label"> Turno </span> <div class="radio-group__group"> <label for="morning" class="radio-group__radio"> <input data-payroll-calculator="work-shift" id="morning" type="radio" name="work-shift" value="morning" required checked="checked" class="radio-group__field"> <span class="radio-group__indicator"> <span class="radio-group__indicator-circle"></span> </span> <span class="radio-group__field-label"> Matutino </span> </label> <label for="afternoon" class="radio-group__radio"> <input data-payroll-calculator="work-shift" id="afternoon" type="radio" name="work-shift" value="afternoon" required class="radio-group__field"> <span class="radio-group__indicator"> <span class="radio-group__indicator-circle"></span> </span> <span class="radio-group__field-label"> Vespertino </span> </label> <label for="night" class="radio-group__radio"> <input data-payroll-calculator="work-shift" id="night" type="radio" name="work-shift" value="night" required class="radio-group__field"> <span class="radio-group__indicator"> <span class="radio-group__indicator-circle"></span> </span> <span class="radio-group__field-label"> Noturno </span> </label> </div> </div> <div class="radio-group"> <span for="pieces-count" class="radio-group__label"> Categoria </span> <div class="radio-group__group"> <label for="employee" class="radio-group__radio"> <input data-payroll-calculator="category" id="employee" type="radio" name="category" value="employee" required checked="checked" class="radio-group__field"> <span class="radio-group__indicator"> <span class="radio-group__indicator-circle"></span> </span> <span class="radio-group__field-label"> Funcionário </span> </label> <label for="manager" class="radio-group__radio"> <input data-payroll-calculator="category" id="manager" type="radio" name="category" value="manager" required class="radio-group__field"> <span class="radio-group__indicator"> <span class="radio-group__indicator-circle"></span> </span> <span class="radio-group__field-label"> Gerente </span> </label> </div> </div> <div class="input"> <label for="minimum-salary" class="input__label"> Salário Mínimo </label> <div class="input__field-container"> <div class="input__icon"> <i class="ph-bold ph-money"></i> </div> <input data-payroll-calculator="minimum-salary" id="minimum-salary" type="number" name="minimum-salary" value="1400" autofocus required class="input__field"> </div> </div> <div data-payroll-calculator="buttons-group" class="calculator__buttons-group"> <button data-payroll-calculator="add-worker-button" type="submit" class="button"> <i class="ph-bold ph-plus button__icon"></i> Adicionar </button> <button data-payroll-calculator="calculate-button" type="button" class="button"> <i class="ph-bold ph-calculator button__icon"></i> Calcular </button> <button data-payroll-calculator="restart-button" type="button" class="button"> <i class="ph-bold ph-arrow-counter-clockwise button__icon"></i> Parar </button> </div> </form> <div class="calculator__button-container"> <button data-payroll-calculator="start-button" type="button" class="button"> <i class="ph-bold ph-play button__icon"></i> Iniciar </button> </div> </div> <div class="calculator__result"> <div data-payroll-calculator="placeholder" class="calculator__result-placeholder"> <img src="${payroll_calculator_HTML_LOADER_IMPORT_0_}" width="192" height="192" alt="calculator"> <h2 class="calculator__result-title"> Resultados serão mostrados aqui </h2> <p class="calculator__result-message"> Complete o formulário e clique em "calcular" para ver o resultado. </p> </div> <div data-payroll-calculator="display" class="calculator__result-display hidden"> <h2 data-payroll-calculator="payroll-title" class="calculator__result-title"> </h2> <strong data-payroll-calculator="payroll" class="calculator__result-title"> </strong> <span data-payroll-calculator="results" class="calculator__result-display"> </span> </div> </div> </main> <nav class="navigation"> <ul class="navigation__links"> <li> <a data-navigation="link" href="bmi-calculator" class="navigation__link"> Calculadora de IMC </a> </li> <li> <a ata-navigation="link" href="age-group-calculator" class="navigation__link"> Calculadora de Faixa Etária </a> </li> <li> <a data-navigation="link" href="average-calculator" class="navigation__link"> Calculadora de Média Escolar </a> </li> <li> <a ata-navigation="link" href="shipping-calculator" class="navigation__link"> Calculadora de Frete </a> </li> </ul> </nav> `;
// Exports
/* harmony default export */ const payroll_calculator = (payroll_calculator_code);
;// CONCATENATED MODULE: ./src/pages/payroll-calculator/page.js



;// CONCATENATED MODULE: ./src/pages/not-found/index.html
// Module
var not_found_code = `<main> <strong class="status-code">404</strong> <h1 class="title">Página não encontrada.</h1> <a href="/" class="link">Voltar para primeira página.</a> </main>`;
// Exports
/* harmony default export */ const not_found = (not_found_code);
;// CONCATENATED MODULE: ./src/pages/not-found/page.js



;// CONCATENATED MODULE: ./src/app.js








var navigation = new Navigation({
  '/omnicalculator': {
    page: bmi_calculator,
    view: BmiCalculatorView
  },
  '/omnicalculator/bmi-calculator': {
    page: bmi_calculator,
    view: BmiCalculatorView
  },
  '/omnicalculator/average-calculator': {
    page: average_calculator,
    view: AverageCalculatorView
  },
  '/omnicalculator/age-group-calculator': {
    page: age_group_calculator,
    view: AgeGroupCalculatorView
  },
  '/omnicalculator/shipping-calculator': {
    page: shipping_calculator,
    view: ShippingCalculatorView
  },
  '/omnicalculator/payroll-calculator': {
    page: payroll_calculator,
    view: PayrollCalculatorView
  },
  '/not-found': {
    page: not_found,
    view: function view() {}
  }
});
document.addEventListener('navigate', function () {
  navigation.handleNavigate();
});
navigation.navigate(window.location.pathname);
navigation.handleNavigate();
/******/ })()
;