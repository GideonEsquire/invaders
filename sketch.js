var ship;
var drops = [];
var flowers = [];


function setup() {
    createCanvas(640, 480);
    ship = new Ship();
    for (var i = 0; i < 12; i++) {
        flowers[i] = new Flower((i*40 + 80), 80);
    }
}

function draw() {
    background(51);
    ship.show();
    ship.move();

    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
        for (var j = 0; j < flowers.length; j++) {
            if (drops[i].hits(flowers[j])) {
                flowers[j].shrink();
                if (flowers[j].r < 8) {
                    flowers.splice(j, 1);
                }
                drops[i].evaporate();
            }
        }
    }

    var edge = false;

    for (var i = 0; i < flowers.length; i++) {
        flowers[i].show();
        flowers[i].move();
        if (flowers[i].x > width - flowers[i].r || flowers[i].x < flowers[i].r) {
            edge = true;
        }
    }

    if (edge) {
        for (var i = 0; i < flowers.length; i++) {
            flowers[i].shiftDown();
        }
    }

    for (var i = 0; i < drops.length; i++) {
        if (drops[i].toDelete) {
            drops.splice(i, 1);
        }
    }
}

function keyReleased() {
    if (key != ' ') {
        ship.setdir(0);
    }
}

function keyPressed() {
    if (key === ' ') {
        var drop = new Drop(ship.x + 10, height-20);
        drops.push(drop);
    }
    if (keyCode === RIGHT_ARROW || keyCode == 76) {
        ship.setdir(1);
    } else if (keyCode === LEFT_ARROW || keyCode == 72) {
        ship.setdir(-1);
    }
}
