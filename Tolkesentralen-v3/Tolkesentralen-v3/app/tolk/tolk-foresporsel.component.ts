﻿// Promise Version
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Oppdrag } from '../_models/models';
import { OppdragService, } from '../_services/oppdrag.service';
import { TolkService, } from '../_services/tolk.service';
import { Spraak } from '../_models/spraak';


@Component({
    //moduleId: module.id,
    templateUrl: './app/tolk/tolk-foresporsel.component.html',
    providers: [OppdragService, TolkService],
    styles: ['.error {color:red;}']
})
export class TolkForesporselComponent implements OnInit {
    ID: number;
    oppdrag: Oppdrag[];
    Spraak: any[];


    constructor(private oppdragService: OppdragService, private tolkService: TolkService) { }

    ngOnInit() {
        this.ID = parseInt(localStorage.getItem('id'));
        this.getOppdragTolk();
        this.Spraak = new Spraak().liste;
        
    }

    PoststedStreng(nr: number, adr: string) {
        if (nr == 0) return "";
        return " - " + nr + " - " + adr;
    }


    fix(jsonDate: any) {
        // -> //Date(1494501300000)/ -> returnerer -> new Date(1494501300000)
        return new Date(parseInt(jsonDate.substr(6)));
    }

    getOppdragTolk() {
        this.oppdragService.getForesposelTilTolk(this.ID).subscribe(
            retur => {
                this.oppdrag = retur;
                console.log("Success -> Mine-oppdrag  , test val:  " + this.oppdrag);
            },
            error => console.log("Error -> Mine oppdrag feilet! ->" + error),
            () => console.log("ferdig: Mine oppdrag")
        );
    }

    checkIfArrayIsEmthy(array: any) {
        if (array == null) return false;
        if (array.length == 0) return false;
        return true;
    }

    postSvarOpprag(index: any, oppdragId: number, svar: number) {
        var body: string = JSON.stringify({ tolkId: this.ID, oppdragId: oppdragId, svar: svar});
        this.tolkService.postSvar(body).subscribe(
            retur => {
                this.oppdrag.splice(index, 1);
            },
            error => { console.log("EROOR: postSvarOpprag - " + error); },
            () => console.log("ferdig post-api/bestilling")
        );
    }

}
