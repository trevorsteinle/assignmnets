const mongoose = require('mongoose')
// first Create algorithm
// add/select coin
// add pool,wallet,passwd profile(s) for coin 
const coinSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    algorithms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Algorithm",
        required: true
    }]
})

module.exports = mongoose.model('Coin', coinSchema)