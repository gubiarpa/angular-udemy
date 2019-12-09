
interface Xmen {
    nombre: string,
    poder: string
}

function enviarMision(xmen: Xmen ){
    console.log("Enviando a misión a:", xmen.nombre);
}

function enviarCuartel(xmen: Xmen){
    console.log("Enviando al cuartel a:", xmen.nombre);
}

let wolverine = {
    nombre: "Guepardo",
    poder: "Regeneración"
};

enviarMision(wolverine);
enviarCuartel(wolverine);