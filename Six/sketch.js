let titleFont;
let speechFont;
let frosty;
let ground;
let quotes = [];
let flakeTypes = [];
let flakes = [];
let pdf; 

// Function will load everything in before the sketch starts. 
function preload() {
  titleFont = loadFont("snowy.ttf");
  speechFont = loadFont("Thorn.ttf");
  quotes = loadStrings("quotes.txt");
  flakeTypes.push(loadImage("flake1.png"));
  flakeTypes.push(loadImage("flake2.png"));
  flakeTypes.push(loadImage("flake3.png"));

  ground = new Ground();
  frosty = new snowMan();
}
//creates all the flakes for the sketch inside the setup.
function setup() {
  createCanvas(1000, 700);

  for (let i = 0; i < 200; i++) {
    let imgNum = floor(random(3));
    let x = random(width);
    let y = random(-400);
    let size = random(5, 15);

    flakes.push(new flake(x, y, size, imgNum));
    pdf = createPDF();
    pdf.beginRecord();
  }
  
  
}

function draw() {
  background(91, 182, 242);
  
  flakes.forEach(function (x) {
    x.show();
  });
  ground.show();
  frosty.show();

  //The Main Title at the top of the page
  push();
  stroke(255);
  strokeWeight(11);
  textSize(120);
  textFont(titleFont);
  text("Frosty the Snowman", 0, 100, width, 300);
  pop();
}

function Ground() {
  this.img = loadImage("ground.png");

  this.show = function () {
    image(this.img, 0, height - height * 0.4, width, height * 0.4);
  };
}

function snowMan() {
  this.x = 50;
  this.y = 300;
  this.width = 400;
  this.height = 400;
  this.say = "Click Me! PS. Press any key to save this as a PDF";

  this.img = loadImage("snowman.png");
  this.bubble = loadImage("speechBubble.png");

  this.show = function () {
    image(this.img, this.x, this.y, this.width, this.height);
    push();
    image(this.bubble, 280, 230, 400, 200);
    tint(100,200,100,200);   //Using the Tint Function on the bubble; 
    this.bubble.blend(this.img, 0,0,22,100,67,0,33,0,LIGHTEST); // USING the blend function in the bubble
    pop();
    textAlign(CENTER);
    textFont(speechFont);
    textSize(19);
    text(this.say, 350, 270, 270, 100);
 
    if (mouseIsPressed) {               // When the mouse is pressed by the User the text that frosty is saying will change
      this.say = quotes[floor(random(quotes.length))];
    }
  };
}

function flake(x, y, size, imgNum) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.imgNum = imgNum;
  this.speed = map(this.size, 5, 15, 0.1, 1.3);

  this.show = function () {
    image(flakeTypes[this.imgNum], this.x, this.y, this.size, this.size);
    this.y += this.speed;

    if (this.y > height) this.y = random(-400);
  };
}

function keyPressed(){ // When any key is pressed it will save the page as a pdf. 
  pdf.save();
}
