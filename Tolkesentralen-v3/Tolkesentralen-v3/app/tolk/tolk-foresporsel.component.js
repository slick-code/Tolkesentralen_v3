"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Promise Version
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var tolk_service_1 = require("../_services/tolk.service");
var spraak_1 = require("../_models/spraak");
var TolkForesporselComponent = (function () {
    function TolkForesporselComponent(oppdragService, tolkService) {
        this.oppdragService = oppdragService;
        this.tolkService = tolkService;
    }
    TolkForesporselComponent.prototype.ngOnInit = function () {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragTolk();
        this.Spraak = new spraak_1.Spraak().liste;
    };
    TolkForesporselComponent.prototype.PoststedStreng = function (nr, adr) {
        if (nr == 0)
            return "";
        return " - " + nr + " - " + adr;
    };
    TolkForesporselComponent.prototype.fix = function (jsonDate) {
        // -> //Date(1494501300000)/ -> returnerer -> new Date(1494501300000)
        return new Date(parseInt(jsonDate.substr(6)));
    };
    TolkForesporselComponent.prototype.getOppdragTolk = function () {
        var _this = this;
        this.oppdragService.getForesposelTilTolk(this.ID).subscribe(function (retur) {
            _this.oppdrag = retur;
            console.log("Success -> Mine-oppdrag  , test val:  " + _this.oppdrag);
        }, function (error) { return console.log("Error -> Mine oppdrag feilet! ->" + error); }, function () { return console.log("ferdig: Mine oppdrag"); });
    };
    TolkForesporselComponent.prototype.checkIfArrayIsEmthy = function (array) {
        if (array == null)
            return false;
        if (array.length == 0)
            return false;
        return true;
    };
    TolkForesporselComponent.prototype.postSvarOpprag = function (index, oppdragId, svar) {
        var _this = this;
        var body = JSON.stringify({ tolkId: this.ID, oppdragId: oppdragId, svar: svar });
        this.tolkService.postSvar(body).subscribe(function (retur) {
            _this.oppdrag.splice(index, 1);
        }, function (error) { console.log("EROOR: postSvarOpprag - " + error); }, function () { return console.log("ferdig post-api/bestilling"); });
    };
    return TolkForesporselComponent;
}());
TolkForesporselComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        templateUrl: './app/tolk/tolk-foresporsel.component.html',
        providers: [oppdrag_service_1.OppdragService, tolk_service_1.TolkService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService, tolk_service_1.TolkService])
], TolkForesporselComponent);
exports.TolkForesporselComponent = TolkForesporselComponent;
