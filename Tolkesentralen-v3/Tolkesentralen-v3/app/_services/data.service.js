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
var Subject_1 = require("rxjs/Subject");
=======
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
>>>>>>> 6a02ca237e57ae0ff40f538c86c764ca37c7aeda
var DataService = (function () {
    function DataService() {
        this.dataObs$ = new Subject_1.Subject();
    }
    DataService.prototype.getData = function () {
        console.log("serv -> get");
        return this.dataObs$;
    };
    DataService.prototype.updateData = function (data) {
        console.log("serv -> update");
        this.dataObs$.next(data);
    };
<<<<<<< HEAD
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
=======
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
>>>>>>> 6a02ca237e57ae0ff40f538c86c764ca37c7aeda
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map