

let correoIngresado = prompt("Ingrese su correo electrónico:");

if (validarCorreoElectronico(correoIngresado)) {
    console.log("Correo electrónico válido");
} else {
    console.log("Correo electrónico inválido");
}

// funcion para validar el correo electronico
function validarCorreoElectronico(correo) {
    
    // Verifica si tiene un solo símbolo '@'
    let arrobas = correo.split('@');
    
    if (arrobas.length !== 2) {
        return false;
    }
    
    // Verificar si hay al menos un punto '.' después del símbolo '@'
    let puntoDespuesArroba = arrobas[1].indexOf('.') >0;
    
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
    // Verifica si despues del punto hay mas caracteres
    let punto = correo.split('.');
    
    if (punto.length <2) {
        return false;
    }
    
    // Si cumple todas las condiciones, devuelve true
    return true;
}

