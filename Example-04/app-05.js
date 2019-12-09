function enviarMision(xmen) {
    console.log("Enviando a misión a:", xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel a:", xmen.nombre);
}
var wolverine = {
    nombre: "Guepardo",
    poder: "Regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
