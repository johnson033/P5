typeOfMotion = "random";
power = true;

function setup() {
  createCanvas(1000, 800);
  this.TV = new tv(-height / 2, -height / 3, height / 1.8, height / 1.8);

  this.powerButton = new powerButton();
  this.backAndForthButton = new backAndForthButton();
  this.wrapAroundButton = new wrapAroundButton(); 
  this.circularMotionButton = new circularMotionButton(); 
  this.randomMotionButton = new randomMotionButton(); 
}

function draw() {
  translate(width / 2, height / 2);
  background(32);
  this.TV.show();
  this.powerButton.show();
  this.backAndForthButton.show();
  this.wrapAroundButton.show();
  this.circularMotionButton.show(); 
  this.randomMotionButton.show(); 
}

function tv(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.ball = new tvBall(this.x, this.y, this.w, this.h);
  this.show = function () {
    fill(64, 47, 31);
    rect(
      this.x - 30,
      this.y - 30,
      this.w + this.w / 2.5,
      this.h + 60,
      this.h / 8
    );
    fill(44);
    rect(this.x, this.y, this.w, this.h, this.h / 8);
    this.ball.show();
  };
}

function tvBall(tvX, tvY, tvW, tvH) {
  this.x = random(tvX, tvX + tvW - 60);
  this.y = random(tvY, tvY + tvH - 60);
  this.angle = 0;
  this.w = 50;
  this.h = 50;
  this.velX = random(1, 3);
  this.velY = random(1, 3);

  this.show = function () {
    if (power) {
      switch (typeOfMotion) {
        case "random":
          randomMotion(this, tvX, tvY, tvW, tvH);
          break;
        case "linearBackAndForth":
          linearBackAndForth(this, tvX, tvW);
          break;
        case "linearWrapAround":
          linearWrapAround(this, tvX, tvW);
          break;
        case "circular":
          CircularMotion(this, tvX, tvY, tvW, tvH, this.angle);
          break;
      }
    }
  };
}

function powerButton() {
  this.x = 425;
  this.y = -300;
  this.w = 70;
  this.h = 70;

  this.show = function () {
    push();
    stroke(255);
    fill(255, 30, 30);
    if (
      dist(mouseX - width / 2, mouseY - height / 2, this.x, this.y) <
      this.h / 2
    )
      fill(255, 100, 100);
    ellipse(425, -300, this.w, this.h);
    textAlign(CENTER);
    text("Power", this.x, this.y);
    pop();
  };
}

function backAndForthButton() {
  this.x = 300;
  this.y = -300;
  this.w = 70;
  this.h = 40;

  this.show = function () {
    push();
    stroke(255);
    fill(55);
    if (
      mouseX - width / 2 > this.x &&
      mouseX - width / 2 < this.x + this.w &&
      mouseY - height / 2 > this.y &&
      mouseY - height / 2 < this.y + this.h
    )
      fill(77);
    rect(this.x, this.y, this.w, this.h);
    text("Back And Forth", this.x, this.y);
    pop();
  };
}

function wrapAroundButton() {
  this.x = 380;
  this.y = -200;
  this.w = 70;
  this.h = 40;

  this.show = function () {
    push();
    stroke(255);
    fill(55);
    if (
      mouseX - width / 2 > this.x &&
      mouseX - width / 2 < this.x + this.w &&
      mouseY - height / 2 > this.y &&
      mouseY - height / 2 < this.y + this.h
    )
      fill(77);
    rect(this.x, this.y, this.w, this.h);
    text("Wrap Around", this.x, this.y);
    pop();
  };
}

function circularMotionButton() {
  this.x = 300;
  this.y = -200;
  this.w = 70;
  this.h = 40;

  this.show = function () {
    push();
    stroke(255);
    fill(55);
    if (
      mouseX - width / 2 > this.x &&
      mouseX - width / 2 < this.x + this.w &&
      mouseY - height / 2 > this.y &&
      mouseY - height / 2 < this.y + this.h
    )
      fill(77);
    rect(this.x, this.y, this.w, this.h);
    text("Circular", this.x, this.y);
    pop();
  };
}

function randomMotionButton() {
  this.x = 300;
  this.y = -100;
  this.w = 150;
  this.h = 40;

  this.show = function () {
    push();
    stroke(255);
    fill(55);
    if (
      mouseX - width / 2 > this.x &&
      mouseX - width / 2 < this.x + this.w &&
      mouseY - height / 2 > this.y &&
      mouseY - height / 2 < this.y + this.h
    )
      fill(77);
    rect(this.x, this.y, this.w, this.h);
    text("Random", this.x, this.y);
    pop();
  };
}

function linearBackAndForth(box, tvX, tvW) {
  if (box.x + box.w > tvX + tvW || box.x <= tvX) box.velX *= -1;

  fill(
    map(box.x, tvX, tvX + tvW, 100, 200),
    map(box.x, tvX, tvX + tvW, 40, 255),
    map(box.x, tvX, tvX + tvW, 50, 170)
  );

  rect(box.x, box.y, box.w, box.h);
  box.x += box.velX;
}

function linearWrapAround(box, tvX, tvW) {
  if(box.velX < 0) box.velX *= -1;
  if (box.x + box.w >= tvX + tvW && box.w > 0) box.w = tvX + tvW - box.x;
  else if (box.x >= tvX + tvW && box.w < 50) {
    box.w = 50;
    box.x = tvX;
  } else if (box.x == tvX && box.w < 50) {
    box.w += box.velX;
  }
  fill(
    map(box.x, tvX, tvX + tvW, 100, 200),
    map(box.x, tvX, tvX + tvW, 40, 255),
    map(box.x, tvX, tvX + tvW, 50, 170)
  );

  rect(box.x, box.y, box.w, box.h);
  box.x += box.velX;
}

function CircularMotion(box, tvX, tvY, tvW, tvH, angle) {
  this.radius = tvH / 2 - 90;
  this.angle = angle;
  this.baseX = tvX + tvW / 2;
  this.baseY = tvY + tvH / 2;

  fill(
    map(box.x, tvX, tvX + tvW, 100, 200),
    map(box.y, tvY, tvY + tvH, 40, 255),
    map(box.x, tvX, tvX + tvW, 50, 170)
  );

  rect(box.x, box.y, box.w, box.h);
  box.x = baseX + radius * cos(radians(this.angle));
  box.y = baseY + radius * sin(radians(this.angle));
  box.angle += 1.1;
}

function randomMotion(box, tvX, tvY, tvW, tvH) {
  if (box.x + box.w > tvX + tvW || box.x <= tvX) box.velX *= -1;
  if (box.y + box.h > tvY + tvH || box.y <= tvY) box.velY *= -1;

  fill(
    map(box.x, tvX, tvX + tvW, 100, 200),
    map(box.y, tvY, tvY + tvH, 40, 255),
    map(box.x, tvX, tvX + tvW, 50, 170)
  );

  rect(box.x, box.y, box.w, box.h);
  box.x += box.velX;
  box.y += box.velY;
}

function mouseClicked(){
  //powerButton
  if (dist(mouseX - width / 2, mouseY - height / 2, 425, -300) <35)
    power = !power;
  else if ( // Linear back and forth
      mouseX - width / 2 > 300 &&
      mouseX - width / 2 < 300 + 70 &&
      mouseY - height / 2 > -300 &&
      mouseY - height / 2 < -300 + 40
    )
    typeOfMotion = "linearBackAndForth";
  else if ( // Linear Wrap around
      mouseX - width / 2 > 380 &&
      mouseX - width / 2 < 380 + 70 &&
      mouseY - height / 2 > -200 &&
      mouseY - height / 2 < -200 + 40
  )
    typeOfMotion = "linearWrapAround";
  else if (
    mouseX - width / 2 > 300 &&
      mouseX - width / 2 < 300 + 70 &&
      mouseY - height / 2 > -200 &&
      mouseY - height / 2 < -200 + 40
  )
    typeOfMotion = "circular";
  else if (
  mouseX - width / 2 > 300 &&
      mouseX - width / 2 < 300 + 150 &&
      mouseY - height / 2 > -100 &&
      mouseY - height / 2 < -100 + 40
  )
    typeOfMotion = "random";
}
