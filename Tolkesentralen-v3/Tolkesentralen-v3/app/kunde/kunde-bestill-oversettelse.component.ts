// Promise Version
import { Component, OnInit } from '@angular/core';
import { Oversettelse } from '../_models/models';
import { OversettelseService } from '../_services/oversettelse.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/kunde/kunde-bestill-oversettelse.component.html',
    providers: [OversettelseService],
    styles: ['.error {color:red;}']
})
export class KundeBestillOversettelseComponent implements OnInit {
    errorMessage: string;
    oppdrag: Oversettelse[];
    //brukerID: number;
    form: FormGroup;
    brukerID: number;

    Success: boolean;
    loading: boolean;
    showForm: boolean;

    fil: File;

    constructor(private service: OversettelseService, private fb: FormBuilder) {
        this.form = fb.group({

            typedokument: [],
            fraspraak: [],
            tilspraak: [],
            ferdiggjoresdato: [],
            andreopplysninger: []
        });

    }

    fileChange(event: any) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.fil = fileList[0];
            //let file: File = fileList[0];
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

    tilbake() {
        this.showForm = true;
    }

    ngOnInit() {
        this.showForm = true;
        this.brukerID = parseInt(localStorage.getItem('id'));

    }

    showLoadingScreen() {
        this.showForm = false;
        this.Success = null;
        this.loading = true;
    }

    postOppdrag() {
        this.loading = true;
        this.showForm = false;
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
        ny.kundeID = this.brukerID;
        ny.typedokument = "Juridisk";
        ny.fraspraak = "Norsk";
        ny.tilspraak = "Pashto"
        ny.ferdiggjoresdato = "12-12-12";
        ny.andreopplysninger = "Jamaca MAN";
        ny.fil = this.fil;

        var body: string = JSON.stringify(ny);
        this.service.postOversettelseKunde(body).subscribe(
            retur => {
                this.Success = true;
                this.loading = false;
            },
            error => { console.log("Beklager, en feil har oppstått - " + error); this.loading = false; },
            () => console.log("ferdig post-api/bestilling")
        );

    }

}


