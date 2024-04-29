// Objeto donde se va almacenar los eventos
let eventos = {};
let ciclo = true
while (ciclo){
    let respuestaUsuario =prompt("1.si deseas crear un evento\n2.si deseas buscar un evento\n3.si deseas actualizar\n4.si deseas eliminar\n5.si deseas ver los eventos\nsalir")

    if (respuestaUsuario =="1"){
        crearEvento();
    }else if (respuestaUsuario =="2"){
        let nombre=prompt("Ingrese el nombre evento que desea buscar")
        buscarEventoPorNombre(nombre);
    }else if (respuestaUsuario =="3"){
        let updateEvento=parseInt(prompt("Ingrese ID del evento que desea actualizar"),2)
        actualizarEvento(updateEvento);
    }else if (respuestaUsuario =="4"){
        let deleteEvento=parseInt(prompt("Ingrese ID del evento que desea eliminar"),2)
        eliminarEvento(deleteEvento);
    }else if (respuestaUsuario =="5"){
        visualizarEventos();
    }
    else if (respuestaUsuario =="salir"){
        ciclo = false
    }
    else{
        alert("OPCION NO VALIDA")
        ciclo=false
    }
}

// Función para crear un nuevo evento
function crearEvento() {

    // Solicitar datos 
    let nombre = prompt("Ingrese el nombre del evento:");
    let fecha = prompt("Ingrese la fecha del evento (YYYY-MM-DD):");
    let descripcion = prompt("Ingrese la descripción del evento:");

    // Crear un objeto de evento con un id unico
    let id = Object.keys(eventos).length + 1;
    let nuevoEvento = {
        id: id,
        name: nombre.trim(),
        date: fecha.trim(),
        description: descripcion.trim()
    };

    // Almacenar el nuevo evento en la lista de eventos
    eventos[id] = nuevoEvento;
}

// Función para visualizar  los eventos
function visualizarEventos() {
    console.log("Lista de Eventos:");
    Object.values(eventos).forEach(evento => {
        console.log(`ID: ${evento.id}, Nombre: ${evento.name}, Fecha: ${evento.date}, Descripción: ${evento.description}`);
    });
}

// Función para buscar eventos por nombre
function buscarEventoPorNombre(nombre) {
    nombre = nombre.toLowerCase().trim();
    let eventosEncontrados = Object.values(eventos).filter(evento => evento.name.toLowerCase().includes(nombre));

    console.log("Eventos encontrados:");
    eventosEncontrados.forEach(evento => {
        console.log(`ID: ${evento.id}, Nombre: ${evento.name}, Fecha: ${evento.date}, Descripción: ${evento.description}`);
    });
}

// Función para actualizar un evento existente
function actualizarEvento(id) {
    if (eventos[id]) {
        let evento = eventos[id];
        console.log(`Evento actual: ID: ${evento.id}, Nombre: ${evento.name}, Fecha: ${evento.date}, Descripción: ${evento.description}`);

        // Solicitar al usuario modificar cualquier campo del evento
        let nombre = prompt("Ingrese el nuevo nombre del evento:");
        let fecha = prompt("Ingrese la nueva fecha del evento (YYYY-MM-DD):");
        let descripcion = prompt("Ingrese la nueva descripción del evento:");

        // Actualizar el objeto de evento
        eventos[id] = Object.assign({}, evento, {
            name: nombre.trim(),
            date: fecha.trim(),
            description: descripcion.trim()
        });

        console.log("Evento actualizado correctamente.");
    } else {
        console.log("No se encontró ningún evento con ese ID.");
    }
}

// Función para eliminar un evento existente
function eliminarEvento(id) {
    if (eventos[id]) {
        delete eventos[id];
        console.log("Evento eliminado correctamente.");
    } else {
        console.log("No se encontró ningún evento con ese ID.");
    }
}



