"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Data_Service_1 = require("../../Data-Service");
var StandardBankSideNavComponent = (function () {
    function StandardBankSideNavComponent(dataService) {
        this.dataService = dataService;
        this.showNavChange = new core_1.EventEmitter();
    }
    StandardBankSideNavComponent.prototype.toggleMenu = function () {
        this.showNavChange.emit(!this.showNav);
        this.dataService.hamburger = !this.showNav;
    };
    return StandardBankSideNavComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StandardBankSideNavComponent.prototype, "showNav", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], StandardBankSideNavComponent.prototype, "showNavChange", void 0);
StandardBankSideNavComponent = __decorate([
    core_1.Component({
        selector: 'side-nav',
        templateUrl: "./standardBankSideNav.component.html",
        styleUrls: ['./standardBankSideNav.component.css'],
    }),
    __metadata("design:paramtypes", [Data_Service_1.DataService])
], StandardBankSideNavComponent);
exports.StandardBankSideNavComponent = StandardBankSideNavComponent;
//# sourceMappingURL=standardBandSideNav.component.js.map