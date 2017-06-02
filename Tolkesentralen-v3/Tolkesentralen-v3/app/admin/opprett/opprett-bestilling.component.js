"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../../_services/oppdrag.service");
var forms_1 = require("@angular/forms");
var OpprettBestillingComponent = (function () {
    function OpprettBestillingComponent(service, fb) {
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
    OpprettBestillingComponent.prototype.ngOnInit = function () {
        //this.getOppdrag;
    };
    return OpprettBestillingComponent;
}());
OpprettBestillingComponent = __decorate([
    core_1.Component({
        templateUrl: './app/admin/opprett/opprett-bestilling.component.html',
        providers: [oppdrag_service_1.OppdragService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
], OpprettBestillingComponent);
exports.OpprettBestillingComponent = OpprettBestillingComponent;
