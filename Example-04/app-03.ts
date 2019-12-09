
let avenger = {
    nombre: "Steve Rogers",
    clave: "Capitan America",
    poder: "Droga"
}

// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;

// Con destructuración...
let { poder:poder_x, nombre, clave } = avenger;

// console.log( nombre, clave, poder_x );

let avengers:string[] = [ "Thor", "Steve", "Tony" ];

let [ , , ironman ] = avengers;

console.log(ironman);