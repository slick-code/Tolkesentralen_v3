import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/auth.service';
import { Oppdrag, Oversettelse, OppdragOgKunde } from '../_models/models';

@Injectable()
export class OppdragService {
    private url = 'api/oppdrag/';  // URL to web API

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    postOppdragFraKunde(body: any) {
        var headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.url +"/PostOppdragFraKunde", body, { headers: headers })
            .map(returData => returData.toString())
    }

    getUbehandleOppdrag(): Observable<Oppdrag[]> {
        return this.http.get(this.url +"GetUbehandlet")
            .map((response: Response) => response.json());
    }

    getOppdragTilKunde(id: number): Observable<Oppdrag[]> {
        return this.http.get(this.url+id)
            .map((response: Response) => response.json());
    }
}