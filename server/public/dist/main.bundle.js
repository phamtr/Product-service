webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-rx-list></app-rx-list>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ip_service__ = __webpack_require__("../../../../../src/app/ip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(ipService) {
        var _this = this;
        this.ipService = ipService;
        this.ipService.getIp()
            .then(function (ip) { return _this.ip = ip; })
            .catch(function (err) { return console.log(err); });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__ip_service__["a" /* IpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ip_service__["a" /* IpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ip_service__["a" /* IpService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rxlist_rxlist_component__ = __webpack_require__("../../../../../src/app/rxlist/rxlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rxlist_rx_word_component__ = __webpack_require__("../../../../../src/app/rxlist/rx-word.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rxlist_rx_form_component__ = __webpack_require__("../../../../../src/app/rxlist/rx-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__playground_child_component__ = __webpack_require__("../../../../../src/app/playground/child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__playground_parent_component__ = __webpack_require__("../../../../../src/app/playground/parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rxlist_reducer__ = __webpack_require__("../../../../../src/app/rxlist/reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// create store here


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__["a" /* WeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_6__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__playground_child_component__["a" /* ChildComponent */],
            __WEBPACK_IMPORTED_MODULE_11__playground_parent_component__["a" /* ParentComponent */],
            __WEBPACK_IMPORTED_MODULE_7__rxlist_rxlist_component__["a" /* RxListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__rxlist_rx_word_component__["a" /* RxWordComponent */],
            __WEBPACK_IMPORTED_MODULE_9__rxlist_rx_form_component__["a" /* RxFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__ngrx_store__["b" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_13__rxlist_reducer__["a" /* default */])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/ip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IpService = (function () {
    function IpService(http) {
        this.http = http;
    }
    IpService.prototype.getIp = function () {
        return this.http.get('http://ip.jsontest.com/')
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJSON) { return resJSON.ip; });
    };
    return IpService;
}());
IpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], IpService);

var _a;
//# sourceMappingURL=ip.service.js.map

/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  .word {\n    display: flex;\n    flex-direction: column;\n    background-color: #EFEEF6;\n    padding: 10px;\n    margin: 10px 0px 0px 0px;\n    border-radius: 5px;\n  }\n\n  .container {\n    width: 250px;\n    margin-left: 10px;\n  }\n\n  h3 {\n    margin-top: 5px;\n  }\n</style>\n<div class=\"container\">\n  <input placeholder=\"English\" [(ngModel)]=\"txtEn\" class=\"form-control\">\n  <br>\n  <input placeholder=\"Vietnamese\" [(ngModel)]=\"txtVn\" class=\"form-control\">\n  <br>\n  <button class=\"btn btn-success\" style=\"width: 220px\" (click)=\"add();\">\n    Add new word\n  </button>\n  <br><br>\n  <div *ngFor=\"let word of words\" class=\"word\">\n      <h3>{{ word.en }}</h3>\n      <p>{{ word.vn }}</p>\n      <button (click)=\"remove(word._id)\" class=\"btn btn-danger\">Remove</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__word_service__ = __webpack_require__("../../../../../src/app/list/word.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent(wordService) {
        this.wordService = wordService;
        this.words = [];
        this.txtEn = '';
        this.txtVn = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wordService.getWords()
            .then(function (words) { return _this.words = words; });
    };
    ListComponent.prototype.remove = function (id) {
        var _this = this;
        this.wordService.removeWord(id)
            .then(function (removedWord) {
            var index = _this.words.findIndex(function (word) { return word._id === removedWord._id; });
            _this.words.splice(index, 1);
        })
            .catch(function (err) { return console.log(err.message); });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        this.wordService.addWord(this.txtEn, this.txtVn)
            .then(function (word) { return _this.words.push(word); })
            .catch(function (err) { return console.log(err); });
        this.txtEn = '';
        this.txtVn = '';
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__word_service__["a" /* WordService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__word_service__["a" /* WordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__word_service__["a" /* WordService */]) === "function" && _a || Object])
], ListComponent);

var _a;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/list/word.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordService = (function () {
    function WordService(http) {
        this.http = http;
    }
    WordService.prototype.getWords = function () {
        var url = 'http://localhost:3000/words';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    WordService.prototype.removeWord = function (id) {
        var url = 'http://localhost:3000/word/';
        return this.http.delete(url + id)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    WordService.prototype.addWord = function (en, vn) {
        var url = 'http://localhost:3000/word/';
        var body = JSON.stringify({ en: en, vn: vn });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    return WordService;
}());
WordService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WordService);

var _a;
//# sourceMappingURL=word.service.js.map

/***/ }),

/***/ "../../../../../src/app/playground/child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildComponent = (function () {
    function ChildComponent(store) {
        this.store = store;
    }
    ChildComponent.prototype.incr = function () {
        this.store.dispatch({ type: 'INCREMENT' });
    };
    ChildComponent.prototype.desc = function () {
        this.store.dispatch({ type: 'DESCREMENT' });
    };
    return ChildComponent;
}());
ChildComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-child',
        template: "\n      <div>\n          <button (click)=\"incr()\">Increment</button>\n          <button (click)=\"desc()\">Descrement</button>\n      </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _a || Object])
], ChildComponent);

var _a;
// store - thay doi
//# sourceMappingURL=child.component.js.map

/***/ }),

/***/ "../../../../../src/app/playground/parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// async pipe
var ParentComponent = (function () {
    function ParentComponent(store) {
        this.store = store;
        this.value = this.store.select('value');
    }
    ParentComponent.prototype.onChange = function (isIncrement) {
        // this.value += (isIncrement ? 1 : -1);
    };
    return ParentComponent;
}());
ParentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-parent',
        template: "\n      <div style=\"padding: 10px\">\n        <p>{{ value | async }}</p>\n        <app-child (onChange)=\"onChange($event)\"></app-child>\n      </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _a || Object])
], ParentComponent);

var _a;
//# sourceMappingURL=parent.component.js.map

/***/ }),

/***/ "../../../../../src/app/rxlist/reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var WORDS = [
    {
        '_id': '59f08ff476ab40f4a22b5fa0',
        'en': 'activity',
        'vn': 'hoạt động'
    },
    {
        '_id': '59f08ff476ab40f4a22b5fa1',
        'en': 'active',
        'vn': 'chủ động'
    },
    {
        '_id': '59f08ff476ab40f4a22b5fa3',
        'en': 'bedroom',
        'vn': 'phòng ngủ'
    },
    {
        '_id': '59f32e87bc87844a532224b3',
        'en': 'new',
        'vn': 'mới'
    }
];
var defaultState = {
    words: WORDS,
    isShowForm: false
};
function wordsReducer(state, action) {
    if (state === void 0) { state = WORDS; }
    if (action.type === 'REMOVE_WORD') {
        return state.filter(function (word) { return word._id !== action.payload._id; });
    }
    if (action.type === 'ADD_WORD') {
        var _a = action.payload, en = _a.en, vn = _a.vn, _id = _a._id;
        return state.concat({ en: en, vn: vn, _id: _id });
    }
    return state;
}
function isShowFormReducer(state, action) {
    if (state === void 0) { state = false; }
    if (action.type === 'TOGGLE_IS_SHOW_FORM') {
        return !state;
    }
    return state;
}
var reducer = {
    words: wordsReducer,
    isShowForm: isShowFormReducer
};
/* harmony default export */ __webpack_exports__["a"] = (reducer);
// export const reducer = (state = defaultState, action: Action) => {
//     if (action.type === 'REMOVE_WORD') {
//         const newWords = state.words.filter(word => word._id !== action.payload._id);
//         return { ...state, words: newWords };
//     }
//     if (action.type === 'ADD_WORD') {
//         const { en, vn, _id } = action.payload;
//         const newWords = state.words.concat({ en, vn, _id });
//         return { ...state, words: newWords };
//     }
//     if (action.type === 'TOGGLE_IS_SHOW_FORM') {
//         return { ...state, isShowForm: !state.isShowForm };
//     }
//     return state;
// };
//# sourceMappingURL=reducer.js.map

/***/ }),

/***/ "../../../../../src/app/rxlist/rx-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RxFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RxFormComponent = (function () {
    function RxFormComponent(store) {
        this.store = store;
        this.txtEn = '';
        this.txtVn = '';
    }
    RxFormComponent.prototype.add = function () {
        this.store.dispatch({
            type: 'ADD_WORD',
            payload: {
                en: this.txtEn,
                vn: this.txtVn,
                _id: Math.random() + ''
            }
        });
        this.txtEn = '';
        this.txtVn = '';
        this.store.dispatch({ type: 'TOGGLE_IS_SHOW_FORM' });
    };
    return RxFormComponent;
}());
RxFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-rx-form',
        template: "\n      <input placeholder=\"English\" [(ngModel)]=\"txtEn\" class=\"form-control\">\n      <br>\n      <input placeholder=\"Vietnamese\" [(ngModel)]=\"txtVn\" class=\"form-control\">\n      <br>\n      <button class=\"btn btn-success\" style=\"width: 220px\" (click)=\"add();\">\n        Add new word\n      </button>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _a || Object])
], RxFormComponent);

var _a;
//# sourceMappingURL=rx-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/rxlist/rx-word.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RxWordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RxWordComponent = (function () {
    function RxWordComponent(store) {
        this.store = store;
    }
    RxWordComponent.prototype.remove = function () {
        this.store.dispatch({ type: 'REMOVE_WORD', payload: { _id: this._id } });
    };
    return RxWordComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], RxWordComponent.prototype, "vn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], RxWordComponent.prototype, "en", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], RxWordComponent.prototype, "_id", void 0);
RxWordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-rx-word',
        template: "\n    <div class=\"word\">\n      <h3>{{ en }}</h3>\n      <p>{{ vn }}</p>\n      <button class=\"btn btn-danger\" (click)=\"remove()\">Remove</button>\n    </div>\n  ",
        styles: ["\n      .word {\n        display: flex;\n        flex-direction: column;\n        background-color: #EFEEF6;\n        padding: 10px;\n        margin: 10px 0px 0px 0px;\n        border-radius: 5px;\n      }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _a || Object])
], RxWordComponent);

var _a;
//# sourceMappingURL=rx-word.component.js.map

/***/ }),

/***/ "../../../../../src/app/rxlist/rxlist.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  .word {\n    display: flex;\n    flex-direction: column;\n    background-color: #EFEEF6;\n    padding: 10px;\n    margin: 10px 0px 0px 0px;\n    border-radius: 5px;\n  }\n\n  .container {\n    width: 250px;\n    margin-left: 10px;\n    margin-top: 10px;\n  }\n\n  h3 {\n    margin-top: 5px;\n  }\n</style>\n<div class=\"container\">\n  <app-rx-form *ngIf=\"isShowForm | async\"></app-rx-form>\n  <button class=\"btn btn-primary\" *ngIf=\"!(isShowForm | async)\" (click)=\"showForm()\">Show form</button>\n  <br><br>\n  <app-rx-word *ngFor=\"let word of words | async\" [en]=\"word.en\" [vn]=\"word.vn\"  [_id]=\"word._id\"></app-rx-word>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/rxlist/rxlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RxListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RxListComponent = (function () {
    function RxListComponent(store) {
        this.store = store;
        this.words = this.store.select('words');
        this.isShowForm = this.store.select('isShowForm');
    }
    RxListComponent.prototype.showForm = function () {
        this.store.dispatch({ type: 'TOGGLE_IS_SHOW_FORM' });
    };
    return RxListComponent;
}());
RxListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-rx-list',
        template: __webpack_require__("../../../../../src/app/rxlist/rxlist.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _a || Object])
], RxListComponent);

var WORD = [
    {
        '_id': '59f08ff476ab40f4a22b5fa0',
        'en': 'activity',
        'vn': 'hoạt động'
    },
    {
        '_id': '59f08ff476ab40f4a22b5fa1',
        'en': 'active',
        'vn': 'chủ động'
    },
    {
        '_id': '59f08ff476ab40f4a22b5fa3',
        'en': 'bedroom',
        'vn': 'phòng ngủ'
    },
    {
        '_id': '59f32e87bc87844a532224b3',
        'en': 'new',
        'vn': 'mới'
    }
];
var _a;
//# sourceMappingURL=rxlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 300px; padding: 10px; text-align: center\">\n  <h3>{{ message }}</h3>\n  <br>\n  <input type=\"text\" placeholder=\"Enter your city name\" class=\"form-control\" [(ngModel)]=\"txtCityName\">\n  <br>\n  <button class=\"btn btn-success\" (click)=\"onGetWeather();\">\n    Get Weather\n  </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_service__ = __webpack_require__("../../../../../src/app/weather/weather.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var WeatherComponent = (function () {
    function WeatherComponent(weatherSerice) {
        this.weatherSerice = weatherSerice;
        this.txtCityName = '';
        this.cityName = '';
        this.temp = '';
        weatherSerice.addWord()
            .then(function (res) { return console.log(res); });
    }
    WeatherComponent.prototype.onGetWeather = function () {
        return __awaiter(this, void 0, void 0, function () {
            var temp, err_1, errJSON;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.weatherSerice.getWeather(this.txtCityName)];
                    case 1:
                        temp = _a.sent();
                        this.temp = temp;
                        this.cityName = this.txtCityName;
                        this.txtCityName = '';
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _a.sent();
                        return [4 /*yield*/, err_1.json()];
                    case 3:
                        errJSON = _a.sent();
                        alert(errJSON.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(WeatherComponent.prototype, "message", {
        get: function () {
            if (this.cityName === '')
                return 'Enter your city name';
            return this.cityName + " is now " + this.temp + "C";
        },
        enumerable: true,
        configurable: true
    });
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-weather',
        template: __webpack_require__("../../../../../src/app/weather/weather.component.html"),
        styles: [__webpack_require__("../../../../../src/app/weather/weather.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]) === "function" && _a || Object])
], WeatherComponent);

var _a;
// http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=
//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ "../../../../../src/app/weather/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getWeather = function (cityName) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
        return this.http.get(url + cityName)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJSON) { return resJSON.main.temp; });
    };
    WeatherService.prototype.getName = function () {
        var url = 'http://localhost:3000';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJSON) { return resJSON.name; });
    };
    WeatherService.prototype.addWord = function () {
        var url = 'http://localhost:3000/word';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var body = { en: 'abcd', vn: 'efghik' };
        return this.http.post(url, JSON.stringify(body), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    return WeatherService;
}());
WeatherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WeatherService);

var _a;
//# sourceMappingURL=weather.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map