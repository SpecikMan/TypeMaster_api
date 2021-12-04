'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getInvs = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('inventory');
        const list = await pool.request().query(sqlQueries.invList);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('inventory');
        const inv = await pool.request()
            .input('idInventory', sql.VarChar(20), id)
            .query(sqlQueries.invById);
        return inv.recordset;
    } catch (error) {
        return error.message;
    }
}

const createInv = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('inventory');
        const insert = await pool.request()
            .input('idInventory', sql.VarChar(20), data.idInventory)
            .input('idAccount', sql.VarChar(20), data.idAccount)
            .input('idItem', sql.VarChar(20), data.idItem)
            .input('currentlyHave', sql.Int, data.currentlyHave)
            .input('timeUsed', sql.Int, data.timeUsed)
            .query(sqlQueries.createInv);
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateInv = async(id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('inventory');
        const update = await pool.request()
            .input('idInventory', sql.VarChar(20), data.idInventory)
            .input('idAccount', sql.VarChar(20), data.idAccount)
            .input('idItem', sql.VarChar(20), data.idItem)
            .input('currentlyHave', sql.Int, data.currentlyHave)
            .input('timeUsed', sql.Int, data.timeUsed)
            .query(sqlQueries.updateInv);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteInv = async(id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('inventory');
        const deleted = await pool.request()
            .input('idInventory', sql.VarChar(20), id)
            .query(sqlQueries.deleteInv);
        return deleted.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getInvs,
    getById,
    createInv,
    updateInv,
    deleteInv
}