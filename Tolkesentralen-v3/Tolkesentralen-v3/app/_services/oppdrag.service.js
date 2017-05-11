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
var auth_service_1 = require('../_services/auth.service');
var OppdragService = (function () {
    function OppdragService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
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
    OppdragService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthenticationService])
    ], OppdragService);
    return OppdragService;
}());
exports.OppdragService = OppdragService;
//# sourceMappingURL=oppdrag.service.js.map