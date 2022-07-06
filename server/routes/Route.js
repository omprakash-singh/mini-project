const express = require('express');
const Route = express.Router();
const resumeController = require('../controller/resumeController');
const userController = require('../controller/userController');


Route
     .route('/')
     .get(resumeController.GetHomePage)

Route
     .route('/sign-in')
     .get(userController.getUser);




module.exports = Route;