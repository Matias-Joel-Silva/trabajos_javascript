const calificaciones = [
    [8,7,9], //alumno 1
    [6,9,7], //alumno 2
    [10,8,7] //alumno 3
]
console.log(calificaciones);
console.log(calificaciones[1][1]);
calificaciones[0][2] = 10;
console.log(calificaciones);
calificaciones.push([4,5,6]);
console.log(calificaciones);

let promedio = [3];
for (let i = 0; i < 4; i++) {
    promedio[i] = parseFloat((calificaciones[i][0]+calificaciones[i][1]+calificaciones[i][2])/3); 
    console.log("Promedio alumno "+(i+1)+": "+promedio[i]);           
}
