'use strict';

const express = require('express');
const iController = require('../controllers/rankingLevelController');
const router = express.Router();

router.get('/rkLvs', iController.getAllRankingLevels);
router.get('/rkLv/:id', iController.getRankingLevel);
router.post('/rkLv', iController.addRankingLevel);
router.put('/rkLv/:id', iController.updateRankingLevel);
router.delete('/rkLv/:id', iController.deleteRankingLevel);


module.exports = {
    routes: router
}