var canvas = new fabric.Canvas("myCanvas");

player_y = 10;
player_x = 10;

block_image_width = 40;
block_image_height = 40;

var player_object = "";
var block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img ;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);

        });
}

function new_img(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        block_object = Img ;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_object);

        });
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
console.log(keypressed);
if(e.shiftKey==true&&keypressed == '80'){
 block_image_width=block_image_width+10;
 block_image_height=block_image_height+10;   
 document.getElementById("current_height").innerHTML=block_image_height;
 document.getElementById("current_width").innerHTML=block_image_width;
}

if(e.shiftKey==true&&keypressed == '77'){
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;   
    document.getElementById("current_height").innerHTML=block_image_height;
    document.getElementById("current_width").innerHTML=block_image_width;
   }


if(keypressed=='38'){
    up();
}

if(keypressed=='40'){
    down();
}

if(keypressed=='37'){
    left();
}

if(keypressed=='39'){
    right();
}

if(keypressed=='67'){
    new_img('cloud.jpg');
}

if(keypressed=='68'){
    new_img('dark_green.png');
}

if(keypressed=='71'){
    new_img('ground.png');
}

if(keypressed=='76'){
    new_img('light_green.png');
}

if(keypressed=='82'){
    new_img('roof.jpg');
}

if(keypressed=='84'){
    new_img('trunk.jpg');
}

if(keypressed=='85'){
    new_img('unique.png');
}

if(keypressed=='87'){
    new_img('wall.jpg');
}

if(keypressed=='89'){
    new_img('yellow_wall.png');
}
}

function up(){
    if(player_y>=0){
        player_y = player_y-block_image_height;
        canvas.remove(player_object);
        player_update();
        console.log("block_image_height= "+block_image_height);
        console.log("when up aroow is pressed , x= "+player_x+" , y= "+player_y);

    }
}

function left(){
    if(player_x>=0){
        player_x = player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
        console.log("block_image_width= "+block_image_width);
        console.log("when up aroow is pressed , x= "+player_x+" , y= "+player_y);

    }
}

function down(){
    if(player_y<=500){
        player_y = player_y+block_image_height;
        canvas.remove(player_object);
        player_update();
        console.log("block_image_height= "+block_image_height);
        console.log("when up aroow is pressed , x= "+player_x+" , y= "+player_y);

    }
}

function right(){
    if(player_x<=850){
        player_x = player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
        console.log("block_image_width= "+block_image_width);
        console.log("when up aroow is pressed , x= "+player_x+" , y= "+player_y);

    }
}








