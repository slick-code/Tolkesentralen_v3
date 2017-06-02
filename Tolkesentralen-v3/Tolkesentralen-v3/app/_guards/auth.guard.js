"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        //let roles = route.data["role"];
        //console.log("ROLE: "+ roles);
        var innlogget = localStorage.getItem('currentUser');
        if (innlogget) {
            if (route.data["domene"] === (JSON.parse(innlogget).rolle)) {
                return true;
            }
            ///route.data["role"].equals(JSON.parse(localStorage.getItem('currentUser')).rolle)
            //JSON.parse(innlogget);
            //console.log("ObjectU " + JSON.parse(localStorage.getItem('currentUser')).rolle);
            //console.log("User "+localStorage.getItem('currentUser').toString());
            // logged in so return true
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;
