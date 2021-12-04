'use strict';

const detailData = require('../data/details');

const getAllDetails = async(req, res, next) => {
    try {
        const detailList = await detailData.getDetails();
        res.send(detailList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getDetail = async(req, res, next) => {
    try {
        const detailId = req.params.id;
        const event = await detailData.getById(detailId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addDetail = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await detailData.createDetail(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateDetail = async(req, res, next) => {
    try {
        const detailId = req.params.id;
        const data = req.body;
        const updated = await detailData.updateDetail(detailId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteDetail = async(req, res, next) => {
    try {
        const detailId = req.params.id;
        const deletedDetail = await detailData.deleteDetail(detailId);
        res.send(deletedDetail);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllDetails,
    getDetail,
    addDetail,
    updateDetail,
    deleteDetail
}