canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var id = "draw";
var id = "clearArea";

function draw() {
    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 5;
    ctx.rect(120, 140, 570, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(250, 260, 60, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(330, 310, 60, 0, 2 * Math.PI);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(400, 260, 60, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(550, 260, 60, 0, 2 * Math.PI);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(470, 310, 60, 0, 2 * Math.PI);
    ctx.stroke();
}
//additional activity 
function clearArea() { ctx.clearRect(0, 0, canvas.width, canvas.height); }