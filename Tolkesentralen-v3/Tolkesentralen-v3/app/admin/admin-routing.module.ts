    import { NgModule }              from '@angular/core';
    import { RouterModule, Routes }  from '@angular/router';
    import { AdminComponent }   from './admin.component';
    import { AuthGuard } from '../_guards/auth.guard'
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

    const appRoutes: Routes = [
      {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            children: [
              { path: 'utdel', component: UtdelComponent },
              { path: 'oversettelse', component: OversettelseComponent },
              { path: 'oppdrag', component: OppdragComponent },
              { path: 'nye_kunder', component: NyeKunderComponent },
              { path: 'kunder', component: KundeListeComponent },
              { path: 'tolk-liste', component: TolkListeComponent },
              { path: 'opprett-tolk', component: OpprettTolkComponent },
              { path: 'admin-tolk-bestilling-oversikt', component: AdminTolkBestillingOversiktComponent },
              { path: 'admin-oversettelse-bestilling-oversikt', component: AdminOversettelseBestillingOversiktComponent },
              { path: 'admin-tolk-avbestillinger-oversikt', component: AdminTolkAvbestillingerOversiktComponent },
              { path: 'admin-tolk-utforte-oppdrag', component: AdminTolkUtforteOppdragComponent },
              { path: 'admin-utforte-oversettelse-oppdrag', component: AdminUtforteOversettelseOppdragComponent },
              { path: 'admin-avbestilte-oversettelse-oppdrag', component: AdminAvbestilteOversettelseOppdragComponent },
              { path: 'opprett-kunde', component: OpprettKundeComponent },
              { path: 'opprett-bestilling', component: OpprettBestillingComponent },
              { path: 'opprett-oversettelse', component: OpprettOversettelseComponent },
              { path: '', component: OppdragComponent }
            ]
          }
        ]
      }
    ];

    @NgModule({
      imports: [
        RouterModule.forChild(appRoutes)
      ],
      exports: [
        RouterModule
      ]
    })
    export class AdminRoutingModule {}