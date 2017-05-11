import { Component, OnInit } from '@angular/core';
import { OppdragOgKunde } from '../_models/models';
import { Spraak } from '../_models/spraak';
import { OppdragService } from '../_services/oppdrag.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    templateUrl: './app/home/bestill-tolk.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})

export class BestillTolkComponent implements OnInit {
    errorMessage: string;
    spraak: any[];
    tolkTyper: string[];
    startDate: any;

    adresseFelt: boolean;

    typetolk: string;
    fraspraak: number;
    tilspraak: number;
    oppragsdato: string;

    validerSpraak: boolean;

    ugyldigFelter: boolean;
        

    form: FormGroup;
    form2: FormGroup;
    constructor(private service: OppdragService, private fb: FormBuilder) {
        this.form = fb.group({
            frakl: [],
            tilkl: [],
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

        this.form2 = fb.group({
            oppmoteadresse: [""],
            oppmotepostnr: ["", Validators.pattern("[0-9]{4}")],
            oppmotepoststed: ["", Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")]
        });
        this.tolkTyper = ["Fremmøtetolk", "Telefontolk", "Videotolk", "Konferansetolk"];
    }

    ngOnInit() {
        this.validerSpraak = true;
        this.typetolk = this.tolkTyper[1];
        this.spraak = new Spraak().liste;
        this.startDate = this.getDateString(new Date());
        this.adresseFelt = true; 
        this.fraspraak = 1;
        this.tilspraak = 2;
        console.log("ASDADASD " + this.startDate);
        this.form.patchValue({
            frakl: "08:00",
            tilkl: "10:00"
        });
    }

    getDateString(date: any) {
        return date = date.getFullYear() + '-'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
            + ('0' + date.getDate()).slice(-2);
    }
    

    onchange(nr: number) {
        this.typetolk = this.tolkTyper[nr];
        if (nr == 1 || nr == 4) {
            this.adresseFelt = true;;
        } else {
            this.adresseFelt = false;
        }
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

    form2_MarkAsTouched() {
        Object.keys(this.form2.controls).forEach(key => {
            this.form2.get(key).markAsTouched(true);
        });
    }

    postKunde(navn: string) {
        this.ugyldigFelter = false;
        if (!this.validerSpraak) return;
        if (this.adresseFelt) {
            if (!this.form.valid) {
                this.form_MarkAsTouched();
            }
            if (!this.form2.valid) {
                this.form2_MarkAsTouched();
                this.ugyldigFelter = true;
                return;
            }
            

        } else {
            if (!this.form.valid) {
                this.form_MarkAsTouched();
                this.ugyldigFelter = true;
                return;
            }
            
        }



        console.log("D " + this.typetolk);
        console.log("FR " + this.fraspraak);
        console.log("Ti " + this.tilspraak);
        console.log("o " + this.startDate);
        console.log("k " + this.form.value.frakl);
        console.log("t " + this.form.value.tilkl);

        return;
        //var ny = new OppdragOgKunde();
        //ny.typetolk = this.form.value.typetolk;
        //ny.fraspraak = this.form.value.fraspraak;
        //ny.tilspraak = this.form.value.tilspraak;
        //ny.oppdragsdato = this.form.value.oppdragsdato;
        //ny.frakl = this.form.value.fraspraak;
        //ny.tilkl = this.form.value.tilspraak;
        //ny.oppmoteadresse = this.form.value.oppmoteadresse;
        //ny.oppmotepostnr = this.form.value.oppmotepostnr;
        //ny.oppmotepoststed = this.form.value.oppmotepoststed;

        //ny.firma = this.form.value.firma;
        //ny.fornavn = this.form.value.fornavn;
        //ny.etternavn = this.form.value.etternavn;
        //ny.telefon = this.form.value.telefon;
        //ny.telefax = this.form.value.telefax;
        //ny.epost = this.form.value.epost;
        //ny.fakturaadresse = this.form.value.fakturaadresse;
        //ny.postnr = this.form.value.postnr;
        //ny.poststed = this.form.value.poststed;

        //ny.andreopplysninger = this.form.value.andreopplysninger;
        //var body: string = JSON.stringify(ny);
        //this.service.postOppdragOgKunde(body).subscribe(
        //    retur => {
        //        console.log("Success POST : " + ny.typetolk);
        //    },
        //    error => console.log("Beklager, en feil har oppstått - " + error),
        //    () => console.log("ferdig post-api/bestilling")
        //);
    }

}
