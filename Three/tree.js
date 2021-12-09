let branches = [];

class tree{
  constructor(x,y,length){
    this.x = x; 
    this.y = y;
    this.length = length; 
    this.buildTree(this.x, this.y, this.length, 0);
  }
  
  buildTree(x,y,length, angle){ //recursive function to make each branch of the tree.
    if(length < 2) return; 
    let Branch = new branch(x,y,this.getX2(x,length,angle), this.getY2(y,length,angle), angle);
    branches.push(Branch);
    // the angle of the tree will depened on the current length of the branch. 
    this.buildTree(Branch.x2, Branch.y2, length * 0.7, Branch.angle + map(length, 2, height/3 - 100, 30,15));
    this.buildTree(Branch.x2, Branch.y2, length * 0.7, Branch.angle - map(length, 2, height/3 - 100, 45,10));
  }
  
  getX2(x,length, angle){
    return x - length*sin(radians(angle));
  }
  getY2(y, length, angle){
    return y - length*cos(radians(angle));
  }
  getBranches(){return branches;}
}