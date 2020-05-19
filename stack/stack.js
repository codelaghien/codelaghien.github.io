const left = 10;
const width = 70;
const height = 50;
const topY = 100;
const list = [];
let node = null;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  frameRate(30);
}

function draw() {
  background('white');
  noStroke();
  fill('blue');
  textSize(30);
  text(
    'Thực tập Stack - FILO (First In Last Out, vào trước ra sau) - LIFO (Last In First Out, vào sau ra trước)',
    left,
    50
  );
  //   console.log('draw');

  for (let i = 0; i < list.length; i++) {
    // console.log('node', list[i].value);
    const x = left + i * width;
    fill(list[i].color);
    stroke('blue');
    strokeWeight(2);
    rect(x, topY, width, height);

    noStroke();
    fill('white');
    textSize(20);
    text(
      int(list[i].value),
      x + width / 2 - textWidth(int(list[i].value).toString()) / 2,
      topY + height / 2 + 7
    );
  }

  if (node) {
    const x = left + list.length * width;
    fill(node.color);
    stroke('blue');
    strokeWeight(2);
    rect(x, topY + height * 2, width, height);

    noStroke();
    fill('white');
    textSize(20);
    text(
      int(node.value),
      x + width / 2 - textWidth(int(node.value).toString()) / 2,
      topY + height * 2 + height / 2 + 7
    );
  }

  noLoop();
}

function mousePressed() {
  if (mouseButton === LEFT) {
    list.push(new Node(random(400)));
    node = null;
  }
  if (mouseButton === RIGHT) {
    if (list.length > 0) {
      node = list.pop();
    } else {
      node = null;
    }
  }
  redraw();
}
