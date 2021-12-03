var canvas;
var backgroundImage, mermaid1_img, mermaid2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image, obstacle3Image, obstacle4Image
var database, gameState;
var form, player, playerCount;
var allPlayers, mermaid1, mermaid2, fuels, powerCoins, obstacles;
var mermaids = [];
var blastImage;

function preload() {
  backgroundImage = loadImage("assets/background1.jpg");
  mermaid1_img = loadAnimation("assets/mermaid1.png","assets/mermaid2.png");
  mermaid2_img = loadAnimation("assets/mermaid01.png","assets/mermaid02.png");
  track = loadImage("assets/pool.png");
  fuelImage = loadImage("assets/energyDrink.png");
  powerCoinImage = loadImage("assets/coin.png");
  obstacle1Image = loadImage("assets/octopus.png");
  obstacle2Image = loadImage("assets/starfish.png");
  obstacle3Image = loadImage("assets/turtle.png");
  obstacle4Image = loadImage("assets/shell.png");
  lifeImage = loadImage("assets/life.png");
  blastImage = loadImage("assets/blast.png");
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  console.log("inside draw")
  //image(backgroundImage,0,0,width,height)
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
