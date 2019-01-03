'use strict'
var express = require('express');
var cors = require('cors');
var bodyParse = require('body-parser');
var app = express();

var user_routes = require('./routes/user');
var artist_routes = require('./routes/artist');
var album_routes = require('./routes/album');
var song_routes = require('./routes/song');

app.use(cors());
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

//conf cabeceras
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Controll-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTION, PUT, DELETE');
    res.header('Allow','GET, POST, OPTION, PUT, DELETE');

    next();
});

//

app.use('/api', user_routes);
app.use('/api', artist_routes);
app.use('/api', album_routes);
app.use('/api', song_routes);

module.exports = app;