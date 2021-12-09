let branches = []; 
let flakes = []; 
let buildings = [];
function setup() {
  
  //create a canvas 
  createCanvas(550, 550);
  fillBranches(100,470,88,0);
  fillFlakes(); 
  createBuildings();
}

function draw() {
  
  //set the background color 
  background(32);
  
  for(let i = 0; i < buildings.length; i++){
    buildings[i].display();
  }
  
  //draw and update the snow in the background(); 
  for(let i = 0; i < flakes.length; i++){
    flakes[i].display();
  }
  
  //create some clouds
  push();
  createCloud(70,60,70,50);
  createCloud(200,120,80,50);
  createCloud(300,50,60,30);
  createCloud(450,90,80,40);
  pop();
  
  // push pop need to be called above, properties set from other functions carry over. 
  
  //draw the tree
  for(let i = 0; i < branches.length; i++){
    push();
    let b = branches[i];
    //change the strokeWeigth based on the size of the branch.
    //makes larger branches thicker, and smaller branches thiner. 
    strokeWeight(map(b.length,2,70,2,7));
  
    if(b.length <= 5) stroke(200);
    else stroke(90);
    line(b.x1,b.y1, b.x2, b.y2);
    pop();
  }
  
  drawHills(); 
  
  
}

function createCloud(x,y,width, height){
  //set the fill color
  //make it so that there is no fill 
  //clouds will use the ellipse. 
  //clouds will also change the display mode of the ellipse
  fill(90); 
  noStroke(); 
  ellipseMode(CENTER);
  ellipse(x,y,width,height);
  ellipse(x + width / 2, y - (width / 3), width, height); 
  ellipse(x + width * 0.8, y, width, height);
}

function fillBranches(x,y, length, angle){
  
  //recursive function
  //starting from the first branch, it splits, and each of those branches will split.
  //this will keep hapening untill the branch size is less than 2.
  //create a tree using lines (objects with the data needed to create the line in the draw portion);
  //one side uses a random length each time. Makes it so the tree looks more like a tree and is not completly 
  //semetrical. 
  if(length < 2)return; 
  let branch = new Branch(x,y,x2(x,length,angle),y2(y,length,angle),length);
  branches.push(branch);
  fillBranches(branch.x2, branch.y2, length * random(0.4,0.7), angle + PI/5);
  fillBranches(branch.x2, branch.y2, length * 0.7, angle - PI/6);
}

function x2(x,length,angle){
  return x - length * sin(angle); 
}
function y2(y,length,angle){
  return y - length * cos(angle); 
}

function drawHills(){
  push();
  ellipseMode(CENTER);
  strokeWeight(4);
  stroke(200);
  fill(30);
  ellipse(450,550,375,120);
  ellipse(100,550,450,150)
  pop();
}

function fillFlakes(){
  for(let i =0 ; i < 120; i++){
    flakes.push(new snow(random(550), random(-200,0), random(1, 4)));
  }
}

function createBuildings(){
  let totalWidth = 0;
  let minY = 130; 
  while(totalWidth < 550){
    let width = random(70,130);
    let x = totalWidth;
    let y = minY + random(0,90);
    let height = 550 - y; 
    totalWidth += width;
    
    let building = new Buildings(x,y,width,height);
    building.makeWindows(); 
    
    buildings.push(building);
    
  }
}












