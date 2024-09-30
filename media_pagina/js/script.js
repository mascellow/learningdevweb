//DOM

n1 = document.querySelector('#uni1')
n2 = document.querySelector('#uni2')
n3 = document.querySelector('#uni3')
const botao = document.querySelector('#botao_resultado');
const resultado = document.querySelector('#resultado');

 //Event

 botao.addEventListener('click', calcular)

 //Função

 function calcular(){
    nota = Number(n1.value)
    nota_dois = Number(n2.value)
    nota_tres = Number(n3.value)

    media = (nota + nota_dois + nota_tres)/3

    if(media >= 5){
        mensagem = 'Aprovado'
    }else if(media >=4 ){
        mensagem = 'Recuperação'

    }else{
        mensagem = 'Reprovado'
    }

    resultado.textContent = `A sua média é: ${media.toFixed(1)} | SITUAÇÃO: ${mensagem}`; 
 }
