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
// Promise Version
<<<<<<< HEAD
var core_1 = require('@angular/core');
var oppdrag_service_1 = require('../_services/oppdrag.service');
var oversettelse_service_1 = require('../_services/oversettelse.service');
=======
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../_services/oppdrag.service");
>>>>>>> 7b24c1909783e8ff7258e3e795d8140d715f4513
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
<<<<<<< HEAD
        this.oppdragService.getOppdragTilKunde(this.ID).subscribe(function (retur) {
            _this.oppdrag = retur;
            console.log("Success -> Mine bestillinger-oppdrag  , test val:  " + _this.oppdrag);
        }, function (error) { return console.log("Error -> Mine bestillinger feilet! ->" + error); }, function () { return console.log("ferdig: Mine bestillinger"); });
=======
        this.service.getOppdragTilKunde(this.ID).subscribe(function (retur) {
            console.log("RETUR  " + retur);
            _this.oppdrag = retur;
            console.log("RETUR  " + _this.oppdrag);
            console.log("Success GET oppdrag : ");
        }, function (error) { return console.log("Beklager, en feil har oppstått - " + error); }, function () { return console.log("ferdig Get-api/bestilling"); });
>>>>>>> 7b24c1909783e8ff7258e3e795d8140d715f4513
    };
    ListBestillingerComponent.prototype.getOppdragOversettelse = function () {
        var _this = this;
        this.oversettelseService.getOversettelserTilKunde(this.ID).subscribe(function (retur) {
            _this.oversettelser = retur;
            console.log("Success -> Mine bestillinger-oversettelser, test val:  " + _this.oppdrag);
        }, function (error) { return console.log("Error -> Mine bestillinger feilet! ->" + error); }, function () { return console.log("ferdig: Mine bestillinger"); });
    };
<<<<<<< HEAD
    ListBestillingerComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            templateUrl: './app/kunde/list-bestillinger.component.html',
            providers: [oppdrag_service_1.OppdragService, oversettelse_service_1.OversettelseService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [oppdrag_service_1.OppdragService, oversettelse_service_1.OversettelseService])
    ], ListBestillingerComponent);
=======
>>>>>>> 7b24c1909783e8ff7258e3e795d8140d715f4513
    return ListBestillingerComponent;
}());
ListBestillingerComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        templateUrl: './app/kunde/list-bestillinger.component.html',
        providers: [oppdrag_service_1.OppdragService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService])
], ListBestillingerComponent);
exports.ListBestillingerComponent = ListBestillingerComponent;
//# sourceMappingURL=list-bestillinger.component.js.map