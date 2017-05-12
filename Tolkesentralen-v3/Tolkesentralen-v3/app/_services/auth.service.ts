import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser;// && currentUser.token;
    }

    
    login(body: any): Observable<any> {
        console.log("BOOODY "+JSON.parse(body));
        var headers = new Headers({ "Content-Type": "application/json" });
        console.log("ServiceLogin");
        return this.http.post('/api/login', body, { headers: headers })
            .map((response: Response) => response.json());
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}