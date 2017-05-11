import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'response',
    templateUrl: "./app/shared/response.component.html",
})

export class ResponseComponent {
    @Input('response') response: string;
    @Input('responseText') responseText: string;
    @Input('underText') underText: string;
    @Input('path') path: string;
}
