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
var TolkEndrePassordComponent = (function () {
    function TolkEndrePassordComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.form = fb.group({
            gammeltpassord: [],
            nyttpassord: [],
            bekreftpassord: [],
        });
    }
    TolkEndrePassordComponent.prototype.tilbake = function () {
        this.showForm = true;
    };
    TolkEndrePassordComponent.prototype.ngOnInit = function () { };
    TolkEndrePassordComponent.prototype.showLoadingScreen = function () {
        this.showForm = false;
        this.Success = null;
        this.loading = true;
    };
    TolkEndrePassordComponent.prototype.postOppdrag = function () {
        var ny = new models_1.Person();
        // ny.fornavn = this.form.value.fornavn;
        // ny.etternavn = this.form.value.etternavn;
        //ny.epost = this.form.value.epost;
        //ny.telefon = this.form.value.telefon;
        //ny.mobil = this.form.value.mobil;
        //ny.adresse = this.form.value.adresse;
        //ny.adresse2 = this.form.value.adresse2;
        //ny.postnr = this.form.value.postnr;
        //ny.poststed = this.form.value.poststed;
        //ny.gammeltpassord = "hei";
        //ny.nyttpassord = "hei";
        //ny.bekreftpassord = "hei";
        //var body: string = JSON.stringify(ny);
        //this.service.getEndreProfilTolk(body).subscribe(
        //    retur => {
        //        this.Success = true;
        //        this.loading = false;
        //        this.person = retur;
        //    },
        //    error => console.log("Beklager, en feil har oppstått - " + error),
        //    () => console.log("ferdig post-api/bestilling")
        //);
    };
    TolkEndrePassordComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            templateUrl: './app/tolk/tolk-endre-passord.component.html',
            providers: [oppdrag_service_1.OppdragService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
    ], TolkEndrePassordComponent);
    return TolkEndrePassordComponent;
}());
exports.TolkEndrePassordComponent = TolkEndrePassordComponent;
//# sourceMappingURL=tolk-endre-passord.component.js.map