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
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../../_services/oppdrag.service");
var temp_service_1 = require("../../_services/temp.service");
var tolk_service_1 = require("../../_services/tolk.service");
=======
var core_1 = require('@angular/core');
var oppdrag_service_1 = require('../../_services/oppdrag.service');
var temp_service_1 = require('../../_services/temp.service');
var tolk_service_1 = require('../../_services/tolk.service');
var router_1 = require('@angular/router');
var spraak_1 = require('../../_models/spraak');
>>>>>>> 9e3fe497a2938e9bbd7ab4262693cbc05f51dcf8
var UtdelComponent = (function () {
    function UtdelComponent(oppdragService, tempService, tolkService, router) {
        this.oppdragService = oppdragService;
        this.tempService = tempService;
        this.tolkService = tolkService;
        this.router = router;
        this.path = 'admin/oppdrag';
        this.oppdrag = this.tempService.getObject();
    }
    UtdelComponent.prototype.ngOnInit = function () {
        if (this.oppdrag == null) {
            this.router.navigate(['./admin/oppdrag']);
            return;
        }
        this.hentTolkmedGittSpraak();
    };
    UtdelComponent.prototype.getSpraak = function (i) {
        return new spraak_1.Spraak().liste[i].spraak;
    };
    UtdelComponent.prototype.setAllChecked = function () {
        this.allChecked = !this.allChecked;
        if (this.arrayTolk) {
            for (var _i = 0, _a = this.arrayTolk; _i < _a.length; _i++) {
                var object = _a[_i];
                object.valgt = this.allChecked;
            }
        }
    };
    UtdelComponent.prototype.hentTolkmedGittSpraak = function () {
        var _this = this;
        console.log("hentTolkmedGittSpraak BLIR KANL");
        this.showForm = false;
        this.response = "loading";
        var body = JSON.stringify({ fraspraak: this.oppdrag.fraspraak, tilspraak: this.oppdrag.tilspraak });
        this.tolkService.getTolkMedSpraak(body).subscribe(function (retur) {
            _this.showForm = true;
            _this.response = "";
            _this.responseText = "Forespørselen er sendt! Gå til Bestillinger for å se detaljer.";
            _this.arrayTolk = retur;
        }, function (error) {
            _this.response = "error";
            _this.responseText = "Ooops, beklager..";
            _this.underText = "En feil oppsto og handlingen ble avbrutt!";
        }, function () { });
    };
    UtdelComponent.prototype.tilbake = function () {
        this.showForm = true;
        this.router.navigate(["./admin/oppdrag"]);
    };
    UtdelComponent.prototype.postForesporsler = function () {
        var _this = this;
        this.response = "loading";
        this.showForm = false;
        var tempArreyTolkID = [];
        if (this.arrayTolk) {
            for (var _i = 0, _a = this.arrayTolk; _i < _a.length; _i++) {
                var object = _a[_i];
                if (object.valgt) {
                    tempArreyTolkID.push(object.persId);
                }
            }
        }
        var body = JSON.stringify({ tolkArrey: tempArreyTolkID, oppdragId: this.oppdrag.oppdragID });
        this.tolkService.postForesposler(body).subscribe(function (retur) {
            _this.response = "success";
            _this.responseText = "Success! Forespørselen er utdelt.";
            _this.underText = "Gå tilbake for å se detaljer.";
        }, function (error) {
            _this.response = "error";
            _this.responseText = "Ooops, beklager..";
            _this.underText = "En feil oppsto og handlingen ble avbrutt!";
        }, function () { });
    };
<<<<<<< HEAD
=======
    UtdelComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/admin/foresporsler/utdel.component.html",
            providers: [tolk_service_1.TolkService],
        }), 
        __metadata('design:paramtypes', [oppdrag_service_1.OppdragService, temp_service_1.TempService, tolk_service_1.TolkService, router_1.Router])
    ], UtdelComponent);
>>>>>>> 9e3fe497a2938e9bbd7ab4262693cbc05f51dcf8
    return UtdelComponent;
}());
UtdelComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/admin/foresporsler/utdel.component.html",
        providers: [tolk_service_1.TolkService],
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService,
        temp_service_1.TempService,
        tolk_service_1.TolkService])
], UtdelComponent);
exports.UtdelComponent = UtdelComponent;
//# sourceMappingURL=utdel.component.js.map