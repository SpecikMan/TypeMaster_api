'use strict';

const express = require('express');
const lController = require('../controllers/shopController');
const router = express.Router();

router.get('/items', lController.getAllItems);
router.get('/item/:id', lController.getItem);
router.post('/item', lController.addItem);
router.put('/item/:id', lController.updateItem);
router.delete('/item/:id', lController.deleteItem);


module.exports = {
    routes: router
}