const prompt = require("prompt-sync")({ sigint: true });

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let intento = 0; 
let numeroUsuario;

while (numeroUsuario !== numeroAleatorio) {

    numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100): "), 10);
    intento++;

    if (numeroUsuario < numeroAleatorio) {
        console.log("El número es mayor.");
    } else if (numeroUsuario > numeroAleatorio) {
        console.log("El número es menor.");
    } else {
        console.log(`¡Felicidades! Adivinaste el número en ${intento} intentos.`);
    }
}
//Me ayudo chat GPT en este ejercicio