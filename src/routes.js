const express = require('express');
const UserController = require('./controller/UserController');


const routes = express.Router();

routes.get('/users', UserController.index);

routes.get('/', async (req, res) =>{
    res.render('index');
  });


  routes.post('/', async (req, res) =>{
    res.render('index');
  });

  routes.get('/form', async (req, res, next) =>{
    res.render('form');
    next();
  },function (next) {
    routes.post('/form', UserController.store);
 
  });


module.exports = routes;