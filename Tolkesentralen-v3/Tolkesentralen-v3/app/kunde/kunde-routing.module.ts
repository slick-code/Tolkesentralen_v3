import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { KundeComponent } from './kunde.component';
import { BestillTolkComponent } from './bestill-tolk.component'
import { BestillOversettelseComponent } from './bestill-oversettelse.component';
import { ListBestillingerComponent } from './list-bestillinger.component'
   
const appRoutes: Routes = [
    {
        path: '',
        component: KundeComponent,
        children: [
            { path: 'bestill-tolk', component: BestillTolkComponent },
            { path: 'bestill-oversettelse', component: BestillOversettelseComponent },
            { path: 'list-bestillinger', component: ListBestillingerComponent }

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