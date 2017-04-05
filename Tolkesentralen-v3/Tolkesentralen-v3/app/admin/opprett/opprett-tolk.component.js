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
var models_1 = require('../../_models/models');
var oppdrag_service_1 = require('../../_services/oppdrag.service');
var forms_1 = require('@angular/forms');
var OpprettTolkComponent = (function () {
    function OpprettTolkComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.form = fb.group({
            tolkId: [],
            fornavn: [],
            etternavn: [],
            spraak: [],
            nivaa: [],
            ansattelsesdato: [],
            epost: [],
            passord: [],
            bekreftpassord: [],
            telefon: [],
            mobil: [],
            adresse: [],
            adresse2: [],
            postnr: [],
            poststed: []
        });
    }
    OpprettTolkComponent.prototype.tilbake = function () {
        this.showForm = true;
    };
    OpprettTolkComponent.prototype.ngOnInit = function () { };
    OpprettTolkComponent.prototype.showLoadingScreen = function () {
        this.showForm = false;
        this.Success = null;
        this.loading = true;
    };
    OpprettTolkComponent.prototype.postOppdrag = function () {
        var ny = new models_1.Person();
    };
    OpprettTolkComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            templateUrl: './app/admin/opprett/opprett-tolk.component.html',
            providers: [oppdrag_service_1.OppdragService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
    ], OpprettTolkComponent);
    return OpprettTolkComponent;
}());
exports.OpprettTolkComponent = OpprettTolkComponent;
//# sourceMappingURL=opprett-tolk.component.js.map