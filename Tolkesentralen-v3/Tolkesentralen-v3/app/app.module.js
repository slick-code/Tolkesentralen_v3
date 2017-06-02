"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var login_service_1 = require("./_services/login.service");
var auth_guard_1 = require("./_guards/auth.guard");
var oppdrag_service_1 = require("./_services/oppdrag.service");
var temp_service_1 = require("./_services/temp.service");
var data_service_1 = require("./_services/data.service");
var kunde_service_1 = require("./_services/kunde.service");
var http_1 = require("@angular/http");
var login_comonent_1 = require("./login/login.comonent");
var not_found_component_1 = require("./shared/not-found.component");
var shared_module_1 = require("./shared/shared.module");
var animate_module_1 = require("./animate/animate.module");
var AppModule = (function () {
    function AppModule(router) {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, shared_module_1.SharedModule, animate_module_1.AnimateModule],
        declarations: [app_component_1.AppComponent, login_comonent_1.LoginComponent, not_found_component_1.PageNotFoundComponent],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            auth_guard_1.AuthGuard,
            login_service_1.LoginService,
            oppdrag_service_1.OppdragService,
            temp_service_1.TempService,
            data_service_1.DataService,
            kunde_service_1.KundeService,
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppModule);
exports.AppModule = AppModule;
