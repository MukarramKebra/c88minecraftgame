var canvas= new fabric.Canvas('mycanvas');
playerx=10;
playery=10;
blockwidth=30;
blockheight=30;
playerobject="";
blockobject="";

function playerupdate(){
fabric.Image.fromURL ("player.png",function(Img){
playerobject=Img;
playerobject.scaleToWidth(150);
playerobject.scaleToHeight(150);
playerobject.set({top:playery, left:playerx});
canvas.add(playerobject);
}
);
}
function newimage(getimage){
fabric.Image.fromURL(getimage,function(Img){
blockobject=Img;
blockobject.scaleToWidth(blockwidth);
blockobject.scaleToHeight(blockheight);
blockobject.set({top:playery, left:playerx});
canvas.add(blockobject);
})
}
window.addEventListener("keydown",key_down);
function key_down(e){
keypressed=e.keyCode;
console.log(keypressed);
if(e.shiftKey==true && keypressed=='80'){
console.log("shift and p have been pressed");
blockheight=blockheight+10;
blockwidth=blockwidth+10;
document.getElementById("currentheight").innerHTML=blockheight;
document.getElementById("currentwidth").innerHTML=blockwidth;
}
if(e.shiftKey==true && keypressed=='77'){
 console.log("shift and m have been pressed");
 blockheight=blockheight-10;
 blockwidth=blockwidth-10;
 document.getElementById("currentheight").innerHTML=blockheight;
 document.getElementById("currentwidth").innerHTML=blockwidth;
}
if(keypressed=='38'){
up();
console.log("up");
}
if(keypressed=='40'){
    down();
    console.log("down");
    }
 if(keypressed=='37'){
        left();
        console.log("left");
        }
if(keypressed=='39'){
            right();
       console.log("right");
            }

 if(keypressed=='87'){
  newimage('wall.jpg');
  console.log("w");
}
if(keypressed=='71'){
    newimage('ground.png');
    console.log("g");
  }
  if(keypressed=='76'){
    newimage('light_green.png');
    console.log("l");
  }
  if(keypressed=='84'){
    newimage('trunk.jpg');
    console.log("t");
  }
  if(keypressed=='82'){
    newimage('roof.jpg');
    console.log("r");
  }
  if(keypressed=='89'){
    newimage('yellow_wall.png');
    console.log("y");
  }
  if(keypressed=='68'){
    newimage('dark_green.png');
    console.log("d");
  }
  if(keypressed=='85'){
    newimage('unique.png');
    console.log("u");
  }
  if(keypressed=='67'){
    newimage('cloud.jpg');
    console.log("c");
  }
  
}
function up(){
if(playery>=0){
playery=playery-blockheight;
console.log("blockheight="+blockheight);
canvas.remove(playerobject);
playerupdate();


}
}
function down(){
  if(playery<=500){
    playery=playery+blockheight;
    console.log("blockheight="+blockheight);
    canvas.remove(playerobject);
    playerupdate();
  }
}
function right(){
  if(playerx<=850){
    playerx=playerx+blockwidth;
    console.log("blockwidth="+blockwidth)
    canvas.remove(playerobject);
    playerupdate();

  }
}
function left(){
  if(playerx>=0){
    playerx=playerx-blockwidth;
    console.log("blockwidth="+blockwidth)
    canvas.remove(playerobject);
    playerupdate();
  }
}