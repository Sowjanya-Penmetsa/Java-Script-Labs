class Point
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    }
    static distance(p,q)
    {
      let d1=p.x-q.x;
      let d2=p.y-q.y;
      let d3=Math.sqrt((d1*d1)+(d2*d2));
      return d3;
    }
}
    let p1=new Point(5,5);
    let p2=new Point(9,8);
    console.log(Point.distance(p1,p2));
