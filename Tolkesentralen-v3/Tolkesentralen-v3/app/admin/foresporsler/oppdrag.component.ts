import { Component, OnInit } from '@angular/core';
import { Oppdrag } from '../../_models/models'
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
    arrayOppdrag: Oppdrag[];
    arrayOppdragSendt: Oppdrag[];
    nr: number;
    index: number; // valgt index i array
    count: number;
    element: NavbarElement;
    modules: string[];

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
    }

    btnClick(index: number, nr: number, btn: number) {
        if (this.index == index && this.nr == nr) {
            if (btn == 1 && this.infoErTrykket) {   
                // Gå videre
            } else {
                this.SetDefault();
                return;
            }
        }
        this.index = index;
        this.nr = nr;
        this.infoErTrykket = true;
        if (btn == 1) {
            this.slettErTrykket = true; 
        } 
        
    }

    VisInfo(index: number, nr: number) {
        if (this.index == index && this.nr == nr && this.infoErTrykket) {
            return true;
        }
        return false;
    }
    

    VisSlett(index: number, nr: number) {
        if (this.index == index && this.nr == nr && this.slettErTrykket) {
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

    ngOnInit() {
        this.bruker = JSON.parse(localStorage.getItem('currentUser'));
        this.count = 77;
        this.getNyeOppdrag();
        this.getSendteOppdrag();
        //this.loading = true
    }

    checkIfArrayIsEmthy(array: any) {
        if(array == null) return false;
        if (array.length == 0) return false;
        return true;
    }

    getNyeOppdrag() {
        this.oppdragService.getUbehandleOppdrag()
            .subscribe(oppdrag => {
                this.arrayOppdrag = oppdrag;
                this.element = new NavbarElement();
                this.element.nr = this.arrayOppdrag.length;
                this.element.element = 'oppdrag';
                this.dataService.updateData(this.element);
                this.loading = false;
            }); 
    }

    getSendteOppdrag() {
        this.oppdragService.getBehandleOppdrag()
            .subscribe(oppdrag => {
                this.arrayOppdragSendt = oppdrag;
            });
    }

    onUtdel(oppdrag: Oppdrag){ 
        this.tempService.setObject(oppdrag);
        this.router.navigate(['./admin/utdel']);
    }
}