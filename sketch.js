var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1 = createSprite(100,580,180,20);
    surface1.shapeColor = "green";

    surface2 = createSprite(300,580,180,20);
    surface2.shapeColor = "blue";

    surface3 = createSprite(500,580,180,20);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(700,580,180,20);
    surface4.shapeColor = "black";

    //create box sprite and give velocity

    box = createSprite(random(20,750),300,20,20);
    box.velocityX = 3;
    box.velocityY = 4;
    box.shapeColor = "white";

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();

    //add condition to check if box touching surface and make it box
    
    if(box.isTouching(surface1) && box.bounceOff(surface1)){
        box.shapeColor = "green";
    }

    if(box.isTouching(surface2) && box.bounceOff(surface2)){
        box.shapeColor = "blue";
    }

    if(box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColor = "yellow";
    }

    if(box.isTouching(surface4) && box.bounceOff(surface4)){
        box.shapeColor = "black";
    }

    box.bounceOff(edges);

    drawSprites();
}
