function list_squared(m,n) {
  let matches = [];
  for (let i = m; i < n; i++) {
    let sum = divisor(i).reduce((sum,n) => sum + n*n,0)
    if (Number.isInteger(Math.sqrt(sum))) {
      matches.push([i,sum])
    }
  }
  return matches;
}
function divisor(n) {
  let divisors = [];
  for (let i = 0; i <= n / 2 ; i++) {
    if (n%i === 0) {
      divisors.push(i)
    }
  }
  divisors.push()
  return divisors.concat([n]);
}
console.log(list_squared(1,250));