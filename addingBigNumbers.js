function add(a, b) {
    let carry = 0;
    let tempSum = [];
    let aString = a.split('').reverse();
    let bString = b.split('').reverse();
    for (let i = 0; i < Math.max( aString.length , bString.length); i++) {
        let aVar = parseInt(aString[i]) ? parseInt(aString[i]) : 0;
        let bVar = parseInt(bString[i]) ? parseInt(bString[i]) : 0;
        let temp = (aVar + bVar) + carry;
        let stringedtemp = temp.toString();
        if (stringedtemp.length === 1) {
            carry = 0;
            tempSum.unshift(stringedtemp[0]);
        } else {
            carry = Number(stringedtemp[0]);
            tempSum.unshift(stringedtemp[1]);
        }
    }
    if (carry !== 0 ) {
        tempSum.unshift(carry)
    }
    return tempSum.join('');
}

console.log(add("12", "456"));