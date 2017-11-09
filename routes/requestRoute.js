'use strict';

const { Router } = require('express');
const router = Router();

const { postRequest, 
        getAllPokemon, 
        postOffer, 
        getRequest, 
        getChosenPokemon, 
        getAllPokemonToOffer, 
        getPokemonAndRequest, 
        getUserRequests, 
        getEditRequest, 
        putUserRequest, 
        getUserRequestDetails, 
        getUserRequestTradeOffers,
        getTradeDetails } = require('../controllers/requestCtrl');

router.get('/request/user/:id', getUserRequests);
router.get('/request/user/:id/view/:requestid', getUserRequestDetails);
router.get('/request/user/:id/view/:requestid/trade-offers', getUserRequestTradeOffers);
router.get('/request/user/:id/view/:requestid/trade-offers/:tradeid/', getTradeDetails);
router.get('/request/user/edit/:id', getEditRequest);
router.get('/request/new', getAllPokemon);
router.get('/request/new/:id/', getChosenPokemon);
router.get('/request/new/:id/offer', getRequest);
router.get('/request/new/:id/offer/choose-pokemon', getAllPokemonToOffer);
router.get('/request/new/:id/offer/choose-pokemon/:pokeid', getPokemonAndRequest);
router.get('/request/:id', getRequest);

router.post('/request/new/:id/:userid', postRequest);
router.post('/offer', postOffer);

router.put('/request/edit/:id', putUserRequest);

module.exports = router;