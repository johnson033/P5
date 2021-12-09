let windows = [];


class Buildings{
  constructor(x,y,width,height){
    this.x = x; 
    this.y = y; 
    this.width = width; 
    this.height = height; 
  }
  
  makeWindows(){
    let cols = map(this.width,70,130,3,6);
    let windowWidth = (this.width / 2) / cols;
    let offset = (this.width - (windowWidth * cols)) /                        (cols +4);
    let windowHeight = windowWidth * 1.77;
    let rows = this.height / windowHeight; 
    let x = this.x + offset;
    let y = this.y + offset;
   
    for(let col = 0; col < cols; col++){
      for(let row = 0; row < rows / 2; row++){
      let X = x + (col  * (windowWidth + offset));
      let Y = y + (row * (windowHeight + offset * 6));
      windows.push(new Window(X,Y,windowWidth, windowHeight));
    }
    }
    
    
  }
  
  display(){
    push();
    stroke(43);
    strokeWeight(3); 
    noFill();
    rect(this.x, this.y, this.width, this.height);
    for(let i = 0; i < windows.length; i++){
      windows[i].display();
    }
    
    pop();
  }
}

class Window{
  constructor(x,y,width, height){
    this.x = x; 
    this.y = y; 
    this.width = width;
    this.height = height; 
  }
  
   display(){
    push();
    stroke(43);
    strokeWeight(2); 
    fill(15);
    rect(this.x, this.y, this.width, this.height * 2);
    pop();
   }
}