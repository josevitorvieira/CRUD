const express = require('express');
const cors = require('cors');
const filme = require('./controller/filmeController');

const api = express();

exports.start = ()=>{

     api.use(express.json());
     api.use(cors());
     api.use('/', filme);

    api.listen(3000,()=>{
        console.log("Aplicação Iniciada!!!");
    })

}