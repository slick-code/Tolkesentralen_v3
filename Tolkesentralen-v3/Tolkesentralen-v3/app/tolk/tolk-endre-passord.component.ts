﻿// Promise Version
import { Component, OnInit } from '@angular/core';
import { Oppdrag, Person } from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/tolk/tolk-endre-passord.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})
export class TolkEndrePassordComponent implements OnInit {
    errorMessage: string;
    person: Person[];
    //mode = 'Promise';

    //constructor(private kundeService: KundeService) { }
    form: FormGroup;
    Success: boolean;
    loading: boolean;
    showForm: boolean;

    constructor(private service: OppdragService, private fb: FormBuilder) {
        this.form = fb.group({

            gammeltpassord: [],
            nyttpassord: [],
            bekreftpassord: [],
        });

    }

    tilbake() {
        this.showForm = true;
    }

    ngOnInit() { }


    showLoadingScreen() {
        this.showForm = false;
        this.Success = null;
        this.loading = true;
    }

    postOppdrag() {
        var ny = new Person();

        // ny.fornavn = this.form.value.fornavn;
        // ny.etternavn = this.form.value.etternavn;
        //ny.epost = this.form.value.epost;
        //ny.telefon = this.form.value.telefon;
        //ny.mobil = this.form.value.mobil;
        //ny.adresse = this.form.value.adresse;
        //ny.adresse2 = this.form.value.adresse2;
        //ny.postnr = this.form.value.postnr;
        //ny.poststed = this.form.value.poststed;

        //ny.gammeltpassord = "hei";
        //ny.nyttpassord = "hei";
        //ny.bekreftpassord = "hei";



        //var body: string = JSON.stringify(ny);
        //this.service.getEndreProfilTolk(body).subscribe(
        //    retur => {
        //        this.Success = true;
        //        this.loading = false;
        //        this.person = retur;
        //    },
        //    error => console.log("Beklager, en feil har oppstått - " + error),
        //    () => console.log("ferdig post-api/bestilling")
        //);

    }

}