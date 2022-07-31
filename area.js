function circle(radius)
{
 this.radius = radius;
//area method
this.area = function()
{
 retun Math.PI * this.radius * this.radius;
};
}
var c = new circle(5);
console.log('Area =',c.area().toFixed(2));