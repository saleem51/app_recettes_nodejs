const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: './config/config.env'});
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

connectDB();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(express.static(__dirname + '/public'));
app.use('/', require('./routes/recettes'));
app.use('/login', require('./routes/user'));
app.set('view engine', 'ejs');
app.use(cors());


app.listen(port, console.log(`Server running on port ${port}`));