//dom
const fundo = document.querySelector("body")
const red = document.querySelector("#red")
const blue = document.querySelector("#blue")
const green = document.querySelector("#green")

//event

red.addEventListener('click', vermelho)
blue.addEventListener('click', azul)
green.addEventListener('click', verde)

//função

function vermelho(){
    fundo.className = 'red'
}

function azul(){
    fundo.className = 'blue'
}

function verde(){
    fundo.className = 'green'
}