import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginService } from './_services/login.service';
import { AuthGuard } from './_guards/auth.guard';
import { OppdragService } from './_services/oppdrag.service'
import { TempService } from './_services/temp.service'
import { DataService } from './_services/data.service'
import { KundeService } from './_services/kunde.service'

import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.comonent';
import { PageNotFoundComponent } from './shared/not-found.component';

import { SharedModule } from './shared/shared.module';

import { AnimateModule } from './animate/animate.module'



@NgModule({
    imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule, ReactiveFormsModule, SharedModule, AnimateModule],
    declarations: [AppComponent, LoginComponent, PageNotFoundComponent],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        AuthGuard,
        LoginService,
        OppdragService,
        TempService,
        DataService,
        KundeService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
    }
}
 