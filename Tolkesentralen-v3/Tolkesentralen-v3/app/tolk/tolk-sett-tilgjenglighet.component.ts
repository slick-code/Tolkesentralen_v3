// Promise Version
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Utilgjengelig } from '../_models/models';
import { TolkService } from '../_services/tolk.service'


@Component({
    //moduleId: module.id,
    templateUrl: './app/tolk/tolk-sett-tilgjenglighet.component.html',
    providers: [TolkService],
    styles: ['.error {color:red;}']
})
export class TolkSettTilgjenglighetComponent implements OnInit {
    ID: number;
    tilgjengelig: Utilgjengelig[];
    form: FormGroup;
    errorText: string;
    index: number;
    loading: boolean;
    slettLoading: boolean;
    fraStartDate: any;
    tilStartDate: any;

    constructor(
        private service: TolkService) { }
    

    ngOnInit() {
        this.errorText = "";
        this.ID = parseInt(localStorage.getItem('id'));
        this.tilgjengelig = [];
        this.getPerioderUtilgjengelig();
        this.fraStartDate = new Date();
        this.tilStartDate = this.fraStartDate;

    }
    

    postUtilgjengelig(fraDato: string, tilDato: string) {
        this.loading = true;
        if (fraDato == "" || tilDato == "") {
            return this.errorText = "Ugylig dato"
        }
        this.errorText = "";

        var ny = new Utilgjengelig();
        ny.persId = this.ID;
        ny.fraDato = fraDato;
        ny.tilDato = tilDato;
        var body: string = JSON.stringify(ny);
        this.service.postUtilgjengelig(body).subscribe(
            retur => {
                
               // this.tilgjengelig.unshift(ny);
                this.getPerioderUtilgjengelig();
                
            },
            error => { console.log("Feil: postUtilgjengelig - " + error);  },
            () => { this.loading = false; }
        );

    }

    checkIfArrayIsEmthy(array: any) {
        if (array == null) return false;
        if (array.length == 0) return false;
        return true;
    }
    
    getPerioderUtilgjengelig() {
        this.service.GetPerioderUtilgjenelig(this.ID).subscribe(
            retur => {
                console.log("Success! getPerioderUtilgjengelig");
                this.tilgjengelig = retur;
            },
            error => console.log("Error -> getPerioderUtilgjengelig" + error)
        );
    }

    Slett(index: any, id: number) {
        console.log("i: "+index + " id: "+id);
        this.slettLoading = true;
        this.service.slettPeriodeUtilgjengelig(id).subscribe(
            retur => {
                this.tilgjengelig.splice(index, 1);
                
            },
            error => { console.log("Feil: slettPerioderUtilgjengelig - " + error); },
            () => { this.slettLoading = false; }
        );
    }

}
