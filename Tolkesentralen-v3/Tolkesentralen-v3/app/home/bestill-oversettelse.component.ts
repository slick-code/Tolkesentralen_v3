import { Component, OnInit } from '@angular/core';
import { OversettelseOgKunde } from '../_models/models';
import { Spraak } from '../_models/spraak';
import { OversettelseService } from '../_services/oversettelse.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    templateUrl: './app/home/bestill-oversettelse.component.html',
    providers: [OversettelseService],
    styles: ['.error {color:red;}']
})

export class BestillOversettelseComponent implements OnInit {
    showForm: boolean;
    responseText: string;
    response: string;
    underText: string;

    errorMessage: string;
    spraak: any[];
    minDate: any;
    startDate: any;

    fraspraak: number;
    tilspraak: number;
    oppragsdato: string;
    typedokument: string;

    validerSpraak: boolean;
    ugyldigFelter: boolean;


    form: FormGroup;
    constructor(private service: OversettelseService, private fb: FormBuilder) {
        this.form = fb.group({
            firma: ["", Validators.pattern("[a-zA-ZøæåØÆÅ0-9\\-. ]{2,30}")],
            fornavn: ["", Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")],
            etternavn: ["", Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")],
            telefon: ["", Validators.pattern("[0-9]{8,12}")],
            telefax: ["", Validators.pattern("[0-9]{8,12}")],
            epost: ["", Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")],
            fakturaadresse: ["", Validators.pattern("[a-zA-ZøæåØÆÅ0-9\\-. ]{2,30}")],
            postnr: ["", Validators.pattern("[0-9]{4}")],
            poststed: ["", Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")],
            andreopplysninger: [],
        });
    }

    ngOnInit() {
        this.typedokument = "Vitnemål";
        this.showForm = true;
        this.validerSpraak = true;
        this.spraak = new Spraak().liste;
        this.minDate = this.getDateString(new Date());
        this.startDate = this.minDate;
        this.fraspraak = 1;
        this.tilspraak = 2;
        console.log("ASDADASD " + this.startDate);
        this.form.patchValue({
            frakl: "08:00",
            tilkl: "10:00"
        });
    }

    onchange(type: string) {
        console.log("TYPE :"+type);
        this.typedokument = type;
    }

    getDateString(date: any) {
        //setter +3 som vanlig deadline
        return date = date.getFullYear() + '-'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
            + ('0' + (date.getDate() +3)).slice(-2);
    }

    setFraSpraak(id: number) {
        this.fraspraak = id;
        this.ValidateSpraak();
    }

    setTilSpraak(id: number) {
        this.tilspraak = id;
        this.ValidateSpraak();
    }

    ValidateSpraak() {
        if (this.fraspraak == this.tilspraak) this.validerSpraak = false;
        else this.validerSpraak = true;

    }

    form_MarkAsTouched() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key).markAsTouched(true);
        });
    }

    tilbake() {
        this.showForm = true;
    }

    postKunde(navn: string) {
        this.ugyldigFelter = false;
        if (!this.validerSpraak || !this.form.valid) {
            this.ugyldigFelter = true;
            if (!this.form.valid) {
                this.form_MarkAsTouched();
            }
            return;
        } 
        
        this.showForm = false;
        this.response = "loading";
        console.log("FR " + this.fraspraak);
        console.log("Ti " + this.tilspraak);
        console.log("o " + this.startDate);
        console.log("k " + this.form.value.frakl);
        console.log("t " + this.form.value.tilkl);

        var ny = new OversettelseOgKunde();
        ny.typedokument = this.typedokument;
        ny.fraspraak = this.fraspraak;
        ny.tilspraak = this.tilspraak;
        ny.firma = this.form.value.firma;
        ny.fornavn = this.form.value.fornavn;
        ny.etternavn = this.form.value.etternavn;
        ny.telefon = this.form.value.telefon;
        ny.telefax = this.form.value.telefax;
        ny.epost = this.form.value.epost;
        ny.fakturaadresse = this.form.value.fakturaadresse;
        ny.postnr = this.form.value.postnr;
        ny.poststed = this.form.value.poststed;
        ny.andreopplysninger = this.form.value.andreopplysninger;
        var body: string = JSON.stringify(ny);
        this.service.postOversettelseOgKunde(body).subscribe(
            retur => {
                this.response = "success";
                this.responseText = "Takk for din bestilling!";
                this.underText = "";
            },
            error => {
                this.response = "error";
                this.responseText = "Ingen kontakt med server";
                this.underText = "Tilkoblet internett?";
            },
            () => { }
        );
    }

}
