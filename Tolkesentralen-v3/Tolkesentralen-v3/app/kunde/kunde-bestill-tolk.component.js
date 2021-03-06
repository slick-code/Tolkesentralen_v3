"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../_models/models");
var spraak_1 = require("../_models/spraak");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var KundeBestillTolkComponent = (function () {
    function KundeBestillTolkComponent(service, fb, router) {
        var _this = this;
        this.service = service;
        this.fb = fb;
        this.router = router;
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
        this.form2.valueChanges.subscribe(function (data) {
            if (_this.ugyldigFelter) {
                if (_this.form2.valid)
                    _this.ugyldigFelter = false;
            }
        });
    }
    KundeBestillTolkComponent.prototype.ngOnInit = function () {
        this.showForm = true;
        this.validerSpraak = true;
        this.typetolk = this.tolkTyper[0];
        this.spraak = new spraak_1.Spraak().liste;
        this.minDate = this.getDateString(new Date());
        this.startDate = this.minDate;
        this.adresseFelt = true;
        this.fraspraak = 42;
        this.tilspraak = 93;
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
        if (nr == 0 || nr == 3) {
            this.adresseFelt = true;
            ;
        }
        else {
            this.adresseFelt = false;
        }
    };
    KundeBestillTolkComponent.prototype.setFraSpraak = function (id) {
        console.log("SPRÅÅL " + this.fraspraak);
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
    KundeBestillTolkComponent.prototype.form2_MarkAsTouched = function () {
        var _this = this;
        Object.keys(this.form2.controls).forEach(function (key) {
            _this.form2.get(key).markAsTouched(true);
        });
    };
    KundeBestillTolkComponent.prototype.tilbake = function () {
        this.showForm = true;
    };
    KundeBestillTolkComponent.prototype.tilBestilling = function () {
        this.router.navigate(["/kunde/kunde-list-alle-tolke-bestillinger"]);
    };
    KundeBestillTolkComponent.prototype.postKunde = function (navn) {
        var _this = this;
        this.ugyldigFelter = false;
        if (!this.validerSpraak) {
            this.ugyldigFelter = true;
            return;
        }
        if (this.adresseFelt) {
            if (!this.form2.valid) {
                this.form2_MarkAsTouched();
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
            console.log("adressefelt: " + this.form.value.oppmoteadresse);
            ny.oppmoteadresse = this.form2.value.oppmoteadresse;
            ny.oppmotepostnr = this.form2.value.oppmotepostnr;
            ny.oppmotepoststed = this.form2.value.oppmotepoststed;
        }
        var body = JSON.stringify(ny);
        this.service.postOppdragFraKunde(body).subscribe(function (retur) {
            _this.response = "success";
            _this.responseText = "Takk for din bestilling!";
            _this.underText = "Se Mine Bestillinger..";
        }, function (error) {
            _this.response = "error";
            _this.responseText = "Ooops..";
            _this.underText = "En feil har oppstått";
        }, function () { });
    };
    return KundeBestillTolkComponent;
}());
KundeBestillTolkComponent = __decorate([
    core_1.Component({
        templateUrl: './app/kunde/kunde-bestill-tolk.component.html',
        providers: [oppdrag_service_1.OppdragService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService, forms_1.FormBuilder, router_1.Router])
], KundeBestillTolkComponent);
exports.KundeBestillTolkComponent = KundeBestillTolkComponent;
