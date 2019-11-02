const fontSize = 25;
let width;
let height;
let streams = [];
let streamCount = 0;

function setup() {
  width = windowWidth - 10;
  height = windowHeight - 20;
  streamCount = int(width / fontSize);
  width = streamCount * fontSize;

  createCanvas(width, height);
  frameRate(30);
  for (let i = 0; i < streamCount; i++) {
    streams.push(
      new MyStream(fontSize, i * fontSize, height, random(1, fontSize * 0.5))
    );
  }
}

function draw() {
  background(0, 120);
  writeAuthor();
  for (let i = 0; i < streams.length; i++) {
    streams[i].draw();
    streams[i].drop();
  }
}

function writeAuthor() {
  let title = ' Code là Ghiền ';
  //   title = ' Hướng dẫn học lập trình ';
  let size = fontSize * 6;
  fill('white');
  textSize(size);
  while (textWidth(title) > width) {
    size -= 1;
    textSize(size);
  }
  //   title = 'Code là Ghiền';
  //   textSize(size);
  text(title, (width - textWidth(title)) / 2, height / 2 - size * 0.5);
  title = 'Hướng dẫn học lập trình';
  fill(color(83, 255, 26));
  textSize(size * 0.5);
  text(title, (width - textWidth(title)) / 2, height / 2 + size * 0.5);
}
