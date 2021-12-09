
let rows, cols, size, lightLevel;
let game;
let rowSlider, lightSlider;
function preload(){

}

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);
  rowSlider = createSlider(11,71,41);
  lightSlider = createSlider(30,200,100);

  rowSlider.position(width*0.8 + 100,100);
  lightSlider.position(width*0.8 + 100, 200);

  lightLevel = lightSlider.value();
  rows = rowSlider.value();
  size = floor((height) / rows);
  cols = floor((width) / size) % 2 == 0? floor((width) / size) -1: floor((width) / size);
  game = new Game(createVector(cols, rows), size);

  rowSlider.changed(() => {
    rows = rowSlider.value();
    size = floor((height) / rows);
    cols = floor((width) / size) % 2 == 0? floor((width) / size) -1: floor((width) / size);
    game = new Game(createVector(cols, rows), size);
    rowSlider.show();
    hightSlider.show();
  });
  lightSlider.changed(() => {
    lightLevel = lightSlider.value();
    rowSlider.show();
    lightSlider.show();
  });
}

function draw(){
  background(32);
  translate(-width/2+100,-height/2+100);
  camera(game.player.x, game.player.y, height,width/2, height/2, 0, 0, 1, 0);

  ambientLight(lightLevel/2,lightLevel/2,lightLevel/2);
  pointLight(lightLevel, lightLevel, lightLevel, game.player.x, game.player.y, 50);



  game.showMaze();
  game.player.show();
  if(!game.mazeMaze){
    game.genMaze();
  }else{
  if (keyIsPressed && key =='w') {
    game.player.moveUp();
  }
  if (keyIsPressed && key =='a') {
    game.player.moveLeft();
  }
  if (keyIsPressed && key =='s') {
    game.player.moveDown();
  }
  if (keyIsPressed && key =='d') {
    game.player.moveRight();
  }
}
}

function keyReleased(){
  if(game.mazeMaze){
  game.player.fixPos();
  rowSlider.hide();
  lightSlider.hide();
}
}
