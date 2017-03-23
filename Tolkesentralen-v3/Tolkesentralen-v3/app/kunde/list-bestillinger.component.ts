// Promise Version
import { Component, OnInit } from '@angular/core';
import { Oppdrag } from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/kunde/list-bestillinger.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})
export class ListBestillingerComponent implements OnInit {
    ID: number;
    oppdragTolk: Oppdrag[];
    // oppdragOversettelse : []

    constructor(private service: OppdragService){}

    ngOnInit() {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragTolk();
    }

    getOppdragTolk() {
        this.service.getOppdragTilKunde(this.ID).subscribe(
            retur => {
                this.oppdragTolk = retur;
                console.log("Success POST oppdrag : ");
            },
            error => console.log("Beklager, en feil har oppstått - " + error),
            () => console.log("ferdig post-api/bestilling")
        );
    }

    getOppdragOversettelse() {

    }

}



