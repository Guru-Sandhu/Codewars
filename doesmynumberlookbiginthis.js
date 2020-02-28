function narcissistic(value) {
    let temp = 0;
    let a = value.toString().split('');
    for (let num of a) {
    temp += num**a.length
    }
    if (temp === value) {
    return true;
    }
    return false;
}