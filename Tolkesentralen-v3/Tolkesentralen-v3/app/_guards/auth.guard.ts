import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean{
        //let roles = route.data["role"];
        //console.log("ROLE: "+ roles);

        var innlogget = localStorage.getItem('currentUser');
        if (innlogget) {
            if (route.data["domene"] === (JSON.parse(innlogget).rolle)){
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
    }
}