function getNombre(){
    return "Billy";
}

let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

let texto = `Hola, ${ nombre } ${ apellido } (${ edad })`;
let texto2 = `${ getNombre() }`;

console.log(texto2);