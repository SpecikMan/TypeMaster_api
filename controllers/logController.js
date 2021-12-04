'use strict';

const logData = require('../data/logs');

const getAllLogs = async(req, res, next) => {
    try {
        const loglist = await logData.getLogs();
        res.send(loglist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLog = async(req, res, next) => {
    try {
        const logId = req.params.id;
        const event = await logData.getById(logId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addLog = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await logData.createLog(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateLog = async(req, res, next) => {
    try {
        const logId = req.params.id;
        const data = req.body;
        const updated = await logData.updateLog(logId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteLog = async(req, res, next) => {
    try {
        const logId = req.params.id;
        const deletedLog = await logData.deleteLog(logId);
        res.send(deletedLog);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllLogs,
    getLog,
    addLog,
    updateLog,
    deleteLog
}