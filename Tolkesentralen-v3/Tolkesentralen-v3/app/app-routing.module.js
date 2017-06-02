"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var not_found_component_1 = require("./shared/not-found.component");
var login_comonent_1 = require("./login/login.comonent");
var appRoutes = [
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
        //loadChildren: 'app/animate/animate.module#AnimateModule'
    },
    { path: 'login', component: login_comonent_1.LoginComponent },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
    },
    {
        path: 'kunde',
        loadChildren: 'app/kunde/kunde.module#KundeModule'
    },
    {
        path: 'tolk',
        loadChildren: 'app/tolk/tolk.module#TolkModule'
    },
    {
        path: 'home', redirectTo: ''
    },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes) // { preloadingStrategy: SelectivePreloadingStrategy })
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: []
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
