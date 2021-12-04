'use strict';

const modeData = require('../data/modes');

const getAllModes = async(req, res, next) => {
    try {
        const modeList = await modeData.getModes();
        res.send(modeList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getMode = async(req, res, next) => {
    try {
        const modeId = req.params.id;
        const event = await modeData.getById(modeId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addMode = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await modeData.createMode(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateMode = async(req, res, next) => {
    try {
        const modeId = req.params.id;
        const data = req.body;
        const updated = await modeData.updateMode(modeId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteMode = async(req, res, next) => {
    try {
        const modeId = req.params.id;
        const deletedMode = await modeData.deleteMode(modeId);
        res.send(deletedMode);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllModes,
    getMode,
    addMode,
    updateMode,
    deleteMode
}