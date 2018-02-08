"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var standardBankCards_component_1 = require("./standardBank/CardsComponent/standardBankCards.component");
var standardBankContent_component_1 = require("./standardBank/ContentComponent/standardBankContent.component");
var standardBankHeader_component_1 = require("./standardBank/HeaderComponent/standardBankHeader.component");
var standardBandSideNav_component_1 = require("./standardBank/NavComponent/standardBandSideNav.component");
var Data_Service_1 = require("./Data-Service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule
        ],
        declarations: [app_component_1.AppComponent,
            standardBankHeader_component_1.StandardBankHeaderComponent,
            standardBankContent_component_1.StandardBankContentComponent,
            standardBandSideNav_component_1.StandardBankSideNavComponent,
            standardBankCards_component_1.StandardBankCardComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [Data_Service_1.DataService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map