// Promise Version
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OppdragOgKunde} from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';
import { Router } from '@angular/router';
import { Spraak } from '../_models/spraak';




@Component({
    //moduleId: module.id,
    templateUrl: './app/tolk/tolk-mine-oppdrag.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})
export class TolkMineOppdragComponent implements OnInit {
    ID: number;
    oppdragArray: OppdragOgKunde[];
    Spraak: any[];
    infoErTrykket: boolean;
    index: number;

    constructor(private oppdragService: OppdragService, private router: Router,) { }

    ngOnInit() {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragTolk();
        this.Spraak = new Spraak().liste;
      //  this.getOppdragTolk();
    }

    VisInfo(index: number) {
        if (this.index == index && this.infoErTrykket) {
            return true;
        }
        return false;
    }

    btnInfoClick(index: number) {
        if (this.index == index) {
            this.infoErTrykket = false;
            this.index = -1;
        } else {
            this.index = index;
            this.infoErTrykket = true;
        }
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
                this.oppdragArray = retur;
            },
            error => console.log("Error -> Mine oppdrag feilet! ->" + error)
        );
    }

}



