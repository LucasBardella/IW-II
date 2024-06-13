const Sequelize = require('sequelize')
const sequelize = new_Sequelize('test', 'root', '', {
    hsot: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log('Conectado com Sucesso!')
// }).catch(function(erro){
//         console,log('Houve o seguinte erro: ' + erro)
// })

const Postagem = sequelize.define('´postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Postagem.sync(force = true)
// Usuario.sync(force = true)

// Postagem.create({
//     titulo: 'PRIMEIRA POSTAGEM',
//     conteudo: 'Conteudo da primeira postagem. blablablabla'
// })

// Usuario.create({
//     nome: 'Pirimeiro Nome',
//     sobrenome: 'Primeiro Sobrenome',
//     idade: 19,
//     email: 'xxxxxxxx@gmail.com'
// })
