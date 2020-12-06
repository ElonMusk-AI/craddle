class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            angularStiffness: 1,
            length: 220
        };
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y - 250;
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    display(){
        if (this.Rope.bodyA) {
            var pointA = this.Rope.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3.5);
            stroke("62, 0, 251");
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
    }
}