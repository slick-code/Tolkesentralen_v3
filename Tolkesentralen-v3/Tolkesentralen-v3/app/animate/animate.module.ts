import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimateRoutingModule } from './animate-routing.module';
import { AnimateComponent } from './animate.component';

@NgModule({
    imports: [
        CommonModule, AnimateRoutingModule
    ],
    declarations: [
        AnimateComponent

    ]
    //bootstrap: [ AppComponent ]
})
export class AnimateModule { }