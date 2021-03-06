"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Promise Version
var core_1 = require("@angular/core");
var models_1 = require("../_models/models");
var kunde_service_1 = require("../_services/kunde.service");
var forms_1 = require("@angular/forms");
var KundeEndrePassordComponent = (function () {
    function KundeEndrePassordComponent(kundeService, fb) {
        this.kundeService = kundeService;
        this.fb = fb;
        this.form = fb.group({
            gammeltpassord: [],
            nyttpassord: [],
            bekreftpassord: []
        });
    }
    KundeEndrePassordComponent.prototype.ngOnInit = function () { this.getKunder(); };
    KundeEndrePassordComponent.prototype.getKunder = function () {
        var _this = this;
        this.kundeService.getKunder()
            .subscribe(function (kunder) {
            _this.kunder = kunder;
        });
    };
    KundeEndrePassordComponent.prototype.postKunde = function () {
        var _this = this;
        var ny = new models_1.Kunde();
        //ny.gammeltpassord = this.form.value.gammeltpassord;
        //ny.nyttpassord = this.form.value.nyttpassord;
        //ny.bekreftpassord = this.form.value.bekreftpassord;
        var body = JSON.stringify(ny);
        this.kundeService.postKunde(body).subscribe(function (retur) {
            _this.kunder.push(ny);
            console.log("Success POST : " + ny.firma);
        }, function (error) { return console.log("Beklager, en feil har oppstått - " + error); }, function () { return console.log("ferdig post-api/bestilling"); });
    };
    return KundeEndrePassordComponent;
}());
KundeEndrePassordComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        templateUrl: './app/kunde/kunde-endre-passord.component.html',
        providers: [kunde_service_1.KundeService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [kunde_service_1.KundeService, forms_1.FormBuilder])
], KundeEndrePassordComponent);
exports.KundeEndrePassordComponent = KundeEndrePassordComponent;
