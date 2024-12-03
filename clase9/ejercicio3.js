const prompt = require ("prompt-sync")({ sigint: true });
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

let edad = parseInt(prompt("Por favor, ingresa tu edad: "));
if(edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA)
    {
    console.log("Esta dentro del rango querido");
    }
else{
    console.log("No esta dentro del rango");
    }