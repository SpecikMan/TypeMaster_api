'use strict';

const express = require('express');
const iController = require('../controllers/inventoryController');
const router = express.Router();

router.get('/invs', iController.getAllInvs);
router.get('/inv/:id', iController.getInv);
router.post('/inv', iController.addInv);
router.put('/inv/:id', iController.updateInv);
router.delete('/inv/:id', iController.deleteInv);


module.exports = {
    routes: router
}