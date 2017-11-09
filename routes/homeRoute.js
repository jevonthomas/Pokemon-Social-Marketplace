'use strict';

const { Router } = require('express');
const router = Router();

const { getAllRequestsAndOffers, getRequestDetails, getAllPokemon, getPokemon, renderSuccess, getSearchedPokemon, postTrade } = require('../controllers/homeCtrl');

router.get('/home', getAllRequestsAndOffers);
router.get('/home/:id', getRequestDetails);
router.get('/home/:id/trade-offer', getAllPokemon);
router.get('/home/:id/trade-offer/:pokemonid/', getPokemon);
router.get('/success-page', renderSuccess);

router.post('/home/:id/trade-offer', getSearchedPokemon);
router.post('/home/:requestid/trade-offer/:pokemonid/:userid', postTrade);

module.exports = router;