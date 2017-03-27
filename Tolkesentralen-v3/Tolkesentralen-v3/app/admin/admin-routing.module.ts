    import { NgModule }              from '@angular/core';
    import { RouterModule, Routes }  from '@angular/router';
    import { AdminComponent }   from './admin.component';
    import { AuthGuard } from '../_guards/auth.guard'
    import { OppdragComponent } from './oppdrag.component'
    import { OversettelseComponent } from './oversettelse.component'
    import { UtdelComponent } from './utdel.component'
    import { NyeKunderComponent } from './nye-kunder.component'
    import { KundeListeComponent } from './brukere/kunde-liste.component';
    
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