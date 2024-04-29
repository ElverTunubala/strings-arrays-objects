let calificacionesString = prompt("Ingresa las calificaciones del estudiante separadas por comas:");

// Convertir las calificaciones a un array 
let calificacionesArray = calificacionesString.split(",");

// sumar todas las calificaciones y calcular el promedio
let sumaCalificaciones = calificacionesArray.reduce((acumulador, calificacion) => acumulador + parseFloat(calificacion), 0);
let promedio = sumaCalificaciones / calificacionesArray.length;

console.log("El promedio de calificaciones del estudiante es:", promedio.toFixed(2));
