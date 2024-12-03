const prompt = require ("prompt-sync")({ sigint: true });
let celsius = parseFloat(prompt("Ingrese temperatura en Celsius: "));
let fahrenheit = celsius * 9 / 5 + 32;
console.log("La temperatura en fahrenheit es: "+fahrenheit);