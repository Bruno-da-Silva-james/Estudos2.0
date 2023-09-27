const vetor = [1,5,6,2,10]

let maior = 0

for (let i = 0; i < vetor.length; i++) {
    if (maior < vetor[i]) {
        maior = vetor[i]
    }
    
}
console.log(maior);