const leitor = require('readline-sync')

let senha = leitor.question("Senha: " )
let cont = 1+ 1


96

if (senha == "mano1805")
{
    console.log("senha correta");
}else{
    console.log("senha incorreta");
}

do {
    console.log(cont);
} while (cont <= 200);