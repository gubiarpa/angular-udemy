"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Villain = /** @class */ (function () {
    // Constructor
    function Villain(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    // Methods
    Villain.prototype.imprimir = function () {
        console.log(this.nombre + " - " + this.clave);
    };
    return Villain;
}());
exports.Villain = Villain;
