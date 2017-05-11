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
var models_1 = require('../_models/models');
var spraak_1 = require('../_models/spraak');
var oppdrag_service_1 = require('../_services/oppdrag.service');
var forms_1 = require('@angular/forms');
var KundeBestillTolkComponent = (function () {
    function KundeBestillTolkComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.form = fb.group({
            frakl: [],
            tilkl: [],
            andreopplysninger: [],
        });
        this.form2 = fb.group({
            oppmoteadresse: [""],
            oppmotepostnr: ["", forms_1.Validators.pattern("[0-9]{4}")],
            oppmotepoststed: ["", forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")]
        });
        this.tolkTyper = ["Fremmøtetolk", "Telefontolk", "Videotolk", "Konferansetolk"];
    }
    KundeBestillTolkComponent.prototype.ngOnInit = function () {
        this.showForm = true;
        this.validerSpraak = true;
        this.typetolk = this.tolkTyper[1];
        this.spraak = new spraak_1.Spraak().liste;
        this.minDate = this.getDateString(new Date());
        this.startDate = this.minDate;
        this.adresseFelt = true;
        this.fraspraak = 1;
        this.tilspraak = 2;
        this.form.patchValue({
            frakl: "08:00",
            tilkl: "10:00"
        });
    };
    KundeBestillTolkComponent.prototype.getDateString = function (date) {
        return date = date.getFullYear() + '-'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
            + ('0' + date.getDate()).slice(-2);
    };
    KundeBestillTolkComponent.prototype.onchange = function (nr) {
        this.typetolk = this.tolkTyper[nr];
        if (nr == 1 || nr == 4) {
            this.adresseFelt = true;
            ;
        }
        else {
            this.adresseFelt = false;
        }
    };
    KundeBestillTolkComponent.prototype.setFraSpraak = function (id) {
        this.fraspraak = id;
        this.ValidateSpraak();
    };
    KundeBestillTolkComponent.prototype.setTilSpraak = function (id) {
        this.tilspraak = id;
        this.ValidateSpraak();
    };
    KundeBestillTolkComponent.prototype.ValidateSpraak = function () {
        if (this.fraspraak == this.tilspraak)
            this.validerSpraak = false;
        else
            this.validerSpraak = true;
    };
    KundeBestillTolkComponent.prototype.form_MarkAsTouched = function () {
        var _this = this;
        Object.keys(this.form.controls).forEach(function (key) {
            _this.form.get(key).markAsTouched(true);
        });
    };
    KundeBestillTolkComponent.prototype.form2_MarkAsTouched = function () {
        var _this = this;
        Object.keys(this.form2.controls).forEach(function (key) {
            _this.form2.get(key).markAsTouched(true);
        });
    };
    KundeBestillTolkComponent.prototype.tilbake = function () {
        this.showForm = true;
    };
    KundeBestillTolkComponent.prototype.postKunde = function (navn) {
        var _this = this;
        this.ugyldigFelter = false;
        if (!this.validerSpraak) {
            this.ugyldigFelter = true;
            return;
        }
        if (this.adresseFelt) {
            if (!this.form.valid) {
                this.form_MarkAsTouched();
            }
            if (!this.form2.valid) {
                this.form2_MarkAsTouched();
                this.ugyldigFelter = true;
                return;
            }
        }
        else {
            if (!this.form.valid) {
                this.form_MarkAsTouched();
                this.ugyldigFelter = true;
                return;
            }
        }
        this.showForm = false;
        this.response = "loading";
        var ny = new models_1.Oppdrag();
        ny.kundeID = parseInt(localStorage.getItem('id'));
        ny.typetolk = this.typetolk;
        ny.fraspraak = this.fraspraak;
        ny.tilspraak = this.tilspraak;
        ny.oppdragsdato = this.startDate;
        ny.frakl = this.form.value.frakl;
        ny.tilkl = this.form.value.tilkl;
        ny.andreopplysninger = this.form.value.andreopplysninger;
        if (this.adresseFelt) {
            ny.oppmoteadresse = this.form.value.oppmoteadresse;
            ny.oppmotepostnr = this.form.value.oppmotepostnr;
            ny.oppmotepoststed = this.form.value.oppmotepoststed;
        }
        var body = JSON.stringify(ny);
        this.service.postOppdragFraKunde(body).subscribe(function (retur) {
            _this.response = "success";
            _this.responseText = "Takk for din bestilling!";
            _this.underText = "";
        }, function (error) {
            _this.response = "error";
            _this.responseText = "Ingen kontakt med server";
            _this.underText = "Tilkoblet internett?";
        }, function () { });
    };
    KundeBestillTolkComponent = __decorate([
        core_1.Component({
            templateUrl: './app/kunde/kunde-bestill-tolk.component.html',
            providers: [oppdrag_service_1.OppdragService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [oppdrag_service_1.OppdragService, forms_1.FormBuilder])
    ], KundeBestillTolkComponent);
    return KundeBestillTolkComponent;
}());
exports.KundeBestillTolkComponent = KundeBestillTolkComponent;
//# sourceMappingURL=kunde-bestill-tolk.component.js.map