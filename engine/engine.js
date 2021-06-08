import GlobalConstant from "./constant.js";
import {GlobalVariable} from "./variable.js";
import ObjectJson from "./objectjson.js";
import GlobalObject from "./Graphics.js"

export function init(doc)
{
    loading(doc);
    update();
}

function physics(a)
{
    if(a.objectArray[0].polygon[0].pos[0].y >= -2000)
    {
        a.objectArray[0].polygon.forEach(pa=>{pa.pos.forEach(po=>{po.y -= 50; console.log(pa.pos.y)});});
    }
    else
    {
        GlobalVariable.pause = true;
    }
}

function update()
{
    var offscreen = document.getElementById("3D_Engine").transferControlToOffscreen();
    var worker = new Worker('./engine/draw.js');
    var computer = new Worker('./engine/compute.js', {type : "module"});
    worker.postMessage({canvas : offscreen}, [offscreen]);
    console.log("Canvas send");
    setInterval(() => 
        {
            if(!GlobalVariable.pause)
            {
            physics(GlobalVariable);
            
            worker.postMessage({"pos" : [[-2000,-2000],[-2000,2000],[2000,-2000]], "color" : GlobalConstant.BGCOLOR});
            worker.postMessage({"pos" : [[2000,2000],[-2000,2000],[2000,-2000]], "color" : GlobalConstant.BGCOLOR});
            GlobalVariable.objectArray.forEach(element =>
                {
                    {
                        computer.onmessage = function(e)
                        {
                            worker.postMessage({"pos" : e.data.pos, "color" : e.data.color});
                        }
                        computer.postMessage({"polygonArray" : element.polygon, "d" : GlobalVariable.distance});
                    }
                }
            );
            }
        },
        parseInt(Math.floor(1000/GlobalConstant.FRAME * 10))
    );
}

function loading(d)
{
    GlobalVariable.distance = parseInt((Math.tan((GlobalConstant.FOV / 2) * (Math.PI/180))) * (GlobalConstant.WIDTH / 2));
    GlobalVariable.pause = false;
    for(var element of ObjectJson.object)
    {
        GlobalVariable.objectArray.push(new GlobalObject(element.vector, element.attribute, element.polygon));
    };
}