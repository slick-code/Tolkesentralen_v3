import { Component, OnInit } from '@angular/core';
import { OppdragOgKunde } from '../../_models/models'
import { Spraak } from '../../_models/spraak'
import { OppdragService } from '../../_services/oppdrag.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TempService } from '../../_services/temp.service'
import { DataService } from '../../_services/data.service'
import { NavbarElement } from '../../_models/models'
import { SelectivePreloadingStrategy } from '../../_services/selective-preloading-strategy';


@Component({
    templateUrl: "./app/admin/foresporsler/oppdrag.component.html"
})
export class OppdragComponent {
    arrayOppdrag: OppdragOgKunde[];
    arrayOppdragSendt: OppdragOgKunde[];
    arraySpraak: any[];
    nr: number;
    index: number; // valgt index i array
    count: number;
    element: NavbarElement;
    modules: string[];
    d: Date = new Date(1494576900000);

    bruker: any;

    chosen: number;
    loading: boolean;
    
    infoErTrykket: boolean;
    slettErTrykket: boolean;
    default: boolean;

    constructor(
        private preloadStrategy: SelectivePreloadingStrategy,
        private dataService: DataService,
        private oppdragService: OppdragService,
        private route: ActivatedRoute,
        private tempService: TempService,
        private router: Router) {
        this.modules = preloadStrategy.preloadedModules;
        this.arraySpraak = new Spraak().liste;

    }

    ngOnInit() {
        this.bruker = JSON.parse(localStorage.getItem('currentUser'));
        this.count = 77;
        this.loading = true
        this.getNyeOppdrag();
        this.getSendteOppdrag();
        console.info("This is console.indo");

        if (window.performance) {
            console.log("window.performance work's fine on this browser");
        }
        if (performance.navigation.type == 1) {
            console.log("This page is reloaded");
        } else {
            console.log("This page is not reloaded");
        }
    
    }

    btnTilSlettClick() {
        this.slettErTrykket = true;
    }

    btnAvbrytTilSlettClick() {
        this.slettErTrykket = false;
    }

    btnInfoClick(index: number, nr: number) {
        console.log("INFOOO " + index + " , " + nr);
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
        if(array == null) return false;
        if (array.length == 0) return false;
        return true;
    }

    fix(jsonDate: any) {
        // -> //Date(1494501300000)/ -> returnerer -> new Date(1494501300000)
        return new Date(parseInt(jsonDate.substr(6)));
    }

    updateNavBar() {
        this.element = new NavbarElement();
        this.element.nr = this.arrayOppdrag.length;
        this.element.element = 'oppdrag';
        this.dataService.updateData(this.element);
    }

    getNyeOppdrag() {
        this.oppdragService.getUbehandleOppdrag()
            .subscribe(oppdrag => {
                this.arrayOppdrag = oppdrag;
                this.updateNavBar();
            },
            error => {
            },
            () => { this.loading = false;}
            );
    }

    getSendteOppdrag() {
        this.oppdragService.getBehandleOppdrag()
            .subscribe(oppdrag => {
                this.arrayOppdragSendt = oppdrag;
            });
    }

    onUtdel(oppdrag: OppdragOgKunde){ 
        this.tempService.setObject(oppdrag);
        this.router.navigate(['./admin/utdel']);
    }

    slettOppdrag(id: number, index: any) {
        this.loading = true;
        this.oppdragService.slettOppdrag(id)
            .subscribe(response => {
                this.SetDefault();
                this.arrayOppdrag.splice(index, 1);
                this.updateNavBar();
            },
            error => {
            },
            () => { this.loading = false; }
          );
    }
}