const listaCompra = ["Leche", "Huevos", "Pan", "Manzanas", "Peras"];

listaCompra.push("Aceite de Girasol");
console.log('listaCompra :>> ', listaCompra);
listaCompra.pop();
console.log('listaCompra :>> ', listaCompra);

const peliculas = [
    {
        titulo: "John Wick",
        director: "Chad Stahelski",
        fecha: new Date(2014, 9, 13)
    },
    {
        titulo: "El código enigma",
        director: "Morten Tyldum",
        fecha: new Date(2014, 6, 08)
    },
    {
        titulo: "El Origen",
        director: "Christopher Nolan",
        fecha: new Date(2010, 5, 08)
    }
];
console.log('peliculas :>> ', peliculas);

const peliculas2 = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1));
console.log('peliculas2 :>> ', peliculas2);

const directores = peliculas.map(pelicula => {
    return pelicula.director
});
console.log('directores :>> ', directores);
const titulos = peliculas.map(pelicula => pelicula.titulo);
console.log('titulos :>> ', titulos);

const directoresTitulosConcat = directores.concat(titulos);
console.log('directoresTitulosConcat :>> ', directoresTitulosConcat);
const directoresTitulosPropagacion = [...directores, ...titulos];
console.log('directoresTitulosPropagacion :>> ', directoresTitulosPropagacion);