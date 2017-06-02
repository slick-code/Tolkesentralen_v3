"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var OversettelseService = (function () {
    function OversettelseService(http) {
        this.http = http;
        this.url = 'api/oversettelse/'; // URL to web API
    }
    OversettelseService.prototype.postOversettelseOgKunde = function (body) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return this.http.post(this.url + "/PostOversettelseOgKunde", body, { headers: headers })
            .map(function (returData) { return returData.toString(); });
    };
    OversettelseService.prototype.postOversettelseKunde = function (body) {
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.post(this.url + "PostOppdragFraKunde", body, { headers: headers })
            .map(function (returData) { return returData.toString(); });
    };
    OversettelseService.prototype.getUbehandleOversettelser = function () {
        return this.http.get(this.url + "GetUbehandlet")
            .map(function (response) { return response.json(); });
    };
    OversettelseService.prototype.getOversettelserTilKunde = function (id) {
        return this.http.get(this.url + id)
            .map(function (response) { return response.json(); });
    };
    return OversettelseService;
}());
OversettelseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OversettelseService);
exports.OversettelseService = OversettelseService;
