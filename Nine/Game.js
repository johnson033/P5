let node, stack;
class Game{
  constructor(gameSize, nodeSize){ // size passed as a vertex
    this.numOfRows = gameSize.y;
    this.numOfCols = gameSize.x;
    this.nodeSize = nodeSize;
    this.mazeMade = false;
    this.maze = this.initMaze();

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

      }else{
        node = stack.pop();
        while(node == null && !stack.isEmpty()){
          node = stack.pop();
        }
      }

    if(stack.isEmpty()){
      this.mazeMaze = true;
    }
    this.player.x = node.x;
    this.player.y = node.y;
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
          rect(col.x,col.y,col.size, col.size);
          pop();
        }
      });
    });
  }
}
