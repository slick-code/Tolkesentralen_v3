import { Component, OnInit } from '@angular/core';
import { Login } from './_models/models';


@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`,
})


export class AppComponent {
    bruker: Login;
    rolle: string;

    ngOnInit() {
        this.bruker = JSON.parse(localStorage.getItem('currentUser'));
        this.sjekkBruker();
    }

    sjekkBruker() {
        if (this.bruker == null) {
            this.rolle = "ingen";
        } else {
            this.rolle = this.bruker.rolle;
        }
        console.log("ROOOOOOOOOOOOOOOOOOOOOOOOOOLLE: " + this.rolle);
    }
}

