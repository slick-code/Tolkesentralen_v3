    import { NgModule }              from '@angular/core';
    import { RouterModule, Routes }  from '@angular/router';
    import { TolkComponent }   from './tolk.component';
    import { AuthGuard } from '../_guards/auth.guard';

    import { TolkMineOppdragComponent } from './tolk-mine-oppdrag.component';
    import { TolkForesporselComponent } from './tolk-foresporsel.component';
    import { TolkOppdragHistorikkComponent } from './tolk-oppdrag-historikk.component';
    import { TolkSettTilgjenglighetComponent } from './tolk-sett-tilgjenglighet.component';
    import { TolkRedigjerPersondetaljerComponent } from './tolk-redigjer-persondetaljer.component';
    import { TolkEndrePassordComponent } from './tolk-endre-passord.component';

    const appRoutes: Routes = [
        {
            path: '',
            component: TolkComponent,
            canActivate: [AuthGuard],
            data: { domene: 'tolk' },
            children: [
                { path: '', redirectTo: 'tolk-mine-oppdrag', pathMatch: 'full' },
                { path: 'tolk-mine-oppdrag', component: TolkMineOppdragComponent },
                { path: 'tolk-foresporsel', component: TolkForesporselComponent },
                { path: 'tolk-oppdrag-historikk', component: TolkOppdragHistorikkComponent }, 
                { path: 'tolk-sett-tilgjenglighet', component: TolkSettTilgjenglighetComponent },
                { path: 'tolk-redigjer-persondetaljer', component: TolkRedigjerPersondetaljerComponent },
                { path: 'tolk-endre-passord', component: TolkEndrePassordComponent }


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
    export class TolkRoutingModule {}