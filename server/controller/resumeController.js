const passport = require('passport');
const session = require('express-session');
const resume = require('../Model/resumeModel');
const USERGOOGLEFB = require('../Model/userGoogleFBModel');
const User = require('../Model/userModel');

exports.GetHomePage = async (req, res) => {
     let loginUser = null
     if (req.session.passport != null) {
          loginUser = req.session.passport.user;
          if (req.session.passport.user.provider != null) {
               await USERGOOGLEFB.findOrCreate({
                    googleID: req.session.passport.user._json.sub,
                    facebookID: req.session.passport.user._json.id,
                    provider: req.session.passport.user.provider,
                    name: req.session.passport.user._json.name,
                    given_name: req.session.passport.user._json.given_name,
                    picture: req.session.passport.user._json.picture,
                    email: req.session.passport.user._json.email,
                    email_varified: req.session.passport.user._json.email_varified,
                    locale: req.session.passport.user._json.locale
               });
          }
     }
     res.render('index', {
          loginUser
     });
}

exports.getProcessPage = (req, res) => {
     res.render('process')
}

exports.CheckAuth = (req, res, next) => {
     if (req.isAuthenticated()) {
          next();
     } else {
          res.redirect('/sign-in');
     }
}

exports.getTemplatePage = (req, res) => {
     res.render('template_form_review');
}

exports.getForm = (req, res) => {
     res.render('form');
}

exports.postForm = (req, res) => {
     console.log(req.body);
}

const Post_user_detail = async (req, res) => {
     await resume.create(req.body, function (err, doc) {
          if (err) {
               console.log(err);
          } else {
               console.log(doc);
          }
     })
}

