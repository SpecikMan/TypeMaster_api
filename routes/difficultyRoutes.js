'use strict';

const express = require('express');
const diffController = require('../controllers/difficultyController');
const router = express.Router();

router.get('/diffs', diffController.getAllDiffs);
router.get('/diff/:id', diffController.getDiff);
router.post('/diff', diffController.addDiff);
router.put('/diff/:id', diffController.updateDiff);
router.delete('/diff/:id', diffController.deleteDiff);


module.exports = {
    routes: router
}