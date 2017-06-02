"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kunde_service_1 = require("../../_services/kunde.service");
var models_1 = require("../../_models/models");
var data_service_1 = require("../../_services/data.service");
var core_2 = require("@angular/core");
var NyeKunderComponent = (function () {
    function NyeKunderComponent(service, dataService) {
        this.service = service;
        this.dataService = dataService;
        this.arrayNyeKunder = [];
        this.state = 'inactive';
        console.log("KUNDE_CONSTRUC");
    }
    NyeKunderComponent.prototype.ngOnInit = function () {
        console.log("KUNDE_INIT");
        this.getKunder();
    };
    NyeKunderComponent.prototype.toggleState = function () {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    };
    NyeKunderComponent.prototype.getKunder = function () {
        var _this = this;
        this.service.getNyeKunder()
            .subscribe(function (kunder) {
            console.log("kunder har blitt hentet");
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
    return NyeKunderComponent;
}());
NyeKunderComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/admin/foresporsler/nye-kunder.component.html",
        animations: [
            core_2.trigger('flyInOut', [
                core_2.state('in', core_2.style({ width: 120, transform: 'translateX(0)', opacity: 1 })),
                core_2.transition('void => *', [
                    core_2.style({ width: 10, transform: 'translateX(10px)', opacity: 0 }),
                    core_2.group([
                        core_2.animate('0.2s 0.1s ease', core_2.style({
                            transform: 'translateX(0)',
                            width: 120
                        })),
                        core_2.animate('0.2s ease', core_2.style({
                            opacity: 1
                        }))
                    ])
                ]),
                core_2.transition('* => void', [
                    core_2.group([
                        core_2.animate('0.1s ease', core_2.style({
                            transform: 'translateX(5px)',
                            width: 10
                        })),
                        core_2.animate('0.1s 0.1s ease', core_2.style({
                            opacity: 0
                        }))
                    ])
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [kunde_service_1.KundeService,
        data_service_1.DataService])
], NyeKunderComponent);
exports.NyeKunderComponent = NyeKunderComponent;
