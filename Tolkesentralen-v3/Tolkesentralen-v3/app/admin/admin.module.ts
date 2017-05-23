    import { NgModule }       from '@angular/core';
    import { CommonModule }   from '@angular/common';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { AdminComponent }     from './admin.component';
    import { OppdragComponent } from './foresporsler/oppdrag.component'
    import { OversettelseComponent } from './foresporsler/oversettelse.component'
    import { UtdelComponent } from './foresporsler/utdel.component'
    import { NyeKunderComponent } from './foresporsler/nye-kunder.component'
    import { KundeListeComponent } from './brukere/kunde-liste.component';
    import { TolkListeComponent } from './brukere/tolk-liste.component';
    import { OpprettTolkComponent } from './opprett/opprett-tolk.component';
    import { AdminTolkBestillingOversiktComponent } from './bestillinger/admin-tolk-bestilling-oversikt.component';
    import { AdminOversettelseBestillingOversiktComponent } from './bestillinger/admin-oversettelse-bestilling-oversikt.component';
    import { AdminTolkAvbestillingerOversiktComponent } from './tolkehistorikk/admin-tolk-avbestillinger-oversikt.component';
    import { AdminTolkUtforteOppdragComponent } from './tolkehistorikk/admin-tolk-utforte-oppdrag.component';
    import { AdminUtforteOversettelseOppdragComponent } from './oversettelsehistorikk/admin-utforte-oversettelse-oppdrag.component';
    import { AdminAvbestilteOversettelseOppdragComponent } from './oversettelsehistorikk/admin-avbestilte-oversettelse-oppdrag.component';
    import { OpprettKundeComponent } from './opprett/opprett-kunde.component';
    import { OpprettBestillingComponent } from './opprett/opprett-bestilling.component';
    import { OpprettOversettelseComponent } from './opprett/opprett-oversettelse.component';
    import { Router } from '@angular/router';
    import { ResponseModule } from '../shared/response.module';
    import { AdminRoutingModule } from './admin-routing.module';
    import { SharedModule } from '../shared/shared.module';
    

    @NgModule({
      imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          AdminRoutingModule,
          SharedModule,
          ResponseModule
          
      ],
      declarations: [
        AdminComponent,
        OppdragComponent,
        OversettelseComponent,
        UtdelComponent,
        NyeKunderComponent,
          KundeListeComponent,
          TolkListeComponent,
          OpprettTolkComponent,
          AdminTolkBestillingOversiktComponent,
          AdminOversettelseBestillingOversiktComponent,
          AdminTolkAvbestillingerOversiktComponent,
          AdminTolkUtforteOppdragComponent,
          AdminUtforteOversettelseOppdragComponent,
          AdminAvbestilteOversettelseOppdragComponent,
          OpprettKundeComponent,
          OpprettBestillingComponent,
          OpprettOversettelseComponent
          
      ],
      //bootstrap: [ AppComponent ]
    })
    export class AdminModule {
        constructor(router: Router) {
        }
    }