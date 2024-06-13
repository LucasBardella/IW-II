const express = require("express")
const app = express()

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/paginas/index.html')
})

app.get('/sobre', function (req, res) {
    res.sendFile(__dirname + '/paginas/sobre.html')
})

app.get('/blog', function (req, res) {
    res.send('Página blog')
})

app.get('/cadastro/:nome/:idade', function (req, res) {
    res.send('Olá seu nome: ' + req.params.nome + '\nSua idade: ' + req.params.idade)

})


app.listen(8081, function () {
    console.log('Servidor girando e dançando em http://localhost:8081')
})
