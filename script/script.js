const obj= {
    form: document.querySelector('#form'),

    send: document.querySelector('#send'),

    boxes: document.querySelector('#boxes'),

    newPage: document.querySelector('#newPage'),

    btnNewPage: document.querySelector('#btnNewPage'),

    formShare: document.querySelector('#formShare')
}

const toJson = response => response.json()

function buildProductBoxes (response) {

    for (let i = 0; i < response.products.length ; i ++) {

        obj.boxes.innerHTML += `
            <div class="box">
                <div class="img">
                    <img src="https://${response.products[i].image}" alt="Porduct Image" class="product_img">
                </div>
                 
                <div class="productText">    
                    <h4> ${response.products[i].name} </h4>
                    <p>${response.products[i].description}</p>
                    <p>De: R$${response.products[i].oldPrice}</p>
                    <p>Por:R$${response.products[i].price}</p>
                    <p>ou ${response.products[0].installments.count} x de R$${response.products[0].installments.value}</p>
                    <button>Comprar</button>
                </div>
            </div>
            `
        
    }
    
    obj.newPage.classList.add('visible')
    obj.newPage.classList.remove('hidden')
    obj.btnNewPage.onclick = function(e) {
        fetch(`https://${response.nextPage}`).then(toJson).then(buildProductBoxes).catch(errorMsg)
    
    }

}

function errorMsg(){
    console.log('Erro')
}

obj.form.onsubmit = function(e) {
    e.preventDefault()

    let hasError = false

    let inputName = document.forms['form']['name']
    if(!inputName.value) {
        hasError = true
        inputName.classList.add('error')
        let span = inputName.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'
    } else {
        inputName.classList.remove('error')
        let span = inputName.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputEmail = document.forms['form']['email']
    let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!inputEmail.value || !inputEmail.value.match(emailValidation)) {
        hasError = true
        inputEmail.classList.add('error')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite um E-mail válido'
    } else {
        inputEmail.classList.remove('error')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputCpf = document.forms['form']['cpf']
    let cpfValidation = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/
         
    if (!inputCpf.value || !inputCpf.value.match(cpfValidation)) {
        hasError = true
        inputCpf.classList.add('error')
        let span = inputCpf.nextSibling.nextSibling
        span.innerText = 'Digite um CPF Válido'
    }  else {
        inputCpf.classList.remove('error')
        let span = inputCpf.nextSibling.nextSibling
        span.innerText = ''
    }

    let radio = document.forms['form']['radio']
     if (!radio.value ) {
        hasError = true
        console.log('erro')
        radio[1].classList.add('error')
        let span = radio[1].nextSibling.nextSibling
        span.innerText = 'Selecione uma opção'
    } else {
        radio[1].classList.remove('error')
        let span = radio[1].nextSibling.nextSibling
        span.innerText = ''
    } 

    let send = document.forms['form']['send']
    let sendIsPressed = ''

           
    if (!hasError) {
        fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1').then(toJson).then(buildProductBoxes).catch(errorMsg)
        form.submit()
        sendIsPressed = 'sended'

        if (sendIsPressed === 'sended') {
            //Garante que novas requisições sejam feitas somente no botão de nova página

            send.classList.add('formSend')
            let span = send.nextSibling.nextSibling
            span.innerText = 'Formulário enviado com sucesso'
            
            boxes.innerHTML = ''
        }
        
    }
}

obj.formShare.onsubmit = function(e) {
    e.preventDefault()
    
    let hasError = false

    let inputName = document.forms['formShare']['friendName']
    if(!inputName.value) {
        hasError = true
        inputName.classList.add('error')
        let span = inputName.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'
    } else {
        inputName.classList.remove('error')
        let span = inputName.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputEmail = document.forms['formShare']['friendEmail']
    let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!inputEmail.value || !inputEmail.value.match(emailValidation)) {
        hasError = true
        inputEmail.classList.add('error')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite um E-mail válido'
    } else {
        inputEmail.classList.remove('error')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!hasError) {
        formShare.submit()
    }

}
