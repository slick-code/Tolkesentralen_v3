"use strict";
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
var Login = (function () {
    function Login() {
    }
    return Login;
}());
exports.Login = Login;
var Oversettelse = (function () {
    function Oversettelse() {
    }
    return Oversettelse;
}());
exports.Oversettelse = Oversettelse;
var Kunde = (function (_super) {
    __extends(Kunde, _super);
    function Kunde() {
        return _super !== null && _super.apply(this, arguments) || this;
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