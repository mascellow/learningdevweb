// DOM
const cidade = document.querySelector('.input-cidade')
const botao= document.querySelector('.botao-busca')
const textoCidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const imagem = document.querySelector('.imagem')

const chave = '6037a7b7d9177261a471acda6782f069'

// Eventos

botao.addEventListener('click', buscar)

// Funções

async function buscar() {
    nome_cidade = cidade.value
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nome_cidade}&appid=${chave}&units=metric&lang=pt_br`)
    .then(resp => resp.json())

    textoCidade.textContent = `Tempo em ${dados.name}`
    temperatura.textContent = `Temperatura: ${dados.main.temp.toFixed(0)}ºC`
    previsao.textContent = `Previsão: ${dados.weather[0].description}`
    imagem.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    console.log(dados)
}