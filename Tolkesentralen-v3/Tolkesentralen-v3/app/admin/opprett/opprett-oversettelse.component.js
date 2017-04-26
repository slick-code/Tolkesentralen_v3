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
var core_1 = require('@angular/core');
var oppdrag_service_1 = require('../../_services/oppdrag.service');
var forms_1 = require('@angular/forms');
var OpprettOversettelseComponent = (function () {
    function OpprettOversettelseComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.form = fb.group({
            typedokument: [],
            fraspraak: [],
            tilspraak: [],
            ferdiggjoresdato: [],
            kundenr: [],
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
    OpprettOversettelseComponent.prototype.ngOnInit = function () {
        //this.getOversettelser();
    };
    OpprettOversettelseComponent = __decorate([
        core_1.Component({
            templateUrl: './app/admin/opprett/opprett-oversettelse.component.html',
            providers: [oppdrag_service_1.OppdragService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
    ], OpprettOversettelseComponent);
    return OpprettOversettelseComponent;
}());
exports.OpprettOversettelseComponent = OpprettOversettelseComponent;
//# sourceMappingURL=opprett-oversettelse.component.js.map