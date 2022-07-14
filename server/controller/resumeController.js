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
     if (req.session.passport.user.provider === undefined) {
          const userId = req.session.passport.user._id;
          res.render('form', { userId });
     } else {
          console.log(req.session.passport.user.id);
          const userId = req.session.passport.user.id;
          res.render('form', { userId });

     }
}

exports.postForm = async (req, res) => {

     const resumeDatapost = new resume(req.body);

     await resumeDatapost.save().then((doc) => {
          console.log(doc);
          res.redirect('/template');
     }).catch((err) => {
          console.log(err);
     })
     console.log(req.body)
}


