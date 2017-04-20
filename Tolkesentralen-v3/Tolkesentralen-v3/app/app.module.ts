import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthenticationService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth.guard';
import { OppdragService } from './_services/oppdrag.service'
import { TempService } from './_services/temp.service'
import { DataService } from './_services/data.service'
import { KundeService } from './_services/kunde.service'

import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.comonent';
import { PageNotFoundComponent } from './shared/not-found.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule, ReactiveFormsModule, SharedModule],
    declarations: [AppComponent, LoginComponent, PageNotFoundComponent],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        AuthGuard,
        AuthenticationService,
        OppdragService,
        TempService,
        DataService,
        KundeService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        
        // HUSK: Fjern denne!!
        //console.log('Routes: ', JSON.stringify(router.config, undefined, 1));
        console.log("Hvorfor printes denne ut 2 ganger?");
    }
}
 