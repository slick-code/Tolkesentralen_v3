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
var oppdrag_service_1 = require('../../_services/oppdrag.service');
var router_1 = require('@angular/router');
var temp_service_1 = require('../../_services/temp.service');
var data_service_1 = require('../../_services/data.service');
var models_1 = require('../../_models/models');
var selective_preloading_strategy_1 = require('../../_services/selective-preloading-strategy');
var OppdragComponent = (function () {
    function OppdragComponent(preloadStrategy, dataService, oppdragService, route, tempService, router) {
        this.preloadStrategy = preloadStrategy;
        this.dataService = dataService;
        this.oppdragService = oppdragService;
        this.route = route;
        this.tempService = tempService;
        this.router = router;
        this.modules = preloadStrategy.preloadedModules;
    }
    OppdragComponent.prototype.btnClick = function (index, nr, btn) {
        if (this.index == index && this.nr == nr) {
            if (btn == 1 && this.infoErTrykket) {
            }
            else {
                this.SetDefault();
                return;
            }
        }
        this.index = index;
        this.nr = nr;
        this.infoErTrykket = true;
        if (btn == 1) {
            this.slettErTrykket = true;
        }
    };
    OppdragComponent.prototype.VisInfo = function (index, nr) {
        if (this.index == index && this.nr == nr && this.infoErTrykket) {
            return true;
        }
        return false;
    };
    OppdragComponent.prototype.VisSlett = function (index, nr) {
        if (this.index == index && this.nr == nr && this.slettErTrykket) {
            return true;
        }
        return false;
    };
    OppdragComponent.prototype.SetDefault = function () {
        this.infoErTrykket = false;
        this.slettErTrykket = false;
        this.default = true;
        this.index = -1;
        this.nr = -1;
    };
    OppdragComponent.prototype.ngOnInit = function () {
        this.bruker = JSON.parse(localStorage.getItem('currentUser'));
        this.count = 77;
        this.getNyeOppdrag();
        this.getSendteOppdrag();
        //this.loading = true
    };
    OppdragComponent.prototype.checkIfArrayIsEmthy = function (array) {
        if (array == null)
            return false;
        if (array.length == 0)
            return false;
        return true;
    };
    OppdragComponent.prototype.getNyeOppdrag = function () {
        var _this = this;
        this.oppdragService.getUbehandleOppdrag()
            .subscribe(function (oppdrag) {
            _this.arrayOppdrag = oppdrag;
            _this.element = new models_1.NavbarElement();
            _this.element.nr = _this.arrayOppdrag.length;
            _this.element.element = 'oppdrag';
            _this.dataService.updateData(_this.element);
            _this.loading = false;
        });
    };
    OppdragComponent.prototype.getSendteOppdrag = function () {
        var _this = this;
        this.oppdragService.getBehandleOppdrag()
            .subscribe(function (oppdrag) {
            _this.arrayOppdragSendt = oppdrag;
        });
    };
    OppdragComponent.prototype.onUtdel = function (oppdrag) {
        this.tempService.setObject(oppdrag);
        this.router.navigate(['./admin/utdel']);
    };
    OppdragComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/admin/foresporsler/oppdrag.component.html"
        }), 
        __metadata('design:paramtypes', [selective_preloading_strategy_1.SelectivePreloadingStrategy, data_service_1.DataService, oppdrag_service_1.OppdragService, router_1.ActivatedRoute, temp_service_1.TempService, router_1.Router])
    ], OppdragComponent);
    return OppdragComponent;
}());
exports.OppdragComponent = OppdragComponent;
//# sourceMappingURL=oppdrag.component.js.map