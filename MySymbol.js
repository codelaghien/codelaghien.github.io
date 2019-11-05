class MySymbol {
  constructor(size) {
    this.size = size;
  }

  draw(x, y, color) {
    const symbol = String.fromCharCode(0x30a0 + round(random(0, 96)));
    fill(color);
    textSize(this.size);
    text(symbol, x, y);
  }
}
