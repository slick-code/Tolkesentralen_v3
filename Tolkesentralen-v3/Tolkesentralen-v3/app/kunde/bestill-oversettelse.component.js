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
<<<<<<< HEAD
var core_1 = require('@angular/core');
var models_1 = require('../_models/models');
var oversettelse_service_1 = require('../_services/oversettelse.service');
var forms_1 = require('@angular/forms');
=======
var core_1 = require("@angular/core");
var models_1 = require("../_models/models");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var forms_1 = require("@angular/forms");
>>>>>>> 7b24c1909783e8ff7258e3e795d8140d715f4513
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
        this.brukerID = parseInt(localStorage.getItem('id'));
    };
    BestillOversettelseComponent.prototype.postOppdrag = function () {
        var _this = this;
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
        ny.kundeID = this.brukerID;
        ny.typedokument = "Juridisk";
        ny.fraspraak = "Norsk";
        ny.tilspraak = "Pashto";
        ny.ferdiggjoresdato = "12-12-12";
        ny.andreopplysninger = "Jamaca MAN";
        var body = JSON.stringify(ny);
        this.service.postOversettelseKunde(body).subscribe(function (retur) {
            _this.oppdrag.push(ny);
            console.log("Success POST oppdrag : " + ny.typedokument);
        }, function (error) { return console.log("Beklager, en feil har oppstått - " + error); }, function () { return console.log("ferdig post-api/bestilling"); });
    };
<<<<<<< HEAD
    BestillOversettelseComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            templateUrl: './app/kunde/bestill-oversettelse.component.html',
            providers: [oversettelse_service_1.OversettelseService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [oversettelse_service_1.OversettelseService, forms_1.FormBuilder])
    ], BestillOversettelseComponent);
=======
>>>>>>> 7b24c1909783e8ff7258e3e795d8140d715f4513
    return BestillOversettelseComponent;
}());
BestillOversettelseComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        templateUrl: './app/kunde/bestill-oversettelse.component.html',
        providers: [oppdrag_service_1.OppdragService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
], BestillOversettelseComponent);
exports.BestillOversettelseComponent = BestillOversettelseComponent;
//# sourceMappingURL=bestill-oversettelse.component.js.map