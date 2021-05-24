const express = require('express');
const path = require('path');
const routes = require('./routes');
require('./database');



const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static('public'));



app.use(express.json());



app.use(routes);

app.listen(3333);