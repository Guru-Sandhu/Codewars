function oddOneOut(str) {
    let tempObj = str.split('').reduce((obj,key) => (obj[key] = (obj[key] +1 ) || 1,obj),{});
    let arr = [];
    let string = str.split('').reverse();
    for (let char of string) {
       if ( tempObj[char] && tempObj[char] % 2 !== 0) {
         delete tempObj[char]
         arr.push(char);
       }
    }
    return arr.reverse();
}

console.log(oddOneOut('Hello World'));