"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
<<<<<<< HEAD
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var bestill_tolk_component_1 = require('./bestill-tolk.component');
var kunde_component_1 = require('./kunde.component');
var forms_1 = require('@angular/forms');
var kunde_routing_module_1 = require('./kunde-routing.module');
var bestill_oversettelse_component_1 = require('./bestill-oversettelse.component');
var list_bestillinger_component_1 = require('./list-bestillinger.component');
var shared_module_1 = require('../shared/shared.module');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                kunde_routing_module_1.KundeRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                kunde_component_1.KundeComponent,
                bestill_tolk_component_1.BestillTolkComponent,
                bestill_oversettelse_component_1.BestillOversettelseComponent,
                list_bestillinger_component_1.ListBestillingerComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
=======
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var bestill_tolk_component_1 = require("./bestill-tolk.component");
var kunde_component_1 = require("./kunde.component");
var forms_1 = require("@angular/forms");
var kunde_routing_module_1 = require("./kunde-routing.module");
var AdminModule = (function () {
    function AdminModule() {
    }
>>>>>>> 59154ed1df73281bfd747f8bd238cd8d0a801e44
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            kunde_routing_module_1.KundeRoutingModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            kunde_component_1.KundeComponent,
            bestill_tolk_component_1.BestillTolkComponent
        ],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=kunde.module.js.map