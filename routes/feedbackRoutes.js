'use strict';

const express = require('express');
const diffController = require('../controllers/feedbackController');
const router = express.Router();

router.get('/fbs', diffController.getAllFBs);
router.get('/fb/:id', diffController.getFB);
router.post('/fb', diffController.addFB);
router.put('/fb/:id', diffController.updateFB);
router.delete('/fb/:id', diffController.deleteFB);


module.exports = {
    routes: router
}