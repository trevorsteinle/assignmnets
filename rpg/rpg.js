const rs = require('readline-sync');

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

var items = ['item1','item2','item3','item4','item5','item6'];

function Player(name){
    this.name = name;
    this.hp = 100;
    this.inventory = [];
    this.enmiesKilled = 0;
}

function enemyChance(){
    var chance = Math.floor(Math.random() * 5); // 1 in 5 chance
    if (chance == 1) {
        var enemy = enemies[Math.floor(Math.random() * enemies.length)];
        return enemy;
    }
}
function escapeChance() {
    return Math.floor(Math.random()*2 + 1);
}

function fight(enemy){
    enemy = enemyChance();
    console.log(enemy)
}

function printStats (){
    console.log('     Name: ' + player.name + '\n       HP: ' + player.hp + '\nInventory: ' + player.inventory + '\n    Kills: ' + player.enmiesKilled)
}

var name = rs.question('Welcome Adventurer, Please tell us your name so we know what to engrave on your tombstone: ');

//player does not exist yet
var player = new Player(name); 


// game logic       Game loop
while (true){
    var isWalking = rs.keyIn('Press \'W\' to continue down the path or \'P\' to print your stats: ', {limit: ["w","W","p","P"]});
    if (isWalking === "p" || isWalking === "P"){
        printStats()
    } else {
        var encounterEnemy = Math.random() < .3333333;
        if (encounterEnemy) {
            //generate a random enemy
            var enemy = new Enemy();
            console.log('you encountered a/n ' + enemy.name + '!')
            var fight = rs.keyIn('Would you like to [F]ight or [R]un?', {limit: ['f','F','r','R']})
            if (fight === 'f' || fight === 'F'){
                 while (enemy.hp > 0 && player.hp > 0) {
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
                }
            //potentially damage the player and escape
            } else {
                if (escapeChance() === 1){
                    console.log('Phew! You got away unscathed!')
                } else {
                    player.hp += -enemy.damage;
                    console.log('-' + enemy.damage + name.player + ': ' + player.hp)
                    console.log(enemy.name + ' managed to attack you before you could get away')
                }
            }
        } else {
            console.log('So far the path is clear')
        }
    }   

// check player hp to give correct end game message
if (player.hp <= 0) {
    console.log('You dead')
    printStats()
    return false
}}