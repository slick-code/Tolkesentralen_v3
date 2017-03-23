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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var auth_service_1 = require('./_services/auth.service');
var auth_guard_1 = require('./_guards/auth.guard');
var oppdrag_service_1 = require('./_services/oppdrag.service');
var temp_service_1 = require('./_services/temp.service');
var data_service_1 = require('./_services/data.service');
var kunde_service_1 = require('./_services/kunde.service');
var http_1 = require('@angular/http');
var login_comonent_1 = require('./login/login.comonent');
var not_found_component_1 = require('./shared/not-found.component');
var shared_module_1 = require('./shared/shared.module');
var AppModule = (function () {
    function AppModule(router) {
        // HUSK: Fjern denne!!
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, shared_module_1.SharedModule],
            declarations: [app_component_1.AppComponent, login_comonent_1.LoginComponent, not_found_component_1.PageNotFoundComponent],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                auth_guard_1.AuthGuard,
                auth_service_1.AuthenticationService,
                oppdrag_service_1.OppdragService,
                temp_service_1.TempService,
                data_service_1.DataService,
                kunde_service_1.KundeService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map