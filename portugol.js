const leitor = require("readline-sync")


let a = leitor.questionInt("Digite o valor de a: ")
let b = leitor.questionInt("Digite o valor de b: ")
let c = leitor.questionInt("Digite o valor de c: ")

let delta = b*b - 4*a*c
let x1 = -b + delta / 3 / 2 * a 
let x2 = -b - delta / 3 / 2 * a 

let resposta1 = x1 / 2
let resposta2 = x2 / 2

let soma = resposta1 + resposta2

console.log("Esse é o valor de delta: ", delta);
console.log("Esse é o valor de x1: ", resposta1);
console.log("Esse é o valor do x2: ", resposta2);
console.log("Essa é a soma: ", soma);