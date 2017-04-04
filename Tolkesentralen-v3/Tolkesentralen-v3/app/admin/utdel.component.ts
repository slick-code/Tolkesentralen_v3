import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Tolk, Oppdrag } from '../_models/models'
import { OppdragService } from '../_services/oppdrag.service'
import { TempService } from '../_services/temp.service'
import { TolkService } from '../_services/tolk.service'


@Component({
    templateUrl: "./app/admin/utdel.component.html",
    providers: [TolkService],
})
export class UtdelComponent {
   arrayTolk: Tolk[];
   oppdrag: Oppdrag;
   allChecked: boolean;

   Error: boolean;
   Success: boolean;
   loading: boolean;
   showForm: boolean;


    constructor(
        private oppdragService: OppdragService,
        private tempService: TempService,
        private tolkService: TolkService,
        private router: Router) { }

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
        console.log("SetAllChecked");
        this.allChecked = !this.allChecked;
        if (this.arrayTolk) {
            for (let object of this.arrayTolk) {
                object.valgt = this.allChecked;
            }
        }
    }

    hentTolkmedGittSpraak() {
        this.loading = true;
        var body: string = JSON.stringify({ fraspraak: 1, tilspraak: 2 });
        this.tolkService.getTolkMedSpraak(body).subscribe(
            retur => {
                this.showForm = true;
                this.arrayTolk = retur;
            },
            error => { this.Error = true;},
            () => { this.loading = false;}
        );
    }

    tilbake() {
        this.router.navigate(['./admin/oppdrag']);
    }

    postForesporsler() {
        this.loading = true;
        this.showForm = false;
        var tempArreyTolkID: number[] = [];
        if (this.arrayTolk) {
            for (let object of this.arrayTolk) {
                if (object.valgt) {
                    tempArreyTolkID.push(object.persId);
                }
            }
        }
        this.tolkService.postForesposler(tempArreyTolkID).subscribe(
            retur => {
                this.Success = true;
                //this.arrayTolk = retur;
            },
            error => { this.Error = true;},
            () => { this.loading = false;}
        );
    }
    
}