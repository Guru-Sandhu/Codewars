function mineLocation(field){
    let result = [];
    for (let i = 0; i < field.length ; i++) {
      for (let j = 0; j < field[i].length; j++) {
        if (field[i][j] === 1) {
          result.push(i);
          result.push(j)
        }
      }
    }
    return result;
}

console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ])); // [0,0]