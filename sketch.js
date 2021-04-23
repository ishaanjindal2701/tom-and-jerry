var cat;
var cImg;











function preload() {
    //load the images here
    cImg=loadImage("cat1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(980,700,10,10);
cat.addImage(cImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
