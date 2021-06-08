var ctx;

function addCanvasEvent(e)
{
    var offscreen = e.data.canvas;
    ctx = offscreen.getContext("2d");
    self.removeEventListener("message", addCanvasEvent);
    self.addEventListener("message",addDrawEvent);
}

function addDrawEvent(e)
{
    ctx.fillStyle = `rgb(${e.data.color[0]}, ${e.data.color[1]}, ${e.data.color[2]})`;
    ctx.beginPath();
    ctx.moveTo(...e.data.pos[0]);
    ctx.lineTo(...e.data.pos[1]);
    ctx.lineTo(...e.data.pos[2]);
    ctx.fill();
}

self.addEventListener("message",addCanvasEvent);