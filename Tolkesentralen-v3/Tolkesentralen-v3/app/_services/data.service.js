"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var DataService = (function () {
    function DataService() {
        this.dataObs$ = new Subject_1.Subject();
    }
    DataService.prototype.getData = function () {
        return this.dataObs$;
    };
    DataService.prototype.updateData = function (data) {
        this.dataObs$.next(data);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
