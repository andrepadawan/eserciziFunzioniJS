
function add7(number) {
    return number + 7;
}

console.log(add7(4));

function multiply(a,b){
    res = a*b;
    return res;
}

console.log(multiply(5,5));

function capital(string) {
    if (string === String){
        let newString = string;
        newString[0]=string}
    }

let string = 'oNlY CAPItaliZE FIrsT leTteR';

function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

console.log(capitalize(string));

function lastLetter(String){
    let lenght = string.length
    if (string.endsWith(" ") === true) {
        return "La stringa termina con uno spazio"
    } else {
    return string.slice(lenght - 1).toLowerCase();
}
}


console.log(lastLetter(string));