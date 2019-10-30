let bubbleSortDone = false;
let bubbleSort;
let bubbleSort2;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  frameRate(30);
  bubbleSort = new BubbleSort(20, 20, windowWidth * 0.8, windowHeight * 0.3);
  bubbleSort2 = new BubbleSort(
    150,
    400,
    windowWidth * 0.5,
    windowHeight * 0.55
  );
  bubbleSort.shuffle();
  bubbleSort2.shuffle();
}

function draw() {
  background('white');
  bubbleSortDone = bubbleSort.sort();
  bubbleSortDone2 = bubbleSort2.sort();
  if (bubbleSortDone && bubbleSortDone2) {
    noLoop();
  }
}
