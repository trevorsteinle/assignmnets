// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y){
    //check data types first and throw error
    if (!(typeof x === 'number' && typeof y === 'number')){
        throw new Error('arguments must be numbers')
    }
    return x + y;
  }
//   console.log(sum(1,'asdf'));

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

try{
    console.log(sum("1","2"));
} catch (err) {
    console.log(err.message);
}


// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};

function login(username,password){
    // if (!(username === user.username && password === user.password)){    // this is prefered, but ben wanted to do it the long way for the example
    if (username !== user.username){
        throw new Error('Username is incorrect')
    }
    if (password !== user.password) {
        throw new Error('Password is incorrect')
    }
    return "login successful!";
}

// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

try{
    // console.log(login("sam","124abc"));
    console.log(login("sam","123abc"));
} catch (err) {
    console.log(err.message)
}

try{
    // console.log(login("sam","124abc"));
    // console.log(login("sam","123abc"));  // stops after first error is caught
    console.log(login("Sam","123abc"));
} catch (err) {
    console.log(err.message)
}

try{
    console.log(login("sam","113abc"));
} catch (err) {
    console.log(err.message)
}