    import { NgModule }              from '@angular/core';
    import { RouterModule, Routes }  from '@angular/router';
    import { KundeComponent } from './kunde.component';
    import { BestillTolkComponent } from './bestill-tolk.component'
   
    const appRoutes: Routes = [
        {
            path: '',
            component: KundeComponent,
            children: [
                { path: 'bestill-tolk', component: BestillTolkComponent }

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