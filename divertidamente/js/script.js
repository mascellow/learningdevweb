//DOM

const btRaiva = document.querySelector('.raiva')
const btAlegria = document.querySelector('.alegria')
const btNojinho = document.querySelector('.nojinho')
const btTristeza = document.querySelector('.tristeza')
const foto = document.querySelector('.silhueta')


//Eventos
btRaiva.addEventListener('click', raiva)
btAlegria.addEventListener('click', alegria)
btNojinho.addEventListener('click', nojinho)
btTristeza.addEventListener('click', tristeza)


//funções

function raiva(){
    foto.src='imagens/01.png'
    document.body.style.backgroundColor = "rgb(185 28 28)"
}

function alegria(){
    foto.src='imagens/02.png'
    document.body.style.backgroundColor = "rgb(252 211 77)"
}


function nojinho(){
    foto.src='imagens/03.png'
    document.body.style.backgroundColor = "rgb(22 163 74)"
}


function tristeza(){
    foto.src='imagens/04.png'
    document.body.style.backgroundColor = "rgb(14 165 233)"
}



