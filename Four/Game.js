let node, stack;
class Game{
  constructor(gameSize, nodeSize){ // size passed as a vertex
    this.numOfRows = gameSize.y;
    this.numOfCols = gameSize.x;
    this.nodeSize = nodeSize;
    this.mazeMade = false;
    this.maze = this.initMaze();
    this.time = 0;
    this.startTime = 0;
    this.solved = false;
    this.player = new Player(1,1,nodeSize,this.maze);
  }

  initMaze(){
    let game = [];
    for(let i = 0; i < this.numOfRows; i++){
      game[i] = [];
      for(let j = 0; j < this.numOfCols; j++){
        game[i][j] = new Node(createVector(j,i), createVector(this.numOfCols, this.numOfRows),this.nodeSize);
      }
    }
    return game;
  }

  genMaze(){
    if(!this.mazeMade){
    if(typeof node === 'undefined' && typeof stack === 'undefined'){
    node = this.maze[1][1];
    stack = new Stack();
    stack.push(node);
    }
      node.visited = true;

      let nextNode = this.getNextNode(node);
      if(nextNode != null){
        let next = this.maze[nextNode.y][nextNode.x];
        this.maze[floor((node.row + next.row)/2)][floor((node.col+next.col)/2)].visited = true;
        node = next;
        stack.push(node);

      }else node = stack.pop();

    if(stack.isEmpty()){
      this.mazeMade = true;
      this.startTime = millis();
    }
  }
}

  mazeLoop(){

  }

  getNextNode(node){
    let options = [];
    for(let i = 0; i < 4; i ++){
      if(node.neighbors[i]!=null && !this.maze[node.neighbors[i].y][node.neighbors[i].x].visited){
        options.push(node.neighbors[i]);
      }
    }
    return options.length > 0? options[floor(random(options.length))]: null;
  }

  showMaze(){
    if(!this.solved){
    this.time = floor((millis() - this.startTime) / 1000);
    }
    if(this.player.row ==  this.numOfRows-2 && this.player.col ==  this.numOfCols-2){
      this.solved = true;
    }
    print(this.time);
    this.maze.forEach(function(row){
      row.forEach(function(col){
        if(!col.visited){
          col.show();
        }else {
          push();
          fill(200);
          if(col.passed) fill(100,100,200);
          rectMode(CENTER);
          noStroke();
          specularMaterial(250);
          shininess(50);
          rect(col.x,col.y,col.size, col.size);
          pop();
        }
      });
    });
  }
}
