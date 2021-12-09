class snow{
  constructor(x,y,size){
    this.x = x; 
    this.y = y; 
    this.size = size; 
    this.speed = map(this.size, 1, 4, 0.2,2);
  }
  
  display(){
    if(this.y >= 550) this.y = random(-200,0);
    push();
    stroke(200);
    strokeWeight(map(this.speed, 1, 3, 2,4));
    point(this.x, this.y);
    this.y += this.speed;
    pop();
  }
}