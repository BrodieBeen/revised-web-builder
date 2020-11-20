export default class Vector{
    static readonly ZERO = new Vector(0);

    private x: number;
    private y: number;

    constructor(x: number, y = x){
        this.x = x;
        this.y = y;
    }

    add(vector: Vector){
        return new Vector(this.x + vector.getX(), this.y + vector.getY());
    }

    sub(vector: Vector){
        return new Vector(this.x - vector.getX(), this.y - vector.getY());
    }

    mult(vector: Vector){
        return new Vector(this.x * vector.getX(), this.y * vector.getY());
    }

    div(vector: Vector){
        return new Vector(this.x / vector.getX(), this.y / vector.getY());
    }

    abs(){
        return new Vector(Math.abs(this.x), Math.abs(this.y));
    }

    getMag(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y,2));
    }

    normalized(){
        const mag = this.getMag();
        let vector = this.clone();
        vector = vector.mult(new Vector(mag));
        return vector;
    }

    dist(vector: Vector){
        return this.sub(vector).abs().getMag();
    }

    newMag(mag: number){
        let vector = this.clone().normalized();
        vector.x *= mag;
        vector.y *= mag;
        return vector;
    }

    setX(value: number){
        this.x = value;
    }

    setY(value: number){
        this.y = value;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    clone(){
        return new Vector(this.x, this.y)
    }
}