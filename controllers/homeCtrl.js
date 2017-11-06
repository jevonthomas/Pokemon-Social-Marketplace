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
  const { Pokedex } = req.app.get('models');
  Pokedex.findAll()
  .then( (pokemon) => {
    // res.send(JSON.stringify(pokemon));
    res.render('choosePokemonHome', {pokemon});
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