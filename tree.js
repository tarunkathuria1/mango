class Tree{
    constructor(x,y){
    var  options={
           isStatic:true,
           restitution:0,
            friction:1
      }

        this.image=loadImage("tree.png");
        this.body=Bodies.rectangle(x,y,20,50,options);
        this.width=20;
        this.height=50;
        World.add(world,this.body);
    }
    display(){
        
        var treepos=this.body.position
        push()
			translate(treepos.x, treepos.y);
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image,500,-250,330,530);
			//ellipse(0,0,this.r, this.r,this.r);
			pop()
       		

			
        
    }
}