// Promise Version
import { Component, OnInit } from '@angular/core';
import { Oppdrag, Person } from '../../_models/models';
import { OppdragService } from '../../_services/oppdrag.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/admin/opprett/opprett-tolk.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})
export class OpprettTolkComponent implements OnInit {
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

            tolkId:[],
            fornavn: [],
            etternavn: [],
            spraak: [],
            nivaa: [],
            ansattelsesdato: [],
            epost: [],
            passord: [],
            bekreftpassord: [],
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

    ngOnInit() { }


    showLoadingScreen() {
        this.showForm = false;
        this.Success = null;
        this.loading = true;
    }

    postOppdrag() {
        var ny = new Person();

    }

}