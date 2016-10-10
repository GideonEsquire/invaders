function Ship() {
    this.x = width/2;
    this.xdir = 0;

    this.show = function() {
        fill(255)
        rectMode(CENTER);

        triangle(this.x,height - 2,this.x + 20, height - 2,this.x + 10,height - 22);
    }

    this.setdir = function(dir) {
        this.xdir = dir;
    }

    this.move = function(dir) {
        this.x += this.xdir * 7;
        if (this.x < 1) {
            this.x = 0;
        }
        if (this.x > width - 20) {
            this.x = width - 20;
        }
    }

}
