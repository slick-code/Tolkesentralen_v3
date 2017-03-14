"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NavbarElement = (function () {
    function NavbarElement() {
    }
    return NavbarElement;
}());
exports.NavbarElement = NavbarElement;
var Person = (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
var Oppdrag = (function () {
    function Oppdrag() {
    }
    return Oppdrag;
}());
exports.Oppdrag = Oppdrag;
var Tolk = (function () {
    function Tolk() {
    }
    return Tolk;
}());
exports.Tolk = Tolk;
var Oversettelse = (function () {
    function Oversettelse() {
    }
    return Oversettelse;
}());
exports.Oversettelse = Oversettelse;
var Kunde = (function (_super) {
    __extends(Kunde, _super);
    function Kunde() {
        _super.apply(this, arguments);
    }
    return Kunde;
}(Person));
exports.Kunde = Kunde;
var Hero = (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=models.js.map