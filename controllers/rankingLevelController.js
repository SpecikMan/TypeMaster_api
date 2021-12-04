'use strict';

const accountData = require('../data/rankingLevels');

const getAllRankingLevels = async(req, res, next) => {
    try {
        const accountlist = await accountData.getAllRankingLevels();
        res.send(accountlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getRankingLevel = async(req, res, next) => {
    try {
        const accountId = req.params.id;
        const event = await accountData.getById(accountId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addRankingLevel = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await accountData.createRankingLevel(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateRankingLevel = async(req, res, next) => {
    try {
        const accountId = req.params.id;
        const data = req.body;
        const updated = await accountData.updateRankingLevel(accountId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteRankingLevel = async(req, res, next) => {
    try {
        const accountId = req.params.id;
        const deletedAccount = await accountData.deleteRankingLevel(accountId);
        res.send(deletedAccount);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllRankingLevels,
    getRankingLevel,
    addRankingLevel,
    updateRankingLevel,
    deleteRankingLevel
}