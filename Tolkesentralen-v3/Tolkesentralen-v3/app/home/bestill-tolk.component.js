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
var spraak_1 = require('../_models/spraak');
var oppdrag_service_1 = require('../_services/oppdrag.service');
var forms_1 = require('@angular/forms');
var BestillTolkComponent = (function () {
    function BestillTolkComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.form = fb.group({
            fraspraak: [],
            oppmotested: [],
            firma: [],
            oppmoteadresse: [],
            oppmotepostnr: [],
            oppmotepoststed: [],
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
        this.spraak = new spraak_1.Spraak().liste;
        this.startDate = new Date();
        this.adresseFelt = true;
        this.fraspraak = 2;
        //this.fraspraak = this.spraak[1];
        //console.log("XX " + this.fraspraak.id);
        //console.log("---> " + this.startDate | date:'dd-MM-yyyy');
        //this.getOppdrag;
    };
    BestillTolkComponent.prototype.onchange = function (nr) {
        if (nr == 1) {
            this.adresseFelt = true;
            ;
        }
        else {
            this.adresseFelt = false;
        }
    };
    BestillTolkComponent.prototype.setFraSpraak = function (id) {
        this.fraspraak = id;
        console.log("MM " + id);
    };
    BestillTolkComponent.prototype.postKunde = function (navn) {
        console.log("ÆÆÆ : " + this.fraspraak);
        return;
        //var ny = new OppdragOgKunde();
        //ny.typetolk = this.form.value.typetolk;
        //ny.fraspraak = this.form.value.fraspraak;
        //ny.tilspraak = this.form.value.tilspraak;
        //ny.oppdragsdato = this.form.value.oppdragsdato;
        //ny.frakl = this.form.value.fraspraak;
        //ny.tilkl = this.form.value.tilspraak;
        //ny.oppmoteadresse = this.form.value.oppmoteadresse;
        //ny.oppmotepostnr = this.form.value.oppmotepostnr;
        //ny.oppmotepoststed = this.form.value.oppmotepoststed;
        //ny.firma = this.form.value.firma;
        //ny.fornavn = this.form.value.fornavn;
        //ny.etternavn = this.form.value.etternavn;
        //ny.telefon = this.form.value.telefon;
        //ny.telefax = this.form.value.telefax;
        //ny.epost = this.form.value.epost;
        //ny.fakturaadresse = this.form.value.fakturaadresse;
        //ny.postnr = this.form.value.postnr;
        //ny.poststed = this.form.value.poststed;
        //ny.andreopplysninger = this.form.value.andreopplysninger;
        //var body: string = JSON.stringify(ny);
        //this.service.postOppdragOgKunde(body).subscribe(
        //    retur => {
        //        console.log("Success POST : " + ny.typetolk);
        //    },
        //    error => console.log("Beklager, en feil har oppstått - " + error),
        //    () => console.log("ferdig post-api/bestilling")
        //);
    };
    BestillTolkComponent = __decorate([
        core_1.Component({
            templateUrl: './app/home/bestill-tolk.component.html',
            providers: [oppdrag_service_1.OppdragService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
    ], BestillTolkComponent);
    return BestillTolkComponent;
}());
exports.BestillTolkComponent = BestillTolkComponent;
//# sourceMappingURL=bestill-tolk.component.js.map