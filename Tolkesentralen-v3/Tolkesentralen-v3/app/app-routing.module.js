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
var router_1 = require('@angular/router');
var not_found_component_1 = require('./shared/not-found.component');
var login_comonent_1 = require('./login/login.comonent');
var auth_guard_1 = require('./_guards/auth.guard');
var selective_preloading_strategy_1 = require('./_services/selective-preloading-strategy');
var appRoutes = [
    { path: 'login', component: login_comonent_1.LoginComponent },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canActivate: [auth_guard_1.AuthGuard],
    },
    {
        path: 'kunde',
        loadChildren: 'app/kunde/kunde.module#AdminModule'
    },
    {
        path: 'tolk',
        loadChildren: 'app/tolk/tolk.module#AdminModule'
    },
    {
        path: 'home', redirectTo: ''
    },
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { preloadingStrategy: selective_preloading_strategy_1.SelectivePreloadingStrategy })
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: [
                selective_preloading_strategy_1.SelectivePreloadingStrategy
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map