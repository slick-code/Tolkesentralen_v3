"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Promise Version
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var oversettelse_service_1 = require("../_services/oversettelse.service");
var KundeListAlleOversettelseBestillingerComponent = (function () {
    function KundeListAlleOversettelseBestillingerComponent(oppdragService, oversettelseService) {
        this.oppdragService = oppdragService;
        this.oversettelseService = oversettelseService;
    }
    KundeListAlleOversettelseBestillingerComponent.prototype.ngOnInit = function () {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragOversettelse();
    };
    KundeListAlleOversettelseBestillingerComponent.prototype.getOppdragOversettelse = function () {
        var _this = this;
        this.oversettelseService.getOversettelserTilKunde(this.ID).subscribe(function (retur) {
            _this.oversettelser = retur;
            console.log("Success -> Mine bestillinger-oversettelser, test val:  " + _this.oppdrag);
        }, function (error) { return console.log("Error -> Mine bestillinger feilet! ->" + error); }, function () { return console.log("ferdig: Mine bestillinger"); });
    };
    return KundeListAlleOversettelseBestillingerComponent;
}());
KundeListAlleOversettelseBestillingerComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        templateUrl: './app/kunde/kunde-list-alle-oversettelse-bestillinger.component.html',
        providers: [oppdrag_service_1.OppdragService, oversettelse_service_1.OversettelseService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService, oversettelse_service_1.OversettelseService])
], KundeListAlleOversettelseBestillingerComponent);
exports.KundeListAlleOversettelseBestillingerComponent = KundeListAlleOversettelseBestillingerComponent;
