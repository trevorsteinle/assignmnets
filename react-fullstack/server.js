const express = require('express');
var mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/algorithm', require('./routes/algorithm.model'));
app.use('/api/coin', require('./routes/coin.model'));
app.use('/api/profile', require('./routes/profile.model'));

app.use((err, req, res, next) => {
    res.send({ errMsg: err.message })
})

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true },  () => {
    console.log('Connected to MongoDB')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})