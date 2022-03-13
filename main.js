function setup() {
    canvas= createCanvas(500, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    posenet.on('pose', gotposes);
    posenet= ml5.poseNet(video, modelloaded);
}

function preload() {

}

function draw() {

}

function abc() {
    save("filterpic.png");
}

function modelloaded() {
    console.log("qwerty");
}

nex= "";
ney= "";

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("x= " + results[0].pose.nose.x);
        console.log("y= " + results[0].pose.nose.y);
        nex= results[0].pose.nose.x;
        ney= results[0].pose.nose.y;
    }
}