window.alert("the webpage has been loaded");

function setup() {
    createCanvas(700, 500, WEBGL);
    angleMode(DEGREES, 360,180,90);
}

let img; 

function preload(){
img = loadImage('./images/Ghost.jpg');
}


   

    
  
    

function draw(){
    background(145, 7, 132);
    circle(width/2, height/2, 50);
    background(145, 7, 132);
    stroke(20, 20, 100);
  orbitControl(30,30,30,30,30,30);
    image(img, 0, 0, 700, 500);

    


   
}




