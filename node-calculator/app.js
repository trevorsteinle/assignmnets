var rs = require('readline-sync');

var x = rs.questionInt('Fist number: ');

var y = rs.questionInt('Second number: ');

var options = ["add","subtract","multiply","divide"];
var optionToFunction = [add(x,y),subtract(x,y),multiply(x,y),divide(x,y)];

var choiceIndex = rs.keyInSelect(options, "which operation?");

var answer = optionToFunction[choiceIndex];

function add(num1,num2){
    return num1 + num2
}
function multiply(num1,num2){
    return num1 * num2
}
function subtract(num1,num2){
    return num1 - num2
}
function divide(num1,num2){
    return num1 / num2
}

console.log('Answer: ' + answer);