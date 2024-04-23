
let contrasenaIngresada = prompt("Ingrese una contraseña: ");

if (validarPassword(contrasenaIngresada)) {
    console.log("Contraseña segura");
    alert("contraseña segura")
} else {
    console.log("Contraseña insegura");
    console.log("debe tener al menos 8 caracteres, contener al menos un número, una letra y un caracter especial.");
}

// funcion para validar la contraseña
function validarPassword(contrasena) {

    // longitud mínima de la contraseña
    if (contrasena.length < 8) {
        return false;
    }
    
    // Verificar si tiene un numero
    if (!/\d/.test(contrasena)) {
        return false;
    }
    
    // Verificar si tiene una letra
    if (!/[a-zA-Z]/.test(contrasena)) {
        return false;
    }
    
    // Verificar si tiene un caracter especial
    if (!/[!@#$%^&*()+=_\-{}\[\]:;"'?<>,.|\/\\~`]/.test(contrasena)) {
        return false;
    }
    
    // Si cumple todo, devuelve true
    return true;
}