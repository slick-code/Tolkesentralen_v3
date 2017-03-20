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
var BestillTolkComponent = (function () {
    function BestillTolkComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.form = fb.group({
            typetolk: [],
            fraspraak: [],
            tilspraak: [],
            oppdragsdato: [],
            frakl: [],
            tilkl: [],
            oppmotested: [],
            andreopplysninger: []
        });
    }
    BestillTolkComponent.prototype.ngOnInit = function () { };
    BestillTolkComponent.prototype.postKunde = function () {
        var _this = this;
        var ny = new models_1.OppdragForRegistrert();
        ny.typetolk = this.form.value.typetolk;
        ny.fraspraak = this.form.value.fraspraak;
        ny.tilspraak = this.form.value.tilspraak;
        ny.oppdragsdato = this.form.value.oppdragsdato;
        ny.frakl = this.form.value.frakl;
        ny.tilkl = this.form.value.tilkl;
        ny.oppmotested = this.form.value.oppmptested;
        ny.andreopplyninger = this.form.value.andreopplysninger;
        var body = JSON.stringify(ny);
        this.service.postOppdrag(body).subscribe(function (retur) {
            _this.oppdrag.push(ny);
            console.log("Success POST oppdrag : " + ny.typetolk);
        }, function (error) { return console.log("Beklager, en feil har oppstått - " + error); }, function () { return console.log("ferdig post-api/bestilling"); });
    };
    BestillTolkComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            templateUrl: './app/kunde/bestill-tolk.component.html',
            providers: [oppdrag_service_1.OppdragService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
    ], BestillTolkComponent);
    return BestillTolkComponent;
}());
exports.BestillTolkComponent = BestillTolkComponent;
//# sourceMappingURL=bestill-tolk.component.js.map