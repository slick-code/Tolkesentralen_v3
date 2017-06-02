"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spraak_1 = require("../_models/spraak");
var PraktiskService = (function () {
    function PraktiskService() {
    }
    PraktiskService.prototype.getSpraak = function (i) {
        return new spraak_1.Spraak().liste[i].spraak;
    };
    return PraktiskService;
}());
PraktiskService = __decorate([
    core_1.Injectable()
], PraktiskService);
exports.PraktiskService = PraktiskService;
