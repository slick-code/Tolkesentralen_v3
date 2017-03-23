// Promise Version
import { Component, OnInit } from '@angular/core';
import { Oversettelse } from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/kunde/bestill-oversettelse.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})
export class BestillOversettelseComponent implements OnInit {
    errorMessage: string;
    oppdrag: Oversettelse[];
    //brukerID: number;
    form: FormGroup;

    constructor(private service: OppdragService, private fb: FormBuilder) {
        this.form = fb.group({

            typedokument: [],
            fraspraak: [],
            tilspraak: [],
            ferdiggjoresdato: [],
            andreopplysninger: []
        });

    }

    ngOnInit() {
        //this.brukerID = parseInt(localStorage.getItem('id'));
        //console.log("ID ---->  " + this.brukerID); // TODO: fjern når ferdig testet
    }

    postOppdrag() {
        var ny = new Oversettelse();
        //ny.kundeID = parseInt(localStorage.getItem('id'));
        //ny.typetolk = this.form.value.typetolk;
        //ny.fraspraak = this.form.value.fraspraak;
        //ny.tilspraak = this.form.value.tilspraak;
        //ny.oppdragsdato = this.form.value.oppdragsdato;
        //ny.frakl = this.form.value.frakl;
        //ny.tilkl = this.form.value.tilkl;
        //ny.sted = this.form.value.oppmptested;
        //ny.andreopplysninger = this.form.value.andreopplysninger;
        ny.dato = Date.now();
        ny.kundeID = 19;
        ny.typedokument = "Juridisk";
        ny.fraspraak = "Norsk";
        ny.tilspraak = "Pashto"
        ny.ferdiggjoresdato = "12-12-12";
        ny.andreopplysninger = "Jamaca MAN";

        var body: string = JSON.stringify(ny);
        //this.service.postOppdrag(body).subscribe(
        //    retur => {
        //        this.oppdrag.push(ny);
        //        console.log("Success POST oppdrag : " + ny.typedokument);
        //    },
        //    error => console.log("Beklager, en feil har oppstått - " + error),
        //    () => console.log("ferdig post-api/bestilling")
        //);

    }

}


