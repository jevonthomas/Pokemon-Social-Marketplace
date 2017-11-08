module.exports.getAllRequestsAndOffers = (req, res, next) => {
  const { Request, Offer } = req.app.get('models');
  Request.findAll({
    include: [{model: Offer}]
  })
  .then( (request) => {
    // res.send(JSON.stringify(request));
    res.render('home', {request});
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getRequestDetails = (req, res, next) => {
  const { Request, Offer, User } = req.app.get('models');
  Request.findOne({
    where: {id:req.params.id},
    include: [{model: Offer}]
  })
  .then( (request) => {
    User.findOne({
      where: {id:request.userid}
    })
    .then( (user) => {
      // res.send(JSON.stringify({request, user}));
      res.render('requestInfo', {request, user});
    })
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getAllPokemon = (req, res, next) => {
  const { Pokedex, Request } = req.app.get('models');
  Pokedex.findAll()
  .then( (pokemon) => {
    Request.findOne({
      where: {id:req.params.id}
    })
    .then( (request) => {
    // res.send(JSON.stringify({request, pokemon}));
    res.render('choosePokemonHome', {pokemon, request});
    })
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getPokemon = (req, res, next) => {
  const { Ability, Pokedex, Move, Item } = req.app.get('models');
  Pokedex.findOne({
    where: {pokemon_id:req.params.pokemonid},
    include: [{model: Ability}, {model: Move}]
  })
  .then( (pokemon) => {
    Item.findAll()
    .then( (items) => {
      // res.send(JSON.stringify({pokemon}));
      res.render('offerPokemonFormHome', {pokemon, items});
      })
      .catch( (err) => {
        next(err);
      })
  })
};

module.exports.renderSuccess = (req, res, next) => {
  res.render('successScreen');
};

module.exports.getSearchedPokemon = (req, res, next) => {
  const { Pokedex } = req.app.get('models');
  Pokedex.findAll({
    where: {identifier:req.body.search}
  })
  .then( (pokemon) => {
    // res.send(JSON.stringify(pokemon));
    res.render('choosePokemonHome', {pokemon});
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.postTrade = (req, res, next) => {
  console.log(req.body);
  const { Trade } = req.app.get('models');
  Trade.create({
    userid:req.params.userid,
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
    comment:req.body.comment,
    species_id:req.body.species_id,
    request_id:req.params.requestid
  })
  .then( (data) => {
   res.status(200).redirect(`/home`);
  })
  .catch( (err) => {
     res.status(500).json(err)
  });
};