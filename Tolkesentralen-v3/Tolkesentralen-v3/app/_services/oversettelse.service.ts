import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/auth.service';
import { Oppdrag, Oversettelse, OppdragOgKunde } from '../_models/models';

@Injectable()
export class OversettelseService {
    private url = 'api/oversettelse/';  // URL to web API

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    postOversettelseAnonym(body: any) {
        var headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.url, body, { headers: headers })
            .map(returData => returData.toString())
    }

    postOversettelseKunde(body: any) {
        var headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.url + "PostOppdragFraKunde", body, { headers: headers })
            .map(returData => returData.toString())
    }
    
    getUbehandleOversettelser(): Observable<Oppdrag[]> {
        return this.http.get(this.url + "GetUbehandlet")
            .map((response: Response) => response.json());
    }

    getOversettelserTilKunde(id: number): Observable<Oversettelse[]> {
        return this.http.get(this.url + id)
            .map((response: Response) => response.json());
    }
}