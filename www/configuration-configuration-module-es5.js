(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuration-configuration-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/configuration/configuration.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuration/configuration.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"align-center\">Configurações</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home/monitor\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/configuration/configuration.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuration/configuration.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfigurationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationPageModule", function() { return ConfigurationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration.page */ "./src/app/configuration/configuration.page.ts");







var routes = [
    {
        path: '',
        component: _configuration_page__WEBPACK_IMPORTED_MODULE_6__["ConfigurationPage"]
    }
];
var ConfigurationPageModule = /** @class */ (function () {
    function ConfigurationPageModule() {
    }
    ConfigurationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_configuration_page__WEBPACK_IMPORTED_MODULE_6__["ConfigurationPage"]]
        })
    ], ConfigurationPageModule);
    return ConfigurationPageModule;
}());



/***/ }),

/***/ "./src/app/configuration/configuration.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/configuration/configuration.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/configuration/configuration.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/configuration/configuration.page.ts ***!
  \*****************************************************/
/*! exports provided: ConfigurationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationPage", function() { return ConfigurationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigurationPage = /** @class */ (function () {
    function ConfigurationPage() {
    }
    ConfigurationPage.prototype.ngOnInit = function () {
    };
    ConfigurationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuration',
            template: __webpack_require__(/*! raw-loader!./configuration.page.html */ "./node_modules/raw-loader/index.js!./src/app/configuration/configuration.page.html"),
            styles: [__webpack_require__(/*! ./configuration.page.scss */ "./src/app/configuration/configuration.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigurationPage);
    return ConfigurationPage;
}());



/***/ })

}]);
//# sourceMappingURL=configuration-configuration-module-es5.js.map