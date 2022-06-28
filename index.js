const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: './config.env'});
const mongoose = require('mongoose');
const connectDB = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');
const flash = require('connect-flash');


connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(express.static(__dirname + '/public'));
app.use('/', require('./routes/recettes'));
app.use('/user', require('./routes/user'));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.set('view engine', 'ejs');

//Globals Vars
// app.use((req, res, next) => {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     next();
//   })
  



app.listen(port, console.log(`Server running on port ${port}`));