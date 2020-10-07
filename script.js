var hours, minutes, seconds;

var day = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');

var month = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');


var clock = function() {

    var date = new Date();

    hours = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours();

    minutes = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();

    seconds = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();

    var time = hours + ":" + minutes + ":" + seconds

    var fullDate = day[date.getDay()] + ", " + date.getDate() + " de " + month[date.getMonth()] + " de " + date.getFullYear();

    document.getElementById("time").innerHTML = time;

    document.getElementById("date").innerHTML = fullDate

}


clock();

setInterval(clock, 1)