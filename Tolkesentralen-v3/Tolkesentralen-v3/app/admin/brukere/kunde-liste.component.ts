import { Component, OnInit } from '@angular/core';
import { Kunde } from '../../_models/models'
import { KundeService } from '../../_services/kunde.service'
import { NavbarElement } from '../../_models/models'
import { DataService } from '../../_services/data.service'



@Component({
    templateUrl: "./app/admin/brukere/kunde-liste.component.html"
})
export class KundeListeComponent {
    arrayKunder: Kunde[] = [];
    index: number;
    slett: boolean;

    constructor(
        private service: KundeService) { }

    ngOnInit() {
        this.getKunder();
        
    }

    getKunder() {
        // get users from secure api end point
        this.service.getKunder()
            .subscribe(kunder => {
                if (kunder != null) {
                    this.arrayKunder = kunder;
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

    slettKunde(index: any, kundeID: number) {
        this.service.slettKunde(kundeID).subscribe(
            retur => {
                this.arrayKunder.splice(index, 1);
            },
            error => console.log("Beklager PUT, en feil har oppstått - " + error),
            () => console.log("ferdig post-api/bestilling")
        );
    }

}
