class Node{
  constructor(pos, gridSize, size){ //pos and gridsize passed as vertex, X being Col, Y being row
    this.row = pos.y;
    this.col = pos.x;
    this.size = size;
    this.maxRow = gridSize.y - 1;
    this.maxCol = gridSize.x - 1;
    this.neighbors = this.initNeighbors();
    this.visited = false;
    this.passed = false;
    this.x = (this.col*this.size);
    this.y = (this.row*this.size);
  }

  initNeighbors(){
    let n = [];
    n[0] = createVector(this.col,this.row-2); // top
    n[1] = createVector(this.col + 2, this.row); // right
    n[2] = createVector(this.col, this.row + 2); // bottom
    n[3] = createVector(this.col - 2, this.row); // left

    for(let i = 0; i < n.length; i++){
      if(n[i].x <= 0 || n[i].x >= this.maxCol || n[i].y <= 0 || n[i].y >= this.maxRow){
        n[i] = null;
      }
    }
    return n;
  }


  show(){
    push();
    translate(this.x, this.y,this.size);
    fill(60,60,60);
    noStroke();
    ambientMaterial(70, 130, 230);
    box(this.size, this.size, this.size*2);
    pop();
  }
}
