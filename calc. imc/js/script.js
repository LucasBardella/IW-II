var result = document.getElementById('resultado')


function operadorM() {
    var kilo = Number(document.getElementById('kg').value)
    var altura = Number(document.getElementById('cm').value)
    var imc = kilo / (altura * altura)
    imc = imc.toFixed(2)
    console.log('imc: ' + imc)
    console.log(typeof (imc))
    result.innerHTML = imc

}