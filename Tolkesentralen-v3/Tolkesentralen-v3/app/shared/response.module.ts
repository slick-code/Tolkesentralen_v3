import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponseComponent } from '../shared/response.component';
import { CommonModule } from '@angular/common';  

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [ResponseComponent],
    providers: [
    ],
    exports: [ResponseComponent]
})
export class ResponseModule { }