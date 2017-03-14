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
var models_1 = require("../_models/models");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var BestillOversettelseComponent = (function () {
    function BestillOversettelseComponent(service) {
        this.service = service;
    }
    BestillOversettelseComponent.prototype.ngOnInit = function () { this.getOversettelser(); };
    BestillOversettelseComponent.prototype.getOversettelser = function () {
        var _this = this;
        this.service.getOversettelser()
            .subscribe(function (db_liste) {
            _this.liste = db_liste;
        });
    };
    BestillOversettelseComponent.prototype.post = function (navn) {
        var _this = this;
        var ny = new models_1.Oversettelse();
        ny.fornavn = navn;
        var body = JSON.stringify(ny);
        this.service.postOversettelse(body).subscribe(function (retur) {
            _this.liste.push(ny);
            console.log("Success POST : " + ny.fornavn);
        }, function (error) { return console.log("Beklager, en feil har oppstått - " + error); }, function () { return console.log("ferdig post-api/bestilling"); });
    };
    return BestillOversettelseComponent;
}());
BestillOversettelseComponent = __decorate([
    core_1.Component({
        templateUrl: './app/home/bestill-oversettelse.component.html',
        providers: [oppdrag_service_1.OppdragService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService])
], BestillOversettelseComponent);
exports.BestillOversettelseComponent = BestillOversettelseComponent;
//# sourceMappingURL=bestill-oversettelse.component.js.map