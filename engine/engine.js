import GlobalConstant from "./constant.js";
import {GlobalVariable} from "./variable.js";
import ObjectJson from "./objectjson.js";
import GlobalObject from "./Graphics.js"

export function init(doc)
{
    loading(doc);
    update();
}

function update()
{
    //while(true)
    {
        setInterval(() => 
            {
                GlobalVariable.objectArray[0].forEach(element =>
                    {
                        new Worker('./engine/draw.js', {type : "module"}).postMessage(element.polygon[0]);
                    }
                );
            },
            parseInt(Math.floor(1000/GlobalConstant.FRAME * 100))
        )
    }
}

function loading(d)
{
    GlobalVariable.canvas = document.getElementById("3D_Engine");
    GlobalVariable.ctx = GlobalVariable.canvas.getContext('2d');
    GlobalVariable.objectArray = [];
    GlobalVariable.distance = parseInt((Math.tan((GlobalConstant.FOV / 2) * (Math.PI/180))) * (GlobalConstant.WIDTH / 2));

    for(var element of ObjectJson.object)
    {
            GlobalVariable.objectArray.push([new GlobalObject(element.vector, element.attribute, element.polygon)]);
    };
}