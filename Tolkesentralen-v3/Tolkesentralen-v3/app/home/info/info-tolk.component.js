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
var core_1 = require('@angular/core');
var InfoTolkComponent = (function () {
    function InfoTolkComponent() {
    }
    InfoTolkComponent.prototype.ngOnInit = function () {
        this.setSkjermtolk();
    };
    InfoTolkComponent.prototype.setSkjermtolk = function () {
        this.hide();
        this.Skjermtolk = true;
    };
    InfoTolkComponent.prototype.setFMTolk = function () {
        this.hide();
        this.FMTolk = true;
    };
    InfoTolkComponent.prototype.setTelefontolk = function () {
        this.hide();
        this.Telefontolk = true;
    };
    InfoTolkComponent.prototype.setVideotolk = function () {
        this.hide();
        this.Videotolk = true;
    };
    InfoTolkComponent.prototype.setKonferansetolk = function () {
        this.hide();
        this.Konferansetolk = true;
    };
    InfoTolkComponent.prototype.hide = function () {
        this.Skjermtolk = false;
        this.FMTolk = false;
        this.Telefontolk = false;
        this.Videotolk = false;
        this.Konferansetolk = false;
    };
    InfoTolkComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/home/info/info-tolk.html"
        }), 
        __metadata('design:paramtypes', [])
    ], InfoTolkComponent);
    return InfoTolkComponent;
}());
exports.InfoTolkComponent = InfoTolkComponent;
//# sourceMappingURL=info-tolk.component.js.map