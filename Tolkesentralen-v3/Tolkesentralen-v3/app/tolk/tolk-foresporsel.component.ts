// Promise Version
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Oppdrag } from '../_models/models';
import { OppdragService, } from '../_services/oppdrag.service';
import { TolkService, } from '../_services/tolk.service';
import { Spraak } from '../_models/spraak';
import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
    group
} from '@angular/core';


@Component({
    //moduleId: module.id,
    templateUrl: './app/tolk/tolk-foresporsel.component.html',
    providers: [OppdragService, TolkService],
    styles: ['.error {color:red;}'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ width: 120, transform: 'translateX(0)', opacity: 1 })),
            transition('void => *', [
                style({ width: 10, transform: 'translateX(10px)', opacity: 0 }),
                group([
                    animate('0.2s 0.1s ease', style({
                        transform: 'translateX(0)',
                        width: 120
                    })),
                    animate('0.2s ease', style({
                        opacity: 1
                    }))
                ])
            ]),
            transition('* => void', [
                group([
                    animate('0.1s ease', style({
                        transform: 'translateX(10px)',
                        width: 10
                    })),
                    animate('0.1s 0.1s ease', style({
                        opacity: 0
                    }))
                ])
            ])
        ])
    ]
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
