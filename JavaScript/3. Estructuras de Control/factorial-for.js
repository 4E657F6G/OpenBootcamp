//Factorial For
let numero = 10
let factorial = 1;

if (numero < 0) {
    factorial = "No existe el factorial menor de 0."
} else if (numero == 0) {
    factorial = 1
} else {
    for (let i = 1; i <= numero; i++) { 
        factorial  = factorial * i; 
    }
}

console.log(factorial);