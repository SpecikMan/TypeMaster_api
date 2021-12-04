'use strict';

const express = require('express');
const detailController = require('../controllers/detailController');
const router = express.Router();

router.get('/details', detailController.getAllDetails);
router.get('/detail/:id', detailController.getDetail);
router.post('/detail', detailController.addDetail);
router.put('/detail/:id', detailController.updateDetail);
router.delete('/detail/:id', detailController.deleteDetail);


module.exports = {
    routes: router
}