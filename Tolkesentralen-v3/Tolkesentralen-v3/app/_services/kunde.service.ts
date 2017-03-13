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
    private url = 'api/kunde';  // URL to web API

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

    godkjennKunde(email: string) {
        var headers = new Headers({ "Content-Type": "application/json" });
        return this.http.put(this.url, email, { headers: headers })
            .map((response: Response) => response.json());
    }

    /*
    getHeroes(): Observable<Kunde[]> {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    }

   
    addHero(name: string): Observable<Kunde> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, { name }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
    */
}

/*
  private heroesUrl = 'app/heroes.json'; // URL to JSON file
*/
