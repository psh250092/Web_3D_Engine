export class Coord
{
    constructor(element)
    {
        this.x = element[0];
        this.y = element[1];
        this.z = element[2];
    }
}

class PolygonClass
{
    constructor(element)
    {
        this.pos = [new Coord(element.pos[0]), new Coord(element.pos[1]), new Coord(element.pos[2])];
        this.color = element.color;
    }
}

class VectorClass
{
    constructor(element)
    {
        this.start = new Coord(element.start)
        this.end = new Coord(element.end)
    }
}

class AttributeClass
{
    constructor(element)
    {
        this.colision = element.colision;
        this.weight = element.weight;
        this.rotate = element.rotate;
    }
}

class GlobalObject
{
    constructor(vector, attribute, polygonArray)
    {
        this.vector = new VectorClass(vector)
        this.attribute = new AttributeClass(attribute);
        this.polygon = [];

        for (var element of polygonArray)
        {
            this.polygon.push(new PolygonClass(element));
        };
    }
}

export default GlobalObject;