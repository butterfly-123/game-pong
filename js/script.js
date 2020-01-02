const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

function drawBall() {
    const ballSize = 20;
    ctx.fillStyle = 'white';
    ctx.fillRect(cw / 2 - ballSize / 2, ch / 2 - ballSize / 2, ballSize, ballSize);
}

function drawArea() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0,0, cw, ch);
}



drawArea();
drawBall();


