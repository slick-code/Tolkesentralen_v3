﻿// Promise Version
import { Component, OnInit } from '@angular/core';
import { Oppdrag, Oversettelse } from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';
import { OversettelseService } from '../_services/oversettelse.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Spraak } from '../_models/spraak';


@Component({
    //moduleId: module.id,
    templateUrl: './app/kunde/kunde-list-alle-tolke-bestillinger.component.html',
    providers: [OppdragService, OversettelseService],
    styles: ['.error {color:red;}']
})
export class KundeListAlleTolkeBestillingerComponent implements OnInit {
    ID: number;
    oppdrag: Oppdrag[];
    Spraak: any[];


    constructor(private oppdragService: OppdragService, private oversettelseService: OversettelseService){}

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



