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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kunde_service_1 = require("../../_services/kunde.service");
var KundeListeComponent = (function () {
    function KundeListeComponent(service) {
        this.service = service;
        this.arrayKunder = [];
    }
    KundeListeComponent.prototype.ngOnInit = function () {
        this.getKunder();
    };
    KundeListeComponent.prototype.getKunder = function () {
        var _this = this;
        // get users from secure api end point
        this.service.getKunder()
            .subscribe(function (kunder) {
            if (kunder != null) {
                _this.arrayKunder = kunder;
            }
        });
    };
    KundeListeComponent.prototype.setTilSlettErTrykket = function (index) {
        if (this.index == index && this.slett) {
            return true;
        }
        return false;
    };
    KundeListeComponent.prototype.setTilSlett = function (index) {
        this.slett = true;
        this.index = index;
    };
    KundeListeComponent.prototype.setDefaultErtrykket = function (index) {
        return !this.setTilSlettErTrykket(index);
    };
    KundeListeComponent.prototype.setDefault = function () {
        this.index = -1;
        this.slett = false;
    };
    KundeListeComponent.prototype.slettKunde = function (index, kundeID) {
        var _this = this;
        this.service.slettKunde(kundeID).subscribe(function (retur) {
            _this.arrayKunder.splice(index, 1);
        }, function (error) { return console.log("Beklager PUT, en feil har oppstått - " + error); }, function () { return console.log("ferdig post-api/bestilling"); });
    };
    return KundeListeComponent;
}());
KundeListeComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/admin/brukere/kunde-liste.component.html"
    }),
    __metadata("design:paramtypes", [kunde_service_1.KundeService])
], KundeListeComponent);
exports.KundeListeComponent = KundeListeComponent;
//# sourceMappingURL=kunde-liste.component.js.map