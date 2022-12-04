function preload(){


}

function setup(){
canvas= createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(300,300);
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    console.log("nosex=" + results[0].pose.nose.x);
    console.log("nosey=" + results[0].pose.nose.y);
}
}

function modelloaded(){
    console.log("Model Has Been Loaded");

}

function draw(){
image(video,0,0,300,300);


}

function take_snapshot(){

    save("myfilterimage.png");
}