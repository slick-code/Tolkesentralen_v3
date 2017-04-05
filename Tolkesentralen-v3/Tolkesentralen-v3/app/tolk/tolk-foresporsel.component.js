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
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var TolkForesporselComponent = (function () {
    function TolkForesporselComponent(oppdragService) {
        this.oppdragService = oppdragService;
    }
    TolkForesporselComponent.prototype.ngOnInit = function () {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragTolk();
    };
    TolkForesporselComponent.prototype.getOppdragTolk = function () {
        var _this = this;
        this.oppdragService.getForesposelTilTolk(this.ID).subscribe(function (retur) {
            _this.oppdrag = retur;
            console.log("Success -> Mine-oppdrag  , test val:  " + _this.oppdrag);
        }, function (error) { return console.log("Error -> Mine oppdrag feilet! ->" + error); }, function () { return console.log("ferdig: Mine oppdrag"); });
    };
    return TolkForesporselComponent;
}());
TolkForesporselComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        templateUrl: './app/tolk/tolk-foresporsel.component.html',
        providers: [oppdrag_service_1.OppdragService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService])
], TolkForesporselComponent);
exports.TolkForesporselComponent = TolkForesporselComponent;
//# sourceMappingURL=tolk-foresporsel.component.js.map