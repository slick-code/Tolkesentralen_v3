"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
//# sourceMappingURL=praktisk.service.js.map