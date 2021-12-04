'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getDiffs = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('diffs');
        const diffsList = await pool.request().query(sqlQueries.diffList);
        return diffsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(diffId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('diffs');
        const diff = await pool.request()
            .input('idDifficulty', sql.VarChar(20), diffId)
            .query(sqlQueries.diffById);
        return diff.recordset;
    } catch (error) {
        return error.message;
    }
}

const createDiff = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('diffs');
        const insertDiff = await pool.request()
            .input('idDifficulty', sql.VarChar(20), data.idDifficulty)
            .input('nameDifficulty', sql.NVarChar(50), data.nameDifficulty)
            .query(sqlQueries.createDiff);
        return insertDiff.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateDiff = async(idDiff, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('diffs');
        const update = await pool.request()
            .input('idDifficulty', sql.VarChar(20), idDiff)
            .input('nameDifficulty', sql.NVarChar(50), data.nameDifficulty)
            .query(sqlQueries.updateDiff);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteDiff = async(idDiff) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('diffs');
        const deleteDiff = await pool.request()
            .input('idDifficulty', sql.VarChar(20), idDiff)
            .query(sqlQueries.deleteDiff);
        return deleteDiff.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getDiffs,
    getById,
    createDiff,
    updateDiff,
    deleteDiff
}