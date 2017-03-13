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
    telefon: number;
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