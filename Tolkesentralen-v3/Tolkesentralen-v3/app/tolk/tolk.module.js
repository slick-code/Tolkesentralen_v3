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
var forms_1 = require('@angular/forms');
var shared_module_1 = require('../shared/shared.module');
var tolk_component_1 = require('./tolk.component');
var tolk_routing_module_1 = require('./tolk-routing.module');
var tolk_mine_oppdrag_component_1 = require('./tolk-mine-oppdrag.component');
var tolk_foresporsel_component_1 = require('./tolk-foresporsel.component');
var tolk_oppdrag_historikk_component_1 = require('./tolk-oppdrag-historikk.component');
var tolk_sett_tilgjenglighet_component_1 = require('./tolk-sett-tilgjenglighet.component');
var tolk_redigjer_persondetaljer_component_1 = require('./tolk-redigjer-persondetaljer.component');
var tolk_endre_passord_component_1 = require('./tolk-endre-passord.component');
var TolkModule = (function () {
    function TolkModule() {
    }
    TolkModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                tolk_routing_module_1.TolkRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                shared_module_1.SharedModule
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
        }), 
        __metadata('design:paramtypes', [])
    ], TolkModule);
    return TolkModule;
}());
exports.TolkModule = TolkModule;
//# sourceMappingURL=tolk.module.js.map