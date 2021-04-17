var balloon, background;
var database;
var balloonPosition;
function preload(){
   backgroundImg = loadImage("cityImage.png");
   balloonImage = loadAnimation("hotairballoon1.png", "hotairballoon2.png", "hotairballoon3.png")
  }

function setup() {
  database=firebase.database();
  balloonPosition = database.ref('balloon/height');
  balloonPosition.on("value", readHeight, showError);
  console.log(database);
  createCanvas(700, 700);

  balloon=createSprite(100,400,20,20);
  balloon.addAnimation("balloon",balloonImage);
  balloon.scale=0.4;
}

function draw() {
  background(backgroundImg);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0, -10);
    balloon.addAnimation("balloonImage", )
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }
  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move the Hot Air Balloon!",40,40);
}

function updateHeight(x, y){
  database.ref('balloon/height').set({
    'x': height.x + x, 
    'y': height.y + y
  })
}

function readHeight(data){
height = data.val();
balloon.x = height.x;
balloon.y = height.y;
}

function showError(){
console.log("Error");
}
