'use strict';

const express = require('express');
const roleControll = require('../controllers/roleController');
const router = express.Router();

router.get('/roles', roleControll.getAllRoles);
router.get('/role/:id', roleControll.getRole);
router.post('/role', roleControll.addRole);
router.put('/role/:id', roleControll.updateRole);
router.delete('/role/:id', roleControll.deleteRole);


module.exports = {
    routes: router
}