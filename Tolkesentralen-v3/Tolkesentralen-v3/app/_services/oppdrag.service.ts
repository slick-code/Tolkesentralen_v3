import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/auth.service';
import { Oppdrag, OppdragOgKunde } from '../_models/models';

@Injectable()
export class OppdragService {
    private url = 'api/oppdrag/';  // URL to web API

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }



    postOppdragOgKunde(body: any) {
        var headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.url + "/PostOppdragogKunde", body, { headers: headers })
            .map(returData => returData.toString())
    }
   
    postOppdragFraKunde(body: any) {
        var headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.url +"/PostOppdragFraKunde", body, { headers: headers })
            .map(returData => returData.toString())
    }

    getUbehandleOppdrag(): Observable<OppdragOgKunde[]> {
        return this.http.get(this.url +"GetUbehandlet")
            .map((response: Response) => response.json());
    }

    getBehandleOppdrag(): Observable<OppdragOgKunde[]> {
        return this.http.get(this.url + "GetBehandlet")
            .map((response: Response) => response.json());
    }

    getOppdragTilKunde(id: number): Observable<Oppdrag[]> {
        return this.http.get(this.url+id)
            .map((response: Response) => response.json());
    }

    getForesposelTilTolk(id: number): Observable<Oppdrag[]> {
        return this.http.get(this.url + "GetForesposlerTilTolk/" + id)
            .map((response: Response) => response.json());
    }

    getBestillingerTilTolk(id: number): Observable<Oppdrag[]> {
        return this.http.get(this.url + "GetBestillingerTilTolk/" + id)
            .map((response: Response) => response.json());
    }

    getForesposelSendt(): Observable<Oppdrag[]> {
        return this.http.get(this.url + "GetForesposlerSendt/")
            .map((response: Response) => response.json());
    }
    
    getGetBestillinger(): Observable<OppdragOgKunde[]> {
        return this.http.get(this.url + "GetBestillinger/")
            .map((response: Response) => response.json());
    }

    slettOppdrag(id: number) {
        return this.http.delete(this.url + id)
            .map(returData => returData.toString())
    }
}