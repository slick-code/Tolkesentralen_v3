import { Component, OnInit } from '@angular/core';
import { Oversettelse } from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';


@Component({
    templateUrl: './app/home/bestill-oversettelse.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})
export class BestillOversettelseComponent implements OnInit {
    errorMessage: string;
    liste: Oversettelse[];

    constructor(private service: OppdragService) { }

    ngOnInit() { this.getOversettelser(); }


    getOversettelser() {
        this.service.getOversettelser()
            .subscribe(db_liste => {
                this.liste = db_liste;
            });
    }

    post(navn: string) {
        var ny = new Oversettelse();
        ny.fornavn = navn;
        var body: string = JSON.stringify(ny);
        this.service.postOversettelse(body).subscribe(
            retur => {
                this.liste.push(ny);
                console.log("Success POST : " + ny.fornavn);
            },
            error => console.log("Beklager, en feil har oppstått - " + error),
            () => console.log("ferdig post-api/bestilling")
        );

    }

}


