import { Component, OnInit } from '@angular/core';
import { Kunde } from '../../_models/models'
import { KundeService } from '../../_services/kunde.service'
import { NavbarElement } from '../../_models/models'
import { DataService } from '../../_services/data.service'



@Component({
    templateUrl: "./app/admin/foresporsler/nye-kunder.component.html"
})
export class NyeKunderComponent {
   arrayNyeKunder: Kunde[] = [];
   element: NavbarElement;
   index: number;
   slett: boolean;
   default: boolean;

    constructor(
        private service: KundeService,
        private dataService: DataService) { }

    ngOnInit() {
        this.getKunder();
    }

    

    getKunder() {
        this.service.getNyeKunder()
            .subscribe(kunder => {
                if (kunder != null) {
                    this.arrayNyeKunder = kunder;
                    this.updateNavBar();
                }
            });
    }

    setTilSlettErTrykket(index: number) {
        
        if (this.index == index && this.slett) {
            return true;
        }
        return false;
    }

    setTilSlett(index: number) {
        this.slett = true;
        this.index = index;
    }


    setDefaultErtrykket(index: number) {
        return !this.setTilSlettErTrykket(index);
    }

    setDefault() {
        this.index = -1;
        this.slett = false;
    }

    updateNavBar() {
        this.element = new NavbarElement();
        this.element.nr = this.arrayNyeKunder.length;
        this.element.element = 'nye-kunder';
        this.dataService.updateData(this.element);
    }

    godkjennKunde(index: any, kundeID: number) {
        this.service.godkjennKunde(kundeID).subscribe(
            retur => {
                this.arrayNyeKunder.splice(index, 1);
                this.updateNavBar();
            },
            error => console.log("Beklager PUT, en feil har oppstått - " + error),
            () => console.log("ferdig post-api/bestilling")
        );
    }

    slettKunde(index: any, kundeID: number) {
        console.log("kkkkkk");
        this.service.slettKunde(kundeID).subscribe(
            retur => {
                this.arrayNyeKunder.splice(index, 1);
                this.updateNavBar();
            },
            error => console.log("Beklager PUT, en feil har oppstått - " + error),
            () => console.log("ferdig post-api/bestilling")
        );
    }
    
}