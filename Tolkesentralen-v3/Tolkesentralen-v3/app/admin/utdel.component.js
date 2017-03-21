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
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var temp_service_1 = require("../_services/temp.service");
=======
var core_1 = require('@angular/core');
var oppdrag_service_1 = require('../_services/oppdrag.service');
var temp_service_1 = require('../_services/temp.service');
>>>>>>> 6a02ca237e57ae0ff40f538c86c764ca37c7aeda
var UtdelComponent = (function () {
    function UtdelComponent(oppdragService, tempService) {
        this.oppdragService = oppdragService;
        this.tempService = tempService;
        this.arrayTolk = [];
    }
    UtdelComponent.prototype.ngOnInit = function () {
        this.oppdrag = this.tempService.getObject();
        // get users from secure api end point
        //this.oppdragService.getListeTolk()
        //    .subscribe(listeTolk => {
        //        this.arrayTolk = listeTolk;
        //    });
        if (this.oppdrag == null) {
            console.log("oppdrag er null");
        }
        else {
            console.log('TEM -> ' + this.tempService.getObject());
            console.log(this.oppdrag.fraspraak + " -> " + this.oppdrag.tilspraak);
        }
    };
    UtdelComponent.prototype.setAllChecked = function () {
        this.allChecked = !this.allChecked;
        if (this.arrayTolk) {
            for (var _i = 0, _a = this.arrayTolk; _i < _a.length; _i++) {
                var object = _a[_i];
                object.valgt = this.allChecked;
            }
        }
    };
<<<<<<< HEAD
    return UtdelComponent;
}());
UtdelComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/admin/utdel.component.html"
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService,
        temp_service_1.TempService])
], UtdelComponent);
=======
    UtdelComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/admin/utdel.component.html"
        }), 
        __metadata('design:paramtypes', [oppdrag_service_1.OppdragService, temp_service_1.TempService])
    ], UtdelComponent);
    return UtdelComponent;
}());
>>>>>>> 6a02ca237e57ae0ff40f538c86c764ca37c7aeda
exports.UtdelComponent = UtdelComponent;
//# sourceMappingURL=utdel.component.js.map