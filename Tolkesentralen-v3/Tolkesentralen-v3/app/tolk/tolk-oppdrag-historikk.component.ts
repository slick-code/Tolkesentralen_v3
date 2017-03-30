// Promise Version
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OppdragOgKunde } from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';


@Component({
    //moduleId: module.id,
    templateUrl: './app/tolk/tolk-oppdrag-historikk.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})
export class TolkOppdragHistorikkComponent implements OnInit {
    ID: number;
    oppdrag: OppdragOgKunde[];

    constructor(private oppdragService: OppdragService) { }

    ngOnInit() {
        this.ID = parseInt(localStorage.getItem('id'));
        // this.getOppdragTolk();

    }

    //getOppdragTolk() {
    //    this.oppdragService.getOppdragTilTolk(this.ID).subscribe(
    //        retur => {
    //            this.oppdrag = retur;
    //            console.log("Success -> Tolk-oppdrag-historikk  , test val:  " + this.oppdrag);
    //        },
    //        error => console.log("Error -> Tolk oppdrag historikk feilet! ->" + error),
    //        () => console.log("ferdig: Tolk oppdrag historikk")
    //    );
    //}

}
