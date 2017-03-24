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
var models_1 = require('../_models/models');
var oppdrag_service_1 = require('../_services/oppdrag.service');
var forms_1 = require('@angular/forms');
var BestillOversettelseComponent = (function () {
    function BestillOversettelseComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.form = fb.group({
            typedokument: [],
            fraspraak: [],
            tilspraak: [],
            ferdiggjoresdato: [],
            andreopplysninger: []
        });
    }
    BestillOversettelseComponent.prototype.ngOnInit = function () {
        //this.brukerID = parseInt(localStorage.getItem('id'));
        //console.log("ID ---->  " + this.brukerID); // TODO: fjern når ferdig testet
    };
    BestillOversettelseComponent.prototype.postOppdrag = function () {
        var ny = new models_1.Oversettelse();
        //ny.kundeID = parseInt(localStorage.getItem('id'));
        //ny.typetolk = this.form.value.typetolk;
        //ny.fraspraak = this.form.value.fraspraak;
        //ny.tilspraak = this.form.value.tilspraak;
        //ny.oppdragsdato = this.form.value.oppdragsdato;
        //ny.frakl = this.form.value.frakl;
        //ny.tilkl = this.form.value.tilkl;
        //ny.sted = this.form.value.oppmptested;
        //ny.andreopplysninger = this.form.value.andreopplysninger;
        ny.dato = Date.now();
        ny.kundeID = 19;
        ny.typedokument = "Juridisk";
        ny.fraspraak = "Norsk";
        ny.tilspraak = "Pashto";
        ny.ferdiggjoresdato = "12-12-12";
        ny.andreopplysninger = "Jamaca MAN";
        var body = JSON.stringify(ny);
        //this.service.postOppdrag(body).subscribe(
        //    retur => {
        //        this.oppdrag.push(ny);
        //        console.log("Success POST oppdrag : " + ny.typedokument);
        //    },
        //    error => console.log("Beklager, en feil har oppstått - " + error),
        //    () => console.log("ferdig post-api/bestilling")
        //);
    };
    BestillOversettelseComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            templateUrl: './app/kunde/bestill-oversettelse.component.html',
            providers: [oppdrag_service_1.OppdragService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
    ], BestillOversettelseComponent);
    return BestillOversettelseComponent;
}());
exports.BestillOversettelseComponent = BestillOversettelseComponent;
//# sourceMappingURL=bestill-oversettelse.component.js.map