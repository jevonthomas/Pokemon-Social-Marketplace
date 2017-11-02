'use strict';

module.exports.renderRequest = (req, res, next) => {
  const { Pokedex, Ability } = req.app.get('models');
  Pokedex.findAll({
    include: [{model: Ability}]
  })
  .then( (pokemon) => {
    res.send(JSON.stringify(pokemon));
    // res.render('request', {pokemon});
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.renderOffer = (req, res, next) => {
    res.render('offer');
};

module.exports.postRequest = (req, res, next) => {
  console.log(req.body);
  const { Request } = req.app.get('models');
  Request.create({
    userid:1,
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
    speed_iv:req.body.speed_iv
  })
  .then( (data) => {
   res.status(200).redirect('/welcome');
  })
  .catch( (err) => {
     res.status(500).json(err)
  });
};

module.exports.postOffer = (req, res, next) => {
  const { Offer } = req.app.get('models');
  Offer.create({
    requestid:1,
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
    speed_iv:req.body.speed_iv
  })
  .then( (data) => {
   res.status(200).redirect('/welcome');
  })
  .catch( (err) => {
     res.status(500).json(err)
  });
};

module.exports.getRequest = (req, res, next) => {
  const { Request, Offer } = req.app.get('models');
  Request.findAll({ 
    where: {userid: req.params.id},
    include: [{model: Offer}]
  })
  .then( (requests) => {
    res.send(JSON.stringify(requests));
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