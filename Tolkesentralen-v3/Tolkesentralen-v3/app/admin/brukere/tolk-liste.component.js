"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tolk_service_1 = require("../../_services/tolk.service");
var TolkListeComponent = (function () {
    function TolkListeComponent(service) {
        this.service = service;
        this.d = new Date(1494576900000);
    }
    TolkListeComponent.prototype.ngOnInit = function () {
        this.count = 77;
        this.loading = true;
        this.getTolk();
        console.info("This is console.indo");
        if (window.performance) {
            console.log("window.performance work's fine on this browser");
        }
        if (performance.navigation.type == 1) {
            console.log("This page is reloaded");
        }
        else {
            console.log("This page is not reloaded");
        }
        // this.loading = false;
    };
    TolkListeComponent.prototype.btnTilSlettClick = function () {
        this.slettErTrykket = true;
    };
    TolkListeComponent.prototype.btnAvbrytTilSlettClick = function () {
        this.slettErTrykket = false;
    };
    TolkListeComponent.prototype.btnInfoClick = function (index, nr) {
        if (this.index == index && this.nr == nr) {
            this.SetDefault();
        }
        else {
            this.index = index;
            this.nr = nr;
            this.infoErTrykket = true;
        }
    };
    TolkListeComponent.prototype.VisInfo = function (index, nr) {
        if (this.index == index && this.nr == nr && this.infoErTrykket) {
            return true;
        }
        return false;
    };
    TolkListeComponent.prototype.SetDefault = function () {
        this.infoErTrykket = false;
        this.slettErTrykket = false;
        this.default = true;
        this.index = -1;
        this.nr = -1;
    };
    TolkListeComponent.prototype.checkIfArrayIsEmthy = function (array) {
        if (array == null)
            return false;
        if (array.length == 0)
            return false;
        return true;
    };
    TolkListeComponent.prototype.fix = function (jsonDate) {
        // -> //Date(1494501300000)/ -> returnerer -> new Date(1494501300000)
        return new Date(parseInt(jsonDate.substr(6)));
    };
    TolkListeComponent.prototype.getTolk = function () {
        var _this = this;
        this.service.getAlle()
            .subscribe(function (retur) {
            _this.arrayTolk = retur;
        }, function (error) {
        }, function () { _this.loading = false; });
    };
    return TolkListeComponent;
}());
TolkListeComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/admin/brukere/tolk-liste.component.html",
        providers: [tolk_service_1.TolkService],
    }),
    __metadata("design:paramtypes", [tolk_service_1.TolkService])
], TolkListeComponent);
exports.TolkListeComponent = TolkListeComponent;
