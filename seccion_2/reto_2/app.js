let calificacionesString = prompt("Ingresa las calificaciones de los estudiantes separadas por comas:");

// Convertir las calificaciones a un array 
let calificacionesArray = calificacionesString.split(",").map(Number);

// Calcular el promedio
let promedio = calificacionesArray.reduce((total, calificacion) => total + calificacion, 0) / calificacionesArray.length;

// calificación máxima
let calificacionMaxima = Math.max(...calificacionesArray);

// calificación mínima
let calificacionMinima = Math.min(...calificacionesArray);

// aprobados (calificación mayor o igual a 70)
let aprobados = calificacionesArray.filter(calificacion => calificacion >= 70).length;

// reprobados (calificación menor a 70)
let reprobados = calificacionesArray.filter(calificacion => calificacion < 70).length;

// Ordenar las calificaciones de mayor a menor
let calificacionesOrdenadas = calificacionesArray.sort((a, b) => b - a);

// Mostrar las estadísticas de calificaciones al usuario
console.log("Estadísticas de Calificaciones:");
console.log("Promedio de Calificaciones:", promedio.toFixed(2));
console.log("Calificación Máxima:", calificacionMaxima);
console.log("Calificación Mínima:", calificacionMinima);
console.log("Número de Aprobados:", aprobados);
console.log("Número de Reprobados:", reprobados);
console.log("Lista de Calificaciones Ordenadas de Mayor a Menor:", calificacionesOrdenadas.join(", "));
