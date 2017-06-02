"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Promise Version
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var router_1 = require("@angular/router");
var spraak_1 = require("../_models/spraak");
var TolkMineOppdragComponent = (function () {
    function TolkMineOppdragComponent(oppdragService, router) {
        this.oppdragService = oppdragService;
        this.router = router;
    }
    TolkMineOppdragComponent.prototype.ngOnInit = function () {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragTolk();
        this.Spraak = new spraak_1.Spraak().liste;
        //  this.getOppdragTolk();
    };
    TolkMineOppdragComponent.prototype.VisInfo = function (index) {
        if (this.index == index && this.infoErTrykket) {
            return true;
        }
        return false;
    };
    TolkMineOppdragComponent.prototype.btnInfoClick = function (index) {
        if (this.index == index) {
            this.infoErTrykket = false;
            this.index = -1;
        }
        else {
            this.index = index;
            this.infoErTrykket = true;
        }
    };
    TolkMineOppdragComponent.prototype.checkIfArrayIsEmthy = function (array) {
        if (array == null)
            return false;
        if (array.length == 0)
            return false;
        return true;
    };
    TolkMineOppdragComponent.prototype.fix = function (jsonDate) {
        // -> //Date(1494501300000)/ -> returnerer -> new Date(1494501300000)
        return new Date(parseInt(jsonDate.substr(6)));
    };
    TolkMineOppdragComponent.prototype.getOppdragTolk = function () {
        var _this = this;
        this.oppdragService.getBestillingerTilTolk(this.ID).subscribe(function (retur) {
            _this.oppdragArray = retur;
        }, function (error) { return console.log("Error -> Mine oppdrag feilet! ->" + error); });
    };
    return TolkMineOppdragComponent;
}());
TolkMineOppdragComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        templateUrl: './app/tolk/tolk-mine-oppdrag.component.html',
        providers: [oppdrag_service_1.OppdragService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService, router_1.Router])
], TolkMineOppdragComponent);
exports.TolkMineOppdragComponent = TolkMineOppdragComponent;
