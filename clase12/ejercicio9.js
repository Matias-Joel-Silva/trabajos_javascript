const prompt = require("prompt-sync")({ sigint: true });

let opcion;
console.log("MENSAJE MOTIVACIONAL - Elije una opcion del 1 al 5 (0 para salir");
do{
    opcion = parseInt(prompt("Ingrese opcion: "));
    
    mensaje = (opcion === 1) ? "Limpia tu mente del NO PUEDO.":
        (opcion === 2) ? "Cuando pierdas, no pierdas la lección.":
        (opcion === 3) ? "Sueña como si fueras a vivir para siempre, vive como si fueses a morir hoy.":
        (opcion === 4) ? "Sé amable, porque toda persona que conoces está librando una gran batalla.":
        (opcion === 5) ? "Sé tú mismo. Todos los demás ya están ocupados.":
        (opcion === 0) ? "Elegiste salir del programa, adios." : "Opcion no valida, ingrese de nuevo" ;

    console.log(mensaje);    

}while (opcion !== 0) 