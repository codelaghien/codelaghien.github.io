class BubbleSort {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.data = [];
    this.swapping = false;
    this.step = 20;
  }

  shuffle() {
    this.done = false;
    this.currentI = 0;
    this.currentJ = 0;
    this.data = [];
    this.margin = 10;
    // let mX = init ? this.width / 4 : mouseX;
    this.elementWidth = int((this.width * 0.1) / 3); // int((mX - this.x) / 2);
    if (this.elementWidth < 5) this.elementWidth = 5;
    else if (this.width / this.elementWidth < 5)
      this.elementWidth = this.width / 5;
    this.elements = int((this.width - this.margin * 2) / this.elementWidth);
    this.margin = (this.width - this.elements * this.elementWidth) / 2;

    for (let i = 0; i < this.elements; i++) {
      const n = int(random(this.height - this.margin - 30));

      this.data.push({
        value: n > 0 ? n : random(10) + 1,
        x: this.x + this.margin + this.elementWidth * i,
        xMove: this.x + this.margin + this.elementWidth * i,
        color: color(random(255), random(255), random(255))
      });
    }
  }

  display() {
    fill('LightYellow');
    rect(this.x, this.y, this.width, this.height);
    for (let i = 0; i < this.elements; i++) {
      fill(this.data[i].color);
      rect(
        this.data[i].xMove,
        this.y + this.height - this.margin,
        this.elementWidth,
        -this.data[i].value
      );
      textSize(12);
      fill(100, 102, 153);
      const textW = int(this.data[i].value) / 2;
      text(
        int(this.data[i].value),
        this.data[i].xMove +
          (this.elementWidth - textWidth(textW.toString())) / 2,
        this.y + this.height - this.margin - this.data[i].value - 10
      );
    }
  }

  sort() {
    this.display();
    if (this.done) {
      textSize(45);
      fill(0, 102, 153);
      text(
        'Đã sắp xếp !',
        this.x + this.margin + 100,
        this.y + this.margin + 30
      );
      return true;
    }
    if (!this.swapping) {
      for (let i = this.currentI; i < this.elements - 1; i++) {
        this.currentI = i;
        for (let j = this.currentJ; j < this.elements - 1 - i; j++) {
          if (this.data[j].value > this.data[j + 1].value) {
            this.swapping = true;
            this.currentJ = j;
            this.swap(j, j + 1);
            return false;
          }
        }
        this.currentJ = 0;
      }
      this.done = true;
    } else {
      this.swap(this.currentJ, this.currentJ + 1);
    }
    return false;
  }

  swap(i, j) {
    this.data[i].xMove += this.step;
    this.data[j].xMove -= this.step;
    if (
      this.data[i].xMove >= this.data[j].x ||
      this.data[j].xMove <= this.data[i].x
    ) {
      const temp = this.data[i];
      this.data[i] = this.data[j];
      this.data[j] = temp;
      this.data[i].xMove = this.data[j].x;
      this.data[j].xMove = this.data[i].x;
      this.data[i].x = this.data[i].xMove;
      this.data[j].x = this.data[j].xMove;
      this.swapping = false;
    }
  }
}
