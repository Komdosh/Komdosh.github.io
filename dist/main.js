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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_personalInfo_personalInfo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/personalInfo/personalInfo.component */ "./src/app/components/personalInfo/personalInfo.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_projectSlider_projectSlider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projectSlider/projectSlider.component */ "./src/app/components/projectSlider/projectSlider.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_programming_programming_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/programming/programming.component */ "./src/app/components/programming/programming.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");











var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-personal-info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-experience");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-project-slider");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-education");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-portfolio");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-programming");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-skills");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
        } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_personalInfo_personalInfo_component__WEBPACK_IMPORTED_MODULE_2__["PersonalInfoComponent"], _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"], _components_projectSlider_projectSlider_component__WEBPACK_IMPORTED_MODULE_4__["ProjectSliderComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"], _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"], _components_programming_programming_component__WEBPACK_IMPORTED_MODULE_7__["ProgrammingComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_projectSlider_projectSlider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projectSlider/projectSlider.component */ "./src/app/components/projectSlider/projectSlider.component.ts");
/* harmony import */ var _services_infoService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/infoService */ "./src/app/services/infoService.ts");
/* harmony import */ var _services_languageHolder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/languageHolder */ "./src/app/services/languageHolder.ts");
/* harmony import */ var _components_personalInfo_personalInfo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/personalInfo/personalInfo.component */ "./src/app/components/personalInfo/personalInfo.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_programming_programming_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/programming/programming.component */ "./src/app/components/programming/programming.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_social_social_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/social/social.component */ "./src/app/components/social/social.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_image_viewer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-image-viewer */ "./node_modules/ngx-image-viewer/__ivy_ngcc__/ngx-image-viewer.js");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _services_infoService__WEBPACK_IMPORTED_MODULE_6__["InfoService"],
            _services_languageHolder__WEBPACK_IMPORTED_MODULE_7__["LanguageBroadcaster"]
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                ngx_image_viewer__WEBPACK_IMPORTED_MODULE_17__["ImageViewerModule"].forRoot()
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
        _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_personalInfo_personalInfo_component__WEBPACK_IMPORTED_MODULE_8__["PersonalInfoComponent"],
        _components_projectSlider_projectSlider_component__WEBPACK_IMPORTED_MODULE_5__["ProjectSliderComponent"],
        _components_programming_programming_component__WEBPACK_IMPORTED_MODULE_10__["ProgrammingComponent"],
        _components_social_social_component__WEBPACK_IMPORTED_MODULE_13__["SocialComponent"],
        _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"],
        _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["PortfolioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], ngx_image_viewer__WEBPACK_IMPORTED_MODULE_17__["ImageViewerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
                    _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_personalInfo_personalInfo_component__WEBPACK_IMPORTED_MODULE_8__["PersonalInfoComponent"],
                    _components_projectSlider_projectSlider_component__WEBPACK_IMPORTED_MODULE_5__["ProjectSliderComponent"],
                    _components_programming_programming_component__WEBPACK_IMPORTED_MODULE_10__["ProgrammingComponent"],
                    _components_social_social_component__WEBPACK_IMPORTED_MODULE_13__["SocialComponent"],
                    _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"],
                    _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["PortfolioComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    ngx_image_viewer__WEBPACK_IMPORTED_MODULE_17__["ImageViewerModule"].forRoot()
                ],
                providers: [
                    _services_infoService__WEBPACK_IMPORTED_MODULE_6__["InfoService"],
                    _services_languageHolder__WEBPACK_IMPORTED_MODULE_7__["LanguageBroadcaster"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _languageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../languageWrapper */ "./src/app/languageWrapper.ts");
/* harmony import */ var _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/languageHolder */ "./src/app/services/languageHolder.ts");
/* harmony import */ var _services_infoService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/infoService */ "./src/app/services/infoService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








function EducationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var education_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](education_r1.degree.faculty[ctx_r0.language]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](education_r1.degree.department[ctx_r0.language]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", education_r1.website.link[ctx_r0.language], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", education_r1.website.buttonTitle[ctx_r0.language], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", education_r1.universityName[ctx_r0.language], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
var EducationComponent = /** @class */ (function (_super) {
    __extends(EducationComponent, _super);
    function EducationComponent(infoService, languageBroadcaster) {
        var _this = _super.call(this, languageBroadcaster) || this;
        _this.infoService = infoService;
        _this.languageBroadcaster = languageBroadcaster;
        _this.sectionName = { en: 'Education', ru: 'Образование' };
        _this.educations = [
            {
                universityName: {
                    en: 'Saint-Petersburg Electrotechnical University "LETI"<br/>Master\'s Degree',
                    ru: 'Санкт-Петербургский Государственный<br/>Электротехнический Университет "ЛЭТИ"<br/>Магистр'
                },
                degree: {
                    faculty: {
                        en: 'Faculty of Computer Science and Technology',
                        ru: 'Факультет компьютерных технологий и информатики'
                    },
                    department: {
                        en: 'Department of Computer Science and Engineering',
                        ru: 'Кафедра вычислительной техники'
                    },
                },
                website: {
                    buttonTitle: { en: 'Web site', ru: 'Сайт' },
                    link: { en: 'http://etu.ru/en', ru: 'http://etu.ru' }
                }
            },
            {
                universityName: {
                    en: 'Saint-Petersburg Electrotechnical University "LETI"<br/>Bachelor Degree',
                    ru: 'Санкт-Петербургский Государственный<br/>Электротехнический Университет "ЛЭТИ"<br/>Бакалавр'
                },
                degree: {
                    faculty: {
                        en: 'Faculty of Computer Science and Technology',
                        ru: 'Факультет компьютерных технологий и информатики'
                    },
                    department: {
                        en: 'Department of Computer Science and Engineering',
                        ru: 'Кафедра вычислительной техники'
                    },
                },
                website: {
                    buttonTitle: { en: 'Web site', ru: 'Сайт' },
                    link: { en: 'http://etu.ru/en', ru: 'http://etu.ru' }
                }
            }
        ];
        return _this;
    }
    EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"])); };
    EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 2, consts: [["id", "fh5co-testimonials", "data-section", "education"], [1, "container"], [1, "row"], [1, "col-md-12", "section-heading", "text-center"], [1, "to-animate"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "box-testimony", "to-animate"], [1, "quote"], [1, "fa", "fa-graduation-cap"], [1, "en-lang"], [1, "btn", "btn-primary", "btn-sm", 2, "color", "white", 3, "href"], [1, "author", 3, "innerHTML"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EducationComponent_div_7_Template, 15, 5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionName[ctx.language]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.educations);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return EducationComponent;
}(_languageWrapper__WEBPACK_IMPORTED_MODULE_1__["LanguageWrapper"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.scss']
            }]
    }], function () { return [{ type: _services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"] }, { type: _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _languageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../languageWrapper */ "./src/app/languageWrapper.ts");
/* harmony import */ var _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/languageHolder */ "./src/app/services/languageHolder.ts");
/* harmony import */ var _services_infoService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/infoService */ "./src/app/services/infoService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








function ExperienceComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var company_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.position.name[ctx_r0.language]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.position.since[ctx_r0.language]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.position.until[ctx_r0.language]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.replaceNewLineWithHtmlBr(company_r1.description[ctx_r0.language]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", company_r1.website.link[ctx_r0.language], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", company_r1.website.buttonTitle[ctx_r0.language], "");
} }
var ExperienceComponent = /** @class */ (function (_super) {
    __extends(ExperienceComponent, _super);
    function ExperienceComponent(infoService, languageBroadcaster) {
        var _this = _super.call(this, languageBroadcaster) || this;
        _this.infoService = infoService;
        _this.languageBroadcaster = languageBroadcaster;
        _this.sectionName = { en: 'Experience', ru: 'Опыт' };
        _this.companies = [
            {
                name: 'Siemens',
                position: {
                    name: { en: 'Position: Intern Java Developer', ru: 'Позиция: Intern Java Developer' },
                    since: { en: 'Since: July 2016', ru: 'C: Июля 2016' },
                    until: { en: 'Until: July 2017', ru: 'По: Июль 2017' },
                },
                description: {
                    en: 'My main responsibilities included the development of server and client-side of two applications.\n' +
                        '\n' +
                        'The first project was related to rail traffic. While development, it was necessary to add functionality to the existing system. For this application, a colleague, heuristic algorithm was implemented in Python, which was rewritten in Java, with my help.\n' +
                        '\n' +
                        'Core technologies:\n' +
                        'Spring\n' +
                        'JSP\n' +
                        'PostgreSQL\n' +
                        '\n' +
                        'The second project is related to the design networks of medium and low voltage. I have been actively involved in the architecture design and development of this application from scratch.\n' +
                        '\n' +
                        'Core technologies:\n' +
                        'Spring\n' +
                        'AngularJS\n' +
                        'PostgreSQL\n' +
                        '\n' +
                        'Practical knowledge was obtained on debugging and testing server applications during the internship.\n' +
                        '\n' +
                        'For version control, Git is used.\n' +
                        '\n' +
                        'In addition to the main responsibilities, CI systems (Jenkins, TeamCity) were installed, configured and integrated.\n' +
                        '\n' +
                        'For reporting and project management used Redmine. Scrum\'s agile development methodology was applied with the interplay of approaches from XP.',
                    ru: 'В основные обязанности входила разработка серверной и клиентской части двух приложений.\n' +
                        '\n' +
                        'Первый проект был связан с железодорожными сообщениями. В ходе командной разработки, было необходимо добавить функциональность существующей системе. Для данного приложения, коллегой, был реализован эврестический алгоритм на Python, который впоследствие, с моей помощью, был переписан на Java.\n' +
                        '\n' +
                        'Основной стек технологий:\n' +
                        'Spring\n' +
                        'JSP\n' +
                        'PostgreSQL\n' +
                        '\n' +
                        'Второй проект был связан с проектированием сетей среднего и низкого напряжений. Я принимал активное участие в проектировании архитектуры и разработке данного приложения с нуля.\n' +
                        '\n' +
                        'Основной стек технологий:\n' +
                        'Spring\n' +
                        'AngularJS\n' +
                        'PostgreSQL.\n' +
                        '\n' +
                        'При прихождении стажировки, также были получены практические знания по отладке и тестированию серверных приложений.\n' +
                        '\n' +
                        'Для контроля версий использовался Git.\n' +
                        '\n' +
                        'Помимо основных обязанностей, были установлены, сконфигурированны и внедрены системы CI: Jenkins, TeamCity.\n' +
                        '\n' +
                        'Для отчётности и планирования проекта использовался Redmine. Применялась методология гибкой разработки Scrum с взаимствованием подходов из XP.'
                },
                website: {
                    buttonTitle: { en: 'Web site', ru: 'Сайт' },
                    link: {
                        en: 'https://www.siemens.com/global/en/home.html',
                        ru: 'https://www.siemens.com/ru/ru/home.html'
                    }
                }
            },
            {
                name: 'Biarum',
                position: {
                    name: { en: 'Position: Full-Stack Developer', ru: 'Позиция: Full-Stack Developer' },
                    since: { en: 'Since: July 2017', ru: 'C: Июля 2017' },
                    until: { en: 'Until: Now', ru: 'По: настоящее время' },
                },
                description: {
                    en: 'I participate in team development of several projects for healthcare and processing data of car traffic.\n' +
                        '\n' +
                        'Core technology Stack:\n' +
                        'Java 13+\n' +
                        'Spring Boot 2\n' +
                        'Angular 9+\n' +
                        'PostgreSQL\n' +
                        'Apache POI\n' +
                        '\n' +
                        'I participate in development as FullStack. I refactored Java code, implement functionality for compose automated reports in PPTX using the Apache POI framework.\n' +
                        '\n' +
                        'I developed algorithms that interacting with maps (shapefile), in Java. To support GPS coordinates, PostgreSQL used PostGIS.\n' +
                        '\n' +
                        'In addition to direct development, I raised a lot of different server environments on Ubuntu, CentOS, Windows Server, MacOS X. The environment included: Tomcat, SSL, Apache, Nginx, PHP, Node, PostgreSQL, MySQL, etc. Continuous Integration build projects in TeamCity. Also SonarQube was integrated in my team work.\n' +
                        '\n' +
                        'In several projects I consulting developers and for some of them I make a code review of pull-requests.\n' +
                        '\n' +
                        'For task management we use Atlassian Jira. For project management, agile methodologies such as Scrum, Kanban, XP are used.\n',
                    ru: 'Принимаю участие в командной разработке нескольких проектов в сфере дорожной обстановки и здравоохранения.\n' +
                        '\n' +
                        'Основной стек технологий:\n' +
                        'Java 13+\n' +
                        'Spring Boot 2\n' +
                        'Angular 9+\n' +
                        'PostgreSQL\n' +
                        'Apache POI\n' +
                        '\n' +
                        'Участвовал в командной разработке в роли FullStack. Мной был реализован код, составляющий автоматизированные отчёты в формате PPTX, используя библиотеку Apache POI.\n' +
                        '\n' +
                        'Были разработаны алгоритмы взаимодействующие с картами (shapefile), на языке Java. Со стороны PostgreSQL была поддержка PostGIS.\n' +
                        '\n' +
                        'Знаком и применяю в работе современный протокол для обмена данных о пациенте FHIR.\n' +
                        '\n' +
                        'Помимо непосредственной разработки мною было поднято множество различных серверных окружений на Ubuntu, CentOS, Windows Server, MacOS X. В данные окружения, в зависимости от потребностей, входили: Tomcat, SSL, Apache, Nginx, PHP, Node, PostgreSQL, MySQL и др. Настроены сборки проектов в TeamCity. В некоторые приложения внедрён SonarQube.\n' +
                        '\n' +
                        'В нескольких проектах выступаю в роли консультанта. Провожу переодические код ревью пулл-реквестов.\n' +
                        '\n' +
                        'Для планирования и распределения задач используется Atlassian Jira. Используются приёмы из гибких методологий таких как Scrum, Kanban, XP.'
                },
                website: {
                    buttonTitle: { en: 'Web site', ru: 'Сайт' },
                    link: { en: 'http://www.biarum.com', ru: 'http://www.biarum.com' }
                }
            },
            {
                name: 'Aluna Health',
                position: {
                    name: { en: 'Position: Lead Software Engineer', ru: 'Позиция: Lead Software Engineer' },
                    since: { en: 'Since: November 2017', ru: 'C: Ноября 2017' },
                    until: { en: 'Until: Now', ru: 'По: настоящее время' },
                },
                description: {
                    en: 'My Main Project.\n' +
                        'Aluna Platform is designed and implemented by BIARUM (see below), but Aluna Health is registered in Boston, USA.\n' +
                        '\n' +
                        'Core Technology Stack:\n' +
                        'Java 14+\n' +
                        'Angular 10+\n' +
                        'Spring Boot 2 (Data, Security and so on)\n' +
                        'Gradle (Kotlin DSL)\n' +
                        'PostgreSQL\n' +
                        'Apache UIMA Ruta\n' +
                        '\n' +
                        'This project consist of 4 subprojects for medicians.\n' +
                        '\n' +
                        '<a href="https://chart.alunahealth.com">Aluna Chart Abstraction</a> - Extracting data from free text clinical notes for automatically fill quiz (Structured form).\n' +
                        '<a href="https://library.alunahealth.com">Aluna Library</a> - Library of logical medical workflow rules (IF-THEN-ELSE format).\n' +
                        '<a href="https://cds.alunahealth.com">FHIR CDS</a> - Clinical Decision Support system as FHIR application. It takes workflows from Library and convert it to quiz. When it is filled out it provides to medicians next steps to fight with disease.\n' +
                        '<a href="https://oncocds.alunahealth.com">OncoCDS</a> - Oncology Clinical Decision Support system for oncology cases. It also take workflows from Library and convert it to quiz and provides to medicians next steps to fight with disease.\n' +
                        '\n' +
                        'When I start, I was only one dev on this project, so I start it from scratch. Company gave me a very small project on React and Spring with JDBC connection.\n' +
                        'Now I\'m Lead on this project.\n' +
                        'The team grew up to: 5 Dev, 1 QA, 1 Project Manager, 1 Owner, 1 CTO, 1 UI/UX.\n' +
                        '\n' +
                        'Most tricky tasks:\n' +
                        '\n' +
                        '- A natural language processing algorithm for processing clinical notes, was developed and implemented using the Apache Ruta Engine, InterSystems IKnow and CTakes.\n' +
                        '\n' +
                        '- Now I am familiar and apply in my work a modern protocol for sharing patient data - FHIR.\n' +
                        '\n' +
                        '- Aluna Health has a connection with InterSystems company.\n' +
                        'So I had the opportunity to familiarize myself with InterSystems Caché, I wrote code for IRIS and HealthShare applications. Especially for InterSystems company we developed their own <a href="https://fhirsandbox.intersystems.com/apps">FHIR Sandbox</a>\n' +
                        'on Angular + InterSystems Caché (IRIS).\n' +
                        '- Aluna Health also has a connection with MIT, we did <a href="http://sustainability.mit.edu/living-lab-finder">Living Labs Finder</a> for them.\n' +
                        '\n' +
                        'Besides writing a code, I also do a code review of pull-requests for my team, develop technical specifications for tasks, help with coding.\n' +
                        '\n' +
                        'For task management we use Atlassian Jira. For project management, agile methodologies such as Kanban (with some of scrum features) is used.\n',
                    ru: 'Это мой основной проект и то чем я больше всего горжусь.\n' +
                        'Aluna Platform спроектирована и разработана компанией BIARUM (см. ниже).\n' +
                        'Однако этот проект принадлежит Aluna Health которая зарегистрирована в Boston, USA.\n' +
                        '\n' +
                        'Основной стек технологий:\n' +
                        'Java 14+\n' +
                        'Angular 10+\n' +
                        'Spring Boot 2 (Data, Security and so on)\n' +
                        'Gradle (Kotlin DSL)\n' +
                        'PostgreSQL\n' +
                        'Apache UIMA Ruta\n' +
                        '\n' +
                        'Проект состоит из 4 подпроектов для докторов (по большей части занимающихся онкологией).\n' +
                        '\n' +
                        '<a href="https://chart.alunahealth.com">Aluna Chart Abstraction</a> - Экстракция данных из записей врачей (которые они ведут в свободной форме) и автоматическое заполнение некоторого опросника (в структурированной форме).\n' +
                        '<a href="https://library.alunahealth.com">Aluna Library</a> - Библиотека логических медицинских правил (IF-THEN-ELSE формат).\n' +
                        '<a href="https://cds.alunahealth.com">FHIR CDS</a> - Система поддержки принятия решений как FHIR приложение. Данный сервис способен взять правила из библиотеки логических медицинских правил (см. Aluna Library) и сконвертировать их в опросник по результатам которого, будут предложены варианты дальнейших действий.\n' +
                        '<a href="https://oncocds.alunahealth.com">OncoCDS</a> - Система поддержки принятия решений для\n' +
                        'онкологии. Она также берёт правила из библиотеки, формирует опросник и выдаёт решение что следует сделать далее.\n' +
                        '\n' +
                        'Когда я начинал этот проект, я был один, моя компания отдала мне маленькй проект на React и сервер на Spring, с этого началась разработка всей платформы.\n' +
                        'Сейчас я являюсь Lead Engineer на данном проекте.\n' +
                        '\n' +
                        'Наша команда выросла до: 5 разработчиков, 1 QA, 1 Project Manager, 1 Owner, 1 CTO, 1 UI/UX.\n' +
                        '\n' +
                        'Наиболее интересными задачами я могу выделить:\n' +
                        '\n' +
                        '- Разработка алгоритма и внедрение анализатора текста для обработки медицинских записей на основе Apache Ruta Engine, InterSystems IKnow и CTakes.\n' +
                        '\n' +
                        '- Понимаю и активно использую современный протокол передачи медицинских данных пациента - FHIR.\n' +
                        '\n' +
                        '- Aluna Health тесно сотрудничает с компанией InterSystems.\n' +
                        'Мне представилась возможность изучить язык программирования InterSystems Caché, я писал и внедрял код для IRIS и HealthShare приложений. Также специально для компании InterSystems, наша компания разработала им <a href="https://fhirsandbox.intersystems.com/apps">FHIR Sandbox</a>\n' +
                        'on Angular + InterSystems Caché (IRIS).\n' +
                        '- Aluna Health также сотрудничает с MIT, под заказ мы сделали им <a href="http://sustainability.mit.edu/living-lab-finder">Living Labs Finder</a>.\n' +
                        '\n' +
                        'Помимо написания кода, я провожу код ревью пулл реквестов для всей моей команды, разрабатывают техничискую спецификацию для поставленных задач, помогаю разрабатывать другим членам команды.\n' +
                        '\n' +
                        'Для планирования задач мы используем Atlassian Jira. Для проектного менеджмента используются гибкие методолигии, в основном Kanban с некоторыми дополнениями из Scrum и XP.'
                },
                website: {
                    buttonTitle: { en: 'Web site', ru: 'Сайт' },
                    link: { en: 'https://www.alunahealth.com/', ru: 'https://www.alunahealth.com/' }
                }
            },
            {
                name: 'PrismHR',
                position: {
                    name: { en: 'Position: Remote Full-Stack Developer', ru: 'Позиция: Remote Full-Stack Developer' },
                    since: { en: 'Since: may 2019', ru: 'C: мая 2019' },
                    until: { en: 'Until: February 2020', ru: 'По: Февраль 2020' },
                },
                description: {
                    en: 'Remote worker under BIARUM (see below).\n' +
                        '\n' +
                        'Mine main responsibilities is to develop a new features for Benefit Enrollment module.\n' +
                        '\n' +
                        'Core technology Stack:\n' +
                        'React\n' +
                        'AWS (Lambda)\n' +
                        'Serverless\n' +
                        'GraphQL\n' +
                        'NodeJS\n' +
                        '\n' +
                        'I participate in development and migration from this technology stack:\n' +
                        'Unibasic (backend) + Scala as endpoint API\n' +
                        'Unidata (NoSQL database)\n' +
                        'AngularJS (frontend)\n' +
                        'I also did form analysis for migration on new technology stack.\n' +
                        '\n' +
                        'Every day meetings on RingCentral\\GoToMeeting.\n' +
                        'Team consist of 2 Product owners, 1 Scrum Master, 2 QA, 1 TeamLead, 4 Devs, 1 UI/UX.\n' +
                        '\n' +
                        'Full scrum life-cycle is used such as planning, stand-up, retro, grooming and so on. Atlassian Jira is used for management.',
                    ru: 'Удалённая работа от компании BIARUM (см. ниже).\n' +
                        '\n' +
                        'Основные обязанности состоят в разработке новых возможностей для модуля Benefit Enrollment их собственной HR платформы.\n' +
                        '\n' +
                        'Основной стек технологий:\n' +
                        'React\n' +
                        'AWS (Lambda)\n' +
                        'Serverless\n' +
                        'GraphQL\n' +
                        'NodeJS\n' +
                        '\n' +
                        'Я принимаю непосредственное участие в текущей разработке, а также миграции со старого стека:\n' +
                        'Unibasic (backend) + Scala as endpoint API\n' +
                        'Unidata (NoSQL database)\n' +
                        'AngularJS (frontend)\n' +
                        'Также выполняю анализ старых форм, которые требуется мигрировать на новый проект.\n' +
                        '\n' +
                        'Каждый день у меня митинги на RingCentral\\GoToMeeting.\n' +
                        'Основная команда находится в Бостоне: 2 Product owners, 1 Scrum Master, 2 QA, 1 TeamLead, 4 Devs, 1 UI/UX.\n' +
                        '\n' +
                        'На данном проекте используется полный цикл методологии Scrum (планирование, ретро, стендапы и т.п.).\n' +
                        'Atlassian Jira используется для планирования.\n'
                },
                website: {
                    buttonTitle: { en: 'Web site', ru: 'Сайт' },
                    link: { en: 'https://www.prismhr.com/', ru: 'https://www.prismhr.com/' }
                }
            },
        ];
        return _this;
    }
    ExperienceComponent.prototype.replaceNewLineWithHtmlBr = function (text) {
        return text.replace(/\n/g, '<br />');
    };
    ExperienceComponent.prototype.trackByFn = function (index, item) {
        if (item == null) {
            return null;
        }
        return item.name;
    };
    ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"])); };
    ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 3, consts: [["id", "fh5co-press", "data-section", "experience"], [1, "container"], [1, "row"], [1, "col-md-12", "section-heading", "text-center"], [1, "single-animate", "animate-press-1", "en-lang"], ["class", "col-md-6", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-md-6"], [1, "fh5co-press-item", "to-animate"], [1, "fh5co-press-text"], [1, "h2", "fh5co-press-title"], [1, "fh5co-border"], [2, "white-space", "nowrap"], [3, "innerHTML"], [1, "btn", "btn-primary", "btn-sm", 2, "color", "white", 3, "href"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExperienceComponent_div_7_Template, 18, 7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionName[ctx.language]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies.slice().reverse())("ngForTrackBy", ctx.trackByFn);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MifQ== */"] });
    return ExperienceComponent;
}(_languageWrapper__WEBPACK_IMPORTED_MODULE_1__["LanguageWrapper"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.css']
            }]
    }], function () { return [{ type: _services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"] }, { type: _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_infoService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/infoService */ "./src/app/services/infoService.ts");
/* harmony import */ var _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/languageHolder */ "./src/app/services/languageHolder.ts");
/* harmony import */ var _languageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../languageWrapper */ "./src/app/languageWrapper.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../social/social.component */ "./src/app/components/social/social.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var FooterComponent = /** @class */ (function (_super) {
    __extends(FooterComponent, _super);
    function FooterComponent(infoService, languageBroadcaster) {
        var _this = _super.call(this, languageBroadcaster) || this;
        _this.infoService = infoService;
        _this.languageBroadcaster = languageBroadcaster;
        _this.initInfo();
        return _this;
    }
    FooterComponent.prototype.initInfo = function () {
        this.email = this.infoService.getEmail();
        this.phone = this.infoService.getPhone();
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_infoService__WEBPACK_IMPORTED_MODULE_1__["InfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"])); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 2, consts: [["id", "footer", "role", "contentinfo"], [1, "container"], [1, "row", "row-bottom-padded-sm"], [1, "col-md-12"], [1, "copyright", "text-center"], [1, "row"], [1, "col-md-12", "text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-social");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.email, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.phone, " ");
        } }, directives: [_social_social_component__WEBPACK_IMPORTED_MODULE_4__["SocialComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
    return FooterComponent;
}(_languageWrapper__WEBPACK_IMPORTED_MODULE_3__["LanguageWrapper"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: _services_infoService__WEBPACK_IMPORTED_MODULE_1__["InfoService"] }, { type: _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_languageHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/languageHolder */ "./src/app/services/languageHolder.ts");
/* harmony import */ var _services_infoService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/infoService */ "./src/app/services/infoService.ts");
/* harmony import */ var _languageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../languageWrapper */ "./src/app/languageWrapper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-nav-section", item_r1.navSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name[ctx_r0.language]);
} }
var HeaderComponent = /** @class */ (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent(infoService, languageBroadcaster) {
        var _this = _super.call(this, languageBroadcaster) || this;
        _this.infoService = infoService;
        _this.languageBroadcaster = languageBroadcaster;
        _this.menu = [
            {
                name: { en: 'Person', ru: 'Обо мне' },
                navSection: 'about',
            },
            {
                name: { en: 'Experience', ru: 'Опыт' },
                navSection: 'experience',
            },
            {
                name: { en: 'Github', ru: 'Github' },
                navSection: 'home',
            },
            {
                name: { en: 'Education', ru: 'Образование' },
                navSection: 'education',
            },
            {
                name: { en: 'Portfolio', ru: 'Портфолио' },
                navSection: 'portfolio',
            },
            {
                name: { en: 'Programming', ru: 'Программирование' },
                navSection: 'programming',
            },
            {
                name: { en: 'Skills', ru: 'Навыки' },
                navSection: 'skills',
            }
        ];
        _this.flagIconsClasses = { en: 'flag-icon-ru', ru: 'flag-icon-gb' };
        return _this;
    }
    HeaderComponent.prototype.changeLanguage = function () {
        this.languageBroadcaster.changeLanguage();
    };
    HeaderComponent.prototype.initInfo = function () {
        this.nickname = this.infoService.getNickname();
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_infoService__WEBPACK_IMPORTED_MODULE_2__["InfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_languageHolder__WEBPACK_IMPORTED_MODULE_1__["LanguageBroadcaster"])); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 3, consts: [["role", "banner", "id", "fh5co-header", 1, "navbar-fixed-top", "fh5co-animated", "slideInDown"], [1, "container"], [1, "navbar", "navbar-default"], [1, "navbar-header"], ["href", "#", "data-toggle", "collapse", "data-target", "#navbar", "aria-expanded", "false", "aria-controls", "navbar", 1, "js-fh5co-nav-toggle", "fh5co-nav-toggle"], ["href", "/", 1, "navbar-brand"], ["id", "navbar", 1, "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-right"], [4, "ngFor", "ngForOf"], [2, "cursor", "pointer", "padding", "23px 0", 3, "click"], ["href", "#"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Komdosh");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 4, 2, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_11_listener() { return ctx.changeLanguage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("flag-icon " + ctx.flagIconsClasses[ctx.language]);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["#fh5co-header.navbar-fixed-top[_ngcontent-%COMP%]{\r\n  z-index: 100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmaDVjby1oZWFkZXIubmF2YmFyLWZpeGVkLXRvcHtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuIl19 */"] });
    return HeaderComponent;
}(_languageWrapper__WEBPACK_IMPORTED_MODULE_3__["LanguageWrapper"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _services_infoService__WEBPACK_IMPORTED_MODULE_2__["InfoService"] }, { type: _services_languageHolder__WEBPACK_IMPORTED_MODULE_1__["LanguageBroadcaster"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/personalInfo/personalInfo.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/personalInfo/personalInfo.component.ts ***!
  \*******************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _languageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../languageWrapper */ "./src/app/languageWrapper.ts");
/* harmony import */ var _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/languageHolder */ "./src/app/services/languageHolder.ts");
/* harmony import */ var _services_infoService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/infoService */ "./src/app/services/infoService.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../social/social.component */ "./src/app/components/social/social.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var PersonalInfoComponent = /** @class */ (function (_super) {
    __extends(PersonalInfoComponent, _super);
    function PersonalInfoComponent(infoService, languageBroadcaster) {
        var _this = _super.call(this, languageBroadcaster) || this;
        _this.infoService = infoService;
        _this.languageBroadcaster = languageBroadcaster;
        _this.sectionName = { en: 'Personal Info', ru: 'Обо мне' };
        _this.name = { en: 'Andrey Tabakov', ru: 'Табаков Андрей' };
        _this.position = 'Full-Stack Engineer Kotlin/Java';
        _this.aboutFirstPart = {
            en: 'Born May 12, 1996 in Saint-Petersburg, Russia. My interests is programming, studying, self-development, guitar playing, walking.',
            ru: 'Родился 12 мая 1996 года в Санкт-Петербурге. Мои интересы: Программирование, обучение, личное развитие, игра на гитаре и прогулки на свежем воздухе.'
        };
        _this.aboutSecondPart = {
            en: 'I am interested in questions of artificial intelligence.<br/>' +
                'As a graduation project for bachelor degree, an algorithm to control the perception of an intelligent agent using the method of forward iterative planning was developed.<br/>' +
                '<br/>' +
                'I am also interested in issues related to multithreading. <br/>' +
                'One of my research is related to relaxed concurrent data structure. As a result of this study, an algorithm to optimize the execution time of operations for the Multiqueues structure was developed:<br/>' +
                '<br/>' +
                '<a href="https://github.com/Komdosh/Multiqueues">https://github.com/Komdosh/Multiqueues</a><br/>' +
                '<br/>' +
                'The results of this work were personally presented at the JWGEA 2018 conference in Japan.<br/>' +
                '<br/>' +
                'In addition to the main activity, I develop various applications as a hobby.<br/>' +
                'One of the applications for Android published in the Google Play Store:<br/>' +
                '<br/>' +
                '<a href="https://play.google.com/store/apps/details?id=com.komdosh.slasol">https://play.google.com/store/apps/details?id=com.komdosh.slasol</a><br/>' +
                '<br/>' +
                'By nature, I am an early bird, I can start working at 5-6 am and till late in the evening, depending on workload and terms.',
            ru: 'Интересны вопросы искусственного интеллекта.<br/>' +
                'В качестве дипломного проекта в бакалавриате был разработан алгоритм управления восприятием интеллектуального агента с использованием метода опережающего итеративного планирования.<br/>' +
                '<br/>' +
                'Также интересны вопросы связанные с многопоточностью. Одно из моих исследований связано со структурами данных с ослабленной семантикой выполнения операций. В результате данного исследования был разработан алгоритм оптимизации выполнения операций для структуры Multiqueues:<br/>' +
                '<br/>' +
                '<a href="https://github.com/Komdosh/Multiqueues">https://github.com/Komdosh/Multiqueues</a><br/>' +
                '<br/>' +
                'Результаты данной работы были лично представлены на конференции JWGEA 2018 в Японии.<br/>' +
                '<br/>' +
                'Помимо основной деятельности, разрабатываю различные приложения в качестве хобби.<br/>' +
                'Одно из приложений для Android опубликованных в Google Play Store:<br/>' +
                '<br/>' +
                '<a href="https://play.google.com/store/apps/details?id=com.komdosh.slasol">https://play.google.com/store/apps/details?id=com.komdosh.slasol</a><br/>' +
                '<br/>' +
                'По природе жаворонок, могу начать работать в 5-6 утра и до позднего вечера, в зависимости от загруженности и сроков.'
        };
        return _this;
    }
    PersonalInfoComponent.ɵfac = function PersonalInfoComponent_Factory(t) { return new (t || PersonalInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"])); };
    PersonalInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalInfoComponent, selectors: [["app-personal-info"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 5, consts: [["id", "fh5co-about-us", "data-section", "about"], [1, "container"], ["id", "team", 1, "row"], [1, "col-md-12", "section-heading", "text-center", "to-animate"], [1, "col-md-12"], [1, "col-md-12", "text-center", "to-animate"], [1, "person"], ["src", "assets/images/face.jpg", "alt", "Person", 1, "img-responsive", "img-rounded"], [1, "name"], [1, "position"], [3, "innerHtml"], [2, "text-align", "center"]], template: function PersonalInfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-social", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionName[ctx.language]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name[ctx.language]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.position);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutFirstPart[ctx.language]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.aboutSecondPart[ctx.language], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        } }, directives: [_social_social_component__WEBPACK_IMPORTED_MODULE_4__["SocialComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uYWxJbmZvL3BlcnNvbmFsSW5mby5jb21wb25lbnQuY3NzIn0= */"] });
    return PersonalInfoComponent;
}(_languageWrapper__WEBPACK_IMPORTED_MODULE_1__["LanguageWrapper"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-personal-info',
                templateUrl: './personalInfo.component.html',
                styleUrls: ['./personalInfo.component.css']
            }]
    }], function () { return [{ type: _services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"] }, { type: _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _languageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../languageWrapper */ "./src/app/languageWrapper.ts");
/* harmony import */ var _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/languageHolder */ "./src/app/services/languageHolder.ts");
/* harmony import */ var _services_infoService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/infoService */ "./src/app/services/infoService.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_image_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-viewer */ "./node_modules/ngx-image-viewer/__ivy_ngcc__/ngx-image-viewer.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var PortfolioComponent = /** @class */ (function (_super) {
    __extends(PortfolioComponent, _super);
    function PortfolioComponent(infoService, languageBroadcaster) {
        var _this = _super.call(this, languageBroadcaster) || this;
        _this.infoService = infoService;
        _this.languageBroadcaster = languageBroadcaster;
        _this.sectionName = { en: 'Portfolio', ru: 'Портфолио' };
        _this.baseHref = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseHref;
        _this.portfolioImagesPath = _this.baseHref + "/assets/images/portfolio";
        _this.images = [];
        _this.createImagesList();
        return _this;
    }
    PortfolioComponent.prototype.createImagesList = function () {
        var imgNums = [11, 10, 9, 7, 8, 6, 2, 3, 12, 4];
        var imgLength = imgNums.length;
        for (var i = 0; i < imgLength; ++i) {
            this.images.push(this.portfolioImagesPath + "/" + imgNums[i] + ".jpg");
        }
    };
    PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"])); };
    PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 2, consts: [["id", "fh5co-features", "data-section", "portfolio"], [1, "container"], [1, "row", "row-bottom-padded-sm"], [1, "col-md-12", "section-heading", "text-center"], [1, "to-animate"], [1, "row"], [1, "col-md-12", 2, "height", "538px"], [3, "src"], [1, "clearfix", "visible-sm-block", "visible-xs-block"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngx-image-viewer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionName[ctx.language]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.images);
        } }, directives: [ngx_image_viewer__WEBPACK_IMPORTED_MODULE_5__["ImageViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIn0= */"] });
    return PortfolioComponent;
}(_languageWrapper__WEBPACK_IMPORTED_MODULE_1__["LanguageWrapper"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.css']
            }]
    }], function () { return [{ type: _services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"] }, { type: _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/programming/programming.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/programming/programming.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProgrammingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgrammingComponent", function() { return ProgrammingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _languageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../languageWrapper */ "./src/app/languageWrapper.ts");
/* harmony import */ var _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/languageHolder */ "./src/app/services/languageHolder.ts");
/* harmony import */ var _services_infoService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/infoService */ "./src/app/services/infoService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var _c0 = function (a1) { return { "color": "white", "font-size": a1 }; };
function ProgrammingComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var pl_r3 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("icon colored-" + pl_r3.colorNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, (pl_r3.fontSize == null ? 24 : pl_r3.fontSize) + "pt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pl_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pl_r3.description[ctx_r2.language]);
} }
function ProgrammingComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgrammingComponent_div_7_div_1_Template, 6, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var pls_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pls_r1);
} }
var ProgrammingComponent = /** @class */ (function (_super) {
    __extends(ProgrammingComponent, _super);
    function ProgrammingComponent(infoService, languageBroadcaster) {
        var _this = _super.call(this, languageBroadcaster) || this;
        _this.infoService = infoService;
        _this.languageBroadcaster = languageBroadcaster;
        _this.sectionName = { en: 'Programming languages', ru: 'Языки программирования' };
        _this.programmingLangs = [
            [
                {
                    name: 'Kotlin',
                    description: {
                        en: 'I write code for server side and Anrdoid applications',
                        ru: 'Пишу код для серверных и Android приложений на нём'
                    },
                    colorNum: '1',
                    fontSize: 24
                },
                {
                    name: 'C++',
                    description: {
                        en: 'It is required for my scientific researches in multithreading environments',
                        ru: 'Данный язык необходим для моих научных исследований в области многопоточных программ'
                    },
                    colorNum: '2',
                    fontSize: 24
                },
            ],
            [
                {
                    name: 'Java',
                    description: {
                        en: 'Main language for now',
                        ru: 'Основной язык используемый в работе'
                    },
                    colorNum: '1',
                    fontSize: 24
                },
                {
                    name: 'JS/TS',
                    description: {
                        en: 'It is required for Angular and React frontend applications on my work',
                        ru: 'Они применяются мной для написания клиентских приложений на Angular и React'
                    },
                    colorNum: '4',
                    fontSize: 24
                },
            ],
            [
                {
                    name: 'C',
                    description: {
                        en: 'For some reasons C++ is not always suitable for mine researches, so clean C is used (I rewrote MPICH functions for example)',
                        ru: 'По некоторым причинам C++ не всегда подходит для моих исследований, поэтому используется чистый C (Например для переписываний функций в MPICH)'
                    },
                    colorNum: '3',
                    fontSize: 24
                },
                {
                    name: 'Python',
                    description: {
                        en: 'It is needed for math evaluations for me, but sometimes I tried to build a neural networks',
                        ru: 'Приходит на помощь, когда мне требуется написать математическую программу, но также пробовал строить нейронные сети'
                    },
                    colorNum: '5',
                    fontSize: 18
                },
            ]
        ];
        return _this;
    }
    ProgrammingComponent.prototype.trackByFn = function (index, item) {
        if (item == null) {
            return null;
        }
        return item.name;
    };
    ProgrammingComponent.ɵfac = function ProgrammingComponent_Factory(t) { return new (t || ProgrammingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"])); };
    ProgrammingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgrammingComponent, selectors: [["app-programming"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 2, consts: [["id", "fh5co-our-services", "data-section", "programming"], [1, "container"], [1, "row", "row-bottom-padded-sm"], [1, "col-md-12", "section-heading", "text-center"], [1, "to-animate"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["class", "box to-animate", 4, "ngFor", "ngForOf"], [1, "box", "to-animate"], [3, "ngStyle"]], template: function ProgrammingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProgrammingComponent_div_7_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionName[ctx.language]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programmingLangs);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3JhbW1pbmcvcHJvZ3JhbW1pbmcuY29tcG9uZW50LmNzcyJ9 */"] });
    return ProgrammingComponent;
}(_languageWrapper__WEBPACK_IMPORTED_MODULE_1__["LanguageWrapper"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgrammingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-programming',
                templateUrl: './programming.component.html',
                styleUrls: ['./programming.component.css']
            }]
    }], function () { return [{ type: _services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"] }, { type: _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/projectSlider/projectSlider.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/projectSlider/projectSlider.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSliderComponent", function() { return ProjectSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _languageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../languageWrapper */ "./src/app/languageWrapper.ts");
/* harmony import */ var _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/languageHolder */ "./src/app/services/languageHolder.ts");
/* harmony import */ var _services_infoService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/infoService */ "./src/app/services/infoService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








function ProjectSliderComponent_div_2_h3_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.role[ctx_r2.language]);
} }
function ProjectSliderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectSliderComponent_div_2_h3_10_Template, 2, 1, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var project_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", project_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name[ctx_r0.language]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.description[ctx_r0.language]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.role != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1.buttonTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var ProjectItem = /** @class */ (function () {
    function ProjectItem() {
    }
    return ProjectItem;
}());
var ProjectSliderComponent = /** @class */ (function (_super) {
    __extends(ProjectSliderComponent, _super);
    function ProjectSliderComponent(infoService, languageBroadcaster) {
        var _this = _super.call(this, languageBroadcaster) || this;
        _this.infoService = infoService;
        _this.languageBroadcaster = languageBroadcaster;
        _this.projects = [
            {
                style: { 'background-image': 'url("assets/images/slide_5.jpg")' },
                name: { en: 'Github repositories!', ru: 'Github репозитории!' },
                role: { en: '', ru: '' },
                description: {
                    en: 'Checkout other interesting code',
                    ru: 'Прочие проекты'
                },
                link: 'https://github.com/Komdosh?tab=repositories',
                buttonTitle: 'Github',
                imgUrl: 'assets/images/github.png'
            },
            {
                style: { background: '#78909C' },
                name: { en: 'Publications', ru: 'Публикации' },
                description: { en: 'Scientific researches', ru: 'Научные исследования' },
                role: { en: '', ru: '' },
                link: 'https://github.com/Komdosh/Publications',
                buttonTitle: 'Github',
                imgUrl: 'assets/images/publication.png'
            },
            {
                style: { background: '#352f44' },
                name: { en: 'SlaSol \u2014 Android game app', ru: 'SlaSol \u2014 Android приложение' },
                description: { en: 'Try to think in colors', ru: 'Попробуйте мыслить цветами' },
                role: { en: 'Role: Developer', ru: 'Роль: Разработчик' },
                link: 'https://play.google.com/store/apps/details?id=com.komdosh.slasol',
                buttonTitle: 'Google Play',
                imgUrl: 'assets/images/SlaSol.png'
            }
        ];
        return _this;
    }
    ProjectSliderComponent.prototype.trackByFn = function (index, item) {
        if (item == null) {
            return null;
        }
        return item.name;
    };
    ProjectSliderComponent.ɵfac = function ProjectSliderComponent_Factory(t) { return new (t || ProjectSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"])); };
    ProjectSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectSliderComponent, selectors: [["app-project-slider"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["id", "slider", "data-section", "home"], [1, "owl-carousel", "owl-carousel-fullwidth"], ["class", "item", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "item", 3, "ngStyle"], [1, "container", 2, "position", "relative"], [1, "row"], [1, "col-md-7", "col-sm-7"], [1, "fh5co-owl-text-wrap"], [1, "fh5co-owl-text"], [1, "fh5co-lead", "to-animate"], [1, "fh5co-sub-lead", "to-animate"], ["class", "fh5co-sub-lead to-animate", 4, "ngIf"], [1, "to-animate-2"], ["target", "_blank", 1, "btn", "btn-primary", "btn-lg", 3, "href"], [1, "col-md-5", "col-md-push-1", "col-sm-4", "col-sm-push-1", "android-image"], [1, "android", "to-animate-2"], ["alt", "", 3, "src"]], template: function ProjectSliderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectSliderComponent_div_2_Template, 17, 7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects)("ngForTrackBy", ctx.trackByFn);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdFNsaWRlci9wcm9qZWN0U2xpZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
    return ProjectSliderComponent;
}(_languageWrapper__WEBPACK_IMPORTED_MODULE_1__["LanguageWrapper"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-slider',
                templateUrl: './projectSlider.component.html',
                styleUrls: ['./projectSlider.component.css']
            }]
    }], function () { return [{ type: _services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"] }, { type: _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _languageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../languageWrapper */ "./src/app/languageWrapper.ts");
/* harmony import */ var _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/languageHolder */ "./src/app/services/languageHolder.ts");
/* harmony import */ var _services_infoService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/infoService */ "./src/app/services/infoService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








function SkillsComponent_div_7_p_5_br_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function SkillsComponent_div_7_p_5_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var about_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", about_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](about_r3.buttonTitle);
} }
function SkillsComponent_div_7_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillsComponent_div_7_p_5_br_2_Template, 1, 0, "br", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillsComponent_div_7_p_5_a_3_Template, 2, 2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var about_r3 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", about_r3.text[ctx_r2.language], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", about_r3.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", about_r3.link);
} }
function SkillsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillsComponent_div_7_p_5_Template, 4, 3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", skill_r1.abouts);
} }
var SkillsComponent = /** @class */ (function (_super) {
    __extends(SkillsComponent, _super);
    function SkillsComponent(infoService, languageBroadcaster) {
        var _this = _super.call(this, languageBroadcaster) || this;
        _this.infoService = infoService;
        _this.languageBroadcaster = languageBroadcaster;
        _this.sectionName = { en: 'Skills', ru: 'Навыки' };
        _this.skills = [
            {
                name: 'Android',
                abouts: [
                    {
                        text: { en: 'Develop my own app SlaSol:', ru: 'Разработал собственное приложение SlaSol:' },
                        link: 'https://play.google.com/store/apps/details?id=com.komdosh.slasol',
                        buttonTitle: 'Google play',
                    },
                    {
                        text: {
                            en: 'What I used for develop: Android SDK, Android Clean Architecture, AndroidX, JitPack, DataBinding, Room, Retrofit, Glide, Picasso, ARCore, Navigation',
                            ru: 'Что я использовал в моих разработках:Android SDK, Android Clean Architecture, AndroidX, JitPack, DataBinding, Room, Retrofit, Glide, Picasso, ARCore, Navigation'
                        },
                    },
                    {
                        text: {
                            en: 'Android it is kind of hobby for me, I develop small apps just for fun',
                            ru: 'Android для меня выступает в качестве хобби, я разрабатываю небольшие приложения просто ради развлечения'
                        },
                    },
                ]
            },
            {
                name: 'SQL',
                abouts: [
                    {
                        text: { en: 'I\'m worked with PostgreSQL, MySQL, SQLite. I know what is left, right, inner, outer, anti joins; Indexes; Transactions; ACID', ru: 'Я работаю с PostgreSQL, MySQL, SQLite. Знаю что такое  left, right, inner, outer, anti joins; Индексы; Транзакции; ACID' },
                    },
                ]
            },
            {
                name: 'Spring',
                abouts: [
                    {
                        text: {
                            en: 'Java Spring Framework. Deal with it at work. Also know additional stuff like Spring Security and others',
                            ru: 'Java Spring Framework. Имею с ним дело на работе'
                        },
                    },
                ]
            },
            {
                name: 'REST',
                abouts: [
                    {
                        text: { en: 'I know what is GET, POST, PUT, DELETE, PATCH. I worked with http closely at my work. I wrote servers and clients as well. I wrote API servers',
                            ru: 'Знаю что такое GET, POST, PUT, DELETE, PATCH. На работе близко познакомился с протоколом HTTP. Писал как сервера так и кленты. Создавал API сервера' },
                    },
                ]
            },
            {
                name: 'Git',
                abouts: [
                    {
                        text: {
                            en: 'As you can see this site on Github, so I know what is checkout, clone, pull, push, rebase, merge and so on',
                            ru: 'Как вы могли заметить, этот сайт размещён на Github, так что я знаю что такое checkout, clone, pull, rebase, merge, push и т.д.'
                        },
                    },
                ]
            },
            {
                name: 'IDE',
                abouts: [
                    {
                        text: {
                            en: 'Use Intellij IDEA, Android Studio, Visual Studio, Dev-Cpp, Clion and used many others',
                            ru: 'Использую Intellij IDEA, Android Studio, Visual Studio, Dev-Cpp, Clion и также пользовался многими другими'
                        },
                    },
                ]
            },
            {
                name: 'OS',
                abouts: [
                    {
                        text: {
                            en: 'Use Mac OS X, Windows, Ubuntu Linux, sometimes use another dists like CentOS, Debian and so on',
                            ru: 'Использую Mac OS X, Windows, Ubuntu Linux, пользовался и другими дистрибутивами такими как CentOS, Debian и др.'
                        },
                    },
                ]
            },
            {
                name: 'CI',
                abouts: [
                    {
                        text: {
                            en: 'Setup and worked with Jenkins and TeamCity',
                            ru: 'Настраивал и работал с Jenkins и TeamCity'
                        },
                    },
                ]
            },
            {
                name: 'Agile',
                abouts: [
                    {
                        text: {
                            en: 'I know what is Scrum, Kanban, XP, Retro, Planning, ScrumPoker and so on',
                            ru: 'Знаю что такое Scrum, Kanban, XP, Retro, Planning, ScrumPoker и т.д.'
                        },
                    },
                ]
            },
            {
                name: 'Other',
                abouts: [
                    {
                        text: {
                            en: 'I deployed and worked with: SonarQube, Jetty, Tomcat, Docker, Heroku, Apache POI',
                            ru: 'Конфигурировал и работал с: SonarQube, Jetty, Tomcat, Docker, Heroku, Apache POI'
                        },
                    },
                ]
            }
        ];
        return _this;
    }
    SkillsComponent.prototype.trackByFn = function (index, item) {
        if (item == null) {
            return null;
        }
        return item.name;
    };
    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"])); };
    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 3, consts: [["id", "fh5co-features", "data-section", "skills"], [1, "container"], [1, "row"], [1, "col-md-12", "section-heading", "text-center"], [1, "single-animate", "animate-features-1"], [1, "row", "row-bottom-padded-sm"], ["class", "col-md-4 col-sm-6 col-xs-6 col-xxs-12 fh5co-service to-animate", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-md-4", "col-sm-6", "col-xs-6", "col-xxs-12", "fh5co-service", "to-animate"], [1, "fh5co-icon"], [1, "fh5co-desc"], [4, "ngFor", "ngForOf"], [1, "clearfix", "visible-sm-block", "visible-xs-block"], [4, "ngIf"], ["target", "_blank", "class", "btn btn-primary btn-sm", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "btn", "btn-primary", "btn-sm", 3, "href"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillsComponent_div_7_Template, 7, 2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionName[ctx.language]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills)("ngForTrackBy", ctx.trackByFn);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIn0= */"] });
    return SkillsComponent;
}(_languageWrapper__WEBPACK_IMPORTED_MODULE_1__["LanguageWrapper"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css']
            }]
    }], function () { return [{ type: _services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"] }, { type: _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/social/social.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/social/social.component.ts ***!
  \*******************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _languageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../languageWrapper */ "./src/app/languageWrapper.ts");
/* harmony import */ var _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/languageHolder */ "./src/app/services/languageHolder.ts");
/* harmony import */ var _services_infoService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/infoService */ "./src/app/services/infoService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








function SocialComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ltc_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ltc_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ltc_r1.iconClass);
} }
var SocialComponent = /** @class */ (function (_super) {
    __extends(SocialComponent, _super);
    function SocialComponent(infoService, languageBroadcaster) {
        var _this = _super.call(this, languageBroadcaster) || this;
        _this.infoService = infoService;
        _this.languageBroadcaster = languageBroadcaster;
        _this.initInfo();
        return _this;
    }
    SocialComponent.prototype.initInfo = function () {
        this.linksToConnect = this.infoService.getLinksToConnect();
    };
    SocialComponent.ɵfac = function SocialComponent_Factory(t) { return new (t || SocialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"])); };
    SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialComponent, selectors: [["app-social"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[1, "social", "social-circle"], [4, "ngFor", "ngForOf"], [3, "href"]], template: function SocialComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialComponent_li_1_Template, 3, 3, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.linksToConnect);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuY3NzIn0= */"] });
    return SocialComponent;
}(_languageWrapper__WEBPACK_IMPORTED_MODULE_1__["LanguageWrapper"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social',
                templateUrl: './social.component.html',
                styleUrls: ['./social.component.css']
            }]
    }], function () { return [{ type: _services_infoService__WEBPACK_IMPORTED_MODULE_3__["InfoService"] }, { type: _services_languageHolder__WEBPACK_IMPORTED_MODULE_2__["LanguageBroadcaster"] }]; }, null); })();


/***/ }),

/***/ "./src/app/languageWrapper.ts":
/*!************************************!*\
  !*** ./src/app/languageWrapper.ts ***!
  \************************************/
/*! exports provided: LanguageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageWrapper", function() { return LanguageWrapper; });
/* harmony import */ var _model_constants_LANGUAGE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/constants/LANGUAGE */ "./src/app/model/constants/LANGUAGE.ts");

var LanguageWrapper = /** @class */ (function () {
    function LanguageWrapper(languageBroadcaster) {
        var _this = this;
        this.language = _model_constants_LANGUAGE__WEBPACK_IMPORTED_MODULE_0__["LANGUAGE"].en;
        this.language = languageBroadcaster.getLanguage();
        languageBroadcaster.getLanguageSubscription().subscribe(function (lang) {
            _this.language = lang;
        });
    }
    return LanguageWrapper;
}());



/***/ }),

/***/ "./src/app/model/constants/LANGUAGE.ts":
/*!*********************************************!*\
  !*** ./src/app/model/constants/LANGUAGE.ts ***!
  \*********************************************/
/*! exports provided: LANGUAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE", function() { return LANGUAGE; });
var LANGUAGE = /** @class */ (function () {
    function LANGUAGE() {
    }
    LANGUAGE.ru = 'ru';
    LANGUAGE.en = 'en';
    return LANGUAGE;
}());



/***/ }),

/***/ "./src/app/services/infoService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/infoService.ts ***!
  \*****************************************/
/*! exports provided: InfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoService", function() { return InfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var InfoService = /** @class */ (function () {
    function InfoService() {
        this.email = 'Komdosh@yandex.ru';
        this.phone = '+7-911-113-60-09';
        this.nickname = 'Komdosh';
        this.linksToConnect = [
            {
                link: 'https://vk.com/komdosh',
                iconClass: 'icon-vk'
            },
            {
                link: 'https://www.facebook.com/komdosh',
                iconClass: 'icon-facebook'
            },
            {
                link: 'https://www.linkedin.com/in/komdosh',
                iconClass: 'icon-linkedin'
            },
            {
                link: 'https://github.com/Komdosh',
                iconClass: 'icon-github'
            },
            {
                link: 'https://ru.stackoverflow.com/users/184435/komdosh',
                iconClass: 'fa fa-stack-overflow'
            },
            {
                link: 'https://t.me/Komdosh',
                iconClass: 'fa fa-telegram'
            },
        ];
    }
    InfoService.prototype.getEmail = function () {
        return this.email;
    };
    InfoService.prototype.getPhone = function () {
        return this.phone;
    };
    InfoService.prototype.getLinksToConnect = function () {
        return this.linksToConnect;
    };
    InfoService.prototype.getNickname = function () {
        return this.nickname;
    };
    InfoService.ɵfac = function InfoService_Factory(t) { return new (t || InfoService)(); };
    InfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InfoService, factory: InfoService.ɵfac });
    return InfoService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/languageHolder.ts":
/*!********************************************!*\
  !*** ./src/app/services/languageHolder.ts ***!
  \********************************************/
/*! exports provided: LanguageBroadcaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageBroadcaster", function() { return LanguageBroadcaster; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_constants_LANGUAGE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/constants/LANGUAGE */ "./src/app/model/constants/LANGUAGE.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");




var LanguageBroadcaster = /** @class */ (function () {
    function LanguageBroadcaster() {
        this.language = 'en';
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LanguageBroadcaster.prototype.getLanguage = function () {
        return this.language;
    };
    LanguageBroadcaster.prototype.changeLanguage = function (language) {
        if (language != null) {
            this.language = language;
        }
        else {
            this.language = this.language === _model_constants_LANGUAGE__WEBPACK_IMPORTED_MODULE_1__["LANGUAGE"].en ? _model_constants_LANGUAGE__WEBPACK_IMPORTED_MODULE_1__["LANGUAGE"].ru : _model_constants_LANGUAGE__WEBPACK_IMPORTED_MODULE_1__["LANGUAGE"].en;
        }
        this.subject.next(this.language);
    };
    LanguageBroadcaster.prototype.getLanguageSubscription = function () {
        return this.subject.asObservable();
    };
    LanguageBroadcaster.ɵfac = function LanguageBroadcaster_Factory(t) { return new (t || LanguageBroadcaster)(); };
    LanguageBroadcaster.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageBroadcaster, factory: LanguageBroadcaster.ɵfac });
    return LanguageBroadcaster;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageBroadcaster, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseHref: ''
};


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\komdosh\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map