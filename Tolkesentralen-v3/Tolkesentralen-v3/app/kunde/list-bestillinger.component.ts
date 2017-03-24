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
    oppdrag: Oppdrag[];
    // oppdragOversettelse : []

    constructor(private service: OppdragService){}

    ngOnInit() {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragTolk();
    }

    getOppdragTolk() {
        this.service.getOppdragTilKunde(this.ID).subscribe(
            retur => {
                console.log("RETUR  "+retur)
                this.oppdrag = retur;
                console.log("RETUR  " + this.oppdrag)
                console.log("Success GET oppdrag : ");
            },
            error => console.log("Beklager, en feil har oppstått - " + error),
            () => console.log("ferdig Get-api/bestilling")
        );
    }

    getOppdragOversettelse() {

    }

}



