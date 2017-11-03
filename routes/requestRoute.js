'use strict';

const { Router } = require('express');
const router = Router();

const { postRequest, getAllPokemon, postOffer, getRequest, getChosenPokemon, getAllPokemonToOffer, getPokemonAndRequest, getUserRequests } = require('../controllers/requestCtrl');

router.get('/request/user/:id', getUserRequests);
router.get('/request/new', getAllPokemon);
router.get('/request/new/:id', getChosenPokemon);
router.get('/request/new/:id/offer', getRequest);
router.get('/request/new/:id/offer/choose-pokemon', getAllPokemonToOffer);
router.get('/request/new/:id/offer/choose-pokemon/:pokeid', getPokemonAndRequest);
router.get('/request/:id', getRequest);

router.post('/request/:id', postRequest);
router.post('/offer', postOffer);

module.exports = router;