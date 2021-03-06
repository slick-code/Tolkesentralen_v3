﻿import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Oppdrag, Oversettelse, OppdragOgKunde } from '../_models/models';

@Injectable()
export class OversettelseService {
    private url = 'api/oversettelse/';  // URL to web API

    constructor(private http: Http) { }

    postOversettelseOgKunde(body: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');

        return this.http.post(this.url + "/PostOversettelseOgKunde", body, { headers: headers })
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