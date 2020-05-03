require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

const express = require('express');
const cron = require('node-cron');

const TabulacaoController = require('./controllers/TabulacaoController');
const GravacaoController = require('./controllers/GravacaoController');
const MatchController = require('./controllers/MatchController');

const routes = express.Router();

// Scheduling the matches
cron.schedule(`0 */${process.env.HOUR_INTERVAL} * * *`, MatchController.store);

routes.post('/tabulacao', TabulacaoController.store);
 
routes.post('/gravacao', GravacaoController.store);

routes.get('/matches', MatchController.readAll);
 
module.exports = routes;