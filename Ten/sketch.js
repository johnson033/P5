let spinner; 
function setup() {
  createCanvas(1000, 600);
  //change the rectMode the center to help with the rotations. Also create the main rectanlge Object. 
  rectMode(CENTER);
  spinner = new spin();
}

function draw() {
  translate(width /2,  height / 2); //TRANSLATE
  background(32);
  spinner.color();
  spinner.show();
}

//spin is the function for the main suare object. All the info needed for it is kept and handled here. 

function spin(){ //FUNCTION ONE
  this.x = 0; 
  this.y = 0; 
  this.size = 100; 
  this.scaleFactor = map(mouseX, 0, width, 0, 6);
  this.angle = 0; 
  this.c = color(255,255,255);
  
  // this is a function that can be called from inside the spin function in order to show the square.
  this.show = function(){ // FUNCTION TWO
    push();
    rotate(this.angle+= 0.1); //ROTATE
    scale(this.scaleFactor); //SCALE
    fill(this.c);
    rect(this.x, this.y, this.size, this.size);
    pop();
    
    this.scaleFactor = map(mouseX, 0, width, 0, 6);
  }
  //this is a function from inside of the spin function in order to set the color of the suqare. 
  this.color = function(){ // FUNCTION THREE
    this.red = map(mouseY, 0, height, 100,255);
    this.blue = map(mouseY, 0, height, 0,100);
    this.green = map(mouseY, 0, height, 60,180);
    
    this.c = color(this.red, this.green, this.blue);
  }
}