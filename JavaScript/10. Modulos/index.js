import { suma, multiplicacion } from "./controller.js"
import chalk from "chalk"

//console.log(multiplicacion(suma(1, 2), suma(4, 5)))
console.log(chalk.cyan(multiplicacion(suma(1, 2), suma(4, 5))))