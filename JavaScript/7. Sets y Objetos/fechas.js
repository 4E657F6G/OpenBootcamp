const fechaHoy = new Date()
console.log('fechaHoy :>> ', fechaHoy);

const fechaNacimiento = new Date(1996, 3, 23)
console.log('fechaNacimiento :>> ', fechaNacimiento);

const hoyMasTarde = fechaHoy > fechaNacimiento
console.log('hoyMasTarde :>> ', hoyMasTarde);

const diaNacimiento = fechaNacimiento.getDate()
const mesNacimiento = fechaNacimiento.getMonth() + 1
const anioNacimiento = fechaNacimiento.getFullYear()