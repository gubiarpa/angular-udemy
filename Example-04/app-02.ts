/* Funciones de Flecha */

// Función 1
let miFuncion1 = function (a) {
    return a;
}

let miFuncion1_F = a => a;

// Función 2
let miFuncion2 = function ( a:number , b:number ){
    return a + b;
}

let miFuncion2_F = ( a:number , b:number ) => a + b;

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

let hulk = {
    nombre: "Hulk",
    smash(){
        setTimeout( () => { console.log(this.nombre, "smash!!!"); }, 1500);
    }
}
hulk.smash();

// La función de Flecha, cuando se usa el this, siempre apunta al objeto principal, no al ámbito global.