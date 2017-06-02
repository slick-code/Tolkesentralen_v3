"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Promise Version
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var oversettelse_service_1 = require("../_services/oversettelse.service");
var KundeTolkeHistorikkComponent = (function () {
    function KundeTolkeHistorikkComponent(oppdragService, oversettelseService) {
        this.oppdragService = oppdragService;
        this.oversettelseService = oversettelseService;
    }
    KundeTolkeHistorikkComponent.prototype.ngOnInit = function () {
        this.ID = parseInt(localStorage.getItem('id'));
        // this.getOppdragTolk();
    };
    KundeTolkeHistorikkComponent.prototype.getOppdragTolk = function () {
        var _this = this;
        this.oppdragService.getOppdragTilKunde(this.ID).subscribe(function (retur) {
            _this.oppdrag = retur;
            console.log("Success -> Mine bestillinger-oppdrag  , test val:  " + _this.oppdrag);
        }, function (error) { return console.log("Error -> Mine bestillinger feilet! ->" + error); }, function () { return console.log("ferdig: Mine bestillinger"); });
    };
    return KundeTolkeHistorikkComponent;
}());
KundeTolkeHistorikkComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        templateUrl: './app/kunde/kunde-tolke-historikk.component.html',
        providers: [oppdrag_service_1.OppdragService, oversettelse_service_1.OversettelseService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService, oversettelse_service_1.OversettelseService])
], KundeTolkeHistorikkComponent);
exports.KundeTolkeHistorikkComponent = KundeTolkeHistorikkComponent;
