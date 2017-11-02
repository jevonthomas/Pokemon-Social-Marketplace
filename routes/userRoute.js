'use strict';

const { Router } = require('express');
const router = Router();

const { getUser } = require('../controllers/userCtrl');

router.get('/account/:id', getUser);

module.exports = router;