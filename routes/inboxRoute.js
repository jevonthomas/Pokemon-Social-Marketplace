'use strict';

const { Router } = require('express');
const router = Router();

const { getInbox, 
        postThread, 
        getThread, 
        postMessage } = require('../controllers/inboxCtrl');

router.get('/inbox/:id/', getInbox);
router.get('/inbox/:id/:threadid/', getThread);
router.get('/accept/:userid1/:userid2', postThread);

router.post('/inbox/:id/:threadid/:userid', postMessage);

module.exports = router;