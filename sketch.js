
var fruit,fruit1,fruit2,fruit3,fruit4
var monster,monsterImage
var sword,swordImage
var score=0;
function preload(){
  monsterImage = loadAnimation("alien1.png","alien2.png")
fruit1 = loadImage("fruit1.png")
 fruit2 = loadImage("fruit2.png")
 fruit3 = loadImage("fruit3.png")
fruit4 = loadImage("fruit4.png")
  swordImage = loadImage("sword.png")
}
function setup(){
  createCanvas(600,600)
 sword= createSprite(40,200,20,20)
  sword.addImage(swordImage)
  sword.scale = 0.7
  fruitGroup = new Group();
  enemyGroup = new Group();
}
function draw(){
background("lightblue")
  sword.y = World.mouseY
  sword.x = World.mouseX
  fruits();
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2;
    
    
  }
  Enemy();
  drawSprites();

  
}
function fruits(){
  if(World.frameCount%80===0){
    fruit= createSprite(400,200,20,20);
    fruit.scale=0.2;
    //fruit.debug= true;
    r=Math.round(random(1,4));
    switch(r){
      case 1:fruit.addImage(fruit1)
        break
      case 2:fruit.addImage(fruit2)
        break
      case 3:fruit.addImage(fruit3)
        break
      case 4:fruit.addImage(fruit4)
        break
       
    }
     fruit.y= Math.round(random(50,340));
        fruit.velocityX= -7;
        fruit.setLifetime=100;
        fruitGroup.add(fruit);
  }

}
  function Enemy(){
  if(World.frameCount%200===0){
   monster= createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8;
    monster.setLifetime=50; 
    enemyGroup.add(monster);
    }
    
    
    
    
  }