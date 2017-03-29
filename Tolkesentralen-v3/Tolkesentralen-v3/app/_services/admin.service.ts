﻿import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/auth.service';
import { Counter } from '../_models/models';

@Injectable()
export class AdminService {
    private url = 'api/admin/';  // URL to web API

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getUbehandleOppdrag(): Observable<Counter> {
        return this.http.get(this.url)
            .map((response: Response) => response.json());
    }
}