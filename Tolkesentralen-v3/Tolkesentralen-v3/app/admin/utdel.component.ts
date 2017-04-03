import { Component, OnInit } from '@angular/core';
import { Tolk, Oppdrag } from '../_models/models'
import { OppdragService } from '../_services/oppdrag.service'
import { TempService } from '../_services/temp.service'
import { TolkService } from '../_services/tolk.service'


@Component({
    templateUrl: "./app/admin/utdel.component.html",
    providers: [TolkService],
})
export class UtdelComponent {
   arrayTolk: Tolk[] = [];
   oppdrag: Oppdrag;
   allChecked: boolean;


    constructor(
        private oppdragService: OppdragService,
        private tempService: TempService,
        private tolkService: TolkService) { }

    ngOnInit() {
        this.oppdrag = this.tempService.getObject();
        this.hentTolkmedGittSpraak();
        // get users from secure api end point
        //this.oppdragService.getListeTolk()
        //    .subscribe(listeTolk => {
        //        this.arrayTolk = listeTolk;
        //    });

        
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
        var body: string = JSON.stringify({ fraspraak: 1, tilspraak: 2 });
        this.tolkService.getTolkMedGittSpraak(body).subscribe(
            retur => {
                this.arrayTolk = retur;
            },
            error => console.log("Beklager PUT, en feil har oppstått - " + error),
            () => console.log("ferdig post-api/bestilling")
        );
    }
    
}