'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getDetails = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('details');
        const detailList = await pool.request().query(sqlQueries.detailList);
        return detailList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(detailId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('details');
        const detail = await pool.request()
            .input('idLevelDetails', sql.VarChar(20), detailId)
            .query(sqlQueries.detailById);
        return detail.recordset;
    } catch (error) {
        return error.message;
    }
}

const createDetail = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('details');
        const insertDetail = await pool.request()
            .input('idLevelDetails', sql.VarChar(20), data.idLevelDetails)
            .input('idAccount', sql.VarChar(20), data.idAccount)
            .input('idLevel', sql.VarChar(20), data.idLevel)
            .input('score', sql.BigInt, data.score)
            .input('timeLeft', sql.NVarChar(10), data.timeLeft)
            .input('datePlayed', sql.Date, data.datePlayed)
            .input('isLike', sql.Bit, data.isLike)
            .input('wpm', sql.Float, data.wpm)
            .input('wps', sql.Float, data.wps)
            .input('correct', sql.Int, data.correct)
            .input('wrong', sql.Int, data.wrong)
            .input('accuracy', sql.NVarChar(10), data.accuracy)
            .input('chartData', sql.NVarChar(sql.MAX), data.chartData)
            .query(sqlQueries.createDetail);
        return insertDetail.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateDetail = async(idDetail, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('details');
        const update = await pool.request()
            .input('idLevelDetails', sql.VarChar(20), data.idLevelDetails)
            .input('idAccount', sql.VarChar(20), data.idAccount)
            .input('idLevel', sql.VarChar(20), data.idLevel)
            .input('score', sql.BigInt, data.score)
            .input('timeLeft', sql.NVarChar(10), data.timeLeft)
            .input('datePlayed', sql.Date, data.datePlayed)
            .input('isLike', sql.Bit, data.isLike)
            .input('wpm', sql.Float, data.wpm)
            .input('wps', sql.Float, data.wps)
            .input('correct', sql.Int, data.correct)
            .input('wrong', sql.Int, data.wrong)
            .input('accuracy', sql.NVarChar(10), data.accuracy)
            .input('chartData', sql.NVarChar(sql.MAX), data.chartData)
            .query(sqlQueries.updateDetail);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteDetail = async(idDetail) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('details');
        const deleteDetail = await pool.request()
            .input('idLevelDetails', sql.VarChar(20), idDetail)
            .query(sqlQueries.deleteDetail);
        return deleteDetail.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getDetails,
    getById,
    createDetail,
    updateDetail,
    deleteDetail
}