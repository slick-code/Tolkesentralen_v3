import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoadingComponent } from './loading.component';

@NgModule({
    imports: [ FormsModule, ReactiveFormsModule],
    declarations: [LoadingComponent],
    providers: [
    ],
    exports: [LoadingComponent]
})
export class SharedModule {}