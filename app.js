// import required packages
require("dotenv").config();
const express = require("express");
const session = require('express-session');
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const path = require('path');

const mainRoutes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';

// Set up Handlebars view engine with partials directory
const hbs = exphbs.create({
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  defaultLayout: 'after-login', // Optional: specify default layout if using layouts
  extname: '.hbs' // Specify the file extension for Handlebars files
});

// template engine
app.engine('hbs', hbs.engine); // Register the Handlebars engine with Express
app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.set('view engine', 'hbs'); // Set Handlebars as the view engine

app.use(bodyParser.urlencoded({extended: false, limit: '100mb'}));
app.use(bodyParser.json({limit: '100mb'}));
app.use(express.static(path.join(__dirname, 'public')));

// app.engine('hbs', engine);
// hbs.registerPartials("views/partials");

app.use(async function (req, res, next) {
    // let sessionData = req.session;
    res.locals.APP_NAME = process.env.APP_NAME;
    res.locals.BASE_URL = process.env.APP_URL;
    res.locals.ENVIRONMENT = process.env.NODE_ENV;
    next();
});

// setup the route
app.use(mainRoutes);

// setup and start server
let listen = app.listen(port, function () {
    console.log('App listening on port ' + port);
});