const prompt = require ("prompt-sync")({ sigint: true });
let altura = parseFloat(prompt("Ingrese altura: "));
let peso = parseFloat(prompt("Ingrese peso: "));
let imc = peso / (altura * altura);
console.log("El indice del valor corporal es: " + imc);
