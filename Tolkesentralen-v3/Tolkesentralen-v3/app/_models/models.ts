export class Login {
    id: number;
    rolle: string;
    email: string;
}

export class Person {
    id: number;

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
    fraspraak: string;
    tilspraak: string;
    ferdiggjoresdato: string;
    andreopplysninger: string;
}

export class OversettelseOgKunde extends Kunde {
    kundeID: number;
    dato: any;
    typedokument: string;
    fraspraak: string;
    tilspraak: string;
    ferdiggjoresdato: string;
    andreopplysninger: string;
}

export class Oppdrag {
    kundeID: number;
    oppdragID: number;
    dato: any;
    typetolk: string;
    fraspraak: string;
    tilspraak: string;
    frakl: string;
    tilkl: string;
    oppdragsdato: string;
    sted: string;
    andreopplysninger: string;
}

<<<<<<< HEAD
export class OppdragOgKunde {
    kundeID: number;
    dato: any;
    typetolk: string;
    fraspraak: string;
    tilspraak: string;
    frakl: string;
    tilkl: string;
    oppdragsdato: string;
    sted: string;
    andreopplysninger: string;
=======
export class Tolk {
    id: number;
    spraak: string;
    email: string;
    tlf: string;
    fornavn: string;
    etternavn: string;
    adresse: string;
    postnr: string;
    poststed: string;

    valgt: boolean;
>>>>>>> 59154ed1df73281bfd747f8bd238cd8d0a801e44
}

export class NavbarElement {
    nr: number;
    element: string;
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


