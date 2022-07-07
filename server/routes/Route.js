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

module.exports = Route;