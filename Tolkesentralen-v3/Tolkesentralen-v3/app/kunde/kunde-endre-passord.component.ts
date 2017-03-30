// Promise Version
import { Component, OnInit } from '@angular/core';
import { Kunde } from '../_models/models';
import { KundeService } from '../_services/kunde.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/kunde/kunde-endre-passord.component.html',
    providers: [KundeService],
    styles: ['.error {color:red;}']
})
export class KundeEndrePassordComponent implements OnInit {
    errorMessage: string;
    kunder: Kunde[];
    //mode = 'Promise';

    //constructor(private kundeService: KundeService) { }
    form: FormGroup;

    constructor(private kundeService: KundeService, private fb: FormBuilder) {
        this.form = fb.group({

            gammeltpassord: [],
            nyttpassord: [],
            bekreftpassord: []
        });

    }

    ngOnInit() { this.getKunder(); }


    getKunder() {
        this.kundeService.getKunder()
            .subscribe(kunder => {
                this.kunder = kunder;
            });
    }

    postKunde() {
        var ny = new Kunde();
        //ny.gammeltpassord = this.form.value.gammeltpassord;
        //ny.nyttpassord = this.form.value.nyttpassord;
        //ny.bekreftpassord = this.form.value.bekreftpassord;




        var body: string = JSON.stringify(ny);
        this.kundeService.postKunde(body).subscribe(
            retur => {
                this.kunder.push(ny);
                console.log("Success POST : " + ny.firma);
            },
            error => console.log("Beklager, en feil har oppstått - " + error),
            () => console.log("ferdig post-api/bestilling")
        );

    }

}