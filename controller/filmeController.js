//rotas
const express =require('express');
const router = express.Router();
const services = require('../services/filmeServices');

const nameRoute ='/movie';

router.post(nameRoute, async (req,res)=>{
    const {body} = req;
    let response = await services.createMovie(body);
    res.status(response.status).json(response.message);   
})

router.get(nameRoute, async(req,res)=>{
    let response = await services.searchMovie();
    res.status(response.status).json(response.message);
})

router.put(nameRoute +'/:id', async(req,res)=>{
    const {body} = req;
    const {id} = req.params
    let response = await services.updateMovie(id, body);
    res.status(response.status).json(response.message);
})

router.delete(nameRoute + '/:id', async(req,res)=>{
    let response = await services.deleteMovie(req.params.id);
    res.status(response.status).json(response.message);
})

module.exports = router;