const passport = require('passport');
const session = require('express-session');
const resume = require('../Model/resumeModel');
const USERGOOGLE = require('../Model/userGoogleModel');
const USERFACBOOK = require('../Model/userFacebookModel');

exports.GetHomePage = async (req, res) => {
     let loginUser = null
     if (req.session.passport != null) {
          loginUser = req.session.passport.user;
          if (req.session.passport.user.provider === "google") {
               await USERGOOGLE.findOrCreate(req.session.passport.user._json);
          } else {
               await USERFACBOOK.findOrCreate(req.session.passport.user._json);
          }
     }
     res.render('index', {
          loginUser
     });
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
