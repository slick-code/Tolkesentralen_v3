"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TempService = (function () {
    function TempService() {
    }
    TempService.prototype.setObject = function (object) {
        this.object = object;
    };
    TempService.prototype.getObject = function () {
        return this.object;
    };
    return TempService;
}());
TempService = __decorate([
    core_1.Injectable()
], TempService);
exports.TempService = TempService;
