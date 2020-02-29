function pigIt(str){
    let newStr = [];
    let givenStr = str.split(' ');
    for (let word of givenStr) {
        if (word === '?' || word === '!') {
            newStr.push(word)
        } else {
            newStr.push(word.split('').splice(1,word.length -1).join('') + word[0] + 'ay')
        }
    }
    return newStr.join(' ')
}