"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Login = (function () {
    function Login() {
    }
    return Login;
}());
exports.Login = Login;
var Utilgjengelig = (function () {
    function Utilgjengelig() {
    }
    return Utilgjengelig;
}());
exports.Utilgjengelig = Utilgjengelig;
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
var OversettelseOgKunde = (function (_super) {
    __extends(OversettelseOgKunde, _super);
    function OversettelseOgKunde() {
        _super.apply(this, arguments);
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
var OppdragOgKunde = (function (_super) {
    __extends(OppdragOgKunde, _super);
    function OppdragOgKunde() {
        _super.apply(this, arguments);
    }
    return OppdragOgKunde;
}(Kunde));
exports.OppdragOgKunde = OppdragOgKunde;
var NavbarElement = (function () {
    function NavbarElement() {
    }
    return NavbarElement;
}());
exports.NavbarElement = NavbarElement;
var Counter = (function () {
    function Counter() {
        this.nyeoppdrag = 0;
        this.nyekunder = 0;
    }
    return Counter;
}());
exports.Counter = Counter;
var Bruker = (function () {
    function Bruker() {
    }
    return Bruker;
}());
exports.Bruker = Bruker;
//# sourceMappingURL=models.js.map