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
var tolk_component_1 = require("./tolk.component");
=======
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tolk_component_1 = require('./tolk.component');
>>>>>>> 6a02ca237e57ae0ff40f538c86c764ca37c7aeda
var appRoutes = [
    { path: '', component: tolk_component_1.TolkComponent }
];
var TolkRoutingModule = (function () {
    function TolkRoutingModule() {
    }
<<<<<<< HEAD
    return TolkRoutingModule;
}());
TolkRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(appRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], TolkRoutingModule);
=======
    TolkRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TolkRoutingModule);
    return TolkRoutingModule;
}());
>>>>>>> 6a02ca237e57ae0ff40f538c86c764ca37c7aeda
exports.TolkRoutingModule = TolkRoutingModule;
//# sourceMappingURL=tolk-routing.module.js.map