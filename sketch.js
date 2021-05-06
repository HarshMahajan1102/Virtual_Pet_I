//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300);
  dog.addImage("Dog", dogImg);
  dog.addImage("Happy", happyDog)
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);  
  dog.scale = 0.5;
}


function draw() {  
  background(46, 139, 87);
  fill('black')
  textSize(25)
  text("Food Reaming :" + " " + foodS, 150, 80)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.changeImage("Happy", happyDog)
  }
  drawSprites();
  //add styles here
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  x = x-1
  database.ref('/').update({
  Food : x,
  })
}

