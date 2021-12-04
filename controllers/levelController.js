'use strict';

const lvData = require('../data/levels');

const getAllLevels = async(req, res, next) => {
    try {
        const list = await lvData.getLevels();
        res.send(list);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLevel = async(req, res, next) => {
    try {
        const Id = req.params.id;
        const event = await lvData.getById(Id);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addLevel = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await lvData.createLevel(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateLevel = async(req, res, next) => {
    try {
        const Id = req.params.id;
        const data = req.body;
        const updated = await lvData.updateLevel(Id, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteLevel = async(req, res, next) => {
    try {
        const Id = req.params.id;
        const deleted = await lvData.deleteLevel(Id);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllLevels,
    getLevel,
    addLevel,
    updateLevel,
    deleteLevel
}