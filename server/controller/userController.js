const userModel = require('../Model/userModel');

exports.checkAuthenticated = (req, res, next) => {
     if (req.isAuthenticated()) {
          return next();
     }
     res.redirect('/sign-in');
}

exports.checkNotAuthenticated = (req, res, next) => {
     if (req.isAuthenticated()) {
          return res.redirect('/');
     }
     next();
}

exports.getUser = (req, res) => {
     res.render('sign_in');
}

exports.sign_up_get = (req, res) => {
     res.render('sign_up');
}

exports.logout = (req, res, next) => {
     req.logout(function (err) {
          if (err) { return next(err); }
          res.redirect('/');
     });
};