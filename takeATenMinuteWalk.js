function isValidWalk (walk) {
  if (walk.length === 10) {
    const direction = {
      n: 0,
      s: 0,
      w: 0,
      e: 0
    }
    for (let i = 0; i < walk.length; i++) {
      if (walk[i] === 'n') {
        ++direction.n
      } else if (walk[i] === 's') {
        ++direction.s
      } else if (walk[i] === 'w') {
        ++direction.w
      } else if (walk[i] === 'e') {
        ++direction.e
      }
    }
    if (direction.n === direction.s && direction.w === direction.e) {
      return true
    } else {
      return false
    }
  }
  return false
}

console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
