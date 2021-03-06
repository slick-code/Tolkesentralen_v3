"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../_models/models");
var spraak_1 = require("../_models/spraak");
var oversettelse_service_1 = require("../_services/oversettelse.service");
var forms_1 = require("@angular/forms");
var KundeBestillOversettelseComponent = (function () {
    function KundeBestillOversettelseComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.form = fb.group({
            andreopplysninger: [],
        });
    }
    KundeBestillOversettelseComponent.prototype.ngOnInit = function () {
        this.typedokument = "Vitnemål";
        this.showForm = true;
        this.validerSpraak = true;
        this.spraak = new spraak_1.Spraak().liste;
        this.minDate = this.getDateString(new Date());
        this.startDate = this.minDate;
        this.fraspraak = 42;
        this.tilspraak = 93;
        this.form.patchValue({
            frakl: "08:00",
            tilkl: "10:00"
        });
    };
    KundeBestillOversettelseComponent.prototype.onchange = function (type) {
        console.log("TYPE :" + type);
        this.typedokument = type;
    };
    KundeBestillOversettelseComponent.prototype.getDateString = function (date) {
        //setter +3 som vanlig deadline
        return date = date.getFullYear() + '-'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
            + ('0' + (date.getDate() + 3)).slice(-2);
    };
    KundeBestillOversettelseComponent.prototype.setFraSpraak = function (id) {
        this.fraspraak = id + 1;
        this.ValidateSpraak();
    };
    KundeBestillOversettelseComponent.prototype.setTilSpraak = function (id) {
        this.tilspraak = id + 1;
        this.ValidateSpraak();
    };
    KundeBestillOversettelseComponent.prototype.ValidateSpraak = function () {
        if (this.fraspraak == this.tilspraak)
            this.validerSpraak = false;
        else
            this.validerSpraak = true;
    };
    KundeBestillOversettelseComponent.prototype.form_MarkAsTouched = function () {
        var _this = this;
        Object.keys(this.form.controls).forEach(function (key) {
            _this.form.get(key).markAsTouched(true);
        });
    };
    KundeBestillOversettelseComponent.prototype.tilbake = function () {
        this.showForm = true;
    };
    KundeBestillOversettelseComponent.prototype.postKunde = function (navn) {
        var _this = this;
        this.ugyldigFelter = false;
        if (!this.validerSpraak || !this.form.valid) {
            this.ugyldigFelter = true;
            if (!this.form.valid) {
                this.form_MarkAsTouched();
            }
            return;
        }
        this.showForm = false;
        this.response = "loading";
        var ny = new models_1.Oversettelse();
        ny.dato = Date.now();
        ny.kundeID = parseInt(localStorage.getItem('id'));
        ny.typedokument = this.typedokument;
        ny.fraspraak = this.fraspraak;
        ny.tilspraak = this.tilspraak;
        ny.andreopplysninger = this.form.value.andreopplysninger;
        var formData = new FormData();
        formData.append('uploadFile', this.File, File.name);
        ny.form = formData;
        ny.fil = this.File;
        var body = JSON.stringify(ny);
        this.service.postOversettelseKunde(body).subscribe(function (retur) {
            _this.response = "success";
            _this.responseText = "Takk for din bestilling!";
            _this.underText = "";
        }, function (error) {
            _this.response = "error";
            _this.responseText = "Ingen kontakt med server";
            _this.underText = "Tilkoblet internett?";
        }, function () { });
    };
    KundeBestillOversettelseComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.File = fileList[0];
            console.log("FIL: " + this.File.name);
            //let formData: FormData = new FormData();
            //formData.append('uploadFile', file, file.name);
            //let headers = new Headers();
            //headers.append('Content-Type', 'multipart/form-data');
            //headers.append('Accept', 'application/json');
            //let options = new RequestOptions({ headers: headers });
            //this.http.post(`${this.apiEndPoint}`, formData, options)
            //    .map(res => res.json())
            //    .catch(error => Observable.throw(error))
            //    .subscribe(
            //    data => console.log('success'),
            //    error => console.log(error)
            //    )
        }
    };
    return KundeBestillOversettelseComponent;
}());
KundeBestillOversettelseComponent = __decorate([
    core_1.Component({
        templateUrl: './app/kunde/kunde-bestill-oversettelse.component.html',
        providers: [oversettelse_service_1.OversettelseService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [oversettelse_service_1.OversettelseService, forms_1.FormBuilder])
], KundeBestillOversettelseComponent);
exports.KundeBestillOversettelseComponent = KundeBestillOversettelseComponent;
