"use strict";
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
        data: { domene: 'kunde' },
        children: [
            { path: 'kunde-bestill-tolk', component: kunde_bestill_tolk_component_1.KundeBestillTolkComponent },
            { path: 'kunde-bestill-oversettelse', component: kunde_bestill_oversettelse_component_1.KundeBestillOversettelseComponent },
            { path: 'kunde-list-alle-tolke-bestillinger', component: kunde_list_alle_tolke_bestillinger_component_1.KundeListAlleTolkeBestillingerComponent },
            { path: 'kunde-list-alle-oversettelse-bestillinger', component: kunde_list_alle_oversettelse_bestillinger_component_1.KundeListAlleOversettelseBestillingerComponent },
            { path: 'kunde-tolke-historikk', component: kunde_tolke_historikk_component_1.KundeTolkeHistorikkComponent },
            { path: 'kunde-oversettelse-historikk', component: kunde_oversettelse_historikk_component_1.KundeOversettelseHistorikkComponent },
            { path: 'kunde-endre-opplysninger', component: kunde_endre_opplysninger_component_1.KundeEndreOpplysningerComponent },
            { path: 'kunde-endre-passord', component: kunde_endre_passord_component_1.KundeEndrePassordComponent },
            { path: '', pathMatch: 'full', redirectTo: 'kunde-bestill-tolk' }
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
