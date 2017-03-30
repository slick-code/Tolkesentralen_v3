import { Component, OnInit } from '@angular/core';
import { OversettelseOgKunde } from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './app/home/bestill-oversettelse.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})
export class BestillOversettelseComponent implements OnInit {
    errorMessage: string;
    liste: OversettelseOgKunde[];

    form: FormGroup;
    constructor(private service: OppdragService, private fb: FormBuilder) {
        this.form = fb.group({

            typedokument: [],
            fraspraak: [],
            tilspraak: [],
            ferdiggjoresdato: [],
            firma: [],
            fornavn: [],
            etternavn: [],
            telefon: [],
            telefax: [],
            epost: [],
            fakturaadresse: [],
            postnr: [],
            poststed: [], 
            andreopplysninger: [],

        });


    }

    ngOnInit() {
        //this.getOversettelser();
    }


    //getOversettelser() {
    //    this.service.getOversettelser()
    //        .subscribe(db_liste => {
    //            this.liste = db_liste;
    //        });
    //}

    //post(navn: string) {
    //    var ny = new OversettelseOgKunde();
    //    ny.typedokument = this.form.value.typedokument;
    //    ny.fraspraak = this.form.value.fraspraak;
    //    ny.tilspraak = this.form.value.tilspraak;
    //    ny.ferdiggjoresdato = this.form.value.ferdiggjoresdato;
    //    ny.firma = this.form.value.firma;
    //    ny.fornavn = this.form.value.fornavn;
    //    ny.etternavn = this.form.value.etternavn;
    //    ny.telefon = this.form.value.telefon;
    //    ny.telefax = this.form.value.telefax;
    //    ny.epost = this.form.value.epost;
    //    ny.fakturaadresse = this.form.value.fakturaadresse;
    //    ny.postnr = this.form.value.postnr;
    //    ny.poststed = this.form.value.poststed;
    //    ny.andreopplysninger = this.form.value.andreopplysninger;


    //    var body: string = JSON.stringify(ny);
    //    this.service.postOversettelse(body).subscribe(
    //        retur => {
    //            this.liste.push(ny);
    //            console.log("Success POST : " + ny.typedokument);
    //        },
    //        error => console.log("Beklager, en feil har oppstått - " + error),
    //        () => console.log("ferdig post-api/bestilling")
    //    );

    //}

}


