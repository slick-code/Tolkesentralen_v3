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
var home_component_1 = require("./home.component");
var registrer_component_1 = require("./registrer.component");
var bestill_oversettelse_component_1 = require("./bestill-oversettelse.component");
var bestill_tolk_component_1 = require("./bestill-tolk.component");
var index_component_1 = require("./index.component");
=======
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var registrer_component_1 = require('./registrer.component');
var bestill_oversettelse_component_1 = require('./bestill-oversettelse.component');
var bestill_tolk_component_1 = require('./bestill-tolk.component');
var index_component_1 = require('./index.component');
var info_om_oss_component_1 = require('./info/info-om-oss.component');
var info_oversettelse_component_1 = require('./info/info-oversettelse.component');
var info_tolk_component_1 = require('./info/info-tolk.component');
>>>>>>> 5a7073c528b434a9137ecd04b036a9fc65b35ee7
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        children: [
            { path: 'register', component: registrer_component_1.RegistrerComponent },
            { path: 'bestill-tolk', component: bestill_tolk_component_1.BestillTolkComponent },
            { path: 'bestill-oversettelse', component: bestill_oversettelse_component_1.BestillOversettelseComponent },
            { path: 'info-om-oss', component: info_om_oss_component_1.InfoOmOssComponent },
            { path: 'info-oversettelse', component: info_oversettelse_component_1.InfoOversettelseComponent },
            { path: 'info-tolk', component: info_tolk_component_1.InfoTolkComponent },
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