"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Observable Version
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var KundeService = (function () {
    function KundeService(http) {
        this.http = http;
        this.url = 'api/kunde/'; // URL to web API
    }
    KundeService.prototype.postKunde = function (body) {
        var headers = new http_2.Headers({ "Content-Type": "application/json" });
        return this.http.post(this.url, body, { headers: headers })
            .map(function (returData) { return returData.toString(); });
    };
    KundeService.prototype.getNyeKunder = function () {
        return this.http.get(this.url + "/GetN")
            .map(function (response) { return response.json(); });
    };
    KundeService.prototype.getKunder = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); });
    };
    KundeService.prototype.slettKunde = function (id) {
        return this.http.delete(this.url + id)
            .map(function (returData) { return returData.toString(); });
    };
    KundeService.prototype.godkjennKunde = function (id) {
        var headers = new http_2.Headers({ "Content-Type": "application/json" });
        return this.http.put(this.url + id, { headers: headers })
            .map(function (returData) { return returData.toString(); });
    };
    KundeService.prototype.SjekkOmEpostEksisterer = function (body) {
        var headers = new http_2.Headers({ "Content-Type": "application/json" });
        return this.http.post(this.url + "SjekkOmEpostEksisterer", body, { headers: headers })
            .map(function (res) { return res; });
    };
    return KundeService;
}());
KundeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], KundeService);
exports.KundeService = KundeService;
