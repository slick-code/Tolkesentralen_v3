import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { KundeComponent } from './kunde.component';
import { KundeBestillTolkComponent } from './kunde-bestill-tolk.component'
import { KundeBestillOversettelseComponent } from './kunde-bestill-oversettelse.component';
import { KundeListAlleTolkeBestillingerComponent } from './kunde-list-alle-tolke-bestillinger.component';
import { KundeListAlleOversettelseBestillingerComponent } from './kunde-list-alle-oversettelse-bestillinger.component';
import { KundeTolkeHistorikkComponent } from './kunde-tolke-historikk.component';
import { KundeOversettelseHistorikkComponent } from './kunde-oversettelse-historikk.component';
import { KundeEndreOpplysningerComponent } from './kunde-endre-opplysninger.component';
import { AuthGuard } from '../_guards/auth.guard';
import { KundeEndrePassordComponent } from './kunde-endre-passord.component';
   
const appRoutes: Routes = [
    {
        path: '',
        component: KundeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'kunde-bestill-tolk', component: KundeBestillTolkComponent },
            { path: 'kunde-bestill-oversettelse', component: KundeBestillOversettelseComponent },
            { path: 'kunde-list-alle-tolke-bestillinger', component: KundeListAlleTolkeBestillingerComponent },
            { path: 'kunde-list-alle-oversettelse-bestillinger', component: KundeListAlleOversettelseBestillingerComponent },
            { path: 'kunde-tolke-historikk', component: KundeTolkeHistorikkComponent },
            { path: 'kunde-oversettelse-historikk', component: KundeOversettelseHistorikkComponent },
            { path: 'kunde-endre-opplysninger', component: KundeEndreOpplysningerComponent },
            { path: 'kunde-endre-passord', component: KundeEndrePassordComponent },
            { path: '', pathMatch: 'full', redirectTo: 'kunde-bestill-oversettelse'}
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