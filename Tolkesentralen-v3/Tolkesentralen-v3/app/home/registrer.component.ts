﻿// Promise Version
import { Component, OnInit } from '@angular/core';
import { Kunde, Person } from '../_models/models';
import { KundeService } from '../_services/kunde.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    //moduleId: module.id,
    templateUrl: './app/home/registrer.component.html',
    providers: [KundeService],
    styles: ['.error {color:red;}']
})
export class RegistrerComponent implements OnInit {
    errorMessage: string;
    kunder: Kunde[];
    
    showForm: boolean;
    responseText: string;
    response: string;
    underText: string;

    epost: string;

    passordMatch: boolean;
    epostEksiterer: boolean;

    ugyldigFelter: boolean;

    form: FormGroup;
    constructor(private kundeService: KundeService, private fb: FormBuilder) {
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
            passord: [""],
            bekreftpassord: [""]
            
        });
        this.form.valueChanges.subscribe(data => {
            if (this.ugyldigFelter) {
                if (this.form.valid) this.ugyldigFelter = false;
            }
        })

    }

    ngOnInit() {
        this.showForm = true;
        //this.getKunder();
        this.errorMessage = "Ooops! Bestilling ble ikke sendt.";
        
    }
    
    getKunder() {
        this.kundeService.getKunder()
            .subscribe(kunder => {
                this.kunder = kunder;
            }); 
    }

    tilbake() {
        this.showForm = true;
    }

    form_MarkAsTouched() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key).markAsTouched(true);
        });
    }

    PassordMatch() {
        if (this.form.value.passord == this.form.value.bekreftpassord) {
            this.passordMatch = true;
            return true;
        } else {
            this.passordMatch = false;
            return false;
        }
    }

    AutoFill(event: any) {
        console.log("EVENT: "+ event);
        if(event !== "---auto") return
        this.form.setValue({
            firma: "Advokat-Nor",
            fornavn: "Jens",
            etternavn: "Pedersen",
            telefon: "92662755",
            telefax: "10099100",
            fakturaadresse: "Rambydalen",
            postnr: "2050",
            poststed: "Jessheim",
            epost: "mail_123@mail.no",
            passord: "1234",
            bekreftpassord: "1234"
        });
        this.form_MarkAsTouched();
    }

    responseHandler(data: any) {
        if (this.epostEksiterer) {
            this.epostEksiterer = false;
        }
    }

    Valider() {
        this.ugyldigFelter = false;
        if (!this.form.valid || !this.passordMatch) {
            this.form_MarkAsTouched();
            this.ugyldigFelter = true;
            return;
        }

        this.showForm = false;
        this.response = "loading";
        
        var body: string = JSON.stringify(this.form.value.epost);
        this.kundeService.SjekkOmEpostEksisterer(body).subscribe(
            res => {
                if (res.status == 202) {
                    this.postKunde();
                }
                else {
                    this.avbryt();
                }
                return true;
            },
            error => {
                console.log("error"+error)
                this.avbryt();
            },
            () => { }
        );
    }

    avbryt() {
        this.response = "";
        this.showForm = true;
        this.epostEksiterer = true;
        return;
    }

    postKunde() {
        var ny = new Kunde();
        ny.firma = this.form.value.firma;
        ny.fornavn = this.form.value.fornavn;
        ny.etternavn = this.form.value.etternavn;
        ny.telefon = this.form.value.telefon;
        ny.telefax = this.form.value.telefax;
        ny.epost = this.form.value.epost;
        ny.passord = this.form.value.passord;
        ny.fakturaadresse = this.form.value.fakturaadresse;
        ny.postnr = this.form.value.postnr;
        ny.poststed = this.form.value.poststed;
        
        var body: string = JSON.stringify(ny);
        
        this.kundeService.postKunde(body).subscribe(
            retur => {
                this.response = "success";
                this.responseText = "Din registrering er sendt";
                this.underText = "Takk for ditt medlemskap";
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
   
