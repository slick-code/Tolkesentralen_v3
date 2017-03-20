    import { NgModule }       from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { BestillTolkComponent } from './bestill-tolk.component'

    import { KundeComponent }     from './kunde.component';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { KundeRoutingModule } from './kunde-routing.module';
    

    @NgModule({
      imports: [
          CommonModule,
          KundeRoutingModule,
          FormsModule,
          ReactiveFormsModule
      ],
      declarations: [
          KundeComponent,
          BestillTolkComponent
      ],
      //bootstrap: [ AppComponent ]
    })
    export class AdminModule { }