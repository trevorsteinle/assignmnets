var rs = require('readline-sync');

var keyFound = 0;
// var win = false;

while(true) {
    //prompt user for varios things
    var options = ["Put hand in hole", "Search for key", "Open the door"];
    // var index = rs.keyInSelect(options, "What do you choose? ");

    var index = rs.keyInSelect(options, "What would you like to do?");
    var answer = options[index]
    if (index === 0) {
        console.log(`You died! Why would you blindly put your hand in the hole???`)
        return false;
    } else if (index === 2) {
        if (keyFound === 0) {
            console.log(`You can't open the door unless you find a key`)
        } else {
            console.log(`*Unlocks door using key and opens...*\nCongrats! You've managed to escape!`)
            return false;
        }
    } else if (index === 1) {
        keyFound++;
        // console.log(keyFound)
        console.log(`You've found a key!`)
    } else {
        console.log(`Game exited`)
        return false
    }
}