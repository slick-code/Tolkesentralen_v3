import { Component, OnInit } from '@angular/core';
import { Oppdrag } from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';


@Component({
    templateUrl: './app/home/bestill-tolk.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})

export class BestillTolkComponent implements OnInit {
    errorMessage: string;
    liste: Oppdrag[];

    constructor(private service: OppdragService) { }

    ngOnInit() { this.getOppdrag; }


    getOppdrag() {
        this.service.getOppdrag()
            .subscribe(db_liste => {
                this.liste = db_liste;
            });
    }

    postKunde(navn: string) {
        var ny = new Oppdrag();
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
