// Generador de nombres de usuario y correos electronicos

let askFromUser = true;
const myDomain = "myDomain.com"
const users = {}

while (askFromUser) {

    const name = prompt("Ingresa tu nombre completo: ").toLowerCase()
    alert(name)
    if (!name) {
        alert("Ingrese su nombre por favor")
        continue;
    }
    const fullName = name.split(" ")
    alert(fullName)

    if (fullName.length > 2) {
        alert("Por favor ingresa un nombre y un apellido")
        continue; 
    }
   
    const primeraTres = fullName[0].slice(0, 3);
    alert(primeraTres)
    const lastName = fullName[1].slice(0, 3);
    alert(lastName)

    let userName = `${primeraTres}${lastName}`;
    let email = `${userName}@${myDomain}`

    const matches = verificaNombre(userName) 
    if (matches > 0) {
        userName += matches;
    }
    console.log(userName);

    Object.assign(users, {
        [userName]: email
    });
}


function verificaNombre(username) {

    const llave = Object.keys(users);
    let matches = 0
    llave.forEach(e => {

        let semiMatch = ""
        for (let i = 0; i < e.length; i++) {
            semiMatch += e[i];
            if (semiMatch === username) {
                matches++
            }
        }

    })
    return matches;
}