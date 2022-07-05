
const form = document.querySelector('#form')
form.onsubmit = function(e) {
    e.preventDefault()
    console.log(e)
    

    const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`

    const btnNewPage = document.querySelector('#btnNewPage')
    

    console.log(btnNewPage)

    const toJson = response => response.json()

    const onTheScreen = (response) => {
        console.log(response)
        const buttonUrl = response.nextPage

        btnNewPage.innerHTML = `<a href="https://${buttonUrl}" target="_blank">Ainda mais produtos</a>`
    
    
    
    
    }


    fetch(url).then(toJson).then(onTheScreen).catch(errorMsg)

    

    

    
    let temErro = false

    let inputNome = document.forms['form']['name']
    if(!inputNome.value) {
        temErro = true
        inputNome.classList.add('error')
        let span = inputNome.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'
    } else {
        inputNome.classList.remove('error')
        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputEmail = document.forms['form']['email']
    if (!inputEmail.value) {
        temErro = true
        inputEmail.classList.add('error')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'E-mail inválido'
    } else {
        inputEmail.classList.remove('error')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputCpf = document.forms['form']['cpf']
    if (!inputCpf.value) {
        temErro = true
        inputEmail.classList.add('error')
        let span = inputCpf.nextSibling.nextSibling
        span.innerText = 'Digite um CPF Válido'
    } else {
        inputCpf.classList.remove('error')
        let span = inputCpf.nextSibling.nextSibling
        span.innerText = ''
    }

    let radio = document.forms['form']['radio']
    if (radio.checked === false) {
        console.log(document.forms['form']['radio'])
        temErro = true
        radio.classList.add('error')
        let span = radio.nextSibling.nextSibling
        span.innerText = 'Selecione uma opção'
    } else if(radio.checked === true) {
        radio.classList.remove('error')
        let span = radio.nextSibling.nextSibling
        span.innerText = ''
    } else {
        function errorMsg(){
            console.log('Erro')
        }
    }

    if(!temErro) {
        form.submit()
    }
}



const formShare = document.querySelector('#formShare')
formShare.onsubmit = function(e) {
    e.preventDefault()
    console.log(e)

    let temErro = false

    let inputNome = document.forms['formShare']['friendName']
    if(!inputNome.value) {
        temErro = true
        inputNome.classList.add('error')
        let span = inputNome.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'
    } else {
        inputNome.classList.remove('error')
        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputEmail = document.forms['formShare']['friendEmail']
    if (!inputEmail.value) {
        temErro = true
        inputEmail.classList.add('error')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'E-mail inválido'
    } else {
        inputEmail.classList.remove('error')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro) {
        formShare.submit()
    }

}

// https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1