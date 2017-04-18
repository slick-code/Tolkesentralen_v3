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
// Promise Version
var core_1 = require("@angular/core");
var models_1 = require("../_models/models");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var forms_1 = require("@angular/forms");
var TolkRedigjerPersondetaljerComponent = (function () {
    function TolkRedigjerPersondetaljerComponent(service, fb) {
        this.service = service;
        this.fb = fb;
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
    TolkRedigjerPersondetaljerComponent.prototype.tilbake = function () {
        this.showForm = true;
    };
    TolkRedigjerPersondetaljerComponent.prototype.ngOnInit = function () { };
    TolkRedigjerPersondetaljerComponent.prototype.showLoadingScreen = function () {
        this.showForm = false;
        this.Success = null;
        this.loading = true;
    };
    TolkRedigjerPersondetaljerComponent.prototype.postOppdrag = function () {
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
        //ny.fornavn = "Lunga";
        //ny.etternavn = "Majola";
        //ny.epost = "hei@på.deg";
        //ny.telefon = "1234";
        //ny.mobil = "1234";
        //ny.adresse = "Osloveien";
        //ny.adresse2 = "Osloveien";
        //ny.postnr = "3214";
        //ny.poststed = "Oslo";
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
    return TolkRedigjerPersondetaljerComponent;
}());
TolkRedigjerPersondetaljerComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        templateUrl: './app/tolk/tolk-redigjer-persondetaljer.component.html',
        providers: [oppdrag_service_1.OppdragService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
], TolkRedigjerPersondetaljerComponent);
exports.TolkRedigjerPersondetaljerComponent = TolkRedigjerPersondetaljerComponent;
//# sourceMappingURL=tolk-redigjer-persondetaljer.component.js.map