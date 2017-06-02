"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var loading_component_1 = require("./loading.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule],
        declarations: [loading_component_1.LoadingComponent],
        providers: [],
        exports: [loading_component_1.LoadingComponent]
    })
], SharedModule);
exports.SharedModule = SharedModule;
