import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index.component';
import { HomeComponent } from './home.component';
import { RegistrerComponent } from './registrer.component'
import { BestillOversettelseComponent } from './bestill-oversettelse.component';
import { BestillTolkComponent } from './bestill-tolk.component';
import { InfoOmOssComponent } from './info/info-om-oss.component';
import { InfoOversettelseComponent } from './info/info-oversettelse.component';
import { InfoTolkComponent } from './info/info-tolk.component';
import { SharedModule } from '../shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponseModule } from '../shared/response.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, ResponseModule
    ],
    declarations: [
        HomeComponent,
        RegistrerComponent,
        BestillOversettelseComponent,
        BestillTolkComponent,
        IndexComponent,
        InfoOmOssComponent,
        InfoOversettelseComponent,
        InfoTolkComponent

    ]
    //bootstrap: [ AppComponent ]
})
export class HomeModule { }