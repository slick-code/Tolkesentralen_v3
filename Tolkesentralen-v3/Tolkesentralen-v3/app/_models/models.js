"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Kunde;
}(Person));
exports.Kunde = Kunde;
var SpraakDomene = (function () {
    function SpraakDomene() {
    }
    return SpraakDomene;
}());
exports.SpraakDomene = SpraakDomene;
var Tolk = (function (_super) {
    __extends(Tolk, _super);
    function Tolk() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        return _super !== null && _super.apply(this, arguments) || this;
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
        return _super !== null && _super.apply(this, arguments) || this;
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
