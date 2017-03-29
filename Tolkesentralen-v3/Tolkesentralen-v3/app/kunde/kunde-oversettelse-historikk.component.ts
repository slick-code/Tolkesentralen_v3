// Promise Version
import { Component, OnInit } from '@angular/core';
import { Oppdrag, Oversettelse } from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';
import { OversettelseService } from '../_services/oversettelse.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/kunde/kunde-oversettelse-historikk.component.html',
    providers: [OppdragService, OversettelseService],
    styles: ['.error {color:red;}']
})
export class KundeOversettelseHistorikkComponent implements OnInit {
    ID: number;
    oppdrag: Oppdrag[];
    oversettelser: Oversettelse[];

    constructor(private oppdragService: OppdragService, private oversettelseService: OversettelseService) { }

    ngOnInit() {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragOversettelse();
    }


    getOppdragOversettelse() {
        this.oversettelseService.getOversettelserTilKunde(this.ID).subscribe(
            retur => {
                this.oversettelser = retur;
                console.log("Success -> Mine bestillinger-oversettelser, test val:  " + this.oppdrag);
            },
            error => console.log("Error -> Mine bestillinger feilet! ->" + error),
            () => console.log("ferdig: Mine bestillinger")
        );
    }

}
