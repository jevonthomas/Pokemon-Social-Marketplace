'use strict';

const { Router } = require('express');
const router = Router();

const { postRequest, getAllPokemon, renderOffer, postOffer, getRequest, getChosenPokemon } = require('../controllers/requestCtrl');

router.get('/request/new', getAllPokemon);
router.get('/request/new/:id', getChosenPokemon);
router.get('/request/new/:id/offer', renderOffer);
router.post('/request/offer', postOffer)
router.get('/request/:id', getRequest);
router.post('/request', postRequest);

module.exports = router;