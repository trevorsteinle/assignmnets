const uuid = require('uuid');

const BountyHunter = function (hunter) {
    this._id = uuid();
    this.fName = hunter.fName;
    this.lName = hunter.lName;
    this.living = hunter.living;
    this.bounty = hunter.bounty;
    this.type = hunter.type;
}

const Database = function () {
    this.bounties = [];
}

Database.prototype.find = function () {
    return this.bounties
}

Database.prototype.save = function (bounty) {
    const newBounty = new BountyHunter(bounty);
    this.bounties.push(newBounty);
    return newBounty
}

Database.prototype.findByIdAndRemove = function (id) {
    const foundBounty = this.bounties.find(bounty => {
        return bounty._id === id;
    })
    if(foundBounty === undefined) return;
    const index = this.bounties.indexOf(foundBounty)
    this.bounties.splice(index, 1)
}

Database.prototype.findByIdAndUpdate = function (id, updates) {
    const foundBounty = this.bounties.find(bounty => {
        return bounty._id === id;
    })
    if(foundBounty === undefined) return;
    const index = this.bounties.indexOf(foundBounty);
    const newBounty = {...foundBounty, ...updates};
    this.bounties.splice(index, 1, newBounty);
    return newBounty
}

module.exports = new Database();