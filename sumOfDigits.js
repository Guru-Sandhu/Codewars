function digital_root(n) {
    let num = n.toString().split('').map(Number)
    let sum =  num.reduce( (a,b) => {return a+b})
    let temp = sum.toString();
    if (temp.length > 1 ) {
        temp = temp.split('').map(Number);
        let a = temp.slice(0);
        let b = temp.slice(-1);
        return a[0] + b [0]
    }
    return sum;
}