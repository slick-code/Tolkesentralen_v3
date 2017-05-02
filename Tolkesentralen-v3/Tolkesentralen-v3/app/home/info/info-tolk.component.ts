import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: "./app/home/info/info-tolk.html"
})

export class InfoTolkComponent {

    Skjermtolk: boolean;
    FMTolk: boolean;
    Telefontolk: boolean;
    Videotolk: boolean;
    Konferansetolk: boolean;

    ngOnInit() {
        this.setSkjermtolk();
    }

    setSkjermtolk() {
        this.hide();
        this.Skjermtolk = true;
    }

    setFMTolk() {
        this.hide();
        this.FMTolk = true;
        
    }

    setTelefontolk() {
        this.hide();
        this.Telefontolk = true;
    }

    setVideotolk() {
        this.hide();
        this.Videotolk = true;
    }

    setKonferansetolk() {
        this.hide();
        this.Konferansetolk = true;
    }

    hide() {
        this.Skjermtolk = false;
        this.FMTolk = false;
        this.Telefontolk = false;
        this.Videotolk = false;
        this.Konferansetolk = false;
    }

}
