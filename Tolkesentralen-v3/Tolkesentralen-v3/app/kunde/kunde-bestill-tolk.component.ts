// Promise Version
import { Component, OnInit } from '@angular/core';
import { Oppdrag } from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/kunde/kunde-bestill-tolk.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})
export class KundeBestillTolkComponent implements OnInit {
    errorMessage: string;
    oppdrag: Oppdrag[];
    //brukerID: number;
    form: FormGroup;
    Success: boolean;
    loading: boolean;
    showForm: boolean;

    constructor(private service: OppdragService, private fb: FormBuilder) {
        this.form = fb.group({

            typetolk: [],
            fraspraak: [],
            tilspraak: [],
            oppdragsdato: [],
            frakl: [],
            tilkl: [],
            oppmotested: [],
            andreopplysninger: []
        });

    }

    tilbake() {
        this.showForm = true;
    }

    ngOnInit() {
        this.showForm = true;
    }

    showLoadingScreen() {
        this.showForm = false;
        this.Success = null;
        this.loading = true;
    }

    postOppdrag() {
        this.loading = true;
        this.showForm = false;

        var ny = new Oppdrag();
        ny.kundeID = parseInt(localStorage.getItem('id'));
        //ny.typetolk = this.form.value.typetolk;
        //ny.fraspraak = this.form.value.fraspraak;
        //ny.tilspraak = this.form.value.tilspraak;
        //ny.oppdragsdato = this.form.value.oppdragsdato;
        //ny.frakl = this.form.value.frakl;
        //ny.tilkl = this.form.value.tilkl;
        //ny.sted = this.form.value.oppmptested;
        //ny.andreopplysninger = this.form.value.andreopplysninger;
        ny.dato = Date.now();
        //ny.kundeID = 19;
        ny.typetolk = "Fremmedmøte";
        ny.fraspraak = "spansk";
        ny.tilspraak = "tysk"
        ny.oppdragsdato = "12-12-12";
        ny.frakl = "10:10";
        ny.tilkl = "10:10";
        ny.sted = "Jamaca";
        ny.andreopplysninger = "Jamaca MAN";

        var body: string = JSON.stringify(ny);
        this.service.postOppdragFraKunde(body).subscribe(
            retur => {
                this.Success = true;
                this.loading = false;
                console.log("Success POST oppdrag : " + ny.typetolk);
            },
            error => { console.log("Beklager, en feil har oppstått - " + error); this.loading = false; },
            () => console.log("ferdig post-api/bestilling")
        );

    }

}


