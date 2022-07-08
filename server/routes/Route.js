const express = require('express');
const Route = express.Router();
const resumeController = require('../controller/resumeController');
const userController = require('../controller/userController');
const authController = require('../controller/authController');
const passport = require('passport');


Route
     .route('/')
     .get(resumeController.GetHomePage)

Route
     .route('/sign-in')
     .get(userController.checkNotAuthenticated, userController.getUser)
     .post(userController.checkNotAuthenticated, passport.authenticate('local', {
          successRedirect: '/',
          failureRedirect: '/sign-in',
          failureFlash: true
     }));

Route
     .route('/sign-up')
     .get(userController.checkNotAuthenticated, userController.sign_up_get)
     .post(userController.checkNotAuthenticated, authController.sign_up_post);
Route
     .route('/logout')
     .post(userController.logout);

Route
     .route('/auth/google/callback')
     .get(passport.authenticate('google', {
          failureRedirect: '/sign-in'
     }), function (req, res) {
          res.redirect('/');
     });

Route
     .route('/auth/google')
     .get(passport.authenticate('google', { scope: ['email', 'profile'] }))

Route
     .route('/auth/facebook')
     .get(passport.authenticate('facebook'))

Route
     .route('/auth/facebook/callback')
     .get(passport.authenticate('facebook', {
          failureRedirect: '/login'
     }), function (req, res) {
          res.redirect('/');
     })

module.exports = Route;