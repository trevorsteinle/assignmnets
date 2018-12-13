const rs = require('readline-sync');

var enemies = [
    {name: 'enemy1',
    health: '100',
    damage: enemyDamage(),
    hpBonus: '40'},
    {name: 'enemy2',
    health: '80',
    damage: enemyDamage(),
    hpBonus: '30'},
    {name: 'enemy3',
    health: '60',
    damage: enemyDamage(),
    hpBonus: '20'}
]
console.log(enemies);
var asdf = enemies[Math.floor(Math.random() * enemies.length)];
console.log(asdf)

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
enemyChance();

function enemyDamage() {
    return Math.floor(Math.random() * (30 - 10 + 1)) + 10;
}

function escapeChance(player, choice, enemy) {
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

var name = rs.question('Welcome Adventurer, Please tell us your name so we know what to engrave on your tombstone: ');
var player = new Player(name); //player does not exist yet

var start = rs.keyIn('Press \'w\' to continue: ', {limit: "w"});
// //promt user for name and info

while(true) {
    // var isWalking = rs.keyIn('Press \'w\' to walk to continue: ', {limit: "w"});
    escapeChance()
}