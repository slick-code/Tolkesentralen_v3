"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ResponseComponent = (function () {
    function ResponseComponent() {
    }
    return ResponseComponent;
}());
__decorate([
    core_1.Input('response'),
    __metadata("design:type", String)
], ResponseComponent.prototype, "response", void 0);
__decorate([
    core_1.Input('responseText'),
    __metadata("design:type", String)
], ResponseComponent.prototype, "responseText", void 0);
__decorate([
    core_1.Input('underText'),
    __metadata("design:type", String)
], ResponseComponent.prototype, "underText", void 0);
__decorate([
    core_1.Input('path'),
    __metadata("design:type", String)
], ResponseComponent.prototype, "path", void 0);
ResponseComponent = __decorate([
    core_1.Component({
        selector: 'response',
        templateUrl: "./app/shared/response.component.html",
    })
], ResponseComponent);
exports.ResponseComponent = ResponseComponent;
