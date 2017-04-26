import { Component, OnInit } from '@angular/core';
import { OppdragOgKunde } from '../../_models/models';
import { OppdragService } from '../../_services/oppdrag.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './app/admin/opprett/opprett-bestilling.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})

export class OpprettBestillingComponent implements OnInit {
    errorMessage: string;
    liste: OppdragOgKunde[];

    form: FormGroup;
    constructor(private service: OppdragService, private fb: FormBuilder) {
        this.form = fb.group({

            typetolk: [],
            fraspraak: [],
            tilspraak: [],
            oppdragsdato: [],
            frakl: [],
            tilkl: [],
            oppmotested: [],
            kundenr: [],
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
        //this.getOppdrag;
    }


    //getOppdrag() {
    //    this.service.getOppdrag()
    //        .subscribe(db_liste => {
    //            this.liste = db_liste;
    //        });
    //}

    //postKunde(navn: string) {
    //    var ny = new Oppdrag();
    //    ny.typetolk = this.form.value.typetolk;
    //    ny.fraspraak = this.form.value.fraspraak;
    //    ny.tilspraak = this.form.value.tilspraak;
    //    ny.oppdragsdato = this.form.value.oppdragsdato;
    //    ny.frakl = this.form.value.fraspraak;
    //    ny.tilkl = this.form.value.tilspraak;
    //    ny.oppmotested = this.form.value.oppmotested;
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
    //            console.log("Success POST : " + ny.typetolk);
    //        },
    //        error => console.log("Beklager, en feil har oppstått - " + error),
    //        () => console.log("ferdig post-api/bestilling")
    //    );

    //}

}
