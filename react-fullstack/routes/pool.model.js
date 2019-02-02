const express = require('express');
const poolRouter = express.Router();
const Pool = require('../models/pool');

poolRouter.route('/')
    .get((req, res, next) => {
        Pool.find(req.query)
            .populate('algorithms')
            .then(poolCollection => res.status(200).send(poolCollection))
            .catch(err => {
                res.status(500);
                next(err)
            })
    })
    .post((req, res, next) => {
        const poolData = req.body;
        const poolDoc = new Pool(poolData);
        poolDoc.save()
            .then(savedPoolDoc => res.status(201).send(savedPoolDoc))
            .catch(err => {
                res.status(500);
                next(err)
            })
    })

poolRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id;
        Pool.findById(id)
            .then(foundPool => res.status(200).send(foundPool))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })

    .delete((req, res, next) => {
        const id = req.params.id;
        Pool.findByIdAndDelete(id)
            .then(res.status(204).send())
            .catch(err => {
                res.status(500);
                next(err);
            })

    })

    .put((req,res,next) => {
        const id = req.params.id;
        const updatedPool = req.body;
        Pool.findByIdAndUpdate(id, updatedPool, {new: true})
            .then(updatedPool => res.status(200).send(updatedPool))
            .catch(err => {
                res.status(500);
                next(err)
            })
    })

    module.exports = poolRouter