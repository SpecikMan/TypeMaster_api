'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getFBs = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('feedback');
        const modesList = await pool.request().query(sqlQueries.fbList);
        return modesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(modeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('feedback');
        const mode = await pool.request()
            .input('idFeedback', sql.VarChar(20), modeId)
            .query(sqlQueries.fbById);
        return mode.recordset;
    } catch (error) {
        return error.message;
    }
}

const createFB = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('feedback');
        const insertMode = await pool.request()
            .input('idFeedback', sql.VarChar(20), data.idFeedback)
            .input('submitDetail', sql.NVarChar(sql.MAX), data.submitDetail)
            .input('submitDate', sql.Date, data.submitDate)
            .input('idAccount', sql.VarChar(20), data.idAccount)
            .query(sqlQueries.createFB);
        return insertMode.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateFB = async(modeId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('feedback');
        const update = await pool.request()
            .input('idFeedback', sql.VarChar(20), data.idFeedback)
            .input('submitDetail', sql.NVarChar(sql.MAX), data.submitDetail)
            .input('submitDate', sql.Date, data.submitDate)
            .input('idAccount', sql.VarChar(20), data.idAccount)
            .query(sqlQueries.updateFB);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteFB = async(modeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('feedback');
        const deleteMode = await pool.request()
            .input('idFeedback', sql.VarChar(20), modeId)
            .query(sqlQueries.deleteFB);
        return deleteMode.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getFBs,
    getById,
    createFB,
    updateFB,
    deleteFB
}