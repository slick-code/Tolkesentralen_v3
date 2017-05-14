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
var kunde_service_1 = require('../../_services/kunde.service');
var models_1 = require('../../_models/models');
var data_service_1 = require('../../_services/data.service');
var NyeKunderComponent = (function () {
    function NyeKunderComponent(service, dataService) {
        this.service = service;
        this.dataService = dataService;
        this.arrayNyeKunder = [];
    }
    NyeKunderComponent.prototype.ngOnInit = function () {
        this.getKunder();
    };
    NyeKunderComponent.prototype.getKunder = function () {
        var _this = this;
        this.service.getNyeKunder()
            .subscribe(function (kunder) {
            if (kunder != null) {
                _this.arrayNyeKunder = kunder;
                _this.updateNavBar();
            }
        });
    };
    NyeKunderComponent.prototype.setTilSlettErTrykket = function (index) {
        if (this.index == index && this.slett) {
            return true;
        }
        return false;
    };
    NyeKunderComponent.prototype.setTilSlett = function (index) {
        this.slett = true;
        this.index = index;
    };
    NyeKunderComponent.prototype.setDefaultErtrykket = function (index) {
        return !this.setTilSlettErTrykket(index);
    };
    NyeKunderComponent.prototype.setDefault = function () {
        this.index = -1;
        this.slett = false;
    };
    NyeKunderComponent.prototype.updateNavBar = function () {
        this.element = new models_1.NavbarElement();
        this.element.nr = this.arrayNyeKunder.length;
        this.element.element = 'nye-kunder';
        this.dataService.updateData(this.element);
    };
    NyeKunderComponent.prototype.godkjennKunde = function (index, kundeID) {
        var _this = this;
        this.loading = true;
        this.service.godkjennKunde(kundeID).subscribe(function (retur) {
            _this.arrayNyeKunder.splice(index, 1);
            _this.updateNavBar();
        }, function (error) {
        }, function () { _this.loading = false; });
    };
    NyeKunderComponent.prototype.slettKunde = function (index, kundeID) {
        var _this = this;
        this.loading = true;
        this.service.slettKunde(kundeID).subscribe(function (retur) {
            _this.arrayNyeKunder.splice(index, 1);
            _this.slett = false;
            _this.updateNavBar();
        }, function (error) {
        }, function () { _this.loading = false; });
    };
    NyeKunderComponent.prototype.checkIfArrayIsEmthy = function (array) {
        if (array == null)
            return false;
        if (array.length == 0)
            return false;
        return true;
    };
    NyeKunderComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/admin/foresporsler/nye-kunder.component.html"
        }), 
        __metadata('design:paramtypes', [kunde_service_1.KundeService, data_service_1.DataService])
    ], NyeKunderComponent);
    return NyeKunderComponent;
}());
exports.NyeKunderComponent = NyeKunderComponent;
//# sourceMappingURL=nye-kunder.component.js.map