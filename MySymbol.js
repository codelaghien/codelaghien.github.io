class MySymbol {
  constructor(size, charSymbol) {
    this.size = size;
    this.charSymbol = charSymbol;
  }

  draw(x, y, color) {
    const symbol = this.charSymbol
      ? String.fromCharCode(0x30a0 + round(random(0, 96)))
      : round(random(0, 1)).toString();
    fill(color);
    textSize(this.size);
    text(symbol, x, y);
  }

  changeSymbol(charSymbol) {
    this.charSymbol = charSymbol;
  }
}
