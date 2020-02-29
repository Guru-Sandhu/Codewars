function validParentheses(parens){
    let brackets = parens.split('');
    let temp = [];
    for (let i = 0; i < brackets.length ; i++) {
        if (brackets[i] === ')' && temp.length === 0) {
            return false
        }
        if (brackets[i] === '(') {
            temp.push(brackets[i])
        } else {
            temp.pop()
        }
    }
    if (temp.length === 0) {return true}
    return false;
}