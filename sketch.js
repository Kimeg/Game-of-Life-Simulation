let N = 50;

let WIDTH = 200;
let HEIGHT = 200;

let TILESIZE = WIDTH/N;

let grid = [];
let G;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  
  G = new Grid();
  G.initialize();
}

function draw_grid(){
  for (let i=0; i<=N; i++){
    stroke(0);
    line(0, i*TILESIZE, WIDTH, i*TILESIZE);
    line(i*TILESIZE, 0, i*TILESIZE, HEIGHT);
  }
}

function draw() {
  background(0);
  
  G.update();
}