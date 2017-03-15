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
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../_services/auth.service");
var router_1 = require("@angular/router");
var models_1 = require("../_models/models");
var LoginComponent = (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.skjema = fb.group({
            // Skjekk om brukernavnet er en gyldig e-post adresse
            brukernavn: ["", forms_1.Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")],
            // Todo -> Begrensinger til passord
            passord: ["", forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authService.logout();
    };
    LoginComponent.prototype.getPath = function (nr) {
        var path = "";
        switch (nr) {
            case 1: return path = "/admin";
            case 2: return path = "/kunde";
            case 3: return path = "/tolk";
        }
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.loading = true;
        this.error = "";
        var ny = new models_1.Login();
        ny.email = this.skjema.value.brukernavn;
        ny.passord = this.skjema.value.passord;
        var body = JSON.stringify(ny);
        this.authService.login(body)
            .subscribe(function (retur) {
            _this.kunde = retur;
            console.log("her" + _this.kunde.passord + "hh " + retur.passord);
            _this.router.navigate([_this.getPath(retur.role)]);
        }, function (error) { _this.loading = false; console.log("Beklager, en feil har oppstått - " + error); }, function () { _this.loading = false; console.log("ferdig post-api/bestilling"); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/login/login.component.html',
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthenticationService,
        router_1.Router,
        forms_1.FormBuilder])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.comonent.js.map