"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../../_services/oppdrag.service");
var temp_service_1 = require("../../_services/temp.service");
var tolk_service_1 = require("../../_services/tolk.service");
var router_1 = require("@angular/router");
var spraak_1 = require("../../_models/spraak");
var UtdelComponent = (function () {
    function UtdelComponent(oppdragService, tempService, tolkService, router) {
        this.oppdragService = oppdragService;
        this.tempService = tempService;
        this.tolkService = tolkService;
        this.router = router;
        this.path = 'admin/oppdrag';
        this.oppdrag = this.tempService.getObject();
        this.hentTolkmedGittSpraak();
    }
    UtdelComponent.prototype.ngOnInit = function () {
        if (this.oppdrag == null) {
            this.router.navigate(['./admin/oppdrag']);
            return;
        }
    };
    UtdelComponent.prototype.checkTilgjengelig = function (i) {
        return this.arrayTolk[i].tilgjengelig;
    };
    UtdelComponent.prototype.getSpraak = function (i) {
        return new spraak_1.Spraak().liste[i - 1].spraak;
    };
    UtdelComponent.prototype.setAllChecked = function () {
        this.allChecked = !this.allChecked;
        if (this.arrayTolk) {
            for (var _i = 0, _a = this.arrayTolk; _i < _a.length; _i++) {
                var object = _a[_i];
                if (object.tilgjengelig) {
                    object.valgt = this.allChecked;
                }
            }
        }
    };
    UtdelComponent.prototype.hentTolkmedGittSpraak = function () {
        var _this = this;
        this.showForm = false;
        this.response = "loading";
        //var body: string = JSON.stringify({ fraspraak: this.oppdrag.fraspraak, tilspraak: this.oppdrag.tilspraak });
        this.tolkService.getTolkMedSpraak(this.oppdrag.oppdragID).subscribe(function (retur) {
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
    return UtdelComponent;
}());
UtdelComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/admin/foresporsler/utdel.component.html",
        providers: [tolk_service_1.TolkService],
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService,
        temp_service_1.TempService,
        tolk_service_1.TolkService,
        router_1.Router])
], UtdelComponent);
exports.UtdelComponent = UtdelComponent;
