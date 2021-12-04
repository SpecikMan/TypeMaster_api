'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAllRankingLevels = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rankingLevels');
        const diffsList = await pool.request().query(sqlQueries.rkLevelList);
        return diffsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(diffId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rankingLevels');
        const diff = await pool.request()
            .input('idRankingLevel', sql.VarChar(20), diffId)
            .query(sqlQueries.rkLevelById);
        return diff.recordset;
    } catch (error) {
        return error.message;
    }
}

const createRankingLevel = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rankingLevels');
        const insertDiff = await pool.request()
            .input('idRankingLevel', sql.VarChar(20), data.idRankingLevel)
            .input('createDate', sql.Date, data.createDate)
            .input('fromRankPeriod', sql.Date, data.fromRankPeriod)
            .input('toRankPeriod', sql.Date, data.toRankPeriod)
            .input('levelContent1', sql.NVarChar(sql.MAX), data.createDate)
            .input('levelContent2', sql.NVarChar(sql.MAX), data.createDate)
            .query(sqlQueries.createRankingLevel);
        return insertDiff.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateRankingLevel = async(idDiff, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rankingLevels');
        const update = await pool.request()
            .input('idRankingLevel', sql.VarChar(20), data.idRankingLevel)
            .input('createDate', sql.Date, data.createDate)
            .input('fromRankPeriod', sql.Date, data.fromRankPeriod)
            .input('toRankPeriod', sql.Date, data.toRankPeriod)
            .input('levelContent1', sql.NVarChar(sql.MAX), data.createDate)
            .input('levelContent2', sql.NVarChar(sql.MAX), data.createDate)
            .query(sqlQueries.updateRankingLevel);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteRankingLevel = async(idDiff) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rankingLevels');
        const deleteDiff = await pool.request()
            .input('idDifficulty', sql.VarChar(20), idDiff)
            .query(sqlQueries.deleteRankingLevel);
        return deleteDiff.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getAllRankingLevels,
    getById,
    createRankingLevel,
    updateRankingLevel,
    deleteRankingLevel
}