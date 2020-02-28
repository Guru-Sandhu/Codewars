function arrayDiff(a, b) {
    let arrA = [];
    for (let i = 0 ; i < a.length ; i++ ) {
      if (!b.includes(a[i])) {
        arrA.push(a[i]);
      }
    }
    return arrA
}