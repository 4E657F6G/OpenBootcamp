const datosPersonales = {
    nombre: "Jefry",
    apellido: "Ávila",
    edad: 26,
    altura: 178,
    eresDesarrollador: true
};
console.log('datosPersonales :>> ', datosPersonales);

const edad = datosPersonales.edad;
console.log('edad :>> ', edad);

const lista = [
    {
        ...datosPersonales
    },{
        nombre: "Cristopher",
        apellido: "Alvarado",
        edad: 25,
        altura: 177,
        eresDesarrollador: false
    },{
        nombre: "Káterin",
        apellido: "Hernandez",
        edad: 26,
        altura: 175,
        eresDesarrollador: false
    }
];
console.log('lista :>> ', lista);

const nuevaListaOrdenada = lista.sort((a, b) => b.edad - a.edad)
console.log('nuevaListaOrdenada :>> ', nuevaListaOrdenada);

console.log(nuevaListaOrdenada)