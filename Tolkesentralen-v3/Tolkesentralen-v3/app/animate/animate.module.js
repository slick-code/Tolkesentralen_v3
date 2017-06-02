"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var animate_routing_module_1 = require("./animate-routing.module");
var animate_component_1 = require("./animate.component");
var AnimateModule = (function () {
    function AnimateModule() {
    }
    return AnimateModule;
}());
AnimateModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, animate_routing_module_1.AnimateRoutingModule
        ],
        declarations: [
            animate_component_1.AnimateComponent
        ]
        //bootstrap: [ AppComponent ]
    })
], AnimateModule);
exports.AnimateModule = AnimateModule;
