import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index.component';
import { HomeComponent } from './home.component';
import { RegistrerComponent } from './registrer.component'
import { BestillOversettelseComponent } from './bestill-oversettelse.component'
import { BestillTolkComponent } from './bestill-tolk.component'
import { SharedModule } from '../shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule, SharedModule, FormsModule, ReactiveFormsModule
    ],
    declarations: [
        HomeComponent,
        RegistrerComponent,
        BestillOversettelseComponent,
        BestillTolkComponent,
        IndexComponent

    ]
    //bootstrap: [ AppComponent ]
})
export class HomeModule { }