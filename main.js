img="";
status="";

function preload(){
  img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";
}

function modelLoaded(){
  console.log("Model Loaded");
  status=true;
  object_detector.detect(img,gotResult);
}

function gotResult(error,results){
  if (error){
    console.error(error);
  }
  else{
    console.log(results);
  }
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog",40,75);
    noFill();
    stroke('#000000');
    rect(30,60,450,350);
    
    fill("#FF0000");
    text("Cat",575,114);
    noFill();
    stroke('#000000');
    rect(300,100,300,300);
}