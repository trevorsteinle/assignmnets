// Use the built-in array method .filter() to solve all of these problems

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

fiveAndGreaterOnly = ([3, 6, 8, 2]); 

var overFive = fiveAndGreaterOnly.filter(function fiveAndGreaterOnly(arr) {
    return (arr >= 5)
})
console.log(overFive)
/// [6, 8]


// 2) Given an array of numbers, return a new array that only includes the even numbers.

evensOnly = ([3, 6, 8, 2]);
var evenOnly = evensOnly.filter(function evensOnly(arr) {
    return (arr % 2 !== 1)
})
console.log(evenOnly)
/// [6, 8, 2]

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

fiveCharactersOrFewerOnly = (["dog", "wolf", "by", "family", "eaten", "camping"]) 

var fewerThanFiveChar = fiveCharactersOrFewerOnly.filter(function fiveCharactersOrFewerOnly(arr) {
    return (arr.length <= 5)
})
console.log(fewerThanFiveChar)
// ["by", "dog", "wolf", "eaten"]

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

peopleWhoBelongToTheIlluminati = ([
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
])

var membersOnly = peopleWhoBelongToTheIlluminati.filter(function peopleWhoBelongToTheIlluminati(arr){
    return arr.member
})
console.log(membersOnly)

// 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)

ofAge = ([
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

var noMatrixForYou = ofAge.filter(function ofAge(arr){
    return arr.age > 18
})
console.log(noMatrixForYou)