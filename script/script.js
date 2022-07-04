//Armazenamento das Variáveis

const form = document.querySelector('#form')

form.onsubmit = function(e) {
    e.preventDefault()
    console.log(e)
}
