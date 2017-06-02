"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<router-outlet></router-outlet>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
