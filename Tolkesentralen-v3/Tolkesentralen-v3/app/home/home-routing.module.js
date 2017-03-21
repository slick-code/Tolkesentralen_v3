"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var registrer_component_1 = require("./registrer.component");
var bestill_oversettelse_component_1 = require("./bestill-oversettelse.component");
var bestill_tolk_component_1 = require("./bestill-tolk.component");
var index_component_1 = require("./index.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        children: [
            { path: 'register', component: registrer_component_1.RegistrerComponent },
            { path: 'bestill-tolk', component: bestill_tolk_component_1.BestillTolkComponent },
            { path: 'bestill-oversettelse', component: bestill_oversettelse_component_1.BestillOversettelseComponent },
            { path: '', component: index_component_1.IndexComponent }
        ]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(appRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], HomeRoutingModule);
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=home-routing.module.js.map