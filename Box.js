class Box {

        constructor(x, y, width, height) {
    
            var options={
              restitution : 0.7,
              friction : 0.6,
              isStatic : false
            }
    
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.Visiblty=255;
            World.add(world, this.body);
    
          }
          score(){
            if (this.Visiblity<0 && this.Visiblity >-100){
              score++
            }}  
          display() {
            if(this.body.speed>=5){
              World.remove(world,this.body);
              push();
              this.Visiblity=this.Visiblity-5;
              tint(255,this.Visiblity);
             
              pop();
            }
            else{
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
    
           
          }}
          
    };

    

    
  
  