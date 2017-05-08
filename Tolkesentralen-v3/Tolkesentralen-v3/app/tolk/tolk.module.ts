    import { NgModule }       from '@angular/core';
    import { CommonModule }   from '@angular/common';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { SharedModule } from '../shared/shared.module';
    import { TolkComponent }     from './tolk.component';
    import { TolkRoutingModule } from './tolk-routing.module';

    import { TolkMineOppdragComponent } from './tolk-mine-oppdrag.component';
    import { TolkForesporselComponent } from './tolk-foresporsel.component';
    import { TolkOppdragHistorikkComponent  } from './tolk-oppdrag-historikk.component';
    import { TolkSettTilgjenglighetComponent } from './tolk-sett-tilgjenglighet.component';
    import { TolkRedigjerPersondetaljerComponent } from './tolk-redigjer-persondetaljer.component';
    import { TolkEndrePassordComponent } from './tolk-endre-passord.component';

import { ResponseModule } from '../shared/response.module';

    


    @NgModule({
      imports: [
        CommonModule,
        TolkRoutingModule, 
        FormsModule,
        ReactiveFormsModule,
          SharedModule,
          ResponseModule
      ],
      declarations: [
          TolkComponent,
          TolkMineOppdragComponent,
          TolkForesporselComponent, 
          TolkOppdragHistorikkComponent, 
          TolkSettTilgjenglighetComponent,
          TolkRedigjerPersondetaljerComponent,
          TolkEndrePassordComponent
         
         
      ],
      //bootstrap: [ AppComponent ]
    })
    export class TolkModule { }