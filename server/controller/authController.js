const User = require('../Model/userModel');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

// Facebook Login
const FACEBOOK_APP_ID = '744406826987223';
const FACEBOOK_APP_SECRET = '51886a32d05007550fa330f389010353';

passport.use(new FacebookStrategy({
     clientID: FACEBOOK_APP_ID,
     clientSecret: FACEBOOK_APP_SECRET,
     callbackURL: "http://localhost:9000/auth/facebook/callback"
},
     function (accessToken, refreshToken, profile, done) {
          return done(null, profile);

     }
));



// Google login
const GOOGLE_CLIENT_ID = '605131150367-s9kg7jl0t4ss9so2bfdjvj25ct5osktd.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = `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`;
passport.use(new GoogleStrategy({
     clientID: GOOGLE_CLIENT_ID,
     clientSecret: GOOGLE_CLIENT_SECRET,
     callbackURL: "http://localhost:9000/auth/google/callback"
},
     function (accessToken, refreshToken, profile, done) {
          return done(null, profile);
     }
));


// Local login
async function authenticateUser(email, password, done) {
     const user = await User.findOne({ email }).select("+password");
     if (user === null) {
          return done(null, false, { message: "User Not with that email!" });
     }
     try {
          if (await user.correctPassword(password, user.password)) {
               return done(null, user.id);
          } else {
               return done(null, false, { message: "incorrect email and password!" });
          }
     } catch (error) {
          return done(error);
     }
};
passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
passport.serializeUser((user, done) => {
     done(null, user);
});
passport.deserializeUser((id, done) => {
     return done(null, User.findById(id));
});


exports.sign_up_post = async (req, res) => {
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

