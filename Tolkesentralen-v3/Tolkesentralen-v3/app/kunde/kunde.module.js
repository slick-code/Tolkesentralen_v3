"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var kunde_bestill_tolk_component_1 = require("./kunde-bestill-tolk.component");
var kunde_component_1 = require("./kunde.component");
var forms_1 = require("@angular/forms");
var kunde_routing_module_1 = require("./kunde-routing.module");
var kunde_bestill_oversettelse_component_1 = require("./kunde-bestill-oversettelse.component");
var kunde_list_alle_tolke_bestillinger_component_1 = require("./kunde-list-alle-tolke-bestillinger.component");
var kunde_list_alle_oversettelse_bestillinger_component_1 = require("./kunde-list-alle-oversettelse-bestillinger.component");
var kunde_tolke_historikk_component_1 = require("./kunde-tolke-historikk.component");
var kunde_oversettelse_historikk_component_1 = require("./kunde-oversettelse-historikk.component");
var kunde_endre_opplysninger_component_1 = require("./kunde-endre-opplysninger.component");
var kunde_endre_passord_component_1 = require("./kunde-endre-passord.component");
var shared_module_1 = require("../shared/shared.module");
var response_module_1 = require("../shared/response.module");
var KundeModule = (function () {
    function KundeModule() {
    }
    return KundeModule;
}());
KundeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            kunde_routing_module_1.KundeRoutingModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            shared_module_1.SharedModule,
            response_module_1.ResponseModule
        ],
        declarations: [
            kunde_component_1.KundeComponent,
            kunde_bestill_tolk_component_1.KundeBestillTolkComponent,
            kunde_bestill_oversettelse_component_1.KundeBestillOversettelseComponent,
            kunde_list_alle_tolke_bestillinger_component_1.KundeListAlleTolkeBestillingerComponent,
            kunde_list_alle_oversettelse_bestillinger_component_1.KundeListAlleOversettelseBestillingerComponent,
            kunde_tolke_historikk_component_1.KundeTolkeHistorikkComponent,
            kunde_oversettelse_historikk_component_1.KundeOversettelseHistorikkComponent,
            kunde_endre_opplysninger_component_1.KundeEndreOpplysningerComponent,
            kunde_endre_passord_component_1.KundeEndrePassordComponent
        ],
    })
], KundeModule);
exports.KundeModule = KundeModule;
