'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getItems = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('shop');
        const list = await pool.request().query(sqlQueries.itemList);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('shop');
        const inv = await pool.request()
            .input('idItem', sql.VarChar(20), id)
            .query(sqlQueries.itemById);
        return inv.recordset;
    } catch (error) {
        return error.message;
    }
}

const createItem = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('shop');
        const insert = await pool.request()
            .input('idItem', sql.VarChar(20), data.idItem)
            .input('itemName', sql.NVarChar(50), data.itemName)
            .input('description', sql.NVarChar(sql.MAX), data.description)
            .input('cost', sql.Int, data.cost)
            .input('maxLimit', sql.Int, data.maxLimit)
            .input('imagePath', sql.NVarChar(sql.MAX), data.imagePath)
            .input('timeUsed', sql.Int, data.timeUsed)
            .input('tips', sql.NVarChar(sql.MAX), data.tips)
            .input('effectsBy', sql.NVarChar(50), data.effectsBy)
            .query(sqlQueries.createItem);
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateItem = async(id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('shop');
        const update = await pool.request()
            .input('idItem', sql.VarChar(20), data.idItem)
            .input('itemName', sql.NVarChar(50), data.itemName)
            .input('description', sql.NVarChar(sql.MAX), data.description)
            .input('cost', sql.Int, data.cost)
            .input('maxLimit', sql.Int, data.maxLimit)
            .input('imagePath', sql.NVarChar(sql.MAX), data.imagePath)
            .input('timeUsed', sql.Int, data.timeUsed)
            .input('tips', sql.NVarChar(sql.MAX), data.tips)
            .input('effectsBy', sql.NVarChar(50), data.effectsBy)
            .query(sqlQueries.updateItem);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteItem = async(id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('shop');
        const deleted = await pool.request()
            .input('idItem', sql.VarChar(20), id)
            .query(sqlQueries.deleteItem);
        return deleted.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getItems,
    getById,
    createItem,
    updateItem,
    deleteItem
}