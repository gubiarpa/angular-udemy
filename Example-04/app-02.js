/* Funciones de Flecha */
// Función 1
var miFuncion1 = function (a) {
    return a;
};
var miFuncion1_F = function (a) { return a; };
// Función 2
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2_F = function (a, b) { return a + b; };
// Aplicación
/*
let hulk = {
    nombre: "Hulk",
    smash(){
        console.log(this.nombre, "smash!!!");
    }
}
*/
// let nombre = "Pedro";
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { console.log(_this.nombre, "smash!!!"); }, 1500);
    }
};
hulk.smash();
// La función de Flecha, cuando se usa el this, siempre apunta al objeto principal, no al ámbito global.
