const express = require('express');
const coinRouter = express.Router();
const Coin = require('../models/coin');

coinRouter.route('/')
    .get((req, res, next) => {
        Coin.find(req.query)
            .populate('algorithms')
            .then(coinCollection => res.status(200).send(coinCollection))
            .catch(err => {
                res.status(500);
                next(err)
            })
    })
    .post((req, res, next) => {
        const coinData = req.body;
        const coinDoc = new Coin(coinData);
        coinDoc.save()
            .then(savedCoinDoc => res.status(201).send(savedCoinDoc))
            .catch(err => {
                res.status(500);
                next(err)
            })
    })

coinRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id;
        Coin.findById(id)
            .then(foundCoin => res.status(200).send(foundCoin))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })

    .delete((req, res, next) => {
        const id = req.params.id;
        Coin.findByIdAndDelete(id)
            .then(res.status(204).send())
            .catch(err => {
                res.status(500);
                next(err);
            })

    })

    .put((req,res,next) => {
        const id = req.params.id;
        const updatedCoin = req.body;
        Coin.findByIdAndUpdate(id, updatedCoin, {new: true})
            .then(updatedCoin => res.status(200).send(updatedCoin))
            .catch(err => {
                res.status(500);
                next(err)
            })
    })

    module.exports = coinRouter