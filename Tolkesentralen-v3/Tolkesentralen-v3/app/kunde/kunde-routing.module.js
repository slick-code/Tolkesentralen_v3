"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var kunde_component_1 = require("./kunde.component");
var bestill_tolk_component_1 = require("./bestill-tolk.component");
=======
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var kunde_component_1 = require('./kunde.component');
var bestill_tolk_component_1 = require('./bestill-tolk.component');
>>>>>>> 6a02ca237e57ae0ff40f538c86c764ca37c7aeda
var appRoutes = [
    {
        path: '',
        component: kunde_component_1.KundeComponent,
        children: [
            { path: 'bestill-tolk', component: bestill_tolk_component_1.BestillTolkComponent }
        ]
    }
];
var KundeRoutingModule = (function () {
    function KundeRoutingModule() {
    }
<<<<<<< HEAD
    return KundeRoutingModule;
}());
KundeRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(appRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], KundeRoutingModule);
=======
    KundeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], KundeRoutingModule);
    return KundeRoutingModule;
}());
>>>>>>> 6a02ca237e57ae0ff40f538c86c764ca37c7aeda
exports.KundeRoutingModule = KundeRoutingModule;
//# sourceMappingURL=kunde-routing.module.js.map