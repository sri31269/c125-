noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
   video.size(550,500); 
   canvas=createCanvas(550,500);
   canvas.position(560,150);
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
   
}
function draw(){
background('purple');
document.getElementById("square_side").innerHTML="width and height of the square will be="+difference+"px";
fill('black');
stroke('yellow');
square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.X;
noseY=results[0].pose.nose.Y;
console.log("noseX="+noseX+"noseY-="+noseY);
leftWristX=results[0].pose.leftWrist.X;
rightWristX=results[0].pose.rightWrist.X;
difference=floor(leftWristX-rightWristX);
console.log("leftWristX="+leftWristX+"rightWristX"+rightWristX+"difference="+difference);
}

}