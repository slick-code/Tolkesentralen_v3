import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimateComponent } from './animate.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AnimateComponent,
        children: [
        //{ path: '', redirectTo: 'animate', pathMatch: 'full' },
        //{ path: '', component: AnimateComponent }


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
export class AnimateRoutingModule { }