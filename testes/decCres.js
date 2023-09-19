const leitor = require('readline-sync')

let aux 
let valor1
let valor2

function dataread() {
    opcao = leitor.questionInt("Ensira uma opcao ")
    while (opcao != 1 & opcao != 2) {
        console.log("Opcao errada, ensira uma correta ");
        opcao = leitor.questionInt("Ensira uma opcao ")
    }
    
}

dataread()

function dec(params) {
    if (valor1 > valor2) {
    aux = valor1
    valor1 = valor2
    valor2 = aux
    console.log("Crescente ");
}
}

function cres(){
if (valor1 < valor2) {
    aux = valor1
    valor1 = valor2
    valor2 = aux
    console.log("Decrescente ");
}
}
