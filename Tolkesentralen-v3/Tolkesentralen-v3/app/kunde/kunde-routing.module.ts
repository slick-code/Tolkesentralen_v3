import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { KundeComponent } from './kunde.component';
import { BestillTolkComponent } from './bestill-tolk.component'
import { BestillOversettelseComponent } from './bestill-oversettelse.component';
import { ListBestillingerComponent } from './list-bestillinger.component'
import { KundeHistorikkComponent } from './kunde-historikk.component'
import { ProfilComponent } from './profil.component'
import { AuthGuard } from '../_guards/auth.guard'
   
const appRoutes: Routes = [
    {
        path: '',
        component: KundeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'bestill-tolk', component: BestillTolkComponent },
            { path: 'bestill-oversettelse', component: BestillOversettelseComponent },
            { path: 'list-bestillinger', component: ListBestillingerComponent },
            { path: 'historikk', component: KundeHistorikkComponent },
            { path: 'profil', component: ProfilComponent }

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
export class KundeRoutingModule {}