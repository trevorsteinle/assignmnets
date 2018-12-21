var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function caeserCipher (input, shift) {
    phrase = '';
    charCode = 0;

    for (var i = 0; i < input.length; i++) {
        charcode = (input[i].charCodeAt());
        if (charcode < 97|| charcode > 122){
            phrase += input[i];
        } else {
            charcode += shift;
            if (charcode > 122) {
                charcode -= 26; 
            }
            phrase += String.fromCharCode(charcode)
        }
    }
    console.log(phrase)
}

caeserCipher(input,shift)