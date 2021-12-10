'use strict';

const diffData = require('../data/feedback');

const getAllFBs = async(req, res, next) => {
    try {
        const diffList = await diffData.getFBs();
        res.send(diffList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getFB = async(req, res, next) => {
    try {
        const diffId = req.params.id;
        const event = await diffData.getById(diffId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addFB = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await diffData.createFB(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateFB = async(req, res, next) => {
    try {
        const diffId = req.params.id;
        const data = req.body;
        const updated = await diffData.updateFB(diffId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteFB = async(req, res, next) => {
    try {
        const diffId = req.params.id;
        const deletedDiff = await diffData.deleteFB(diffId);
        res.send(deletedDiff);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllFBs,
    getFB,
    addFB,
    updateFB,
    deleteFB
}