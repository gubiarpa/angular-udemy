"use strict";
exports.__esModule = true;
var Heroe = /** @class */ (function () {
    // Constructor
    function Heroe(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    // Methods
    Heroe.prototype.imprimir = function () {
        console.log(this.nombre + " - " + this.clave);
    };
    return Heroe;
}());
exports.Heroe = Heroe;
