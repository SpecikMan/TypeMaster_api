'use strict';

const accountData = require('../data/groups');

const getAllGroups = async(req, res, next) => {
    try {
        const accountlist = await accountData.getAllGroups();
        res.send(accountlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getGroupByRank = async(req, res, next) => {
    try {
        const accountId = req.params.id;
        const accountlist = await accountData.getGroupByRank(accountId);
        res.send(accountlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getGroup = async(req, res, next) => {
    try {
        const accountId = req.params.id;
        const event = await accountData.getById(accountId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addGroup = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await accountData.createGroup(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateGroup = async(req, res, next) => {
    try {
        const accountId = req.params.id;
        const data = req.body;
        const updated = await accountData.updateGroup(accountId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteGroup = async(req, res, next) => {
    try {
        const accountId = req.params.idAccount;
        const groupId = req.params.idGroup;
        const deletedAccount = await accountData.deleteGroup(groupId, accountId);
        res.send(deletedAccount);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllGroups,
    getGroup,
    addGroup,
    updateGroup,
    deleteGroup,
    getGroupByRank
}