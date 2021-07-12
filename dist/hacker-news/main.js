(self["webpackChunkhacker_news"] = self["webpackChunkhacker_news"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _hacker_news_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hacker-news/home/home.component */ 2721);
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ 1650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    { path: 'hacker-news', component: _hacker_news_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: '', redirectTo: '/hacker-news', pathMatch: 'full' },
    { path: '**', component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
    constructor() {
        this.title = 'hacker-news';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["div[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  min-height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _hacker_news_hacker_news_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hacker-news/hacker-news.module */ 2614);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ 1650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _hacker_news_hacker_news_module__WEBPACK_IMPORTED_MODULE_1__.HackerNewsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _hacker_news_hacker_news_module__WEBPACK_IMPORTED_MODULE_1__.HackerNewsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 2614:
/*!***************************************************!*\
  !*** ./src/app/hacker-news/hacker-news.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HackerNewsModule": () => (/* binding */ HackerNewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 2721);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-infinite-scroll */ 9210);
/* harmony import */ var _shared_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pipes/date-ago.pipe */ 3056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);







class HackerNewsModule {
}
HackerNewsModule.ɵfac = function HackerNewsModule_Factory(t) { return new (t || HackerNewsModule)(); };
HackerNewsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HackerNewsModule });
HackerNewsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_1__.InfiniteScrollModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HackerNewsModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        _shared_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_2__.DateAgoPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_1__.InfiniteScrollModule], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent] }); })();


/***/ }),

/***/ 2846:
/*!****************************************************!*\
  !*** ./src/app/hacker-news/hacker-news.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HackerNewsService": () => (/* binding */ HackerNewsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ 3779);






class HackerNewsService {
    constructor(http, localStorageSvc) {
        this.http = http;
        this.localStorageSvc = localStorageSvc;
        this.base_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url;
    }
    getNewsByPage(framework, page) {
        const query = `search_by_date?query=${framework}&page=${page}`;
        return this.http.get(`${this.base_url}${query}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((_a) => {
            var { hits } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__rest)(_a, ["hits"]);
            const newsParsed = this.parseNewsData(hits);
            return newsParsed.filter((el) => el.story_title && el.story_url && el.author);
        }));
    }
    parseNewsData(newsList) {
        const currentFavs = this.localStorageSvc.getFavoritesNews();
        const newData = newsList.map(news => {
            const found = currentFavs.find((fav) => fav.objectID === news.objectID);
            return Object.assign(Object.assign({}, news), { isFavorite: found });
        });
        return newData;
    }
}
HackerNewsService.ɵfac = function HackerNewsService_Factory(t) { return new (t || HackerNewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService)); };
HackerNewsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HackerNewsService, factory: HackerNewsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2721:
/*!****************************************************!*\
  !*** ./src/app/hacker-news/home/home.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../local-storage.service */ 3779);
/* harmony import */ var _hacker_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hacker-news.service */ 2846);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-infinite-scroll */ 9210);
/* harmony import */ var _shared_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/date-ago.pipe */ 3056);








function HomeComponent_div_8_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const framework_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", framework_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](framework_r4.label);
} }
function HomeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function HomeComponent_div_8_Template_select_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.showData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HomeComponent_div_8_option_3_Template, 3, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.myForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.frameworks);
} }
function HomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_10_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const news_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.redirectToNews(news_r7.story_url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_10_Template_img_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const news_r7 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r10.toggleFavorite(news_r7); return ctx_r10.addOrRemoveFavorite(news_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, news_r7.created_at), " by ", news_r7.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](news_r7.story_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx_r1.getIcon(news_r7.isFavorite), "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.onScrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "pressed": a0 }; };
const _c1 = function (a0) { return { "space": a0 }; };
class HomeComponent {
    constructor(localStorageSvc, dataService, fb, document) {
        this.localStorageSvc = localStorageSvc;
        this.dataService = dataService;
        this.fb = fb;
        this.document = document;
        this.newsList = [];
        this.pageNum = 0;
        this.frameworks = [
            { value: '', label: 'Select your news' },
            { value: 'angular', label: 'Angular' },
            { value: 'reactjs', label: 'Reactjs' },
            { value: 'vuejs', label: 'Vuejs' },
        ];
        this.myForm = this.fb.group({
            framework: ['']
        });
    }
    ngOnInit() { }
    toggleFavorite(news) {
        news.isFavorite = !news.isFavorite;
    }
    getIcon(isFavorite) {
        return isFavorite ? 'heart-solid.png' : 'heart-outline.png';
    }
    onWindowScroll() {
        const yOffset = window.pageYOffset;
        const scrollTop = this.document.documentElement.scrollTop;
        this.showButton = (yOffset || scrollTop) > 500;
    }
    onScrollTop() {
        this.document.documentElement.scrollTop = 0;
    }
    onScrollDown() {
        if (!this.favorites) {
            this.pageNum++;
            const framework = this.myForm.controls.framework.value;
            this.dataService.getNewsByPage(framework, this.pageNum).subscribe(res => {
                const currentNews = this.newsList;
                this.newsList = currentNews.concat(res);
            });
        }
    }
    showData() {
        this.pageNum = 0;
        const framework = this.myForm.controls.framework.value;
        if (framework) {
            this.dataService.getNewsByPage(framework, this.pageNum).subscribe(res => {
                this.newsList = res;
            });
        }
    }
    showAll() {
        this.pageNum = 0;
        this.newsList = [];
        this.myForm.reset();
        this.favorites = false;
    }
    showFavs() {
        this.favorites = true;
        this.newsList = this.localStorageSvc.getFavoritesNews();
    }
    redirectToNews(url) {
        window.open(url, "_blank");
    }
    addOrRemoveFavorite(newSelected) {
        this.localStorageSvc.addOrRemoveFavorite(newSelected);
        if (this.favorites)
            this.showFavs();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_hacker_news_service__WEBPACK_IMPORTED_MODULE_1__.HackerNewsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, decls: 12, vars: 12, consts: [[1, "header"], ["src", "assets/images/hacker-news.png"], [1, "wrap-selector"], [3, "ngClass", "click"], [1, "body"], [4, "ngIf"], ["infiniteScroll", "", 1, "boxes", 3, "ngClass", "scrolled"], ["class", "box", 4, "ngFor", "ngForOf"], ["class", "up", 3, "click", 4, "ngIf"], [3, "formGroup"], ["name", "frameworks", "id", "frameworks", "formControlName", "framework", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "box"], [1, "left", 3, "click"], [1, "time"], ["src", "assets/images/iconmonstr-time-2.png", 1, "clock"], [1, "comment"], [1, "right"], [1, "favorite", 3, "src", "click"], [1, "up", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_3_listener() { return ctx.showAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.showFavs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "My faves");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scrolled", function HomeComponent_Template_div_scrolled_9_listener() { return ctx.onScrollDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 12, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, HomeComponent_button_11_Template, 2, 0, "button", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, !ctx.favorites));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, ctx.favorites));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.favorites);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c1, ctx.favorites));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.newsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__.InfiniteScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]], pipes: [_shared_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_3__.DateAgoPipe], styles: [".header[_ngcontent-%COMP%] {\r\n  height: 114px;\r\n  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);\r\n  background-image: linear-gradient(to bottom, var(--color-10) -32%, var(--color-white) 124%);\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .body[_ngcontent-%COMP%] {\r\n  padding: 0 10%;\r\n}\r\n.body[_ngcontent-%COMP%] {\r\n  margin-top: 37px;\r\n}\r\n.wrap-selector[_ngcontent-%COMP%] {\r\n  margin-top: 70px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  display: inherit;\r\n  align-items: inherit;\r\n  justify-content: inherit;\r\n  width: 98px;\r\n  height: 31px;\r\n  border-radius: 2px;\r\n  border: solid 1px #d6d6d6;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  border: solid 1px var(--color-11);\r\n  color: var(--color-11);\r\n}\r\n.pressed[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:focus {\r\n  outline: solid 1px var(--color-11);\r\n  color: var(--color-11);\r\n}\r\nselect[_ngcontent-%COMP%] {\r\n  width: 240px;\r\n  padding: 5px 12px;\r\n  border-radius: 4px;\r\n  color: var(--color-8);\r\n}\r\n.boxes[_ngcontent-%COMP%] {\r\n  margin-top: 37px;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 48%));\r\n  grid-template-rows: auto;\r\n  grid-gap: 40px;\r\n  gap: 40px;\r\n}\r\n.box[_ngcontent-%COMP%] {\r\n  min-height: 90px;\r\n  border-radius: 6px;\r\n  border: solid 1px #979797;\r\n  display: grid;\r\n  grid-template-rows: auto;\r\n  grid-template-columns: auto 68px;\r\n  grid-template-areas: \r\n  \"left right\";\r\n}\r\n.box[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.6;\r\n}\r\n.left[_ngcontent-%COMP%]  {\r\n  grid-area: left;\r\n  padding: 26px;\r\n  cursor: pointer;\r\n}\r\n.time[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.clock[_ngcontent-%COMP%] {\r\n  margin-right: 6px;\r\n  width: 16px;\r\n  height: 16px;\r\n  object-fit: contain;\r\n}\r\n.comment[_ngcontent-%COMP%] {\r\n  margin-top: 7px;\r\n  font-weight: 500;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n  grid-area: right;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 68px;\r\n}\r\n.favorite[_ngcontent-%COMP%] {\r\n  width: 24px;\r\n  height: 22px;\r\n  object-fit: contain;\r\n  cursor: pointer;\r\n}\r\n.space[_ngcontent-%COMP%] {\r\n  margin-top: calc(37px + 29px + 37px);\r\n}\r\n.up[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 50px;\r\n  border-radius: 25px;\r\n  width: 50px;\r\n}\r\n.up[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsMkZBQTJGO0VBQzNGLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELHdCQUF3QjtFQUN4QixjQUFTO0VBQVQsU0FBUztBQUNYO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGdDQUFnQztFQUNoQztjQUNZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGhlaWdodDogMTE0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLCAyMSwgNDEsIDAuMTIpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWNvbG9yLTEwKSAtMzIlLCB2YXIoLS1jb2xvci13aGl0ZSkgMTI0JSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5oZWFkZXIgaW1nLCAuYm9keSB7XHJcbiAgcGFkZGluZzogMCAxMCU7XHJcbn1cclxuLmJvZHkge1xyXG4gIG1hcmdpbi10b3A6IDM3cHg7XHJcbn1cclxuLndyYXAtc2VsZWN0b3Ige1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5oZXJpdDtcclxuICBhbGlnbi1pdGVtczogaW5oZXJpdDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQ7XHJcbiAgd2lkdGg6IDk4cHg7XHJcbiAgaGVpZ2h0OiAzMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZDZkNmQ2O1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItMTEpO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0xMSk7XHJcbn1cclxuLnByZXNzZWQsIGJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogc29saWQgMXB4IHZhcigtLWNvbG9yLTExKTtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItMTEpO1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItOCk7XHJcbn1cclxuLmJveGVzIHtcclxuICBtYXJnaW4tdG9wOiAzN3B4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgNDglKSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIGdhcDogNDBweDtcclxufVxyXG4uYm94IHtcclxuICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjOTc5Nzk3O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA2OHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gIFwibGVmdCByaWdodFwiO1xyXG59XHJcbi5ib3g6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG4ubGVmdCAge1xyXG4gIGdyaWQtYXJlYTogbGVmdDtcclxuICBwYWRkaW5nOiAyNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGltZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jbG9jayB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuLmNvbW1lbnQge1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5yaWdodCB7XHJcbiAgZ3JpZC1hcmVhOiByaWdodDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDY4cHg7XHJcbn1cclxuLmZhdm9yaXRlIHtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNwYWNlIHtcclxuICBtYXJnaW4tdG9wOiBjYWxjKDM3cHggKyAyOXB4ICsgMzdweCk7XHJcbn1cclxuLnVwIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLnVwOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59Il19 */"] });


/***/ }),

/***/ 3779:
/*!******************************************************!*\
  !*** ./src/app/hacker-news/local-storage.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

const myFavorites = 'myFavorites';
class LocalStorageService {
    constructor() {
        this.setLocalStorage();
    }
    addOrRemoveFavorite(news) {
        const { objectID } = news;
        const currentsFavs = this.getFavoritesNews();
        const found = currentsFavs.find((fav) => fav.objectID === objectID);
        found ? this.removeFromFavorite(objectID) : this.addToFavorite(news);
    }
    removeFromFavorite(id) {
        const currentsFavs = this.getFavoritesNews();
        const news = currentsFavs.filter((el) => el.objectID !== id);
        localStorage.setItem(myFavorites, JSON.stringify([...news]));
        try {
        }
        catch (error) {
            console.log('Error removing favorites from localStorage', error);
        }
    }
    addToFavorite(news) {
        try {
            const currentsFavs = this.getFavoritesNews();
            localStorage.setItem(myFavorites, JSON.stringify([...currentsFavs, news]));
        }
        catch (error) {
            console.log('Error saving favorites from localStorage', error);
        }
    }
    getFavoritesNews() {
        try {
            const newsFavs = JSON.parse(localStorage.getItem(myFavorites));
            return newsFavs;
        }
        catch (error) {
            console.log('Error getting favorites from localStorage', error);
        }
    }
    setLocalStorage() {
        const currents = JSON.parse(localStorage.getItem(myFavorites));
        if (!currents) {
            localStorage.setItem(myFavorites, JSON.stringify([]));
        }
        this.getFavoritesNews();
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1650:
/*!*********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3056:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/date-ago.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAgoPipe": () => (/* binding */ DateAgoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DateAgoPipe {
    constructor() {
        this.intervals = {
            'year': 31536000,
            'month': 2592000,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
            'second': 1
        };
    }
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = this.intervals;
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
}
DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) { return new (t || DateAgoPipe)(); };
DateAgoPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateAgo", type: DateAgoPipe, pure: true });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    base_url: 'https://hn.algolia.com/api/v1/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map