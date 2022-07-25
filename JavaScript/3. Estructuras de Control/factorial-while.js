//Factorial con while
let numero = 10
let factorial = 1;

if (numero < 0) {
    factorial = "No existe el factorial menor de 0."
} else if (numero == 0) {
    factorial = 1
} else {
    let i = 1;
    while (i <= numero) {
        factorial  = factorial * i; 
        i++;
    }
}

console.log(factorial);