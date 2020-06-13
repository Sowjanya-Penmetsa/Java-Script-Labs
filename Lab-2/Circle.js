class Circle
{
    constructor(radius)
    {
        this.radius=radius;
    }

    get diameter()
    {
         return 2*this.radius;
    }
    set diameter(x)
    {
        this.radius=x/2;
    }
    area()
    {
        let area=2*Math.PI*this.radius;
        return area;
    }
}

let circle=new Circle(2);
console.log(`radius: ${circle.radius}`);
console.log(`Diameter: ${circle.diameter}`);
console.log(`Area: ${circle.area()}`);
circle.diameter=1.6;
console.log(`Radius: ${circle.radius}`);
console.log(`Diameter: ${circle.diameter}`);
console.log(`Area: ${circle.area()}`);
