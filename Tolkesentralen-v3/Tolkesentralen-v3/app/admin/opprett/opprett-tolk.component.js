"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Promise Version
var core_1 = require("@angular/core");
var models_1 = require("../../_models/models");
var oppdrag_service_1 = require("../../_services/oppdrag.service");
var forms_1 = require("@angular/forms");
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
    return OpprettTolkComponent;
}());
OpprettTolkComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        templateUrl: './app/admin/opprett/opprett-tolk.component.html',
        providers: [oppdrag_service_1.OppdragService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
], OpprettTolkComponent);
exports.OpprettTolkComponent = OpprettTolkComponent;
