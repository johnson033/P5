
class branch{
  constructor(x,y,x2,y2,angle){
    this.x = x; 
    this.y = y;
    this.x2 = x2; 
    this.y2 = y2; 
    this.falling = false;
    this.angle = angle;
    this.length = dist(this.x, this.y, this.x2, this.y2);
    this.show = function(){
      if(!this.falling){
      strokeWeight(map(this.length, 2, (height / 3) - 100,1,20));
      if(this.length < 5)
        stroke(200,map(this.length, 2, (height / 3) - 100, 50, 255), map(this.length, 2, (height / 3) - 100, 50, 255));
      else 
        stroke(94, 51, 18);
      line(this.x, this.y, this.x2, this.y2);
      }
      else{
        stroke(200,map(this.length, 2, (height / 3) - 100, 50, 255), map(this.length, 2, (height / 3) - 100, 50, 255));
        line(this.x, this.y, this.x2, this.y2);
        this.y += 1;
        this.y2 += 1;
      }
    }
  }
}