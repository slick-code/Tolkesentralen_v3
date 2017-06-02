"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var response_component_1 = require("../shared/response.component");
var common_1 = require("@angular/common");
var ResponseModule = (function () {
    function ResponseModule() {
    }
    return ResponseModule;
}());
ResponseModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule],
        declarations: [response_component_1.ResponseComponent],
        providers: [],
        exports: [response_component_1.ResponseComponent]
    })
], ResponseModule);
exports.ResponseModule = ResponseModule;
