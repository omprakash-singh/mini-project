const User = require('../Model/userModel');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

async function authenticateUser(email, password, done) {
     const user = await User.findOne({ email: email });
     if (user === null) {
          return done(null, false, { message: "User Not with that email!" });
     }
     try {
          if (await user.correctPassword(password, user.password)) {
               return done(null, user);
          } else {
               return done(null, false, { message: "incorrect email and password!" });
          }
     } catch (error) {
          return done(error);
     }
};
passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
passport.serializeUser((user, done) => {
     done(null, user.id);
});
passport.deserializeUser((id, done) => {
     return done(null, User.findById(id));
});



const sign_up = async (req, res) => {
     try {
          const postUser = new User({
               name: req.body.name,
               email: req.body.email,
               password: req.body.password,
               confirmPassword: req.body.confirmPassword
          })
          await postUser.save().then((doc) => {
               console.log(doc);
          }).catch((err) => {
               console.log(err)
          });
          res.redirect('/sign-in');
     } catch (error) {

     }

};