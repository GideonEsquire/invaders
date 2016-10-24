function Drop(x, y) {
    this.x = x;
    this.y = y;
    this.r = 5
    this.toDelete = false;

    this.evaporate = function() {
        this.toDelete = true;
    }

    
    this.show = function() {
        noStroke();
        fill(50, 0, 200);
        rectMode(CENTER);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.hits = function(flower) {
        var d = dist(this.x, this.y, flower.x, flower.y);
        return d < this.r + flower.r
    }

    this.move = function() {
        this.y = this.y - 4;
    }
}
