'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getRoles = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const rolesList = await pool.request().query(sqlQueries.roleList);
        return rolesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(roleId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const role = await pool.request()
            .input('idRole', sql.VarChar(20), roleId)
            .query(sqlQueries.roleById);
        return role.recordset;
    } catch (error) {
        return error.message;
    }
}

const createRole = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const insertRole = await pool.request()
            .input('idRole', sql.VarChar(20), data.idRole)
            .input('nameRole', sql.NVarChar(50), data.nameRole)
            .query(sqlQueries.createRole);
        return insertRole.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateRole = async(idRole, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const update = await pool.request()
            .input('idRole', sql.VarChar(20), idRole)
            .input('nameRole', sql.NVarChar(50), data.nameRole)
            .query(sqlQueries.updateRole);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteRole = async(idRole) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const deleteRole = await pool.request()
            .input('idRole', sql.VarChar(20), idRole)
            .query(sqlQueries.deleteRole);
        return deleteRole.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getRoles,
    getById,
    createRole,
    updateRole,
    deleteRole
}