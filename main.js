song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
righttWristY = 0;
scoreLeftWrist = 0;
scoreLeftWrist = 0;

function preload(){
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(550, 500);
    canvas.center();
     
    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }

function draw(){
    image(video, 0, 0, 600, 500);

    fill("#ff0000");
    stroke("#FF0000");

    song1.isPlaying();

   if(scoreLeftWrist > 0.2){
    circle(leftWristX, leftWristY, 20);
    song2.stop();

    if(song1 == false){
        song1.play();
    }
   }
   
   if(scoreRightWrist > 0.2){
    circle(rightWristX, rightWristY, 20);
    song1.stop();
    
    if(song2 == false){
        song2.play();
    }
   }
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
 

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY "+ rightWristY);
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}