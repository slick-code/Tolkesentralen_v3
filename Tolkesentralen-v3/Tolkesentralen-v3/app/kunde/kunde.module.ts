import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { KundeBestillTolkComponent } from './kunde-bestill-tolk.component'

import { KundeComponent }     from './kunde.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KundeRoutingModule } from './kunde-routing.module';
import { KundeBestillOversettelseComponent } from './kunde-bestill-oversettelse.component';
import { KundeListAlleTolkeBestillingerComponent } from './kunde-list-alle-tolke-bestillinger.component';
import { KundeListAlleOversettelseBestillingerComponent } from './kunde-list-alle-oversettelse-bestillinger.component';
import { KundeTolkeHistorikkComponent } from './kunde-tolke-historikk.component';
import { KundeOversettelseHistorikkComponent } from './kunde-oversettelse-historikk.component';
import { KundeEndreOpplysningerComponent } from './kunde-endre-opplysninger.component';
import { KundeEndrePassordComponent } from './kunde-endre-passord.component';

import { SharedModule } from '../shared/shared.module';
import { ResponseModule } from '../shared/response.module';
    

@NgModule({
    imports: [
        CommonModule,
        KundeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ResponseModule
    ],
    declarations: [
        KundeComponent,
        KundeBestillTolkComponent,
        KundeBestillOversettelseComponent,
        KundeListAlleTolkeBestillingerComponent,
        KundeListAlleOversettelseBestillingerComponent,
        KundeTolkeHistorikkComponent,
        KundeOversettelseHistorikkComponent,
        KundeEndreOpplysningerComponent,
        KundeEndrePassordComponent
    ],
    //bootstrap: [ AppComponent ]
})
export class KundeModule { }