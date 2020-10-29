const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var you;
var engine, world;
var dad,mom,brother,sister;
var coach,teacher,schoolFriend1,schoolFriend2,Footballfriend1,Footballfriend2;
var home,form,gamestate;
var flag,play;
var homeimg,homepg,homepage,img;

function preload(){
  homeimg=loadImage("bekar.jpg");
  img=loadImage("OIP.jpg");
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(displayWidth,displayHeight);
  form=new Form();
  dad=new Dad(350,400,500,500);
 you=new You(1000,400,500,500)
 flag=0
  gamestate=9;
}

function draw() {
 // background(homeimg);
  dad.display();  
  you.display();
  textSize(30);

  

  Engine.update(engine);
  if(gamestate===2){
    push();
    fill("white")
     pop();
    form.display1()
    
  }

// if (gamestate===3){
//   push();
//   fill("white")
//   rectMode(CENTER)
//   rect(550,600,500,100);
//   pop();
//   text("",350,600);
// }
if(flag===4){

     push();
     fill("white")
    rectMode(CENTER)
    rect(900,600,1140,100);
    pop();
    text("very well actually yes I wanted to ask something that is Son how did your exams go?",350,600);
} else if (flag===3){
        push();
        fill("white")
        rectMode(CENTER)
        rect(900,600,1140,100);
        pop();
        text("Is that a way to talk with your father? you dont get to talk to me like that "+"Anyways how did your exams go?",350,600);
} else if (flag===2){
          push();
          fill("white")
          // rectMode(CENTER)
          // rect(900,600,900,125);
          pop();
          text("woah! Mind your language",150,580);
         text("anyways how did your exams go?",150,600);

} else if (flag===1){
  push();
  fill("white")
  rectMode(CENTER)
  rect(900,600,1140,100);
  pop();
  text("Good to hear son, How did Your exams go?",350,600);
}
if(gamestate===1){
  background("white");
  form.display();
  
  //rectMode(CENTER)
  //rect(550,600,500,100);
  //text("",);
}
if (gamestate===9){
  background(img);
  play=createButton('Press here to play');
  play.position(350,750);
  play.mousePressed(()=>{
  play.hide();
  gamestate=1
})
}
 
    
 
}