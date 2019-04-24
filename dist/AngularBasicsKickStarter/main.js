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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/gridlayout/gridlayout.component */ "./src/app/shared/gridlayout/gridlayout.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _kickstarter_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .//kickstarter-routing.module */ "./src/app/kickstarter-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_detail_form_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-detail/form-detail.component */ "./src/app/form-detail/form-detail.component.ts");
/* harmony import */ var _service_InMemoryMockService_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/InMemoryMockService.service */ "./src/app/service/InMemoryMockService.service.ts");
/* harmony import */ var _mock_http_mock_http_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mock-http/mock-http.component */ "./src/app/mock-http/mock-http.component.ts");
/* harmony import */ var _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./datatable/datatable.component */ "./src/app/datatable/datatable.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__);
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _shared_gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_7__["GridlayoutComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                _form_detail_form_detail_component__WEBPACK_IMPORTED_MODULE_11__["FormDetailComponent"],
                _mock_http_mock_http_component__WEBPACK_IMPORTED_MODULE_13__["MockHttpComponent"],
                _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_14__["DatatableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _kickstarter_routing_module__WEBPACK_IMPORTED_MODULE_9__["KickstarterRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_service_InMemoryMockService_service__WEBPACK_IMPORTED_MODULE_12__["InMemoryMockService"], { dataEncapsulation: false }),
                [ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__["AgGridModule"].withComponents(null)]
            ],
            exports: [_kickstarter_routing_module__WEBPACK_IMPORTED_MODULE_9__["KickstarterRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/datatable/datatable.component.css":
/*!***************************************************!*\
  !*** ./src/app/datatable/datatable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/datatable/datatable.component.html":
/*!****************************************************!*\
  !*** ./src/app/datatable/datatable.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ag-grid-angular class=\"ag-theme-material\" [rowData]=\"rowData\" [columnDefs]=\"columnDefs\">\n</ag-grid-angular>\n"

/***/ }),

/***/ "./src/app/datatable/datatable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/datatable/datatable.component.ts ***!
  \**************************************************/
/*! exports provided: DatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
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

var DatatableComponent = /** @class */ (function () {
    function DatatableComponent() {
        this.columnDefs = [
            { headerName: 'Make', field: 'make' },
            { headerName: 'Model', field: 'model' },
            { headerName: 'Price', field: 'price' },
            { headerName: 'Make', field: 'make' },
            { headerName: 'Model', field: 'model' },
            { headerName: 'Price', field: 'price' },
            { headerName: 'Price', field: 'price' }
        ];
        this.rowData = [
            { make: 'Toyota', model: 'Celica', price: 35000 },
            { make: 'Ford', model: 'Mondeo', price: 32000 },
            { make: 'Audi', model: 'R8', price: 32000 },
            { make: 'BMW', model: 'X6', price: 72000 },
            { make: 'KIA', model: 'ken', price: 35000 },
            { make: 'Suzuki', model: 'Swift', price: 32000 },
            { make: 'Benz', model: 'c-class', price: 72000 }
        ];
    }
    DatatableComponent.prototype.ngOnInit = function () {
    };
    DatatableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datatable',
            template: __webpack_require__(/*! ./datatable.component.html */ "./src/app/datatable/datatable.component.html"),
            styles: [__webpack_require__(/*! ./datatable.component.css */ "./src/app/datatable/datatable.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DatatableComponent);
    return DatatableComponent;
}());



/***/ }),

/***/ "./src/app/form-detail/form-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/form-detail/form-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img {\n  width: 150px;\n  -ms-grid-row-align: center;\n      align-self: center;\n  margin-top: 30px;\n}\n\n.card-container {\n  padding: 50px\n}\n\n.card-body-button {\n  padding-left: 220px;\n}\n\n.card {\n  margin-bottom: 80px;\n}\n"

/***/ }),

/***/ "./src/app/form-detail/form-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/form-detail/form-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card-container\">\n  <div class=\"card\">\n    <img class=\"card-img-top card-img\" src=\"../.././assets/checked.png\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">SUCCESS</h5>\n      <p class=\"card-text\">Your details are saved successfully</p>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">{{name}}</li>\n      <li class=\"list-group-item\">{{email}}</li>\n      <li class=\"list-group-item\">{{address}}</li>\n    </ul>\n    <div class=\"card-body\">\n      <a href=\"\" class=\"card-link card-body-button\">Go Back to Home</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/form-detail/form-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/form-detail/form-detail.component.ts ***!
  \******************************************************/
/*! exports provided: FormDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDetailComponent", function() { return FormDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormDetailComponent = /** @class */ (function () {
    function FormDetailComponent(route) {
        var _this = this;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this.name = params['name'];
            _this.email = params['email'];
            _this.address = params['address'];
        });
    }
    FormDetailComponent.prototype.ngOnInit = function () {
    };
    FormDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-detail',
            template: __webpack_require__(/*! ./form-detail.component.html */ "./src/app/form-detail/form-detail.component.html"),
            styles: [__webpack_require__(/*! ./form-detail.component.css */ "./src/app/form-detail/form-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], FormDetailComponent);
    return FormDetailComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submit-form {\n  background-color: #33b5e5;\n  border: 2px solid #f5f5f5;\n}\n\n.card {\n  margin-bottom: 80px !important;\n}\n"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-info m-4\">\n  <div class=\"card-header\">Reactive Forms</div>\n  <div class=\"card-body\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': formSubmitClicked && formControl.name.errors }\"\n            placeholder=\"Enter Your Name\">\n          <small id=\"nameHelp\" class=\"form-text text-light\">\n            Your name must contain both your first and last name\n          </small>\n          <div *ngIf=\"formSubmitClicked && formControl.name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"formControl.name.errors.required\">Name is required</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputEmail\">Email</label>\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': formSubmitClicked && formControl.email.errors }\"\n            placeholder=\"Enter Valid Email Address\">\n          <small id=\"nameHelp\" class=\"form-text text-light\">\n            Your email must be valid to process your login details\n          </small>\n          <div *ngIf=\"formSubmitClicked && formControl.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"formControl.email.errors.required\">Email is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress\">Address</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress\" formControlName=\"address\" [ngClass]=\"{ 'is-invalid': formSubmitClicked && formControl.address.errors }\"\n          placeholder=\"Enter Your Address\">\n        <small id=\"nameHelp\" class=\"form-text text-light\">\n          Your address must be complete\n        </small>\n        <div *ngIf=\"formSubmitClicked && formControl.address.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"formControl.address.errors.required\">Address is required</div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputCity\">City</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputCity\" formControlName=\"city\" [ngClass]=\"{ 'is-invalid': formSubmitClicked && formControl.city.errors }\"\n            placeholder=\"Enter Your City\">\n          <div *ngIf=\"formSubmitClicked && formControl.city.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"formControl.city.errors.required\">City is required</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"inputState\">State</label>\n          <select id=\"inputState\" class=\"form-control\" formControlName=\"state\" [ngClass]=\"{ 'is-invalid': formSubmitClicked && formControl.state.errors }\">\n            <option selected>Choose Your State</option>\n            <option>State1</option>\n            <option>State2</option>\n            <option>State3</option>\n            <option>State4</option>\n            <option>State5</option>\n          </select>\n          <div *ngIf=\"formSubmitClicked && formControl.state.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"formControl.state.errors.required\">State is required</div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputPincode\">Pincode</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputPincode\" formControlName=\"pincode\" [ngClass]=\"{ 'is-invalid': formSubmitClicked && formControl.pincode.errors }\">\n          <div *ngIf=\"formSubmitClicked && formControl.pincode.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"formControl.pincode.errors.required\">Pincode is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\" formControlName=\"terms\" [ngClass]=\"{ 'is-invalid': formSubmitClicked && formControl.terms.errors }\">\n          <label class=\"form-check-label\" for=\"gridCheck\">\n            Add your Terms & Conditions to Agree\n          </label>\n          <div *ngIf=\"formSubmitClicked && formControl.terms.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"formControl.terms.errors.required\">Please check the Terms & Conditions to submit</div>\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn submit-form text-white\" (click)=\"submitForm()\">Submit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.formSubmitClicked = false;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
        });
        this.formControl = this.formGroup.controls;
    };
    FormComponent.prototype.submitForm = function () {
        this.formSubmitClicked = true;
        if (this.formGroup.invalid) {
            return;
        }
        var navigationExtras = {
            queryParams: {
                'name': this.formGroup.value.name,
                'email': this.formGroup.value.email,
                'address': this.formGroup.value.address
            }
        };
        this.router.navigate(['/form-submit'], navigationExtras);
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/kickstarter-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/kickstarter-routing.module.ts ***!
  \***********************************************/
/*! exports provided: KickstarterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KickstarterRoutingModule", function() { return KickstarterRoutingModule; });
/* harmony import */ var _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datatable/datatable.component */ "./src/app/datatable/datatable.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _shared_gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/gridlayout/gridlayout.component */ "./src/app/shared/gridlayout/gridlayout.component.ts");
/* harmony import */ var _form_detail_form_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-detail/form-detail.component */ "./src/app/form-detail/form-detail.component.ts");
/* harmony import */ var _mock_http_mock_http_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock-http/mock-http.component */ "./src/app/mock-http/mock-http.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _shared_gridlayout_gridlayout_component__WEBPACK_IMPORTED_MODULE_4__["GridlayoutComponent"], pathMatch: 'full' },
    { path: 'forms', component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
    { path: 'form-submit', component: _form_detail_form_detail_component__WEBPACK_IMPORTED_MODULE_5__["FormDetailComponent"] },
    { path: 'mock-http', component: _mock_http_mock_http_component__WEBPACK_IMPORTED_MODULE_6__["MockHttpComponent"] },
    { path: 'data-table', component: _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_0__["DatatableComponent"] }
];
var KickstarterRoutingModule = /** @class */ (function () {
    function KickstarterRoutingModule() {
    }
    KickstarterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], KickstarterRoutingModule);
    return KickstarterRoutingModule;
}());



/***/ }),

/***/ "./src/app/mock-http/mock-http.component.css":
/*!***************************************************!*\
  !*** ./src/app/mock-http/mock-http.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mock-http/mock-http.component.html":
/*!****************************************************!*\
  !*** ./src/app/mock-http/mock-http.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-info m-4\">\n  <div class=\"card-header\">Test http methods with mock data</div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <button type=\"button\" class=\"btn btn-dark text-white\" (click)=\"getData()\">GET</button>\n        <div class=\"d-flex m-3\" *ngFor=\"let data of mockData; let i = index\">\n          <small class=\"col-4\">{{mockData[i].name}}</small>\n          <small class=\"col-3\">{{mockData[i].gender}}</small>\n          <small class=\"col-5\">{{mockData[i].phone}}</small>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <button type=\"button\" class=\"btn btn-dark text-white\" (click)=\"insertData(name.value,gender.value,phone.value)\">POST</button>\n        <div class=\"m-2\">\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Enter name\" #name>\n          <input type=\"text\" class=\"form-control\" id=\"inputGender\" placeholder=\"Enter gender\" #gender>\n          <input type=\"text\" class=\"form-control\" id=\"inputPhone\" placeholder=\"Enter phone number\" #phone>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mock-http/mock-http.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mock-http/mock-http.component.ts ***!
  \**************************************************/
/*! exports provided: MockHttpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockHttpComponent", function() { return MockHttpComponent; });
/* harmony import */ var _service_kickstarter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/kickstarter.service */ "./src/app/service/kickstarter.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MockHttpComponent = /** @class */ (function () {
    function MockHttpComponent(kickStarterService) {
        this.kickStarterService = kickStarterService;
    }
    MockHttpComponent.prototype.ngOnInit = function () {
    };
    MockHttpComponent.prototype.getData = function () {
        var _this = this;
        this.kickStarterService.getData().subscribe(function (res) { _this.mockData = res; });
        console.log(this.mockData);
    };
    MockHttpComponent.prototype.insertData = function (name, gender, phone) {
        var _this = this;
        var insertableMockData = { name: name, gender: gender, phone: phone };
        this.kickStarterService.insertData(insertableMockData).subscribe(function (mockdata) {
            _this.mockData.push(mockdata);
        });
    };
    MockHttpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mock-http',
            template: __webpack_require__(/*! ./mock-http.component.html */ "./src/app/mock-http/mock-http.component.html"),
            styles: [__webpack_require__(/*! ./mock-http.component.css */ "./src/app/mock-http/mock-http.component.css")]
        }),
        __metadata("design:paramtypes", [_service_kickstarter_service__WEBPACK_IMPORTED_MODULE_0__["KickStarterService"]])
    ], MockHttpComponent);
    return MockHttpComponent;
}());



/***/ }),

/***/ "./src/app/service/InMemoryMockService.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/InMemoryMockService.service.ts ***!
  \********************************************************/
/*! exports provided: InMemoryMockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryMockService", function() { return InMemoryMockService; });
var InMemoryMockService = /** @class */ (function () {
    function InMemoryMockService() {
    }
    InMemoryMockService.prototype.createDb = function () {
        var sampleJSON = [
            {
                'name': 'Dunlap Hubbard',
                'gender': 'male',
                'phone': '+1 (890) 543-2508',
            },
            {
                'name': 'Kirsten Sellers',
                'gender': 'female',
                'phone': '+1 (831) 564-2190',
            },
            {
                'name': 'Acosta Robbins',
                'gender': 'male',
                'phone': '+1 (882) 441-3367',
            }
        ];
        return { sampleJSON: sampleJSON };
    };
    return InMemoryMockService;
}());



/***/ }),

/***/ "./src/app/service/kickstarter.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/kickstarter.service.ts ***!
  \************************************************/
/*! exports provided: KickStarterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KickStarterService", function() { return KickStarterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var KickStarterService = /** @class */ (function () {
    function KickStarterService(http) {
        this.http = http;
        this.api = 'api/sampleJSON'; // URL to web api
    }
    KickStarterService.prototype.getData = function () {
        return this.http.get(this.api);
    };
    KickStarterService.prototype.insertData = function (mockData) {
        console.log(mockData);
        return this.http.post(this.api, mockData, httpOptions);
    };
    KickStarterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], KickStarterService);
    return KickStarterService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  background-color: #33b5e5;\n}\n\n.footer-text {\n  text-align: center;\n  padding-top: 15px;\n}\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-white footer\">\n  <div>\n    <p class=\"footer-text\">Custom Footer</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/gridlayout/gridlayout.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/gridlayout/gridlayout.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid {\n  padding: 30px;\n}\n\n.grid-item {\n  background-image: linear-gradient(141deg, #9fb8ad -5%, #1fc8db 50%, #2cb5e8 100%);\n  height: 200px;\n  width: 100px;\n  margin: 5px;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  font-size: 25px;\n  padding: 20px;\n  border-radius: 40px;\n}\n\n.grid-item-title {\n  justify-content: center\n}\n\n.grid-item-icon {\n  width: 90px;\n}\n\n.link {\n  color: white;\n}\n\n.grid-row {\n  margin-left: -90px;\n  margin-right: -90px;\n}\n"

/***/ }),

/***/ "./src/app/shared/gridlayout/gridlayout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/gridlayout/gridlayout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container grid\">\n  <div class=\"row grid-row\">\n    <div class=\"col grid-item\">\n      <div class=\"d-flex grid-item-title\">\n        <a class=\"link\" [routerLink]=\"['/forms']\">Forms </a>\n      </div>\n      <img class=\"grid-item-icon\" src=\"../../../assets/text-field.png\">\n    </div>\n    <div class=\"col grid-item\">\n      <div class=\"d-flex grid-item-title\">\n        <a class=\"link\" [routerLink]=\"['/mock-http']\">Mocking Http Services</a>\n      </div>\n      <img class=\"grid-item-icon\" src=\"../../../assets/http.png\">\n    </div>\n    <div class=\"col grid-item\">\n      <div class=\"d-flex grid-item-title\">\n        <a class=\"link\" [routerLink]=\"['/data-table']\">Using third party components</a>\n      </div>\n      <img class=\"grid-item-icon\" src=\"../../../assets/data-table.png\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/gridlayout/gridlayout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/gridlayout/gridlayout.component.ts ***!
  \***********************************************************/
/*! exports provided: GridlayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridlayoutComponent", function() { return GridlayoutComponent; });
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

var GridlayoutComponent = /** @class */ (function () {
    function GridlayoutComponent() {
    }
    GridlayoutComponent.prototype.ngOnInit = function () {
    };
    GridlayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gridlayout',
            template: __webpack_require__(/*! ./gridlayout.component.html */ "./src/app/shared/gridlayout/gridlayout.component.html"),
            styles: [__webpack_require__(/*! ./gridlayout.component.css */ "./src/app/shared/gridlayout/gridlayout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GridlayoutComponent);
    return GridlayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bgcolor {\n  background-color: #33b5e5;\n}\n\n.glyphicon-menu-hamburger {\n  font-size: npx;\n}\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-dark nav-bgcolor\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    KickStarter (BootStrap)\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\n    <span class=\" navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Menu Option1</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Menu Option2</a>\n      </li>\n    </ul>\n  </div>\n  <!-- <form class=\"form-inline\">\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n    <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\n  </form> -->\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.navbarOpen = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/niteshvarma/Desktop/AngularBasicsKickStarter (1)/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map