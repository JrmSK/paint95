var canvas = document.getElementById("canvas");
var colors = document.getElementById("colors");

var color = "black";
var pixel;

function draw() {
    pixel = document.createElement("div");
    canvas.appendChild(pixel);
    pixel.style.height = "5px";
    pixel.style.width = "5px";
    pixel.style.backgroundColor = color;
    pixel.style.position = "absolute";
    pixel.style.top = event.clientY + "px";
    pixel.style.left = event.clientX + "px";
}

function changeColor() {
    color = event.target.id;
    document.getElementById("colorSelected").style.backgroundColor = color;
}

canvas.addEventListener('mousedown', function () {
    canvas.addEventListener("mousemove", draw);
});

canvas.addEventListener('click', function () {
    canvas.removeEventListener("mousemove", draw);

});

colors.addEventListener("click", changeColor);