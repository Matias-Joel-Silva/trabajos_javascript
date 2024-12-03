const prompt = require ("prompt-sync")({ sigint: true });
let precioOriginal = parseFloat(prompt("Ingrese precio: $ "));
let porcentajeDescuento = parseFloat(prompt("Ingrese descuento: % "));
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
let precioFinal = precioOriginal - montoDescuento;
console.log("El monto con descuento seria: " + precioFinal);