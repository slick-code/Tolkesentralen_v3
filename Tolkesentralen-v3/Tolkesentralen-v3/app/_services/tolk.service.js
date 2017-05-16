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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var auth_service_1 = require("../_services/auth.service");
var TolkService = (function () {
    function TolkService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.url = 'api/tolk/'; // URL to web API
    }
    TolkService.prototype.getTolkMedSpraak = function (body) {
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.post(this.url + "returnTolk", body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    TolkService.prototype.getTolk = function (id) {
        return this.http.get(this.url + "GetTolk/" + id)
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
    __metadata("design:paramtypes", [http_1.Http,
        auth_service_1.AuthenticationService])
], TolkService);
exports.TolkService = TolkService;
//# sourceMappingURL=tolk.service.js.map