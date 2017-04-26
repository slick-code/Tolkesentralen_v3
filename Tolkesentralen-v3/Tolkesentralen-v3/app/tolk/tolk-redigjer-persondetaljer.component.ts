﻿// Promise Version
import { Component, OnInit } from '@angular/core';
import { Tolk } from '../_models/models';
import { TolkService } from '../_services/tolk.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/tolk/tolk-redigjer-persondetaljer.component.html',
    providers: [TolkService],
    styles: ['.error {color:red;}']
})
export class TolkRedigjerPersondetaljerComponent implements OnInit {
    errorMessage: string;
    person: Tolk;

    persId: number;
    //mode = 'Promise';

    //constructor(private kundeService: KundeService) { }
    form: FormGroup;


    Error: boolean;
    Success: boolean;
    loading: boolean;
    showForm: boolean;

    constructor(private service: TolkService, private fb: FormBuilder) {
        this.form = fb.group({

            fornavn: [],
            etternavn: [],
            epost: [],
            telefon: [],
            mobil: [],
            adresse: [],
            adresse2: [],
            postnr: [],
            poststed: []
        });

    }

    tilbake() {
        this.showForm = true;
        
    }

    ngOnInit() {
        
        this.persId = JSON.parse(localStorage.getItem('id'));
        this.getTolk();
    }


    showLoadingScreen() {
        this.showForm = false;
        this.Success = null;
        this.loading = true;
    }

    getTolk() {
        // get users from secure api end point
        this.service.getTolk(this.persId)
            .subscribe(tolk => {
                this.person = tolk;
                this.setTextToInputFields(tolk);

            });
    }

    setTextToInputFields(tolk: Tolk) {
        this.form.setValue({
            fornavn: tolk.fornavn,
            etternavn: tolk.etternavn,
            epost: tolk.email,
            telefon: "",
            mobil: "",
            adresse: tolk.adresse,
            adresse2: "",
            postnr: tolk.postnr,
            poststed: tolk.poststed
        });
    }

    updateTolk() {
        
        var ny = new Tolk();

        ny.persId = this.persId;
        ny.fornavn = this.form.value.fornavn;
        ny.etternavn = this.form.value.etternavn;
        ny.email = this.form.value.epost;
        ny.telefon = this.form.value.telefon;
        ny.telefon = this.form.value.mobil;
        ny.adresse = this.form.value.adresse;
        //ny.adresse2 = this.form.value.adresse2;
        ny.postnr = this.form.value.postnr;
        ny.poststed = this.form.value.poststed;
       

        var body: string = JSON.stringify(ny);
        this.service.updateTolk(body).subscribe(
            retur => {
                //this.Success = true;
                //this.loading = false;
                //this.person = retur;
                console.log("Sucess UpdateTolk");
            },
            error => console.log("Beklager, en feil har oppstått - " + error),
            () => console.log("ferdig post-api/bestilling")
        );

    }

}