const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = "destination-over";

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let number = 30;
let scale = 10;

function drawFlower() {
    let angle = number * 5;
    let size = 20;
    size = number;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.cos(angle) + canvas.width / 2;
    let positionY = radius * Math.sin(angle) + canvas.height / 2;

    // random color
    ctx.fillStyle = `hsl(${number * 3}, 100%, 50%)`;
    ctx.strokeStyle = `hsl(${number + 230}, 100%, 50%)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(positionX, positionY, size, 0, Math.PI * 2, false);
    // ctx.arc(positionX + 600, positionY , size, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    // ctx.stroke();

    number++;
}

function animate() {
    //draw each frame
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFlower();
    if (number > 200) return;
    requestAnimationFrame(animate);
}
animate();
