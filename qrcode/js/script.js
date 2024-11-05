//DOM
const texto = document.querySelector('#texto');
const botao = document.querySelector('#botao');
const area = document.querySelector('#qrcode');

//Events

botao.addEventListener('click', gerar)


//Função
function gerar(){
    area.innerHTML = ''
    new QRCode(area, {
        text:texto.value, 
        width:200,
        height:200,

    })
}



