const leitor = require('readline-sync')



function main() {
let notas = [100]
let soma = 0
let media
let i 

for (let i = 1 ; i <= 100; i++); {
    notas[i] = leitor.questionInt("Entre com a nota ")
    console.log(notas);
    soma = soma + notas[i]
    
}


}

main()

