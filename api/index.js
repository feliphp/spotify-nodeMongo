'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean2', (err,res) =>{
    if(err){
        throw err;
    } else {
       console.log('la base de datos está conectada correctamente');
       app.listen(port,function(){
        console.log('servidor del API rest de musica  escuchando en http://localhost:'+port);
       });
    }
});