'use strict';

const { Router } = require('express');
const router = Router();

const { postRequest, renderRequest, renderOffer, postOffer, getRequest } = require('../controllers/requestCtrl');

router.get('/request/new', renderRequest);
router.get('/request/new/:id/offer', renderOffer);
router.post('/request/offer', postOffer)
router.get('/request/:id', getRequest);
router.post('/request', postRequest);

module.exports = router;