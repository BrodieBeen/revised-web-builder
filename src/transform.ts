import Vector from "./vector";
import { ResizeRules, indexedResizeRules } from "./resizeRules";

export default class Transform{
    private pos: Vector;
    private dims: Vector;

    static fromVector(vector: Vector){
        return new Transform(vector, Vector.ZERO);
    }

    static fromPointPair(arr: Vector[]){
        const pos = arr[0];
        const dims = arr[1].sub(arr[0]);
        return new Transform(pos, dims);
    }

    private ensureDimensionPositivity(){
        if(this.dims.getX() < 0){
            this.dims.setX(Math.abs(this.dims.getX()));
            this.pos = new Vector(this.pos.getX() - this.dims.getX(), this.pos.getY());
        }if(this.dims.getY() < 0){
            this.dims.setY(Math.abs(this.dims.getY()));
            this.pos = new Vector(this.pos.getX(), this.pos.getY() - this.dims.getY());
        }
    }

    private ensureCoherence(){
        this.ensureDimensionPositivity();
    }

    constructor(pos: Vector, dims: Vector){
        this.pos = pos;
        this.dims = dims;

        this.ensureCoherence();
    }

    setPos(pos: Vector){
        this.pos = pos;
    }

    setDims(dims: Vector){
        this.dims = dims;
    }

    get(){
        return { pos: this.pos.clone(), dims: this.dims.clone() }
    }

    getPointPair(){
        const { pos, dims } = this;
        return [pos.clone(), pos.add(dims)];
    }

    /*resized(pos: Vector, node: number){
        const rule = indexedResizeRules[node];
        const pair = this.getPointPair();

        switch(rule){
            case ResizeRules.axay:
                pair[0] = pos.clone();
                break;
            case ResizeRules.ay:
                pair[0].setY(pos.getY());
                break;
            case ResizeRules.aybx:
                pair[0].setY(pos.getY());
                pair[1].setX(pos.getX());
                break;
            case ResizeRules.bx:
                pair[1].setX(pos.getX());
                break;
            case ResizeRules.bxby:
                pair[1] = pos.clone();
                break;
            case ResizeRules.by:
                pair[1].setY(pos.getY());
                break;
            case ResizeRules.axby:
                pair[0].setX(pos.getX());
                pair[1].setY(pos.getY());
                break;
            case ResizeRules.ax:
                pair[0].setX(pos.getX());
                break;
        }

        return Transform.fromPointPair(pair);
    }*/

    isColliding(transform: Transform){
        const { pos, dims } = this;
        const posB = transform.get().pos;
        const dimsB = transform.get().dims;

        return (pos.getX() < posB.getX() + dimsB.getX() && pos.getX() + dims.getX() > posB.getX()
        && pos.getY() < posB.getY() + dimsB.getY() && pos.getY() + dims.getY() > posB.getY());
    }

    isCollidingVector(vector: Vector){
        return this.isColliding(Transform.fromVector(vector));
    }

    clone(){
        return new Transform(this.pos.clone(), this.dims.clone());
    }
}