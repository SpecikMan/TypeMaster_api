'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getLevels = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('levels');
        const list = await pool.request().query(sqlQueries.levelList);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('levels');
        const inv = await pool.request()
            .input('idLevel', sql.VarChar(20), id)
            .query(sqlQueries.levelById);
        return inv.recordset;
    } catch (error) {
        return error.message;
    }
}

const createLevel = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('levels');
        const insert = await pool.request()
            .input('idLevel', sql.VarChar(20), data.idLevel)
            .input('nameLevel', sql.NVarChar(50), data.nameLevel)
            .input('numLike', sql.Int, data.numLike)
            .input('createDate', sql.Date, data.createDate)
            .input('updatedDate', sql.Date, data.updatedDate)
            .input('levelContent', sql.NVarChar(sql.MAX), data.levelContent)
            .input('totalWords', sql.Int, data.totalWords)
            .input('time', sql.NVarChar(10), data.time)
            .input('idDifficulty', sql.VarChar(20), data.idDifficulty)
            .input('idMode', sql.VarChar(20), data.idMode)
            .input('idPublisher', sql.VarChar(20), data.idPublisher)
            .query(sqlQueries.createLevel);
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateLevel = async(id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('levels');
        const update = await pool.request()
            .input('idLevel', sql.VarChar(20), data.idLevel)
            .input('nameLevel', sql.NVarChar(50), data.nameLevel)
            .input('numLike', sql.Int, data.numLike)
            .input('createDate', sql.Date, data.createDate)
            .input('updatedDate', sql.Date, data.updatedDate)
            .input('levelContent', sql.NVarChar(sql.MAX), data.levelContent)
            .input('totalWords', sql.Int, data.totalWords)
            .input('time', sql.NVarChar(10), data.time)
            .input('idDifficulty', sql.VarChar(20), data.idDifficulty)
            .input('idMode', sql.VarChar(20), data.idMode)
            .input('idPublisher', sql.VarChar(20), data.idPublisher)
            .query(sqlQueries.updateLevel);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteLevel = async(id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('levels');
        const deleted = await pool.request()
            .input('idLevel', sql.VarChar(20), id)
            .query(sqlQueries.deleteLevel);
        return deleted.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getLevels,
    getById,
    createLevel,
    updateLevel,
    deleteLevel
}