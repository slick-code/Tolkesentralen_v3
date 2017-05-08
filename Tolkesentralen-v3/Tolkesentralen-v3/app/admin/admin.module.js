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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var admin_component_1 = require("./admin.component");
var oppdrag_component_1 = require("./foresporsler/oppdrag.component");
var oversettelse_component_1 = require("./foresporsler/oversettelse.component");
var utdel_component_1 = require("./foresporsler/utdel.component");
var nye_kunder_component_1 = require("./foresporsler/nye-kunder.component");
var kunde_liste_component_1 = require("./brukere/kunde-liste.component");
var tolk_liste_component_1 = require("./brukere/tolk-liste.component");
var opprett_tolk_component_1 = require("./opprett/opprett-tolk.component");
var admin_tolk_bestilling_oversikt_component_1 = require("./bestillinger/admin-tolk-bestilling-oversikt.component");
var admin_oversettelse_bestilling_oversikt_component_1 = require("./bestillinger/admin-oversettelse-bestilling-oversikt.component");
var admin_tolk_avbestillinger_oversikt_component_1 = require("./tolkehistorikk/admin-tolk-avbestillinger-oversikt.component");
var admin_tolk_utforte_oppdrag_component_1 = require("./tolkehistorikk/admin-tolk-utforte-oppdrag.component");
var admin_utforte_oversettelse_oppdrag_component_1 = require("./oversettelsehistorikk/admin-utforte-oversettelse-oppdrag.component");
var admin_avbestilte_oversettelse_oppdrag_component_1 = require("./oversettelsehistorikk/admin-avbestilte-oversettelse-oppdrag.component");
var opprett_kunde_component_1 = require("./opprett/opprett-kunde.component");
var opprett_bestilling_component_1 = require("./opprett/opprett-bestilling.component");
var opprett_oversettelse_component_1 = require("./opprett/opprett-oversettelse.component");
var admin_routing_module_1 = require("./admin-routing.module");
var shared_module_1 = require("../shared/shared.module");
var AdminModule = (function () {
    function AdminModule() {
    }
=======
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var admin_component_1 = require('./admin.component');
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
var response_module_1 = require('../shared/response.module');
var admin_routing_module_1 = require('./admin-routing.module');
var shared_module_1 = require('../shared/shared.module');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                admin_routing_module_1.AdminRoutingModule,
                shared_module_1.SharedModule,
                response_module_1.ResponseModule
            ],
            declarations: [
                admin_component_1.AdminComponent,
                oppdrag_component_1.OppdragComponent,
                oversettelse_component_1.OversettelseComponent,
                utdel_component_1.UtdelComponent,
                nye_kunder_component_1.NyeKunderComponent,
                kunde_liste_component_1.KundeListeComponent,
                tolk_liste_component_1.TolkListeComponent,
                opprett_tolk_component_1.OpprettTolkComponent,
                admin_tolk_bestilling_oversikt_component_1.AdminTolkBestillingOversiktComponent,
                admin_oversettelse_bestilling_oversikt_component_1.AdminOversettelseBestillingOversiktComponent,
                admin_tolk_avbestillinger_oversikt_component_1.AdminTolkAvbestillingerOversiktComponent,
                admin_tolk_utforte_oppdrag_component_1.AdminTolkUtforteOppdragComponent,
                admin_utforte_oversettelse_oppdrag_component_1.AdminUtforteOversettelseOppdragComponent,
                admin_avbestilte_oversettelse_oppdrag_component_1.AdminAvbestilteOversettelseOppdragComponent,
                opprett_kunde_component_1.OpprettKundeComponent,
                opprett_bestilling_component_1.OpprettBestillingComponent,
                opprett_oversettelse_component_1.OpprettOversettelseComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
>>>>>>> 5a7073c528b434a9137ecd04b036a9fc65b35ee7
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            admin_routing_module_1.AdminRoutingModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            admin_component_1.AdminComponent,
            oppdrag_component_1.OppdragComponent,
            oversettelse_component_1.OversettelseComponent,
            utdel_component_1.UtdelComponent,
            nye_kunder_component_1.NyeKunderComponent,
            kunde_liste_component_1.KundeListeComponent,
            tolk_liste_component_1.TolkListeComponent,
            opprett_tolk_component_1.OpprettTolkComponent,
            admin_tolk_bestilling_oversikt_component_1.AdminTolkBestillingOversiktComponent,
            admin_oversettelse_bestilling_oversikt_component_1.AdminOversettelseBestillingOversiktComponent,
            admin_tolk_avbestillinger_oversikt_component_1.AdminTolkAvbestillingerOversiktComponent,
            admin_tolk_utforte_oppdrag_component_1.AdminTolkUtforteOppdragComponent,
            admin_utforte_oversettelse_oppdrag_component_1.AdminUtforteOversettelseOppdragComponent,
            admin_avbestilte_oversettelse_oppdrag_component_1.AdminAvbestilteOversettelseOppdragComponent,
            opprett_kunde_component_1.OpprettKundeComponent,
            opprett_bestilling_component_1.OpprettBestillingComponent,
            opprett_oversettelse_component_1.OpprettOversettelseComponent
        ],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map