﻿import { Component, OnInit } from '@angular/core';
import { Kunde } from '../../_models/models'
import { KundeService } from '../../_services/kunde.service'
import { NavbarElement } from '../../_models/models'
import { DataService } from '../../_services/data.service'



@Component({
    templateUrl: "./app/admin/tolkehistorikk/admin-tolk-avbestillinger-oversikt.component.html"
})
export class AdminTolkAvbestillingerOversiktComponent {
    arrayKunder: Kunde[] = [];
    element: NavbarElement;

    constructor(
        private service: KundeService,
        private dataService: DataService) { }

    ngOnInit() {
        this.getKunder();

    }

    getKunder() {
        // get users from secure api end point
        this.service.getKunder()
            .subscribe(kunder => {
                if (kunder != null) {
                    this.arrayKunder = kunder;
                    this.element = new NavbarElement();
                    this.element.nr = this.arrayKunder.length;
                    this.element.element = 'kunder';
                    this.dataService.updateData(this.element);
                }
            });
    }

}
