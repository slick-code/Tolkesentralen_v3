export class NavbarElement {
    nr: number;
    element: string;
}

export class Person {
    id: number;

    spraak: string;
    email: string;
    tlf: string;

    fornavn: string;
    etternavn: string;
    adresse: string;
    postnr: string;
    poststed: string;

    godkjent: number;
}

export class Oppdrag {
    id: number;
    dato: string;

    sted: string;
    tid: string;

    type: string;
    fraspraak: string;
    tilspraak: string;
    email: string;
    tlf: string;

    fornavn: string;
    etternavn: string;
    adresse: string;
    postnr: string;
    poststed: string;

    melding: string;
    firma: string;

    kunde: Kunde;
}

export class OppdragForRegistrert {
    kundeID: number;
    dato: string;
    typetolk: string;
    fraspraak: string;
    tilspraak: string;
    frakl: string;
    tilkl: string;
    oppdragsdato: string;
    oppmotested: string;
    andreopplyninger: string;
}

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
}

export class Login {
    id: number;
    rolle: string;
    email: string;
}

export class Oversettelse {
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
}

export class Kunde extends Person {
    firma: string;
    kontaktperson: string;
    telefax: number;
    epost: string;
    passord: string;
    fakturaadresse: string;
}

export class Hero {
    constructor(
        public id: number,
        public name: string) { }
}