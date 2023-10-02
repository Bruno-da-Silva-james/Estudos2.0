function shell() {
    let array = [10,20,42,12,31,52,33]
    let gap = array.length / 2
    let j , valor
    while (gap > 1) {
        gap = gap / 3
        for (let i = gap; i < array.length; i++) {
            valor = array[i]
            j = i - gap
            while (j >= 0 && valor < array[j]) {
                array[j + gap] = array[j];
                j = j - gap;
            }
            array[j + gap] = valor;
        }
        console.log(array);
    }
    
}
