"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
=======
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
>>>>>>> 6a02ca237e57ae0ff40f538c86c764ca37c7aeda
var TempService = (function () {
    function TempService() {
    }
    TempService.prototype.setObject = function (object) {
        this.object = object;
    };
    TempService.prototype.getObject = function () {
        return this.object;
    };
<<<<<<< HEAD
    return TempService;
}());
TempService = __decorate([
    core_1.Injectable()
], TempService);
=======
    TempService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TempService);
    return TempService;
}());
>>>>>>> 6a02ca237e57ae0ff40f538c86c764ca37c7aeda
exports.TempService = TempService;
//# sourceMappingURL=temp.service.js.map