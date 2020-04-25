const express = require('express');
//Cors é para minha api ser acessada de outros dominios.
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors())

//Iniciando o Db
mongoose.connect('mongodb+srv://Root:bcd127@teste-8gvn0.mongodb.net/nodeapi', {useUnifiedTopology:true, useNewUrlParser:true})

requireDir('./src/models');


//Chamaando a rota do arquivo routes.js
app.use('/api', require('./src/routes'))

app.listen(3001);

