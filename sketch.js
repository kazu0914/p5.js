// https://qiita.com/Damien/items/5f8d4691723b01f370b9
var noiseScale = 800;
var canvas;

function canvasSetup(){
    background(21, 8, 50);
    for(var i = 0; i < nums; i++){
        particles_a[i] = new Particle(random(0, width),random(0,height));
        particles_b[i] = new Particle(random(0, width),random(0,height));
        particles_c[i] = new Particle(random(0, width),random(0,height));
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    canvasSetup;
}

function setup() {
　　canvas = createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(255);
    for (var y = 0; y <= 1000; y = y + 500) {
        for (var x = 0; x <= 1000; x = x + 500) {
            noFill();
            stroke(255, 147, 206);
            rotateX(frameCount * 0.01);
            rotateY(frameCount * 0.01);
            box(200, 200, 200);
        }
    }
}