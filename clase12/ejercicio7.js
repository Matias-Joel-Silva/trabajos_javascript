const prompt = require ("prompt-sync")({ sigint: true });
let calificacion = parseInt(prompt("Ingrese calificacion del alumno (0 al 10): "));

let mensaje = (calificacion >= 9) ? "Excelente" :
            (calificacion >= 7) ? "Muy bien" :
            (calificacion >= 5) ? "Bien" :
            (calificacion >= 4) ? "Regular" : "Insuficiente";
console.log(mensaje);

