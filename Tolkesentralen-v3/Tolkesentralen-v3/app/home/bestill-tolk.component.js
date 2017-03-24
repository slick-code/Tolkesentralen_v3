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
var core_1 = require('@angular/core');
var oppdrag_service_1 = require('../_services/oppdrag.service');
var forms_1 = require('@angular/forms');
=======
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../_models/models");
var oppdrag_service_1 = require("../_services/oppdrag.service");
>>>>>>> 59154ed1df73281bfd747f8bd238cd8d0a801e44
var BestillTolkComponent = (function () {
    function BestillTolkComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.form = fb.group({
            typetolk: [],
            fraspraak: [],
            tilspraak: [],
            oppdragsdato: [],
            frakl: [],
            tilkl: [],
            oppmotested: [],
            firma: [],
            fornavn: [],
            etternavn: [],
            telefon: [],
            telefax: [],
            epost: [],
            fakturaadresse: [],
            postnr: [],
            poststed: [],
            andreopplysninger: [],
        });
    }
    BestillTolkComponent.prototype.ngOnInit = function () {
        //this.getOppdrag;
    };
<<<<<<< HEAD
    BestillTolkComponent = __decorate([
        core_1.Component({
            templateUrl: './app/home/bestill-tolk.component.html',
            providers: [oppdrag_service_1.OppdragService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
    ], BestillTolkComponent);
=======
>>>>>>> 59154ed1df73281bfd747f8bd238cd8d0a801e44
    return BestillTolkComponent;
}());
BestillTolkComponent = __decorate([
    core_1.Component({
        templateUrl: './app/home/bestill-tolk.component.html',
        providers: [oppdrag_service_1.OppdragService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService])
], BestillTolkComponent);
exports.BestillTolkComponent = BestillTolkComponent;
//# sourceMappingURL=bestill-tolk.component.js.map