// Promise Version
import { Component, OnInit } from '@angular/core';
import { Kunde, Person } from '../_models/models';
import { KundeService } from '../_services/kunde.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/home/registrer.component.html',
    providers: [KundeService],
    styles: ['.error {color:red;}']
})
export class RegistrerComponent implements OnInit {
    errorMessage: string;
    kunder: Kunde[];
    //mode = 'Promise';

    //constructor(private kundeService: KundeService) { }
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
            bekreftpassord: [],
            fakturaadresse: [],
            postnr: [],
            poststed: []
        });

    }

    ngOnInit() { this.getKunder(); }


    getKunder() {
        this.kundeService.getKunder()
            .subscribe(kunder => {
                this.kunder = kunder;
            }); 
    }

    postKunde() {
        var ny = new Kunde();
        ny.firma = this.form.value.firma;
        ny.fornavn = this.form.value.fornavn;
        ny.etternavn = this.form.value.etternavn;
        ny.telefon = this.form.value.telefon;
        ny.telefax = this.form.value.telefax;
        ny.epost = this.form.value.epost;
        ny.passord = this.form.value.passord;
        ny.fakturaadresse = this.form.value.fakturaadresse;
        ny.poststed = this.form.value.poststed;
        ny.email = this.form.value.email;
        ny.passord = this.form.value.passord;

        var body: string = JSON.stringify(ny);
        this.kundeService.postKunde(body).subscribe(
            retur => {
                this.kunder.push(ny);
                console.log("Success POST : "+ ny.firma);
            },
            error => console.log("Beklager, en feil har oppstått - " + error),
            () => console.log("ferdig post-api/bestilling")
        );
        
    }
    
    }
   
