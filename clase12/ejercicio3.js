const prompt = require ("prompt-sync")({ sigint: true });
let valorar = prompt("Ingrese critica: ");
switch (valorar) {
    case "muy mala":
        console.log("Calificaste como muy mala, lamentamos el mal rato.");
        break;
    case "mala":
        console.log("Calificaste como mala, podria ser peor.");
        break;
    case "mediocre":
        console.log("Calificaste como una pelicula mas del monton.");
        break;
    case "buena":
        console.log("Te gusto la pelicula.");
        break;
    case "muy buena":
        console.log("Disfrutaste de la pelicula.");
        break;
    default:
        console.log("Ingresaste una critica incorrecta.");
        break;
}