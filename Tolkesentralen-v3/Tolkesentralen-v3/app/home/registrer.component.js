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
var kunde_service_1 = require('../_services/kunde.service');
var forms_1 = require('@angular/forms');
var RegistrerComponent = (function () {
    function RegistrerComponent(kundeService, fb) {
        this.kundeService = kundeService;
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
            passord: [],
            bekreftpassord: [],
        });
    }
    RegistrerComponent.prototype.ngOnInit = function () {
        this.showForm = true;
        //this.getKunder();
        this.errorMessage = "Ooops! Bestilling ble ikke sendt.";
    };
    RegistrerComponent.prototype.getKunder = function () {
        var _this = this;
        this.kundeService.getKunder()
            .subscribe(function (kunder) {
            _this.kunder = kunder;
        });
    };
    RegistrerComponent.prototype.tilbake = function () {
        this.showForm = true;
    };
    RegistrerComponent.prototype.form_MarkAsTouched = function () {
        var _this = this;
        Object.keys(this.form.controls).forEach(function (key) {
            _this.form.get(key).markAsTouched(true);
        });
    };
    RegistrerComponent.prototype.PassordMatch = function () {
        if (this.form.value.passord == this.form.value.bekreftpassord) {
            this.passordMatch = true;
            return true;
        }
        else {
            this.passordMatch = false;
            return false;
        }
    };
    RegistrerComponent.prototype.responseHandler = function (data) {
        if (this.epostEksiterer) {
            this.epostEksiterer = false;
        }
    };
    RegistrerComponent.prototype.Valider = function () {
        var _this = this;
        this.ugyldigFelter = false;
        if (!this.form.valid || !this.passordMatch) {
            this.form_MarkAsTouched();
            this.ugyldigFelter = true;
            return;
        }
        this.showForm = false;
        this.response = "loading";
        var body = JSON.stringify(this.form.value.epost);
        this.kundeService.SjekkOmEpostEksisterer(body).subscribe(function (res) {
            if (res.status == 202) {
                _this.postKunde();
                console.log("202: " + res.status);
            }
            else {
                console.log("status ikke 202" + res.status);
                _this.avbryt();
            }
            return true;
        }, function (error) {
            console.log("error" + error);
            _this.avbryt();
        }, function () { });
    };
    RegistrerComponent.prototype.avbryt = function () {
        this.response = "";
        this.showForm = true;
        this.epostEksiterer = true;
        return;
    };
    RegistrerComponent.prototype.postKunde = function () {
        var _this = this;
        var ny = new models_1.Kunde();
        ny.firma = this.form.value.firma;
        ny.fornavn = this.form.value.fornavn;
        ny.etternavn = this.form.value.etternavn;
        ny.telefon = this.form.value.telefon;
        ny.telefax = this.form.value.telefax;
        ny.epost = this.form.value.epost;
        ny.passord = this.form.value.passord;
        ny.fakturaadresse = this.form.value.fakturaadresse;
        ny.postnr = this.form.value.postnr;
        ny.poststed = this.form.value.poststed;
        ny.email = this.form.value.email;
        ny.passord = this.form.value.passord;
        var body = JSON.stringify(ny);
        this.kundeService.postKunde(body).subscribe(function (retur) {
            _this.response = "success";
            _this.responseText = "Din registrering er sendt";
            _this.underText = "Takk for ditt medlemskap";
        }, function (error) {
            _this.response = "error";
            _this.responseText = "Ingen kontakt med server";
            _this.underText = "Tilkoblet internett?";
        }, function () { });
    };
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
//# sourceMappingURL=registrer.component.js.map