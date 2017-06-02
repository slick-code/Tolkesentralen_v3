"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
        this.url = 'api/admin/'; // URL to web API
    }
    AdminService.prototype.getUbehandleOppdrag = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); });
    };
    return AdminService;
}());
AdminService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AdminService);
exports.AdminService = AdminService;
