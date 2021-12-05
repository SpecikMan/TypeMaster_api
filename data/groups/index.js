'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAllGroups = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('groups');
        const diffsList = await pool.request().query(sqlQueries.groupList);
        return diffsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(diffId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('groups');
        const diff = await pool.request()
            .input('idGroup', sql.VarChar(20), diffId)
            .query(sqlQueries.groupById);
        return diff.recordset;
    } catch (error) {
        return error.message;
    }
}

const createGroup = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('groups');
        const insertDiff = await pool.request()
            .input('idGroup', sql.VarChar(20), data.idGroup)
            .input('idRank', sql.VarChar(20), data.idRank)
            .input('idAccount', sql.VarChar(20), data.idAccount)
            .input('idRankingLevel', sql.VarChar(20), data.idRankingLevel)
            .input('score1', sql.BigInt, data.score1)
            .input('score2', sql.BigInt, data.score2)
            .input('score3', sql.BigInt, data.score3)
            .input('datePlayed1', sql.Date, data.datePlayed1)
            .input('datePlayed2', sql.Date, data.datePlayed2)
            .input('datePlayed3', sql.Date, data.datePlayed3)
            .input('totalScore', sql.BigInt, data.totalScore)
            .query(sqlQueries.createGroup);
        return insertDiff.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateGroup = async(idDiff, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('groups');
        const update = await pool.request()
            .input('idGroup', sql.VarChar(20), data.idGroup)
            .input('idRank', sql.VarChar(20), data.idRank)
            .input('idAccount', sql.VarChar(20), data.idAccount)
            .input('idRankingLevel', sql.VarChar(20), data.idRankingLevel)
            .input('score1', sql.BigInt, data.score1)
            .input('score2', sql.BigInt, data.score2)
            .input('score3', sql.BigInt, data.score3)
            .input('datePlayed1', sql.Date, data.datePlayed1)
            .input('datePlayed2', sql.Date, data.datePlayed2)
            .input('datePlayed3', sql.Date, data.datePlayed3)
            .input('totalScore', sql.BigInt, data.totalScore)
            .query(sqlQueries.updateGroup);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteGroup = async(idDiff) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('groups');
        const deleteDiff = await pool.request()
            .input('idGroup', sql.VarChar(20), idDiff)
            .query(sqlQueries.deleteGroup);
        return deleteDiff.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getAllGroups,
    getById,
    createGroup,
    updateGroup,
    deleteGroup
}