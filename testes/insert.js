function ins() {   
    let vetor = [4,5,2,3,1,6,8]
    let indice, copia
    
    for (let i = 1; i < 8; i++) {
        copia = vetor[i]
        indice = i
        
        while (indice > 0 && vetor[indice - 1] > copia) {
            vetor[indice] = vetor[indice - 1]
            indice--
            console.log(vetor);
        }
        vetor[indice] = copia
        console.log(vetor);
    }
    
}
ins()