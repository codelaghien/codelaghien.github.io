let maze;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  frameRate(30);
  maze = new Maze(
    0,
    0,
    windowWidth - 20,
    windowHeight - 20,
    'Trò chơi mê cung - MAZE'
  );
  maze.generate();
}

function draw() {
  if (!maze.gerenateMoves()) {
    console.log('DONE');
    noLoop();
  }
}

// function keyPressed() {
//   if (key === 'g') {
//     maze.generate();
//     loop();
//   }
// }
