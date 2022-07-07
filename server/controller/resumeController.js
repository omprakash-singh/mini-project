const passport = require('passport');
const session = require('express-session');
const resume = require('../Model/resumeModel');

exports.GetHomePage = (req, res) => {
     let loginUser = null
     if (req.session.passport != null) {
          loginUser = req.session.passport.user;
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
