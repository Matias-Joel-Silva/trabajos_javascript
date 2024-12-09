const prompt = require ("prompt-sync")({ sigint: true });
let dia = prompt("Ingrese dia: ");

switch (dia) {
    case "lunes":
    case "miercoles":
    case "viernes":
        console.log("Tenes clases");
    break;
    case "martes":
    case "jueves":
    case "sabado":
    case "domingo":
        console.log("No tenes clases");
    break;
    default:
        console.log("Error al escribir el dia");
    break;
}