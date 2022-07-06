const userModel = require('../Model/userModel');

exports.getUser = (req, res) => {
     res.render('sign_in');
}
exports.checkAuthenticated = (req, res, next) => {
     if (req.isAuthenticated()) {
          return next();
     }
     res.redirect('/login');
}

exports.checkNotAuthenticated = (req, res, next) => {
     if (req.isAuthenticated()) {
          return res.redirect('/');
     }
     next();
}