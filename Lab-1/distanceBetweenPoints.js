function distanceBetweenPoints(x1,y1,x2,y2)
{
var fPoint={X1:Number(x1),Y1:Number(y1)};
var sPoint={X2:Number(x2),Y2:Number(y2)};
var X=sPoint.X2-fPoint.X1;
var Y=sPoint.Y2-fPoint.Y1;
var distance=Math.sqrt((X*X)+(Y*Y));
return distance;
}

console.log(distanceBetweenPoints('2', '4', '5', '0'));
console.log(distanceBetweenPoints('2.34', '15.66', '-13.55', '-2.9985'));