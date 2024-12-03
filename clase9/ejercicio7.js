let valor1 = 10;
let valor2 = 25;
let temporal = 0;

console.log("Valor 1: "+valor1 + " /Valor 2: " + valor2);

temporal = valor1;
valor1 = valor2;
valor2 = temporal;
console.log("Intercambio de valores");
console.log("Valor 1: "+valor1 + " /Valor 2: " + valor2);