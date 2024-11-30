// ejercicio 1
const prompt = require ("prompt-sync")({ sigint: true });
//let edad = 29;
//let peso = 72;
//console.log ("Mi edad es "+ edad +" y mi peso es "+ peso +" KG");

// ejercicio 2
//let peso = prompt ("Ingrese su peso: ");
//let edad = prompt  ("Ingresa edad: ");
//let nombre = prompt ("Ingresa tu nombre: ");

//console.log("Hola "+ nombre + " tu peso es de: "+ peso + " KG y tu edad es: "+ edad + " años");

// Ejercicio 3
/*
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
*/  

// Ejercicio 4  
/*let verdadero = true;
let texto = "Tomar mates";
let numero = 10;
let nada = " ";
let suma = numero + 15;

console.log("El resultado de la suma 10 + 15 = "+ suma);
console.log(texto + " un domingo, es un golazo");

if(verdadero == true)
{
    console.log("Verdadero es TRUE");
}
    else{
        console.log("Veradero es FALSE");
    }

if(nada == null)
{
    console.log("La variable nada es NULA(null)");
}else{
    console.log("La variable nada no es NULA");
}
*/

// Ejercicio 5
/*let primerNumero = 10;
let segundoNumero = 2;
let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero;

console.log("Suma: " + primerNumero + " + " + segundoNumero + " = " + resultadoSuma);
console.log("Resta: " + primerNumero + " - " + segundoNumero + " = " + resultadoResta);
console.log("Multiplicacion: " + primerNumero + " x " + segundoNumero + " = " + resultadoMultiplicacion);
console.log("Division: " + primerNumero + " / " + segundoNumero + " = " + resultadoDivision);
*/

//Ejercicio 6
/*let var1 = 8;
let var2 = 30;
if((var1>=10)&&(var2>=10))
{
    console.log("Las dos variables son mayor que 10");
}else {
    console.log("Una o dos variables son menor que 10");
}
    */

//Ejercicio 7
/*let valor1 = 10;
let valor2 = 25;
let temporal = 0;

console.log("Valor 1: "+valor1 + " /Valor 2: " + valor2);

temporal = valor1;
valor1 = valor2;
valor2 = temporal;
console.log("Intercambio de valores");
console.log("Valor 1: "+valor1 + " /Valor 2: " + valor2);
*/

//Ejercicio 8
/* let celsius = parseFloat(prompt("Ingrese temperatura en Celsius: "));
let fahrenheit = celsius * 9 / 5 + 32;
console.log("La temperatura en fahrenheit es: "+fahrenheit);
*/

//Ejercicio 9 
/*
let altura = parseFloat(prompt("Ingrese altura: "));
let peso = parseFloat(prompt("Ingrese peso: "));
let imc = peso / (altura * altura);
console.log("El indice del valor corporal es: " + imc);
*/

//ejrecicio 10

let precioOriginal = parseFloat(prompt("Ingrese precio: $ "));
let porcentajeDescuento = parseFloat(prompt("Ingrese descuento: % "));
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
let precioFinal = precioOriginal - montoDescuento;
console.log("El monto con descuento seria: " + precioFinal);
