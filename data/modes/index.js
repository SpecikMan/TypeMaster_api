'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getModes = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('modes');
        const modesList = await pool.request().query(sqlQueries.modeList);
        return modesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(modeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('modes');
        const mode = await pool.request()
            .input('idMode', sql.VarChar(20), modeId)
            .query(sqlQueries.modeById);
        return mode.recordset;
    } catch (error) {
        return error.message;
    }
}

const createMode = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('modes');
        const insertMode = await pool.request()
            .input('idMode', sql.VarChar(20), data.idMode)
            .input('nameMode', sql.NVarChar(50), data.nameMode)
            .query(sqlQueries.createMode);
        return insertMode.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateMode = async(modeId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('modes');
        const update = await pool.request()
            .input('idMode', sql.VarChar(20), modeId)
            .input('nameMode', sql.NVarChar(50), data.nameMode)
            .query(sqlQueries.updateMode);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteMode = async(modeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('modes');
        const deleteMode = await pool.request()
            .input('idMode', sql.VarChar(20), modeId)
            .query(sqlQueries.deleteMode);
        return deleteMode.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getModes,
    getById,
    createMode,
    updateMode,
    deleteMode
}