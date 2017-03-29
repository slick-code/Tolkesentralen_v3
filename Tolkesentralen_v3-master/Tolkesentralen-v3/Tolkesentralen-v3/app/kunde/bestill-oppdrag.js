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
var kunde_service_1 = require('../_services/kunde.service');
var forms_1 = require('@angular/forms');
var RegistrerComponent = (function () {
    function RegistrerComponent(kundeService, fb) {
        this.kundeService = kundeService;
        this.fb = fb;
        this.form = fb.group({
            typetolk: [],
            fraspraak: [],
            tilspraak: [],
            oppdragsdato: [],
            frakl: [],
            tilkl: [],
            oppmotested: [],
            andreopplysninger: []
        });
    }
    RegistrerComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            templateUrl: './app/home/registrer.component.html',
            providers: [kunde_service_1.KundeService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [kunde_service_1.KundeService, forms_1.FormBuilder])
    ], RegistrerComponent);
    return RegistrerComponent;
}());
exports.RegistrerComponent = RegistrerComponent;
//# sourceMappingURL=bestill-oppdrag.js.map