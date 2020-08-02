function setup() {
  createCanvas(800,400);
   rectmoving=createSprite(300,200,40,20);
   rectfixed=createSprite(200,300,40,20);
   rectfixed.debug=true;
   rectmoving.debug=true;
}

function draw() {
  background(0,0,0); 
  
  rectmoving.x=World.mouseX;
  rectmoving.y=World.mouseY;
  if(rectmoving.x-rectfixed.x<rectfixed.width/2+rectmoving.width/2 
    && rectfixed.x-rectmoving.x<rectfixed.width/2+rectmoving.width/2 
    &&rectmoving.y-rectfixed.y<rectfixed.width/2+rectmoving.width/2 
    && rectfixed.y-rectmoving.y<rectfixed.width/2+rectmoving.width/2  ){
    rectmoving.shapeColor="red";
    rectfixed.shapeColor="red";
  }
  else {
    rectmoving.shapeColor="green";
    rectfixed.shapeColor="green";
  }

  drawSprites();
}