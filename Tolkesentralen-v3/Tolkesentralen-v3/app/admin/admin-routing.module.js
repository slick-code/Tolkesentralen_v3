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
var oppdrag_component_1 = require('./oppdrag.component');
var oversettelse_component_1 = require('./oversettelse.component');
var utdel_component_1 = require('./utdel.component');
var nye_kunder_component_1 = require('./nye-kunder.component');
var kunde_liste_component_1 = require('./brukere/kunde-liste.component');
var appRoutes = [
    {
        path: '',
        component: admin_component_1.AdminComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'utdel', component: utdel_component_1.UtdelComponent },
                    { path: 'oversettelse', component: oversettelse_component_1.OversettelseComponent },
                    { path: 'oppdrag', component: oppdrag_component_1.OppdragComponent },
                    { path: 'nye_kunder', component: nye_kunder_component_1.NyeKunderComponent },
                    { path: 'kunder', component: kunde_liste_component_1.KundeListeComponent },
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