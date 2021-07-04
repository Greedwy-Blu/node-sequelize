//Express
const express = require('express');
const app = express();

//View Engine
app.set('view engine','ejs');
app.use(express.static('public'));

//Body-Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



//Banco de dados
const connection = require('./database/database');
const User = require('./Users/User');
connection
    .authenticate()
        .then(
            console.log('Database ON')
        ).catch((Error)=>{
            console.log(Error);
        });

//Sessões
const session = require('express-session');

app.use(session({
    secret:'asdmalsdasdoiejdkaslkdalksdjlkasjdjeas', cookie:{maxAge: 60000}
}));
app.use(function(req,res,next){
    res.locals.user = req.session.user;
    next();
})

//Rotas
const usersController = require('./Users/UsersController');

app.use('/',usersController);
app.get('/',(req,res)=>{
    res.render('index');
});


//Servidor
app.listen('3000',()=>{
    console.log('Server ON');
});