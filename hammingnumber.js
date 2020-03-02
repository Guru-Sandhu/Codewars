function hamming (n) {
    let array = [1];
    let i = 0;
    let j = 0;
    let k = 0;
    for (let l = 1; l < n; l++) {
        array[l] = Math.min( array[i] * 2, array[j] * 3 , array[k] * 5);
        if ( array[l] ===  array[i] * 2 ){
            i++;
        };
        if ( array[l] === array[j] * 3){
            j++;
        };
        if ( array[l] === array[k] * 5){
            k++;
        };
    }
    return array[n-1];
}