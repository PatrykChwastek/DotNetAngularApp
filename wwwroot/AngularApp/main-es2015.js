(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./globals.ts":
/*!********************!*\
  !*** ./globals.ts ***!
  \********************/
/*! exports provided: rootURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootURL", function() { return rootURL; });

const rootURL = 'https://dot-net-core-angular-app.herokuapp.com/api/';


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark \" >\n  <a class=\"navbar-brand\" href=\"#\"> \n    <img width=\"55\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n     Welcome in My {{ title }}\n  </a>\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"'active'\">\n        <a class=\"nav-link\" routerLink=\"/register\">Register <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\"[routerLinkActive]=\"'active'\">\n        <a class=\"nav-link\" routerLink=\"/users\">Users</a>\n      </li>\n      <li class=\"nav-item\"[routerLinkActive]=\"'active'\">\n          <a class=\"nav-link\" routerLink=\"/stories\">Stories</a>\n        </li>\n        <li class=\"nav-item\"[routerLinkActive]=\"'active'\">\n          <a class=\"nav-link\" routerLink=\"/story_new\">Create Story</a>\n        </li>\n\n        <span [ngSwitch]=\"isUserAuthenticated()\">\n          <button mat-raised-button *ngSwitchCase=\"false\" class=\"marginAuto nav-item\" \n           color=\"primary\" routerLink=\"/login\">\n            <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> LOGIN\n          </button>\n          <button mat-raised-button *ngSwitchCase=\"true\" class=\"marginAuto nav-item\" \n           (click)=\"logOut()\" color=\"primary\" routerLink=\"/login\">\n            <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> LOGOUT\n          </button>\n        </span>\n    </ul>\n  </div>\n</nav>\n<div style=\"margin-top: 6px\" class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"homeBox\">\n    <mat-card-header>\n        <mat-card-title>About app...</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <p>\n        The presented sample application is intended to be used to publish and view short stories.\n        The application supports basic CRUD operations.\n        Most of the data has been generated to better present all available functions.\n        The upper bar is used for navigation, some tabs will be available after logging in (login details below).\n        The authentication process is based on JSON Web Token(JWT). \n        </p>\n            <hr>\n        <p>Login Data:</p>\n        <p><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i> user</p>\n        <p><i class=\"fa fa-key\" aria-hidden=\"true\"></i> 12345</p>\n        </mat-card-content>\n</mat-card>\n\n<mat-card class=\"homeBox\">\n        <mat-card-header>\n            <mat-card-title><i class=\"fa fa-code\" aria-hidden=\"true\"></i> Used Technologies:</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n                \n            <mat-card class=\"techBox\">\n                <mat-card-header>\n                    <mat-card-title>Backend:</mat-card-title>\n                </mat-card-header>\n                <mat-card-content>\n                        <div class=\"row\">\n                                <p class=\"mList\"><img class=\"techLogo\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/240px-.NET_Core_Logo.svg.png\"> \n                                    .Net Core\n                                </p>\n                                <p class=\"mList\"><img class=\"techLogo\" src=\"https://safenet.gemalto.com/uploadedImages/images/Logos/postgresql-logo.png\">\n                                    PostgreSQL\n                                </p>\n                            </div>\n                </mat-card-content>\n            </mat-card>\n            <mat-card class=\"techBox\">\n                    <mat-card-header>\n                        <mat-card-title>Frontend:</mat-card-title>\n                    </mat-card-header>\n                    <mat-card-content>\n                        <div class=\"row\">\n                                <p class=\"mList\"><img class=\"techLogo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n                                    Angular 8 + Material\n                                </p>\n                                <p class=\"mList\"><img class=\"techLogo\" src=\"https://d29fhpw069ctt2.cloudfront.net/icon/image/38839/preview.svg\">\n                                    Bootstrap 4\n                                </p>\n                            </div>\n                    </mat-card-content>\n                </mat-card>\n                <h6>Project available on<a target=\"_blank\" href=\"https://github.com/PatrykChwastek/DotNetAngularApp\"> GitHub</a></h6>\n        </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pagination/pagination.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pagination/pagination.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"pager.totalPages > 1\">          \n  <ul class=\"pagination flex-wrap\">\n      <li *ngIf=\"pager\">\n        <button mat-raised-button color=\"primary\" class=\"page-item page-link \" \n         [disabled]=\"pager.page === 1\" \n         (click)=\"setPage(1)\"><<\n        </button>\n      </li>\n      <li>\n        <button mat-raised-button color=\"primary\"\n         class=\"page-item page-link\" \n         [disabled]=\"pager.page == 1\"(click)=\"setPage(pager.page - 1)\"><\n        </button>\n      </li>\n\n      <ng-container *ngIf=\"pager.totalPages <= 8\">\n        <li *ngFor=\"let page of counter(pager.totalPages); let i = index\" >                   \n          <button mat-mini-fab color=\"primary\" type=\"button\"  \n          [disabled]=\"pager.page === i+1\" class=\"page-item page-link \"  \n          (click)=\"setPage(i+1)\">{{i+1}}\n          </button>\n        </li>\n      </ng-container>\n\n    <ng-container *ngIf=\"pager.totalPages > 8\">\n      <ng-container *ngIf=\" \n          pager.page===1 || pager.page===2||pager.page===3&&\n          pager.page!==pager.totalPages && pager.page!==pager.totalPages-1&&\n          pager.page!==pager.totalPages-2&&pager.page!==pager.totalPages-3\"\n      >\n        <li *ngFor=\"let page of counter(7); let i = index\" >                   \n          <button mat-mini-fab color=\"primary\" type=\"button\"  \n          [disabled]=\"pager.page === i+1\" class=\"page-item page-link \"  \n          (click)=\"setPage(i+1)\">{{i+1}}\n          </button>\n        </li>\n      </ng-container>\n\n      <ng-container *ngIf=\" \n          pager.page===pager.totalPages || pager.page===pager.totalPages-1||\n          pager.page===pager.totalPages-2||pager.page===pager.totalPages-3\"\n      >\n        <li *ngFor=\"let page of counter(7); let i = index\" >                   \n          <button mat-mini-fab color=\"primary\" type=\"button\"  \n          [disabled]=\"pager.page === pager.totalPages-7+i+1\" class=\"page-item page-link \"  \n          (click)=\"setPage(pager.totalPages-7+i+1)\">{{pager.totalPages-7+i+1}}\n          </button>\n        </li>\n      </ng-container>\n\n      <ng-container *ngIf=\" \n          pager.page!==1 && pager.page!==2 && pager.page!==3 &&\n          pager.page!==pager.totalPages && pager.page!==pager.totalPages-1&&\n          pager.page!==pager.totalPages-2&&pager.page!==pager.totalPages-3\">\n          <li>                   \n            <button mat-mini-fab color=\"primary\" type=\"button\"  \n            class=\"page-item page-link \"  \n            (click)=\"setPage(pager.page-3)\">{{pager.page-3}}\n            </button>\n          </li>\n          <li>                   \n              <button mat-mini-fab color=\"primary\" type=\"button\"  \n              class=\"page-item page-link \"  \n              (click)=\"setPage(pager.page-2)\">{{pager.page-2}}\n              </button>\n            </li>\n            <li>                   \n                <button mat-mini-fab color=\"primary\" type=\"button\"  \n                class=\"page-item page-link \"  \n                (click)=\"setPage(pager.page-1)\">{{pager.page-1}}\n                </button>\n              </li>\n              <li>                   \n                  <button disabled mat-mini-fab color=\"primary\" type=\"button\"  \n                  class=\"page-item page-link\"\n                  >{{pager.page}}\n                  </button>\n                </li>\n                <li>                   \n                    <button mat-mini-fab color=\"primary\" type=\"button\"  \n                    class=\"page-item page-link \"  \n                    (click)=\"setPage(pager.page+1)\">{{pager.page+1}}\n                    </button>\n                  </li>\n                  <li>                   \n                      <button mat-mini-fab color=\"primary\" type=\"button\"  \n                      class=\"page-item page-link \"  \n                      (click)=\"setPage(pager.page+2)\">{{pager.page+2}}\n                      </button>\n                    </li>\n                    <li>                   \n                        <button mat-mini-fab color=\"primary\" type=\"button\"  \n                        class=\"page-item page-link \"  \n                        (click)=\"setPage(pager.page+3)\">{{pager.page+3}}\n                        </button>\n                      </li>\n        </ng-container>\n      </ng-container>\n      <li class=\"page-item \">\n        <button mat-raised-button color=\"primary\" class=\"page-link  \" \n         [disabled]=\"pager.page === pager.totalPages\"\n         (click)=\"setPage(pager.page + 1)\">>\n        </button>\n      </li>\n      <li>\n        <button mat-raised-button color=\"primary\" class=\"page-item page-link\" \n         [disabled]=\"pager.page === pager.totalPages\" \n         (click)=\"setPage(pager.totalPages)\">>>\n        </button>\n      </li>\n    </ul>      \n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/stories/create-story/create-story.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/stories/create-story/create-story.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <mat-card-title>Create New Story</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <form [formGroup]=\"storyForm\"  (ngSubmit)=\"postStory()\">\n            <input type=\"hidden\" formControlName=\"storyID\" >\n            \n            <mat-form-field class=\"full-width\">\n                <input matInput formControlName=\"storyTitle\" placeholder=\"Story Title\">\n            </mat-form-field>\n                \n            <mat-form-field class=\"full-width\">\n                <textarea matInput  formControlName=\"storyContent\"\n                 placeholder=\"Story Content\">\n                </textarea>\n            </mat-form-field>\n            <div class=\"row\">\n                <mat-form-field class=\"col-md-6\">\n                    <mat-label>Select Category</mat-label>\n                    <select matNativeControl>  \n                        <option value=\"\"  disabled selected></option>                    \n                        <option *ngFor=\"let cat of allCategories\" \n                        value=\"cat\" (click)=\"addCategory(cat)\"[disabled]=\"isSelected(cat)\">\n                            {{cat}}\n                        </option>\n                    </select>\n                    <mat-error>\n                        This field is required\n                    </mat-error>\n                    <mat-hint>Pick coategories of your story</mat-hint>\n                </mat-form-field>\n                <mat-chip-list class=\"col-md-6\">\n                    <mat-chip *ngFor=\"let item of categories\">\n                          {{item}}\n                    <mat-icon (click)=\"removeCategory(item)\" matChipRemove>cancel</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n            </div>\n            <div class=\"form-grup\">\n                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Create</button>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/stories/stories.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/stories/stories.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"searchBox\">\n\n    <form [formGroup]=\"searchForm\"  (ngSubmit)=\"search()\">\n        <div style=\"display: inline-block\"  class=\"col-md-2\">\n            <h5>Search Story: </h5>\n        </div>\n        <mat-form-field class=\"col-md-4\">\n            <input matInput formControlName=\"storyTitle\" placeholder=\"Story Title\">\n        </mat-form-field>\n        <mat-form-field class=\"col-md-4\">\n            <mat-label>Select Category</mat-label>\n            <select matNativeControl formControlName=\"storyCategory\">  \n                <option value=\"\" disabled selected></option>           \n                <option ngValue=\"\"> none</option>           \n                <option *ngFor=\"let cat of allCategories\" \n                    value=\"{{cat}}\">\n                    {{cat}}\n                </option>\n            </select>\n        </mat-form-field>\n        <div style=\"display: inline-block\" class=\"col-md-2\">\n            <button mat-raised-button color=\"primary\" type=\"submit\">\n                Search\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            </button>\n        </div>\n    </form>\n</mat-card>\n<span [ngSwitch]=\"allStories.length<=0\">\n    <div *ngSwitchCase=\"false\">\n<mat-card class=\"storyBox\"\n    *ngFor=\"let story of allStories\" [routerLink]=\"['/story_view', story.storyID]\">\n    \n    <div class=\"row col-md-12\">\n        <h4>{{story.storyTitle}}</h4>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-3 marginAuto\">\n          Author: {{story.author}}\n        </div>\n        <div class=\"row col-md-9 \">\n           <p class=\"marginAuto\">Categories: </p>\n            <mat-chip-list > \n                    <mat-chip color=\"primary\" *ngFor=\"let cat of story.categories\">\n                        {{cat}}\n                    </mat-chip>\n            </mat-chip-list>\n        </div>\n    </div>\n</mat-card>\n</div>\n<mat-card   *ngSwitchCase=\"true\">\n    <h3>Stories not found...</h3>\n</mat-card>\n</span>\n<app-pagination [pager]=\"paginationData\" [getUrl]=\"url\"></app-pagination>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/stories/story-view/story-view.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/stories/story-view/story-view.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conteiner\">\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title>{{story.storyTitle}}</mat-card-title>\n            <mat-card-subtitle>By: {{author}}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n            <p>\n                {{story.storyContent}}\n            </p>\n        </mat-card-content>\n        <mat-card-actions>\n            <hr>\n            <div class=\"categoriesBox\">\n                <mat-chip-list>Categories:\n                        <mat-chip color=\"primary\" *ngFor=\"let cat of story.categories\">\n                            {{cat}}\n                        </mat-chip>\n                </mat-chip-list>\n            </div>\n        </mat-card-actions>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/user/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/user/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-card class=\"col-md-5 loginBox\">\n        <h3 class=\"display-4\" text-center>Login</h3>\n        <hr>\n            <form [formGroup]=\"loginForm\"  (ngSubmit)=\"loginUser()\">\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                            <div class=\"input-group-text bg-white\">\n                                <i class=\"fa fa-user-circle\"></i>\n                            </div>\n                        </div>\n                        <input formControlName=\"userName\" class=\"form-control\"\n                            placeholder=\"Username\" required maxlength=\"20\" minlength=\"4\">\n                    </div>\n                </div>\n    \n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                            <div class=\"input-group-text bg-white\">\n                                <i class=\"fa fa-key\"></i>\n                            </div>\n                        </div>\n                        <input type=\"password\" formControlName=\"password\"\n                            class=\"form-control\" placeholder=\"Password\" required maxlength=\"20\" minlength=\"4\">\n                    </div>\n                </div> \n                <div class=\"form-grup\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Submit</button>\n                </div>\n            </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/user/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/user/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"col-md-5\" style=\"margin: auto;\">\n    <h1 class=\"display-4\" text-center>Register</h1>\n    <hr>\n        <form #registerForm=\"ngForm\" (submit)=\"registerUser(registerForm)\" autocomplete=\"off\">\n            <input type=\"hidden\" name=\"userID\" [value]=\"user.userID\">\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text bg-white\">\n                            <i class=\"fa fa-user-circle\"></i>\n                        </div>\n                    </div>\n                    <input name=\"userName\" #userName=\"ngModel\" [(ngModel)]=\"user.userName\" class=\"form-control\"\n                        placeholder=\"Username\" required minlength=\"4\">\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text bg-white\">\n                            <i class=\"fa fa-key\"></i>\n                        </div>\n                    </div>\n                    <input type=\"password\" name=\"userPass\" #userPass=\"ngModel\" [(ngModel)]=\"user.userPass\"\n                        class=\"form-control\" placeholder=\"Password\" required  minlength=\"4\">\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text bg-white\">\n                            <b>@</b>\n                        </div>\n                    </div>\n                    <input name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" class=\"form-control\" \n                        placeholder=\"Email\" required minlength=\"4\">\n                </div>\n            </div>\n\n            <div class=\"form-grup\">\n                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\"\n                    [disabled]=\"registerForm.invalid\">Register</button>\n            </div>\n        </form>\n</mat-card>  \n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/user/users/users.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/user/users/users.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    .thTab {\n        text-align: center;\n    }\n\n\n    td {\n        text-align: center;\n    }\n\n    .marg6{\n        margin: 6px;\n    }\n</style>\n<div class=\"row marg6\">\n    <div class=\"col-md-5\">\n            <mat-card>\n                    <h3 class=\"display-4\" text-center>Edit</h3>\n                    <hr>\n                        <form [formGroup]=\"editForm\"  (ngSubmit)=\"submitUser()\">\n                            <input type=\"hidden\" formControlName=\"userID\" >\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <div class=\"input-group-text bg-white\">\n                                            <i class=\"fa fa-user-circle\"></i>\n                                        </div>\n                                    </div>\n                                    <input formControlName=\"userName\" class=\"form-control\"\n                                        placeholder=\"Username\" required  minlength=\"4\">\n                                </div>\n                            </div>\n                \n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <div class=\"input-group-text bg-white\">\n                                            <i class=\"fa fa-key\"></i>\n                                        </div>\n                                    </div>\n                                    <input type=\"password\" formControlName=\"userPass\"\n                                        class=\"form-control\" placeholder=\"Password\" required minlength=\"4\">\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <div class=\"input-group-text bg-white\">\n                                            @\n                                        </div>\n                                    </div>\n                                    <input formControlName=\"email\" class=\"form-control\"\n                                        placeholder=\"Email\" required  minlength=\"4\">\n                                </div>\n                            </div>\n                \n                            <div class=\"form-grup\">\n                                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Edit</button>\n                            </div>\n                        </form>\n                </mat-card>  \n    </div>\n    <div class=\"col-md-7\">\n        <mat-card>\n            <table style=\"width: 100%\" mat-table [dataSource]=\"users\">\n\n                <ng-container matColumnDef=\"userID\">\n                    <th mat-header-cell *matHeaderCellDef class=\"thTab\"> ID </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.userID}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"userName\">\n                    <th mat-header-cell *matHeaderCellDef class=\"thTab\">Username</th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.userName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"email\">\n                    <th mat-header-cell *matHeaderCellDef class=\"thTab\">Email</th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"Actions\">\n                    <th mat-header-cell *matHeaderCellDef class=\"thTab\">Actions</th>\n                    <td mat-cell *matCellDef=\"let element\">\n                        <button style=\"margin-right: 4px\" mat-mini-fab color=\"primary\"\n                        (click)=\"editUser(element.userID)\" >\n                            <i class=\"fa fa-edit\"></i>\n                        </button>\n                        <button mat-mini-fab color=\"warn\" \n                            (click)=\"deleteUser(element.userID)\" >\n                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                        </button>\n                    </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n        </mat-card>\n        <app-pagination [pager]=\"paginationData\" [getUrl]=\"url\"></app-pagination>          \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, rutingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rutingComponents", function() { return rutingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_user_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/users/users.component */ "./src/app/views/user/users/users.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_stories_stories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/stories/stories.component */ "./src/app/views/stories/stories.component.ts");
/* harmony import */ var _views_stories_story_view_story_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/stories/story-view/story-view.component */ "./src/app/views/stories/story-view/story-view.component.ts");
/* harmony import */ var _views_stories_create_story_create_story_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/stories/create-story/create-story.component */ "./src/app/views/stories/create-story/create-story.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");











const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'users', component: _views_user_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'stories', component: _views_stories_stories_component__WEBPACK_IMPORTED_MODULE_5__["StoriesComponent"] },
    { path: 'story_new', component: _views_stories_create_story_create_story_component__WEBPACK_IMPORTED_MODULE_7__["CreateStoryComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'story_view/:id', component: _views_stories_story_view_story_view_component__WEBPACK_IMPORTED_MODULE_6__["StoryViewComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const rutingComponents = [
    _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
    _views_user_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
    _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
    _views_stories_stories_component__WEBPACK_IMPORTED_MODULE_5__["StoriesComponent"],
    _views_stories_create_story_create_story_component__WEBPACK_IMPORTED_MODULE_7__["CreateStoryComponent"],
    _views_stories_story_view_story_view_component__WEBPACK_IMPORTED_MODULE_6__["StoryViewComponent"],
    _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marginAuto{\r\n    margin: auto;\r\n}\r\n\r\n\r\n::ng-deep .green-sb{\r\n    color: black;\r\n    background-color:  rgb(15, 126, 15);\r\n    border: 2px;\r\n}\r\n\r\n\r\n::ng-deep .red-sb{\r\n    color: rgb(255, 255, 255);\r\n    background-color:  rgb(145, 36, 17);\r\n    border: 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsV0FBVztBQUNmOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luQXV0b3tcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAuZ3JlZW4tc2J7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDE1LCAxMjYsIDE1KTtcclxuICAgIGJvcmRlcjogMnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnJlZC1zYntcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDE0NSwgMzYsIDE3KTtcclxuICAgIGJvcmRlcjogMnB4O1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AngularApp';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    isUserAuthenticated() {
        let token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        else {
            return false;
        }
    }
    logOut() {
        localStorage.removeItem("jwt");
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _shared_models_pagination_detail_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/models/pagination-detail.model */ "./src/app/shared/models/pagination-detail.model.ts");
/* harmony import */ var _views_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/pagination/pagination.component */ "./src/app/views/pagination/pagination.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["rutingComponents"],
            _views_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"],
            _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
            _views_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]
        ],
        providers: [_shared_models_user_model__WEBPACK_IMPORTED_MODULE_7__["User"], _shared_models_pagination_detail_model__WEBPACK_IMPORTED_MODULE_8__["PaginationDetail"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/models/pagination-detail.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/models/pagination-detail.model.ts ***!
  \**********************************************************/
/*! exports provided: PaginationDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationDetail", function() { return PaginationDetail; });
class PaginationDetail {
}


/***/ }),

/***/ "./src/app/shared/models/story.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/story.model.ts ***!
  \**********************************************/
/*! exports provided: Story */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story", function() { return Story; });
class Story {
}


/***/ }),

/***/ "./src/app/shared/models/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuardService = class AuthGuardService {
    constructor(router) {
        this.router = router;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    canActivate() {
        var token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        this.router.navigate(["login"]);
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthGuardService);



/***/ }),

/***/ "./src/app/shared/services/pagination.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/pagination.service.ts ***!
  \*******************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_pagination_detail_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/pagination-detail.model */ "./src/app/shared/models/pagination-detail.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! globals */ "./globals.ts");





let PaginationService = class PaginationService {
    constructor(http) {
        this.http = http;
        this.invokePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageSize = 6;
        this.pagData = new _models_pagination_detail_model__WEBPACK_IMPORTED_MODULE_2__["PaginationDetail"];
    }
    getPage(page, getUrl) {
        return this.http.get(globals__WEBPACK_IMPORTED_MODULE_4__["rootURL"] + getUrl + "page=" + page + "&size=" + this.pageSize);
    }
};
PaginationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginationService.prototype, "invokePage", void 0);
PaginationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], PaginationService);



/***/ }),

/***/ "./src/app/shared/services/story.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/story.service.ts ***!
  \**************************************************/
/*! exports provided: StoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryService", function() { return StoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! globals */ "./globals.ts");




let StoryService = class StoryService {
    constructor(http) {
        this.http = http;
    }
    postStory(story) {
        return this.http.post(globals__WEBPACK_IMPORTED_MODULE_3__["rootURL"] + "story/post", story);
    }
    getStoryByID(ID) {
        return this.http.get(globals__WEBPACK_IMPORTED_MODULE_3__["rootURL"] + "story/get/" + ID);
    }
    getAllStoryCategories() {
        return this.http.get(globals__WEBPACK_IMPORTED_MODULE_3__["rootURL"] + "storycategory");
    }
    getStoryCategoryByID(ID) {
        return this.http.get(globals__WEBPACK_IMPORTED_MODULE_3__["rootURL"] + "storycategory/" + ID);
    }
};
StoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StoryService);



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! globals */ "./globals.ts");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.formData = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    postUser(formData) {
        return this.http.post(globals__WEBPACK_IMPORTED_MODULE_4__["rootURL"] + 'user', formData);
    }
    putUser(userID, formData) {
        return this.http.put(globals__WEBPACK_IMPORTED_MODULE_4__["rootURL"] + 'user/' + userID, formData);
    }
    deleteUser(userID) {
        return this.http.delete(globals__WEBPACK_IMPORTED_MODULE_4__["rootURL"] + 'user/' + userID);
    }
    getUserById(userID) {
        return this.http.get(globals__WEBPACK_IMPORTED_MODULE_4__["rootURL"] + 'user/' + userID);
    }
    getPageOfUsers(page, size) {
        return this.http.get(globals__WEBPACK_IMPORTED_MODULE_4__["rootURL"] + 'user?page=' + page + '&size=' + size);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/views/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    text-align: justify;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.homeBox{\r\n    width: 80%; \r\n    margin: auto;\r\n    margin-bottom: 15px\r\n}\r\n\r\n.mList{\r\n   margin-left: 15px;\r\n}\r\n\r\n.techLogo{\r\n    width: 65px;\r\n}\r\n\r\n.techBox{\r\n    margin-bottom: 15px; \r\n    background-color: rgb(226, 226, 226);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWjtBQUNKOztBQUVBO0dBQ0csaUJBQWlCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5ob21lQm94e1xyXG4gICAgd2lkdGg6IDgwJTsgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4XHJcbn1cclxuXHJcbi5tTGlzdHtcclxuICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi50ZWNoTG9nb3tcclxuICAgIHdpZHRoOiA2NXB4O1xyXG59XHJcblxyXG4udGVjaEJveHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/views/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/views/pagination/pagination.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/pagination/pagination.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    margin: 1px;\r\n    font-size: 14px;\r\n    width: 40px!important;\r\n    min-width: unset!important;\r\n    padding: 1px;\r\n  }\r\n\r\n.mat-card {\r\n\r\nmargin-top: 10px;\r\nmargin-bottom: 15px;\r\npadding: 3px !important;\r\ndisplay: inline-block;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsWUFBWTtFQUNkOztBQUVGOztBQUVBLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjs7QUFFckIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiA0MHB4IWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogdW5zZXQhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gIH1cclxuXHJcbi5tYXQtY2FyZCB7XHJcblxyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG5tYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5wYWRkaW5nOiAzcHggIWltcG9ydGFudDtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pagination/pagination.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pagination/pagination.component.ts ***!
  \**********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_pagination_detail_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/pagination-detail.model */ "./src/app/shared/models/pagination-detail.model.ts");
/* harmony import */ var src_app_shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pagination.service */ "./src/app/shared/services/pagination.service.ts");




let PaginationComponent = class PaginationComponent {
    constructor(paginService) {
        this.paginService = paginService;
    }
    ngOnInit() {
        this.setPage(1);
    }
    setPage(page) {
        this.paginService.getPage(page, this.getUrl)
            .subscribe((res) => {
            this.pager = res;
            this.paginService.pagData = res;
            this.paginService.invokePage.emit(this.pager);
        });
    }
    counter(i) {
        return new Array(i);
    }
};
PaginationComponent.ctorParameters = () => [
    { type: src_app_shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_models_pagination_detail_model__WEBPACK_IMPORTED_MODULE_2__["PaginationDetail"])
], PaginationComponent.prototype, "pager", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PaginationComponent.prototype, "getUrl", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pagination/pagination.component.html"),
        styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/views/pagination/pagination.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"]])
], PaginationComponent);



/***/ }),

/***/ "./src/app/views/stories/create-story/create-story.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/stories/create-story/create-story.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width{\r\n    width: 100%;\r\n}\r\n\r\n::ng-deep .green-sb{\r\n    color: black;\r\n    background-color:  rgb(15, 126, 15);\r\n    border: 2px;\r\n}\r\n\r\n::ng-deep .red-sb{\r\n    color: rgb(255, 255, 255);\r\n    background-color:  rgb(145, 36, 17);\r\n    border: 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3Rvcmllcy9jcmVhdGUtc3RvcnkvY3JlYXRlLXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc3Rvcmllcy9jcmVhdGUtc3RvcnkvY3JlYXRlLXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmdyZWVuLXNie1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigxNSwgMTI2LCAxNSk7XHJcbiAgICBib3JkZXI6IDJweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5yZWQtc2J7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigxNDUsIDM2LCAxNyk7XHJcbiAgICBib3JkZXI6IDJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/stories/create-story/create-story.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/stories/create-story/create-story.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStoryComponent", function() { return CreateStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_story_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/story.service */ "./src/app/shared/services/story.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");






let CreateStoryComponent = class CreateStoryComponent {
    constructor(storyService, _snackBar) {
        this.storyService = storyService;
        this._snackBar = _snackBar;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.categories = [];
        this.allCategories = [];
    }
    ngOnInit() {
        this.storyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            storyID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            storyTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            storyContent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.storyService.getAllStoryCategories().subscribe((res) => {
            res.forEach(element => {
                this.allCategories.push(element.categoryName);
            });
        });
    }
    postStory() {
        var token = localStorage.getItem("jwt");
        this.story = this.storyForm.value;
        this.story.categories = this.categories;
        this.story.storyID = 0;
        this.story.userID = this.jwtHelper.decodeToken(token).userID;
        this.storyService.postStory(this.story)
            .toPromise().then(res => {
            this.storyForm.reset();
            this.categories = [];
            this._snackBar.open("Story Created...", null, {
                duration: 3000,
                panelClass: ['green-sb']
            });
        }, err => {
            console.log(err);
            this._snackBar.open("Error", null, {
                duration: 3000,
                panelClass: ['red-sb']
            });
        });
    }
    addCategory(cat) {
        this.categories.push(cat);
    }
    isSelected(cat) {
        return this.categories.indexOf(cat) > -1;
    }
    removeCategory(category) {
        this.categories.splice(this.categories.indexOf(category), 1);
    }
};
CreateStoryComponent.ctorParameters = () => [
    { type: src_app_shared_services_story_service__WEBPACK_IMPORTED_MODULE_3__["StoryService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
CreateStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-story',
        template: __webpack_require__(/*! raw-loader!./create-story.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/stories/create-story/create-story.component.html"),
        styles: [__webpack_require__(/*! ./create-story.component.css */ "./src/app/views/stories/create-story/create-story.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_story_service__WEBPACK_IMPORTED_MODULE_3__["StoryService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], CreateStoryComponent);



/***/ }),

/***/ "./src/app/views/stories/stories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/stories/stories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".storyBox{\r\n    margin-bottom: 5px;\r\n    padding-left: 20px;\r\n}\r\n.storyBox:hover{\r\n    background-color: #d8d8d8;\r\n}\r\n.storyBox:active{\r\n    background-color: #afafaf;\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n}\r\np{\r\n    margin-right: 3px;\r\n    margin-left: 15px;\r\n}\r\n.marginAuto{\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n.searchBox{\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3Rvcmllcy9zdG9yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zdG9yaWVzL3N0b3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yeUJveHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4uc3RvcnlCb3g6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xyXG59XHJcbi5zdG9yeUJveDphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhZmFmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XHJcbn1cclxucHtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tYXJnaW5BdXRve1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5zZWFyY2hCb3h7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/views/stories/stories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/stories/stories.component.ts ***!
  \****************************************************/
/*! exports provided: StoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesComponent", function() { return StoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_pagination_detail_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/pagination-detail.model */ "./src/app/shared/models/pagination-detail.model.ts");
/* harmony import */ var src_app_shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pagination.service */ "./src/app/shared/services/pagination.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_story_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/story.service */ "./src/app/shared/services/story.service.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");







let StoriesComponent = class StoriesComponent {
    constructor(pgService, storyService, userService) {
        this.pgService = pgService;
        this.storyService = storyService;
        this.userService = userService;
        this.paginationData = new src_app_shared_models_pagination_detail_model__WEBPACK_IMPORTED_MODULE_2__["PaginationDetail"];
        this.url = "story/all?";
        this.stories = [];
        this.allStories = [];
        this.allCategories = [];
    }
    ngOnInit() {
        this.loadStories();
        this.storyService.getAllStoryCategories().subscribe((res) => {
            res.forEach(element => {
                this.allCategories.push(element.categoryName);
            });
        });
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            storyTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            storyCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    search() {
        if (!this.searchForm.value.storyCategory &&
            !this.searchForm.value.storyTitle) {
            this.url = "story/all?";
            this.loadStories();
        }
        if (this.searchForm.value.storyCategory &&
            !this.searchForm.value.storyTitle) {
            this.url = "story/category?cat=" + this.searchForm.value.storyCategory + "&";
            this.loadStories();
        }
        if (!this.searchForm.value.storyCategory &&
            this.searchForm.value.storyTitle) {
            this.url = "story/title?title=" + this.searchForm.value.storyTitle + "&";
            this.loadStories();
        }
        if (this.searchForm.value.storyCategory &&
            this.searchForm.value.storyTitle) {
            this.url = "story/category&title?cat=" +
                this.searchForm.value.storyCategory + "&" +
                "title=" + this.searchForm.value.storyTitle + "&";
            this.loadStories();
        }
    }
    loadStories() {
        if (this.paginationData.page === undefined) {
            this.subscription = this.pgService.invokePage.subscribe((data) => {
                this.stories = data.items;
                this.paginationData = data;
                this.allStories = [];
                for (let index = 0; index < this.stories.length; index++) {
                    this.userService.getUserById(this.stories[index].userID).subscribe((user) => {
                        this.allStories.push({
                            storyID: this.stories[index].storyID,
                            author: user.userName,
                            storyTitle: this.stories[index].storyTitle,
                            storyContent: this.stories[index].storyContent,
                            categories: this.stories[index].categories,
                        });
                    });
                }
            });
        }
        else {
            this.pgService.getPage(1, this.url).subscribe(res => {
                this.paginationData = res;
                this.stories = res.items;
                this.allStories = [];
                for (let index = 0; index < this.stories.length; index++) {
                    this.userService.getUserById(this.stories[index].userID).subscribe((user) => {
                        this.allStories.push({
                            storyID: this.stories[index].storyID,
                            author: user.userName,
                            storyTitle: this.stories[index].storyTitle,
                            storyContent: this.stories[index].storyContent,
                            categories: this.stories[index].categories,
                        });
                    });
                }
            });
        }
    }
};
StoriesComponent.ctorParameters = () => [
    { type: src_app_shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"] },
    { type: src_app_shared_services_story_service__WEBPACK_IMPORTED_MODULE_5__["StoryService"] },
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
StoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stories',
        template: __webpack_require__(/*! raw-loader!./stories.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/stories/stories.component.html"),
        styles: [__webpack_require__(/*! ./stories.component.css */ "./src/app/views/stories/stories.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"],
        src_app_shared_services_story_service__WEBPACK_IMPORTED_MODULE_5__["StoryService"],
        src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
], StoriesComponent);



/***/ }),

/***/ "./src/app/views/stories/story-view/story-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/stories/story-view/story-view.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".categoriesBox{\r\n    margin-left: 15px\r\n}\r\np{\r\n    text-align: justify;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3Rvcmllcy9zdG9yeS12aWV3L3N0b3J5LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0b3JpZXMvc3Rvcnktdmlldy9zdG9yeS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcmllc0JveHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4XHJcbn1cclxucHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/stories/story-view/story-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/stories/story-view/story-view.component.ts ***!
  \******************************************************************/
/*! exports provided: StoryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryViewComponent", function() { return StoryViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_models_story_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/story.model */ "./src/app/shared/models/story.model.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_shared_services_story_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/story.service */ "./src/app/shared/services/story.service.ts");






let StoryViewComponent = class StoryViewComponent {
    constructor(route, userService, storyService) {
        this.route = route;
        this.userService = userService;
        this.storyService = storyService;
        this.story = new src_app_shared_models_story_model__WEBPACK_IMPORTED_MODULE_3__["Story"];
        this.author = "";
    }
    ngOnInit() {
        this.storyService.getStoryByID(this.route.snapshot.params['id']).subscribe((story) => {
            this.story = story;
            this.userService.getUserById(story.userID).subscribe((res) => {
                this.author = res.userName;
            });
        });
    }
};
StoryViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_shared_services_story_service__WEBPACK_IMPORTED_MODULE_5__["StoryService"] }
];
StoryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-story-view',
        template: __webpack_require__(/*! raw-loader!./story-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/stories/story-view/story-view.component.html"),
        styles: [__webpack_require__(/*! ./story-view.component.css */ "./src/app/views/stories/story-view/story-view.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        src_app_shared_services_story_service__WEBPACK_IMPORTED_MODULE_5__["StoryService"]])
], StoryViewComponent);



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginBox{\r\n    margin: auto;\r\n}\r\n\r\n::ng-deep .green-sb{\r\n    color: black;\r\n    background-color:  rgb(15, 126, 15);\r\n    border: 2px;\r\n}\r\n\r\n::ng-deep .red-sb{\r\n    color: rgb(255, 255, 255);\r\n    background-color:  rgb(145, 36, 17);\r\n    border: 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5Cb3h7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZ3JlZW4tc2J7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDE1LCAxMjYsIDE1KTtcclxuICAgIGJvcmRlcjogMnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnJlZC1zYntcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDE0NSwgMzYsIDE3KTtcclxuICAgIGJvcmRlcjogMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! globals */ "./globals.ts");







let LoginComponent = class LoginComponent {
    constructor(router, http, _snackBar) {
        this.router = router;
        this.http = http;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    loginUser() {
        let loginData = JSON.stringify(this.loginForm.value);
        this.http.post(globals__WEBPACK_IMPORTED_MODULE_6__["rootURL"] + "auth/login", loginData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        }).subscribe(response => {
            let token = response.token;
            localStorage.setItem("jwt", token);
            this._snackBar.open("Login Successful...", null, {
                duration: 3000,
                panelClass: ['green-sb']
            });
            this.router.navigate(["/"]);
        }, err => {
            console.log(err);
            this._snackBar.open("Unauthorized...", null, {
                duration: 3000,
                panelClass: ['red-sb']
            });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/user/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/user.model */ "./src/app/shared/models/user.model.ts");





let RegisterComponent = class RegisterComponent {
    constructor(service, _snackBar) {
        this.service = service;
        this._snackBar = _snackBar;
        this.user = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"];
    }
    ngOnInit() {
    }
    registerUser(registerForm) {
        this.service.postUser(registerForm.value).subscribe(res => {
            registerForm.reset();
            this._snackBar.open("User Registered...", null, {
                duration: 3000,
                panelClass: ['green-sb']
            });
        }, err => {
            console.log(err);
            this._snackBar.open("Register Error...", null, {
                duration: 3000,
                panelClass: ['red-sb']
            });
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/user/register/register.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/views/user/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_pagination_detail_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/pagination-detail.model */ "./src/app/shared/models/pagination-detail.model.ts");
/* harmony import */ var src_app_shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pagination.service */ "./src/app/shared/services/pagination.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");







let UsersComponent = class UsersComponent {
    constructor(userService, pgService, _snackBar) {
        this.userService = userService;
        this.pgService = pgService;
        this._snackBar = _snackBar;
        this.users = [];
        this.displayedColumns = ['userID', 'userName', 'email', 'Actions'];
        this.paginationData = new src_app_shared_models_pagination_detail_model__WEBPACK_IMPORTED_MODULE_2__["PaginationDetail"];
        this.url = "user?";
    }
    ngOnInit() {
        this.subscription = this.pgService.invokePage.subscribe(data => {
            this.users = data.items;
            this.paginationData = data;
        });
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            userPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
    }
    deleteUser(userID) {
        this.userService.deleteUser(userID)
            .subscribe(res => {
            console.log('User Deleted');
            this._snackBar.open("User Deleted...", null, {
                duration: 3000,
                panelClass: ['green-sb']
            });
            this.pgService.getPage(this.pgService.pagData.page, this.url).subscribe(res => {
                this.paginationData = res;
                this.users = res.items;
            });
        }, err => { console.log(err); });
    }
    editUser(userID) {
        this.userService.getUserById(userID).toPromise().then((user) => {
            this.editForm.patchValue({
                userID: user.userID,
                userName: user.userName,
                userPass: user.userPass,
                email: user.email
            });
        });
    }
    submitUser() {
        this.userService.formData = this.editForm.value;
        this.userService.putUser(this.userService.formData.userID, this.userService.formData)
            .subscribe(res => {
            this._snackBar.open("User Edited...", null, {
                duration: 3000,
                panelClass: ['green-sb']
            });
            this.editForm.reset();
            this.pgService.getPage(this.pgService.pagData.page, this.url)
                .subscribe(res => {
                this.paginationData = res;
                this.users = res.items;
            });
        }, err => {
            console.log(err);
            this._snackBar.open("Edit Error...", null, {
                duration: 3000,
                panelClass: ['red-sb']
            });
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
UsersComponent.ctorParameters = () => [
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/user/users/users.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        src_app_shared_services_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
], UsersComponent);



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
const environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ja\source\repos\DotNetCoreAngularApp\DotNetCoreAngularApp\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map