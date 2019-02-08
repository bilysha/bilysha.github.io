(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  flex: 1 0 auto;\n}\n\nheader, footer {\n  background-color: #444;\n  padding: 20px;\n}\n\nheader p, footer p {\n  color: #39c2d7;\n}\n\nheader img {\n  height: 60px;\n  cursor: pointer;\n}\n\nheader p {\n  font-size: 40px;\n  font-weight: bold;\n  align-self: center;\n}\n\nfooter {\n  border-top: 5px solid #39c2d7;\n  flex-shrink: 0;\n}\n\nfooter p a {\n  color: #39c2d7;\n  font-style: italic;\n}\n\nheader .center, footer .center {\n  display: flex;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBmbGV4OiAxIDAgYXV0bztcbn1cblxuaGVhZGVyLCBmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5oZWFkZXIgcCwgZm9vdGVyIHAge1xuICBjb2xvcjogIzM5YzJkNztcbn1cblxuaGVhZGVyIGltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMzOWMyZDc7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG5mb290ZXIgcCBhIHtcbiAgY29sb3I6ICMzOWMyZDc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuaGVhZGVyIC5jZW50ZXIsIGZvb3RlciAuY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"center\">\n    <a href=\"/\">\n      <img src=\"./assets/images/newspaper.png\" alt=\"news-logo\" />\n    </a>\n    <p>News</p>\n  </div>\n</header>\n<div class=\"content\">\n  <main>\n    <app-user></app-user>\n    <router-outlet></router-outlet>\n  </main>\n</div>\n<footer>\n  <div class=\"center\">\n    <p>Ilya Belavusau</p>\n    <p>Powered By <a href=\"https://newsapi.org/\" target=\"_blank\">News.API</a></p>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/paginator/paginator.component */ "./src/app/components/paginator/paginator.component.ts");
/* harmony import */ var _components_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/news/news-list/news-list.component */ "./src/app/components/news/news-list/news-list.component.ts");
/* harmony import */ var _components_news_newsline_newsline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/news/newsline/newsline.component */ "./src/app/components/news/newsline/newsline.component.ts");
/* harmony import */ var _components_news_newsline_details_newsline_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/news/newsline-details/newsline-details.component */ "./src/app/components/news/newsline-details/newsline-details.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_details_passing_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/details-passing.service */ "./src/app/services/details-passing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"],
                _components_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_8__["NewsListComponent"],
                _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_7__["PaginatorComponent"],
                _components_news_newsline_newsline_component__WEBPACK_IMPORTED_MODULE_9__["NewsLineComponent"],
                _components_news_newsline_details_newsline_details_component__WEBPACK_IMPORTED_MODULE_10__["NewsLineDetailsComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterNewsPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'newsline/details', component: _components_news_newsline_details_newsline_details_component__WEBPACK_IMPORTED_MODULE_10__["NewsLineDetailsComponent"] },
                    { path: 'news/category/:category/page/:page', component: _components_news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"] },
                    { path: 'news/search/:query/page/:page', component: _components_news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"] },
                    { path: 'news/source/:source/page/:page', component: _components_news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"] },
                    { path: '', pathMatch: 'full', redirectTo: 'news/source/abc-news/page/1' }
                ])
            ],
            providers: [
                _services_http_client_service__WEBPACK_IMPORTED_MODULE_13__["HttpRequestService"],
                _services_details_passing_service__WEBPACK_IMPORTED_MODULE_14__["DetailsPassingService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/news/news-list/news-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/news/news-list/news-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul, ul li {\n  width: 100%;\n}\n\n.newslist-container {\n  height: 100%;\n}\n\n.active-source-container {\n  background: #fff;\n  padding: 20px;\n  margin: 0 10px;\n  font-weight: bold;\n  font-size: 24px;\n  text-align: center;\n  box-shadow: 0 1px 3px #e3e3e3;\n  display: flex;\n  justify-content: space-between;\n}\n\n.active-source-container p {\n  align-self: center;\n}\n\n.active-source-container input {\n  padding: 10px;\n  font-family: 'Ubuntu Regular', serif;\n}\n\n.news-list-content {\n  margin: 10px 10px 0 10px;\n}\n\n.news-list-loading {\n  background: #fff;\n  text-align: center;\n  font-weight: bold;\n  font-size: 28px;\n  padding: 20px;\n  box-shadow: 0 1px 3px #e3e3e3;\n}\n\n@media all and (min-width: 230px) and (max-width: 450px) {\n  .active-source-container {\n    flex-direction: column;\n  }\n\n  .active-source-container p {\n    margin-bottom: 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MtbGlzdC9uZXdzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCwgdWwgbGkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5ld3NsaXN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hY3RpdmUtc291cmNlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAjZTNlM2UzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hY3RpdmUtc291cmNlLWNvbnRhaW5lciBwIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uYWN0aXZlLXNvdXJjZS1jb250YWluZXIgaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogJ1VidW50dSBSZWd1bGFyJywgc2VyaWY7XG59XG5cbi5uZXdzLWxpc3QtY29udGVudCB7XG4gIG1hcmdpbjogMTBweCAxMHB4IDAgMTBweDtcbn1cblxuLm5ld3MtbGlzdC1sb2FkaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggI2UzZTNlMztcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjMwcHgpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuYWN0aXZlLXNvdXJjZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuYWN0aXZlLXNvdXJjZS1jb250YWluZXIgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/news/news-list/news-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/news/news-list/news-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"newslist-container\">\n  <article class=\"active-source-container\">\n    <p>{{activeSource}} news</p>\n    <input type=\"text\" [(ngModel)]=\"filterQuery\" placeholder=\"Filter News List\"/>\n  </article>\n  <article class=\"news-list-content\">\n    <p *ngIf=\"!newsList.length\" class=\"news-list-loading\">Loading</p>\n    <ul class=\"center\" *ngIf=\"newsList.length\">\n      <li *ngFor=\"let newsLine of newsList | filterNews: filterQuery\" (click)=\"navigateToDetails(newsLine)\">\n        <app-news-line [newsLine]=\"newsLine\"></app-news-line>\n      </li>\n    </ul>\n  </article>\n</article>\n\n"

/***/ }),

/***/ "./src/app/components/news/news-list/news-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/news/news-list/news-list.component.ts ***!
  \******************************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_details_passing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/details-passing.service */ "./src/app/services/details-passing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsListComponent = /** @class */ (function () {
    function NewsListComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.filterQuery = '';
    }
    NewsListComponent.prototype.navigateToDetails = function (data) {
        this.dataService.data = data;
        this.router.navigate(['newsline/details']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NewsListComponent.prototype, "newsList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NewsListComponent.prototype, "activeSource", void 0);
    NewsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-list',
            template: __webpack_require__(/*! ./news-list.component.html */ "./src/app/components/news/news-list/news-list.component.html"),
            styles: [__webpack_require__(/*! ./news-list.component.css */ "./src/app/components/news/news-list/news-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_details_passing_service__WEBPACK_IMPORTED_MODULE_2__["DetailsPassingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewsListComponent);
    return NewsListComponent;
}());



/***/ }),

/***/ "./src/app/components/news/news.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/news/news.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-content {\n  margin: 10px auto;\n  display: flex;\n}\n\n.news-sources {\n  background-color: #fff;\n  margin-left: 10px;\n  box-shadow: 0 1px 3px #e3e3e3;\n}\n\n.news-sources p {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.news-sources p i {\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.news-sources p i:hover {\n  color: #39c2d7;\n}\n\n.expanded {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.minimize {\n  height: 60px;\n  overflow: hidden;\n}\n\n.sources-list, .categories-list, .search-container {\n  width: 220px;\n  padding: 20px;\n  border-bottom: 5px solid #39c2d7;\n}\n\n.news-sources a {\n  display: block;\n  padding: 10px;\n  cursor: pointer;\n  font-weight: bold;\n  border-right: 5px solid transparent;\n}\n\n.news-sources a:hover {\n  background-color: #39c2d7;\n  color: #fff;\n  border-color: #444;\n}\n\n.news-sources a.active {\n  background-color: #444;\n  color: #39c2d7;\n  border-color: #39c2d7;\n}\n\n.search-container input {\n  padding: 5px;\n  font-size: 20px;\n  width: 100%;\n  margin-bottom: 10px;\n  font-family: 'Ubuntu Regular', serif;\n}\n\n.search-container button {\n  width: 100%;\n  padding: 10px;\n  border: none;\n  background-color: #444;\n  color: #39c2d7;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.search-container button:hover {\n  color: #444;\n  background-color: #39c2d7;\n}\n\napp-news-list {\n  width: 100%;\n}\n\n@media all and (min-width: 230px) and (max-width: 930px) {\n  .news-content {\n    flex-direction: column;\n  }\n\n  .news-sources {\n    margin: 0 10px 10px 10px;\n  }\n\n\n  .sources-list, .categories-list, .search-container {\n    width: 100%;\n  }\n}\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOzs7RUFHQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLWNvbnRlbnQge1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm5ld3Mtc291cmNlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggI2UzZTNlMztcbn1cblxuLm5ld3Mtc291cmNlcyBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubmV3cy1zb3VyY2VzIHAgaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uZXdzLXNvdXJjZXMgcCBpOmhvdmVyIHtcbiAgY29sb3I6ICMzOWMyZDc7XG59XG5cbi5leHBhbmRlZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5taW5pbWl6ZSB7XG4gIGhlaWdodDogNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNvdXJjZXMtbGlzdCwgLmNhdGVnb3JpZXMtbGlzdCwgLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogMjIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMzljMmQ3O1xufVxuXG4ubmV3cy1zb3VyY2VzIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5uZXdzLXNvdXJjZXMgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWMyZDc7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICM0NDQ7XG59XG5cbi5uZXdzLXNvdXJjZXMgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICBjb2xvcjogIzM5YzJkNztcbiAgYm9yZGVyLWNvbG9yOiAjMzljMmQ3O1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciBpbnB1dCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUgUmVndWxhcicsIHNlcmlmO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICBjb2xvcjogIzM5YzJkNztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlYXJjaC1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWMyZDc7XG59XG5cbmFwcC1uZXdzLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjMwcHgpIGFuZCAobWF4LXdpZHRoOiA5MzBweCkge1xuICAubmV3cy1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLm5ld3Mtc291cmNlcyB7XG4gICAgbWFyZ2luOiAwIDEwcHggMTBweCAxMHB4O1xuICB9XG5cblxuICAuc291cmNlcy1saXN0LCAuY2F0ZWdvcmllcy1saXN0LCAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuXG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/news/news.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/news/news.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"news-content center\">\n  <article class=\"news-sources\">\n    <nav class=\"sources-list\" [ngClass]=\"{'minimize': !sourcesExpanded}\">\n      <p><span>Sources:</span><i class=\"fa fa-angle-double-down\" aria-hidden=\"true\" (click)=\"sourcesExpanded = ! sourcesExpanded\" [ngClass]=\"{'expanded': sourcesExpanded}\"></i></p>\n      <a *ngFor=\"let source of sources\" [routerLink]=\"['/news/source', source.id, 'page', 1]\" routerLinkActive=\"active\">\n        {{source.name}}\n      </a>\n    </nav>\n    <nav class=\"categories-list\" [ngClass]=\"{'minimize': !categoriesExpanded}\">\n      <p>Categories: <i class=\"fa fa-angle-double-down\" aria-hidden=\"true\" (click)=\"categoriesExpanded = !categoriesExpanded\" [ngClass]=\"{'expanded': categoriesExpanded}\"></i></p>\n      <a *ngFor=\"let category of categories\" [routerLink]=\"['/news/category', category.id, 'page', 1]\" routerLinkActive=\"active\">\n        {{category.name}}\n      </a>\n    </nav>\n    <nav class=\"search-container\" [ngClass]=\"{'minimize': !searchExpanded}\">\n      <p>Search: <i class=\"fa fa-angle-double-down\" aria-hidden=\"true\" (click)=\"searchExpanded = !searchExpanded\" [ngClass]=\"{'expanded': searchExpanded}\"></i></p>\n      <label>\n        <input type=\"text\" [(ngModel)]=\"searchQuery\"/>\n      </label>\n      <button [routerLink]=\"['/news/search', searchQuery, 'page', 1]\">Search</button>\n    </nav>\n  </article>\n  <app-news-list [newsList]=\"newsList\" [activeSource]=\"source.name\"></app-news-list>\n</article>\n"

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _constants_sources_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../constants/sources.constants */ "./src/app/constants/sources.constants.js");
/* harmony import */ var _constants_categories_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../constants/categories.constants */ "./src/app/constants/categories.constants.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsComponent = /** @class */ (function () {
    function NewsComponent(httpClient, route) {
        this.httpClient = httpClient;
        this.route = route;
        this.categories = _constants_categories_constants__WEBPACK_IMPORTED_MODULE_5__["CATEGORIES"];
        this.sources = _constants_sources_constants__WEBPACK_IMPORTED_MODULE_4__["SOURCES"];
        this.searchQuery = '';
        this.searchExpanded = false;
        this.sourcesExpanded = false;
        this.categoriesExpanded = false;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriber = this.route.params.subscribe(function (params) {
            _this.newsList = [];
            console.log('onInit');
            if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(_this.sources, { id: params['source'] })) {
                _this.sourcesExpanded = true;
                _this.source = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(_this.sources, { id: params['source'] });
                _this.httpClient.getNewsBySource(_this.source.id)
                    .then(function (result) {
                    _this.newsList = result.json().articles;
                });
            }
            if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(_this.categories, { id: params['category'] })) {
                _this.categoriesExpanded = true;
                _this.source = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(_this.categories, { id: params['category'] });
                _this.httpClient.getHeadlinesIn(_this.source.id)
                    .then(function (result) {
                    console.log(result.json());
                    _this.newsList = result.json().articles;
                });
            }
            if (params['query']) {
                _this.searchExpanded = true;
                _this.source = { name: params['query'] };
                _this.searchQuery = _this.source.name;
                _this.httpClient.getNewsByQuery(_this.source.name)
                    .then(function (result) {
                    _this.newsList = result.json().articles;
                });
            }
        });
    };
    NewsComponent.prototype.expandCollapseBlock = function (blockExpanded) {
        console.log(blockExpanded);
        blockExpanded = !blockExpanded;
        console.log(this.sourcesExpanded);
        return blockExpanded;
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/components/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/components/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/news/newsline-details/newsline-details.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/news/newsline-details/newsline-details.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newsLine-details {\n  background-color: #fff;\n  box-shadow: 0 1px 3px #e3e3e3;\n  min-height: 100%;\n  margin: 20px auto;\n  font-size: 20px;\n  line-height: 28px;\n}\n\n.newsLine-details-heading {\n  font-size: 32px;\n  padding: 20px;\n  border-bottom: 5px solid #39c2d7;\n  text-align: right;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.newsLine-details .img-wrapper {\n  margin: 0 auto;\n  padding: 20px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 80%;\n}\n\n.newsLine-details .img-wrapper img {\n  max-width: 100%;\n}\n\n.newsLine-details .newsLine-content, .newsLine-details .newsLine-description {\n  padding: 20px;\n  text-align: justify;\n}\n\n.newsLine-details .newsLine-details-source {\n  display: inline;\n  color: #39c2d7;\n  font-style: italic;\n}\n\n.newsLine-details .newsLine-details-footer {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  border-top: 5px solid #39c2d7;\n}\n\n@media all and (min-width: 230px) and (max-width: 651px) {\n  .newsLine-details {\n    font-size: 18px;\n    line-height: 22px;\n  }\n  .newsLine-details-heading {\n    font-size: 24px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3NsaW5lLWRldGFpbHMvbmV3c2xpbmUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3MvbmV3c2xpbmUtZGV0YWlscy9uZXdzbGluZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3c0xpbmUtZGV0YWlscyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAjZTNlM2UzO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuLm5ld3NMaW5lLWRldGFpbHMtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMzOWMyZDc7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm5ld3NMaW5lLWRldGFpbHMgLmltZy13cmFwcGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5uZXdzTGluZS1kZXRhaWxzIC5pbWctd3JhcHBlciBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5uZXdzTGluZS1kZXRhaWxzIC5uZXdzTGluZS1jb250ZW50LCAubmV3c0xpbmUtZGV0YWlscyAubmV3c0xpbmUtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubmV3c0xpbmUtZGV0YWlscyAubmV3c0xpbmUtZGV0YWlscy1zb3VyY2Uge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNvbG9yOiAjMzljMmQ3O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uZXdzTGluZS1kZXRhaWxzIC5uZXdzTGluZS1kZXRhaWxzLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMzOWMyZDc7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDIzMHB4KSBhbmQgKG1heC13aWR0aDogNjUxcHgpIHtcbiAgLm5ld3NMaW5lLWRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgfVxuICAubmV3c0xpbmUtZGV0YWlscy1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/news/newsline-details/newsline-details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/news/newsline-details/newsline-details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"newsLine-details center\">\n  <h2 class=\"newsLine-details-heading\">{{newsLine.title || 'This Newsline comes without title.'}}</h2>\n  <p class=\"newsLine-description\">{{newsLine.description || 'This Newsline comes without description.'}}</p>\n  <div class=\"img-wrapper\">\n    <img src=\"{{newsLine.urlToImage || './../../../assets/images/no_image_found.jpg'}}\" alt=\"newsLine_poster\">\n  </div>\n  <p class=\"newsLine-content\">{{newsLine.content || 'This Newsline comes without content.'}} <a class=\"newsLine-details-source\" href=\"{{newsLine.url}}\" target=\"_blank\">Read in source...</a></p>\n  <div class=\"newsLine-details-footer\">\n    <p>{{newsLine.author || 'Author is not specified.'}}</p>\n    <p>{{newsLine.publishedAt || 'Date is unknown.'}}</p>\n  </div>\n</article>\n\n"

/***/ }),

/***/ "./src/app/components/news/newsline-details/newsline-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/news/newsline-details/newsline-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewsLineDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsLineDetailsComponent", function() { return NewsLineDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_details_passing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/details-passing.service */ "./src/app/services/details-passing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsLineDetailsComponent = /** @class */ (function () {
    function NewsLineDetailsComponent(detailsService) {
        this.detailsService = detailsService;
    }
    NewsLineDetailsComponent.prototype.ngOnInit = function () {
        this.newsLine = this.detailsService.data;
    };
    NewsLineDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-line-details',
            template: __webpack_require__(/*! ./newsline-details.component.html */ "./src/app/components/news/newsline-details/newsline-details.component.html"),
            styles: [__webpack_require__(/*! ./newsline-details.component.css */ "./src/app/components/news/newsline-details/newsline-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_details_passing_service__WEBPACK_IMPORTED_MODULE_1__["DetailsPassingService"]])
    ], NewsLineDetailsComponent);
    return NewsLineDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/news/newsline/newsline.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/news/newsline/newsline.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newsLine {\n  background-color: #fff;\n  margin: 10px 0;\n  box-shadow: 0 1px 3px #e3e3e3;\n  cursor: pointer;\n}\n\n.newsLine:last-child {\n  margin-bottom: 0px;\n}\n\n.newsLine:hover * {\n  background-color: #39c2d7;\n  color: #fff;\n  border-color: #fff;\n}\n\n.newsLine > *  {\n  cursor: pointer;\n}\n\n.newsLine-header {\n  padding: 20px;\n  font-size: 24px;\n  font-weight: bold;\n  border-bottom: 2px solid #39c2d7;\n}\n\n.newsLine-content {\n  display: flex;\n}\n\n.newsLine-content .img-wrapper {\n  min-width: 300px;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content;\n  max-width: 300px;\n  max-height: -webkit-max-content;\n  max-height: -moz-max-content;\n  max-height: max-content;\n  overflow: hidden;\n  margin: 20px;\n  align-self: center;\n}\n\n.newsLine-content .img-wrapper img {\n  width: 100%;\n}\n\n.newsLine-content p {\n  border-left: 2px solid #39c2d7;\n  padding: 20px;\n}\n\n.newsLine-footer {\n  padding: 20px;\n  border-top: 2px solid #39c2d7;\n  display: flex;\n  justify-content: flex-end;\n}\n\n@media all and (min-width: 230px) and (max-width: 651px) {\n  .newsLine-content {\n    flex-direction: column;\n  }\n\n  .newsLine-content p {\n    border-left: none;\n  }\n\n  .newsLine-content .img-wrapper {\n    min-width: 100px;\n    max-width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3NsaW5lL25ld3NsaW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtCQUF1QjtFQUF2Qiw0QkFBdUI7RUFBdkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQiwrQkFBdUI7RUFBdkIsNEJBQXVCO0VBQXZCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3MvbmV3c2xpbmUvbmV3c2xpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzTGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTBweCAwO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggI2UzZTNlMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmV3c0xpbmU6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm5ld3NMaW5lOmhvdmVyICoge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzljMmQ3O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4ubmV3c0xpbmUgPiAqICB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ld3NMaW5lLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzljMmQ3O1xufVxuXG4ubmV3c0xpbmUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uZXdzTGluZS1jb250ZW50IC5pbWctd3JhcHBlciB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IG1heC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAyMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5uZXdzTGluZS1jb250ZW50IC5pbWctd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5ld3NMaW5lLWNvbnRlbnQgcCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzM5YzJkNztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLm5ld3NMaW5lLWZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzljMmQ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAyMzBweCkgYW5kIChtYXgtd2lkdGg6IDY1MXB4KSB7XG4gIC5uZXdzTGluZS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLm5ld3NMaW5lLWNvbnRlbnQgcCB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIH1cblxuICAubmV3c0xpbmUtY29udGVudCAuaW1nLXdyYXBwZXIge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/news/newsline/newsline.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/news/newsline/newsline.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"newsLine\">\n  <h3 class=\"newsLine-header\">{{newsLine.title}}</h3>\n  <div class=\"newsLine-content\">\n    <div class=\"img-wrapper\">\n      <img src=\"{{newsLine.urlToImage || './../../../assets/images/no_image_found.jpg'}}\" alt=\"newsline-logo\" />\n    </div>\n    <p>{{newsLine.description || 'This Newsline comes without description.'}}</p>\n  </div>\n  <div class=\"newsLine-footer\">\n    <p>{{newsLine.publishedAt | date:'medium'}}</p>\n  </div>\n</article>\n"

/***/ }),

/***/ "./src/app/components/news/newsline/newsline.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/news/newsline/newsline.component.ts ***!
  \****************************************************************/
/*! exports provided: NewsLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsLineComponent", function() { return NewsLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsLineComponent = /** @class */ (function () {
    function NewsLineComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NewsLineComponent.prototype, "newsLine", void 0);
    NewsLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-line',
            template: __webpack_require__(/*! ./newsline.component.html */ "./src/app/components/news/newsline/newsline.component.html"),
            styles: [__webpack_require__(/*! ./newsline.component.css */ "./src/app/components/news/newsline/newsline.component.css")]
        })
    ], NewsLineComponent);
    return NewsLineComponent;
}());



/***/ }),

/***/ "./src/app/components/paginator/paginator.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/paginator/paginator.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/paginator/paginator.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/paginator/paginator.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li (click)=\"setPage(1)\" [ngClass]=\"{'active' : activePage === 1 }\">\n    1\n  </li>\n  <li class=\"many-pages\" *ngIf=\"showFirstPart\">\n    ...\n  </li>\n  <li *ngFor=\"let page of availablePages\" (click)=\"setPage(page)\" [ngClass]=\"{'active' : activePage === page}\">\n    {{page}}\n  </li>\n  <li class=\"many-pages\" *ngIf=\"showSecondPart\">\n    ...\n  </li>\n  <li (click)=\"setPage(totalPages)\" [ngClass]=\"{'active' : activePage === totalPages}\">\n    {{totalPages}}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/paginator/paginator.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/paginator/paginator.component.ts ***!
  \*************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
    }
    PaginatorComponent.prototype.contructor = function () {
        this.availablePages = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "activePage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "totalPages", void 0);
    PaginatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paginator',
            template: __webpack_require__(/*! ./paginator.component.html */ "./src/app/components/paginator/paginator.component.html"),
            styles: [__webpack_require__(/*! ./paginator.component.css */ "./src/app/components/paginator/paginator.component.css")]
        })
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-container {\n  background-color: #fff;\n  border-bottom: 5px solid #39c2d7;\n}\n\n.user-container .center {\n  padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMzOWMyZDc7XG59XG5cbi51c2VyLWNvbnRhaW5lciAuY2VudGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"user-container\">\n  <div class=\"center\">\n    <p>CurrentUser</p>\n  </div>\n</article>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/constants/categories.constants.js":
/*!***************************************************!*\
  !*** ./src/app/constants/categories.constants.js ***!
  \***************************************************/
/*! exports provided: CATEGORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
const CATEGORIES = [
  {
    id: 'business',
    name: 'Business'
  },
  {
    id: 'entertainment',
    name: 'Entertainment'
  },
  {
    id: 'general',
    name: 'General'
  },
  {
    id: 'health',
    name: 'Health'
  },
  {
    id: 'science',
    name: 'Science'
  },
  {
    id: 'sports',
    name: 'Sports'
  },
  {
    id: 'technology',
    name: 'Technology'
  }
]


/***/ }),

/***/ "./src/app/constants/http.constants.js":
/*!*********************************************!*\
  !*** ./src/app/constants/http.constants.js ***!
  \*********************************************/
/*! exports provided: URL, API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
const URL = 'https://newsapi.org/v2';
const API_KEY = '24ad2a89476a467e8241042807458fd9';


/***/ }),

/***/ "./src/app/constants/sources.constants.js":
/*!************************************************!*\
  !*** ./src/app/constants/sources.constants.js ***!
  \************************************************/
/*! exports provided: SOURCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOURCES", function() { return SOURCES; });
const SOURCES = [
  {
    id: 'abc-news',
    name: 'ABC News'
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg'
  },
  {
    id: 'cnn',
    name: 'CNN'
  },
  {
    id: 'espn',
    name: 'ESPN'
  },
  {
    id: 'google-news',
    name: 'Google News'
  },
  {
    id: 'nbc-news',
    name: 'NBC News'
  },
  {
    id: 'the-new-york-times',
    name: 'The New York Times'
  },
  {
    id: 'time',
    name: 'Time'
  }
];


/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterNewsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterNewsPipe", function() { return FilterNewsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterNewsPipe = /** @class */ (function () {
    function FilterNewsPipe() {
    }
    FilterNewsPipe.prototype.transform = function (newsList, filterQuery) {
        if (filterQuery === '') {
            return newsList;
        }
        return newsList.filter(function (newsline) { return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.toLower(newsline.title).indexOf(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.toLower(filterQuery)) !== -1; });
    };
    FilterNewsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterNews',
            pure: false
        })
    ], FilterNewsPipe);
    return FilterNewsPipe;
}());



/***/ }),

/***/ "./src/app/services/details-passing.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/details-passing.service.ts ***!
  \*****************************************************/
/*! exports provided: DetailsPassingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPassingService", function() { return DetailsPassingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailsPassingService = /** @class */ (function () {
    function DetailsPassingService() {
        this.data = {};
    }
    Object.defineProperty(DetailsPassingService.prototype, "newsLine", {
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: true,
        configurable: true
    });
    DetailsPassingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DetailsPassingService);
    return DetailsPassingService;
}());



/***/ }),

/***/ "./src/app/services/http-client.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/http-client.service.ts ***!
  \*************************************************/
/*! exports provided: HttpRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestService", function() { return HttpRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _constants_http_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../constants/http.constants */ "./src/app/constants/http.constants.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpRequestService = /** @class */ (function () {
    function HttpRequestService(http) {
        this.http = http;
    }
    HttpRequestService.prototype.getHeadlinesIn = function (category) {
        return this.http.get(_constants_http_constants__WEBPACK_IMPORTED_MODULE_2__["URL"] + "/top-headlines?country=us&category=" + category + "&apiKey=" + _constants_http_constants__WEBPACK_IMPORTED_MODULE_2__["API_KEY"])
            .toPromise();
    };
    HttpRequestService.prototype.getNewsBySource = function (source) {
        return this.http.get(_constants_http_constants__WEBPACK_IMPORTED_MODULE_2__["URL"] + "/top-headlines?sources=" + source + "&apiKey=" + _constants_http_constants__WEBPACK_IMPORTED_MODULE_2__["API_KEY"])
            .toPromise();
    };
    HttpRequestService.prototype.getNewsByQuery = function (query) {
        return this.http.get(_constants_http_constants__WEBPACK_IMPORTED_MODULE_2__["URL"] + "/top-headlines?q=" + query + "&apiKey=" + _constants_http_constants__WEBPACK_IMPORTED_MODULE_2__["API_KEY"])
            .toPromise();
    };
    HttpRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HttpRequestService);
    return HttpRequestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production === true) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
var init = function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .then(function () { return window.appBootstrap && window.appBootstrap(); })
        .catch(function (err) { return console.error(err); });
};
init();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().onDestroy(function () {
    init();
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\front-camp-4\angular-news\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map