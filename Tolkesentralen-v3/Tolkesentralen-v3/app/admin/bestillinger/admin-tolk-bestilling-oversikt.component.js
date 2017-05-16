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
var spraak_1 = require('../../_models/spraak');
var oppdrag_service_1 = require('../../_services/oppdrag.service');
var router_1 = require('@angular/router');
var temp_service_1 = require('../../_services/temp.service');
var data_service_1 = require('../../_services/data.service');
var models_1 = require('../../_models/models');
var selective_preloading_strategy_1 = require('../../_services/selective-preloading-strategy');
>>>>>>> 9e3fe497a2938e9bbd7ab4262693cbc05f51dcf8
var AdminTolkBestillingOversiktComponent = (function () {
    function AdminTolkBestillingOversiktComponent(preloadStrategy, dataService, oppdragService, route, tempService, router) {
        this.preloadStrategy = preloadStrategy;
        this.dataService = dataService;
        this.oppdragService = oppdragService;
        this.route = route;
        this.tempService = tempService;
        this.router = router;
        this.d = new Date(1494576900000);
        this.modules = preloadStrategy.preloadedModules;
        this.arraySpraak = new spraak_1.Spraak().liste;
    }
    AdminTolkBestillingOversiktComponent.prototype.ngOnInit = function () {
        this.bruker = JSON.parse(localStorage.getItem('currentUser'));
        this.count = 77;
        this.loading = true;
        this.getBestillinger();
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
    };
    AdminTolkBestillingOversiktComponent.prototype.btnTilSlettClick = function () {
        this.slettErTrykket = true;
    };
    AdminTolkBestillingOversiktComponent.prototype.btnAvbrytTilSlettClick = function () {
        this.slettText = "";
        this.slettErTrykket = false;
    };
    AdminTolkBestillingOversiktComponent.prototype.btnInfoClick = function (index, nr) {
        if (this.index == index && this.nr == nr) {
            this.SetDefault();
        }
        else {
            this.index = index;
            this.nr = nr;
            this.infoErTrykket = true;
        }
    };
    AdminTolkBestillingOversiktComponent.prototype.VisInfo = function (index, nr) {
        if (this.index == index && this.nr == nr && this.infoErTrykket) {
            return true;
        }
        return false;
    };
    AdminTolkBestillingOversiktComponent.prototype.SetDefault = function () {
        this.infoErTrykket = false;
        this.slettErTrykket = false;
        this.default = true;
        this.index = -1;
        this.nr = -1;
    };
    AdminTolkBestillingOversiktComponent.prototype.checkIfArrayIsEmthy = function (array) {
        if (array == null)
            return false;
        if (array.length == 0)
            return false;
        return true;
    };
    AdminTolkBestillingOversiktComponent.prototype.fix = function (jsonDate) {
        // -> //Date(1494501300000)/ -> returnerer -> new Date(1494501300000)
        return new Date(parseInt(jsonDate.substr(6)));
    };
    AdminTolkBestillingOversiktComponent.prototype.updateNavBar = function () {
        this.element = new models_1.NavbarElement();
        this.element.nr = this.arrayOppdrag.length;
        this.element.element = 'bestilling';
        this.dataService.updateData(this.element);
    };
    AdminTolkBestillingOversiktComponent.prototype.getBestillinger = function () {
        var _this = this;
        this.oppdragService.getGetBestillinger()
            .subscribe(function (oppdrag) {
            _this.arrayOppdrag = oppdrag;
            _this.updateNavBar();
        }, function (error) {
        }, function () { _this.loading = false; });
    };
    AdminTolkBestillingOversiktComponent.prototype.onUtdel = function (oppdrag) {
        this.tempService.setObject(oppdrag);
        this.router.navigate(['./admin/utdel']);
    };
    AdminTolkBestillingOversiktComponent.prototype.slettOppdrag = function (id, index) {
        this.slettText = "Du kan ikke slette denne bestillingen";
        //this.loading = true;
        //this.oppdragService.slettOppdrag(id)
        //    .subscribe(response => {
        //        this.SetDefault();
        //        this.arrayOppdrag.splice(index, 1);
        //        this.updateNavBar();
        //    },
        //    error => {
        //    },
        //    () => { this.loading = false; }
        //    );
    };
<<<<<<< HEAD
=======
    AdminTolkBestillingOversiktComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/admin/bestillinger/admin-tolk-bestilling-oversikt.component.html"
        }), 
        __metadata('design:paramtypes', [selective_preloading_strategy_1.SelectivePreloadingStrategy, data_service_1.DataService, oppdrag_service_1.OppdragService, router_1.ActivatedRoute, temp_service_1.TempService, router_1.Router])
    ], AdminTolkBestillingOversiktComponent);
>>>>>>> 9e3fe497a2938e9bbd7ab4262693cbc05f51dcf8
    return AdminTolkBestillingOversiktComponent;
}());
AdminTolkBestillingOversiktComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/admin/bestillinger/admin-tolk-bestilling-oversikt.component.html"
    }),
    __metadata("design:paramtypes", [kunde_service_1.KundeService,
        data_service_1.DataService])
], AdminTolkBestillingOversiktComponent);
exports.AdminTolkBestillingOversiktComponent = AdminTolkBestillingOversiktComponent;
//# sourceMappingURL=admin-tolk-bestilling-oversikt.component.js.map