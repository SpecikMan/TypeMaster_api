'use strict';

const invData = require('../data/shop');

const getAllItems = async(req, res, next) => {
    try {
        const list = await invData.getItems();
        res.send(list);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getItem = async(req, res, next) => {
    try {
        const Id = req.params.id;
        const event = await invData.getById(Id);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addItem = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await invData.createItem(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateItem = async(req, res, next) => {
    try {
        const Id = req.params.id;
        const data = req.body;
        const updated = await invData.updateItem(Id, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteItem = async(req, res, next) => {
    try {
        const Id = req.params.id;
        const deleted = await invData.deleteItem(Id);
        res.send(deleted);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllItems,
    getItem,
    addItem,
    updateItem,
    deleteItem
}