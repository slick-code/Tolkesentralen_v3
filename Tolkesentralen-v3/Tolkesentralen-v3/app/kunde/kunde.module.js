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
var kunde_component_1 = require("./kunde.component");
var kunde_routing_module_1 = require("./kunde-routing.module");
var AdminModule = (function () {
    function AdminModule() {
    }
=======
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var bestill_tolk_component_1 = require('./bestill-tolk.component');
var kunde_component_1 = require('./kunde.component');
var forms_1 = require('@angular/forms');
var kunde_routing_module_1 = require('./kunde-routing.module');
var AdminModule = (function () {
    function AdminModule() {
    }
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
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
>>>>>>> 20ba562856c6a038ab6202bec96e0aa042cb4c38
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            kunde_routing_module_1.KundeRoutingModule
        ],
        declarations: [
            kunde_component_1.KundeComponent
        ],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=kunde.module.js.map