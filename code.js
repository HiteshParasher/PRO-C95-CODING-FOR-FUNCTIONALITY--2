var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f091b97d-05fc-4853-84f6-70beb45630b5","ecb13f26-d965-46b0-ae7c-79b161af3659","a4971795-4274-49dd-a161-6aa6e127e86e","dee93553-6461-49c6-8415-1b4c0eaf1727","9276cfa6-a0ee-4fa9-b1e6-cbbe23344618"],"propsByKey":{"f091b97d-05fc-4853-84f6-70beb45630b5":{"name":"blank","sourceUrl":null,"frameSize":{"x":250,"y":250},"frameCount":1,"looping":true,"frameDelay":12,"version":"VHOquuBhOjcAEFzBNLJKbREIPuNgQIOv","loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":250},"rootRelativePath":"assets/f091b97d-05fc-4853-84f6-70beb45630b5.png"},"ecb13f26-d965-46b0-ae7c-79b161af3659":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZjYVs1ixwhKa4BHsM7CEeXLDMW3mFYfA","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/ecb13f26-d965-46b0-ae7c-79b161af3659.png"},"a4971795-4274-49dd-a161-6aa6e127e86e":{"name":"animation_31","sourceUrl":null,"frameSize":{"x":390,"y":353},"frameCount":1,"looping":true,"frameDelay":12,"version":"PDhkL2DfIiB5IgvDQhQr6CaUjRtt8Bgh","loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":353},"rootRelativePath":"assets/a4971795-4274-49dd-a161-6aa6e127e86e.png"},"dee93553-6461-49c6-8415-1b4c0eaf1727":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":390,"y":353},"frameCount":1,"looping":true,"frameDelay":12,"version":"PApmkfISzYu5szg4iwgJ.OG_UpcM_a2F","loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":353},"rootRelativePath":"assets/dee93553-6461-49c6-8415-1b4c0eaf1727.png"},"9276cfa6-a0ee-4fa9-b1e6-cbbe23344618":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":340,"y":312},"frameCount":1,"looping":true,"frameDelay":12,"version":"WKjlEMCNxjfrMmj1peXtQmzpo1uIF2_9","loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":312},"rootRelativePath":"assets/9276cfa6-a0ee-4fa9-b1e6-cbbe23344618.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerturn = 1;
var scene = createSprite(200, 200);
scene.setAnimation("animation_1");


var tie =0;
var game="tie";
var box1=0;
var box2=0;
var box3=0;
var box4=0;
var box5=0;
var box6=0;
var box7=0;
var box8=0;
var box9=0;

var box11=0;
var box12=0;
var box13=0;
var box14=0;
var box15=0;
var box16=0;
var box17=0;
var box18=0;
var box19=0;


var x1 = createSprite(60, 60);
x1.setAnimation("blank");
var x2 = createSprite(200, 60);
x2.setAnimation("blank");
var x3 = createSprite(335, 60);
x3.setAnimation("blank");
var x4 = createSprite(60, 200);
x4.setAnimation("blank");
var x5 = createSprite(200, 200);
x5.setAnimation("blank");
var x6 = createSprite(335, 200);
x6.setAnimation("blank");
var x7 = createSprite(60, 335);
x7.setAnimation("blank");
var x8 = createSprite(200, 335);
x8.setAnimation("blank");
var x9 = createSprite(335, 335);
x9.setAnimation("blank");




x1.visible="false";
x2.visible="false";
x3.visible="false";
x4.visible="false";
x5.visible="false";
x6.visible="false";
x7.visible="false";
x8.visible="false";
x9.visible="false";

x1.scale=0.4;
x2.scale=0.4;
x3.scale=0.4;
x4.scale=0.4;
x5.scale=0.4;
x6.scale=0.4;
x7.scale=0.4;
x8.scale=0.4;
x9.scale=0.4;





function draw() {
drawSprites();
xando();
win1();
win2();
tie2();
stopmovement();

}

function tie2() {
if (tie==9 && game=="tie") {
stroke("white");
textFont("Georgia");
textSize(50);
text("Draw", 140, 200);

   } 
}



    
function win1() {
  
  
 if (box1 == 1 && box2 == 1 && box3 == 1){
    game = "win";
    textSize(50);
    stroke("red");
    strokeWeight(5);
    text ("X WON",120,200);
    stroke("white");

  }
  
  if (box1 == 1 && box4 == 1 && box7 == 1){
      game = "win";
    textSize(50);
    stroke("red");
    strokeWeight(5);
    text ("X WON",120,200);
    stroke("white");
  }
  
  if (box1 == 1 && box5 == 1 && box9 == 1){
 game = "win";
    textSize(50);
    stroke("red");
    strokeWeight(5);
    text ("X WON",120,200);
    stroke("white");
  }
  
  if (box3 == 1 && box5 == 1 && box7 == 1){
         game = "win";
    textSize(50);
    stroke("red");
    strokeWeight(5);
    text ("X WON",120,200);
    stroke("white");
  }
  
  if (box2 == 1 && box5 == 1 && box8 == 1){
       game = "win";
    textSize(50);
    stroke("red");
    strokeWeight(5);
    text ("X WON",120,200);
    stroke("white");
  }
  
  if (box3 == 1 && box6 == 1 && box9 == 1){
        game = "win";
    textSize(50);
    stroke("red");
    strokeWeight(5);
    text ("X WON",120,200);
    stroke("white");
  }
  
  if (box4 == 1 && box5 == 1 && box6 == 1){
        game = "win";
    textSize(50);
    stroke("red");
    strokeWeight(5);
    text ("X WON",120,200);
    stroke("white");
  }
  
  if (box7 == 1 && box8 == 1 && box9 == 1){
        game = "win";
    textSize(50);
    stroke("red");
    strokeWeight(5);
    text ("X WON",120,200);
    stroke("white");
  }
  
  if (box1 == 2 && box2 == 2 && box3 == 2){
    game = "win";
    textSize(50);
    stroke("blue");
    strokeWeight(5);
    text ("O WON",120,200);
    stroke("white");

  }
  
  if (box1 == 2 && box4 == 2 && box7 == 2){
      game = "win";
    textSize(50);
    stroke("blue");
    strokeWeight(5);
    text ("O WON",120,200);
    stroke("white");
  }
  
  if (box1 == 2 && box5 == 2 && box9 == 2){
         game = "win";
    textSize(50);
    stroke("blue");
    strokeWeight(5);
    text ("O WON",120,200);
    stroke("white");
  }
  
  if (box2 == 2 && box5 == 2 && box8 == 2){
       game = "win";
    textSize(50);
    stroke("blue");
    strokeWeight(5);
    text ("O WON",120,200);
    stroke("white");
  }
  
  if (box3 == 2 && box6 == 2 && box9 == 2){
        game = "win";
    textSize(50);
    stroke("blue");
    strokeWeight(5);
    text ("O WON",120,200);
    stroke("white");
  }
  
  if (box4 == 2 && box5 == 2 && box6 == 2){
        game = "win";
    textSize(50);
    stroke("blue");
    strokeWeight(5);
    text ("O WON",120,200);
    stroke("white");
  }
  
  if (box7 == 2 && box8 == 2 && box9 == 2){
        game = "win";
    textSize(50);
    stroke("blue");
    strokeWeight(5);
    text ("O WON",120,200);
    stroke("white");
  }  
  
  if (box3 == 2 && box5 == 2 && box7 == 2){
        game = "win";
    textSize(50);
    stroke("blue");
    strokeWeight(5);
    text ("O WON",120,200);
    stroke("white");
  } 
}

function win2() {


}





function xando() {
if (playerturn==1 && mousePressedOver(x1) && box1==0 && box11==0) {
x1.setAnimation("animation_2"); 
playerturn=2;
box1=1;
tie=tie+1;
}

if (playerturn==1 && mousePressedOver(x2) && box2==0  && box12==0) {
x2.setAnimation("animation_2"); 
playerturn=2;
box2=1;
tie=tie+1;
}

if (playerturn==1 && mousePressedOver(x3) && box3==0  && box13==0) {
x3.setAnimation("animation_2"); 
playerturn=2;
box3=1;
tie=tie+1;
}

if (playerturn==1 && mousePressedOver(x4) && box4==0  && box14==0) {
x4.setAnimation("animation_2"); 
playerturn=2;
box4=1;
tie=tie+1;
}
if (playerturn==1 && mousePressedOver(x5) && box5==0  && box15==0) {
x5.setAnimation("animation_2"); 
playerturn=2;
box5=1;
tie=tie+1;
}
if (playerturn==1 && mousePressedOver(x6) && box6==0  && box16==0) {
x6.setAnimation("animation_2"); 
playerturn=2;
box6=1;
tie=tie+1;
}

if (playerturn==1 && mousePressedOver(x7) && box7==0  && box17==0) {
x7.setAnimation("animation_2"); 
playerturn=2;
box7=1;
tie=tie+1;
}

if (playerturn==1 && mousePressedOver(x8) && box8==0  && box18==0) {
x8.setAnimation("animation_2"); 
playerturn=2;
box8=1;
tie=tie+1;
}
if (playerturn==1 && mousePressedOver(x9) && box9==0   && box19==0) {
x9.setAnimation("animation_2"); 
playerturn=2;
box9=1;
tie=tie+1;
}

if (playerturn==2 && mousePressedOver(x1) && box1==0  && box11==0) {
x1.setAnimation("animation_3"); 
playerturn=1;
box1=2;
tie=tie+1;
}

if (playerturn==2 && mousePressedOver(x2) && box2==0  && box12==0) {
x2.setAnimation("animation_3"); 
playerturn=1;
box2=2;
tie=tie+1;
}

if (playerturn==2 && mousePressedOver(x3) && box3==0  && box13==0) {
x3.setAnimation("animation_3"); 
playerturn=1;
box3=2;
tie=tie+1;
}

if (playerturn==2 && mousePressedOver(x4) && box4==0  && box14==0) {
x4.setAnimation("animation_3"); 
playerturn=1;
box4=2;
tie=tie+1;
}
if (playerturn==2 && mousePressedOver(x5) && box5==0  && box15==0) {
x5.setAnimation("animation_3"); 
playerturn=1;
box5=2;
tie=tie+1;
}
if (playerturn==2 && mousePressedOver(x6) && box6==0  && box16==0) {
x6.setAnimation("animation_3"); 
playerturn=1;
box6=2;
tie=tie+1;
}

if (playerturn==2 && mousePressedOver(x7) && box7==0  && box17==0) {
x7.setAnimation("animation_3"); 
playerturn=1;
box7=2;
tie=tie+1;
}

if (playerturn==2 && mousePressedOver(x8) && box8==0  && box18==0) {
x8.setAnimation("animation_3"); 
playerturn=1;
box8=2;
tie=tie+1;
}
if (playerturn==2 && mousePressedOver(x9) && box9==0  && box19==0) {
x9.setAnimation("animation_3"); 
playerturn=1;
box9=2;
tie=tie+1;
}
   
}

function stopmovement() {

if (game=="win") {
playerturn=9;   
 }
  
}

  
  
    

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
