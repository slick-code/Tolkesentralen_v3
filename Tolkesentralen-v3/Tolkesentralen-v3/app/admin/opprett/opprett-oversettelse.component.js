"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../../_services/oppdrag.service");
var forms_1 = require("@angular/forms");
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
    return OpprettOversettelseComponent;
}());
OpprettOversettelseComponent = __decorate([
    core_1.Component({
        templateUrl: './app/admin/opprett/opprett-oversettelse.component.html',
        providers: [oppdrag_service_1.OppdragService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
], OpprettOversettelseComponent);
exports.OpprettOversettelseComponent = OpprettOversettelseComponent;
