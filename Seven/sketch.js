let topping = [];

let placedToppings = []; 


function setup() {
  createCanvas(1200, 800);
  for(let i = 0; i < 6; i++)
    topping.push(false);
  // 0 = Pepperoni
  // 1 = Sausage 
  // 2 = Peppers 
  // 3 = Onion
  // 4 = Olives 
  // 5 = Cheese
}

function draw() {
  background(32);
  
  //side box
  fill(200,200,200);
  rect(1000,30,180,740);
  fill(32);
  rect(1002,32,176,736);
  
  //labels for inside the box 
  textSize(24);
  fill(200);
  textAlign(CENTER);
  
  
  
  
  
  push();
  if(topping[0])fill(255,0,0);
  text('Pepperoni',1002,map(0,0,6,90,740),176,40);
  pop();
  
  push();
  if(topping[1])fill(102,67,37);
  text('Sausage',1002,map(1,0,6,90,740),176,40);
  pop();
  
  push();
  if(topping[2])fill(11,122,35);
  text('Peppers',1002,map(2,0,6,90,740),176,40);
  pop();
  
  push();
  if(topping[3])fill(143, 57, 86);
  text('Onion',1002,map(3,0,6,90,740),176,40);
  pop();
  
  push();
  if(topping[4])fill(23,31,22);
  text('olives',1002,map(4,0,6,90,740),176,40);
  pop();
  
  push();
  if(topping[5])fill(255,0,0);
  text('cheese',1002,map(5,0,6,90,740),176,40);
  pop();
  
  //pizza
  noStroke();
  fill(163, 114, 62);
  ellipse(500,400,600,600);
  fill(176, 128, 77);
  ellipse(500,400,540,540);
  
  //toppings 
  if(mouseX < 1000){
  for(let i = 0 ; i < topping.length; i++){
    if(topping[i] == true){
      if(i == 0){
        push();
        strokeWeight(5);
        stroke(255,0,0);
        fill(255,0,0);
        ellipse(mouseX,mouseY,60);
        pop();
        if(mouseIsPressed)
          placedToppings.push(new pepperoni(mouseX, mouseY, 60));
      }
      else if(i == 1){
        push();
        strokeWeight(5);
        stroke(102,67,37);
        fill(102,67,37);
        ellipse(mouseX,mouseY,60,40);
        pop();
        if(mouseIsPressed)
          placedToppings.push(new sausage(mouseX, mouseY, 60,40));
      }
      else if(i == 2){
        push();
        noFill();
        strokeWeight(5);
        stroke(11,122,35);
        bezier(mouseX + 20,mouseY - 50,mouseX, mouseY - 5, mouseX, mouseY + 5,mouseX + 20, mouseY + 50);
        pop();
        if(mouseIsPressed)
          placedToppings.push(new pepper(mouseX + 20,mouseY - 50,mouseX, mouseY - 5, mouseX, mouseY + 5,mouseX + 20, mouseY + 50));
      }
      else if(i == 3){
        push();
        noFill();
        strokeWeight(5);
        stroke(143, 57, 86);
        bezier(mouseX + 20,mouseY - 50,mouseX, mouseY - 5, mouseX, mouseY + 5,mouseX + 20, mouseY + 50);
        pop();
        if(mouseIsPressed)
          placedToppings.push(new onion(mouseX + 20,mouseY - 50,mouseX, mouseY - 5, mouseX, mouseY + 5,mouseX + 20, mouseY + 50));
      }
      else if(i == 4){
        push();
        strokeWeight(5);
        stroke(23,31,22);
        fill(23,31,22);
        ellipse(mouseX, mouseY, 60,40);
        pop();
        if(mouseIsPressed)
          placedToppings.push(new olive(mouseX,mouseY,60,40));
      }
      else if(i == 5){
        push();
        stroke(204, 214, 64);
        strokeWeight(3);
        line(mouseX,mouseY,mouseX+40,mouseY);
        line(mouseX,mouseY,mouseX+10,mouseY+30);
        line(mouseX,mouseY,mouseX,mouseY);
        line(mouseX - 30,mouseY,mouseX,mouseY+30);
        line(mouseX,mouseY-20,mouseX+30,mouseY-10);
      
        stroke(214, 144, 64);    
        line(mouseX + 20,mouseY + 10,mouseX,mouseY - 30);
        line(mouseX + 14,mouseY + 20,mouseX + 14,mouseY);
        line(mouseX,mouseY+20,mouseX,mouseY);
        line(mouseX,mouseY,mouseX,mouseY);
        line(mouseX - 20,mouseY + 20,mouseX,mouseY-15);
        line(mouseX,mouseY+10,mouseX + 20,mouseY);
        pop();
        
        if(mouseIsPressed)
          placedToppings.push(new cheese(mouseX,mouseY));
      
      }
    }
  }
  }
  
  
  for(let i = 0 ; i < placedToppings.length; i++){
    placedToppings[i].show(); 
  }
}

function mouseClicked(){
  let x = mouseX; 
  let y = mouseY;
  
  //Choosing a topping; 
  if(x > 1000){
    for(let i = 0; i < 6; i++){
      topping[i] = false;
    }
    topping[round(map(y, 90,740,0,6))] = true;
  }
  for(let i = 0; i < 6; i++)
      if(topping[i] == true){
        print(i);
      }
  
}

function pepperoni(x,y,size){
  this.x = x; 
  this.y = y;
  this.size = size; 
  
  this.show = function(){
    push();
        strokeWeight(5);
        stroke(255,0,0);
        fill(255,0,0);
        ellipse(this.x,this.y,this.size);
        pop();
  }
}

function sausage(x,y,w,h){
  this.x = x; 
  this.y = y; 
  this.w = w; 
  this.h = h;
  this.show = function(){
    push();
        strokeWeight(5);
        stroke(102,67,37);
        fill(102,67,37);
        ellipse(this.x,this.y,this.w,this.h);
        pop();
  }
}

function pepper(x1,y1,x2,y2,x3,y3,x4,y4){
  this.x1 = x1; 
  this.y1 = y1; 
  this.x2 = x2;
  this.y2 = y2;
  this.x3 = x3; 
  this.y3 = y3; 
  this.x4 = x4; 
  this.y4 = y4; 
  this.show = function(){
    push();
        noFill();
        strokeWeight(5);
        stroke(11,122,35);
        bezier(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3,this.x4,this.y4);
        pop();
  }
  
}

function onion(x1,y1,x2,y2,x3,y3,x4,y4){
  this.x1 = x1; 
  this.y1 = y1; 
  this.x2 = x2;
  this.y2 = y2;
  this.x3 = x3; 
  this.y3 = y3; 
  this.x4 = x4; 
  this.y4 = y4; 
  this.show = function(){
    push();
    noFill();
    strokeWeight(5);
    stroke(143, 57, 86);
    bezier(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3,this.x4,this.y4);
    pop();
  }
  
}

function olive(x,y,w,h){
  this.x = x; 
  this.y = y; 
  this.w = w; 
  this.h = h;
  
  this.show = function(){
    push();
    strokeWeight(5);
    stroke(23,31,22);
    fill(23,31,22);
    ellipse(this.x, this.y, this.w,this.h);
    pop();
  }
}

function cheese(x,y){
  this.x = x;
  this.y = y; 
  this.show = function(){
    push();
        stroke(204, 214, 64);
        strokeWeight(3);
        line(this.x,this.y,this.x+40,this.y);
        line(this.x,this.y,this.x+10,this.y+30);
        line(this.x,this.y,this.x,this.y);
        line(this.x - 30,this.y,this.x,this.y+30);
        line(this.x,this.y-20,this.x+30,this.y-10);
      
        stroke(214, 144, 64);    
        line(this.x + 20,this.y + 10,this.x,this.y - 30);
        line(this.x + 14,this.y + 20,this.x + 14,this.y);
        line(this.x,this.y+20,this.x,this.y);
        line(this.x,this.y,this.x,this.y);
        line(this.x - 20,this.y + 20,this.x,this.y-15);
        line(this.x,this.y+10,this.x + 20,this.y);
        pop();
        
  }
}

function keyPressed(){
  placedToppings = [];
}





























































































































