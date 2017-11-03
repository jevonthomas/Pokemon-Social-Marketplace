'use strict';

module.exports.getUserRequests = (req, res, next) => {
  const { User, Request, Offer } = req.app.get('models');
  User.findOne({
    where: {id:req.params.id},
    include: [{model: Request, include: [{model: Offer}]}]
  })
  .then( (user) => {
    res.send(JSON.stringify(user));
    // res.render('', {user});
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getAllPokemon = (req, res, next) => {
  const { Pokedex } = req.app.get('models');
  Pokedex.findAll()
  .then( (pokemon) => {
    // res.send(JSON.stringify(pokemon));
    res.render('choosePokemon', {pokemon});
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getAllPokemonToOffer = (req, res, next) => {
  const { Pokedex, Request } = req.app.get('models');
  Pokedex.findAll()
  .then( (pokemon) => {
    Request.findOne({ 
      where: {id:req.params.id},
    })
    .then( (request) => {
    // res.send(JSON.stringify(pokemon));
    res.render('offerPokemon', {pokemon, request});
    })
    .catch( (err) => {
      next(err);
    });
  })
};

module.exports.getChosenPokemon = (req, res, next) => {
  const { Ability, Pokedex, Move, Item } = req.app.get('models');
  Pokedex.findOne({
    where: {pokemon_id:req.params.id},
    include: [{model: Ability}, {model: Move}]
  })
  .then( (pokemon) => {
    Item.findAll()
    .then( (items) => {
      // res.send(JSON.stringify({pokemon}));
      res.render('pokemonForm', {pokemon, items});
      })
      .catch( (err) => {
        next(err);
      })
  })
};

module.exports.postRequest = (req, res, next) => {
  console.log(req.body);
  const { Request } = req.app.get('models');
  Request.create({
    userid:req.params.id,
    name:req.body.name,
    ability:req.body.ability,
    nature:req.body.nature,
    gender:req.body.gender,
    item:req.body.item,
    level:req.body.level,
    move_1:req.body.move_1,
    move_2:req.body.move_2,
    move_3:req.body.move_3,
    move_4:req.body.move_4,
    hp_iv:req.body.hp_iv,
    attack_iv:req.body.attack_iv,
    defense_iv:req.body.defense_iv,
    sp_att_iv:req.body.sp_att_iv,
    sp_def_iv:req.body.sp_def_iv,
    speed_iv:req.body.speed_iv,
    comment:req.body.comment
  })
  .then( (data) => {
   res.status(200).redirect(`/request/new/${data.id}/offer`);
  })
  .catch( (err) => {
     res.status(500).json(err)
  });
};

module.exports.postOffer = (req, res, next) => {
  const { Offer } = req.app.get('models');
  Offer.create({
    requestid:req.body.requestid,
    name:req.body.name,
    ability:req.body.ability,
    nature:req.body.nature,
    gender:req.body.gender,
    item:req.body.item,
    level:req.body.level,
    move_1:req.body.move_1,
    move_2:req.body.move_2,
    move_3:req.body.move_3,
    move_4:req.body.move_4,
    hp_iv:req.body.hp_iv,
    attack_iv:req.body.attack_iv,
    defense_iv:req.body.defense_iv,
    sp_att_iv:req.body.sp_att_iv,
    sp_def_iv:req.body.sp_def_iv,
    speed_iv:req.body.speed_iv,
    comment:req.body.comment
  })
  .then( (data) => {
   res.status(200).redirect('/welcome');
  })
  .catch( (err) => {
     res.status(500).json(err)
  });
};

module.exports.getRequest = (req, res, next) => {
  const { Request } = req.app.get('models');
  Request.findOne({ 
    where: {id:req.params.id},
  })
  .then( (request) => {
    // res.send(JSON.stringify(request));
    res.render('offer', {request});
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getRequests = (req, res, next) => {
  const { Request, Offer } = req.app.get('models');
  Request.findAll({ 
    include: [{model: Offer}]
  })
  .then( (requests) => {
    res.send(JSON.stringify(requests));
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getPokemonAndRequest = (req, res, next) => {
  const { Ability, Pokedex, Move, Item, Request } = req.app.get('models');
  Pokedex.findOne({
    where: {pokemon_id:req.params.pokeid},
    include: [{model: Ability}, {model: Move}]
  })
  .then( (pokemon) => {
    Item.findAll()
    .then( (items) => {
      Request.findOne({ 
        where: {id:req.params.id},
      })
      .then( (request) => {
      // res.send(JSON.stringify({pokemon}));
      res.render('offerPokemonForm', {pokemon, items, request});
      })
      .catch( (err) => {
        next(err);
      })
    })
  })
};