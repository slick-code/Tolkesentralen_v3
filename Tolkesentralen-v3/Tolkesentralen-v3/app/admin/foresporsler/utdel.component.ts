import { Component, OnInit } from '@angular/core';

import { Tolk, Oppdrag } from '../../_models/models';
import { OppdragService } from '../../_services/oppdrag.service';
import { TempService } from '../../_services/temp.service';
import { TolkService } from '../../_services/tolk.service';
import { Router } from '@angular/router';
import { Spraak } from '../../_models/spraak'


@Component({
    templateUrl: "./app/admin/foresporsler/utdel.component.html",
    providers: [TolkService],
})
export class UtdelComponent {
   arrayTolk: Tolk[];
   oppdrag: Oppdrag;
   allChecked: boolean;
    
   underText: string; 
   showForm: boolean;
    
   responseText: string;
   response: string;
   path: string = 'admin/oppdrag';


    constructor(
        private oppdragService: OppdragService,
        private tempService: TempService,
        private tolkService: TolkService,
        private router: Router) {
        this.oppdrag = this.tempService.getObject();

        
    }

    ngOnInit() {
        if (this.oppdrag == null) {
            this.router.navigate(['./admin/oppdrag']);
            return;
        }
        this.hentTolkmedGittSpraak();
    }

    getSpraak(i: number) {
        return new Spraak().liste[i].spraak;
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
        console.log("hentTolkmedGittSpraak BLIR KANL");
        this.showForm = false;
        this.response = "loading";
        var body: string = JSON.stringify({ fraspraak: this.oppdrag.fraspraak, tilspraak: this.oppdrag.tilspraak });
        this.tolkService.getTolkMedSpraak(body).subscribe(
            retur => {
                this.showForm = true;
                this.response = "";
                this.responseText = "Forespørselen er sendt! Gå til Bestillinger for å se detaljer."
                this.arrayTolk = retur;

            },
            error => {
            this.response = "error"
            this.responseText = "Ooops, beklager..";
            this.underText = "En feil oppsto og handlingen ble avbrutt!"
            },
            () => {}
        );
    }

    tilbake() {
        this.showForm = true;
        this.router.navigate(["./admin/oppdrag"]); 
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
                this.responseText = "Success! Forespørselen er utdelt.";
                this.underText = "Gå tilbake for å se detaljer."
            },
            error => {
            this.response = "error";
            this.responseText = "Ooops, beklager..";
            this.underText = "En feil oppsto og handlingen ble avbrutt!"
            },
            () => {}
        );
    }
    
}