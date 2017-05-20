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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
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
    OversettelseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OversettelseService);
    return OversettelseService;
}());
exports.OversettelseService = OversettelseService;
//# sourceMappingURL=oversettelse.service.js.map