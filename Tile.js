class tile {
    constructor(x,y) {
      var options = {
          restitution : 0
      }
      this.body = Bodies.rectangle(x,y,random(25,50),random(25,50),options);
      this.width = random(25,50);
      this.height = random(25,50);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(random(0,255),random(0,255),random(0,255));
      rect(pos.x, pos.y, this.width, this.height);
    }
  }