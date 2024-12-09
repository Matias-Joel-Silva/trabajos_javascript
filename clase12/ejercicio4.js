const prompt = require ("prompt-sync")({ sigint: true });
let cant = parseInt(prompt("Ingrese cantidad de numeros: "));
let impar = 0;
for (let i = 0; i < cant; i++) {
    if (i % 2 !== 0) {
        impar++;
    }
}
console.log("La cantidad de numero impares son: "+ impar);
