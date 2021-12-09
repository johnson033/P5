
let rows, cols, size, lightLevel;
let game;
let font;
function preload() {
  font = loadFont('KARNIVOS.ttf');
}
function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);
  textFont(font);
  lightLevel = 100;
  rows = 41;
  size = floor((height) / rows);
  cols = floor((width) / size) % 2 == 0? floor((width) / size) -1: floor((width) / size);
  game = new Game(createVector(cols, rows), size);
  frameRate(120);
}

function draw(){
  background(32);
  translate(-width/2+100,-height/2+100);
  camera(game.player.x, game.player.y, height,width/2, height/2, 0, 0, 1, 0);

  ambientLight(lightLevel/2,lightLevel/2,lightLevel/2);
  pointLight(0,lightLevel,0, game.maze[1][1].x, game.maze[1][1].y,70);
  pointLight(lightLevel,0,0, game.maze[rows-2][cols-2].x, game.maze[rows-2][cols-2].y,70);
  pointLight(lightLevel, lightLevel, lightLevel, game.player.x, game.player.y, 70);

  game.showMaze();
  game.player.show();

  if(!game.mazeMade){
    game.genMaze();
  }else{
  if (keyIsPressed && key =='w' && !game.solved) {
    game.player.moveUp();
  }
  if (keyIsPressed && key =='a' && !game.solved) {
    game.player.moveLeft();
  }
  if (keyIsPressed && key =='s' && !game.solved) {
    game.player.moveDown();
  }
  if (keyIsPressed && key =='d' && !game.solved) {
    game.player.moveRight();
  }

  let min = floor(game.time / 60) < 10? "0" + floor(game.time / 60): floor(game.time / 60);
  let sec = game.time - (floor(game.time / 60) * 60) < 10? "0" + (game.time - (floor(game.time / 60) * 60)).toString(): game.time - (floor(game.time / 60) * 60);
  let timer = min + ":" + sec;
  push();
  translate(width/2,height/2,100);
  textSize(width*.2);
  fill(120,120,120,map(dist(game.player.x, game.player.y, width/2,height/2), 0, width/2, 0, 100));
  if(game.solved){
    fill(0,255,100);
  }
  textAlign(CENTER);
  text(timer, 0,0);
  pop();
}
}

function keyReleased(){
  if(game.mazeMade){
  game.player.fixPos();
}
}
