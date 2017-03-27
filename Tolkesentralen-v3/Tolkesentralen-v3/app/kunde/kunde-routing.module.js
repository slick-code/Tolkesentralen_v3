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
var kunde_component_1 = require("./kunde.component");
var bestill_tolk_component_1 = require("./bestill-tolk.component");
var bestill_oversettelse_component_1 = require("./bestill-oversettelse.component");
var list_bestillinger_component_1 = require("./list-bestillinger.component");
var kunde_historikk_component_1 = require("./kunde-historikk.component");
var profil_component_1 = require("./profil.component");
var auth_guard_1 = require("../_guards/auth.guard");
var appRoutes = [
    {
        path: '',
        component: kunde_component_1.KundeComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: 'bestill-tolk', component: bestill_tolk_component_1.BestillTolkComponent },
            { path: 'bestill-oversettelse', component: bestill_oversettelse_component_1.BestillOversettelseComponent },
            { path: 'list-bestillinger', component: list_bestillinger_component_1.ListBestillingerComponent },
            { path: 'historikk', component: kunde_historikk_component_1.KundeHistorikkComponent },
            { path: 'profil', component: profil_component_1.ProfilComponent }
        ]
    }
];
var KundeRoutingModule = (function () {
    function KundeRoutingModule() {
    }
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
exports.KundeRoutingModule = KundeRoutingModule;
//# sourceMappingURL=kunde-routing.module.js.map