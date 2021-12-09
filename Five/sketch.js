let stars = [];
let bhole = [];
function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < 100; i++) {
    stars.push(
      new star(
        random(random(-400, -800), random(400, 800)),
        random(random(-400, -800), random(400, 800)),
        random(3, 10)
      )
    );
    
    if (i % 2 == 0)
      bhole.push(new blackHole(0, 0, 200, map(i, 0, 100, 0, 360)));
  }
}

function draw() {
  push();                                                                //GIVE THE SKETCH A BACKGROUND
  background('#1e1e1f');                                                //COLOR MODE HEX 
  pop();                                                                //COLOR NUMBER ONE
  translate(400, 400);

  for (let i = 0; i < bhole.length; i++) {
    push();
    colorMode(RGB, 100, 100, 100, 100);                                 //COLOR MODE RGB
    stroke(8, 82, 82, 32);                                              //COLOR NUMBER TWO
    strokeWeight(4);
    bhole[i].show();
    pop();
  }

  stars.forEach(function (s) {
    s.show();
    s.update();
  });
}

function star(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.width = size;
  this.height = size;

  this.update = function () {
    let target = createVector(0, 0);
    let distance = target.dist(createVector(this.x, this.y));

    let mappedDistance = map(distance, 100, 0, 1, 0);
    target.sub(createVector(this.x, this.y));
    target.normalize();

    target.mult(mappedDistance);

    this.x = this.x + target.x;
    this.y = this.y + target.y;
    this.size = map(distance, 100, 0, 10, 0);

    if (mappedDistance < 0.2) {
      this.x = random(random(-400, -800), random(400, 800));
      this.y = random(random(-400, -800), random(400, 800));
    }
  };

  this.show = function () {
    push();
    beginShape();                                                    // USING SHAPE
    colorMode(HSB, 360,100,100,100);                                 //COLOR MODE HSB
    fill(51,46,87,100);                                              // COLOR NUMBER THREE
    strokeWeight(3);
    stroke(40,85,88);                                                //COLOR NUMBER FOUR
    let angle = 0;
    for (let i = 0; i < 10; i++) {
      let vertexDistance = i % 2 == 0 ? this.size : this.size / 2;
      vertex(
        this.x + vertexDistance * cos(radians(angle)),
        this.y + vertexDistance * sin(radians(angle))
      );
      angle += 36;
    }
    
    angle = 0; 

    beginContour();                                                //USING CONTOUR
  
    for (let i = 0; i < 10; i++) {
      let vertexDistance = i % 2 == 0 ? this.size : this.size / 2;
      vertex(
        this.x + (vertexDistance/2) * sin(radians(angle)),
        this.y + (vertexDistance/2) * cos(radians(angle))
      );
      angle += 36;
    }
    endContour();
    
    endShape(CLOSE);
    pop();
  }
  
}

function blackHole(x, y, size, angle) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.angle = angle;

  this.x2 = function () {
    return this.x + (this.size / 3) * cos(radians(this.angle + 340));
  };

  this.y2 = function () {
    return this.y + (this.size / 3) * sin(radians(this.angle + 340));
  };

  this.x3 = function () {
    return this.x4() + (this.size / 3) * cos(radians(this.angle + 230));
  };

  this.y3 = function () {
    return this.y4() + (this.size / 3) * sin(radians(this.angle + 230));
  };

  this.x4 = function () {
    return this.x + this.size * cos(radians(this.angle));
  };

  this.y4 = function () {
    return this.y + this.size * sin(radians(this.angle));
  };

  this.show = function () {
    noFill();
    bezier(                                                                 //USING BEZIER 
      this.x,
      this.y,
      this.x2(),
      this.y2(),
      this.x3(),
      this.y3(),
      this.x4(),
      this.y4()
    );
    if (this.angle > 359) this.angle = 0;
    this.angle += 1;
  };
}
