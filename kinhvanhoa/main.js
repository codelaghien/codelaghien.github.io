
let angle = 0;
let noiseScale = 0.01;
let clearButton;
let saveButton;
let strokeSlider;
let langKinhSlider;
let frameCheckbox;

function setup() {
  width = windowWidth - 200;
  height = windowHeight - 20;
  createCanvas(width, height);

  createStrokeSlider();
  createLangKinhSlider();
  createClearButton();
  createSaveButton();
  createFrameCheckbox();

  angleMode(DEGREES);
  colorMode(HSB, 255, 255, 255);
  translate(width / 2, height / 2);
  clearCanvas();
}

function draw() {
  translate(width / 2, height / 2);
  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;
  if (mouseIsPressed) {
    let noiseVal = noise(noiseScale);
    noiseScale += 0.01;
    stroke(noiseVal * 255, 255, 255, 100);
    for (let i = 0; i < langKinhSlider.value() * 2; i++) {
      rotate(i * angle * 2);
      let sw = strokeSlider.value();
      strokeWeight(sw);
      line(mx, my, pmx, pmy);
      scale(1, -1);
      line(mx, my, pmx, pmy);
    }
  }
}

function clearCanvas() {
  angle = 360 / (langKinhSlider.value() * 2);
  background('black');
  stroke('white');
  strokeWeight(1);
  circle(0, 0, 1);

  if (frameCheckbox.checked()) {
    for (let i = 0; i < langKinhSlider.value() * 2; i++) {
      rotate(angle);
      line(0, 0, width, 0);
    }
  }
}

function createStrokeSlider() {
  let divNetChu = createDiv('').size(100, 20);
  divNetChu.html('Nét chữ');
  divNetChu.position(width + 20, 20);
  strokeSlider = createSlider(1, 30, 1, 0.1);
  strokeSlider.position(width + 20, divNetChu.y + 20);
}

function createLangKinhSlider() {
  let divSoLangKinh = createDiv('').size(100, 20);
  divSoLangKinh.html('Số lăng kính');
  divSoLangKinh.position(width + 20, strokeSlider.y + 50);
  langKinhSlider = createSlider(2, 100, 6, 1);
  langKinhSlider.position(width + 20, divSoLangKinh.y + 20);
}

function createClearButton() {
  clearButton = createButton('Clear');
  clearButton.mousePressed(clearCanvas);
  clearButton.position(width + 20, langKinhSlider.y + 50);
}

function createSaveButton() {
  saveButton = createButton('Save');
  saveButton.mousePressed(savePicture);
  saveButton.position(clearButton.x + clearButton.width + 20, clearButton.y);
}

function savePicture() {
  save('kinhvanhoa_bongtuyet.png');
}

function createFrameCheckbox() {
  frameCheckbox = createCheckbox('Vẽ khung', true);
  frameCheckbox.position(width + 20, clearButton.y + 50);
} 