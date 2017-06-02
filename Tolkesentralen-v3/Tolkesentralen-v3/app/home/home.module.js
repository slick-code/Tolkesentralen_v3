"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_routing_module_1 = require("./home-routing.module");
var index_component_1 = require("./index.component");
var home_component_1 = require("./home.component");
var registrer_component_1 = require("./registrer.component");
var bestill_oversettelse_component_1 = require("./bestill-oversettelse.component");
var bestill_tolk_component_1 = require("./bestill-tolk.component");
var info_om_oss_component_1 = require("./info/info-om-oss.component");
var info_oversettelse_component_1 = require("./info/info-oversettelse.component");
var info_tolk_component_1 = require("./info/info-tolk.component");
var shared_module_1 = require("../shared/shared.module");
var forms_1 = require("@angular/forms");
var response_module_1 = require("../shared/response.module");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            home_routing_module_1.HomeRoutingModule, shared_module_1.SharedModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, response_module_1.ResponseModule
        ],
        declarations: [
            home_component_1.HomeComponent,
            registrer_component_1.RegistrerComponent,
            bestill_oversettelse_component_1.BestillOversettelseComponent,
            bestill_tolk_component_1.BestillTolkComponent,
            index_component_1.IndexComponent,
            info_om_oss_component_1.InfoOmOssComponent,
            info_oversettelse_component_1.InfoOversettelseComponent,
            info_tolk_component_1.InfoTolkComponent
        ]
        //bootstrap: [ AppComponent ]
    })
], HomeModule);
exports.HomeModule = HomeModule;
