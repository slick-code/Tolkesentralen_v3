// Promise Version
import { Component, OnInit } from '@angular/core';
import { Kunde, Person } from '../../_models/models';
import { KundeService } from '../../_services/kunde.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/admin/opprett/opprett-kunde.component.html',
    providers: [KundeService],
    styles: ['.error {color:red;}']
})
export class OpprettKundeComponent implements OnInit {
    errorMessage: string;
    kunder: Kunde[];

    resultText: string;

    Success: boolean;
    loading: boolean;
    showForm: boolean;
    form: FormGroup;

    constructor(private kundeService: KundeService, private fb: FormBuilder) {
        this.form = fb.group({

            firma: [],
            fornavn: [],
            etternavn: [],
            telefon: [],
            telefax: [],
            epost: [],
            passord: [],
            fakturaadresse: [],
            postnr: [],
            poststed: []
        });

    }

    ngOnInit() {
        this.showForm = true;
        //this.getKunder();
        this.errorMessage = "Ooops! Bestilling ble ikke sendt."
    }

    showLoadingScreen() {
        this.showForm = false;
        this.Success = null;
        this.loading = true;
    }


    getKunder() {
        this.kundeService.getKunder()
            .subscribe(kunder => {
                this.kunder = kunder;
            });
    }

    tilbake() {
        this.showForm = true;
    }

    postKunde() {
        this.loading = true;
        this.showForm = false;


        var ny = new Kunde();
        ny.firma = this.form.value.firma;
        ny.fornavn = this.form.value.fornavn;
        ny.etternavn = this.form.value.etternavn;
        ny.telefon = this.form.value.telefon;
        ny.telefax = this.form.value.telefax;
        ny.epost = this.form.value.epost;
        ny.passord = this.form.value.passord;
        ny.fakturaadresse = this.form.value.fakturaadresse;
        ny.postnr = this.form.value.postnr;
        ny.poststed = this.form.value.poststed;
        ny.email = this.form.value.email;

        var body: string = JSON.stringify(ny);

        this.kundeService.postKunde(body).subscribe(
            retur => {
                this.Success = true;
                this.loading = false;
                this.kunder.push(ny);
                console.log("Success POST : " + ny.firma);
            },
            error => { console.log("Beklager, en feil har oppstått - " + error); this.loading = false; },
            () => console.log("ferdig post-api/bestilling")
        );


    }

}

