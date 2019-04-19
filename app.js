//  SETUP EXPRESS
var express= require('express');
var app= express();

//  SETUP TEMPLATE ENGINE
app.set('view engine','ejs');
app.use(express.static('./public'));

//  SETUP BODY-PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  SETUP SERVER PORT
app.listen(3000);
console.log('You are listening to port: 3000');

// --------------------------------------------------------- 

//  REQUIRED FILES
require('./models/db');

// IMPORTING CONTROLLERS
var userRecordController= require('./controllers/userRecordsController');


// FIRING CONTROLLERS
app.use('/', userRecordController);
