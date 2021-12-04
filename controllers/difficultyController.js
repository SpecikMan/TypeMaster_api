'use strict';

const diffData = require('../data/diffs');

const getAllDiffs = async(req, res, next) => {
    try {
        const diffList = await diffData.getDiffs();
        res.send(diffList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getDiff = async(req, res, next) => {
    try {
        const diffId = req.params.id;
        const event = await diffData.getById(diffId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addDiff = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await diffData.createDiff(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateDiff = async(req, res, next) => {
    try {
        const diffId = req.params.id;
        const data = req.body;
        const updated = await diffData.updateDiff(diffId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteDiff = async(req, res, next) => {
    try {
        const diffId = req.params.id;
        const deletedDiff = await diffData.deleteDiff(diffId);
        res.send(deletedDiff);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllDiffs,
    getDiff,
    addDiff,
    updateDiff,
    deleteDiff
}