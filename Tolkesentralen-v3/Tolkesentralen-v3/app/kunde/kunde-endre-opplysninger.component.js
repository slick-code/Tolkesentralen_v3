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
var KundeEndreOpplysningerComponent = (function () {
    function KundeEndreOpplysningerComponent(kundeService, fb) {
        this.kundeService = kundeService;
        this.fb = fb;
        this.form = fb.group({
            firma: [],
            fornavn: [],
            etternavn: [],
            telefon: [],
            telefax: [],
            epost: [],
            fakturaadresse: [],
            postnr: [],
            poststed: []
        });
    }
    KundeEndreOpplysningerComponent.prototype.ngOnInit = function () { this.getKunder(); };
    KundeEndreOpplysningerComponent.prototype.getKunder = function () {
        var _this = this;
        this.kundeService.getKunder()
            .subscribe(function (kunder) {
            _this.kunder = kunder;
        });
    };
    KundeEndreOpplysningerComponent.prototype.postKunde = function () {
        var _this = this;
        var ny = new models_1.Kunde();
        ny.firma = this.form.value.firma;
        ny.fornavn = this.form.value.fornavn;
        ny.etternavn = this.form.value.etternavn;
        ny.telefon = this.form.value.telefon;
        ny.telefax = this.form.value.telefax;
        ny.epost = this.form.value.epost;
        ny.passord = this.form.value.passord;
        //ny.bekreftpassord = this.form.value.bekreftpassord;
        ny.fakturaadresse = this.form.value.fakturaadresse;
        ny.postnr = this.form.value.postnr;
        ny.poststed = this.form.value.poststed;
        var body = JSON.stringify(ny);
        this.kundeService.postKunde(body).subscribe(function (retur) {
            _this.kunder.push(ny);
            console.log("Success POST : " + ny.firma);
        }, function (error) { return console.log("Beklager, en feil har oppstått - " + error); }, function () { return console.log("ferdig post-api/bestilling"); });
    };
    KundeEndreOpplysningerComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            templateUrl: './app/kunde/kunde-endre-opplysninger.component.html',
            providers: [kunde_service_1.KundeService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [kunde_service_1.KundeService, forms_1.FormBuilder])
    ], KundeEndreOpplysningerComponent);
    return KundeEndreOpplysningerComponent;
}());
exports.KundeEndreOpplysningerComponent = KundeEndreOpplysningerComponent;
//# sourceMappingURL=kunde-endre-opplysninger.component.js.map