"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var OppdragService = (function () {
    function OppdragService(http) {
        this.http = http;
        this.url = 'api/oppdrag/'; // URL to web API
    }
    OppdragService.prototype.postOppdragOgKunde = function (body) {
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.post(this.url + "/PostOppdragogKunde", body, { headers: headers })
            .map(function (returData) { return returData.toString(); });
    };
    OppdragService.prototype.postOppdragFraKunde = function (body) {
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.post(this.url + "/PostOppdragFraKunde", body, { headers: headers })
            .map(function (returData) { return returData.toString(); });
    };
    OppdragService.prototype.getUbehandleOppdrag = function () {
        return this.http.get(this.url + "GetUbehandlet")
            .map(function (response) { return response.json(); });
    };
    OppdragService.prototype.getBehandleOppdrag = function () {
        return this.http.get(this.url + "GetBehandlet")
            .map(function (response) { return response.json(); });
    };
    OppdragService.prototype.getOppdragTilKunde = function (id) {
        return this.http.get(this.url + id)
            .map(function (response) { return response.json(); });
    };
    OppdragService.prototype.getForesposelTilTolk = function (id) {
        return this.http.get(this.url + "GetForesposlerTilTolk/" + id)
            .map(function (response) { return response.json(); });
    };
    OppdragService.prototype.getBestillingerTilTolk = function (id) {
        return this.http.get(this.url + "GetBestillingerTilTolk/" + id)
            .map(function (response) { return response.json(); });
    };
    OppdragService.prototype.getForesposelSendt = function () {
        return this.http.get(this.url + "GetForesposlerSendt/")
            .map(function (response) { return response.json(); });
    };
    OppdragService.prototype.getGetBestillinger = function () {
        return this.http.get(this.url + "GetBestillinger/")
            .map(function (response) { return response.json(); });
    };
    OppdragService.prototype.slettOppdrag = function (id) {
        return this.http.delete(this.url + id)
            .map(function (returData) { return returData.toString(); });
    };
    return OppdragService;
}());
OppdragService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OppdragService);
exports.OppdragService = OppdragService;
