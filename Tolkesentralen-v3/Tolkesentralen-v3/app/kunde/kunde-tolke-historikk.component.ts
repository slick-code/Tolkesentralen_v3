// Promise Version
import { Component, OnInit } from '@angular/core';
import { Oppdrag, Oversettelse } from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';
import { OversettelseService } from '../_services/oversettelse.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/kunde/kunde-tolke-historikk.component.html',
    providers: [OppdragService, OversettelseService],
    styles: ['.error {color:red;}']
})
export class KundeTolkeHistorikkComponent implements OnInit {
    ID: number;
    oppdrag: Oppdrag[];


    constructor(private oppdragService: OppdragService, private oversettelseService: OversettelseService) { }

    ngOnInit() {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragTolk();
    }

    getOppdragTolk() {
        this.oppdragService.getOppdragTilKunde(this.ID).subscribe(
            retur => {
                this.oppdrag = retur;
                console.log("Success -> Mine bestillinger-oppdrag  , test val:  " + this.oppdrag);
            },
            error => console.log("Error -> Mine bestillinger feilet! ->" + error),
            () => console.log("ferdig: Mine bestillinger")
        );
    }

}



