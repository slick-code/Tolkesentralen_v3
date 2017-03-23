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

    postOversettelse(body: any) {
        var headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.url, body, { headers: headers })
            .map(returData => returData.toString())
    }

    //postOppdrag(body: any, id: number) {
    //    var headers = new Headers({ "Content-Type": "application/json" });

    //    return this.http.post(this.url+"/"+id, body, { headers: headers })
    //        .map(returData => returData.toString())
    //}
    postOppdragFraKunde(body: any) {
        var headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.url +"/PostOppdragFraKunde", body, { headers: headers })
            .map(returData => returData.toString())
    }


    getOversettelser(): Observable<Oversettelse[]> {
        return this.http.get(this.url)
            .map((response: Response) => response.json());
    }

    getOversettelserTilKunde(id: number): Observable<Oversettelse[]> {
        return this.http.get(this.url+id)
            .map((response: Response) => response.json());
    }

    getOppdrag(): Observable<Oppdrag[]> {
        return this.http.get(this.url)
            .map((response: Response) => response.json());
    }

    getOppdragTilKunde(id: number): Observable<Oppdrag[]> {
        return this.http.get(this.url)
            .map((response: Response) => response.json());
    }

    //getOppdrag(): Observable<Oppdrag[]> {
    //    // add authorization header with jwt token
    //    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    //    let options = new RequestOptions({ headers: headers });

    //    // get users from api
    //    return this.http.get('/api/oppdrag', options)
    //        .map((response: Response) => response.json());
    //}

    //getOversettelser(): Observable<Oppdrag[]> {
    //    // add authorization header with jwt token
    //    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    //    let options = new RequestOptions({ headers: headers });

    //    // get users from api
    //    return this.http.get('/api/getOversettelser', options)
    //        .map((response: Response) => response.json());
    //}

    //getListeTolk(): Observable<Tolk[]> {
    //    // add authorization header with jwt token
    //    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    //    let options = new RequestOptions({ headers: headers });

    //    // get users from api
    //    return this.http.get('/api/getListeTolk', options)
    //        .map((response: Response) => response.json());
    //}
}