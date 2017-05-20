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
var forms_1 = require('@angular/forms');
var login_service_1 = require('../_services/login.service');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.skjema = fb.group({
            // Skjekk om brukernavnet er en gyldig e-post adresse
            brukernavn: ["", forms_1.Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")],
            // Todo -> Begrensinger til passord, forløping velegnet til testing
            passord: ["", forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{4,30}")]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authService.logout();
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.loading = true;
        this.error = "";
        var body = JSON.stringify({ brukernavn: this.skjema.value.brukernavn, passord: this.skjema.value.passord });
        this.authService.login(body)
            .subscribe(function (response) {
            _this.loading = false;
            localStorage.setItem('id', JSON.stringify(response.id)); // TODO: Fjern denne
            localStorage.setItem('currentUser', JSON.stringify(response));
            _this.router.navigate(["/" + response.rolle]);
        }, function (error) {
            _this.loading = false;
            if (error.status == 401) {
                _this.error = "Feil brukernavn eller passord";
            }
            else {
                _this.error = "Noe gikk galt";
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/login/login.component.html',
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.comonent.js.map