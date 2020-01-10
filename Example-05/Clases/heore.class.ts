export class Heroe{
    // Properties
    nombre: string;
    clave: string;

    // Constructor
    constructor(nombre: string, clave: string){
        this.nombre = nombre;
        this.clave = clave;
    }

    // Methods
    imprimir(){
        console.log(`${ this.nombre } - ${ this.clave }`);
    }
}