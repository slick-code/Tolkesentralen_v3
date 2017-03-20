// Promise Version
import { Component, OnInit } from '@angular/core';
import { OppdragForRegistrert } from '../_models/models';
import { OppdragService } from '../_services/oppdrag.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/kunde/bestill-tolk.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})
export class BestillTolkComponent implements OnInit {
    errorMessage: string;
    oppdrag: OppdragForRegistrert[];
    //mode = 'Promise';

    //constructor(private kundeService: KundeService) { }
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
            andreopplysninger: []
        });

    }

    ngOnInit() { }

    postOppdrag() {
        var ny = new OppdragForRegistrert();
        ny.typetolk = this.form.value.typetolk;
        ny.fraspraak = this.form.value.fraspraak;
        ny.tilspraak = this.form.value.tilspraak;
        ny.oppdragsdato = this.form.value.oppdragsdato;
        ny.frakl = this.form.value.frakl;
        ny.tilkl = this.form.value.tilkl;
        ny.oppmotested = this.form.value.oppmptested;
        ny.andreopplyninger = this.form.value.andreopplysninger;

        var body: string = JSON.stringify(ny);
        this.service.postOppdrag(body).subscribe(
            retur => {
                this.oppdrag.push(ny);
                console.log("Success POST oppdrag : " + ny.typetolk);
            },
            error => console.log("Beklager, en feil har oppstått - " + error),
            () => console.log("ferdig post-api/bestilling")
        );

    }

}


