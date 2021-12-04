'use strict';

const express = require('express');
const modeController = require('../controllers/modeController');
const router = express.Router();

router.get('/modes', modeController.getAllModes);
router.get('/mode/:id', modeController.getMode);
router.post('/mode', modeController.addMode);
router.put('/mode/:id', modeController.updateMode);
router.delete('/mode/:id', modeController.deleteMode);


module.exports = {
    routes: router
}