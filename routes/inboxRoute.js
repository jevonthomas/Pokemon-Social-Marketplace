'use strict';

const { Router } = require('express');
const router = Router();

const { getInbox } = require('../controllers/inboxCtrl');

router.get('/inbox/:id', getInbox);

module.exports = router;