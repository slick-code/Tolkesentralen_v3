// Observable Version
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Kunde } from '../_models/models';

@Injectable()
export class KundeService {
    private url = 'api/kunde/';  // URL to web API

    constructor(private http: Http) { }
    

    postKunde(body: any) {
        var headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.url, body, { headers: headers })
            .map(returData => returData.toString())  
    }
    
    getNyeKunder(): Observable<Kunde[]> {
        return this.http.get(this.url + "/GetN")
            .map((response: Response) => response.json());
    }
    
    getKunder(): Observable<Kunde[]> {
        return this.http.get(this.url)
            .map((response: Response) => response.json());
    }

    slettKunde(id: number) {
        return this.http.delete(this.url + id)
            .map(returData => returData.toString())
    }

    godkjennKunde(id: number) {
        var headers = new Headers({ "Content-Type": "application/json" });
        return this.http.put(this.url + id, { headers: headers })
            .map(returData => returData.toString())
    }

    SjekkOmEpostEksisterer(body: any) {
        var headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.url + "SjekkOmEpostEksisterer", body, { headers: headers })
            .map(res => res)

    }

}
