var number;
var month;
var day=0;
var bd;
function setup() {
  createCanvas(600,400);
 bd=createSprite(200,200,40,40);

}

function draw() {
  background(0); 
  if(mousePressedOver(bd)){
    var d=Math.round(random(1,2));

    switch(d){
      case 1: day = 1;
      break;
      case 2: day = 2;
      break;
      case 3: day = 3;
      break;
      case 4: day = 4;
      break;
      case 5: day = 5;
      break;
      case 6: day = 6;
      break;
      case 7: day = 7;
      break;
    }
  }

  
  drawSprites();
  text("Day: "+day,250,200);
}