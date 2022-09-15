
const canvasWidth = 100;
const canvasHeight = 100;

const { ctx } = VBCanvas.createCanvas({
    // viewBox (x, y, width, height)
    viewBox: [0, 0, canvasWidth, canvasHeight],
    // where to mount the <canvas> element
    target: '.canvas-wrapper',
    autoAspectRatio: false
});

// animation loop (not VBCanvas specific)
(function draw() {
    // draw a rectangle in the center of the canvas
    ctx.fillRect(40, 40, 20, 20);

    requestAnimationFrame(draw);
})();