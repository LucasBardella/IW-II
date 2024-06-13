const express = require("express")
const app = express()
const handlebars = require('express-handlebars')

// Configuração

// Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Conexão com Banco de Dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '', {
    hsot: 'localhost',
    dialect: 'mysql'
})

//Rotas
app.get('/cadastro', function (req, res) {
    res.send('ROTA DE CADASTRO DE POST')
})


app.listen(8081, function () {
    console.log('Servidor girando e dançando em http://localhost:8081')
})
