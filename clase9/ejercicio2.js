const prompt = require ("prompt-sync")({ sigint: true });
let peso = prompt ("Ingrese su peso: ");
let edad = prompt  ("Ingresa edad: ");
let nombre = prompt ("Ingresa tu nombre: ");
console.log("Hola "+ nombre + " tu peso es de: "+ peso + " KG y tu edad es: "+ edad + " años");