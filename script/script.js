
const form = document.querySelector('#form')

const enviar = document.querySelector('#enviar')

const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`

const btnNewPage = document.querySelector('#btnNewPage')

const container = document.querySelector('.container')

const boxes = document.querySelector('#boxes')

enviar.onclick = function(e) {
 
    const toJson = response => response.json()

    const buildProductBoxes = (response) => {

        boxes.classList.remove('beforeForm')
        boxes.classList.add('afterForm')

        for (let i = 0; i < response.products.length ; i ++) {
            boxes.innerHTML += `
                <div class="box">
                    <img src="https://${response.products[i].image}" alt="Porduct Image" class="product_img">
                    <h4> ${response.products[i].name} </h4>
                    <p>${response.products[i].description}</p>
                    <p>De: R$${response.products[i].oldPrice}</p>
                    <p>Por:R$${response.products[i].price}</p>
                    <p>ou ${response.products[0].installments.count} x de R$${response.products[0].installments.value}</p>
                    <button>Comprar</button>
                </div>

                <a  id="btnNewPage" href="https://${response.nextPage}" target="_blank">Ainda mais produtos</a>

                `
            
        }

        function newPage() {
            console.log('Nova Página')
        }
  
    }

    function errorMsg(){
        console.log('Erro')
    }

    fetch(url).then(toJson).then(buildProductBoxes).catch(errorMsg)

    }

form.onsubmit = function(e) {
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
    } 
       
    if(!temErro) {
        form.submit()
    }
}

const formShare = document.querySelector('#formShare')

formShare.onsubmit = function(e) {
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
