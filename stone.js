class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("stone.png");
		this.body=Bodies.circle(x, y, this.r, options)
		World.add(world, this.body);

		
	}
	display()
	{
			
			var stonepos=this.body.position;		

			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r,this.r)
			//ellipse(0,0,this.r, this.r,this.r);
			pop()
			
	}

}