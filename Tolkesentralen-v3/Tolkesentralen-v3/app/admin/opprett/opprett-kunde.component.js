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
var kunde_service_1 = require('../../_services/kunde.service');
var forms_1 = require('@angular/forms');
var OpprettKundeComponent = (function () {
    function OpprettKundeComponent(kundeService, fb) {
        this.kundeService = kundeService;
        this.fb = fb;
        this.form = fb.group({
            firma: [],
            fornavn: [],
            etternavn: [],
            telefon: [],
            telefax: [],
            epost: [],
            passord: [],
            fakturaadresse: [],
            postnr: [],
            poststed: []
        });
    }
    OpprettKundeComponent.prototype.ngOnInit = function () {
        this.showForm = true;
        //this.getKunder();
        this.errorMessage = "Ooops! Bestilling ble ikke sendt.";
    };
    OpprettKundeComponent.prototype.showLoadingScreen = function () {
        this.showForm = false;
        this.Success = null;
        this.loading = true;
    };
    OpprettKundeComponent.prototype.getKunder = function () {
        var _this = this;
        this.kundeService.getKunder()
            .subscribe(function (kunder) {
            _this.kunder = kunder;
        });
    };
    OpprettKundeComponent.prototype.tilbake = function () {
        this.showForm = true;
    };
    OpprettKundeComponent.prototype.postKunde = function () {
        var _this = this;
        this.loading = true;
        this.showForm = false;
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
        var body = JSON.stringify(ny);
        this.kundeService.postKunde(body).subscribe(function (retur) {
            _this.Success = true;
            _this.loading = false;
            _this.kunder.push(ny);
            console.log("Success POST : " + ny.firma);
        }, function (error) { console.log("Beklager, en feil har oppstått - " + error); _this.loading = false; }, function () { return console.log("ferdig post-api/bestilling"); });
    };
    OpprettKundeComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            templateUrl: './app/admin/opprett/opprett-kunde.component.html',
            providers: [kunde_service_1.KundeService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [kunde_service_1.KundeService, forms_1.FormBuilder])
    ], OpprettKundeComponent);
    return OpprettKundeComponent;
}());
exports.OpprettKundeComponent = OpprettKundeComponent;
//# sourceMappingURL=opprett-kunde.component.js.map