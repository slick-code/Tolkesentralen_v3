import { Component, OnInit } from '@angular/core';
import { Oppdrag } from '../_models/models';
import { Spraak } from '../_models/spraak';
import { OppdragService } from '../_services/oppdrag.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    templateUrl: './app/kunde/kunde-bestill-tolk.component.html',
    providers: [OppdragService],
    styles: ['.error {color:red;}']
})

export class KundeBestillTolkComponent implements OnInit {
    showForm: boolean;
    responseText: string;
    response: string;
    underText: string;

    errorMessage: string;
    spraak: any[];
    tolkTyper: string[];
    minDate: any;
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
    constructor(private service: OppdragService, private fb: FormBuilder, private router: Router) {
        this.form = fb.group({
            frakl: [],
            tilkl: [],
            andreopplysninger: [],
        });

        this.form2 = fb.group({
            oppmoteadresse: [""],
            oppmotepostnr: ["", Validators.pattern("[0-9]{4}")],
            oppmotepoststed: ["", Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")]
        });
        this.tolkTyper = ["Fremmøtetolk", "Telefontolk", "Videotolk", "Konferansetolk"];

        this.form2.valueChanges.subscribe(data => {
            if (this.ugyldigFelter) {
                if (this.form2.valid) this.ugyldigFelter = false;
            }
        })
    }

    ngOnInit() {
        this.showForm = true;
        this.validerSpraak = true;
        this.typetolk = this.tolkTyper[0];
        this.spraak = new Spraak().liste;
        this.minDate = this.getDateString(new Date());
        this.startDate = this.minDate;
        this.adresseFelt = true;
        this.fraspraak = 1;
        this.tilspraak = 2;
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
        if (nr == 0 || nr == 3) {
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

    form2_MarkAsTouched() {
        Object.keys(this.form2.controls).forEach(key => {
            this.form2.get(key).markAsTouched(true);
        });
    }

    tilbake() {
        this.showForm = true;
    }

    tilBestilling(){
        this.router.navigate(["/kunde/kunde-list-alle-tolke-bestillinger"]);
    }

    postKunde(navn: string) {
        
        this.ugyldigFelter = false;
        if (!this.validerSpraak) {
            this.ugyldigFelter = true;
            return;
        }
        if (this.adresseFelt) {
            if (!this.form2.valid) {
                this.form2_MarkAsTouched();
                this.ugyldigFelter = true;
                return;
            }
        }
        this.showForm = false;
        this.response = "loading";

        var ny = new Oppdrag();
        ny.kundeID = parseInt(localStorage.getItem('id'));
        ny.typetolk = this.typetolk;
        ny.fraspraak = this.fraspraak;
        ny.tilspraak = this.tilspraak;
        ny.oppdragsdato = this.startDate;
        ny.frakl = this.form.value.frakl;
        ny.tilkl = this.form.value.tilkl;
        ny.andreopplysninger = this.form.value.andreopplysninger;
        if (this.adresseFelt) {
            console.log("adressefelt: " + this.form.value.oppmoteadresse);
            ny.oppmoteadresse = this.form2.value.oppmoteadresse;
            ny.oppmotepostnr = this.form2.value.oppmotepostnr;
            ny.oppmotepoststed = this.form2.value.oppmotepoststed;
        }
        var body: string = JSON.stringify(ny);
        this.service.postOppdragFraKunde(body).subscribe(
            retur => {
                this.response = "success";
                this.responseText = "Takk for din bestilling!";
                this.underText = "Se Mine Bestillinger..";
            },
            error => {
                this.response = "error";
                this.responseText = "Ooops..";
                this.underText = "En feil har oppstått";
            },
            () => { }
        );
    }

}
