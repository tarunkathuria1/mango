class mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			density:1,

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("mango.png");
		this.body=Bodies.circle(x, y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var mangopos=this.body.position;		

			push()
			translate(mangopos.x, mangopos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r,this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}