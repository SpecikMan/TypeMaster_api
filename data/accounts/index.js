'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAccounts = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('accounts');
        const accountList = await pool.request().query(sqlQueries.accountList);
        return accountList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(accountId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('accounts');
        const account = await pool.request()
            .input('idAccount', sql.VarChar(20), accountId)
            .query(sqlQueries.accountById);
        return account.recordset;
    } catch (error) {
        return error.message;
    }
}

const createAccount = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('accounts');
        const insertAccount = await pool.request()
            .input('idAccount', sql.VarChar(20), data.idAccount)
            .input('username', sql.VarChar(50), data.username)
            .input('password', sql.NVarChar(200), data.password)
            .input('email', sql.NVarChar(100), data.email)
            .input('createDate', sql.Date, data.createDate)
            .input('latestLoginDate', sql.Date, data.latestLoginDate)
            .input('countLoginDate', sql.Int, data.countLoginDate)
            .input('pathImage', sql.NVarChar(sql.MAX), data.pathImage)
            .input('fullName', sql.NVarChar(100), data.fullName)
            .input('dob', sql.Date, data.dob)
            .input('gender', sql.Bit, data.gender)
            .input('coin', sql.Int, data.coin)
            .input('verificationCode', sql.NVarChar(50), data.verificationCode)
            .input('uud', sql.NVarChar(100), data.uud)
            .input('accountLevel', sql.Int, data.accountLevel)
            .input('levelCap', sql.Int, data.levelCap)
            .input('levelExp', sql.Int, data.levelExp)
            .input('idRole', sql.VarChar(20), data.idRole)
            .input('idRank', sql.VarChar(20), data.idRank)
            .query(sqlQueries.createAccount);
        return insertAccount.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateAccount = async(idAccount, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('accounts');
        const update = await pool.request()
            .input('idAccount', sql.VarChar(20), idAccount)
            .input('username', sql.VarChar(50), data.username)
            .input('password', sql.NVarChar(200), data.password)
            .input('email', sql.NVarChar(100), data.email)
            .input('createDate', sql.Date, data.createDate)
            .input('latestLoginDate', sql.Date, data.latestLoginDate)
            .input('countLoginDate', sql.Int, data.countLoginDate)
            .input('pathImage', sql.NVarChar(sql.MAX), data.pathImage)
            .input('fullName', sql.NVarChar(100), data.fullName)
            .input('dob', sql.Date, data.dob)
            .input('gender', sql.Bit, data.gender)
            .input('coin', sql.Int, data.coin)
            .input('verificationCode', sql.NVarChar(50), data.verificationCode)
            .input('uud', sql.NVarChar(100), data.uud)
            .input('accountLevel', sql.Int, data.accountLevel)
            .input('levelCap', sql.Int, data.levelCap)
            .input('levelExp', sql.Int, data.levelExp)
            .input('idRole', sql.VarChar(20), data.idRole)
            .input('idRank', sql.VarChar(20), data.idRank)
            .query(sqlQueries.updateAccount);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteAccount = async(idAccount) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('accounts');
        const deleteAccount = await pool.request()
            .input('idAccount', sql.VarChar(20), idAccount)
            .query(sqlQueries.deleteAccount);
        return deleteAccount.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getAccounts,
    getById,
    createAccount,
    updateAccount,
    deleteAccount
}