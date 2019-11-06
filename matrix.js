const fontSize = 25;
let width;
let height;
let streams = [];
let streamCount = 0;
const switchChar = 500;
let switchCharCount = switchChar;
let charSymbol = true;

function setup() {
  width = windowWidth - 10;
  height = windowHeight - 20;
  streamCount = int(width / fontSize);
  width = streamCount * fontSize;

  createCanvas(width, height);
  frameRate(30);
  for (let i = 0; i < streamCount; i++) {
    streams.push(
      new MyStream(
        fontSize,
        charSymbol,
        i * fontSize,
        height,
        random(1, streamCount / 2)
      )
    );
  }
}

function draw() {
  background(0, 160);
  // for (let i = 0; i < streamCount; i++) {
  //   streams[i].draw();
  // }
  streams.forEach(stream => {
    stream.draw();
  });
  writeAuthor();
  switchCharCount--;
  if (switchCharCount <= 0) {
    switchCharCount = switchChar;
    charSymbol = !charSymbol;
    streams.forEach(stream => {
      stream.changeSymbol(charSymbol);
    });
  }
}

function writeAuthor() {
  let title = ' Code là Ghiền ';
  let size = fontSize * 6;
  fill('white');
  textSize(size);
  while (textWidth(title) > width) {
    size -= 1;
    textSize(size);
  }
  text(title, (width - textWidth(title)) / 2, height / 2 - size * 0.5);
  title = 'Hướng dẫn học lập trình';
  fill(color(83, 255, 26));
  textSize(size * 0.5);
  text(title, (width - textWidth(title)) / 2, height / 2 + size * 0.5);
}
