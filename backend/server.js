const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// add for used .env file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())


const uri = process.env.ATLAS_URI;
mongoose.connect(uri , { useNewUrlParser : true , useCreateIndex : true })

const connection = mongoose.connection;
connection.once('open' , () => {
    console.log('MongoDB Connection Establish Successfully')
})

//  routes for mongo CRUD operation
const excerciseRouter = require('./routes/excercises')
const userRouter = require('./routes/user')

app.use('/exercises' , excerciseRouter);
app.use('/users' , userRouter);


app.listen(port , () =>{
    console.log(`server is running on ${port}`) 
})