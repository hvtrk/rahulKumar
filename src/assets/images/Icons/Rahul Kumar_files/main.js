(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _technology_technology_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./technology/technology.component */ "./src/app/technology/technology.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");










var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"] },
    { path: 'service', component: _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"] },
    { path: 'technology', component: _technology_technology_component__WEBPACK_IMPORTED_MODULE_8__["TechnologyComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"] },
    { path: 'support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_6__["SupportComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main{\n    min-height: 100vh;\n}\n/* Navigation Styling */\n#nav-wrap ul, #nav-wrap li, #nav-wrap a {\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n    border: none;\n    outline: none;\n}\n/* nav-wrap */\n#nav-wrap {\n    background-color: #333;\n    font: 12px 'opensans-bold', sans-serif;\n    margin: 0 auto;\n    min-width: 100%;\n    display: block;\n    text-transform: uppercase;\n    letter-spacing: 2.5px;\n    z-index: 100;\n    position: -webkit-sticky;\n    position: sticky;\n    left: 0;\n    top: 0;\n}\n.opaque { background-color: #333; }\n/* hide toggle button */\n#nav-wrap > a.mobile-btn {\n    display: none;\n}\nul#nav {\n    min-height: 48px;\n    width: auto;\n    /* center align the menu */\n    text-align: center;\n}\nul#nav li {\n    position: relative;\n    list-style: none;\n    height: 48px;\n    display: inline-block;\n}\n/* Links */\nul#nav li a {\n    /* 8px padding top + 8px padding bottom + 32px line-height = 48px */\n    display: inline-block;\n    padding: 8px 13px;\n    line-height: 32px;\n    text-decoration: none;\n    text-align: left;\n    color: #fff;\n    transition: color .2s ease-in-out;\n}\nul#nav li a:active {\n    background-color: transparent !important;\n}\nul#nav li.current a {\n    color: #F06000;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRCx3QkFBd0I7QUFDeEI7SUFDSSx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztDQUNqQjtBQUNELGNBQWM7QUFDZDtJQUNJLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsT0FBTztDQUNWO0FBQ0QsVUFBVSx1QkFBdUIsRUFBRTtBQUVuQyx3QkFBd0I7QUFDeEI7SUFDSSxjQUFjO0NBQ2pCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtDQUN6QjtBQUVELFdBQVc7QUFDWDtJQUNJLG9FQUFvRTtJQUNwRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFLWixrQ0FBa0M7Q0FDckM7QUFFRDtJQUNJLHlDQUF5QztDQUM1QztBQUVEO0lBQ0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi8qIE5hdmlnYXRpb24gU3R5bGluZyAqL1xuI25hdi13cmFwIHVsLCAjbmF2LXdyYXAgbGksICNuYXYtd3JhcCBhIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi8qIG5hdi13cmFwICovXG4jbmF2LXdyYXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgZm9udDogMTJweCAnb3BlbnNhbnMtYm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xufVxuLm9wYXF1ZSB7IGJhY2tncm91bmQtY29sb3I6ICMzMzM7IH1cblxuLyogaGlkZSB0b2dnbGUgYnV0dG9uICovXG4jbmF2LXdyYXAgPiBhLm1vYmlsZS1idG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbnVsI25hdiB7XG4gICAgbWluLWhlaWdodDogNDhweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICAvKiBjZW50ZXIgYWxpZ24gdGhlIG1lbnUgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnVsI25hdiBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogTGlua3MgKi9cbnVsI25hdiBsaSBhIHtcbiAgICAvKiA4cHggcGFkZGluZyB0b3AgKyA4cHggcGFkZGluZyBib3R0b20gKyAzMnB4IGxpbmUtaGVpZ2h0ID0gNDhweCAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA4cHggMTNweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBjb2xvciAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbnVsI25hdiBsaSBhOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxudWwjbmF2IGxpLmN1cnJlbnQgYSB7XG4gICAgY29sb3I6ICNGMDYwMDA7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Start #nav -->\n <nav id=\"nav-wrap\" class=\"\" style=\"display: block;\">\n        <a class=\"mobile-btn\" href=\"#nav-wrap\" title=\"Show navigation\">Show navigation</a>\n        <a class=\"mobile-btn\" href=\"#\" title=\"Hide navigation\">Hide navigation</a>\n        <ul id=\"nav\" class=\"nav\">\n            <li [ngClass]=\"{'current': home}\">\n                <a class=\"smoothscroll\" routerLinkActive=\"home\" [routerLink]=\"[ '/' ]\">Home</a>\n            </li>\n            <li [ngClass]=\"{'current': about}\">\n                <a class=\"smoothscroll\" routerLinkActive=\"about\" [routerLink]=\"[ '/about' ]\">About</a>\n            </li>\n            <li [ngClass]=\"{'current': tech}\">\n                <a class=\"smoothscroll\" routerLinkActive=\"tech\" [routerLink]=\"[ '/technology' ]\">Technology</a>\n            </li>\n            <li [ngClass]=\"{'current': service}\">\n                <a class=\"smoothscroll\" routerLinkActive=\"service\" [routerLink]=\"[ '/service' ]\">Works</a>\n            </li>\n            <li [ngClass]=\"{'current': support}\">\n                <a class=\"smoothscroll\" routerLinkActive=\"support\" [routerLink]=\"[ '/support' ]\">Support</a>\n            </li>\n            <li [ngClass]=\"{'current': contact}\">\n                <a class=\"smoothscroll\" routerLinkActive=\"contact\" [routerLink]=\"[ '/contact' ]\">Contact</a>\n            </li>\n        </ul>\n    </nav>\n    <!-- End #nav -->\n<main>\n    <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.home = false;
        this.about = false;
        this.tech = false;
        this.service = false;
        this.support = false;
        this.contact = false;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                console.log(typeof event.url);
                console.log(event.url);
                switch (event.url) {
                    case '/about':
                        _this.about = true;
                        _this.home = false;
                        _this.tech = false;
                        _this.service = false;
                        _this.support = false;
                        _this.contact = false;
                        break;
                    case '/':
                        _this.home = true;
                        _this.about = false;
                        _this.tech = false;
                        _this.service = false;
                        _this.support = false;
                        _this.contact = false;
                        break;
                    case '/technology':
                        _this.tech = true;
                        _this.about = false;
                        _this.home = false;
                        _this.service = false;
                        _this.support = false;
                        _this.contact = false;
                        break;
                    case '/service':
                        _this.service = true;
                        _this.about = false;
                        _this.home = false;
                        _this.tech = false;
                        _this.support = false;
                        _this.contact = false;
                        break;
                    case '/support':
                        _this.support = true;
                        _this.about = false;
                        _this.home = false;
                        _this.tech = false;
                        _this.service = false;
                        _this.contact = false;
                        break;
                    case '/contact':
                        _this.contact = true;
                        _this.about = false;
                        _this.home = false;
                        _this.tech = false;
                        _this.service = false;
                        _this.support = false;
                        break;
                    default:
                        break;
                }
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _technology_technology_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./technology/technology.component */ "./src/app/technology/technology.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");



/* Main Routing file */

/* Component Imports */









/* Shared Imports */

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"],
                _technology_technology_component__WEBPACK_IMPORTED_MODULE_8__["TechnologyComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_10__["SupportComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 10% auto 10%;\n    grid-template-rows: auto auto;\n}\n\n.material-icons {\n    font-size: 2em;\n    margin: 0 auto;\n}\n\nheader {\n    /* position: relative; */\n    display: inline-flex;\n    font-size: 6em;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    margin: 0 auto;\n    padding: 0;\n}\n\nheader h1 {\n    align-self: center;\n}\n\n.form-layout {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    display: grid;\n}\n\n.form-layout div {\n    margin: 0 auto;\n    padding: 1% 20% !important;\n}\n\n.form-layout div input{\n    text-align: center;\n}\n\n.form-layout div button {\n    display: grid;\n    margin: auto;\n    padding: auto;\n}\n\ntextarea {\n    height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG9DQUFvQztJQUNwQyw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztDQUNkOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0NBQzlCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSBhdXRvIDEwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuaGVhZGVyIHtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZm9udC1zaXplOiA2ZW07XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5oZWFkZXIgaDEge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmZvcm0tbGF5b3V0IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5mb3JtLWxheW91dCBkaXYge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDElIDIwJSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1sYXlvdXQgZGl2IGlucHV0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm0tbGF5b3V0IGRpdiBidXR0b24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IGF1dG87XG59XG5cbnRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdOpacity=1 bdColor=\"#333\" size=\"default\" color=\"#fff\" type=\"ball-zig-zag-deflect\" [fullScreen]=\"true\">\n  <p style=\"color: white\"> Loading... </p>\n</ngx-spinner>\n<main class=\"main\">\n  <header>\n    <i class=\"material-icons\">\n      perm_contact_calendar\n    </i>\n    <h1>\n      <strong>Contact Me</strong>\n    </h1>\n  </header>\n  <!-- Contact Form -->\n  <div class=\"form-layout\">\n    <!-- form -->\n    <form action=\"\" method=\"post\" id=\"contactForm\" name=\"contactForm\">\n      <fieldset>\n        <div class=\"row-main\">\n          <input class=\"col\" type=\"text\" value=\"\" id=\"contactName\" name=\"contactName\" placeholder=\"Name *\">\n        </div>\n\n        <div class=\"row-main\">\n          <input class=\"col\" type=\"text\" value=\"\" id=\"contactEmail\" name=\"contactEmail\" placeholder=\"Email *\">\n        </div>\n\n        <div class=\"row-main\">\n          <input class=\"col\" type=\"text\" value=\"\" id=\"contactSubject\" name=\"contactSubject\" placeholder=\"Subject\">\n        </div>\n\n        <div class=\"row-main\">\n          <textarea class=\"col\" cols=\"50\" rows=\"5\" id=\"contactMessage\" name=\"contactMessage\"\n            placeholder=\"Message\"></textarea>\n        </div>\n\n        <div>\n          <button class=\"submit\">Submit</button>\n        </div>\n      </fieldset>\n    </form>\n    <!-- Form End -->\n    <!-- contact-warning -->\n    <div id=\"message-warning\"> Error boy</div>\n    <!-- contact-success -->\n    <div id=\"message-success\">\n      <i class=\"fa fa-check\"></i>Your message was sent, thank you!<br>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(spinner) {
        this.spinner = spinner;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.spinner.show();
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n    background-color: #2c3e50;\n    padding-top: 48px;\n    color: #ecf0f1;\n    font-size: 14px;\n    text-align: center;\n    position: relative;\n}\n\nfooter a, footer a:visited {\n    color: #525252;\n}\n\nfooter a:hover, footer a:focus {\n    color: #fff;\n}\n\n/* copyright */\n\nfooter .copyright {\n    margin: 0;\n    padding: 0 0 1em 0;\n}\n\nfooter .copyright li {\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n    line-height: 24px;\n}\n\n.ie footer .copyright li {\n    display: inline;\n}\n\nfooter .copyright li:before {\n    content: \"\\2022\";\n    padding-left: 10px;\n    padding-right: 10px;\n    color: #095153;\n}\n\nfooter .copyright li:first-child:before {\n    display: none;\n}\n\n/* social links */\n\nfooter .social-links {\n    margin: 18px 0 30px 0;\n    padding: 0;\n    font-size: 30px;\n}\n\nfooter .social-links li {\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n    margin-left: 42px;\n    color: #F06000;\n}\n\nfooter .social-links li:first-child {\n    margin-left: 0;\n}\n\n/* Go To Top Button */\n\n#go-top {\n    position: absolute;\n    top: -24px;\n    left: 50%;\n    margin-left: -30px;\n}\n\n#go-top a {\n    text-decoration: none;\n    border: 0 none;\n    display: block;\n    width: 60px;\n    height: 60px;\n    background-color: #525252;\n    transition: all 0.2s ease-in-out;\n    color: #fff;\n    font-size: 21px;\n    line-height: 60px;\n    border-radius: 100%;\n}\n\n#go-top a:hover {\n    background-color: #0F9095;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVELGVBQWU7O0FBRWY7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQsa0JBQWtCOztBQUVsQjtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVELHNCQUFzQjs7QUFFdEI7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUsxQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xuICAgIHBhZGRpbmctdG9wOiA0OHB4O1xuICAgIGNvbG9yOiAjZWNmMGYxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5mb290ZXIgYSwgZm9vdGVyIGE6dmlzaXRlZCB7XG4gICAgY29sb3I6ICM1MjUyNTI7XG59XG5cbmZvb3RlciBhOmhvdmVyLCBmb290ZXIgYTpmb2N1cyB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi8qIGNvcHlyaWdodCAqL1xuXG5mb290ZXIgLmNvcHlyaWdodCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMCAxZW0gMDtcbn1cblxuZm9vdGVyIC5jb3B5cmlnaHQgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmllIGZvb3RlciAuY29weXJpZ2h0IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmZvb3RlciAuY29weXJpZ2h0IGxpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjJcIjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjb2xvcjogIzA5NTE1Mztcbn1cblxuZm9vdGVyIC5jb3B5cmlnaHQgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBzb2NpYWwgbGlua3MgKi9cblxuZm9vdGVyIC5zb2NpYWwtbGlua3Mge1xuICAgIG1hcmdpbjogMThweCAwIDMwcHggMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuZm9vdGVyIC5zb2NpYWwtbGlua3MgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogNDJweDtcbiAgICBjb2xvcjogI0YwNjAwMDtcbn1cblxuZm9vdGVyIC5zb2NpYWwtbGlua3MgbGk6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4vKiBHbyBUbyBUb3AgQnV0dG9uICovXG5cbiNnby10b3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yNHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG59XG5cbiNnby10b3AgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbiNnby10b3AgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBGOTA5NTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"\">\n    <div class=\"twelve columns\">\n      <ul class=\"social-links\">\n        <li><a target=\"_blank\" href=\"www.facebook.com/dr.rk47\"><i class=\"fa fa-facebook\"></i></a></li>\n        <li><a target=\"_blank\" href=\"www.linkedin.com/in/dr-rahulk95\"><i class=\"fa fa-linkedin\"></i></a></li>\n        <li><a target=\"_blank\" href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\n        <li><a target=\"_blank\" href=\"#\"><i class=\"fa fa-skype\"></i></a></li>\n        <!-- <li><a target=\"_blank\" href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li> -->\n        <!-- <li><a target=\"_blank\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li> -->\n      </ul>\n      <ul class=\"copyright\">\n        <li>© Copyright 2019 HevenTech</li>\n        <li>Design by <a title=\"HevenTech\" target=\"_blank\" href=\"#\">HevenTech Pvt. Ltd.</a></li>\n      </ul>\n    </div>\n    <div id=\"go-top\"><a class=\"smoothscroll\" title=\"Back to Top\" (click)=\"gotoTop()\">\n        <i class=\"fa fa-chevron-circle-up\" aria-hidden=\"true\"></i> </a>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.gotoTop = function () {
        window.scroll(0, 0);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n    background-color: #34495e;\n    box-sizing: border-box;\n    display: grid;\n    min-height: 100vh;\n    min-width: 100%;\n    overflow:auto; \n    /* background: #161415 url(../images/header-background.jpg) no-repeat top center;\n    -webkit-background-size: cover !important; */\n}\n\n.main-div { \n    margin: auto;\n    font-size: 100%;\n    text-align: center;\n    color: #fff;\n}\n\n.main-div .intro-name {\n    display: inline-block;\n    /* vertical-align: middle; */\n }\n\n.main-div .intro-name-text hr {\n    width: 60%;\n    height: 2px;\n    margin: 18px auto 24px auto;\n    border-radius: 12em;\n    border-color: #2F2D2E;\n    border-color: rgba(150, 150, 150, .1);\n}\n\nul {\n    list-style: none outside;\n}\n\nli {\n    line-height: 18px;\n    margin-bottom: 12px;\n}\n\n.main-div .intro-name-text h3 span,\n.main-div .intro-name-text h3 a {\n   color: #fff;\n}\n\n/* Name and info Styling */\n\n.intro-name {\n    display: grid;\n    margin: auto;\n    text-align: center;\n}\n\n.intro-name h1 {\n    position: relative;\n    font: 90px/1.1em 'opensans-bold', sans-serif;\n    color: #ecf0f1;\n    font-weight: bold;\n    letter-spacing: -2px;\n    margin: 0 auto 18px auto;\n    text-shadow: 0px 1px 3px rgba(0, 0, 0, .8);\n}\n\n.intro-name h3 {\n    font: 18px/1.9em 'librebaskerville-regular', serif;\n    color: #A8A8A8;\n    margin: 0 auto;\n    width: 70%;\n    text-shadow: 0px 1px 2px rgba(0, 0, 0, .5);\n}\n\n.social {\n    margin: 24px 0;\n    padding: 0;\n    font-size: 30px;\n    text-shadow: 0px 1px 2px rgba(0, 0, 0, .8);\n}\n\n.intro-name .social li {\n    display: inline-block;\n    margin: 0 15px;\n    padding: 0;\n    line-height: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZDtpREFDNkM7Q0FDaEQ7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsNkJBQTZCO0VBQy9COztBQUVGO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQ0FBc0M7Q0FDekM7O0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEOztHQUVHLFlBQVk7Q0FDZDs7QUFDRCwyQkFBMkI7O0FBQzNCO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7Q0FDOUM7O0FBRUQ7SUFDSSxtREFBbUQ7SUFDbkQsZUFBZTtJQUNmLGVBQWU7SUFDZixXQUFXO0lBQ1gsMkNBQTJDO0NBQzlDOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsMkNBQTJDO0NBQzlDOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6YXV0bzsgXG4gICAgLyogYmFja2dyb3VuZDogIzE2MTQxNSB1cmwoLi4vaW1hZ2VzL2hlYWRlci1iYWNrZ3JvdW5kLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7ICovXG59XG5cbi5tYWluLWRpdiB7IFxuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubWFpbi1kaXYgLmludHJvLW5hbWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xuIH1cblxuLm1haW4tZGl2IC5pbnRyby1uYW1lLXRleHQgaHIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgbWFyZ2luOiAxOHB4IGF1dG8gMjRweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEyZW07XG4gICAgYm9yZGVyLWNvbG9yOiAjMkYyRDJFO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNTAsIDE1MCwgMTUwLCAuMSk7XG59XG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xufVxuXG5saSB7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLm1haW4tZGl2IC5pbnRyby1uYW1lLXRleHQgaDMgc3Bhbixcbi5tYWluLWRpdiAuaW50cm8tbmFtZS10ZXh0IGgzIGEge1xuICAgY29sb3I6ICNmZmY7XG59XG4vKiBOYW1lIGFuZCBpbmZvIFN0eWxpbmcgKi9cbi5pbnRyby1uYW1lIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnRyby1uYW1lIGgxIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udDogOTBweC8xLjFlbSAnb3BlbnNhbnMtYm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNlY2YwZjE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMThweCBhdXRvO1xuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIC44KTtcbn1cblxuLmludHJvLW5hbWUgaDMge1xuICAgIGZvbnQ6IDE4cHgvMS45ZW0gJ2xpYnJlYmFza2VydmlsbGUtcmVndWxhcicsIHNlcmlmO1xuICAgIGNvbG9yOiAjQThBOEE4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjUpO1xufVxuXG4uc29jaWFsIHtcbiAgICBtYXJnaW46IDI0cHggMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuOCk7XG59XG5cbi5pbnRyby1uYW1lIC5zb2NpYWwgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <div class=\"main-div\">\n        <div class=\"intro-name\">\n            <div class=\"intro-name-text\">\n                <h1>\n                    I'm Rahul Kumar.\n                </h1>\n                <h3>\n                    I'm a <strong>New Delhi</strong> based <strong>Software Developer</strong> and a karateka creating\n                    awesome and effective websites for companies of all sizes around the globe. Let's start scrolling\n                    and\n                    learn more about me.\n                </h3>\n                <hr>\n                <ul class=\"social\">\n                    <li><a target=\"_blank\" [routerLink]=\"[ 'www.facebook.com/dr.rk47' ]\"><i class=\"fa fa-facebook\"></i></a>\n                    </li>\n                    <li><a target=\"_blank\" href=\"www.linkedin.com/in/dr-rahulk95\"><i class=\"fa fa-linkedin\"></i></a></li>\n                    <li><a target=\"_blank\" href=\"#\"><i class=\"fa fa-instagram\"></i></a></li>\n                    <li><a target=\"_blank\" href=\"#\"><i class=\"fa fa-skype\"></i></a></li>\n                    <!-- <li><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li> -->\n                    <!-- <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li> -->\n                </ul>\n            </div>\n        </div>\n    </div>\n</main>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  services works!\n</p>\n\n\n<!-- @media only screen and (max-width: 767px) {\n\n  /* mobile navigation\n  -------------------------------------------------------------------- */\n  #nav-wrap {\n     font: 12px 'opensans-bold', sans-serif;\n     background: transparent !important;\n     letter-spacing: 1.5px;  \n     width: auto;\n     position: fixed;\n     top: 0;\n     right: 0;\n  }\n  #nav-wrap > a {\n      width: 48px;\n       height: 48px;\n       text-align: left;\n       background-color: #CC5200;\n       position: relative;\n     border: none;\n     float: right;\n\n     font: 0/0 a;\n     text-shadow: none;\n     color: transparent;\n\n     position: relative;\n     top: 0px;\n     right: 30px;\n  }\n\n   #nav-wrap > a:before,\n  #nav-wrap > a:after {\n      position: absolute;\n       border: 2px solid #fff;\n       top: 35%;\n       left: 25%;\n       right: 25%;\n       content: '';\n   }\n  #nav-wrap > a:after { top: 60%; }\n\n  /* toggle buttons */\n   #nav-wrap:not( :target ) > a:first-of-type,\n   #nav-wrap:target > a:last-of-type  {\n      display: block;\n   }\n\n  /* hide menu panel */\n  #nav-wrap ul#nav {\n     height: auto;\n       display: none;\n     clear: both;\n     width: auto; \n     float: right;     \n\n     position: relative;\n     top: 12px;\n     right: 0;\n  }\n\n  /* display menu panels */\n   #nav-wrap:target > ul#nav\t{\n      display: block;\n     padding: 30px 20px 48px 20px;\n     background: #1f2024;\n     margin: 0 30px;\n     clear: both;\n  }\n\n  ul#nav li {\n     display: block;\n     height: auto;      \n     margin: 0 auto; \n     padding: 0 4%;           \n     text-align: left;\n     border-bottom: 1px solid #2D2E34;\n     border-bottom-style: dotted; \n  }\n \n  ul#nav li a {  \n     display: block;    \n     margin: 0;\n     padding: 0;      \n     margin: 12px 0; \n     line-height: 16px; /* reset line-height from 48px */\n     border: none;\n  }  \n\n   /* Go To Top Button */\n #go-top { margin-left: -22px; }\n #go-top a {\n   width: 54px;\n   height: 54px;\n    font-size: 18px;\n    line-height: 54px;\n }\n\n\n} -->"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");



/* External Modules Imported */

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"]
            ],
            exports: [
                ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/support/support.component.css":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  support works!\n</p>\n"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/app/support/support.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/technology/technology.component.css":
/*!*****************************************************!*\
  !*** ./src/app/technology/technology.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2hub2xvZ3kvdGVjaG5vbG9neS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/technology/technology.component.html":
/*!******************************************************!*\
  !*** ./src/app/technology/technology.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  technology works!\n</p>\n"

/***/ }),

/***/ "./src/app/technology/technology.component.ts":
/*!****************************************************!*\
  !*** ./src/app/technology/technology.component.ts ***!
  \****************************************************/
/*! exports provided: TechnologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyComponent", function() { return TechnologyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TechnologyComponent = /** @class */ (function () {
    function TechnologyComponent() {
    }
    TechnologyComponent.prototype.ngOnInit = function () {
    };
    TechnologyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technology',
            template: __webpack_require__(/*! ./technology.component.html */ "./src/app/technology/technology.component.html"),
            styles: [__webpack_require__(/*! ./technology.component.css */ "./src/app/technology/technology.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TechnologyComponent);
    return TechnologyComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/rahul/Rishikesh/rishikeshWebsite/client/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /home/rahul/Rishikesh/rishikeshWebsite/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map