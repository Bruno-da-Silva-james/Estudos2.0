const leitor = require('readline-sync')

let n1 
let opcao

function dataReader() {
    n1 = leitor.questionInt("Escreva um valor a ser testado: ") 
    console.log("Opcao 1: Numeros par ");
    console.log("Opcao 2: Ano bissexto ");
    opcao = leitor.questionInt("Entre uma opcao: ")
    
    while (opcao != 1 & opcao != 2) {
        console.log("Valor invalido ");
        opcao = leitor.questionInt("Entre uma opcao: ")
    }
}

function par(){
    if (n1 % 2 == 0 )
    {
        return(true)
    }else {return(false)}
}

function anoBissexto(){
    if((n1 % 4 == 0 & n1 % 100 != 0) || (n1 % 400 == 0)){
        return(true)
    }else {return(false)}
}

function main(){
    dataReader()
    switch (opcao) {
        case 1:
            if (par()){
                console.log("Numero par.");
            }else console.log("Numero impar.");
            break;
        case 2:
            if (anoBissexto()){
                console.log("Ano bissexto.");
            }else console.log("Ano nao bissexto.");    	
            break;
        default:
            console.log("sla");
            break;
    }
    
}

main() 