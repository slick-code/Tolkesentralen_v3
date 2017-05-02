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
var tolk_service_1 = require('../_services/tolk.service');
var forms_1 = require('@angular/forms');
var TolkRedigjerPersondetaljerComponent = (function () {
    function TolkRedigjerPersondetaljerComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.Error = "Ooops, beklager men en feil oppsto og handlingen ble avbrutt!";
        this.underText = "Din personalia er trygt lagret";
        this.path = 'tolk/tolk-redigjer-persondetaljer';
        this.form = fb.group({
            fornavn: [],
            etternavn: [],
            epost: [],
            telefon: [],
            mobil: [],
            adresse: [],
            adresse2: [],
            postnr: [],
            poststed: []
        });
    }
    TolkRedigjerPersondetaljerComponent.prototype.ngOnInit = function () {
        this.showForm = true;
        this.persId = JSON.parse(localStorage.getItem('id'));
        this.getTolk();
    };
    TolkRedigjerPersondetaljerComponent.prototype.getTolk = function () {
        var _this = this;
        // get users from secure api end point
        this.service.getTolk(this.persId)
            .subscribe(function (tolk) {
            _this.person = tolk;
            _this.setTextToInputFields(tolk);
        });
    };
    TolkRedigjerPersondetaljerComponent.prototype.setTextToInputFields = function (tolk) {
        this.form.setValue({
            fornavn: tolk.fornavn,
            etternavn: tolk.etternavn,
            epost: tolk.email,
            telefon: "",
            mobil: "",
            adresse: tolk.adresse,
            adresse2: "",
            postnr: tolk.postnr,
            poststed: tolk.poststed
        });
    };
    TolkRedigjerPersondetaljerComponent.prototype.updateTolk = function () {
        var _this = this;
        this.showForm = false;
        this.response = "loading";
        var ny = new models_1.Tolk();
        ny.persId = this.persId;
        ny.fornavn = this.form.value.fornavn;
        ny.etternavn = this.form.value.etternavn;
        ny.email = this.form.value.epost;
        ny.telefon = this.form.value.telefon;
        ny.telefon = this.form.value.mobil;
        ny.adresse = this.form.value.adresse;
        //ny.adresse2 = this.form.value.adresse2;
        ny.postnr = this.form.value.postnr;
        ny.poststed = this.form.value.poststed;
        var body = JSON.stringify(ny);
        this.service.updateTolk(body).subscribe(function (retur) {
            _this.response = "success";
            _this.responseText = "Success!";
        }, function (error) {
            _this.responseText = "Beklager, en feil har oppstått - " + error;
            _this.response = "error";
        });
    };
    TolkRedigjerPersondetaljerComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            templateUrl: './app/tolk/tolk-redigjer-persondetaljer.component.html',
            providers: [tolk_service_1.TolkService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [tolk_service_1.TolkService, forms_1.FormBuilder])
    ], TolkRedigjerPersondetaljerComponent);
    return TolkRedigjerPersondetaljerComponent;
}());
exports.TolkRedigjerPersondetaljerComponent = TolkRedigjerPersondetaljerComponent;
//# sourceMappingURL=tolk-redigjer-persondetaljer.component.js.map