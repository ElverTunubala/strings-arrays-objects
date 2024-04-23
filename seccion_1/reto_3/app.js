function validarCorreoElectronico(correo) {
    // Verifica si el correo electrónico tiene un solo símbolo '@'
    var arrobas = correo.split('@');
    if (arrobas.length !== 2) {
        return false;
    }
    
    // Verificar si hay al menos un punto '.' después del símbolo '@'
    var puntoDespuesArroba = arrobas[1].indexOf('.') > 0;
    if (!puntoDespuesArroba) {
        return false;
    }
    
    // Verificar si el punto '.' y el símbolo '@' no están juntos
    if (correo.indexOf('@.') !== -1 || correo.indexOf('.@') !== -1) {
        return false;
    }
    
    // Verificar si el correo electrónico contiene espacios en blanco
    if (correo.indexOf(' ') !== -1) {
        return false;
    }
    
    // Si el correo electrónico cumple con todas las condiciones, devuelve true
    return true;
}


var correoIngresado = prompt("Ingrese su correo electrónico:");

// Validar el correo electrónico ingresado
if (validarCorreoElectronico(correoIngresado)) {
    console.log("Correo electrónico válido");
} else {
    console.log("Correo electrónico inválido");
}
