const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const route = require('./routes/Route');
const flash = require('flash');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(session({
     secret: 'keyboard cat',
     resave: false,
     saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use('/', route);




module.exports = app;