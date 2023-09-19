const leitor = require("readline-sync")


let n1 = leitor.questionInt("Digite um numero: ");
let n2 = leitor.questionInt("Digite outro numero: ");

let n3 = n1*n2;

console.log(n3);

if(n3 > 20){
    console.log("Numero excedido");
}else{
    console.log("Numero dentro dos conformes");
}