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
// Promise Version
var core_1 = require('@angular/core');
var oppdrag_service_1 = require('../_services/oppdrag.service');
var oversettelse_service_1 = require('../_services/oversettelse.service');
var ListBestillingerComponent = (function () {
    function ListBestillingerComponent(oppdragService, oversettelseService) {
        this.oppdragService = oppdragService;
        this.oversettelseService = oversettelseService;
    }
    ListBestillingerComponent.prototype.ngOnInit = function () {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragTolk();
        this.getOppdragOversettelse();
    };
    ListBestillingerComponent.prototype.getOppdragTolk = function () {
        var _this = this;
        this.oppdragService.getOppdragTilKunde(this.ID).subscribe(function (retur) {
            _this.oppdrag = retur;
            console.log("Success -> Mine bestillinger-oppdrag  , test val:  " + _this.oppdrag);
        }, function (error) { return console.log("Error -> Mine bestillinger feilet! ->" + error); }, function () { return console.log("ferdig: Mine bestillinger"); });
    };
    ListBestillingerComponent.prototype.getOppdragOversettelse = function () {
        var _this = this;
        this.oversettelseService.getOversettelserTilKunde(this.ID).subscribe(function (retur) {
            _this.oversettelser = retur;
            console.log("Success -> Mine bestillinger-oversettelser, test val:  " + _this.oppdrag);
        }, function (error) { return console.log("Error -> Mine bestillinger feilet! ->" + error); }, function () { return console.log("ferdig: Mine bestillinger"); });
    };
    ListBestillingerComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            templateUrl: './app/kunde/list-bestillinger.component.html',
            providers: [oppdrag_service_1.OppdragService, oversettelse_service_1.OversettelseService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [oppdrag_service_1.OppdragService, oversettelse_service_1.OversettelseService])
    ], ListBestillingerComponent);
    return ListBestillingerComponent;
}());
exports.ListBestillingerComponent = ListBestillingerComponent;
//# sourceMappingURL=list-bestillinger.component.js.map