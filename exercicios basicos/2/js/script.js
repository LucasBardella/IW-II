var resultado = document.getElementById('resultado')

function pegarNome() {
    var pegarNome = prompt('Digite seu nome: ')
    alert ('Bem vindo ' + pegarNome)
    resultado.innerHTML = pegarNome
}
