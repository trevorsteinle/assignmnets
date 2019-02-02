const express = require('express');
const algorithmRouter = express.Router();
const Algorithm = require('../models/algorithm');

algorithmRouter.route('/')
    .get((req, res, next) => {
        Algorithm.find(req.query)
            .then(algorithmCollection => res.status(200).send(algorithmCollection))
            .catch(err => {
                res.status(500);
                next(err)
            })
    })
    .post((req, res, next) => {
        const algorithmData = req.body;
        const algorithmDoc = new Algorithm(algorithmData);
        algorithmDoc.save()
            .then(savedAlgorithmDoc => res.status(201).send(savedAlgorithmDoc))
            .catch(err => {
                res.status(500);
                next(err)
            })
    })

algorithmRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id;
        Algorithm.findById(id)
            .then(foundAlgorithm => res.status(200).send(foundAlgorithm))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })

    .delete((req, res, next) => {
        const id = req.params.id;
        Algorithm.findByIdAndDelete(id)
            .then(res.status(204).send())
            .catch(err => {
                res.status(500);
                next(err);
            })

    })

    .put((req,res,next) => {
        const id = req.params.id;
        const updatedAlgorithm = req.body;
        Algorithm.findByIdAndUpdate(id, updatedAlgorithm, {new: true})
            .then(updatedAlgorithm => res.status(200).send(updatedAlgorithm))
            .catch(err => {
                res.status(500);
                next(err)
            })
    })

    module.exports = algorithmRouter