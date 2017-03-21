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
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kunde_service_1 = require("../../_services/kunde.service");
var models_1 = require("../../_models/models");
var data_service_1 = require("../../_services/data.service");
=======
var core_1 = require('@angular/core');
var kunde_service_1 = require('../../_services/kunde.service');
var models_1 = require('../../_models/models');
var data_service_1 = require('../../_services/data.service');
>>>>>>> 6a02ca237e57ae0ff40f538c86c764ca37c7aeda
var KundeListeComponent = (function () {
    function KundeListeComponent(service, dataService) {
        this.service = service;
        this.dataService = dataService;
        this.arrayKunder = [];
    }
    KundeListeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get users from secure api end point
        this.service.getKunder()
            .subscribe(function (kunder) {
            _this.arrayKunder = kunder;
            _this.element = new models_1.NavbarElement();
            _this.element.nr = _this.arrayKunder.length;
            _this.element.element = 'kunder';
            _this.dataService.updateData(_this.element);
        });
    };
<<<<<<< HEAD
    return KundeListeComponent;
}());
KundeListeComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/admin/brukere/kunde-liste.component.html"
    }),
    __metadata("design:paramtypes", [kunde_service_1.KundeService,
        data_service_1.DataService])
], KundeListeComponent);
=======
    KundeListeComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/admin/brukere/kunde-liste.component.html"
        }), 
        __metadata('design:paramtypes', [kunde_service_1.KundeService, data_service_1.DataService])
    ], KundeListeComponent);
    return KundeListeComponent;
}());
>>>>>>> 6a02ca237e57ae0ff40f538c86c764ca37c7aeda
exports.KundeListeComponent = KundeListeComponent;
//# sourceMappingURL=kunde-liste.component.js.map