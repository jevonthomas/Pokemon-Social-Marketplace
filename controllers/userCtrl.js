'use strict';

module.exports.getUser = (req, res, next) => {
  const { User } = req.app.get('models');
    User.findOne({
      raw: true, 
      where:{id:req.params.id}
    })
    .then( (user) => {
      // res.send(JSON.stringify({user}));
      console.log("user", user);
      res.render('account', {user});
    })
    .catch( (err) => {
    next(err);
  })
}