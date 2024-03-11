const ligar = document.getElementById("ligar")
const desligar = document.getElementById("desligar")
const lampada = document.getElementById("lamp")

function estaQuebrado(){
    return lampada.src.indexOf('quebrada') > -1
}

function lampLigada(){
    if(!estaQuebrado()){
    lampada.src = "img/ligada.jpg"
    }
}

function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
}

function lampDesligada(){
    if(!estaQuebrado()){
    lampada.src = "img/desligada.jpg"
    }
}

ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)
lampada.addEventListener('mouseover',lampLigada)
lampada.addEventListener('mouseleave',lampDesligada)
lampada.addEventListener('dblclick',lampQuebrada)
