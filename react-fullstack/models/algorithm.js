const mongoose = require('mongoose');

// first Create algorithm
// add/select coin
// add pool,wallet,passwd profile(s) for coin
const algorithmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    kind: {
        type: String,
        enum:['GPU', 'CPU']
    }
})



module.exports = mongoose.model('Algorithm', algorithmSchema)