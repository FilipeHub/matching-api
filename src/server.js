require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

const express = require('express');
const mongoose = require('mongoose')

const routes = require('./routes');
 
const app = express();

mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser:true,
        useCreateIndex: true,
        useUnifiedTopology: true});

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);
