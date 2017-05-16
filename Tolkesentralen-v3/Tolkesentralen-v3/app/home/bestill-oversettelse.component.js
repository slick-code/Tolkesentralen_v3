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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../_models/models");
var spraak_1 = require("../_models/spraak");
var oversettelse_service_1 = require("../_services/oversettelse.service");
var forms_1 = require("@angular/forms");
var BestillOversettelseComponent = (function () {
    function BestillOversettelseComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.form = fb.group({
            firma: ["", forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ0-9\\-. ]{2,30}")],
            fornavn: ["", forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")],
            etternavn: ["", forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")],
            telefon: ["", forms_1.Validators.pattern("[0-9]{8,12}")],
            telefax: ["", forms_1.Validators.pattern("[0-9]{8,12}")],
            epost: ["", forms_1.Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")],
            fakturaadresse: ["", forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ0-9\\-. ]{2,30}")],
            postnr: ["", forms_1.Validators.pattern("[0-9]{4}")],
            poststed: ["", forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")],
            andreopplysninger: [],
        });
    }
    BestillOversettelseComponent.prototype.ngOnInit = function () {
        this.typedokument = "Vitnemål";
        this.showForm = true;
        this.validerSpraak = true;
        this.spraak = new spraak_1.Spraak().liste;
        this.minDate = this.getDateString(new Date());
        this.startDate = this.minDate;
        this.fraspraak = 1;
        this.tilspraak = 2;
        console.log("ASDADASD " + this.startDate);
        this.form.patchValue({
            frakl: "08:00",
            tilkl: "10:00"
        });
    };
    BestillOversettelseComponent.prototype.onchange = function (type) {
        console.log("TYPE :" + type);
        this.typedokument = type;
    };
    BestillOversettelseComponent.prototype.getDateString = function (date) {
        //setter +3 som vanlig deadline
        return date = date.getFullYear() + '-'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
            + ('0' + (date.getDate() + 3)).slice(-2);
    };
    BestillOversettelseComponent.prototype.setFraSpraak = function (id) {
        this.fraspraak = id;
        this.ValidateSpraak();
    };
    BestillOversettelseComponent.prototype.setTilSpraak = function (id) {
        this.tilspraak = id;
        this.ValidateSpraak();
    };
    BestillOversettelseComponent.prototype.ValidateSpraak = function () {
        if (this.fraspraak == this.tilspraak)
            this.validerSpraak = false;
        else
            this.validerSpraak = true;
    };
    BestillOversettelseComponent.prototype.form_MarkAsTouched = function () {
        var _this = this;
        Object.keys(this.form.controls).forEach(function (key) {
            _this.form.get(key).markAsTouched(true);
        });
    };
    BestillOversettelseComponent.prototype.tilbake = function () {
        this.showForm = true;
    };
    BestillOversettelseComponent.prototype.postKunde = function (navn) {
        var _this = this;
        this.ugyldigFelter = false;
        if (!this.validerSpraak || !this.form.valid) {
            this.ugyldigFelter = true;
            if (!this.form.valid) {
                this.form_MarkAsTouched();
            }
            return;
        }
        this.showForm = false;
        this.response = "loading";
        console.log("FR " + this.fraspraak);
        console.log("Ti " + this.tilspraak);
        console.log("o " + this.startDate);
        console.log("k " + this.form.value.frakl);
        console.log("t " + this.form.value.tilkl);
        var ny = new models_1.OversettelseOgKunde();
        ny.typedokument = this.typedokument;
        ny.fraspraak = this.fraspraak;
        ny.tilspraak = this.tilspraak;
        ny.firma = this.form.value.firma;
        ny.fornavn = this.form.value.fornavn;
        ny.etternavn = this.form.value.etternavn;
        ny.telefon = this.form.value.telefon;
        ny.telefax = this.form.value.telefax;
        ny.epost = this.form.value.epost;
        ny.fakturaadresse = this.form.value.fakturaadresse;
        ny.postnr = this.form.value.postnr;
        ny.poststed = this.form.value.poststed;
        ny.andreopplysninger = this.form.value.andreopplysninger;
        var body = JSON.stringify(ny);
        this.service.postOversettelseOgKunde(body).subscribe(function (retur) {
            _this.response = "success";
            _this.responseText = "Takk for din bestilling!";
            _this.underText = "";
        }, function (error) {
            _this.response = "error";
            _this.responseText = "Ingen kontakt med server";
            _this.underText = "Tilkoblet internett?";
        }, function () { });
    };
    return BestillOversettelseComponent;
}());
BestillOversettelseComponent = __decorate([
    core_1.Component({
        templateUrl: './app/home/bestill-oversettelse.component.html',
        providers: [oversettelse_service_1.OversettelseService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oversettelse_service_1.OversettelseService, forms_1.FormBuilder])
], BestillOversettelseComponent);
exports.BestillOversettelseComponent = BestillOversettelseComponent;
//# sourceMappingURL=bestill-oversettelse.component.js.map