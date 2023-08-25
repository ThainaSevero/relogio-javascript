const relogio = document.getElementById('relogio')

function horario(){
    var horarioatual = new Date();

    var hora = horarioatual.getHours();
    var minutos = horarioatual.getMinutes();
    var segundos = horarioatual.getSeconds();

    hora = (hora < 10) ? "0" + hora : hora;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    var horariocerto = hora + ":" + minutos + ":" + segundos;

    relogio.innerHTML = horariocerto;
}

//setInterval - chama função com intervalos, ou seja, a cada 1000 milissegundos (1 segundo), vai chamar a função, e assim teremos o relógio mudando os segundos
setInterval(horario, 1000)

horario();