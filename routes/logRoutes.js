'use strict';

const express = require('express');
const logController = require('../controllers/logController');
const router = express.Router();

router.get('/logs', logController.getAllLogs);
router.get('/log/:id', logController.getLog);
router.post('/log', logController.addLog);
router.put('/log/:id', logController.updateLog);
router.delete('/log/:id', logController.deleteLog);


module.exports = {
    routes: router
}