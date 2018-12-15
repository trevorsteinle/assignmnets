const rs = require('readline-sync');

var enemyTypes = ["Ryu","Ken","Blanka","Guile","E. Honda","Vega"];
var items = ["Hadouken","Shoryuken","Electric Thunder","Sonic Boom","Sumo Splash","Aerial Claw Slice",];

function Enemy(){
    this.name = getRandomElement(enemyTypes),
    this.hp = Math.floor(Math.random() * (101 - 40)) + 40,
    this.hpReward = Math.floor(Math.random() * (41 - 25)) + 25,
    this.damage = Math.floor(Math.random() * (31 - 10)) + 10,
    this.item = getRandomElement(items)
}

function Player(name){
    this.name = name;
    this.hp = 100;
    this.inventory = [];
    this.enemiesKilled = 0;
}

function getRandomElement (arr){
    var index = Math.floor(Math.random() * arr.length);
    return arr[index]
}
function getRandomPlayerDamage(){
    return Math.floor(Math.random() * (30 - 10 + 1)) + 10
}

function enemyChance(){
    var chance = Math.floor(Math.random() * 5); // 1 in 5 chance
    if (chance == 1) {
        var enemy = enemies[Math.floor(Math.random() * enemies.length)];
        return enemy;
    }
}
function escapeChance() {
    return Math.floor(Math.random()*2 + 1); // between 1 and 2
}

function fight(enemy){
    enemy = enemyChance();
    console.log(enemy)
}

function printStats (){
    console.log('     Name: ' + player.name + '\n       HP: ' + player.hp + '\nInventory: ' + player.inventory + '\n    Kills: ' + player.enemiesKilled)
}

var name = rs.question('Welcome to Street Fighter RPG. Please state your name: ');

//player does not exist yet
var player = new Player(name);
console.log('Here are your starting stats:')
printStats()

// Game loop
while (true){
    var isWalking = rs.keyIn('Press \'W\' to continue down the path or \'P\' to print your stats: ', {limit: ["w","W","p","P"]});
    if (isWalking === "p" || isWalking === "P"){
        printStats()
    } else {
        var encounterEnemy = Math.random() < .3333333;
        if (encounterEnemy) {
            //generate a random enemy
            var enemy = new Enemy();
            console.log('you encountered ' + enemy.name + '!')
            var fight = rs.keyIn('Would you like to [F]ight or [R]un?', {limit: ['f','F','r','R']})
            if (fight === 'f' || fight === 'F'){
                 while (enemy.hp > 0 && player.hp > 0) {
                    var attack = rs.keyIn('Press \'A\' to attack! ', {limit: "aA"});
                    // console.log(enemy.hp)
                    enemyStartHp = enemy.hp;
                    enemy.hp -= getRandomPlayerDamage(); // change enemy.hp to reflect players random damage
                    console.log('You attacked ' + enemy.name + ' for ' + (enemyStartHp - enemy.hp) + ' HP\n' + enemy.name + ' still has ' + enemy.hp + ' HP');
                    if (enemy.hp > 0) {
                        startingHp = player.hp;
                        player.hp += -enemy.damage;
                        console.log('But, ' + enemy.name + ' hit you for ' + (startingHp - player.hp) + ' HP' )
                    } else {
                        player.enemiesKilled++
                        if ((player.hp += enemy.hpReward) > 100){
                            player.hp = 100;
                        }
                        player.inventory.push(enemy.item);
                        console.log('+' + enemy.hpReward + ' HP');
                        console.log('You killed ' + enemy.name + '!\nYour kill count is now ' + player.enemiesKilled +'\nAnd you aquired ' + enemy.item + '\nYour current have '+ player.hp + ' HP');
                    }
                }
            //potentially damage the player and escape
            } else {
                if (escapeChance() === 1){
                    console.log('Phew! You got away unscathed!')
                } else {
                    player.hp -= enemy.damage;
                    console.log(enemy.name + ' managed to attack you before you could get away')
                    console.log(player.name + ' HP: ' + player.hp)
                }
            }
        } else {
            console.log('So far the path is clear')
        }
    }   

// check player hp to give correct end game message
if (player.hp <= 0) {
    console.log('DEAD\nYou\'ve brought shame to your family')
    printStats()
    return false
}}