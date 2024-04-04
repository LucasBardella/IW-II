document.querySelector('h1').style.color = "white";
titulo.style.color = "white";
titulo.style.backgroundColor = "black";
titulo.style.padding = "0.7rem";
titulo.style.borderRadius = "29px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnpink = document.querySelector('#btpink')

let btnpurple = document.querySelector('#btpurple')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnpink.addEventListener('click', modopink)
btnpurple.addEventListener('click', modopurple)

function modoDark() {
    event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("purple");
}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.remove("pink");
    tela.classList.remove("purple");
    tela.classList.add("light");
}

function modopink() {
    event.preventDefault();
    console.log('modo pink')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("purple");
    tela.classList.add("pink");
}

function modopurple() {
    event.preventDefault();
    console.log('modo purple')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.add("purple");
}