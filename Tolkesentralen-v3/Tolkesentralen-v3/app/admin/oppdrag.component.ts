import { Component, OnInit } from '@angular/core';
import { Oppdrag } from '../_models/models'
import { OppdragService } from '../_services/oppdrag.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TempService} from '../_services/temp.service'
import { DataService } from '../_services/data.service'
import { NavbarElement } from '../_models/models'
import { SelectivePreloadingStrategy } from '../_services/selective-preloading-strategy';


@Component({
    templateUrl: "./app/admin/oppdrag.component.html"
})
export class OppdragComponent {
   arrayOppdrag: Oppdrag[];
   index: number; // valgt index i array
   detaljer: boolean;
   more: boolean;
   count: number;
   element: NavbarElement;
   modules: string[];

   bruker: any;

   chosen: number;

   info: boolean;
   avbryt: boolean;
   loading: boolean;

    constructor(
        private preloadStrategy: SelectivePreloadingStrategy,
        private dataService: DataService,
        private oppdragService: OppdragService,
        private route: ActivatedRoute,
        private tempService: TempService,
        private router: Router) {
            this.modules = preloadStrategy.preloadedModules;
         }

    ngOnInit() {
        this.bruker = JSON.parse(localStorage.getItem('currentUser'));
        this.info = false;
        this.avbryt = false;

        this.more = false;
        this.count = 77;

        //this.loading = true
        this.oppdragService.getUbehandleOppdrag()
            .subscribe(oppdrag => {
                this.arrayOppdrag = oppdrag;
                this.element = new NavbarElement();
                this.element.nr= this.arrayOppdrag.length;
                this.element.element = 'oppdrag';
                this.dataService.updateData(this.element);
                this.loading = false;
            }); 
    }

    onUtdel(oppdrag: Oppdrag){ 
        this.tempService.setObject(oppdrag);
        this.router.navigate(['./admin/utdel']);
    }

    setInfo(index: number){
        if(this.index != index && this.avbryt) this.avbryt = false;
        if(this.info && this.index != index){
            this.index = index;
            return;
        }
        this.index = index;
        this.info = !this.info;
    }

    setAvbryt(index: number){
        if(this.index == index){
            this.avbryt = !this.avbryt;
            if(this.avbryt) this.info = true;
        }else{
            this.index = index;
            this.info = true;
            this.avbryt = true;
        }
    }

    
    
}