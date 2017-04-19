// Promise Version
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OppdragOgKunde} from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';





@Component({
    //moduleId: module.id,
    templateUrl: './app/tolk/tolk-mine-oppdrag.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})
export class TolkMineOppdragComponent implements OnInit {
    ID: number;
    oppdrag: OppdragOgKunde[];
    constructor(private oppdragService: OppdragService) { }

    ngOnInit() {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragTolk();
      //  this.getOppdragTolk();
    }

    getOppdragTolk() {
        this.oppdragService.getBestillingerTilTolk(this.ID).subscribe(
            retur => {
                this.oppdrag = retur;
                console.log("Success -> Mine-oppdrag  , test val:  " + this.oppdrag);
            },
            error => console.log("Error -> Mine oppdrag feilet! ->" + error),
            () => console.log("ferdig: Mine oppdrag")
        );
    }

}



