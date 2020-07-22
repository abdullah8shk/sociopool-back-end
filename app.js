const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose')


//import Route
const userRouter = require('./routes/userRoute');
const distanceRouter = require('./routes/distanceRoute');



//env file config
require('dotenv').config()

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//route middleware
app.use('/api/user', userRouter);
app.use('/api/distanceRecord', distanceRouter);



//connect to db
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true},  
    () => console.log("connect to db"))

module.exports = app;
