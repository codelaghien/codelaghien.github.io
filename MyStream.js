class MyStream {
  constructor(size, x, h, speed) {
    this.headColor = color(220, 255, 220); //color(112, 250, 105);
    this.color = color(0, 153, 0); //color(10, 255, 10); //'green'; //
    this.size = size;
    this.x = x;
    this.h = h;
    this.y = random(0, this.h - this.size);
    this.speed = speed;
    this.data = [];
    this.chars = int((this.h / this.size) * 0.6);
    for (let i = 0; i < random(this.chars / 2, this.chars); i++) {
      this.data.push(new MySymbol(i === 0 ? this.size + 4 : this.size));
    }
  }

  draw() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].draw(
        i === 0 ? this.x - 2 : this.x,
        this.y - i * this.size,
        i === 0 ? this.headColor : this.color
      );
    }
  }

  drop() {
    this.y += this.speed;
    if (this.y - this.size * this.data.length > this.h) this.y = 0;
  }
}
