'use strict';

const express = require('express');
const accountControll = require('../controllers/accountController');
const router = express.Router();

router.get('/accounts', accountControll.getAllAccounts);
router.get('/account/:id', accountControll.getAccount);
router.post('/account', accountControll.addAccount);
router.put('/account/:id', accountControll.updateAccount);
router.delete('/account/:id', accountControll.deleteAccount);


module.exports = {
    routes: router
}