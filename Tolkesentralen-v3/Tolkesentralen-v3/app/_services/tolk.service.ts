import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/auth.service';
import { Tolk } from '../_models/models';

@Injectable()
export class TolkService {
    private url = 'api/tolk/';  // URL to web API

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getTolkMedSpraak(body: any): Observable<Tolk[]> {
        var headers = new Headers({ "Content-Type": "application/json" });
        
        return this.http.post(this.url + "returnTolk", body, { headers: headers })
            .map((response: Response) => response.json());
    }

    getTolk(id: number): Observable<Tolk> {
        return this.http.get(this.url + "GetTolk")
            .map((response: Response) => response.json());
    }

    updateTolk(body: any): Observable<Tolk> {
        var headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.url + "updateTolk", body, { headers: headers })
            .map((response: Response) => response.json());
    }

    postForesposler(body: any) {
        var headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.url + "PostForesposler", body, { headers: headers })
            .map(returData => returData.toString())
    }

    postSvar(body: any) {
        var headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.url + "PostSvar", body, { headers: headers })
            .map(returData => returData.toString())
    }
}
