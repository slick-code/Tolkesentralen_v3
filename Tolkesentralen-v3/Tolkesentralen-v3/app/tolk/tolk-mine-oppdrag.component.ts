// Promise Version
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Oppdrag} from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';
import { Router } from '@angular/router';




@Component({
    //moduleId: module.id,
    templateUrl: './app/tolk/tolk-mine-oppdrag.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})
export class TolkMineOppdragComponent implements OnInit {
    ID: number;
    oppdrag: Oppdrag[];
    constructor(private oppdragService: OppdragService, private router: Router,) { }

    ngOnInit() {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragTolk();
      //  this.getOppdragTolk();
    }

    checkIfArrayIsEmthy(array: any) {
        if (array == null) return false;
        if (array.length == 0) return false;
        return true;
    }

    fix(jsonDate: any) {
        // -> //Date(1494501300000)/ -> returnerer -> new Date(1494501300000)
        return new Date(parseInt(jsonDate.substr(6)));
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



