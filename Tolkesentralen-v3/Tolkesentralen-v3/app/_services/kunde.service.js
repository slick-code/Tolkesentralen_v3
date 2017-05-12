"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Observable Version
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
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
            .map(function (res) { return res.json(); });
    };
    KundeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], KundeService);
    return KundeService;
}());
exports.KundeService = KundeService;
//# sourceMappingURL=kunde.service.js.map