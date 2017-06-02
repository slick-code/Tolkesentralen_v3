"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var animate_component_1 = require("./animate.component");
var appRoutes = [
    {
        path: '',
        component: animate_component_1.AnimateComponent,
        children: []
    }
];
var AnimateRoutingModule = (function () {
    function AnimateRoutingModule() {
    }
    return AnimateRoutingModule;
}());
AnimateRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(appRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AnimateRoutingModule);
exports.AnimateRoutingModule = AnimateRoutingModule;
