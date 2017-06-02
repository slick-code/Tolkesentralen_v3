"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var tolk_component_1 = require("./tolk.component");
var tolk_routing_module_1 = require("./tolk-routing.module");
var tolk_mine_oppdrag_component_1 = require("./tolk-mine-oppdrag.component");
var tolk_foresporsel_component_1 = require("./tolk-foresporsel.component");
var tolk_oppdrag_historikk_component_1 = require("./tolk-oppdrag-historikk.component");
var tolk_sett_tilgjenglighet_component_1 = require("./tolk-sett-tilgjenglighet.component");
var tolk_redigjer_persondetaljer_component_1 = require("./tolk-redigjer-persondetaljer.component");
var tolk_endre_passord_component_1 = require("./tolk-endre-passord.component");
var response_module_1 = require("../shared/response.module");
var TolkModule = (function () {
    function TolkModule() {
    }
    return TolkModule;
}());
TolkModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            tolk_routing_module_1.TolkRoutingModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            shared_module_1.SharedModule,
            response_module_1.ResponseModule
        ],
        declarations: [
            tolk_component_1.TolkComponent,
            tolk_mine_oppdrag_component_1.TolkMineOppdragComponent,
            tolk_foresporsel_component_1.TolkForesporselComponent,
            tolk_oppdrag_historikk_component_1.TolkOppdragHistorikkComponent,
            tolk_sett_tilgjenglighet_component_1.TolkSettTilgjenglighetComponent,
            tolk_redigjer_persondetaljer_component_1.TolkRedigjerPersondetaljerComponent,
            tolk_endre_passord_component_1.TolkEndrePassordComponent
        ],
    })
], TolkModule);
exports.TolkModule = TolkModule;
