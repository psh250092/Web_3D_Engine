import GlobalConstant from "./constant.js"

self.addEventListener("message", function (e)
{
    var distance = e.data.d;
    function DisplayCoord(coord)
    {
        var ratio = (distance / (distance + coord.z));
        return [parseInt(Math.round(ratio * coord.x + GlobalConstant.WIDTH / 2)), parseInt(Math.round(ratio * coord.y + GlobalConstant.HEIGHT / 2))];
    }
    e.data.polygonArray.forEach(element =>
    {
        self.postMessage({pos : [DisplayCoord(element.pos[0]), DisplayCoord(element.pos[1]), DisplayCoord(element.pos[2])], color : element.color});
    });
});