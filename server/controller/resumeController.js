const passport = require('passport');
const session = require('express-session');


exports.GetHomePage = (req, res) => {
     let loginUser = null
     if (req.session.passport != null) {
          loginUser = req.session.passport.user;
     }
     res.render('index', {
          loginUser
     });
     console.log(loginUser);
}