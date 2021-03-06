"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var tolk_component_1 = require("./tolk.component");
var auth_guard_1 = require("../_guards/auth.guard");
var tolk_mine_oppdrag_component_1 = require("./tolk-mine-oppdrag.component");
var tolk_foresporsel_component_1 = require("./tolk-foresporsel.component");
var tolk_oppdrag_historikk_component_1 = require("./tolk-oppdrag-historikk.component");
var tolk_sett_tilgjenglighet_component_1 = require("./tolk-sett-tilgjenglighet.component");
var tolk_redigjer_persondetaljer_component_1 = require("./tolk-redigjer-persondetaljer.component");
var tolk_endre_passord_component_1 = require("./tolk-endre-passord.component");
var appRoutes = [
    {
        path: '',
        component: tolk_component_1.TolkComponent,
        canActivate: [auth_guard_1.AuthGuard],
        data: { domene: 'tolk' },
        children: [
            { path: '', redirectTo: 'tolk-foresporsel', pathMatch: 'full' },
            { path: 'tolk-mine-oppdrag', component: tolk_mine_oppdrag_component_1.TolkMineOppdragComponent },
            { path: 'tolk-foresporsel', component: tolk_foresporsel_component_1.TolkForesporselComponent },
            { path: 'tolk-oppdrag-historikk', component: tolk_oppdrag_historikk_component_1.TolkOppdragHistorikkComponent },
            { path: 'tolk-sett-tilgjenglighet', component: tolk_sett_tilgjenglighet_component_1.TolkSettTilgjenglighetComponent },
            { path: 'tolk-redigjer-persondetaljer', component: tolk_redigjer_persondetaljer_component_1.TolkRedigjerPersondetaljerComponent },
            { path: 'tolk-endre-passord', component: tolk_endre_passord_component_1.TolkEndrePassordComponent }
        ]
    }
];
var TolkRoutingModule = (function () {
    function TolkRoutingModule() {
    }
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
exports.TolkRoutingModule = TolkRoutingModule;
