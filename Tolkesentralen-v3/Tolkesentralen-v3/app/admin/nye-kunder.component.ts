import { Component, OnInit } from '@angular/core';
import { Kunde } from '../_models/models'
import { KundeService } from '../_services/kunde.service'
import { NavbarElement } from '../_models/models'
import { DataService } from '../_services/data.service'



@Component({
    templateUrl: "./app/admin/nye-kunder.component.html"
})
export class NyeKunderComponent {
   arrayNyeKunder: Kunde[] = [];
   element: NavbarElement;

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
                    this.element = new NavbarElement();
                    this.element.nr = this.arrayNyeKunder.length;
                    this.element.element = 'nye-kunder';
                    this.dataService.updateData(this.element);
                }
            });
    }

    godkjennKunde(index: any, kundeID: number) {
        this.service.godkjennKunde(kundeID).subscribe(
            retur => {
                console.log("Success PUT : "+index);
                this.arrayNyeKunder.splice(this.arrayNyeKunder.indexOf(index), 1);
            },
            error => console.log("Beklager PUT, en feil har oppstått - " + error),
            () => console.log("ferdig post-api/bestilling")
        );;
    }
    
}