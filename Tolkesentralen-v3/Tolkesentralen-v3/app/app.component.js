"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
<<<<<<< HEAD
=======
    AppComponent.prototype.ngOnInit = function () {
        this.bruker = JSON.parse(localStorage.getItem('currentUser'));
        this.sjekkBruker();
    };
    AppComponent.prototype.sjekkBruker = function () {
        if (this.bruker == null) {
            this.rolle = "ingen";
        }
        else {
            this.rolle = this.bruker.rolle;
        }
        console.log("ROOOOOOOOOOOOOOOOOOOOOOOOOOLLE: " + this.rolle);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<router-outlet></router-outlet>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
>>>>>>> 5a7073c528b434a9137ecd04b036a9fc65b35ee7
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<router-outlet></router-outlet>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map