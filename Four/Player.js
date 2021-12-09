class Player{
  constructor(row,col,size,grid){
    this.row = row;
    this.col = col;
    this.size = size;
    this.grid = grid;
    this.speed = 5;
    this.x = this.grid[this.row][this.col].x;
    this.y = this.grid[this.row][this.col].y;
  }

  moveUp(){
    if(this.grid[this.row-1][this.col].visited){
      this.y -= this.speed;
      if(this.y < this.grid[this.row][this.col].y){
        this.row--;
      }
    }else if(this.y > this.grid[this.row][this.col].y){
      this.y -= this.speed;
    }
  }
  moveDown(){
    if(this.grid[this.row+1][this.col].visited){
      this.y += this.speed;
      if(this.y > this.grid[this.row][this.col].y){
        this.row++;
      }
    }else if(this.y < this.grid[this.row][this.col].y){
      this.y += this.speed;
    }
  }
  moveLeft(){
    if(this.grid[this.row][this.col-1].visited){
      this.x -= this.speed;
      if(this.x < this.grid[this.row][this.col].x){
        this.col --;
      }
    }else if(this.x > this.grid[this.row][this.col].x){
      this.x -= this.speed;
    }
  }
  moveRight(){
    if(this.grid[this.row][this.col+1].visited){
      this.x += this.speed;
      if(this.x > this.grid[this.row][this.col].x){
        this.col ++;
      }
    }else if(this.x < this.grid[this.row][this.col].x){
      this.x += this.speed;
    }
  }

  fixPos(){
    this.x = this.grid[this.row][this.col].x;
    this.y = this.grid[this.row][this.col].y;
  }

  show(){
    push();
    translate(this.x, this.y);
    noStroke();
    fill(100,200,150);
    sphere(this.size/2);
    pop();
  }
}
