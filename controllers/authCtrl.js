'use strict';
const passport = require('passport');

// creating new users
module.exports.displayRegister = (req, res) => {
  res.render('register');
};



module.exports.register = (req, res, next) => {
  if (req.body.password === req.body.confirmation) {
    console.log("lets see", req.body);
    console.log('Trying to register new user!!!!!');

    // first argument is name of the passport strategy we created in passport-strat.js
    passport.authenticate('local-signup', (err, user, msgObj) => {
      console.log("Where are we? session.js", user );
      if (err) {  console.log(err); } //or return next(err)
      if (!user) { return res.render('register', msgObj); }
      // Go ahead and login the new user once they are signed up
      req.logIn(user, (err) => {
        if (err) { return next(err); }
        console.log("authenticated. Rerouting to welcome page!" );
        // Save a msg in a cookie whose value will be added to req
        // using https://www.npmjs.com/package/express-flash-2 docs, but installed express-flash
        //creating user's inbox
          const { Inbox } = req.app.get('models');
          console.log("inbox", Inbox);
          Inbox.create({
            user_id:user.id
          })
          .then( (data) => {
          res.status(200)
          })
          .catch( (err) => {
            res.status(500).json(err)
          });
        req.flash('registerMsg', `Thanks for signing up, ${user.first_name}!`);
        res.redirect('/home');
      });
    })(req, res, next);
  } else {
    res.render('register', { message: 'Password & password confirmation do not match' })
  }
};

// logging in existing users
module.exports.displayLogin = (req, res, next) => {
  res.render('login');
};

module.exports.login = (req, res, next) => {
  // Note we're using different strategy, this time for logging in
  passport.authenticate('local-signin', (err, user, msgObj) => {
    // If login fails, the error is sent back by the passport strategy as { message: "some msg"}
    console.log('error msg?', msgObj);

    if (err) {  console.log(err) } //or return next(err) once handler set up in app.js
    if (!user) {
      return res.render('index', msgObj)
    }

    req.logIn(user, err => {
      if (err) { return next(err) }
      res.redirect('/home');
    });
  })(req, res, next);
};

module.exports.welcome = (req, res, next) => {
  res.render('welcome');
};

// logging out
module.exports.logout = (req, res) => {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
};
