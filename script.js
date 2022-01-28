var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image(); // Создание объекта
var fg = new Image(); // Создание объекта
var pipeUp = new Image(); // Создание объекта
var pipeBottom = new Image(); // Создание объекта

bird.src = ""
bg.src = "img/bg.png"; // Аналогично
fg.src = "img/fg.png"; // Аналогично
pipeUp.src = "img/pipeUp.png"; // Аналогично
pipeBottom.src = "img/pipeBottom.png"; // Аналогично

function draw () {
    ctx.drawImage (bg, 0, 0);

}

pipeBottom.onload = draw;