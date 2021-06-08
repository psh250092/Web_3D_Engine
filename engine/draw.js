import {GlobalVariable} from "./variable.js";

function DisplayCoord(coord)
{
    var ratio = (GlobalVariable.distance / (GlobalVariable.distance + coord.z));
    return [Math.round(ratio * coord.x + GlobalConstant.WIDTH / 2), Math.round(ratio * coord.y + GlobalConstant.HEIGHT / 2)];
}

onmessage = function(e)
{
    console.log("Worker activated.");
    GlobalVariable.ctx.fillStyle = `rgb(${e.data.color[0]}, ${e.data.color[1]} + ,${e.data.color[2]})`;
    GlobalVariable.ctx.beginPath();
    GlobalVariable.ctx.moveTo(...DisplayCoord(e.data.pos[0]));
    GlobalVariable.ctx.lineTo(...DisplayCoord(e.data.pos[1]));
    GlobalVariable.ctx.lineTo(...DisplayCoord(e.data.pos[2]));
    GlobalVariable.ctx.fill();
    console.log("Worker closing....");
    close();
}