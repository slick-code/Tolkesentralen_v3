"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Promise Version
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var oversettelse_service_1 = require("../_services/oversettelse.service");
var spraak_1 = require("../_models/spraak");
var KundeListAlleTolkeBestillingerComponent = (function () {
    function KundeListAlleTolkeBestillingerComponent(oppdragService, oversettelseService) {
        this.oppdragService = oppdragService;
        this.oversettelseService = oversettelseService;
    }
    KundeListAlleTolkeBestillingerComponent.prototype.ngOnInit = function () {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragTolk();
        this.Spraak = new spraak_1.Spraak().liste;
    };
    KundeListAlleTolkeBestillingerComponent.prototype.PoststedStreng = function (nr, adr) {
        if (nr == 0)
            return "";
        return " - " + nr + " - " + adr;
    };
    KundeListAlleTolkeBestillingerComponent.prototype.fix = function (jsonDate) {
        // -> //Date(1494501300000)/ -> returnerer -> new Date(1494501300000)
        return new Date(parseInt(jsonDate.substr(6)));
    };
    KundeListAlleTolkeBestillingerComponent.prototype.getOppdragTolk = function () {
        var _this = this;
        this.oppdragService.getOppdragTilKunde(this.ID).subscribe(function (retur) {
            _this.oppdrag = retur;
            console.log("Success -> Mine bestillinger-oppdrag  , test val:  " + _this.oppdrag);
        }, function (error) { return console.log("Error -> Mine bestillinger feilet! ->" + error); }, function () { return console.log("ferdig: Mine bestillinger"); });
    };
    return KundeListAlleTolkeBestillingerComponent;
}());
KundeListAlleTolkeBestillingerComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        templateUrl: './app/kunde/kunde-list-alle-tolke-bestillinger.component.html',
        providers: [oppdrag_service_1.OppdragService, oversettelse_service_1.OversettelseService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService, oversettelse_service_1.OversettelseService])
], KundeListAlleTolkeBestillingerComponent);
exports.KundeListAlleTolkeBestillingerComponent = KundeListAlleTolkeBestillingerComponent;
