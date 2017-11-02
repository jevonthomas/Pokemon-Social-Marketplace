'use strict';

const { Router } = require('express');
const router = Router();

const { getRequests } = require('../controllers/requestCtrl');

router.get('/home', getRequests);

module.exports = router;