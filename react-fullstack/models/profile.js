const mongoose = require('mongoose');

// first Create algorithm
// add/select coin
// add pool,wallet,passwd profile(s) for coin 
const profileSchema = new mongoose.Schema({
    pool1: {
        type: String,
        required: true
    },
    pool2: {
        type: String,
        required: false
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
    // coins: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Coin",
    //     required: true
    // }]
    coin: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Profile', profileSchema)