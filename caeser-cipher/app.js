var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function caeserCipher (input, shift) {
    phrase = '';
    charCode = 0;

    for (var i = 0; i < input.length; i++) {
        if (input[i] === " "){
            phrase += ' ';
        } else {
            charcode = (input[i].charCodeAt()) + shift;
            phrase += String.fromCharCode(charcode)
        }
    }
    console.log(phrase)
}

caeserCipher(input,shift)