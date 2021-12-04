'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getLogs = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('logs');
        const logList = await pool.request().query(sqlQueries.logList);
        return logList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(logId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('logs');
        const log = await pool.request()
            .input('idLog', sql.VarChar(20), logId)
            .query(sqlQueries.logById);
        return log.recordset;
    } catch (error) {
        return error.message;
    }
}

const createLog = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('logs');
        const insertLog = await pool.request()
            .input('idLog', sql.VarChar(20), data.idLog)
            .input('idLevel', sql.VarChar(20), data.idLevel)
            .input('levelName', sql.NVarChar(50), data.levelName)
            .input('idPublisher', sql.VarChar(20), data.idPublisher)
            .input('publisherName', sql.NVarChar(50), data.publisherName)
            .input('idPlayer', sql.VarChar(20), data.idPlayer)
            .input('playerName', sql.NVarChar(50), data.playerName)
            .input('score', sql.BigInt, data.score)
            .input('wpm', sql.Float, data.wpm)
            .input('wps', sql.Float, data.wps)
            .input('correct', sql.Int, data.correct)
            .input('wrong', sql.Int, data.wrong)
            .input('accuracy', sql.NVarChar(10), data.accuracy)
            .input('timeLeft', sql.NVarChar(10), data.timeLeft)
            .input('datePlayed', sql.Date, data.datePlayed)
            .input('chartData', sql.NVarChar(sql.MAX), data.chartData)
            .query(sqlQueries.createLog);
        return insertLog.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateLog = async(idLog, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('logs');
        const update = await pool.request()
            .input('idLog', sql.VarChar(20), idLog)
            .input('idLevel', sql.VarChar(20), data.idLevel)
            .input('levelName', sql.NVarChar(50), data.levelName)
            .input('idPublisher', sql.VarChar(20), data.idPublisher)
            .input('publisherName', sql.NVarChar(50), data.publisherName)
            .input('idPlayer', sql.VarChar(20), data.idPlayer)
            .input('playerName', sql.NVarChar(50), data.playerName)
            .input('score', sql.BigInt, data.score)
            .input('wpm', sql.Float, data.wpm)
            .input('wps', sql.Float, data.wps)
            .input('correct', sql.Int, data.correct)
            .input('wrong', sql.Int, data.wrong)
            .input('accuracy', sql.NVarChar(10), data.accuracy)
            .input('timeLeft', sql.NVarChar(10), data.timeLeft)
            .input('datePlayed', sql.Date, data.datePlayed)
            .input('chartData', sql.NVarChar(sql.MAX), data.chartData)
            .query(sqlQueries.updateLog);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteLog = async(idLog) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('logs');
        const deleteLog = await pool.request()
            .input('idLog', sql.VarChar(20), idLog)
            .query(sqlQueries.deleteLog);
        return deleteLog.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getLogs,
    getById,
    createLog,
    updateLog,
    deleteLog
}