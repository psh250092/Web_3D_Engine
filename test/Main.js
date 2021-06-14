import {valueChangeA} from "./a.js"
import {valueChangeB} from "./b.js"
import GV from "./Object.js"
alert("Main_1");

export function init()
{
    alert("Main_2");
    valueChangeA();
    alert(GV.getA());
    valueChangeB();
    alert(GV.getA());
}

alert("Main_3");