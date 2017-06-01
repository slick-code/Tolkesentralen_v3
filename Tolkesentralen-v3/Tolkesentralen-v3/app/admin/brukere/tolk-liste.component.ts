import { Component, OnInit } from '@angular/core';
import { Tolk } from '../../_models/models'
import { TolkService } from '../../_services/tolk.service'
import { Utilgjengelig } from '../../_models/models';



@Component({
    templateUrl: "./app/admin/brukere/tolk-liste.component.html",
    providers: [TolkService],
})
export class TolkListeComponent {
    arrayTolk: Tolk[];
    nr: number;
    index: number; // valgt index i array
    count: number;
    modules: string[];
    d: Date = new Date(1494576900000);
    bruker: any;

    chosen: number;
    loading: boolean;

    infoErTrykket: boolean;
    slettErTrykket: boolean;
    default: boolean;

    constructor(
        private service: TolkService) {
    }

    ngOnInit() {
        this.count = 77;
        this.loading = true
        this.getTolk();
        console.info("This is console.indo");

        if (window.performance) {
            console.log("window.performance work's fine on this browser");
        }
        if (performance.navigation.type == 1) {
            console.log("This page is reloaded");
        } else {
            console.log("This page is not reloaded");
        }

        // this.loading = false;

    }

    btnTilSlettClick() {
        this.slettErTrykket = true;
    }

    btnAvbrytTilSlettClick() {
        this.slettErTrykket = false;
    }

    btnInfoClick(index: number, nr: number) {
        if (this.index == index && this.nr == nr) {
            this.SetDefault();
        } else {
            this.index = index;
            this.nr = nr;
            this.infoErTrykket = true;
        }
    }


    VisInfo(index: number, nr: number) {
        if (this.index == index && this.nr == nr && this.infoErTrykket) {
            return true;
        }
        return false;
    }

    SetDefault() {
        this.infoErTrykket = false;
        this.slettErTrykket = false;
        this.default = true;
        this.index = -1;
        this.nr = -1;
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

    getTolk() {
        this.service.getAlle()
            .subscribe(retur => {
                this.arrayTolk = retur;
            },
            error => {
            },
            () => { this.loading = false; }
            );
    }
    
    

    //slettOppdrag(id: number, index: any) {
    //    this.loading = true;
    //    this.oppdragService.slettOppdrag(id)
    //        .subscribe(response => {
    //            this.SetDefault();
    //            this.arrayOppdrag.splice(index, 1);
    //            this.updateNavBar();
    //        },
    //        error => {
    //        },
    //        () => { this.loading = false; }
    //        );
    //}
}



