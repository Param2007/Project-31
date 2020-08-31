class Plinko {

    constructor(x, y, radius) {

        this.radius = radius;

        this.body = Bodies.circle(x, y, radius);
        World.add(world, this.body);

    }

    display() {

        var p = this.body.position;
        var angle = this.body.angle;

        rotate(angle);

        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
    }
}