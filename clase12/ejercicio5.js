const prompt = require ("prompt-sync")({ sigint: true });

let notas = [];
let estudiantes = parseInt(prompt("Ingrese cantidad de estudiantes: "));
for (let i = 0 ; i < estudiantes; i++) 
{
    let nota = parseFloat(prompt(`Ingrese la calificacion del estudiante ${i+1}: `))   
    if (!isNaN(nota)) {
        notas.push(nota)
    }     
    else{
        console.log("La nota ingresada no es valida. Se ingresa 0 por default.");
        notas.push(0)    
        }
    console.log("Las notas ingresadas hasta el momento son: "+notas);
    
}