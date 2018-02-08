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
var StandardBankCardComponent = (function () {
    function StandardBankCardComponent(dataService) {
        this.dataService = dataService;
    }
    StandardBankCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getBigCardData()
            .subscribe(function (data) {
            _this.jsonData = data;
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    return StandardBankCardComponent;
}());
StandardBankCardComponent = __decorate([
    core_1.Component({
        selector: 'card-details',
        templateUrl: "./standardBankcards.component.html",
        styleUrls: ['./standardBankcards.component.css']
    }),
    __metadata("design:paramtypes", [Data_Service_1.DataService])
], StandardBankCardComponent);
exports.StandardBankCardComponent = StandardBankCardComponent;
//# sourceMappingURL=standardBankCards.component.js.map