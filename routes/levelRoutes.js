'use strict';

const express = require('express');
const lController = require('../controllers/levelController');
const router = express.Router();

router.get('/levels', lController.getAllLevels);
router.get('/level/:id', lController.getLevel);
router.post('/level', lController.addLevel);
router.put('/level/:id', lController.updateLevel);
router.delete('/level/:id', lController.deleteLevel);


module.exports = {
    routes: router
}