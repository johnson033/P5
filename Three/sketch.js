let Tree; 
function setup() {
  createCanvas(displayWidth, displayHeight);
  Tree = new tree(width/2, height, (height / 3) - 100); // creates the tree in the class
}

function draw() {
  background(220);
  Tree.getBranches().forEach(function(x){
    if(x.length < 5 && !x.falling){
      if(random(1) < 0.001){ // if the leaf is currently not falling it will have a 0.001% chance to start. 
        x.falling = true;
      }
    }
    x.show(); // calls the show function of the branch to draw it to the screen. 
  });
}