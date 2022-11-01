export class Point {
  constructor(p5, p, x, y) {
    this.p5 = p5;
    this.p = p;
    this.pos = this.p.createVector(p.random(p.width), p.random(p.height));
    this.vel = this.p.createVector();
    this.acc = this.p.createVector();
    this.target = this.p.createVector(x, y);
    this.maxSpeed = 10;
    this.maxForce = 1;
  }

  setTarget(x, y) {
    this.target = this.p.createVector(x, y);
  }

  doBehaviours() {
    let seek = this.seek(this.target);
    let flee = this.flee(this.p.createVector(this.p.mouseX, this.p.mouseY));

    // Weighting the forces
    seek.mult(1);
    flee.mult(5);

    this.applyForce(seek);
    this.applyForce(flee);
  }

  seek(target) {
    let desired = this.p5.Vector.sub(target, this.pos);

    let mag = this.maxSpeed;
    if (desired.mag() < 100) {
      mag = this.p.map(desired.mag(), 0, 100, 0, this.maxSpeed);
    }
    desired.setMag(mag);

    let steer = this.p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }

  flee(target) {
    let desired = this.p5.Vector.sub(target, this.pos);
    if (desired.mag() < 100) {
      desired.setMag(this.maxSpeed);
      desired.mult(-1);

      let steer = this.p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      return steer;
    } else {
      return this.p.createVector(0, 0);
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  draw() {
    this.p.strokeWeight(4);
    this.p.stroke(255);
    this.p.point(this.pos.x, this.pos.y);
  }
}
