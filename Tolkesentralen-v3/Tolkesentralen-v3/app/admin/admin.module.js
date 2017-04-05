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
var common_1 = require('@angular/common');
var admin_component_1 = require('./admin.component');
var oppdrag_component_1 = require('./oppdrag.component');
var oversettelse_component_1 = require('./oversettelse.component');
var utdel_component_1 = require('./utdel.component');
var nye_kunder_component_1 = require('./nye-kunder.component');
var kunde_liste_component_1 = require('./brukere/kunde-liste.component');
var admin_routing_module_1 = require('./admin-routing.module');
var shared_module_1 = require('../shared/shared.module');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                admin_routing_module_1.AdminRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                admin_component_1.AdminComponent,
                oppdrag_component_1.OppdragComponent,
                oversettelse_component_1.OversettelseComponent,
                utdel_component_1.UtdelComponent,
                nye_kunder_component_1.NyeKunderComponent,
                kunde_liste_component_1.KundeListeComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map