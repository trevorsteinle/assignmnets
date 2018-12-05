var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayMethods(fruit, vegetables){
// 1. Remove the last item from the vegetable array.
    vegetables.pop();
    console.log(vegetables)
// 2. Remove the first item from the fruit array.
    fruit.splice(0,1);
    console.log(fruit);
// 3. Find the index of "orange."
    var indexOfOrange = fruit.indexOf("orange");
    console.log(indexOfOrange);
// 4. Add that number to the end of the fruit array.
    fruit.push(indexOfOrange);
    console.log(fruit);
// 5. Use the length property to find the length of the vegetable array.
   var lenOfVeg = vegetables.length;
   console.log(lenOfVeg);
// 6. Add that number to the end of the vegetable array.
    vegetables.push(lenOfVeg);
    console.log(vegetables);
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = fruit.concat(vegetables);
    console.log(food);
// 8. Remove 2 elements from your new array starting at index 4 with one method.
    food.splice(4, 2);
    console.log(food);
// 9. Reverse your array.
    food.reverse();
    console.log(food);
// 10. Convert the array into a string and return it.
    food.join(",");
    console.log(food.join());
    return food.join();
}

module.exports = { arrayMethods }

// arrayMethods(fruit, vegetables)
