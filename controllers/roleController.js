'use strict';

const roleData = require('../data/roles');

const getAllRoles = async(req, res, next) => {
    try {
        const rolelist = await roleData.getRoles();
        res.send(rolelist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getRole = async(req, res, next) => {
    try {
        const roleId = req.params.id;
        const event = await roleData.getById(roleId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addRole = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await roleData.createRole(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateRole = async(req, res, next) => {
    try {
        const roleId = req.params.id;
        const data = req.body;
        const updated = await roleData.updateRole(roleId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteRole = async(req, res, next) => {
    try {
        const roleId = req.params.id;
        const deletedRole = await roleData.deleteRole(roleId);
        res.send(deletedRole);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllRoles,
    getRole,
    addRole,
    updateRole,
    deleteRole
}