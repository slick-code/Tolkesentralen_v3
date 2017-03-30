import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RegistrerComponent } from './registrer.component';
import { BestillOversettelseComponent } from './bestill-oversettelse.component';
import { BestillTolkComponent } from './bestill-tolk.component';
import { IndexComponent } from './index.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
                    { path: 'register', component: RegistrerComponent },
                    { path: 'bestill-tolk', component: BestillTolkComponent },
                    { path: 'bestill-oversettelse', component: BestillOversettelseComponent },
                    { path: '', component: IndexComponent}
                
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
export class HomeRoutingModule { }