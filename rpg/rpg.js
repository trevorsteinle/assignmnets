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

var items = ['item1','item2','item3','item4','item5','item6'];

function Player(){
    this.name = name;
    this.hp = 100;
    this.inventory = [];
    this.enmiesKilled = 0;
}

function enemyChance(){
    var chance = Math.floor(Math.random() * 5);
    console.log(chance);
    if (chance == 1) {
        var asdf = enemies[Math.floor(Math.random() * enemies.length)];
        // console.log(asdf)
        // return enemies[Math.floor(Math.random() * enemies.length)];
        return asdf;
    }
}
enemyChance();

function enemyDamage() {
    return Math.floor(Math.random() * (30 - 10 + 1)) + 10;
}

function escapeChance() {
    // var rando = Math.floor(Math.random()*2);
    // console.log(rando);
    var escape = Math.floor(Math.random()*2 + 1);
    if (choice === escape) {
        return "Phewee, you just made it out of there"
    } else {
        Player.hp = player.hp - currentEnemy;
    }
}
escapeChance()

function dropChance(){
    return items[Math.floor(Math.random() * items.length)];
}

function fight(){
    enemy = enemyChance();
    console.log(enemy)
}
fight();
// Functional/Business logic

// var name = rs.question('Welcome Adventurer, Please tell us your name so we know the next ');
// var player = new Player(); //player does not exist yet

// //promt user for name and info

// while(true) {
//     var isWalking = rs.keyInSelect(['w'], 'Press \'w\' to walk to continue');
// }