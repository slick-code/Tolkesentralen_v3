"use strict";
<<<<<<< HEAD
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Login = (function () {
    function Login() {
=======
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NavbarElement = (function () {
    function NavbarElement() {
>>>>>>> 59154ed1df73281bfd747f8bd238cd8d0a801e44
    }
    return Login;
}());
exports.Login = Login;
var Person = (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
var Kunde = (function (_super) {
    __extends(Kunde, _super);
    function Kunde() {
        _super.apply(this, arguments);
    }
    return Kunde;
}(Person));
exports.Kunde = Kunde;
var Tolk = (function (_super) {
    __extends(Tolk, _super);
    function Tolk() {
        _super.apply(this, arguments);
    }
    return Tolk;
}(Person));
exports.Tolk = Tolk;
var Oversettelse = (function () {
    function Oversettelse() {
    }
    return Oversettelse;
}());
exports.Oversettelse = Oversettelse;
<<<<<<< HEAD
var OversettelseOgKunde = (function (_super) {
    __extends(OversettelseOgKunde, _super);
    function OversettelseOgKunde() {
        _super.apply(this, arguments);
=======
var Kunde = (function (_super) {
    __extends(Kunde, _super);
    function Kunde() {
        return _super !== null && _super.apply(this, arguments) || this;
>>>>>>> 59154ed1df73281bfd747f8bd238cd8d0a801e44
    }
    return OversettelseOgKunde;
}(Kunde));
exports.OversettelseOgKunde = OversettelseOgKunde;
var Oppdrag = (function () {
    function Oppdrag() {
    }
    return Oppdrag;
}());
exports.Oppdrag = Oppdrag;
var OppdragOgKunde = (function () {
    function OppdragOgKunde() {
    }
    return OppdragOgKunde;
}());
exports.OppdragOgKunde = OppdragOgKunde;
var NavbarElement = (function () {
    function NavbarElement() {
    }
    return NavbarElement;
}());
exports.NavbarElement = NavbarElement;
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
//# sourceMappingURL=models.js.map