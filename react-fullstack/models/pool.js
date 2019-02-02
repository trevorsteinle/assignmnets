const mongoose = require('mongoose');

// first Create algorithm
// add/select coin
// add pool,wallet,passwd profile(s) for coin 
const poolSchema = new mongoose.Schema({
    pool: {
        type: String,
        required: true
    },
    wallet: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        // upsert: true,
        default: 'x'
    },
    coins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coin",
        required: true
    }]
})

module.exports = mongoose.model('Pool', poolSchema)