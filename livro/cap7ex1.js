const vetor = [1,200,5,2,199]

let maior = 0
let menor = 9999999

for (let i = 0; i < vetor.length; i++) {
    if (maior < vetor[i]) {
        maior = vetor[i]
    }
    
    if (menor > vetor[i]) {
        menor = vetor[i]
    }
}
console.log(maior, menor);