const rs = require('readline-sync');

// var enemies = [
//     {name: 'enemy1',
//     health: '100',
//     damage: enemyDamage(),
//     hpBonus: '40'},
//     {name: 'enemy2',
//     health: '80',
//     damage: enemyDamage(),
//     hpBonus: '30'},
//     {name: 'enemy3',
//     health: '60',
//     damage: enemyDamage(),
//     hpBonus: '20'}
// ]

var enemyTypes = ["number1","number2","number3","number4","number5","number6"];
var items = ["item1","item2","item3","item4","item5","item6",];

function getRandomElement (arr){
    var index = Math.floor(Math.random() * enemyTypes.length);
    return arr[index]
}
function getRandomPlayerDamage(){
    return Math.floor(Math.random() * (30 - 10 + 1)) + 10
}

function Enemy(){
    this.name = getRandomElement(enemyTypes),
    this.hp = Math.floor(Math.random() * (101 - 40)) + 40,
    this.hpReward = Math.floor(Math.random() * (41 - 25)) + 25,
    this.damage = Math.floor(Math.random() * (31 - 10)) + 10,
    this.item = getRandomElement(items)
}

// console.log(enemies);
// var asdf = enemies[Math.floor(Math.random() * enemies.length)];
// console.log(asdf)

var items = ['item1','item2','item3','item4','item5','item6'];

function Player(name){
    this.name = name;
    this.hp = 100;
    this.inventory = [];
    this.enmiesKilled = 0;
}

function enemyChance(){
    var chance = Math.floor(Math.random() * 5);
    // console.log(chance);
    if (chance == 1) {
        var enemy = enemies[Math.floor(Math.random() * enemies.length)];
        // console.log(asdf)
        // return enemies[Math.floor(Math.random() * enemies.length)];
        return enemy;
    }
}
// enemyChance();


function enemyDamage() {
    return Math.floor(Math.random() * (30 - 10 + 1)) + 10;
}

function escapeChance(player,enemy) {
    var escape = Math.floor(Math.random()*2 + 1);
    if (choice === escape) {
        return "Phewee, you just made it out of there"
    } else {
        player.hp - enemy.damage;
    }
}
// escapeChance(player, 2, enemyChance)

function dropChance(){
    return items[Math.floor(Math.random() * items.length)];
}

function fight(enemy){
    enemy = enemyChance();
    console.log(enemy)
}
// fight();
// Functional/Business logic

// var name = rs.question('Welcome Adventurer, Please tell us your name so we know what to engrave on your tombstone: ');
// var player = new Player(name); //player does not exist yet

// var start = rs.keyIn('Press \'w\' to continue: ', {limit: "w"});

// //promt user for name and info

// while(true) {
//     // var isWalking = rs.keyIn('Press \'w\' to walk to continue: ', {limit: "w"});
//     escapeChance()
// }

// var start = rs.keyIn('Press \'w\' to continue: ', {limit: "w"});

var name = rs.question('Welcome Adventurer, Please tell us your name so we know what to engrave on your tombstone: ');
var player = new Player(name); //player does not exist yet


// game logic       Game loop
while (true){
    var isWalking = rs.question('would you like to continue on your journey?\n');
    if (isWalking){
        var encounterEnemy = Math.random() < .3333333;
        if (encounterEnemy) {
            //generate a random enemy
            var enemy = new Enemy();
            console.log('you encountered a/n ' + enemy.name + '!')
            var fight = rs.keyInYN('Would you like to fight? Y/N')
            if (fight){
                 while (enemy.hp > 0 && player.hp > 0) {
                    // console.log(player);
                    // console.log(enemy);
                    var attack = rs.keyIn('Press \'A\' to attack! ', {limit: "aA"});
                    enemyStartHp = enemy.hp;
                    enemy.hp -= getRandomPlayerDamage();
                    console.log('You attacked ' + enemy.name + ' for ' + (enemyStartHp - enemy.hp));
                    if (enemy.hp > 0) {
                        player.hp += -enemy.damage;
                    } else {
                        player.enmiesKilled++
                        if ((player.hp += enemy.hpReward) > 100){
                            player.hp = 100;
                        }
                        // player.hp += enemy.hpReward
                        player.inventory.push(enemy.item);
                        console.log('+' + enemy.hpReward);
                        console.log('You killed a(n) ' + enemy.name + '\nYour kill count is now ' + player.enmiesKilled +'\n And you aquired ' + enemy.item);
                    }
                    
                    // enemy.hp -= getRandomPlayerDamage();
                    // player.hp += -enemy.damage;
                    // console.log('enemy hp ' + enemy.hp)
                    console.log(player)
                } {
                //     // return false 
                // }
            // }else {
                
            //     //potentially damage the player and escape

            // }
        }
    } else {
        console.log('So far the path is clear')
    }
}

// check player hp to give correct end game message
// if (player.hp <= 0) {
//     console.log('You dead')
//     return false
// }