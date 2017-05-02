import { Component, OnInit } from '@angular/core';

import { Tolk, Oppdrag } from '../../_models/models'
import { OppdragService } from '../../_services/oppdrag.service'
import { TempService } from '../../_services/temp.service'
import { TolkService } from '../../_services/tolk.service'


@Component({
    templateUrl: "./app/admin/foresporsler/utdel.component.html",
    providers: [TolkService],
})
export class UtdelComponent {
   arrayTolk: Tolk[];
   oppdrag: Oppdrag;
   allChecked: boolean;


   Error: string = "Ooops, beklager men en feil oppsto og handlingen ble avbrutt!";
   underText: string = "Forespørselen er sendt! Gå til Bestillinger for å se detaljer.";
   showForm: boolean;
    
   responseText: string;
   response: string;
   path: string = 'admin/oppdrag';


    constructor(
        private oppdragService: OppdragService,
        private tempService: TempService,
        private tolkService: TolkService) { }

    ngOnInit() {
        this.oppdrag = this.tempService.getObject();
        this.hentTolkmedGittSpraak();
        
        if(this.oppdrag == null){
            console.log("oppdrag er null");
        }else{
            console.log('TEM -> ' + this.tempService.getObject());
            console.log(this.oppdrag.fraspraak + " -> " + this.oppdrag.tilspraak);
        }
    }

    setAllChecked() {
        this.allChecked = !this.allChecked;
        if (this.arrayTolk) {
            for (let object of this.arrayTolk) {
                object.valgt = this.allChecked;
            }
        }
    }

    hentTolkmedGittSpraak() {
        this.showForm = false;
        this.response = "loading";
        var body: string = JSON.stringify({ fraspraak: 1, tilspraak: 2 });
        this.tolkService.getTolkMedSpraak(body).subscribe(
            retur => {
                this.showForm = true;
                this.response = "";
                this.arrayTolk = retur;
            },
            error => {
            this.response = "error"
            this.responseText = this.Error;
            },
            () => {}
        );
    }

    postForesporsler() {
        this.response = "loading";
        this.showForm = false;
        var tempArreyTolkID: number[] = [];
        if (this.arrayTolk) {
            for (let object of this.arrayTolk) {
                if (object.valgt) {
                    tempArreyTolkID.push(object.persId);
                }
            }
        }
        var body: string = JSON.stringify({ tolkArrey: tempArreyTolkID, oppdragId: this.oppdrag.oppdragID });
        this.tolkService.postForesposler(body).subscribe(
            retur => {
                this.response = "success";
                this.responseText = "Success!"
            },
            error => {
            this.response = "error";
            this.responseText = this.Error;
            },
            () => {}
        );
    }
    
}