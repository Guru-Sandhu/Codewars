function findOdd (A) {
  const aObj = A.reduce((obj, a) => (obj[a] = ++obj[a] || 1, obj), {})
  for (let key in aObj) {
    if (aObj[key] % 2 !== 0) return parseInt(key)
  }
}
