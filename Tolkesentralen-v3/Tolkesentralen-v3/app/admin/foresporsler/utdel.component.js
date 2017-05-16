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
var oppdrag_service_1 = require("../../_services/oppdrag.service");
var temp_service_1 = require("../../_services/temp.service");
var tolk_service_1 = require("../../_services/tolk.service");
var UtdelComponent = (function () {
    function UtdelComponent(oppdragService, tempService, tolkService) {
        this.oppdragService = oppdragService;
        this.tempService = tempService;
        this.tolkService = tolkService;
        this.Error = "Ooops, beklager men en feil oppsto og handlingen ble avbrutt!";
        this.underText = "Foresp�rselen er sendt! G� til Bestillinger for � se detaljer.";
        this.path = 'admin/oppdrag';
    }
    UtdelComponent.prototype.ngOnInit = function () {
        this.oppdrag = this.tempService.getObject();
        this.hentTolkmedGittSpraak();
        if (this.oppdrag == null) {
            console.log("oppdrag er null");
        }
        else {
            console.log('TEM -> ' + this.tempService.getObject());
            console.log(this.oppdrag.fraspraak + " -> " + this.oppdrag.tilspraak);
        }
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
        this.showForm = false;
        this.response = "loading";
        var body = JSON.stringify({ fraspraak: 1, tilspraak: 2 });
        this.tolkService.getTolkMedSpraak(body).subscribe(function (retur) {
            _this.showForm = true;
            _this.response = "";
            _this.arrayTolk = retur;
        }, function (error) {
            _this.response = "error";
            _this.responseText = _this.Error;
        }, function () { });
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
            _this.responseText = "Success!";
        }, function (error) {
            _this.response = "error";
            _this.responseText = _this.Error;
        }, function () { });
    };
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