const express = require('express');
const UserController = require('./controller/UserController');


const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/cadastrar-usuario', (req, res) =>{
    res.render('Página de posts');
});


module.exports = routes;