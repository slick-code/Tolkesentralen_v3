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
var TolkSettTilgjenglighetComponent = (function () {
    function TolkSettTilgjenglighetComponent(service) {
        this.service = service;
    }
    TolkSettTilgjenglighetComponent.prototype.ngOnInit = function () {
        this.errorText = "";
        this.ID = parseInt(localStorage.getItem('id'));
        this.tilgjengelig = [];
        this.getPerioderUtilgjengelig();
        this.fraStartDate = new Date();
        this.tilStartDate = this.fraStartDate;
        this.minDate = this.getDateString(new Date());
    };
    TolkSettTilgjenglighetComponent.prototype.getDateString = function (date) {
        return date = date.getFullYear() + '-'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
            + ('0' + date.getDate()).slice(-2);
    };
    TolkSettTilgjenglighetComponent.prototype.postUtilgjengelig = function (fraDato, tilDato) {
        var _this = this;
        this.loading = true;
        if (fraDato == "" || tilDato == "") {
            return this.errorText = "Ugylig dato";
        }
        this.errorText = "";
        var ny = new models_1.Utilgjengelig();
        ny.persId = this.ID;
        ny.fraDato = fraDato;
        ny.tilDato = tilDato;
        var body = JSON.stringify(ny);
        this.service.postUtilgjengelig(body).subscribe(function (retur) {
            // this.tilgjengelig.unshift(ny);
            _this.getPerioderUtilgjengelig();
        }, function (error) { console.log("Feil: postUtilgjengelig - " + error); }, function () { _this.loading = false; });
    };
    TolkSettTilgjenglighetComponent.prototype.checkIfArrayIsEmthy = function (array) {
        if (array == null)
            return false;
        if (array.length == 0)
            return false;
        return true;
    };
    TolkSettTilgjenglighetComponent.prototype.getPerioderUtilgjengelig = function () {
        var _this = this;
        this.service.GetPerioderUtilgjenelig(this.ID).subscribe(function (retur) {
            console.log("Success! getPerioderUtilgjengelig");
            _this.tilgjengelig = retur;
        }, function (error) { return console.log("Error -> getPerioderUtilgjengelig" + error); });
    };
    TolkSettTilgjenglighetComponent.prototype.Slett = function (index, id) {
        var _this = this;
        console.log("i: " + index + " id: " + id);
        this.slettLoading = true;
        this.service.slettPeriodeUtilgjengelig(id).subscribe(function (retur) {
            _this.tilgjengelig.splice(index, 1);
        }, function (error) { console.log("Feil: slettPerioderUtilgjengelig - " + error); }, function () { _this.slettLoading = false; });
    };
    TolkSettTilgjenglighetComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            templateUrl: './app/tolk/tolk-sett-tilgjenglighet.component.html',
            providers: [tolk_service_1.TolkService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [tolk_service_1.TolkService])
    ], TolkSettTilgjenglighetComponent);
    return TolkSettTilgjenglighetComponent;
}());
exports.TolkSettTilgjenglighetComponent = TolkSettTilgjenglighetComponent;
//# sourceMappingURL=tolk-sett-tilgjenglighet.component.js.map