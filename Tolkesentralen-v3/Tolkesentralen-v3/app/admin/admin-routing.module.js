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
var router_1 = require('@angular/router');
var admin_component_1 = require('./admin.component');
var auth_guard_1 = require('../_guards/auth.guard');
var oppdrag_component_1 = require('./foresporsler/oppdrag.component');
var oversettelse_component_1 = require('./foresporsler/oversettelse.component');
var utdel_component_1 = require('./foresporsler/utdel.component');
var nye_kunder_component_1 = require('./foresporsler/nye-kunder.component');
var kunde_liste_component_1 = require('./brukere/kunde-liste.component');
var tolk_liste_component_1 = require('./brukere/tolk-liste.component');
var opprett_tolk_component_1 = require('./opprett/opprett-tolk.component');
var admin_tolk_bestilling_oversikt_component_1 = require('./bestillinger/admin-tolk-bestilling-oversikt.component');
var admin_oversettelse_bestilling_oversikt_component_1 = require('./bestillinger/admin-oversettelse-bestilling-oversikt.component');
var admin_tolk_avbestillinger_oversikt_component_1 = require('./tolkehistorikk/admin-tolk-avbestillinger-oversikt.component');
var admin_tolk_utforte_oppdrag_component_1 = require('./tolkehistorikk/admin-tolk-utforte-oppdrag.component');
var admin_utforte_oversettelse_oppdrag_component_1 = require('./oversettelsehistorikk/admin-utforte-oversettelse-oppdrag.component');
var admin_avbestilte_oversettelse_oppdrag_component_1 = require('./oversettelsehistorikk/admin-avbestilte-oversettelse-oppdrag.component');
var opprett_kunde_component_1 = require('./opprett/opprett-kunde.component');
var opprett_bestilling_component_1 = require('./opprett/opprett-bestilling.component');
var opprett_oversettelse_component_1 = require('./opprett/opprett-oversettelse.component');
var appRoutes = [
    {
        path: '',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_guard_1.AuthGuard],
        data: { domene: 'admin' },
        children: [
            {
                path: '',
                children: [
                    { path: 'utdel', component: utdel_component_1.UtdelComponent },
                    { path: 'oversettelse', component: oversettelse_component_1.OversettelseComponent },
                    { path: 'oppdrag', component: oppdrag_component_1.OppdragComponent },
                    { path: 'nye_kunder', component: nye_kunder_component_1.NyeKunderComponent },
                    { path: 'kunder', component: kunde_liste_component_1.KundeListeComponent },
                    { path: 'tolk-liste', component: tolk_liste_component_1.TolkListeComponent },
                    { path: 'opprett-tolk', component: opprett_tolk_component_1.OpprettTolkComponent },
                    { path: 'admin-tolk-bestilling-oversikt', component: admin_tolk_bestilling_oversikt_component_1.AdminTolkBestillingOversiktComponent },
                    { path: 'admin-oversettelse-bestilling-oversikt', component: admin_oversettelse_bestilling_oversikt_component_1.AdminOversettelseBestillingOversiktComponent },
                    { path: 'admin-tolk-avbestillinger-oversikt', component: admin_tolk_avbestillinger_oversikt_component_1.AdminTolkAvbestillingerOversiktComponent },
                    { path: 'admin-tolk-utforte-oppdrag', component: admin_tolk_utforte_oppdrag_component_1.AdminTolkUtforteOppdragComponent },
                    { path: 'admin-utforte-oversettelse-oppdrag', component: admin_utforte_oversettelse_oppdrag_component_1.AdminUtforteOversettelseOppdragComponent },
                    { path: 'admin-avbestilte-oversettelse-oppdrag', component: admin_avbestilte_oversettelse_oppdrag_component_1.AdminAvbestilteOversettelseOppdragComponent },
                    { path: 'opprett-kunde', component: opprett_kunde_component_1.OpprettKundeComponent },
                    { path: 'opprett-bestilling', component: opprett_bestilling_component_1.OpprettBestillingComponent },
                    { path: 'opprett-oversettelse', component: opprett_oversettelse_component_1.OpprettOversettelseComponent },
                    { path: '', component: oppdrag_component_1.OppdragComponent }
                ]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
//# sourceMappingURL=admin-routing.module.js.map