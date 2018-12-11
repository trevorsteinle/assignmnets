// 1) Make an array of numbers that are doubles of the first array

// arrays = [2, 5, 100];
doubleNumbers = ([2, 5, 100]);

var doubNumba = doubleNumbers.map(function doubleNumbers(arr){
    return arr * 2
})
console.log(doubNumba)
// doubleNumbers([2, 5, 100]); // [4, 10, 200]

// 2) Take an array of numbers and make them strings

var stringify = doubleNumbers.map(function(arr){
    return arr.toString()
})
console.log(stringify)
// stringItUp([2, 5, 100]); // ["2", "5", "100"]

// 3) Capitalize each of an array of names

var capitalizeMe = ["john", "JACOB", "jinGleHeimer", "schmidt"]

var capitalize = capitalizeMe.map(function capitalizeNames(arr){

    return arr.slice(0, 1).toUpperCase() + arr.substr(1).toLowerCase()
})
console.log(capitalize)
// capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4) Make an array of strings of the names

namesOnly = ([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 

var namesArrayString = namesOnly.map(function namesOnly(arr){
    return arr.name
})
console.log(namesArrayString);

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

makeStrings = ([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 

var matrixOrNot = makeStrings.map(function makeStrings(arr){
    if (arr.age < 20){
        return arr.name + " can go to the matrix"
    } else {
        return arr.name + " is under age"
    }
})
console.log(matrixOrNot)
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in h1s, and the ages in h2s

readyToPutInTheDOM = ([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])

var toTheDOM = readyToPutInTheDOM.map(function readyToPutInTheDOM(arr){
    return "<h1>" + arr.name + "</h1>" + "<h2>" + arr.age + "</h2>"
})
console.log(toTheDOM)

// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]