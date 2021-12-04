'use strict';

const invData = require('../data/inventory');

const getAllInvs = async(req, res, next) => {
    try {
        const list = await invData.getInvs();
        res.send(list);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getInv = async(req, res, next) => {
    try {
        const Id = req.params.id;
        const event = await invData.getById(Id);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addInv = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await invData.createInv(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateInv = async(req, res, next) => {
    try {
        const Id = req.params.id;
        const data = req.body;
        const updated = await invData.updateInv(Id, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteInv = async(req, res, next) => {
    try {
        const Id = req.params.id;
        const deleted = await invData.deleteInv(Id);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllInvs,
    getInv,
    addInv,
    updateInv,
    deleteInv
}