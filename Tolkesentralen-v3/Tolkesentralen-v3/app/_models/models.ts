
export class Login {
    id: number;
    rolle: string;
    email: string;
}

export class Utilgjengelig {
    id: number;
    persId: number;
    fraDato: string;
    tilDato: string;
}



export class Person {
    persId: number;

    epost: string;
    telefon: string;

    fornavn: string;
    etternavn: string;
    adresse: string;
    postnr: string;
    poststed: string;

    godkjent: number;
}

export class Kunde extends Person {
    firma: string;
    kontaktperson: string;
    telefax: number;
    passord: string;
    fakturaadresse: string;
}

export class SpraakDomene {
    spraakId: number;
    navn: string;
}

export class Tolk extends Person {
    //spraak: string;
    valgt: boolean;
    tilgjengelig: boolean;
    spraak: SpraakDomene[];
    utilgjengelig: Utilgjengelig[];
}



export class Oversettelse {
    kundeID: number;
    dato: any;
    typedokument: string;
    fraspraak: number;
    tilspraak: number;
    ferdiggjoresdato: string;
    andreopplysninger: string;
    fil: File;
    form: FormData;
}

export class OversettelseOgKunde extends Kunde {
    kundeID: number;
    dato: any;
    typedokument: string;
    fraspraak: number;
    tilspraak: number;
    ferdiggjoresdato: string;
    andreopplysninger: string;
    fil: File;
}

export class Oppdrag {
    oppdragID: number;
    kundeID: number;
    dato: any;
    typetolk: string;
    fraspraak: number;
    tilspraak: number;
    frakl: string;
    tilkl: string;
    fratidspunkt: Date;
    tiltidspunkt: Date;
    oppdragsdato: string;
    oppmoteadresse: string;
    oppmotepostnr: number;
    oppmotepoststed: string;
    andreopplysninger: string;
}

export class OppdragOgKunde extends Kunde {
    kundeID: number;
    dato: any;
    typetolk: string;
    fraspraak: number;
    tilspraak: number;
    frakl: string;
    tilkl: string;
    fratidspunkt: Date;
    tiltidspunkt: Date;
    oppdragsdato: string;
    oppmoteadresse: string;
    oppmotepostnr: number;
    oppmotepoststed: string;
    andreopplysninger: string;

    tolkId: number;
    tolkpost: string;
    tolktelefon: number;
    tolkfornavn: string;
    tolketternavn: string;
}

export class NavbarElement {
    nr: number;
    element: string;
}

export class Counter {
    nyeoppdrag: number = 0;
    nyeoversettelser: number;
    nyekunder: number = 0;
    oppdrag: number;
    oversettelser: number;
    kunder: number;
    avbestillinger: number;

}

export class Bruker {
    id: number;
    brukernavn: string;
    passord: string;
    rolle: string;
    godkjent: boolean;
}


