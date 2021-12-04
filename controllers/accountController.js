'use strict';

const accountData = require('../data/accounts');

const getAllAccounts = async(req, res, next) => {
    try {
        const accountlist = await accountData.getAccounts();
        res.send(accountlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAccount = async(req, res, next) => {
    try {
        const accountId = req.params.id;
        const event = await accountData.getById(accountId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addAccount = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await accountData.createAccount(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateAccount = async(req, res, next) => {
    try {
        const accountId = req.params.id;
        const data = req.body;
        const updated = await accountData.updateAccount(accountId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteAccount = async(req, res, next) => {
    try {
        const accountId = req.params.id;
        const deletedAccount = await accountData.deleteAccount(accountId);
        res.send(deletedAccount);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllAccounts,
    getAccount,
    addAccount,
    updateAccount,
    deleteAccount
}