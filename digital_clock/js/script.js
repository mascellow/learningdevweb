//DOM
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const saud = document.getElementById('saudacoes')

const relog = setInterval(function time(){
    let dateToday = new Date();
    let d= dateToday.getDate();
    let m= dateToday.getMonth()+1;
    let y= dateToday.getFullYear();
    let hr= dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let bomdia = 'Bom dia';
    let boatarde = 'Boa tarde';
    let boanoite = 'Boa noite';

    if(hr < 10) hr = '0' + hr;

    if(min < 10) min = '0' + min;

    if(sec < 10) sec = '0' + sec;

    if(d < 10) d = '0' + d;

    if(m < 10) m = '0' + m; 

    if(hr >= 18 || hr < 5){
        saud.textContent = boanoite;
        bgImage = "url('images/2.jpg')";

    }else if(hr < 12){
        saud.textContent = bomdia;
        bgImage = "url('images/3.jpg')";
    }else{
        saud.textContent = boatarde ;
        bgImage = "url('images/1.jpg')";
    } 

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
    dia.textContent = d;
    mes.textContent = m;
    ano.textContent = y;

    document.body.style.backgroundImage = bgImage;
})