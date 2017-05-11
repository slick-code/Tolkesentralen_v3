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

    email: string;
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
    epost: string;
    passord: string;
    fakturaadresse: string;
}

export class Tolk extends Person {
    spraak: string;
    valgt: boolean;
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
    oppdragsdato: string;
    oppmoteadresse: string;
    oppmotepostnr: number;
    oppmotepoststed: string;
    andreopplysninger: string;
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



//export class Oversettelse {
//    id: number;

//    spraak: string;
//    email: string;
//    tlf: string;

//    fornavn: string;
//    etternavn: string;
//    adresse: string;
//    postnr: string;
//    poststed: string;

//    valgt: boolean;
//}
//export class Oversettelse {
//    id: number;
//    dato: string;

//    typedokument: string;
//    fraspraak: string;
//    tilspraak: string;
//    ferdiggjoresdato: string;
//    firma: string;
//    fornavn: string;
//    etternavn: string;
//    epost: string;
//    telefon: number;
//    telefax: number;
//    fakturaadresse: string;
//    postnr: string;
//    poststed: string;
//    andreopplysninger: string;

//    valgt: boolean;
//}

//export class Oppdrag {
//    id: number;
//    dato: string;

//    typetolk: string;
//    fraspraak: string;
//    tilspraak: string;
//    oppdragsdato: string;
//    frakl: string;
//    tilkl: string;
//    oppmotested: string;
//    firma: string;
//    fornavn: string;
//    etternavn: string;
//    telefon: string;
//    telefax: string;
//    epost: string;
//    fakturaadresse: string;
//    postnr: string;
//    poststed: string;
//    andreopplysninger: string;


//    kunde: Kunde;
//}


