function siempreTrue() {
    return true;
}

async function Promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* idPar() {
    let id = 0
    while(true) {
        yield id += 2
    }
}