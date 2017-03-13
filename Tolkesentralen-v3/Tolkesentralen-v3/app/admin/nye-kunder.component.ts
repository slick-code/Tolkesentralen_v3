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

        // get users from secure api end point
        this.service.getNyeKunder()
            .subscribe(kunder => {
                this.arrayNyeKunder = kunder;
                this.element = new NavbarElement();
                this.element.nr = this.arrayNyeKunder.length;
                this.element.element = 'kunder';
                this.dataService.updateData(this.element);
            });
    }

    godkjennKunde(email: string) {
        var json = JSON.stringify(email)
        this.service.godkjennKunde(json).subscribe(
            retur => {
                console.log("Success PUT : ");
            },
            error => console.log("Beklager PUT, en feil har oppstått - " + error),
            () => console.log("ferdig post-api/bestilling")
        );;
    }
    
}