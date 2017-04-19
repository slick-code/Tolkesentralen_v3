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
var kunde_bestill_tolk_component_1 = require("./kunde-bestill-tolk.component");
var kunde_bestill_oversettelse_component_1 = require("./kunde-bestill-oversettelse.component");
var kunde_list_alle_tolke_bestillinger_component_1 = require("./kunde-list-alle-tolke-bestillinger.component");
var kunde_list_alle_oversettelse_bestillinger_component_1 = require("./kunde-list-alle-oversettelse-bestillinger.component");
var kunde_tolke_historikk_component_1 = require("./kunde-tolke-historikk.component");
var kunde_oversettelse_historikk_component_1 = require("./kunde-oversettelse-historikk.component");
var kunde_endre_opplysninger_component_1 = require("./kunde-endre-opplysninger.component");
var auth_guard_1 = require("../_guards/auth.guard");
var kunde_endre_passord_component_1 = require("./kunde-endre-passord.component");
var appRoutes = [
    {
        path: '',
        component: kunde_component_1.KundeComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: 'kunde-bestill-tolk', component: kunde_bestill_tolk_component_1.KundeBestillTolkComponent },
            { path: 'kunde-bestill-oversettelse', component: kunde_bestill_oversettelse_component_1.KundeBestillOversettelseComponent },
            { path: 'kunde-list-alle-tolke-bestillinger', component: kunde_list_alle_tolke_bestillinger_component_1.KundeListAlleTolkeBestillingerComponent },
            { path: 'kunde-list-alle-oversettelse-bestillinger', component: kunde_list_alle_oversettelse_bestillinger_component_1.KundeListAlleOversettelseBestillingerComponent },
            { path: 'kunde-tolke-historikk', component: kunde_tolke_historikk_component_1.KundeTolkeHistorikkComponent },
            { path: 'kunde-oversettelse-historikk', component: kunde_oversettelse_historikk_component_1.KundeOversettelseHistorikkComponent },
            { path: 'kunde-endre-opplysninger', component: kunde_endre_opplysninger_component_1.KundeEndreOpplysningerComponent },
            { path: 'kunde-endre-passord', component: kunde_endre_passord_component_1.KundeEndrePassordComponent },
            { path: '', pathMatch: 'full', redirectTo: 'kunde-bestill-oversettelse' }
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