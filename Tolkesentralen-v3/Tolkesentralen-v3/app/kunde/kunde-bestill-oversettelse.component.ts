import { Component, OnInit } from '@angular/core';
import { Oversettelse } from '../_models/models';
import { Spraak } from '../_models/spraak';
import { OversettelseService } from '../_services/oversettelse.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    templateUrl: './app/kunde/kunde-bestill-oversettelse.component.html',
    providers: [OversettelseService],
    styles: ['.error {color:red;}']
})

export class KundeBestillOversettelseComponent implements OnInit {
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

    File: File;


    form: FormGroup;
    constructor(private service: OversettelseService, private fb: FormBuilder) {
        this.form = fb.group({
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
        this.fraspraak = 42;
        this.tilspraak = 93;
        this.form.patchValue({
            frakl: "08:00",
            tilkl: "10:00"
        });
    }

    onchange(type: string) {
        console.log("TYPE :" + type);
        this.typedokument = type;
    }

    getDateString(date: any) {
        //setter +3 som vanlig deadline
        return date = date.getFullYear() + '-'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
            + ('0' + (date.getDate() + 3)).slice(-2);
    }

    setFraSpraak(id: number) {
        this.fraspraak = id+1;
        this.ValidateSpraak();
    }

    setTilSpraak(id: number) {
        this.tilspraak = id+1;
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

        var ny = new Oversettelse();
        ny.dato = Date.now();
        ny.kundeID = parseInt(localStorage.getItem('id'));
        ny.typedokument = this.typedokument;
        ny.fraspraak = this.fraspraak;
        ny.tilspraak = this.tilspraak;
        ny.andreopplysninger = this.form.value.andreopplysninger;
        let formData: FormData = new FormData();
        formData.append('uploadFile', this.File, File.name);
        ny.form = formData;
        ny.fil = this.File;
        var body: string = JSON.stringify(ny);
        this.service.postOversettelseKunde(body).subscribe(
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

    fileChange(event: any) {
        
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.File = fileList[0];
            console.log("FIL: " + this.File.name);
            //let formData: FormData = new FormData();
            //formData.append('uploadFile', file, file.name);
           
            //let headers = new Headers();
            //headers.append('Content-Type', 'multipart/form-data');
            //headers.append('Accept', 'application/json');
            //let options = new RequestOptions({ headers: headers });
            //this.http.post(`${this.apiEndPoint}`, formData, options)
            //    .map(res => res.json())
            //    .catch(error => Observable.throw(error))
            //    .subscribe(
            //    data => console.log('success'),
            //    error => console.log(error)
            //    )
        }
    }

}
