import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestillTolkComponent } from './bestill-tolk.component'

import { KundeComponent }     from './kunde.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KundeRoutingModule } from './kunde-routing.module';
import { BestillOversettelseComponent } from './bestill-oversettelse.component';
import { ListBestillingerComponent } from './list-bestillinger.component'

import { KundeHistorikkComponent } from './kunde-historikk.component'
import { ProfilComponent} from './profil.component'

import { SharedModule } from '../shared/shared.module'
    

@NgModule({
    imports: [
        CommonModule,
        KundeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        KundeComponent,
        BestillTolkComponent,
        BestillOversettelseComponent,
        ListBestillingerComponent,
        KundeHistorikkComponent,
        ProfilComponent
    ],
    //bootstrap: [ AppComponent ]
})
export class AdminModule { }