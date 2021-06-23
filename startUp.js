//Inicializar Banco
const mongoose = require('mongoose');
const apiStart = require('./index');

mongoose.connect('mongodb+srv://adminMovies:movies@cluster0.nqrgx.mongodb.net/crudMovie?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const model = mongoose.Schema({
    id:String,
    name:String,
    genre:String,
    director:String,
    cover:String
})

exports.moviesDataBase = mongoose.model('movies',model);

const start = ()=>{
    apiStart.start();    
}

start();

