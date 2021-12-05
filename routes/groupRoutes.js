'use strict';

const express = require('express');
const iController = require('../controllers/groupController');
const router = express.Router();

router.get('/groups', iController.getAllGroups);
router.get('/groups/:id', iController.getGroupByRank);
router.get('/group/:id', iController.getGroup);
router.post('/group', iController.addGroup);
router.put('/group/:id', iController.updateGroup);
router.delete('/group/:id', iController.deleteGroup);


module.exports = {
    routes: router
}