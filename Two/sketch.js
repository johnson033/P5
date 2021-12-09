let bubbles = []; 
let numOfBubbles = 800.0; 
function setup() {
  createCanvas(displayWidth, displayHeight);
  print("The canvas size is " + width + 'x' + height+"px"); 
  
  for(let i = 0 ; i < numOfBubbles; i++){
    bubbles.push(new Bubble(random(10,30)));
  }
  print("There are " + bubbles.length + " bubbles on the screen");
}

function draw() {
  background(32);
  
  bubbles.forEach(function(b){
    noStroke(); 
    fill(82,152,200,100);
    //if the mouse if over a bubble change the color of it
    if(mouseX > b.x && mouseX < b.x + b.size && mouseY > b.y && mouseY < b.y + b.size){
      b.speed *= -1;
      } 
    b.show(); 
  });
}

function Bubble(size){
  this.size = size; 
  this.x = random(width); 
  this.y = random(height, height + 900); 
  this.speed = map(this.size, 10, 30, 2, 4);
  
  this.show = function(){
    if(this.y < 0){
      this.x = random(width); 
      this.y = random(height, height + 200); 
      this.speed = map(this.size, 10, 30, 2, 4);
    }
    
  
    ellipse(this.x, this.y, this.size); 
    
    this.y -= this.speed; 
    this.speed *= 1.009;
  }
}

function mouseClicked(){
   let distances = []; 
  bubbles.forEach(function(b){
    distances.push(dist(mouseX,mouseY,b.x,b.y));
  });
  
  print("The farthest distance between the mouse and a bubble is " + max(distances));
  print("The shortest distance between the mouse and a bubble is " + min(distances));
}