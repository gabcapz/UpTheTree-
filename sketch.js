const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player, back, back1, bak2;

function preload(){
    walkingRightAnimation = loadAnimation("Right.png", "walkingRight2.png", "Right3.png", "walkingRight4.png");
    walkingLeftAnimation = loadAnimation("Left.png", "walkingLeft2.png", "Left3.png", "walkingLeft4.png");
    startImage = loadImage("start.png");
    backImage = loadImage("Tree.png");
    finishImage = loadImage("finish.jpg");
    winImage = loadImage("youWin.jpg");
    
}

function setup(){
    createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;
    
    back = createSprite(306, -746, 1200, 600);
    back.addImage("back", backImage); 

    finish = createSprite(300, -2200, 600, 100);
    finish.addImage("finish", finishImage);

    player = createSprite(500, 550, 10, 20);
    player.addImage("walking", startImage);

    // first section of first level
    platform = createSprite(400, 500, 100, 10);
    platform.shapeColor = "darkGreen";
    platform1 = createSprite(470, 600, 250, 10);
    platform1.shapeColor = "darkGreen";
    platform2 = createSprite(330, 450, 50, 10);
    platform2.shapeColor = "darkGreen";
    platform3 = createSprite(150, 340, 150, 10);
    platform3.shapeColor = "darkGreen";
    platform4 = createSprite(470, 300, 250, 10);
    platform4.shapeColor = "darkGreen";
    platform5 = createSprite(250, 260, 50, 10);
    platform5.shapeColor = "darkGreen";
    platform6 = createSprite(430, 220, 50, 10);
    platform6.shapeColor = "darkGreen";
    platform7 = createSprite(280, 170, 50, 10);
    platform7.shapeColor = "darkGreen";
    platform8 = createSprite(450, 60, 150, 10);
    platform8.shapeColor = "darkGreen";
    platform9 = createSprite(160, 60, 150, 10);
    platform9.shapeColor = "darkGreen";
    platform10 = createSprite(160, -60, 100, 10);
    platform10.shapeColor = "darkGreen";
    platform11 = createSprite(450, -70, 110, 10);
    platform11.shapeColor = "darkGreen";
    platform12 = createSprite(260, -140, 50, 10);
    platform12.shapeColor = "darkGreen";
    platform13 = createSprite(350, -170, 50, 10);
    platform13.shapeColor = "darkGreen";
    platform14 = createSprite(130, -250, 100, 10);
    platform14.shapeColor = "darkGreen";
    platform15 = createSprite(260, -260, 50, 10);
    platform15.shapeColor = "darkGreen";
    platform16 = createSprite(150, 530, 150, 10);
    platform16.shapeColor = "darkGreen";
    platform17 = createSprite(230, 480, 50, 10);
    platform17.shapeColor = "darkGreen";
    platform18 = createSprite(310, 0, 30, 10);
    platform18.shapeColor = "darkGreen";

        // second section of first level
        platform19 = createSprite(400, -400, 100, 10);
        platform19.shapeColor = "darkGreen";
        platform20 = createSprite(470, -300, 250, 10);
        platform20.shapeColor = "darkGreen";
        platform21 = createSprite(330, -450, 50, 10);
        platform21.shapeColor = "darkGreen";
        platform22 = createSprite(150, -360, 150, 10);
        platform22.shapeColor = "darkGreen";
        platform23 = createSprite(470, -600, 250, 10);
        platform23.shapeColor = "darkGreen";
        platform24 = createSprite(250, -620, 50, 10);
        platform24.shapeColor = "darkGreen";
        platform25 = createSprite(430, -670, 50, 10);
        platform25.shapeColor = "darkGreen";
        platform26 = createSprite(280, -700, 50, 10);
        platform26.shapeColor = "darkGreen";
        platform27 = createSprite(450, -840, 150, 10);
        platform27.shapeColor = "darkGreen";
        platform28 = createSprite(160, -840, 150, 10);
        platform28.shapeColor = "darkGreen";
        platform29 = createSprite(160, -960, 100, 10);
        platform29.shapeColor = "darkGreen";
        platform30 = createSprite(450, -970, 110, 10);
        platform30.shapeColor = "darkGreen";
        platform31 = createSprite(260, -1030, 50, 10);
        platform31.shapeColor = "darkGreen";
        platform32 = createSprite(350, -1070, 50, 10);
        platform32.shapeColor = "darkGreen";
        platform33 = createSprite(130, -1150, 100, 10);
        platform33.shapeColor = "darkGreen";
        platform34 = createSprite(260, -1160, 50, 10);
        platform34.shapeColor = "darkGreen";
        platform35 = createSprite(150, -550, 150, 10);
        platform35.shapeColor = "darkGreen";
        platform36 = createSprite(230, -380, 50, 10);
        platform36.shapeColor = "darkGreen";
        platform37 = createSprite(310, -890, 30, 10);
        platform37.shapeColor = "darkGreen";

                // third section of first level
                platform38 = createSprite(400, -1300, 100, 10);
                platform38.shapeColor = "darkGreen";
                platform39 = createSprite(470, -1200, 250, 10);
                platform39.shapeColor = "darkGreen";
                platform40 = createSprite(330, -1350, 50, 10);
                platform40.shapeColor = "darkGreen";
                platform41 = createSprite(150, -1460, 150, 10);
                platform41.shapeColor = "darkGreen";
                platform42 = createSprite(470, -1500, 250, 10);
                platform42.shapeColor = "darkGreen";
                platform43 = createSprite(250, -1520, 50, 10);
                platform43.shapeColor = "darkGreen";
                platform44 = createSprite(430, -1570, 50, 10);
                platform44.shapeColor = "darkGreen";
                platform45 = createSprite(280, -1630, 50, 10);
                platform45.shapeColor = "darkGreen";
                platform46 = createSprite(450, -1740, 150, 10);
                platform46.shapeColor = "darkGreen";
                platform47 = createSprite(160, -1740, 150, 10);
                platform47.shapeColor = "darkGreen";
                platform48 = createSprite(160, -1860, 100, 10);
                platform48.shapeColor = "darkGreen";
                platform49 = createSprite(450, -1870, 110, 10);
                platform49.shapeColor = "darkGreen";
                platform50 = createSprite(260, -1930, 50, 10);
                platform50.shapeColor = "darkGreen";
                platform51 = createSprite(350, -1970, 50, 10);
                platform51.shapeColor = "darkGreen";
                platform52 = createSprite(130, -2050, 100, 10);
                platform52.shapeColor = "darkGreen";
                platform53 = createSprite(260, -2070, 50, 10);
                platform53.shapeColor = "darkGreen";
                platform54 = createSprite(150, -1250, 150, 10);
                platform54.shapeColor = "darkGreen";
                platform55 = createSprite(230, -1280, 50, 10);
                platform55.shapeColor = "darkGreen";
                platform56 = createSprite(310, -1790, 30, 10);
                platform56.shapeColor = "darkGreen";

                win = createSprite(300, 300, 600, 600);
                win.addImage("win", winImage);
                win.scale = 0.8;
    // player = new Player(500, 500, 70, 100);

    // banana = new Banana(50, 550, 50, 50);

    // platform = new Platform(400, 500, 100, 10);
    // platform1 = new Platform(470, 600, 250, 10);
    // platform2 = new Platform(330, 450, 50, 10);
    // platform3 = new Platform(150, 360, 150, 10);
    // platform4 = new Platform(470, 300, 250, 10);
    // platform5 = new Platform(250, 260, 50, 10);

}

function draw(){
    background(255);
    Engine.update(engine);

    camera.position.y = player.y;

    win.visible = false;

    if(keyWentDown("space")){
        player.velocityY -= 15;
    }

    player.velocityY = player.velocityY + 0.8;
    
    if(keyWentDown(LEFT_ARROW)){
        player.x -= 20;
        player.addAnimation("walking", walkingLeftAnimation);
    }

    if(keyWentDown(RIGHT_ARROW)){
        player.x += 20;
        player.addAnimation("walking", walkingRightAnimation);
    }
    
    if(player.y < -2115){
        // console.log("You Won!");
        camera.position.y = 300;
        win.visible = true;
    }

    player.collide(platform);  
    player.collide(platform1);    
    player.collide(platform2);    
    player.collide(platform3);    
    player.collide(platform4);    
    player.collide(platform5);    
    player.collide(platform6);   
    player.collide(platform7);  
    player.collide(platform8);    
    player.collide(platform9);  
    player.collide(platform10);    
    player.collide(platform11);    
    player.collide(platform12);    
    player.collide(platform13);    
    player.collide(platform14);    
    player.collide(platform15);    
    player.collide(platform16);    
    player.collide(platform17);    
    player.collide(platform18);    

    player.collide(platform19);  
    player.collide(platform20);    
    player.collide(platform21);    
    player.collide(platform22);    
    player.collide(platform23);    
    player.collide(platform24);    
    player.collide(platform25);   
    player.collide(platform26);  
    player.collide(platform27);    
    player.collide(platform28);  
    player.collide(platform29);    
    player.collide(platform30);    
    player.collide(platform31);    
    player.collide(platform32);    
    player.collide(platform33);    
    player.collide(platform34);    
    player.collide(platform35);    
    player.collide(platform36);    
    player.collide(platform37); 

    player.collide(platform38);  
    player.collide(platform39);    
    player.collide(platform40);    
    player.collide(platform41);    
    player.collide(platform42);    
    player.collide(platform43);    
    player.collide(platform44);   
    player.collide(platform45);  
    player.collide(platform46);    
    player.collide(platform47);  
    player.collide(platform48);    
    player.collide(platform49);    
    player.collide(platform50);    
    player.collide(platform51);    
    player.collide(platform52);    
    player.collide(platform53);    
    player.collide(platform54);    
    player.collide(platform55);    
    player.collide(platform56); 

    // console.log(player.x);
    // console.log(player.y);

    drawSprites();

    // banana.display();
    // platform.display();
    // platform1.display();
    // platform2.display();
    // platform3.display();
    // platform4.display();
    // platform5.display();
    // player.display();

}