"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TolkService = (function () {
    function TolkService(http) {
        this.http = http;
        this.url = 'api/tolk/'; // URL to web API
    }
    TolkService.prototype.getTolkMedSpraak = function (id) {
        return this.http.get(this.url + "GetTolker/" + id)
            .map(function (response) { return response.json(); });
    };
    TolkService.prototype.getTolk = function (id) {
        return this.http.get(this.url + "GetTolk/" + id)
            .map(function (response) { return response.json(); });
    };
    TolkService.prototype.getAlle = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); });
    };
    TolkService.prototype.updateTolk = function (body) {
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.post(this.url + "updateTolk", body, { headers: headers })
            .map(function (returData) { return returData.toString(); });
    };
    TolkService.prototype.postForesposler = function (body) {
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.post(this.url + "PostForesposler", body, { headers: headers })
            .map(function (returData) { return returData.toString(); });
    };
    TolkService.prototype.postSvar = function (body) {
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.post(this.url + "PostSvar", body, { headers: headers })
            .map(function (returData) { return returData.toString(); });
    };
    TolkService.prototype.postUtilgjengelig = function (body) {
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.post(this.url + "PostUtilgjengelig", body, { headers: headers })
            .map(function (returData) { return returData.toString(); });
    };
    TolkService.prototype.GetPerioderUtilgjenelig = function (id) {
        return this.http.get(this.url + "GetPerioderUtilgjenelig/" + id)
            .map(function (response) { return response.json(); });
    };
    TolkService.prototype.slettPeriodeUtilgjengelig = function (id) {
        return this.http.delete(this.url + id)
            .map(function (returData) { return returData.toString(); });
    };
    return TolkService;
}());
TolkService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TolkService);
exports.TolkService = TolkService;
