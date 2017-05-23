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
var spraak_1 = require('../../_models/spraak');
var oppdrag_service_1 = require('../../_services/oppdrag.service');
var router_1 = require('@angular/router');
var temp_service_1 = require('../../_services/temp.service');
var data_service_1 = require('../../_services/data.service');
var models_1 = require('../../_models/models');
var OppdragComponent = (function () {
    function OppdragComponent(
        //private preloadStrategy: SelectivePreloadingStrategy,
        dataService, oppdragService, route, tempService, router) {
        this.dataService = dataService;
        this.oppdragService = oppdragService;
        this.route = route;
        this.tempService = tempService;
        this.router = router;
        this.d = new Date(1494576900000);
        // this.modules = preloadStrategy.preloadedModules;
        this.arraySpraak = new spraak_1.Spraak().liste;
    }
    OppdragComponent.prototype.ngOnInit = function () {
        this.bruker = JSON.parse(localStorage.getItem('currentUser'));
        this.count = 77;
        this.loading = true;
        this.getNyeOppdrag();
        this.getSendteOppdrag();
        console.info("This is console.indo");
        if (window.performance) {
            console.log("window.performance work's fine on this browser");
        }
        if (performance.navigation.type == 1) {
            console.log("This page is reloaded");
        }
        else {
            console.log("This page is not reloaded");
        }
        // this.loading = false;
    };
    OppdragComponent.prototype.btnTilSlettClick = function () {
        this.slettErTrykket = true;
    };
    OppdragComponent.prototype.btnAvbrytTilSlettClick = function () {
        this.slettErTrykket = false;
    };
    OppdragComponent.prototype.btnInfoClick = function (index, nr) {
        if (this.index == index && this.nr == nr) {
            this.SetDefault();
        }
        else {
            this.index = index;
            this.nr = nr;
            this.infoErTrykket = true;
        }
    };
    OppdragComponent.prototype.VisInfo = function (index, nr) {
        if (this.index == index && this.nr == nr && this.infoErTrykket) {
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
    OppdragComponent.prototype.checkIfArrayIsEmthy = function (array) {
        if (array == null)
            return false;
        if (array.length == 0)
            return false;
        return true;
    };
    OppdragComponent.prototype.fix = function (jsonDate) {
        // -> //Date(1494501300000)/ -> returnerer -> new Date(1494501300000)
        return new Date(parseInt(jsonDate.substr(6)));
    };
    OppdragComponent.prototype.updateNavBar = function () {
        this.element = new models_1.NavbarElement();
        this.element.nr = this.arrayOppdrag.length;
        this.element.element = 'oppdrag';
        this.dataService.updateData(this.element);
    };
    OppdragComponent.prototype.getNyeOppdrag = function () {
        var _this = this;
        this.oppdragService.getUbehandleOppdrag()
            .subscribe(function (oppdrag) {
            _this.arrayOppdrag = oppdrag;
            _this.updateNavBar();
        }, function (error) {
        }, function () { _this.loading = false; });
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
    OppdragComponent.prototype.fixString = function (text) {
        //return text.split('-')[0];
        //return text.substring(0, text.indexOf('-'));
    };
    OppdragComponent.prototype.slettOppdrag = function (id, index) {
        var _this = this;
        this.loading = true;
        this.oppdragService.slettOppdrag(id)
            .subscribe(function (response) {
            _this.SetDefault();
            _this.arrayOppdrag.splice(index, 1);
            _this.updateNavBar();
        }, function (error) {
        }, function () { _this.loading = false; });
    };
    OppdragComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/admin/foresporsler/oppdrag.component.html"
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, oppdrag_service_1.OppdragService, router_1.ActivatedRoute, temp_service_1.TempService, router_1.Router])
    ], OppdragComponent);
    return OppdragComponent;
}());
exports.OppdragComponent = OppdragComponent;
//# sourceMappingURL=oppdrag.component.js.map