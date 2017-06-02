"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Promise Version
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var TolkOppdragHistorikkComponent = (function () {
    function TolkOppdragHistorikkComponent(oppdragService) {
        this.oppdragService = oppdragService;
    }
    TolkOppdragHistorikkComponent.prototype.ngOnInit = function () {
        this.ID = parseInt(localStorage.getItem('id'));
        // this.getOppdragTolk();
    };
    return TolkOppdragHistorikkComponent;
}());
TolkOppdragHistorikkComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        templateUrl: './app/tolk/tolk-oppdrag-historikk.component.html',
        providers: [oppdrag_service_1.OppdragService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService])
], TolkOppdragHistorikkComponent);
exports.TolkOppdragHistorikkComponent = TolkOppdragHistorikkComponent;
