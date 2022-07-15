const obj= {
    form: document.querySelector('#form'),

    enviar: document.querySelector('#enviar'),

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
    console.log(radio)
    if (!radio.value ) {
        temErro = true
        console.log('erro')
        radio[1].classList.add('error')
        let span = radio[1].nextSibling.nextSibling
        span.innerText = 'Selecione uma opção'
    } else {
        radio[1].classList.remove('error')
        let span = radio[1].nextSibling.nextSibling
        span.innerText = ''
    } 

    let enviar = document.forms['form']['enviar']
    let enviarPressionado = ''

           
    if (!temErro) {
        fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1').then(toJson).then(buildProductBoxes).catch(errorMsg)
        form.submit()
        enviarPressionado = 'enviar'

        if (enviarPressionado === 'enviar') {
            //Garante que novas requisições sejam feitas somente no botão de nova página

            enviar.classList.add('formSend')
            let span = enviar.nextSibling.nextSibling
            span.innerText = 'Formulário enviado com sucesso'
            
            boxes.innerHTML = ''
        }
        
    }
}

obj.formShare.onsubmit = function(e) {
    e.preventDefault()
    
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
