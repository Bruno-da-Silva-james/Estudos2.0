
function shell() {
    let vetor = [2,3,5,1,6,7,10,32]
    let n = vetor.length
    let k = n/2
    let copia
    
    console.log(k);
    for (let i = 0; i < n; i++) {
        copia = vetor[i]
        
        while (vetor[k] > vetor[i]) {
            
        }

        //if (vetor[k] > copia) {
          //  vetor[i] = vetor[k]
            //console.log(vetor);
        //}
        
        console.log(vetor);
    }
}
shell()